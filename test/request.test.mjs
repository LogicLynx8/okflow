import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { validateGenerationRequest } from '../src/lib/model-capabilities.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

function capableModel(overrides = {}) {
  return {
    id: 'model-1',
    model_name: 'capable-model',
    model_type: 'text2img',
    capabilities: {
      params: [
        { key: 'size', type: 'select', required: true, default: '1K', options: [{ value: '1K' }, { value: '2K' }] },
        { key: 'duration', type: 'integer', min: 5, max: 15, step: 5, default: 5 },
        { key: 'advanced', type: 'switch', default: false },
        { key: 'seed', type: 'integer', required: true, include_when: { key: 'advanced', equals: true } },
        { key: 'images', type: 'image', max_count: 2 },
        { key: 'provider_mode', type: 'hidden', value: 'fixed-mode' },
      ],
    },
    ...overrides,
  };
}

async function readRequest(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  return { method: req.method, url: new URL(req.url, 'http://127.0.0.1'), body: raw ? JSON.parse(raw) : undefined };
}

async function startMock(state) {
  const requests = [];
  const server = createServer(async (req, res) => {
    const request = await readRequest(req);
    requests.push(request);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/image/models') {
      res.end(JSON.stringify({ code: 200, data: state.models }));
    } else if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
      state.generationBodies.push(request.body);
      res.end(JSON.stringify({ code: 200, data: { task_id: 'task-1' } }));
    } else {
      res.end(JSON.stringify({ code: 404, msg: 'unexpected request' }));
    }
  });
  await new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(0, '127.0.0.1', resolveListen);
  });
  return {
    baseUrl: `http://127.0.0.1:${server.address().port}`,
    requests,
    close: () => new Promise((resolveClose, rejectClose) => server.close((error) => error ? rejectClose(error) : resolveClose())),
  };
}

function runCli(baseUrl, referencesDir, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: OKFLOW_DIR,
      env: { ...process.env, NO_COLOR: '1', OKFLOW_API_KEY: 'ak_test_request_cli', OKFLOW_BASE_URL: '', OKFLOW_MODEL_REFERENCES_DIR: referencesDir },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill(), 10_000);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.once('error', (error) => { clearTimeout(timer); rejectRun(error); });
    child.once('close', (code) => { clearTimeout(timer); resolveRun({ code, stdout, stderr }); });
  });
}

test('request init writes only prompt, defaults, locks and hidden fixed values', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-init-'));
  const referencesDir = join(tempDir, 'references');
  const output = join(tempDir, 'request.json');
  const state = { models: [capableModel()], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, referencesDir, ['request', 'init', '--model', 'capable-model', '--output', output, '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(JSON.parse(await readFile(output, 'utf8')), {
    model: 'capable-model',
    config: { prompt: null, size: '1K', duration: 5, advanced: false, provider_mode: 'fixed-mode' },
  });
  assert.ok(JSON.parse(result.stdout).contract_sha256);
});

test('request init blocks models with empty capabilities.params', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-empty-'));
  const output = join(tempDir, 'request.json');
  const state = { models: [capableModel({ model_name: 'empty-model', capabilities: { params: [] } })], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, join(tempDir, 'refs'), ['request', 'init', '--model', 'empty-model', '--output', output]);
  assert.equal(result.code, 1);
  assert.match(`${result.stdout}\n${result.stderr}`, /capabilities\.params/);
  await assert.rejects(readFile(output), /ENOENT/);
});

test('request validate uses the local catalog and does not call the network', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-local-'));
  const referencesDir = join(tempDir, 'refs');
  const requestFile = join(tempDir, 'request.json');
  await mkdir(referencesDir, { recursive: true });
  await writeFile(join(referencesDir, 'catalog.json'), JSON.stringify([capableModel()]), 'utf8');
  await writeFile(requestFile, JSON.stringify({ model: 'capable-model', config: { prompt: 'local validation', size: '2K' } }), 'utf8');
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli('http://127.0.0.1:1', referencesDir, ['request', 'validate', requestFile, '--json']);
  assert.equal(result.code, 0, result.stderr);
  const parsed = JSON.parse(result.stdout);
  assert.equal(parsed.valid, true);
  assert.equal(parsed.request.config.provider_mode, 'fixed-mode');
});

test('request validate fetches the public catalog when the local cache is missing', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-auto-cache-'));
  const referencesDir = join(tempDir, 'refs');
  const requestFile = join(tempDir, 'request.json');
  await writeFile(requestFile, JSON.stringify({ model: 'capable-model', config: { prompt: 'first local validation' } }), 'utf8');
  const state = { models: [capableModel()], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, referencesDir, ['request', 'validate', requestFile, '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), ['/openapi/v1/image/models']);
  assert.equal(Array.isArray(JSON.parse(await readFile(join(referencesDir, 'catalog.json'), 'utf8'))), true);
});

test('request validate refreshes when the requested model is absent from local cache', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-auto-model-'));
  const referencesDir = join(tempDir, 'refs');
  const requestFile = join(tempDir, 'request.json');
  await mkdir(referencesDir, { recursive: true });
  await writeFile(join(referencesDir, 'catalog.json'), JSON.stringify([capableModel({ model_name: 'old-model' })]), 'utf8');
  await writeFile(requestFile, JSON.stringify({ model: 'capable-model', config: { prompt: 'new model validation' } }), 'utf8');
  const state = { models: [capableModel()], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, referencesDir, ['request', 'validate', requestFile, '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), ['/openapi/v1/image/models']);
  const catalog = JSON.parse(await readFile(join(referencesDir, 'catalog.json'), 'utf8'));
  assert.deepEqual(catalog.map((model) => model.model_name), ['capable-model']);
});

test('capability validation rejects unknown, required, enum, range, type, count and conditional errors', () => {
  const model = capableModel();
  const invalidRequests = [
    [{ model: 'capable-model', config: { prompt: 'x', unknown: true } }, /未声明/],
    [{ model: 'capable-model', config: { prompt: 'x', advanced: true } }, /seed.*必填/],
    [{ model: 'capable-model', config: { prompt: 'x', size: '4K' } }, /取值不受支持/],
    [{ model: 'capable-model', config: { prompt: 'x', duration: 16 } }, /不能大于/],
    [{ model: 'capable-model', config: { prompt: 'x', duration: '5' } }, /必须是数字/],
    [{ model: 'capable-model', config: { prompt: 'x', images: ['https://e.test/1', 'https://e.test/2', 'https://e.test/3'] } }, /最多允许 2/],
    [{ model: 'capable-model', config: { prompt: 'x', advanced: false, seed: 1 } }, /当前条件下不可用/],
    [{ model: 'capable-model', config: { prompt: 'x', provider_mode: 'invented' } }, /隐藏固定参数/],
  ];
  for (const [request, expected] of invalidRequests) {
    assert.throws(() => validateGenerationRequest(request, model), expected);
  }
});

test('request submit fetches fresh capabilities before POST and sends the normalized body', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-submit-'));
  const requestFile = join(tempDir, 'request.json');
  await writeFile(requestFile, JSON.stringify({
    model: 'capable-model',
    config: { prompt: 'A precise product portrait', size: '2K', images: ['https://assets.example/role.jpg'] },
  }), 'utf8');
  const state = { models: [capableModel()], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, join(tempDir, 'refs'), ['request', 'submit', requestFile, '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests.map((request) => `${request.method} ${request.url.pathname}`), [
    'GET /openapi/v1/image/models',
    'POST /openapi/v1/image/generate',
  ]);
  assert.deepEqual(state.generationBodies, [{
    model: 'capable-model',
    config: {
      prompt: 'A precise product portrait',
      size: '2K',
      duration: 5,
      advanced: false,
      images: ['https://assets.example/role.jpg'],
      provider_mode: 'fixed-mode',
    },
  }]);
});

test('failed live validation never sends a generation request', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-request-block-'));
  const requestFile = join(tempDir, 'request.json');
  await mkdir(join(tempDir, 'refs'), { recursive: true });
  await writeFile(requestFile, JSON.stringify({ model: 'capable-model', config: { prompt: 'x', invented: 1 } }), 'utf8');
  const state = { models: [capableModel()], generationBodies: [] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const result = await runCli(mock.baseUrl, join(tempDir, 'refs'), ['request', 'submit', requestFile, '--json']);
  assert.equal(result.code, 1);
  assert.equal(state.generationBodies.length, 0);
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), ['/openapi/v1/image/models']);
});
