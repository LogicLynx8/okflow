/**
 * setup：环境检查 + 装依赖 + 校验凭证。
 *
 * 设计意图是让用户（或用户的 Agent）只记住一条命令就能完成初始化，
 * 因此三件事必须在一个命令里做完，且任一步失败都给出可执行的下一步指令。
 */
import { execSync } from 'node:child_process';
import { existsSync, copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { PROJECT_DIR, ENV_PATH, getApiKey } from '../lib/config.mjs';
import { info, ok, warn, fail, step } from '../lib/output.mjs';

const MIN_NODE_MAJOR = 18;

function checkNode() {
  const major = Number(process.versions.node.split('.')[0]);
  if (major < MIN_NODE_MAJOR) {
    fail(`Node.js 版本过低: v${process.versions.node}，需要 >= v${MIN_NODE_MAJOR}`);
    step(`低于 v${MIN_NODE_MAJOR} 缺少内置 fetch，CLI 无法工作`);
    step('升级方式: https://nodejs.org 下载 LTS 版本，或用 nvm/fnm 切换');
    return false;
  }
  ok(`Node.js v${process.versions.node}`);
  return true;
}

/** 读取 package.json 里声明的依赖数量。 */
function countDeps() {
  const pkg = JSON.parse(readFileSync(join(PROJECT_DIR, 'package.json'), 'utf8'));
  return Object.keys(pkg.dependencies ?? {}).length;
}

function installDeps() {
  // 当前实现零第三方依赖（只用 Node 内置模块），所以没什么可装的。
  // 保留这一步是为了以后真的加了依赖时，用户仍然只需记住 setup 这一条命令。
  if (countDeps() === 0) {
    ok('无需安装依赖（仅使用 Node 内置模块）');
    return true;
  }
  if (existsSync(join(PROJECT_DIR, 'node_modules'))) {
    ok('依赖已安装');
    return true;
  }
  info('安装依赖中...');
  try {
    execSync('npm install --no-audit --no-fund', { cwd: PROJECT_DIR, stdio: 'inherit' });
    ok('依赖安装完成');
    return true;
  } catch {
    fail('依赖安装失败');
    step(`手动执行: cd ${PROJECT_DIR} && npm install`);
    return false;
  }
}

function checkCredential() {
  if (getApiKey()) {
    ok('API Key 已配置');
    return true;
  }

  const example = join(PROJECT_DIR, '.env.example');
  if (!existsSync(ENV_PATH) && existsSync(example)) {
    copyFileSync(example, ENV_PATH);
    info(`已创建 ${ENV_PATH}`);
  }

  warn('API Key 未配置，生成命令暂时无法使用');
  step('1. 登录 okflow 控制台 → 开放 API → 创建 API Key');
  step(`2. 把 ak_xxx:sk_xxx 填入 ${ENV_PATH} 的 OKFLOW_API_KEY=`);
  step('3. 或直接设置环境变量 OKFLOW_API_KEY');
  return false;
}

export function help() {
  console.log(`
用法: okflow setup

初始化运行环境。依次执行：
  1. 检查 Node.js 版本（需要 >= ${MIN_NODE_MAJOR}）
  2. 安装依赖（当前零依赖，此步会自动跳过）
  3. 校验 API Key 是否已配置

可重复执行，已完成的步骤会自动跳过。
`);
}

export async function run() {
  info('开始初始化 okflow CLI');

  if (!checkNode()) return 1;
  if (!installDeps()) return 1;

  const hasCredential = checkCredential();
  if (!hasCredential) {
    warn('初始化未完成：补齐 API Key 后重新执行 setup 验证');
    return 1;
  }

  ok('初始化完成，可以开始使用');
  step('下一步: okflow models   # 查看可用模型');
  return 0;
}
