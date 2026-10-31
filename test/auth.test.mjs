import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { chmod, mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const CLI_ENTRY = join(HERE, '..', 'bin', 'okflow.mjs');

function runCli(baseUrl, credentialPath, args, { timeout = 10000, env = {} } = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: join(HERE, '..'),
      env: { ...process.env, NO_COLOR: '1', OKFLOW_BASE_URL: '', OKFLOW_CREDENTIALS_PATH: credentialPath, ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill(), timeout);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.once('error', rejectRun);
    child.once('close', (code, signal) => {
      clearTimeout(timer);
      resolveRun({ code, signal, stdout, stderr });
    });
  });
}

async function startMock() {
  const requests = [];
  let pollCount = 0;
  const server = createServer(async (req, res) => {
    const body = await new Promise((resolveBody) => {
      let value = '';
      req.on('data', (chunk) => { value += chunk; });
      req.on('end', () => resolveBody(value ? JSON.parse(value) : null));
    });
    requests.push({ method: req.method, url: new URL(req.url, 'http://127.0.0.1'), body, headers: req.headers });
    let data;
    if (req.url === '/user/oauth/device/authorize') {
      data = {
        device_code: 'device-secret',
        user_code: 'ABCD-1234',
        verification_uri: 'http://okflow.test/device',
        verification_uri_complete: 'http://okflow.test/device?user_code=ABCD-1234',
        expires_in: 600,
        interval: 0,
      };
    } else if (req.url === '/user/oauth/token') {
      pollCount += 1;
      if (pollCount === 1) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ code: 400, msg: 'authorization_pending' }));
        return;
      }
      const payload = Buffer.from(JSON.stringify({ sub: '7', scope: 'openid profile', exp: 4102444800 })).toString('base64url');
      data = { access_token: `header.${payload}.signature`, refresh_token: 'refresh-secret', token_type: 'Bearer', expires_in: 900, scope: 'openid profile' };
    } else if (req.url === '/user/oauth/revoke') {
      data = null;
    } else if (req.url.startsWith('/openapi/v1/image/history')) {
      data = { items: [], total: 0 };
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 404, msg: 'not found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 200, data }));
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    requests,
    close: () => new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve()))),
  };
}

test('auth login persists a redacted-safe credential file and status never prints tokens', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-'));
  const credentialPath = join(dir, 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });

  const login = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--json', '--no-browser']);
  assert.equal(login.code, 0, login.stderr);
  const saved = JSON.parse(await readFile(credentialPath, 'utf8'));
  assert.equal(saved.access_token.includes('header.'), true);
  assert.equal(saved.base_url, mock.baseUrl);
  assert.equal(login.stdout.includes('refresh-secret'), false);
  assert.equal(login.stdout.includes('verification_uri_complete'), true);
  const status = await runCli(mock.baseUrl, credentialPath, ['auth', 'status', '--json']);
  assert.equal(status.code, 0, status.stderr);
  assert.equal(status.stdout.includes('refresh-secret'), false);
  assert.equal(status.stdout.includes('device-secret'), false);
  assert.equal(mock.requests.filter((request) => request.url.pathname === '/user/oauth/token').length >= 2, true);
});

test('auth logout revokes refresh token before clearing local state', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-'));
  const credentialPath = join(dir, 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });

  const login = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--no-browser']);
  assert.equal(login.code, 0, login.stderr);
  assert.match(login.stdout, /http:\/\/okflow\.test\/device\?user_code=ABCD-1234/);
  const logout = await runCli(mock.baseUrl, credentialPath, ['auth', 'logout', '--json']);
  assert.equal(logout.code, 0, logout.stderr);
  assert.equal(mock.requests.at(-1).url.pathname, '/user/oauth/revoke');
});

test('expired access tokens refresh once, rotate the refresh token, and use the new access token', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-refresh-'));
  const credentialPath = join(dir, 'credentials.json');
  const requests = [];
  const server = createServer(async (req, res) => {
    const body = await new Promise((resolveBody) => {
      let value = '';
      req.on('data', (chunk) => { value += chunk; });
      req.on('end', () => resolveBody(value ? JSON.parse(value) : null));
    });
    requests.push({ method: req.method, url: new URL(req.url, 'http://127.0.0.1'), body, headers: req.headers });
    if (req.url === '/user/oauth/token') {
      const payload = Buffer.from(JSON.stringify({ sub: '7', scope: 'openid profile', exp: 4102444800 })).toString('base64url');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 200, data: {
        access_token: `header.${payload}.signature-new`,
        refresh_token: 'refresh-rotated',
        token_type: 'Bearer',
        expires_in: 900,
        scope: 'openid profile',
      } }));
      return;
    }
    if (req.url.startsWith('/openapi/v1/image/models')) {
      assert.equal(req.headers.authorization, 'Bearer header.payload.signature-old');
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 401, msg: 'old token must not be used' }));
      return;
    }
    if (req.url.startsWith('/openapi/v1/image/history')) {
      assert.match(req.headers.authorization, /^Bearer header\..+\.signature-new$/);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 200, data: { items: [], total: 0 } }));
      return;
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 404, msg: 'not found' }));
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;
  await writeFile(credentialPath, JSON.stringify({
    version: 1,
    client_id: 'okflow-cli',
    access_token: 'header.payload.signature-old',
    refresh_token: 'refresh-original',
    expires_at: new Date(Date.now() - 1000).toISOString(),
  }));
  t.after(async () => { await new Promise((resolve) => server.close(resolve)); await rm(dir, { recursive: true, force: true }); });

  const result = await runCli(baseUrl, credentialPath, ['history', '--json']);
  assert.equal(result.code, 0, result.stderr);
  const saved = JSON.parse(await readFile(credentialPath, 'utf8'));
  assert.equal(saved.refresh_token, 'refresh-rotated');
  assert.match(saved.access_token, /signature-new$/);
  assert.equal(requests.filter((request) => request.url.pathname === '/user/oauth/token').length, 1);
  assert.equal(requests.at(-1).headers.authorization.includes('refresh-original'), false);
});

test('invalid_grant clears credentials and asks for a fresh authorization without retrying', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-refresh-fail-'));
  const credentialPath = join(dir, 'credentials.json');
  let refreshCount = 0;
  const server = createServer(async (req, res) => {
    if (req.url === '/user/oauth/token') {
      refreshCount += 1;
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 400, msg: 'invalid_grant', data: { refresh_token: 'refresh-secret' } }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 200, data: { items: [], total: 0 } }));
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const address = server.address();
  await writeFile(credentialPath, JSON.stringify({
    version: 1, client_id: 'okflow-cli', access_token: 'access-secret', refresh_token: 'refresh-secret',
    expires_at: new Date(Date.now() - 1000).toISOString(),
  }));
  t.after(async () => { await new Promise((resolve) => server.close(resolve)); await rm(dir, { recursive: true, force: true }); });

  const result = await runCli(`http://127.0.0.1:${address.port}`, credentialPath, ['history', '--json']);
  assert.equal(result.code, 1);
  assert.match(`${result.stdout}${result.stderr}`, /重新运行 auth login/);
  assert.doesNotMatch(`${result.stdout}${result.stderr}`, /access-secret|refresh-secret/);
  assert.equal(refreshCount, 1);
  await assert.rejects(() => stat(credentialPath));
});

test('explicit API key remains the highest-priority compatibility path', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-key-'));
  const credentialPath = join(dir, 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });
  const result = await runCli(mock.baseUrl, credentialPath, ['history', '--json'], { env: { OKFLOW_API_KEY: 'ak_legacy' } });
  assert.equal(result.code, 0, result.stderr);
  assert.equal(mock.requests[0].headers.authorization, 'Bearer ak_legacy');
});

test('credential files and parent directories are private', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-mode-'));
  const credentialPath = join(dir, 'nested', 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });
  const result = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--no-browser']);
  assert.equal(result.code, 0, result.stderr);
  if (process.platform !== 'win32') {
    assert.equal((await stat(credentialPath)).mode & 0o777, 0o600);
    assert.equal((await stat(join(dir, 'nested'))).mode & 0o777, 0o700);
  }
});

test('auth rejects unregistered clients and source/template overrides before network access', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-client-'));
  const credentialPath = join(dir, 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });
  const unknown = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--client-id', 'arbitrary-client', '--no-browser']);
  const source = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--source', 'arbitrary', '--no-browser']);
  assert.equal(unknown.code, 1);
  assert.equal(source.code, 1);
  assert.match(unknown.stderr, /未登记/);
  assert.match(source.stderr, /不接受 --source 或 --template/);
  assert.equal(mock.requests.length, 0);
});

test('auth login discards a pending device grant created for another site', async (t) => {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-pending-base-'));
  const credentialPath = join(dir, 'credentials.json');
  const mock = await startMock();
  t.after(async () => { await mock.close(); await rm(dir, { recursive: true, force: true }); });
  await writeFile(credentialPath, JSON.stringify({
    version: 1,
    client_id: 'okflow-cli',
    pending: {
      client_id: 'okflow-cli',
      scope: 'openid profile',
      base_url: 'http://okflow.test',
      device_code: 'stale-device',
      user_code: 'STALE-0000',
      verification_uri: 'http://okflow.test/device',
      verification_uri_complete: 'http://okflow.test/device?user_code=STALE-0000',
      expires_at: new Date(Date.now() + 600000).toISOString(),
      interval: 0,
    },
  }));

  const login = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--no-browser']);
  assert.equal(login.code, 0, login.stderr);
  assert.equal(mock.requests.filter((request) => request.url.pathname === '/user/oauth/device/authorize').length, 1);
  assert.match(login.stdout, /okflow\.test\/device\?user_code=ABCD-1234/);
  assert.doesNotMatch(login.stdout, /STALE-0000|stale-device/);
  const saved = JSON.parse(await readFile(credentialPath, 'utf8'));
  assert.equal(saved.pending, undefined);
});

test('SIGTERM preserves an active device grant for a later login', async (t) => {
  if (process.platform === 'win32') {
    t.skip('Node cannot deliver a catchable SIGTERM to child processes on Windows');
    return;
  }
  const dir = await mkdtemp(join(tmpdir(), 'okflow-auth-sigterm-'));
  const credentialPath = join(dir, 'credentials.json');
  let deviceRequested = false;
  const server = createServer((req, res) => {
    if (req.url === '/user/oauth/device/authorize') {
      deviceRequested = true;
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 200, data: {
        device_code: 'device-sigterm', user_code: 'SIGTERM-1234', verification_uri: 'http://okflow.test/device',
        verification_uri_complete: 'http://okflow.test/device?user_code=SIGTERM-1234', expires_in: 600, interval: 30,
      } }));
      return;
    }
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 400, msg: 'authorization_pending' }));
  });
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const address = server.address();
  t.after(async () => { await new Promise((resolve) => server.close(resolve)); await rm(dir, { recursive: true, force: true }); });

  const child = spawn(process.execPath, [CLI_ENTRY, 'auth', 'login', '--no-browser', '--base-url', `http://127.0.0.1:${address.port}`], {
    cwd: join(HERE, '..'),
    env: { ...process.env, NO_COLOR: '1', OKFLOW_API_KEY: '', OKFLOW_BASE_URL: '', OKFLOW_CREDENTIALS_PATH: credentialPath },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  child.stdout.resume();
  child.stderr.resume();
  for (let attempt = 0; attempt < 50 && !deviceRequested; attempt += 1) await new Promise((resolve) => setTimeout(resolve, 20));
  assert.equal(deviceRequested, true);
  child.kill('SIGTERM');
  const result = await new Promise((resolve) => child.once('close', (code, signal) => resolve({ code, signal })));
  assert.equal(result.code, 130);
  const saved = JSON.parse(await readFile(credentialPath, 'utf8'));
  assert.equal(saved.pending.device_code, 'device-sigterm');
  assert.equal(Date.parse(saved.pending.expires_at) > Date.now(), true);
});
