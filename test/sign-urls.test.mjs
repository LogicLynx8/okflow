import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

async function startMock() {
  const requests = [];
  const server = createServer(async (req, res) => {
    let body = '';
    for await (const chunk of req) body += chunk;
    requests.push({ method: req.method, url: new URL(req.url, 'http://127.0.0.1'), body: body ? JSON.parse(body) : null, headers: req.headers });
    const payload = requests.at(-1).body;
    const data = req.url.includes('/sign-urls')
      ? { signed_urls: (payload?.urls ?? []).map((url) => `${url.split('?')[0]}?fresh=1`) }
      : { signed_url: `${payload?.url?.split('?')[0]}?fresh=1` };
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ code: 200, data }));
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
    close: () => new Promise((resolveClose, rejectClose) => server.close((error) => (error ? rejectClose(error) : resolveClose()))),
  };
}

function runCli(baseUrl, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: OKFLOW_DIR,
      env: { ...process.env, NO_COLOR: '1', OKFLOW_API_KEY: 'ak_test_sign_cli', OKFLOW_BASE_URL: '' },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    const timer = setTimeout(() => child.kill(), 10_000);
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.once('error', (error) => { clearTimeout(timer); rejectRun(error); });
    child.once('close', (code, signal) => { clearTimeout(timer); resolveRun({ code, signal, stdout, stderr }); });
  });
}

test('sign-url refreshes one URL without uploading or generating', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());
  const result = await runCli(mock.baseUrl, ['sign-url', 'https://bucket.example/anchor.png?Expires=1', '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(JSON.parse(result.stdout), { signed_url: 'https://bucket.example/anchor.png?fresh=1' });
  assert.equal(mock.requests.length, 1);
  assert.equal(mock.requests[0].method, 'POST');
  assert.equal(mock.requests[0].url.pathname, '/openapi/v1/oss/sign-url');
  assert.deepEqual(mock.requests[0].body, { url: 'https://bucket.example/anchor.png?Expires=1' });
  assert.equal(mock.requests[0].headers.authorization, 'Bearer ak_test_sign_cli');
});

test('sign-urls preserves order and writes an output JSON file', async (t) => {
  const mock = await startMock();
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-sign-urls-'));
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const input = join(tempDir, 'anchors.json');
  const output = join(tempDir, 'refreshed.json');
  await writeFile(input, JSON.stringify({ urls: ['https://bucket.example/a.png?old=1', 'https://bucket.example/b.png?old=2', 'https://external.example/c.png'] }), 'utf8');
  const result = await runCli(mock.baseUrl, ['sign-urls', input, '--output', output, '--json']);
  assert.equal(result.code, 0, result.stderr);
  const expected = { signed_urls: ['https://bucket.example/a.png?fresh=1', 'https://bucket.example/b.png?fresh=1', 'https://external.example/c.png?fresh=1'] };
  assert.deepEqual(JSON.parse(result.stdout), expected);
  assert.deepEqual(JSON.parse(await readFile(output, 'utf8')), expected);
  assert.deepEqual(mock.requests[0].body, { urls: ['https://bucket.example/a.png?old=1', 'https://bucket.example/b.png?old=2', 'https://external.example/c.png'] });
});

test('sign-urls rejects invalid input before making an API request', async (t) => {
  const mock = await startMock();
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-sign-urls-invalid-'));
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const cases = [
    { name: 'empty.json', value: { urls: [] }, error: /URL 列表不能为空/ },
    { name: 'not-array.json', value: { urls: 'not-an-array' }, error: /必须是 URL 数组/ },
    { name: 'not-string.json', value: { urls: [42] }, error: /必须是非空字符串/ },
    { name: 'invalid-url.json', value: { urls: ['not-a-url'] }, error: /合法的 http 或 https 地址/ },
    { name: 'too-many.json', value: { urls: Array.from({ length: 101 }, (_, index) => `https://example.test/${index}`) }, error: /不能超过 100/ },
  ];
  for (const item of cases) {
    const input = join(tempDir, item.name);
    await writeFile(input, JSON.stringify(item.value), 'utf8');
    const result = await runCli(mock.baseUrl, ['sign-urls', input, '--json']);
    assert.equal(result.code, 1, item.name);
    assert.match(result.stderr, item.error, item.name);
  }
  assert.equal(mock.requests.length, 0);
});

test('sign-urls does not overwrite an existing output unless force is explicit', async (t) => {
  const mock = await startMock();
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-sign-urls-overwrite-'));
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const input = join(tempDir, 'anchors.json');
  const output = join(tempDir, 'refreshed.json');
  await writeFile(input, JSON.stringify(['https://bucket.example/a.png?old=1']), 'utf8');
  await writeFile(output, '{"sentinel":true}\n', 'utf8');

  const blocked = await runCli(mock.baseUrl, ['sign-urls', input, '--output', output, '--json']);
  assert.equal(blocked.code, 1);
  assert.match(blocked.stderr, /--force/);
  assert.deepEqual(JSON.parse(await readFile(output, 'utf8')), { sentinel: true });

  const replaced = await runCli(mock.baseUrl, ['sign-urls', input, '--output', output, '--force', '--json']);
  assert.equal(replaced.code, 0, replaced.stderr);
  assert.deepEqual(JSON.parse(await readFile(output, 'utf8')), {
    signed_urls: ['https://bucket.example/a.png?fresh=1'],
  });
});
