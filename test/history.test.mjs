import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

function historyPayload() {
  return {
    items: [
      {
        id: 1,
        task_id: 'task-processing',
        model_name: 'image-model-a',
        vendor_name: 'vendor-a',
        request_type: 'img2img',
        prompt: 'private matching prompt',
        generation_status: 'processing',
        result_images: [],
        created_time: '2026-09-07T01:00:00Z',
      },
      {
        id: 2,
        task_id: 'task-completed',
        model_name: 'image-model-a',
        vendor_name: 'vendor-a',
        request_type: 'img2img',
        prompt: 'private matching prompt',
        generation_status: 'completed',
        result_images: [{ url: 'https://example.test/result.png' }],
        created_time: '2026-09-07T00:59:00Z',
      },
      {
        id: 3,
        task_id: 'task-failed',
        model_name: 'image-model-a',
        vendor_name: 'vendor-a',
        request_type: 'img2img',
        generation_status: 'failed',
        result_images: [],
        created_time: '2026-09-07T00:58:00Z',
      },
    ],
    total: 3,
    page: 1,
    size: 20,
    total_pages: 1,
    links: {},
  };
}

async function startMock(payload = historyPayload()) {
  const requests = [];
  const server = createServer((req, res) => {
    requests.push({
      method: req.method,
      headers: req.headers,
      url: new URL(req.url, 'http://127.0.0.1'),
    });
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ code: 200, data: payload }));
  });
  await new Promise((resolveListen, rejectListen) => {
    server.once('error', rejectListen);
    server.listen(0, '127.0.0.1', resolveListen);
  });
  const address = server.address();
  assert.ok(address && typeof address === 'object');
  return {
    baseUrl: `http://127.0.0.1:${address.port}`,
    requests,
    close: () => new Promise((resolveClose, rejectClose) => {
      server.close((error) => (error ? rejectClose(error) : resolveClose()));
    }),
  };
}

function runCli(baseUrl, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: OKFLOW_DIR,
      env: {
        ...process.env,
        NO_COLOR: '1',
        OKFLOW_API_KEY: 'ak_test_history_cli',
        OKFLOW_BASE_URL: '',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill(), 10_000);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.once('error', (error) => {
      clearTimeout(timer);
      rejectRun(error);
    });
    child.once('close', (code, signal) => {
      clearTimeout(timer);
      resolveRun({ code, signal, stdout, stderr });
    });
  });
}

test('history uses the user-scoped history endpoint with default pagination', async (t) => {
  const payload = historyPayload();
  const mock = await startMock(payload);
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['history', '--json']);

  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), payload);
  assert.equal(mock.requests.length, 1);
  assert.equal(mock.requests[0].method, 'GET');
  assert.equal(mock.requests[0].url.pathname, '/openapi/v1/image/history');
  assert.deepEqual(Object.fromEntries(mock.requests[0].url.searchParams), { page: '1', size: '20' });
  assert.equal(mock.requests[0].headers.authorization, 'Bearer ak_test_history_cli');
});

test('history forwards all supported filters and aliases', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'history',
    '--page', '2',
    '--size', '100',
    '--model-name', 'image-model-a',
    '--vendor', 'vendor-a',
    '--request-type', 'img2img',
    '--generation-status', 'completed',
    '--start-date', '2026-09-01',
    '--end-date', '2026-09-07',
    '--json',
  ]);

  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(Object.fromEntries(mock.requests[0].url.searchParams), {
    page: '2',
    size: '100',
    model_name: 'image-model-a',
    vendor_name: 'vendor-a',
    request_type: 'img2img',
    generation_status: 'completed',
    start_date: '2026-09-01',
    end_date: '2026-09-07',
  });
});

test('history text output identifies tasks without printing prompts', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['history']);

  assert.equal(result.code, 0, result.stderr);
  assert.match(result.stdout, /task-processing/);
  assert.match(result.stdout, /task-completed/);
  assert.match(result.stdout, /task-failed/);
  assert.match(result.stdout, /image-model-a/);
  assert.match(result.stdout, /产物数/);
  assert.doesNotMatch(result.stdout, /private matching prompt/);
});

test('history validation failures do not make an API request', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());
  const invalidCases = [
    ['--page', '0'],
    ['--page', '1.5'],
    ['--size', '101'],
    ['--status', 'queued'],
    ['--start-date', '2026/09/01'],
    ['--start-date', '2026-02-30'],
    ['--start-date', '2026-09-08', '--end-date', '2026-09-07'],
    ['--model'],
    ['--page'],
    ['--timeout'],
  ];

  for (const args of invalidCases) {
    const result = await runCli(mock.baseUrl, ['history', ...args, '--json']);
    assert.equal(result.code, 1, `Expected failure for ${args.join(' ')}`);
    assert.match(result.stderr, /\[错误\]/);
  }
  assert.equal(mock.requests.length, 0);
});

test('history rejects conflicting aliases before making an API request', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'history', '--model', 'model-a', '--model-name', 'model-b', '--json',
  ]);

  assert.equal(result.code, 1);
  assert.match(result.stderr, /不能传入不同值/);
  assert.equal(mock.requests.length, 0);
});

test('history is read-only and never calls the generation endpoint', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['history', '--status', 'processing', '--json']);

  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests.map((request) => `${request.method} ${request.url.pathname}`), [
    'GET /openapi/v1/image/history',
  ]);
});
