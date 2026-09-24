/** OAuth Device Grant commands for the OKFlow CLI. */
import { setTimeout as sleep } from 'node:timers/promises';

import { positional, required, num, UsageError } from '../lib/args.mjs';
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

function completeVerificationUri(device) {
  if (device.verification_uri_complete) return String(device.verification_uri_complete);
  const url = new URL(String(device.verification_uri));
  url.searchParams.set('user_code', String(device.user_code));
  return url.href;
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
  if (state.expires_at) step(`到期时间: ${state.expires_at}`);
  if (state.pending_user_code) step(`待确认设备码: ${state.pending_user_code}`);
}

async function login(args) {
  const clientId = String(args['client-id'] || DEFAULT_CLIENT_ID);
  const scope = String(args.scope || DEFAULT_SCOPE);
  const baseUrl = args['base-url'];
  const existing = loadCredentials();
  const pending = isPendingValid(existing.pending) && existing.pending.client_id === clientId ? existing.pending : null;
  const device = pending || await requestDeviceAuthorization({ clientId, scope, baseUrl });
  const verificationUriComplete = completeVerificationUri(device);

  if (!pending) {
    saveCredentials({
      version: 1,
      client_id: clientId,
      pending: {
        client_id: clientId,
        scope,
        device_code: device.device_code,
        user_code: device.user_code,
        verification_uri: device.verification_uri,
        verification_uri_complete: verificationUriComplete,
        expires_at: expiresAt(device.expires_in),
        interval: Number(device.interval || 5),
      },
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
  const onSignal = () => { interrupted = true; };
  process.once('SIGINT', onSignal);
  process.once('SIGTERM', onSignal);
  try {
    const interval = Math.max(1, Number(device.interval || 5));
    while (!interrupted) {
      try {
        const tokens = await exchangeOAuthToken({
          baseUrl,
          body: {
            grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
            client_id: clientId,
            device_code: device.device_code,
          },
        });
        const payload = decodePayload(tokens.access_token);
        saveCredentials({
          version: 1,
          client_id: clientId,
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
        if (!/authorization_pending|slow_down/i.test(message)) throw error;
        if (/slow_down/i.test(message)) await sleep(interval * 2 * 1000);
        else await sleep(interval * 1000);
      }
    }
    saveCredentials({ ...loadCredentials(), pending: { ...device, client_id: clientId, expires_at: expiresAt(device.expires_in) } });
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
  if (credentials.refresh_token) {
    await revokeOAuthToken({ token: credentials.refresh_token, baseUrl: args['base-url'] });
  }
  clearCredentials();
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
  --base-url <url>  覆盖 API 地址
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
