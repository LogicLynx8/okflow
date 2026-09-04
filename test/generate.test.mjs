import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

async function startMock(model) {
  const requests = [];
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8');
    requests.push({ method: req.method, url: new URL(req.url, 'http://127.0.0.1'), body: raw ? JSON.parse(raw) : undefined });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.method === 'GET') res.end(JSON.stringify({ code: 200, data: [model] }));
    else res.end(JSON.stringify({ code: 200, data: { task_id: 'generated-task' } }));
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

function runCli(baseUrl, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: OKFLOW_DIR,
      env: { ...process.env, NO_COLOR: '1', OKFLOW_API_KEY: 'ak_test_generate_cli', OKFLOW_BASE_URL: '' },
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

test('generate validates against the live contract and injects declared defaults', async (t) => {
  const mock = await startMock({
    model_name: 'live-model',
    capabilities: { params: [{ key: 'size', type: 'select', default: '1K', options: [{ value: '1K' }] }] },
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['generate', '--model', 'live-model', '--prompt', 'A valid prompt', '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests.map((request) => request.method), ['GET', 'POST']);
  assert.deepEqual(mock.requests[1].body, { model: 'live-model', config: { prompt: 'A valid prompt', size: '1K' } });
});

test('generate blocks an empty contract without sending a paid POST', async (t) => {
  const mock = await startMock({ model_name: 'empty-model', capabilities: { params: [] } });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['generate', '--model', 'empty-model', '--prompt', 'Must not submit', '--json']);
  assert.equal(result.code, 1);
  assert.match(`${result.stdout}\n${result.stderr}`, /capabilities\.params/);
  assert.deepEqual(mock.requests.map((request) => request.method), ['GET']);
});
