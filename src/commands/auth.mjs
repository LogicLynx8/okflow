/** OAuth Device Grant commands for the OKFlow CLI. */
import { setTimeout as sleep } from 'node:timers/promises';

import { positional, UsageError } from '../lib/args.mjs';
import { ApiError, exchangeOAuthToken, requestDeviceAuthorization, revokeOAuthToken } from '../lib/api.mjs';
import { openBrowser } from '../lib/browser.mjs';
import {
  clearCredentials,
  loadCredentials,
  publicState,
  saveCredentials,
} from '../lib/oauth-credentials.mjs';
import { info, json, ok, step, warn } from '../lib/output.mjs';

const DEFAULT_CLIENT_ID = 'okflow-cli';
const DEFAULT_SCOPE = 'openid profile offline_access openapi:invoke wallet:balance:read';
const REGISTERED_CLIENT_IDS = new Set(['okflow-cli', 'workbuddy-cli']);
// 授权流程永远默认回到官网。OKFLOW_BASE_URL 和项目 .env 只服务 API 调用，
// 不能让一次联调配置把用户带到测试站点去授权。
const OFFICIAL_BASE_URL = 'https://okflow.cn';

/**
 * 解析授权请求使用的站点：显式 --base-url 优先；未指定时用 fallback，
 * 默认固定官网，环境变量无法把授权请求带到别的站点。
 * 由测试直接调用，确保该默认值不被绕过。
 */
export function resolveAuthBaseUrl(args, fallback = OFFICIAL_BASE_URL) {
  const override = args['base-url'];
  const explicit = typeof override === 'string' ? override.trim() : '';
  return normalizedBaseUrl(explicit || fallback);
}

function decodePayload(token) {
  try {
    const part = String(token).split('.')[1];
    if (!part) return {};
    return JSON.parse(Buffer.from(part, 'base64url').toString('utf8'));
  } catch {
    return {};
  }
}

function expiresAt(expiresIn) {
  return new Date(Date.now() + Number(expiresIn || 0) * 1000).toISOString();
}

function isPendingValid(pending) {
  return Boolean(pending?.device_code && pending?.expires_at && Date.parse(pending.expires_at) > Date.now());
}

/** 统一 base URL 形态，用于比较不同站点创建的设备授权。 */
function normalizedBaseUrl(value) {
  return String(value || '').trim().replace(/\/+$/, '').toLowerCase();
}

/**
 * 判断 pending 设备授权是否属于当前站点。
 *
 * 旧版本没有记录 base_url，只能回退到授权页 origin 比较；两者都不匹配时
 * 宁可重新申请授权，也不能把用户带到上一次联调过的测试站点。
 */
function pendingMatchesBaseUrl(pending, baseUrl) {
  if (!pending) return false;
  if (pending.base_url) return normalizedBaseUrl(pending.base_url) === baseUrl;
  const verificationUri = pending.verification_uri_complete || pending.verification_uri;
  if (!verificationUri) return false;
  try {
    return new URL(String(verificationUri)).origin === new URL(baseUrl).origin;
  } catch {
    return false;
  }
}

function completeVerificationUri(device) {
  if (device.verification_uri_complete) return String(device.verification_uri_complete);
  const url = new URL(String(device.verification_uri));
  url.searchParams.set('user_code', String(device.user_code));
  return url.href;
}

function pendingState(device, clientId, scope, baseUrl) {
  return {
    client_id: clientId,
    scope,
    base_url: normalizedBaseUrl(baseUrl),
    device_code: device.device_code,
    user_code: device.user_code,
    verification_uri: device.verification_uri,
    verification_uri_complete: completeVerificationUri(device),
    expires_at: device.expires_at || expiresAt(device.expires_in),
    interval: Math.max(1, Number(device.interval || 5)),
  };
}

function errorCode(error) {
  const body = error instanceof ApiError ? error.body : null;
  return String(body?.msg || body?.message || body?.error?.code || body?.data?.error?.code || error?.message || '')
    .trim()
    .toLowerCase();
}

function printState(state, asJson) {
  if (asJson) {
    json(state);
    return;
  }
  if (!state.client_id && !state.pending_user_code) {
    warn('当前没有 OAuth 凭证');
    return;
  }
  if (state.subject) step(`账户: ${state.subject}`);
  if (state.client_id) step(`Client: ${state.client_id}`);
  if (state.scope?.length) step(`Scope: ${state.scope.join(' ')}`);
  if (state.expires_at) step(`访问令牌到期时间: ${state.expires_at}（不代表整个授权到期）`);
  if (state.refresh_available) step('已具备自动续期凭证，调用命令时自动刷新，无需重复登录');
  if (state.pending_user_code) step(`待确认设备码: ${state.pending_user_code}`);
}

async function login(args) {
  const clientId = String(args['client-id'] || DEFAULT_CLIENT_ID);
  const scope = String(args.scope || DEFAULT_SCOPE);
  const authBaseUrl = resolveAuthBaseUrl(args);
  if (args.source !== undefined || args.template !== undefined) {
    throw new UsageError('WorkBuddy OAuth 只接受已登记的 --client-id，不接受 --source 或 --template');
  }
  if (!REGISTERED_CLIENT_IDS.has(clientId)) {
    throw new UsageError(`OAuth client 未登记: ${clientId}；可用 client_id: ${[...REGISTERED_CLIENT_IDS].join(', ')}`);
  }
  const existing = loadCredentials();
  const pending = isPendingValid(existing.pending)
    && existing.pending.client_id === clientId
    && pendingMatchesBaseUrl(existing.pending, authBaseUrl)
    ? existing.pending
    : null;
  const device = pending || await requestDeviceAuthorization({ clientId, scope, baseUrl: authBaseUrl });
  const verificationUriComplete = completeVerificationUri(device);

  if (!pending) {
    saveCredentials({
      version: 1,
      client_id: clientId,
      pending: pendingState(device, clientId, scope, authBaseUrl),
    });
  }

  // Browser launch is the default for every interactive auth invocation,
  // including --json. --no-browser remains an explicit headless override.
  const browserOpened = args['no-browser'] ? false : await openBrowser(verificationUriComplete);

  if (args.json) {
    json({
      user_code: device.user_code,
      verification_uri: device.verification_uri,
      verification_uri_complete: verificationUriComplete,
      interval: device.interval,
    });
  }
  else {
    info('请在浏览器中确认设备授权');
    step(`地址: ${verificationUriComplete}`);
    step(`设备码: ${device.user_code}`);
    if (args['no-browser']) {
      warn('已禁用自动打开浏览器，请手动访问完整授权地址');
    } else if (browserOpened) {
      info('已打开默认浏览器');
    } else {
      warn('无法自动打开默认浏览器，请手动访问上方完整授权地址');
    }
  }

  let interrupted = false;
  let interruptionResolve;
  const interruption = new Promise((resolve) => { interruptionResolve = resolve; });
  const onSignal = () => {
    interrupted = true;
    interruptionResolve();
  };
  process.once('SIGINT', onSignal);
  process.once('SIGTERM', onSignal);
  try {
    let interval = pending?.interval || Math.max(1, Number(device.interval || 5));
    while (!interrupted) {
      try {
        const tokens = await exchangeOAuthToken({
          baseUrl: authBaseUrl,
          body: {
            grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
            client_id: clientId,
            device_code: device.device_code,
          },
        });
        if (!tokens?.access_token || !tokens?.refresh_token) throw new ApiError('OAuth token 响应缺少凭证');
        const payload = decodePayload(tokens.access_token);
        saveCredentials({
          version: 1,
          client_id: clientId,
          base_url: authBaseUrl,
          subject: payload.sub ? String(payload.sub) : undefined,
          scope: String(tokens.scope || payload.scope || '').split(' ').filter(Boolean),
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
          acquired_at: new Date().toISOString(),
          expires_at: expiresAt(tokens.expires_in),
        });
        if (args.json) json(publicState());
        else ok('OAuth 登录成功，凭证已安全保存');
        return 0;
      } catch (error) {
        const message = error instanceof ApiError ? error.message : String(error?.message || error);
        const code = errorCode(error);
        if (code.includes('access_denied') || code.includes('denied')) {
          clearCredentials();
          throw new ApiError('设备授权已拒绝');
        }
        if (code.includes('expired')) {
          clearCredentials();
          throw new ApiError('设备授权已过期，请重新运行 auth login');
        }
        if (!code.includes('authorization_pending') && !code.includes('slow_down')) throw error;
        if (code.includes('slow_down')) interval += 5;
        await Promise.race([sleep(interval * 1000), interruption]);
      }
    }
    saveCredentials({ ...loadCredentials(), pending: pendingState(device, clientId, scope, authBaseUrl) });
    warn('登录已中断，pending session 已保存；再次运行 auth login 可恢复，不会重复创建 grant');
    return 130;
  } finally {
    process.removeListener('SIGINT', onSignal);
    process.removeListener('SIGTERM', onSignal);
  }
}

async function status(args) {
  printState(publicState(), Boolean(args.json));
  return 0;
}

async function logout(args) {
  const credentials = loadCredentials();
  let revokeError;
  try {
    if (credentials.refresh_token) {
      await revokeOAuthToken({
        token: credentials.refresh_token,
        baseUrl: resolveAuthBaseUrl(args, credentials.base_url || OFFICIAL_BASE_URL),
      });
    }
  } catch (error) {
    revokeError = error;
  } finally {
    clearCredentials();
  }
  if (revokeError) throw revokeError;
  if (args.json) json({ logged_out: true });
  else ok('OAuth 凭证已撤销并清理');
  return 0;
}

export function help() {
  console.log(`
用法: okflow auth <login|status|logout> [选项]

命令:
  login       使用 Device Grant 登录；中断后再次运行可恢复 pending session
  status      显示账户、scope 和到期时间，不显示 token
  logout      撤销 grant/token family 并清理本地凭证

选项:
  --client-id <id>  已登记 Client，默认 okflow-cli
  --scope <scope>   空格分隔 scope，默认包含 OpenAPI 调用和余额只读权限
  --json            只输出 JSON，不打印 token
  --no-browser      不自动打开默认浏览器，打印完整授权地址供手动访问
  --base-url <url>  仅本次授权使用该站点，默认官网 https://okflow.cn
`);
}

export async function run(args) {
  const subcommand = positional(args, 0, { name: 'auth 子命令', usage: 'okflow auth login|status|logout' });
  if (args.help) {
    help();
    return 0;
  }
  if (subcommand === 'login') return login(args);
  if (subcommand === 'status') return status(args);
  if (subcommand === 'logout') return logout(args);
  throw new UsageError(`未知 auth 子命令: ${subcommand}`);
}
