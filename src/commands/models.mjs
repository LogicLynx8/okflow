/**
 * models：列出当前 API Key 可用的模型。
 *
 * 存在的意义是让用户不用猜模型名 —— 平台模型清单会变，硬编码在文档里必然过期。
 */
import { listModels } from '../lib/api.mjs';
import { num } from '../lib/args.mjs';
import { info, table, json } from '../lib/output.mjs';

export function help() {
  console.log(`
用法: okflow models [选项]

列出当前 API Key 可用的生成模型。

选项:
  --type <类型>     按模型类型过滤，如 text2img / img2img / text2video
  --json            输出原始 JSON（含完整能力字段）
  --base-url <url>  覆盖 API 地址
  --timeout <秒>    请求超时，默认 60

示例:
  okflow models
  okflow models --type text2video
  okflow models --json
`);
}

export async function run(args) {
  const data = await listModels({
    type: args.type === true ? undefined : args.type,
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
  });

  const items = Array.isArray(data) ? data : (data?.items ?? []);

  if (args.json) {
    json(items);
    return 0;
  }

  info(`共 ${items.length} 个可用模型`);
  table(
    items.map((m) => ({
      model_name: m.model_name,
      display_name: m.display_name ?? '',
      model_type: m.model_type ?? '',
    })),
    [
      { key: 'model_name', label: '模型名（--model 传这个）' },
      { key: 'display_name', label: '显示名' },
      { key: 'model_type', label: '类型' },
    ]
  );
  info('用 --json 查看完整字段（含各模型支持的参数）');
  return 0;
}
