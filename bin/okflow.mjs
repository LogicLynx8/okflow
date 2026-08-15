#!/usr/bin/env node
/**
 * okflow CLI 入口。
 *
 * 只做一件事：把子命令路由到 src/commands/*.mjs。所有业务逻辑留在各命令模块，
 * 这里保持薄，方便新增命令时不用改这个文件之外的东西（除了下面的路由表）。
 */
import { parseArgs, UsageError } from '../src/lib/args.mjs';
import { fail, step, info } from '../src/lib/output.mjs';
import { MissingCredentialError, ApiError } from '../src/lib/api.mjs';

import * as setup from '../src/commands/setup.mjs';
import * as models from '../src/commands/models.mjs';
import * as generate from '../src/commands/generate.mjs';
import * as status from '../src/commands/status.mjs';
import * as download from '../src/commands/download.mjs';
import * as upload from '../src/commands/upload.mjs';
import * as knowledge from '../src/commands/knowledge.mjs';
import * as mcp from '../src/commands/mcp.mjs';

const COMMANDS = { setup, models, generate, status, download, upload, knowledge, mcp };

function printGlobalHelp() {
  console.log(`
用法: okflow <命令> [选项]

命令:
  setup               初始化：检查环境 + 装依赖 + 校验凭证
  models              列出可用模型
  generate            提交生成任务（可选 --wait 轮询到完成）
  status <taskId>     查询任务状态
  download <taskId>   下载已完成任务的产物
  upload <file>       上传本地文件并返回 URL
  mcp dispatch         预检 References 后调用一个 MCP 工具

用 'okflow <命令> --help' 查看某个命令的详细参数。
`);
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);

  if (!command || command === '--help' || command === '-h') {
    printGlobalHelp();
    return 0;
  }

  const impl = COMMANDS[command];
  if (!impl) {
    fail(`未知命令: ${command}`);
    step("用 'okflow --help' 查看可用命令");
    return 1;
  }

  const args = parseArgs(rest);
  if (args.help || args.h) {
    impl.help();
    return 0;
  }

  return impl.run(args);
}

main()
  .then((code) => process.exit(code ?? 0))
  .catch((err) => {
    if (err instanceof MissingCredentialError) {
      fail(err.message);
      step("跑 'node bin/okflow.mjs setup' 查看配置指引");
      process.exit(1);
    }
    if (err instanceof ApiError) {
      fail(`API 调用失败: ${err.message}`);
      if (err.status) step(`HTTP 状态码: ${err.status}`);
      process.exit(1);
    }
    if (err instanceof UsageError) {
      fail(err.message);
      process.exit(1);
    }
    fail(err.message || String(err));
    if (process.env.DEBUG) console.error(err.stack);
    else info('设置环境变量 DEBUG=1 可查看完整堆栈');
    process.exit(1);
  });
