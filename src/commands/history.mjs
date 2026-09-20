/**
 * history：查询当前 API Key 的生成历史，恢复本地中断后丢失的 taskId。
 *
 * 该命令只读，不自动轮询或重新提交任务。是否为同一次请求仍需调用者结合
 * 模型、请求类型、创建时间及服务端允许返回的 prompt 判断。
 */
import { listGenerationHistory } from '../lib/api.mjs';
import { num, UsageError } from '../lib/args.mjs';
import { info, json, table } from '../lib/output.mjs';

const ALLOWED_STATUSES = new Set(['processing', 'completed', 'failed']);

export function help() {
  console.log(`
用法: okflow history [选项]

查询当前 API Key 用户的生成任务历史。该命令只读，不会提交任务或扣除生成费用。

选项:
  --page <页码>             页码，默认 1
  --size <数量>             每页数量，默认 20，最大 100
  --model <模型名>          按模型名称过滤（也可用 --model-name）
  --vendor <供应商名>       按供应商名称过滤
  --request-type <类型>     按请求类型过滤，如 text2img / img2img / text2video
  --status <状态>           processing / completed / failed
                              也可用 --generation-status
  --start-date <日期>       开始日期，YYYY-MM-DD
  --end-date <日期>         结束日期，YYYY-MM-DD
  --json                    输出完整分页 JSON
  --base-url <url>          覆盖 API 地址
  --timeout <秒>            请求超时，默认 60

示例:
  okflow history
  okflow history --model <模型名> --status processing --size 100 --json
  okflow history --start-date 2026-09-01 --end-date 2026-09-07
`);
}

function integerInRange(args, key, fallback, min, max) {
  if (args[key] === true) throw new UsageError(`--${key} 需要提供值`);
  const value = num(args, key, fallback);
  if (!Number.isInteger(value) || value < min || value > max) {
    throw new UsageError(`--${key} 必须是 ${min} 到 ${max} 的整数，收到: ${value}`);
  }
  return value;
}

function option(args, key) {
  const value = args[key];
  if (value === undefined) return undefined;
  if (value === true) throw new UsageError(`--${key} 需要提供值`);
  const normalized = String(value).trim();
  return normalized || undefined;
}

function aliasedOption(args, primary, alias) {
  const primaryValue = option(args, primary);
  const aliasValue = option(args, alias);
  if (primaryValue && aliasValue && primaryValue !== aliasValue) {
    throw new UsageError(`--${primary} 与 --${alias} 不能传入不同值`);
  }
  return primaryValue ?? aliasValue;
}

function dateOption(args, key) {
  const value = option(args, key);
  if (!value) return undefined;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new UsageError(`--${key} 日期格式必须是 YYYY-MM-DD，收到: ${value}`);
  const [, year, month, day] = match;
  const parsed = new Date(`${value}T00:00:00Z`);
  if (
    Number.isNaN(parsed.getTime())
    || parsed.getUTCFullYear() !== Number(year)
    || parsed.getUTCMonth() + 1 !== Number(month)
    || parsed.getUTCDate() !== Number(day)
  ) {
    throw new UsageError(`--${key} 不是有效日期，收到: ${value}`);
  }
  return value;
}

function resultCount(item) {
  if (Array.isArray(item?.result_images)) return item.result_images.length;
  if (Array.isArray(item?.images)) return item.images.length;
  return item?.result_url || item?.video_url || item?.audio_url || item?.oss_video_url ? 1 : 0;
}

export async function run(args) {
  const page = integerInRange(args, 'page', 1, 1, Number.MAX_SAFE_INTEGER);
  const size = integerInRange(args, 'size', 20, 1, 100);
  const modelName = aliasedOption(args, 'model', 'model-name');
  const generationStatus = aliasedOption(args, 'status', 'generation-status');
  if (generationStatus && !ALLOWED_STATUSES.has(generationStatus)) {
    throw new UsageError(`--status 必须是 processing、completed 或 failed，收到: ${generationStatus}`);
  }
  const startDate = dateOption(args, 'start-date');
  const endDate = dateOption(args, 'end-date');
  if (startDate && endDate && startDate > endDate) {
    throw new UsageError('--start-date 不能晚于 --end-date');
  }

  const data = await listGenerationHistory({
    page,
    size,
    modelName,
    vendorName: option(args, 'vendor'),
    requestType: option(args, 'request-type'),
    generationStatus,
    startDate,
    endDate,
    baseUrl: option(args, 'base-url'),
    timeout: integerInRange(args, 'timeout', 60, 1, Number.MAX_SAFE_INTEGER),
  });

  if (args.json) {
    json(data);
    return 0;
  }

  const items = Array.isArray(data?.items) ? data.items : [];
  info(`第 ${data?.page ?? page}/${data?.total_pages ?? 0} 页，共 ${data?.total ?? items.length} 条任务`);
  table(
    items.map((item) => ({
      task_id: item.task_id ?? '',
      model_name: item.model_name ?? '',
      status: item.generation_status ?? item.status ?? '',
      request_type: item.request_type ?? '',
      created_time: item.created_time ?? '',
      results: resultCount(item),
    })),
    [
      { key: 'task_id', label: '任务 ID' },
      { key: 'model_name', label: '模型' },
      { key: 'status', label: '状态' },
      { key: 'request_type', label: '请求类型' },
      { key: 'created_time', label: '创建时间' },
      { key: 'results', label: '产物数' },
    ]
  );
  info('本地等待中断后先核对历史；找到疑似任务时用 status <taskId> --wait 继续查询，不要直接重提。');
  return 0;
}
