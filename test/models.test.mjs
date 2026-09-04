import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

async function startMock() {
  const requests = [];
  const server = createServer((req, res) => {
    requests.push({
      method: req.method,
      headers: req.headers,
      url: new URL(req.url, 'http://127.0.0.1'),
    });
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({
      code: 200,
      data: [{ model_name: 'public-test-model', model_type: 'text2video' }],
    }));
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
        OKFLOW_API_KEY: 'ak_test_models_cli',
        OKFLOW_BASE_URL: '',
      },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill(), 10_000);

    child.stdout.on('data', (chunk) => {
      stdout += chunk;
    });
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
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

test('models always requests only public models', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['models', '--json']);

  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), [
    { model_name: 'public-test-model', model_type: 'text2video' },
  ]);
  assert.equal(mock.requests.length, 1);
  assert.equal(mock.requests[0].method, 'GET');
  assert.equal(mock.requests[0].url.pathname, '/openapi/v1/image/models');
  assert.deepEqual(Object.fromEntries(mock.requests[0].url.searchParams), {
    is_public: 'true',
  });
  assert.equal(mock.requests[0].headers.authorization, 'Bearer ak_test_models_cli');
});

test('models combines the forced public filter with model type', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'models',
    '--type', 'text2video',
    '--json',
  ]);

  assert.equal(result.code, 0, result.stderr);
  assert.equal(mock.requests.length, 1);
  assert.deepEqual(Object.fromEntries(mock.requests[0].url.searchParams), {
    is_public: 'true',
    model_type: 'text2video',
  });
});
