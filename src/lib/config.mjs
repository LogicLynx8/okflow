/**
 * 凭证与配置解析。
 *
 * 读取优先级：环境变量 > 本目录 .env 文件。
 * 不修改进程环境，只返回解析结果。
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
export const PROJECT_DIR = join(HERE, '..', '..');
const ENV_PATH = join(PROJECT_DIR, '.env');

const DEFAULT_BASE_URL = 'https://okflow.cn';

/** 解析 .env 文件为键值对，文件不存在时返回空对象。 */
function readDotEnv() {
  if (!existsSync(ENV_PATH)) return {};
  const result = {};
  const raw = readFileSync(ENV_PATH, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || !trimmed.includes('=')) continue;
    const idx = trimmed.indexOf('=');
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    // 去掉包裹的引号
    if (value.length >= 2 && value[0] === value.at(-1) && (value[0] === '"' || value[0] === "'")) {
      value = value.slice(1, -1);
    }
    result[key] = value;
  }
  return result;
}

function pick(key) {
  const fromEnv = process.env[key];
  if (fromEnv && fromEnv.trim()) return fromEnv.trim();
  const fromFile = readDotEnv()[key];
  return fromFile && fromFile.trim() ? fromFile.trim() : '';
}

/** 返回 API Key，未配置时返回空字符串（由调用方决定如何提示）。 */
export function getApiKey() {
  return pick('OKFLOW_API_KEY');
}

/** 返回 API base url，允许通过 OKFLOW_BASE_URL 覆盖。 */
export function getBaseUrl(override) {
  if (override && override.trim()) return override.trim().replace(/\/+$/, '');
  const configured = pick('OKFLOW_BASE_URL');
  return (configured || DEFAULT_BASE_URL).replace(/\/+$/, '');
}

export { ENV_PATH };
