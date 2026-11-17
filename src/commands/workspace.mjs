/**
 * workspace：团队空间选择命令。
 *
 * 付费调用通过 `X-Workspace-Id` 请求头声明团队空间，由团队钱包结算。
 * 这里只负责查询可计费团队列表和保存默认选择，请求头由 api 请求层统一注入。
 *
 * 列表来自 `GET /openapi/v1/workspaces`：只返回当前凭证在席的团队空间，
 * 并标注 `billing_enabled`（团队是否已开启统一付款且团队钱包可用）。
 */
import { num, positional, UsageError } from '../lib/args.mjs';
import { ApiError, listTeamWorkspaces } from '../lib/api.mjs';
import { getBaseUrl } from '../lib/config.mjs';
import { info, json, ok, step, table, warn } from '../lib/output.mjs';
import {
  clearSelection,
  getWorkspaceStatePath,
  loadSelection,
  parseWorkspaceId,
  resolveActiveWorkspace,
  saveSelection,
  SOURCE_LABELS,
} from '../lib/workspace.mjs';

const ROLE_LABELS = {
  owner: '所有者',
  admin: '管理员',
  producer: '制片',
  creator: '创作',
  reviewer: '审核',
  finance: '财务',
};

const BILLING_MODE_LABELS = {
  disabled: '未开启',
  allowlist: '白名单',
  all: '全部应用',
};

export function help() {
  console.log(`
用法: okflow workspace <list|use|current|clear> [选项]

团队空间决定付费调用用哪份积分结算。默认使用个人钱包；选中团队后用团队积分结算。

子命令:
  list      查询当前凭证可用的团队空间，拿到团队 ID
  use       保存默认团队空间，后续付费调用自动带上 X-Workspace-Id
  current   查看当前生效的结算主体和来源
  clear     清除保存的团队空间选择，回到个人钱包

选项:
  --json            输出机器可读结果
  --base-url <url>  覆盖 API 地址
  --timeout <秒>    列表请求超时，默认 60
  --no-verify       仅 use 生效，跳过在线校验（含 billing_enabled 检查）

示例:
  okflow workspace list
  okflow workspace use 140
  okflow generate --model <模型> --prompt "一只橘猫" --workspace-id 140 --wait
`);
}

function useHelp() {
  console.log(`
用法: okflow workspace use <团队ID> [选项]

校验团队空间可用后保存为默认结算主体；之后所有付费调用自动使用团队积分。

选项:
  --no-verify       跳过在线校验，直接保存（离线或已知 ID 时使用）
  --json            输出机器可读结果
  --base-url <url>  覆盖 API 地址
  --timeout <秒>    校验请求超时，默认 60
`);
}

async function fetchTeamWorkspaces({ baseUrl, timeout }) {
  const data = await listTeamWorkspaces({ baseUrl, timeout });
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  throw new ApiError('团队空间列表响应格式不符合预期（期望数组）');
}

function activeOf(baseUrl) {
  return resolveActiveWorkspace({ baseUrl });
}

function billingLabel(item) {
  if (item?.billing_enabled) return '可用';
  return BILLING_MODE_LABELS[item?.billing_mode] === undefined
    ? '未开启'
    : `不可用（${BILLING_MODE_LABELS[item?.billing_mode]}）`;
}

function warnIfMismatched(active) {
  if (!active.savedMismatch) return;
  warn(`本地保存的团队空间 #${active.savedMismatch.workspace_id} 属于 ${active.savedMismatch.base_url || '其他站点'}，`
    + `当前服务地址是 ${active.baseUrl}，本次不发送团队请求头`);
  step('如需在当前站点使用团队积分，重新运行: okflow workspace use <团队ID>');
}

async function runList(args) {
  const baseUrl = args['base-url'];
  const items = await fetchTeamWorkspaces({ baseUrl, timeout: num(args, 'timeout', 60) });
  const active = activeOf(baseUrl);

  if (args.json) {
    json({
      workspaces: items,
      selected_workspace_id: active.workspaceId,
      source: active.source,
    });
    return 0;
  }

  if (!items.length) {
    warn('当前凭证没有可用团队空间，只能使用个人钱包');
    step('加入团队并开启团队统一付款后，再运行 okflow workspace list');
    return 0;
  }

  info(`共 ${items.length} 个可用团队空间`);
  table(
    items.map((item) => ({
      id: item?.workspace_id ?? '',
      name: item?.name ?? '',
      role: ROLE_LABELS[item?.current_user_role] || item?.current_user_role || '',
      balance: item?.balance ?? '',
      billing: billingLabel(item),
      current: active.workspaceId && Number(item?.workspace_id) === active.workspaceId ? '← 当前' : '',
    })),
    [
      { key: 'id', label: '团队ID' },
      { key: 'name', label: '名称' },
      { key: 'role', label: '我的角色' },
      { key: 'balance', label: '团队余额' },
      { key: 'billing', label: '团队付款' },
      { key: 'current', label: '' },
    ],
  );

  if (!items.some((item) => item?.billing_enabled)) {
    warn('以上团队都还未开启统一付款，暂不能用团队积分结算');
    step('去团队后台开启「AI 应用付款策略」后再试');
  }
  if (!active.workspaceId) {
    step('用团队积分结算: okflow workspace use <团队ID>，或单次加 --workspace-id <团队ID>');
  }
  return 0;
}

async function runUse(args) {
  const workspaceId = parseWorkspaceId(
    positional(args, 1, { name: '团队ID', usage: 'okflow workspace use <团队ID>' }),
    '团队ID',
  );
  const baseUrl = args['base-url'];
  let workspace = null;

  if (!args['no-verify']) {
    const items = await fetchTeamWorkspaces({ baseUrl, timeout: num(args, 'timeout', 60) });
    workspace = items.find((item) => Number(item?.workspace_id) === workspaceId) || null;
    if (!workspace) {
      throw new UsageError(`当前凭证无法使用团队空间 ${workspaceId}；先运行 'okflow workspace list' 确认团队 ID`);
    }
    if (!workspace.billing_enabled) {
      throw new UsageError(`团队空间 ${workspaceId} 还不可用于团队付款：${billingLabel(workspace)}；`
        + '请先让团队管理员开启 AI 应用统一付款；确认仍要保存可加 --no-verify');
    }
  } else if (!loadSelection()) {
    info('已跳过在线校验，直接保存团队 ID');
  }

  const saved = saveSelection({
    workspaceId,
    workspaceName: workspace?.name,
    baseUrl: getBaseUrl(baseUrl),
  });

  if (args.json) {
    json({ ...saved, verified: Boolean(workspace) });
    return 0;
  }
  ok(`默认结算主体已切换为团队空间 #${workspaceId}${workspace?.name ? ` ${workspace.name}` : ''}`);
  if (workspace && workspace.billing_mode === 'allowlist') {
    warn('该团队使用白名单付款：未纳入白名单的 AI 应用下单会返回 403');
  }
  step('后续生图、生视频、TTS、Agent 与 MCP 付费调用会带上 X-Workspace-Id，用团队积分结算');
  step('单次恢复个人钱包: 加 --no-workspace；彻底取消: okflow workspace clear');
  return 0;
}

function runCurrent(args) {
  const baseUrl = args['base-url'];
  const active = activeOf(baseUrl);
  const saved = loadSelection();

  if (args.json) {
    json({
      workspace_id: active.workspaceId,
      workspace_name: active.workspaceName || null,
      source: active.source,
      source_label: SOURCE_LABELS[active.source] || '',
      base_url: active.baseUrl,
      saved: saved || null,
    });
    return 0;
  }

  if (!active.workspaceId) {
    warn('当前使用个人钱包结算');
    if (saved) {
      step(`本地保存的团队空间: #${saved.workspace_id}${saved.workspace_name ? ` ${saved.workspace_name}` : ''}`
        + `（服务地址 ${saved.base_url || '未记录'}）`);
    }
    warnIfMismatched(active);
    step('切换到团队积分: okflow workspace use <团队ID>');
    return 0;
  }

  ok(`当前结算主体: 团队空间 #${active.workspaceId}${active.workspaceName ? ` ${active.workspaceName}` : ''}`);
  step(`来源: ${SOURCE_LABELS[active.source] || active.source}`);
  if (active.source === 'saved') step(`选择文件: ${getWorkspaceStatePath()}`);
  return 0;
}

function runClear(args) {
  const removed = clearSelection();
  if (args.json) {
    json({ cleared: removed });
    return 0;
  }
  if (removed) ok('已清除团队空间选择，后续调用回到个人钱包结算');
  else info('本地没有保存的团队空间选择');
  return 0;
}

export async function run(args) {
  const subcommand = args._[0];
  if (!subcommand) throw new UsageError('缺少子命令，用法: okflow workspace <list|use|current|clear>');
  if (args.help || args.h) {
    if (subcommand === 'use') useHelp();
    else help();
    return 0;
  }
  if (subcommand === 'list' || subcommand === 'ls') return runList(args);
  if (subcommand === 'use' || subcommand === 'switch') return runUse(args);
  if (subcommand === 'current' || subcommand === 'show') return runCurrent(args);
  if (subcommand === 'clear' || subcommand === 'off' || subcommand === 'reset') return runClear(args);
  throw new UsageError(`未知 workspace 子命令: ${subcommand}`);
}
