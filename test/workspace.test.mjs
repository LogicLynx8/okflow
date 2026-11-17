import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, '..');
const CLI = join(ROOT, 'bin', 'okflow.mjs');

const WORKSPACES = [
  {
    workspace_id: 140,
    name: '创意团队A',
    workspace_no: 'WS140',
    current_user_role: 'owner',
    member_count: 5,
    balance: 880.25,
    frozen: 0,
    billing_enabled: true,
    billing_mode: 'all',
  },
  {
    workspace_id: 141,
    name: '未开启付款团队',
    workspace_no: 'WS141',
    current_user_role: 'creator',
    member_count: 3,
    balance: 12.5,
    frozen: 0,
    billing_enabled: false,
    billing_mode: 'disabled',
  },
];

function accessToken() {
  const payload = Buffer.from(JSON.stringify({
    sub: '7',
    scope: 'openid profile openapi:invoke light_app:read',
    exp: 4102444800,
  })).toString('base64url');
  return `header.${payload}.signature`;
}

async function writeCredentials(filePath, baseUrl) {
  await writeFile(filePath, `${JSON.stringify({
    version: 1,
    client_id: 'okflow-cli',
    base_url: baseUrl,
    access_token: accessToken(),
    refresh_token: 'refresh-secret',
    acquired_at: new Date().toISOString(),
    expires_at: new Date(Date.now() + 3600_000).toISOString(),
  }, null, 2)}\n`, 'utf8');
}

async function startMock() {
  const requests = [];
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8');
    const url = new URL(req.url, 'http://127.0.0.1');
    requests.push({
      method: req.method,
      pathname: url.pathname,
      body: raw ? JSON.parse(raw) : undefined,
      headers: req.headers,
    });

    let data;
    if (url.pathname === '/openapi/v1/workspaces') {
      data = WORKSPACES;
    } else if (url.pathname === '/openapi/v1/image/models') {
      data = [{
        id: 1,
        model_name: 'demo-image',
        display_name: 'Demo Image',
        model_type: 'text2image',
        capabilities: { params: [{ key: 'ratio', type: 'select', options: [{ value: '16:9' }], default: '16:9' }] },
      }];
    } else if (url.pathname === '/openapi/v1/image/generate') {
      data = { task_id: 'img-task', status: 'processing' };
    } else if (url.pathname === '/openapi/v1/audio/speech') {
      data = { task_id: 'tts-task', status: 'processing' };
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 404, msg: 'not found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 200, data }));
  });
  await new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(0, '127.0.0.1', resolveListen);
  });
  return {
    baseUrl: `http://127.0.0.1:${server.address().port}`,
    requests,
    close: () => new Promise((resolveClose, rejectClose) => server.close((error) => (error ? rejectClose(error) : resolveClose()))),
  };
}

function runCli(baseUrl, paths, args, { env = {} } = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI, ...args, '--base-url', baseUrl], {
      cwd: ROOT,
      env: {
        ...process.env,
        NO_COLOR: '1',
        OKFLOW_BASE_URL: '',
        OKFLOW_API_KEY: '',
        OKFLOW_CREDENTIALS_PATH: paths.credentialsPath,
        OKFLOW_WORKSPACE_STATE_PATH: paths.workspacePath,
        ...env,
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.once('error', rejectRun);
    child.once('close', (code) => resolveRun({ code, stdout, stderr }));
  });
}

async function setup(t, { withCredentials = true } = {}) {
  const dir = await mkdtemp(join(tmpdir(), 'okflow-workspace-'));
  const mock = await startMock();
  const paths = {
    dir,
    credentialsPath: join(dir, 'credentials.json'),
    workspacePath: join(dir, 'workspace.json'),
  };
  if (withCredentials) await writeCredentials(paths.credentialsPath, mock.baseUrl);
  t.after(async () => {
    await mock.close();
    await rm(dir, { recursive: true, force: true });
  });
  return { mock, paths };
}

test('workspace list reads billable team workspaces without sending a team header', async (t) => {
  const { mock, paths } = await setup(t);
  const result = await runCli(mock.baseUrl, paths, ['workspace', 'list', '--json']);

  assert.equal(result.code, 0, result.stderr);
  assert.equal(mock.requests.length, 1);
  assert.equal(mock.requests[0].pathname, '/openapi/v1/workspaces');
  assert.equal(mock.requests[0].headers['x-workspace-id'], undefined);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.workspaces.length, 2);
  assert.equal(payload.workspaces[0].workspace_id, 140);
  assert.equal(payload.workspaces[0].billing_enabled, true);
  assert.equal(payload.selected_workspace_id, null);
  assert.equal(payload.source, 'none');
});

test('workspace list renders a table with team ids and billing state', async (t) => {
  const { mock, paths } = await setup(t);
  const result = await runCli(mock.baseUrl, paths, ['workspace', 'list']);

  assert.equal(result.code, 0, result.stderr);
  assert.match(result.stdout, /创意团队A/);
  assert.match(result.stdout, /140/);
  assert.match(result.stdout, /可用/);
  assert.match(result.stdout, /okflow workspace use/);
});

test('workspace use persists the team id and paid TTS calls settle with it', async (t) => {
  const { mock, paths } = await setup(t);

  const use = await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);
  assert.equal(use.code, 0, use.stderr);
  assert.equal(mock.requests[0].pathname, '/openapi/v1/workspaces');
  const saved = JSON.parse(await readFile(paths.workspacePath, 'utf8'));
  assert.equal(saved.workspace_id, 140);
  assert.equal(saved.workspace_name, '创意团队A');
  assert.equal(saved.base_url, mock.baseUrl);

  const tts = await runCli(mock.baseUrl, paths, ['tts', '--model', 'm1', '--text', 'hello', '--json']);
  assert.equal(tts.code, 0, tts.stderr);
  const speech = mock.requests.find((request) => request.pathname === '/openapi/v1/audio/speech');
  assert.equal(speech.headers['x-workspace-id'], '140');
});

test('saved team id also settles image generation', async (t) => {
  const { mock, paths } = await setup(t);
  await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);
  mock.requests.length = 0;

  const result = await runCli(mock.baseUrl, paths, ['generate', '--model', 'demo-image', '--prompt', 'cat', '--json']);
  assert.equal(result.code, 0, result.stderr);
  const submit = mock.requests.find((request) => request.pathname === '/openapi/v1/image/generate');
  assert.equal(submit.headers['x-workspace-id'], '140');
});

test('--workspace-id overrides a saved selection for one call only', async (t) => {
  const { mock, paths } = await setup(t);
  await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);
  mock.requests.length = 0;

  const result = await runCli(mock.baseUrl, paths, [
    'tts', '--model', 'm1', '--text', 'hello', '--workspace-id', '77', '--json',
  ]);
  assert.equal(result.code, 0, result.stderr);
  const speech = mock.requests.find((request) => request.pathname === '/openapi/v1/audio/speech');
  assert.equal(speech.headers['x-workspace-id'], '77');

  const saved = JSON.parse(await readFile(paths.workspacePath, 'utf8'));
  assert.equal(saved.workspace_id, 140);
});

test('read-only calls never carry the team header even with a saved selection', async (t) => {
  const { mock, paths } = await setup(t);
  await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);
  mock.requests.length = 0;

  // 只读接口不参与团队计费：带上 X-Workspace-Id 会被团队付款策略（如 allowlist 未命中）拦截。
  const models = await runCli(mock.baseUrl, paths, ['models', '--json']);
  assert.equal(models.code, 0, models.stderr);
  const list = await runCli(mock.baseUrl, paths, ['workspace', 'list', '--json']);
  assert.equal(list.code, 0, list.stderr);

  assert.ok(mock.requests.length >= 2, JSON.stringify(mock.requests.map((request) => request.pathname)));
  for (const request of mock.requests) {
    assert.equal(
      request.headers['x-workspace-id'],
      undefined,
      `只读请求不应带团队请求头: ${request.method} ${request.pathname}`,
    );
  }
});

test('--no-workspace forces personal settlement', async (t) => {
  const { mock, paths } = await setup(t);
  await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);
  mock.requests.length = 0;

  const result = await runCli(mock.baseUrl, paths, [
    'tts', '--model', 'm1', '--text', 'hello', '--no-workspace', '--json',
  ]);
  assert.equal(result.code, 0, result.stderr);
  const speech = mock.requests.find((request) => request.pathname === '/openapi/v1/audio/speech');
  assert.equal(speech.headers['x-workspace-id'], undefined);
});

test('invalid workspace id fails before any paid request', async (t) => {
  const { mock, paths } = await setup(t);
  const result = await runCli(mock.baseUrl, paths, [
    'tts', '--model', 'm1', '--text', 'hello', '--workspace-id', 'abc', '--json',
  ]);
  assert.equal(result.code, 1);
  assert.match(result.stderr, /正整数团队空间 ID/);
  assert.equal(mock.requests.length, 0);
});

test('saved selection from another site is not sent to the current base url', async (t) => {
  const { mock, paths } = await setup(t);
  await writeFile(paths.workspacePath, `${JSON.stringify({
    version: 1,
    workspace_id: 140,
    workspace_name: '创意团队A',
    base_url: 'https://other.example',
    updated_at: new Date().toISOString(),
  }, null, 2)}\n`, 'utf8');

  const tts = await runCli(mock.baseUrl, paths, ['tts', '--model', 'm1', '--text', 'hello', '--json']);
  assert.equal(tts.code, 0, tts.stderr);
  const speech = mock.requests.find((request) => request.pathname === '/openapi/v1/audio/speech');
  assert.equal(speech.headers['x-workspace-id'], undefined);

  const current = await runCli(mock.baseUrl, paths, ['workspace', 'current']);
  assert.equal(current.code, 0, current.stderr);
  assert.match(current.stdout, /其他站点|当前使用个人钱包/);
});

test('workspace use refuses a team whose billing is not enabled', async (t) => {
  const { mock, paths } = await setup(t);
  const result = await runCli(mock.baseUrl, paths, ['workspace', 'use', '141', '--json']);
  assert.equal(result.code, 1);
  assert.match(result.stderr, /还不可用于团队付款/);
  assert.equal(JSON.parse(await readFile(paths.workspacePath, 'utf8').catch(() => 'null')), null);
});

test('workspace list works with an API key because the endpoint accepts it', async (t) => {
  const { mock, paths } = await setup(t, { withCredentials: false });
  const result = await runCli(mock.baseUrl, paths, ['workspace', 'list', '--json'], {
    env: { OKFLOW_API_KEY: 'ak_test_workspace' },
  });
  assert.equal(result.code, 0, result.stderr);
  assert.equal(mock.requests[0].pathname, '/openapi/v1/workspaces');
  assert.equal(mock.requests[0].headers.authorization, 'Bearer ak_test_workspace');
  assert.equal(JSON.parse(result.stdout).workspaces.length, 2);
});

test('workspace current reports the saved team and clear restores personal settlement', async (t) => {
  const { mock, paths } = await setup(t);
  await runCli(mock.baseUrl, paths, ['workspace', 'use', '140', '--json']);

  const current = await runCli(mock.baseUrl, paths, ['workspace', 'current', '--json']);
  assert.equal(current.code, 0, current.stderr);
  const state = JSON.parse(current.stdout);
  assert.equal(state.workspace_id, 140);
  assert.equal(state.source, 'saved');
  assert.equal(state.workspace_name, '创意团队A');

  const cleared = await runCli(mock.baseUrl, paths, ['workspace', 'clear', '--json']);
  assert.equal(cleared.code, 0, cleared.stderr);
  assert.equal(JSON.parse(cleared.stdout).cleared, true);

  mock.requests.length = 0;
  const tts = await runCli(mock.baseUrl, paths, ['tts', '--model', 'm1', '--text', 'hello', '--json']);
  assert.equal(tts.code, 0, tts.stderr);
  assert.equal(mock.requests.find((request) => request.pathname === '/openapi/v1/audio/speech').headers['x-workspace-id'], undefined);
});
