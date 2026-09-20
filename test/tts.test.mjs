import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { mkdtemp, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const CLI = join(ROOT, 'bin', 'okflow.mjs');

async function startMock() {
  const requests = [];
  const server = createServer(async (req, res) => {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const raw = Buffer.concat(chunks).toString('utf8');
    requests.push({ method: req.method, url: req.url, body: raw ? JSON.parse(raw) : undefined });
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (req.method === 'POST') {
      res.end(JSON.stringify({ code: 200, data: { task_id: 'tts-task', status: 'processing' } }));
    } else {
      res.end(JSON.stringify({ code: 200, data: { task_id: 'tts-task', status: 'completed', audio_url: 'https://example.test/a.mp3' } }));
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

function runCli(baseUrl, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI, ...args, '--base-url', baseUrl], {
      cwd: ROOT,
      env: { ...process.env, NO_COLOR: '1', OKFLOW_API_KEY: 'ak_test_tts_cli', OKFLOW_BASE_URL: '' },
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

test('tts submits advanced optional parameters and polls the TTS endpoint', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());
  const dir = await mkdtemp(join(tmpdir(), 'okflow-tts-'));
  const pronunciation = join(dir, 'pronunciation.txt');
  await writeFile(pronunciation, 'ASAP/As soon as possible\nMiniMax/Mini Max\n', 'utf8');

  const result = await runCli(mock.baseUrl, [
    'tts', '--model', 'runninghub-speech-2.8-hd', '--voice', 'Elegant_Man',
    '--text', 'hello', '--volume', '1.2', '--pitch', '-2', '--emotion', 'calm',
    '--english-normalization', 'true', '--pronunciation-file', pronunciation,
    '--wait', '--interval', '0', '--json',
  ]);

  assert.equal(result.code, 0, result.stderr);
  assert.equal(mock.requests[0].url, '/openapi/v1/audio/speech');
  assert.deepEqual(mock.requests[0].body, {
    model: 'runninghub-speech-2.8-hd', input: 'hello', response_format: 'mp3', speed: 1,
    voice: 'Elegant_Man', volume: 1.2, pitch: -2, emotion: 'calm',
    english_normalization: true,
    pronunciation_dict: ['ASAP/As soon as possible', 'MiniMax/Mini Max'],
  });
  assert.equal(mock.requests[1].url, '/openapi/v1/audio/tasks/tts-task');
});

test('tts speaker asset mode omits model', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());
  const result = await runCli(mock.baseUrl, ['tts', '--speaker-id', 'voice-asset-1', '--text', 'hello', '--json']);
  assert.equal(result.code, 0, result.stderr);
  assert.deepEqual(mock.requests[0].body, {
    speaker_id: 'voice-asset-1', input: 'hello', response_format: 'mp3', speed: 1,
  });
});

test('tts rejects ambiguous routing before a paid POST', async (t) => {
  const mock = await startMock();
  t.after(() => mock.close());
  const result = await runCli(mock.baseUrl, [
    'tts', '--model', 'm1', '--speaker-id', 'v1', '--text', 'hello', '--json',
  ]);
  assert.equal(result.code, 1);
  assert.match(result.stderr, /必须且只能提供一个/);
  assert.equal(mock.requests.length, 0);
});
