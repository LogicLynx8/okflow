/**
 * 团队空间（workspace）选择与解析。
 *
 * 付费调用通过 `X-Workspace-Id` 请求头声明团队空间，由团队钱包结算。
 * 解析优先级：命令行 `--workspace-id` / `--no-workspace` > `OKFLOW_WORKSPACE_ID`
 * > `okflow workspace use` 保存的本地选择。
 *
 * 本地选择与 OAuth 凭证分开存放，只保存空间 ID、空间名称和服务地址，不保存
 * token；跨站点不复用，避免把官网的团队 ID 发到联调站点。
 */
import { randomUUID } from 'node:crypto';
import { chmodSync, existsSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';

import { UsageError } from './args.mjs';
import { getBaseUrl, getWorkspaceId as getConfiguredWorkspaceId } from './config.mjs';

const DEFAULT_PATH = join(homedir(), '.okflow', 'workspace.json');

const SOURCE_LABELS = {
  flag: '命令行 --workspace-id',
  env: 'OKFLOW_WORKSPACE_ID',
  saved: '本地保存的团队空间',
  personal: '--no-workspace 个人钱包',
  none: '',
};

/** 本次进程内的显式结算主体：undefined=未指定，null=强制个人，number=指定团队。 */
let override;

/** 团队空间选择的本地文件路径，测试可用 OKFLOW_WORKSPACE_STATE_PATH 覆盖。 */
export function getWorkspaceStatePath() {
  return process.env.OKFLOW_WORKSPACE_STATE_PATH?.trim() || DEFAULT_PATH;
}

/** 校验并规范化团队空间 ID；非法值直接报错，不静默当作个人结算。 */
export function parseWorkspaceId(value, label = '--workspace-id') {
  if (value === true || value === undefined || value === null) {
    throw new UsageError(`${label} 需要传入团队空间 ID，例如 ${label} 140`);
  }
  const raw = String(value).trim();
  if (!/^\d+$/.test(raw) || Number(raw) <= 0) {
    throw new UsageError(`${label} 必须是正整数团队空间 ID，收到: ${value}`);
  }
  return Number(raw);
}

/** 设置本次进程的显式结算主体；命令入口解析 --workspace-id / --no-workspace 时调用。 */
export function setWorkspaceOverride(value) {
  override = value;
}

/** 清空显式结算主体，回到默认解析。 */
export function resetWorkspaceOverride() {
  override = undefined;
}

function normalizeSelection(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const id = Number(value.workspace_id);
  if (!Number.isInteger(id) || id <= 0) return null;
  return {
    workspace_id: id,
    workspace_name: typeof value.workspace_name === 'string' && value.workspace_name.trim()
      ? value.workspace_name.trim()
      : '',
    base_url: typeof value.base_url === 'string' ? value.base_url.trim() : '',
    updated_at: typeof value.updated_at === 'string' ? value.updated_at : '',
  };
}

/** 读取本地保存的团队空间选择；文件缺失或内容损坏时返回 null，不影响普通调用。 */
export function loadSelection() {
  const path = getWorkspaceStatePath();
  if (!existsSync(path)) return null;
  try {
    return normalizeSelection(JSON.parse(readFileSync(path, 'utf8')));
  } catch {
    return null;
  }
}

/** 保存团队空间选择，使用私有权限和原子替换。 */
export function saveSelection({ workspaceId, workspaceName, baseUrl }) {
  const path = getWorkspaceStatePath();
  const directory = dirname(path);
  mkdirSync(directory, { recursive: true, mode: 0o700 });
  try {
    chmodSync(directory, 0o700);
  } catch {
    // Windows 等平台可能不支持 POSIX 权限位。
  }
  const payload = {
    version: 1,
    workspace_id: parseWorkspaceId(workspaceId, 'workspaceId'),
    base_url: getBaseUrl(baseUrl),
    updated_at: new Date().toISOString(),
  };
  if (workspaceName) payload.workspace_name = String(workspaceName);
  const tempPath = `${path}.${process.pid}.${randomUUID()}.tmp`;
  writeFileSync(tempPath, `${JSON.stringify(payload, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
  renameSync(tempPath, path);
  try {
    chmodSync(path, 0o600);
  } catch {
    // Windows 等平台可能不支持 POSIX 权限位。
  }
  return payload;
}

/** 删除本地保存的团队空间选择，回到个人钱包结算。 */
export function clearSelection() {
  const path = getWorkspaceStatePath();
  if (!existsSync(path)) return false;
  unlinkSync(path);
  return true;
}

/**
 * 解析当前生效的结算主体。
 *
 * 返回 `{ workspaceId, workspaceName, source, savedMismatch }`：
 * `workspaceId` 为 null 表示个人钱包；`savedMismatch` 存在表示保存的选择属于别的服务地址，
 * 已被忽略，调用方可以据此提示用户重新选择。
 */
export function resolveActiveWorkspace({ baseUrl } = {}) {
  const resolvedBaseUrl = getBaseUrl(baseUrl);
  if (override !== undefined) {
    const workspaceId = override === null ? null : parseWorkspaceId(override);
    return {
      workspaceId,
      workspaceName: '',
      source: workspaceId === null ? 'personal' : 'flag',
      savedMismatch: null,
      baseUrl: resolvedBaseUrl,
    };
  }

  const configured = getConfiguredWorkspaceId();
  if (configured) {
    return {
      workspaceId: parseWorkspaceId(configured, 'OKFLOW_WORKSPACE_ID'),
      workspaceName: '',
      source: 'env',
      savedMismatch: null,
      baseUrl: resolvedBaseUrl,
    };
  }

  const saved = loadSelection();
  if (!saved) {
    return { workspaceId: null, workspaceName: '', source: 'none', savedMismatch: null, baseUrl: resolvedBaseUrl };
  }
  if (saved.base_url && saved.base_url !== resolvedBaseUrl) {
    return { workspaceId: null, workspaceName: '', source: 'none', savedMismatch: saved, baseUrl: resolvedBaseUrl };
  }
  return {
    workspaceId: saved.workspace_id,
    workspaceName: saved.workspace_name,
    source: 'saved',
    savedMismatch: null,
    baseUrl: resolvedBaseUrl,
  };
}

/** 只取当前生效的团队空间 ID，供 API 请求层注入请求头；个人结算时为 null。 */
export function resolveWorkspaceId(baseUrl) {
  return resolveActiveWorkspace({ baseUrl }).workspaceId;
}

/** 生成一行人类可读的结算主体说明；个人结算返回 null。 */
export function describeActiveWorkspace({ baseUrl } = {}) {
  const active = resolveActiveWorkspace({ baseUrl });
  if (!active.workspaceId) return null;
  const name = active.workspaceName ? ` ${active.workspaceName}` : '';
  return `团队空间 #${active.workspaceId}${name}（${SOURCE_LABELS[active.source] || active.source}，使用团队积分结算）`;
}

export { SOURCE_LABELS };
