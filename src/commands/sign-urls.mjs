/** Refresh a JSON file of OSS URLs through the OKFlow batch OpenAPI. */
import { mkdir, open, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { signOssUrls } from '../lib/api.mjs';
import { num, UsageError } from '../lib/args.mjs';
import { info, json, ok, step } from '../lib/output.mjs';

const MAX_URLS = 100;

export function help() {
  console.log(`
用法: okflow sign-urls <input.json> [选项]

批量刷新 JSON 文件中的 OKFlow OSS URL。不会重新上传文件，也不会提交生成任务。
输入可以是 ["url1", "url2"]，或 {"urls":["url1", "url2"]}。

选项:
  --output <路径>   将 {"signed_urls":[...]} 写入文件；默认不写文件
  --force           允许覆盖已经存在的输出文件
  --json            只输出响应 JSON（指定 --output 时仍输出同一结果）
  --base-url <url>  覆盖 API 地址
  --timeout <秒>    请求超时，默认 60

示例:
  okflow sign-urls ./anchor-urls.json --output ./anchor-urls-refreshed.json --json
`);
}

function inputPath(args) {
  const positionalPath = args._[0];
  const optionPath = args.input;
  if (positionalPath !== undefined && optionPath !== undefined) {
    throw new UsageError('输入文件请使用位置参数，不要同时传 --input');
  }
  const value = positionalPath ?? optionPath;
  if (value === undefined || value === true || !String(value).trim()) {
    throw new UsageError('缺少输入 JSON 文件，用法: okflow sign-urls <input.json>');
  }
  return resolve(String(value));
}

function parseUrls(value, filePath) {
  let parsed;
  try {
    parsed = JSON.parse(value);
  } catch (error) {
    throw new UsageError(`输入文件不是合法 JSON: ${filePath}（${error.message}）`);
  }

  const urls = Array.isArray(parsed) ? parsed : parsed && parsed.urls;
  if (!Array.isArray(urls)) throw new UsageError('输入 JSON 必须是 URL 数组或包含 urls 数组的对象');
  if (urls.length < 1) throw new UsageError('URL 列表不能为空');
  if (urls.length > MAX_URLS) throw new UsageError(`URL 数量不能超过 ${MAX_URLS}`);

  return urls.map((item, index) => {
    if (typeof item !== 'string' || !item.trim()) {
      throw new UsageError(`urls[${index}] 必须是非空字符串`);
    }
    const url = item.trim();
    if (url.length > 2048) throw new UsageError(`urls[${index}] 长度不能超过 2048 个字符`);
    try {
      const parsedUrl = new URL(url);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) throw new Error('unsupported protocol');
    } catch {
      throw new UsageError(`urls[${index}] 必须是合法的 http 或 https 地址`);
    }
    return url;
  });
}

function outputPath(args) {
  if (args.output === undefined) return undefined;
  if (args.output === true || !String(args.output).trim()) throw new UsageError('--output 需要提供文件路径');
  return resolve(String(args.output));
}

export async function run(args) {
  const filePath = inputPath(args);
  const urls = parseUrls(await readFile(filePath, 'utf8'), filePath);
  const data = await signOssUrls(urls, {
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
  });
  if (!data || !Array.isArray(data.signed_urls) || data.signed_urls.length !== urls.length) {
    throw new Error('签名响应缺少与输入数量一致的 signed_urls');
  }
  const result = { signed_urls: data.signed_urls };
  const destination = outputPath(args);
  if (destination) {
    let handle;
    try {
      await mkdir(dirname(destination), { recursive: true });
      handle = await open(destination, args.force ? 'w' : 'wx');
      await handle.writeFile(`${JSON.stringify(result, null, 2)}\n`, 'utf8');
    } catch (error) {
      if (error.code === 'EEXIST') {
        throw new UsageError(`输出文件已存在: ${destination}；确认后使用 --force 覆盖`);
      }
      throw error;
    } finally {
      await handle?.close();
    }
  }

  if (args.json) {
    json(result);
    return 0;
  }

  ok(`已刷新 ${urls.length} 个 URL`);
  if (destination) step(`结果已写入: ${destination}`);
  else info('使用 --output 将结果保存为 JSON 文件');
  return 0;
}
