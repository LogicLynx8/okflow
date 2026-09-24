import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = fileURLToPath(new URL('.', import.meta.url));
const CLI_ENTRY = join(HERE, '..', 'bin', 'okflow.mjs');

function runCli(baseUrl, credentialPath, args, { timeout = 10000 } = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: join(HERE, '..'),
      env: { ...process.env, NO_COLOR: '1', OKFLOW_BASE_URL: '', OKFLOW_CREDENTIALS_PATH: credentialPath },
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

  const login = await runCli(mock.baseUrl, credentialPath, ['auth', 'login', '--json']);
  assert.equal(login.code, 0, login.stderr);
  const saved = JSON.parse(await readFile(credentialPath, 'utf8'));
  assert.equal(saved.access_token.includes('header.'), true);
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
