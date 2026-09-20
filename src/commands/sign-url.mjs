/** Refresh one expired OSS URL through the OKFlow OpenAPI. */
import { signOssUrl } from '../lib/api.mjs';
import { num, positional, UsageError } from '../lib/args.mjs';
import { info, json, ok, step } from '../lib/output.mjs';

export function help() {
  console.log(`
用法: okflow sign-url <url> [选项]

刷新一个 OKFlow OSS URL 的临时签名。不会重新上传文件，也不会提交生成任务。

选项:
  --json             只输出响应 JSON
  --base-url <url>   覆盖 API 地址
  --timeout <秒>     请求超时，默认 60

示例:
  okflow sign-url "https://bucket.example.com/anchor.png?旧签名" --json
`);
}

function validateUrl(value) {
  const url = String(value).trim();
  if (!url) throw new UsageError('URL 不能为空');
  if (url.length > 2048) throw new UsageError('URL 长度不能超过 2048 个字符');
  try {
    const parsed = new URL(url);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('unsupported protocol');
  } catch {
    throw new UsageError('URL 必须是合法的 http 或 https 地址');
  }
  return url;
}

export async function run(args) {
  const url = validateUrl(positional(args, 0, { name: 'url', usage: 'okflow sign-url <url>' }));
  const data = await signOssUrl(url, {
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
  });
  if (!data || typeof data.signed_url !== 'string') {
    throw new Error('签名响应缺少 signed_url');
  }

  if (args.json) {
    json(data);
    return 0;
  }

  ok('URL 签名已刷新');
  step(`URL: ${data.signed_url}`);
  info('请持久化 canonical URL，不要长期保存临时签名参数');
  return 0;
}
