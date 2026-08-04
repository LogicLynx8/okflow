/**
 * 终端输出工具。
 *
 * 刻意用裸 ANSI 码而不引第三方颜色库：这个 CLI 要保证 clone 下来不装依赖就能跑，
 * 否则 setup（负责装依赖的命令）自己会因为缺依赖而启动失败。
 */
const useColor = Boolean(process.stdout.isTTY && !process.env.NO_COLOR);
const wrap = (code) => (text) => (useColor ? `[${code}m${text}[0m` : String(text));

const cyan = wrap(36);
const green = wrap(32);
const yellow = wrap(33);
const red = wrap(31);
const gray = wrap(90);
const bold = wrap(1);

export function info(msg) {
  console.log(`${cyan('[信息]')} ${msg}`);
}

export function ok(msg) {
  console.log(`${green('[成功]')} ${msg}`);
}

export function warn(msg) {
  console.log(`${yellow('[提示]')} ${msg}`);
}

export function fail(msg) {
  console.error(`${red('[错误]')} ${msg}`);
}

export function step(msg) {
  console.log(`${gray('  →')} ${msg}`);
}

/** 打印 JSON，缩进 2 空格，中文不转义。 */
export function json(value) {
  console.log(JSON.stringify(value, null, 2));
}

/** 打印简单表格。rows 是对象数组，columns 是 [{key, label}]。 */
export function table(rows, columns) {
  if (!rows.length) {
    warn('没有数据');
    return;
  }
  const widths = columns.map((col) =>
    Math.max(col.label.length, ...rows.map((r) => String(r[col.key] ?? '').length))
  );
  const line = (cells) => cells.map((c, i) => String(c ?? '').padEnd(widths[i])).join('  ');
  console.log(bold(line(columns.map((c) => c.label))));
  console.log(gray(widths.map((w) => '-'.repeat(w)).join('  ')));
  for (const row of rows) {
    console.log(line(columns.map((c) => row[c.key])));
  }
}
