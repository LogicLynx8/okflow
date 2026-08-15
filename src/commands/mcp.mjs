import { dispatchMcpTool } from '../lib/api.mjs';
import { json, ok, step } from '../lib/output.mjs';
import { required, num, UsageError } from '../lib/args.mjs';

function parseObject(raw, label) {
  let value;
  try {
    value = JSON.parse(raw);
  } catch {
    throw new UsageError(`${label} 必须是合法 JSON 对象`);
  }
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new UsageError(`${label} 必须是 JSON 对象，不能是数组或字符串`);
  }
  return value;
}

export function help() {
  console.log(`
用法: okflow mcp dispatch [选项]

先读取线上 References，确认 tool_ref 仍有效，再调用一个已登记 MCP 工具。
目录异常、引用过期或参数不是对象时不会发出调度请求。

选项:
  --tool-ref <引用>       稳定的 mcp_... 工具引用
  --arguments <JSON>      工具参数对象
  --platform <平台>       References 预检范围，建议填写
  --request-id <UUID>     幂等请求 ID；付费工具必填
  --session-id <ID>       可选会话 ID
  --confirmation <JSON>   写入/敏感工具的风险确认对象
  --base-url <url>        覆盖 OpenAPI 地址
  --timeout <秒>          调度超时，默认 180
  --json                  只输出结果 JSON
`);
}

export async function run(args) {
  const toolRef = required(args, 'tool-ref', '例如 mcp_...');
  const rawArguments = required(args, 'arguments', '例如 {"keyword":"AI Native"}');
  const requestId = required(args, 'request-id', '每次调用使用唯一 UUID');
  const toolArguments = parseObject(rawArguments, '--arguments');
  const confirmation = args.confirmation && args.confirmation !== true
    ? parseObject(String(args.confirmation), '--confirmation')
    : undefined;
  const platform = args.platform && args.platform !== true ? String(args.platform) : undefined;
  const result = await dispatchMcpTool({
    toolRef,
    arguments: toolArguments,
    platform,
    requestId,
    sessionId: args['session-id'] && args['session-id'] !== true ? String(args['session-id']) : undefined,
    confirmation,
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 180),
  });

  if (args.json) {
    json(result);
    return 0;
  }
  ok(`MCP 工具调用完成：${result?.status || 'success'}`);
  if (result?.billing) step(`计费状态：${result.billing.state || 'unknown'}`);
  json(result);
  return 0;
}
