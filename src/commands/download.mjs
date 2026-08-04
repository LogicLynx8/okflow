/**
 * download：把已完成任务的产物下载到本地。
 *
 * 产物 URL 分散在多个字段（images[].url / video_url / audio_url / 顶层 oss_video_url），
 * 不同模型填不同的字段，所以这里全量扫一遍去重，而不是按模型类型分支判断 ——
 * 新增模型时不需要改这里。
 */
import { createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { join } from 'node:path';

import { getTaskStatus } from '../lib/api.mjs';
import { positional } from '../lib/args.mjs';
import { info, ok, warn, step, json } from '../lib/output.mjs';

const ASSET_FIELDS = ['url', 'video_url', 'audio_url', 'last_frame_url'];

export function help() {
  console.log(`
用法: okflow download <taskId> [选项]

下载已完成任务的产物（图片/视频/音频）到本地。

选项:
  --dir <目录>       保存目录，默认 ./downloads/<taskId>
  --json             只输出结果 JSON，不打印进度
  --base-url <url>   覆盖 API 地址

说明:
  任务未完成时不会下载，会提示先用 status 查看进度。
  同名文件已存在会被覆盖。

示例:
  okflow download abc-123
  okflow download abc-123 --dir ./out
`);
}

/** 扫描状态响应里所有产物 URL，按出现顺序去重。 */
function collectUrls(data) {
  const seen = new Set();
  const items = [];
  const push = (url) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    items.push(url);
  };

  push(data?.oss_video_url);
  push(data?.video_url);
  push(data?.audio_url);
  for (const img of data?.images ?? []) {
    for (const field of ASSET_FIELDS) push(img?.[field]);
  }
  return items;
}

/** 从 URL 推导文件名。OSS 地址常带 URL 编码的路径，需要先解码。 */
function fileNameFrom(url, index) {
  try {
    const path = decodeURIComponent(new URL(url).pathname);
    const base = path.split('/').filter(Boolean).pop();
    if (base && base.includes('.')) return base;
  } catch {
    // URL 不合法时走下面的兜底命名
  }
  return `asset_${index + 1}`;
}

async function downloadOne(url, dest) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`下载失败 (HTTP ${resp.status}): ${url}`);
  await pipeline(Readable.fromWeb(resp.body), createWriteStream(dest));
}

export async function run(args) {
  const taskId = positional(args, 0, { name: 'taskId', usage: 'okflow download <taskId>' });
  const quiet = Boolean(args.json);
  const data = await getTaskStatus(taskId, { baseUrl: args['base-url'] });

  if (data?.status !== 'completed' && data?.status !== 'success') {
    if (!quiet) {
      warn(`任务未完成（当前状态: ${data?.status}），暂无产物可下载`);
      step(`查看进度: okflow status ${taskId} --wait`);
    }
    return 1;
  }

  const urls = collectUrls(data);
  if (!urls.length) {
    if (!quiet) warn('任务已完成但响应里没有产物 URL');
    json(data);
    return 1;
  }

  const dir = args.dir && args.dir !== true ? String(args.dir) : join('downloads', taskId);
  await mkdir(dir, { recursive: true });
  if (!quiet) info(`共 ${urls.length} 个产物，保存到 ${dir}`);

  const saved = [];
  for (const [index, url] of urls.entries()) {
    const dest = join(dir, fileNameFrom(url, index));
    if (!quiet) step(`下载 ${index + 1}/${urls.length}: ${dest}`);
    await downloadOne(url, dest);
    saved.push({ url, path: dest });
  }

  if (quiet) json({ task_id: taskId, dir, files: saved });
  else ok(`下载完成，${saved.length} 个文件`);
  return 0;
}
