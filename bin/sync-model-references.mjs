#!/usr/bin/env node
import { parseArgs, num } from '../src/lib/args.mjs';
import { ApiError, MissingCredentialError } from '../src/lib/api.mjs';
import { syncModelReferences } from '../src/lib/model-references.mjs';
import { fail, json, ok, step } from '../src/lib/output.mjs';

function help() {
  console.log(`
用法: node bin/sync-model-references.mjs [选项]

从公开模型 API 同步 capabilities.params 到 references/models/。

选项:
  --check-only           只比较本地与远端契约，不写文件
  --base-url <url>       覆盖 API 地址
  --timeout <秒>         默认 60
  --references-dir <路径> 覆盖输出目录（主要用于测试/隔离环境）
  --json                 输出机器可读结果
`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || args.h) {
    help();
    return 0;
  }
  const result = await syncModelReferences({
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
    targetDir: args['references-dir'] === true ? undefined : args['references-dir'],
    checkOnly: Boolean(args['check-only']),
  });
  const printable = { ...result };
  delete printable.models;
  if (args.json) json(printable);
  else if (args['check-only']) {
    ok(`模型契约检查完成: ${result.status}`);
    step(`模型数: ${result.model_count}，缺少参数契约: ${result.models_missing_params.length}`);
  } else {
    ok(`模型 References 已同步: ${result.references_dir}`);
    step(`模型数: ${result.model_count}，缺少参数契约: ${result.models_missing_params.length}`);
  }
  return result.status === 'stale' && args['check-only'] ? 2 : 0;
}

main().then((code) => process.exit(code)).catch((error) => {
  if (error instanceof MissingCredentialError) fail(error.message);
  else if (error instanceof ApiError) fail(`API 调用失败: ${error.message}`);
  else fail(error.message || String(error));
  if (process.env.DEBUG) console.error(error.stack);
  process.exit(1);
});
