/**
 * 任务轮询。
 *
 * generate --wait 和 status --wait 共用，避免两处各写一份轮询逻辑。
 * 超时不当作失败：任务在服务端还在跑，提示用户继续用 status 查，
 * 而不是让人以为任务已经挂了。
 */
import { getTaskStatus } from './api.mjs';
import { info, ok, warn, step } from './output.mjs';

const SUCCESS_STATUSES = new Set(['completed', 'success']);
const FAILURE_STATUSES = new Set(['failed', 'error', 'cancelled', 'timeout']);

const sleep = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

/**
 * 轮询到终态或超时。
 * @returns {Promise<{success: boolean, timedOut: boolean, data: object}>}
 */
export async function pollUntilDone(taskId, { baseUrl, totalTimeout = 600, interval = 10, quiet = false } = {}) {
  const deadline = Date.now() + totalTimeout * 1000;
  let round = 0;
  let last = null;

  if (!quiet) info(`轮询任务 ${taskId}（间隔 ${interval}s，最长 ${totalTimeout}s）`);

  while (Date.now() < deadline) {
    await sleep(interval);
    round += 1;

    try {
      last = await getTaskStatus(taskId, { baseUrl });
    } catch (err) {
      // 单次查询失败不终止轮询：网络抖动比任务失败常见得多
      if (!quiet) step(`第 ${round} 次查询失败，继续重试: ${err.message}`);
      continue;
    }

    const status = last?.status;
    const progress = last?.progress;

    if (!quiet) {
      const pct = progress === null || progress === undefined ? '' : ` ${progress}%`;
      step(`第 ${round} 次: ${status}${pct}`);
    }

    if (SUCCESS_STATUSES.has(status)) {
      if (!quiet) ok('生成完成');
      return { success: true, timedOut: false, data: last };
    }
    if (FAILURE_STATUSES.has(status)) {
      if (!quiet) {
        warn(`任务失败: ${last?.error_message || '（无错误信息）'}`);
        if (!last?.error_message) {
          step('错误信息为空通常是内容审核拦截，尝试调整提示词后重试');
        }
      }
      return { success: false, timedOut: false, data: last };
    }
  }

  if (!quiet) {
    warn(`轮询超时（${totalTimeout}s），任务在服务端可能仍在进行`);
    step(`继续查询: okflow status ${taskId}`);
  }
  return { success: false, timedOut: true, data: last ?? { task_id: taskId, status: 'processing' } };
}
