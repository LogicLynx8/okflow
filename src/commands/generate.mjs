/**
 * generate：提交生成任务，可选轮询到完成。
 *
 * prompt 支持 --prompt-file，因为中文长文本经 shell 转义极易损坏；
 * config 原样透传不做校验，避免 CLI 成为参数映射的第二处真相来源。
 */
import { readFileSync } from 'node:fs';

import { submitGeneration, uploadFile } from '../lib/api.mjs';
import { required, num, UsageError } from '../lib/args.mjs';
import { info, ok, warn, step, json } from '../lib/output.mjs';
import { pollUntilDone } from '../lib/poll.mjs';

export function help() {
  console.log(`
用法: okflow generate --model <模型名> (--prompt <文本> | --prompt-file <路径>) [选项]

提交生成任务。默认提交后立即返回 taskId，加 --wait 则轮询到完成。

必填:
  --model <名称>          模型名，用 'okflow models' 查询

提示词（二选一）:
  --prompt <文本>         直接传文本，适合短提示词
  --prompt-file <路径>    从文件读取，长提示词或含特殊字符时必须用这个

选项:
  --config <JSON>         模型参数，如 '{"resolution":"1080p","duration":"15"}'
  --config-file <路径>    从文件读取模型参数
  --images <url1,url2>    输入图片，用于图生图/图生视频
  --image-file <path1,path2>  Upload local reference images before generation
  --upload-timeout <seconds>  Upload request timeout, default 300
  --wait                  轮询到任务完成再退出
  --timeout <秒>          轮询总超时，默认 600；视频建议 1200 以上
  --interval <秒>         轮询间隔，默认 10
  --json                  只输出最终 JSON，不打印进度
  --base-url <url>        覆盖 API 地址

示例:
  okflow generate --model <模型> --prompt "一只橘猫在窗台上" --wait

  okflow generate --model <模型> --prompt-file ./prompt.txt \\
    --config '{"resolution":"1080p","duration":"15","ratio":"16:9"}' \\
    --wait --timeout 1200
`);
}

/** 解析 prompt：--prompt 与 --prompt-file 二选一。 */
function resolvePrompt(args) {
  const hasInline = args.prompt !== undefined && args.prompt !== true;
  const hasFile = args['prompt-file'] !== undefined && args['prompt-file'] !== true;

  if (hasInline && hasFile) {
    throw new UsageError('--prompt 和 --prompt-file 只能传一个');
  }
  if (hasFile) {
    return readFileSync(String(args['prompt-file']), 'utf8').trim();
  }
  if (hasInline) {
    return String(args.prompt);
  }
  throw new UsageError('必须提供 --prompt 或 --prompt-file');
}

/** 解析 config：合并 --config-file 与 --config，后者优先。 */
function resolveConfig(args) {
  let config = {};

  if (args['config-file'] !== undefined && args['config-file'] !== true) {
    const raw = readFileSync(String(args['config-file']), 'utf8');
    config = { ...config, ...parseJson(raw, '--config-file 内容') };
  }
  if (args.config !== undefined && args.config !== true) {
    config = { ...config, ...parseJson(String(args.config), '--config') };
  }
  return config;
}

function parseListArg(args, key) {
  const value = args[key];
  if (value === undefined) return [];
  if (value === true) throw new UsageError(`--${key} requires a value`);
  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

function parseJson(raw, label) {
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new Error('必须是 JSON 对象');
    }
    return parsed;
  } catch (err) {
    throw new UsageError(`${label} 不是合法的 JSON 对象: ${err.message}`);
  }
}

export async function run(args) {
  const model = required(args, 'model', "用 'okflow models' 查询可用模型名");
  const prompt = resolvePrompt(args);
  const config = { ...resolveConfig(args), prompt };
  const quiet = Boolean(args.json);
  const baseUrl = args['base-url'];
  const images = parseListArg(args, 'images');
  const imageFiles = parseListArg(args, 'image-file');
  const uploadTimeout = num(args, 'upload-timeout', 300);

  for (const [index, filePath] of imageFiles.entries()) {
    if (!quiet) step(`Uploading reference image ${index + 1}/${imageFiles.length}: ${filePath}`);
    const uploaded = await uploadFile({
      filePath,
      baseUrl,
      timeout: uploadTimeout,
    });
    if (!uploaded?.url) throw new Error(`Upload response missing URL for ${filePath}`);
    images.push(uploaded.url);
  }

  if (!quiet) {
    info(`提交任务: model=${model}`);
    step(`提示词长度: ${prompt.length} 字`);
    const extraKeys = Object.keys(config).filter((k) => k !== 'prompt');
    if (extraKeys.length) step(`附加参数: ${extraKeys.join(', ')}`);
    if (images.length) step(`输入图片: ${images.length} 张`);
  }

  const submitted = await submitGeneration({
    model,
    config,
    images: images.length ? images : undefined,
    baseUrl,
    timeout: 120,
  });
  const taskId = submitted?.task_id;

  if (!taskId) {
    if (!quiet) warn('响应中没有 task_id，可能是同步返回');
    json(submitted);
    return 0;
  }

  if (!args.wait) {
    if (quiet) {
      json(submitted);
    } else {
      ok(`任务已提交: ${taskId}`);
      step(`查询状态: okflow status ${taskId}`);
    }
    return 0;
  }

  const final = await pollUntilDone(taskId, {
    baseUrl,
    totalTimeout: num(args, 'timeout', 600),
    interval: num(args, 'interval', 10),
    quiet,
  });

  json(final.data);
  return final.success ? 0 : 1;
}
