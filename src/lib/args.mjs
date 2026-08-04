/**
 * 极简参数解析。
 *
 * 只支持 --key value 和 --flag 两种形式，够用且不引入 CLI 框架依赖。
 * 刻意不做类型转换，由命令层按需 Number()/JSON.parse()，避免隐式转换踩坑。
 */

/**
 * 用户传参有误时抛出。与 ApiError 区分开，入口层不会对它打印堆栈提示 ——
 * 参数写错是用户可以自己改的，不是需要调试的程序问题。
 */
export class UsageError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UsageError';
  }
}

/** 把 argv 解析为 { _: [位置参数], key: value } */
export function parseArgs(argv) {
  const result = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      result._.push(token);
      continue;
    }
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) {
      result[key] = true;
    } else {
      result[key] = next;
      i += 1;
    }
  }
  return result;
}

/** 取必填参数，缺失时抛出带清晰提示的错误。 */
export function required(args, key, hint) {
  const value = args[key];
  if (value === undefined || value === true || String(value).trim() === '') {
    throw new UsageError(`缺少必填参数 --${key}${hint ? `（${hint}）` : ''}`);
  }
  return String(value);
}

/** 取数字参数，非法值直接报错而不是静默变 NaN。 */
export function num(args, key, fallback) {
  if (args[key] === undefined) return fallback;
  const parsed = Number(args[key]);
  if (!Number.isFinite(parsed)) {
    throw new UsageError(`--${key} 必须是数字，收到: ${args[key]}`);
  }
  return parsed;
}

/** 取位置参数，缺失时抛出带用法提示的错误。 */
export function positional(args, index, { name, usage }) {
  const value = args._[index];
  if (value === undefined || String(value).trim() === '') {
    throw new UsageError(`缺少 ${name}，用法: ${usage}`);
  }
  return String(value);
}
