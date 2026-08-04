/**
 * status：查询单个任务状态，可选轮询到完成。
 *
 * 独立于 generate --wait 存在的原因：用户经常是先 generate 拿到 taskId 就退出了
 * （网络不稳、命令行会话中断等），之后需要单独回来查，这时不应该要求重新提交任务。
 */
import { num, positional } from '../lib/args.mjs';
import { json } from '../lib/output.mjs';
import { pollUntilDone } from '../lib/poll.mjs';
import { getTaskStatus } from '../lib/api.mjs';

export function help() {
  console.log(`
用法: okflow status <taskId> [选项]

查询任务状态。默认查一次就返回，加 --wait 则轮询到完成。

选项:
  --wait                  轮询到任务完成再退出
  --timeout <秒>          轮询总超时，默认 600
  --interval <秒>         轮询间隔，默认 10
  --json                  只输出最终 JSON，不打印进度
  --base-url <url>        覆盖 API 地址

示例:
  okflow status abc-123
  okflow status abc-123 --wait --timeout 1200
`);
}

export async function run(args) {
  const taskId = positional(args, 0, { name: 'taskId', usage: 'okflow status <taskId>' });
  const quiet = Boolean(args.json);
  const baseUrl = args['base-url'];

  if (!args.wait) {
    const data = await getTaskStatus(taskId, { baseUrl });
    json(data);
    const success = data?.status === 'completed' || data?.status === 'success';
    return success || data?.status === undefined ? 0 : data?.status === 'failed' ? 1 : 0;
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
