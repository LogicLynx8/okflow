import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OKFLOW_DIR = resolve(HERE, '..');
const CLI_ENTRY = join(OKFLOW_DIR, 'bin', 'okflow.mjs');

function visibleAgent(overrides = {}) {
  return {
    title: 'Image Prompt Agent',
    prompt_code: 'image_prompt_agent',
    output_format: 'text',
    category_code: 'image',
    tags: ['image', 'prompt'],
    ...overrides,
  };
}

function generationModel() {
  return {
    model_name: 'caller-selected-model',
    model_type: 'text2img',
    capabilities: {
      params: [
        { key: 'ratio', type: 'aspect_ratio', options: [{ value: '1:1' }, { value: '16:9' }] },
        { key: 'seed', type: 'integer' },
        { key: 'images', type: 'image', max_count: 8 },
      ],
    },
  };
}

function handleModelList(request, res) {
  if (request.method === 'GET' && request.url.pathname === '/openapi/v1/image/models') {
    sendJson(res, [generationModel()]);
    return true;
  }
  return false;
}

function sendJson(res, data, { status = 200, code = 200 } = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ code, data }));
}

async function readRequest(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const rawBody = Buffer.concat(chunks).toString('utf8');
  let body;
  if (rawBody) {
    try {
      body = JSON.parse(rawBody);
    } catch {
      body = rawBody;
    }
  }
  return {
    method: req.method,
    headers: req.headers,
    url: new URL(req.url, 'http://127.0.0.1'),
    rawBody,
    body,
  };
}

async function startMock(handler) {
  let handlerError;
  const requests = [];
  const server = createServer(async (req, res) => {
    const request = await readRequest(req);
    requests.push(request);
    try {
      await handler(request, res);
      if (!res.writableEnded) {
        throw new Error(`Mock handler did not respond to ${request.method} ${request.url.pathname}`);
      }
    } catch (error) {
      handlerError ||= error;
      if (!res.headersSent) {
        sendJson(res, { error: error.message }, { status: 500, code: 500 });
      } else if (!res.writableEnded) {
        res.end();
      }
    }
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
    assertHealthy() {
      if (handlerError) throw handlerError;
    },
    close() {
      return new Promise((resolveClose, rejectClose) => server.close((error) => (error ? rejectClose(error) : resolveClose())));
    },
  };
}

function runCli(baseUrl, args) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(process.execPath, [CLI_ENTRY, ...args, '--base-url', baseUrl], {
      cwd: OKFLOW_DIR,
      env: {
        ...process.env,
        NO_COLOR: '1',
        OKFLOW_API_KEY: 'ak_test_agent_cli',
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

function parseJsonOutput(result) {
  assert.equal(result.code, 0, `CLI failed:\nstdout: ${result.stdout}\nstderr: ${result.stderr}`);
  return JSON.parse(result.stdout);
}

function listPayload(item, { page = 1, pageSize = 20 } = {}) {
  return { items: [item], total: 1, page, page_size: pageSize };
}

test('agent list forwards filters and emits the complete JSON page', async (t) => {
  const item = visibleAgent();
  let query;
  let authorization;
  const mock = await startMock((request, res) => {
    assert.equal(request.method, 'GET');
    assert.equal(request.url.pathname, '/openapi/v1/agent/agents');
    query = Object.fromEntries(request.url.searchParams);
    authorization = request.headers.authorization;
    sendJson(res, listPayload(item, { page: 2, pageSize: 15 }));
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent',
    'list',
    '--category-code', 'image',
    '--tags', 'image,prompt',
    '--output-format', 'text',
    '--page', '2',
    '--page-size', '15',
    '--json',
  ]);

  assert.deepEqual(parseJsonOutput(result), listPayload(item, { page: 2, pageSize: 15 }));
  assert.deepEqual(query, {
    page: '2',
    page_size: '15',
    category_code: 'image',
    tags: 'image,prompt',
    output_format: 'text',
  });
  assert.equal(authorization, 'Bearer ak_test_agent_cli');
  mock.assertHealthy();
});

test('agent list renders visible Agent information as a table by default', async (t) => {
  const item = visibleAgent({ prompt_code: 'table_agent', title: 'Table Agent' });
  const mock = await startMock((request, res) => {
    assert.equal(request.url.pathname, '/openapi/v1/agent/agents');
    sendJson(res, listPayload(item));
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, ['agent', 'list']);

  assert.equal(result.code, 0, result.stderr);
  assert.match(result.stdout, /Table Agent/);
  assert.match(result.stdout, /table_agent/);
  mock.assertHealthy();
});

test('agent call preflights visibility and sends the documented request body', async (t) => {
  const promptCode = 'copy_agent';
  let callBody;
  const callResponse = {
    success: true,
    message: 'Agent response',
    output_format: 'text',
    prompt_code: promptCode,
    session_id: 'session-1',
    timestamp: '2026-08-19T00:00:00+08:00',
  };
  const mock = await startMock((request, res) => {
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
      sendJson(res, listPayload(visibleAgent({ prompt_code: promptCode })));
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      callBody = request.body;
      sendJson(res, callResponse);
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent',
    'call',
    '--prompt-code', promptCode,
    '--message', 'Turn this into a concise prompt.',
    '--variables', '{"style":"editorial","lang":"en"}',
    '--session-id', 'client-session',
    '--model-id', 'override-model',
    '--temperature', '0.35',
    '--max-tokens', '512',
    '--agent-images', 'https://input.example/one.png,https://input.example/two.png',
    '--workflow-code', 'image-workflow',
    '--json',
  ]);

  assert.deepEqual(parseJsonOutput(result), callResponse);
  assert.deepEqual(callBody, {
    prompt_code: promptCode,
    message: 'Turn this into a concise prompt.',
    stream: false,
    variables: { style: 'editorial', lang: 'en' },
    session_id: 'client-session',
    model_id: 'override-model',
    temperature: 0.35,
    max_tokens: 512,
    images: ['https://input.example/one.png', 'https://input.example/two.png'],
    workflow_code: 'image-workflow',
  });
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), [
    '/openapi/v1/agent/agents',
    '/openapi/v1/agent/call',
  ]);
  mock.assertHealthy();
});

test('agent call refuses a prompt_code that is not visible before any Agent call', async (t) => {
  let agentCallCount = 0;
  const mock = await startMock((request, res) => {
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
      sendJson(res, listPayload(visibleAgent({ prompt_code: 'visible_agent' })));
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      agentCallCount += 1;
      sendJson(res, { success: true });
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent',
    'call',
    '--prompt-code', 'hidden_agent',
    '--message', 'This must not reach the Agent.',
    '--json',
  ]);

  assert.equal(result.code, 1);
  assert.equal(agentCallCount, 0);
  assert.match(`${result.stdout}\n${result.stderr}`, /hidden_agent|prompt_code|可调用/i);
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), ['/openapi/v1/agent/agents']);
  mock.assertHealthy();
});

test('agent image uses text output only as config.prompt and preserves generation settings', async (t) => {
  const promptCode = 'image_prompt_agent';
  const generatedPrompt = 'A bright studio product photo with controlled soft light.';
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-agent-cli-'));
  const localImage = join(tempDir, 'reference.png');
  await writeFile(localImage, 'mock image bytes');
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  let agentCallBody;
  let generationBody;
  const mock = await startMock((request, res) => {
    if (handleModelList(request, res)) return;
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
      sendJson(res, listPayload(visibleAgent({ prompt_code: promptCode })));
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      agentCallBody = request.body;
      sendJson(res, {
        success: true,
        message: generatedPrompt,
        output: { agent_text: generatedPrompt },
        output_format: 'text',
        prompt_code: promptCode,
        model: 'agent-must-not-select-this-model',
        config: { prompt: 'agent-must-not-write-config' },
        images: ['https://agent.example/not-a-generation-reference.png'],
      });
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/resources/upload') {
      sendJson(res, { url: 'https://upload.example/local-reference.png' });
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
      generationBody = request.body;
      sendJson(res, { task_id: 'generated-task' });
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent',
    'image',
    '--prompt-code', promptCode,
    '--message', 'Design a premium product image.',
    '--model', 'caller-selected-model',
    '--config', '{"ratio":"1:1","seed":42,"prompt":"caller prompt must be replaced"}',
    '--images', 'https://caller.example/existing-reference.png',
    '--image-file', localImage,
    '--json',
  ]);

  assert.deepEqual(parseJsonOutput(result), { task_id: 'generated-task' });
  assert.deepEqual(agentCallBody, {
    prompt_code: promptCode,
    message: 'Design a premium product image.',
    stream: false,
  });
  assert.deepEqual(generationBody, {
    model: 'caller-selected-model',
    config: {
      ratio: '1:1',
      seed: 42,
      prompt: generatedPrompt,
    },
    images: [
      'https://caller.example/existing-reference.png',
      'https://upload.example/local-reference.png',
    ],
  });
  assert.equal(mock.requests[0].url.pathname, '/openapi/v1/image/models');
  assert.equal(mock.requests.filter((request) => request.url.pathname === '/openapi/v1/image/models').length, 2);
  mock.assertHealthy();
});

test('agent image extracts a JSON prompt only through the explicit prompt path', async (t) => {
  const promptCode = 'structured_image_prompt_agent';
  const jsonPrompt = 'A structured visual prompt for a neon city at dusk.';
  let generationBody;
  const mock = await startMock((request, res) => {
    if (handleModelList(request, res)) return;
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
      sendJson(res, listPayload(visibleAgent({ prompt_code: promptCode, output_format: 'json' })));
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      sendJson(res, {
        success: true,
        output_format: 'json',
        prompt_code: promptCode,
        json_message: { prompt: jsonPrompt, model: 'ignored-agent-value' },
      });
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
      generationBody = request.body;
      sendJson(res, { task_id: 'json-prompt-task' });
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent',
    'image',
    '--prompt-code', promptCode,
    '--message', 'Turn the scene into an image prompt.',
    '--prompt-path', 'json_message.prompt',
    '--model', 'caller-selected-model',
    '--config', '{"ratio":"16:9"}',
    '--json',
  ]);

  assert.deepEqual(parseJsonOutput(result), { task_id: 'json-prompt-task' });
  assert.deepEqual(generationBody, {
    model: 'caller-selected-model',
    config: { ratio: '16:9', prompt: jsonPrompt },
  });
  assert.equal(mock.requests[0].url.pathname, '/openapi/v1/image/models');
  mock.assertHealthy();
});

for (const scenario of [
  {
    name: 'requires --prompt-path for JSON output',
    args: [],
    expected: /--prompt-path/,
  },
  {
    name: 'does not generate when the JSON prompt path is invalid',
    args: ['--prompt-path', 'json_message.missing'],
    expected: /missing/,
  },
]) {
  test(`agent image ${scenario.name}`, async (t) => {
    let generationCount = 0;
    const mock = await startMock((request, res) => {
      if (handleModelList(request, res)) return;
      if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
        sendJson(res, listPayload(visibleAgent({ prompt_code: 'json_agent', output_format: 'json' })));
        return;
      }
      if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
        sendJson(res, {
          success: true,
          output_format: 'json',
          prompt_code: 'json_agent',
          json_message: { prompt: 'This must never be submitted for this case.' },
        });
        return;
      }
      if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
        generationCount += 1;
        sendJson(res, { task_id: 'unexpected-generation' });
        return;
      }
      throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
    });
    t.after(() => mock.close());

    const result = await runCli(mock.baseUrl, [
      'agent',
      'image',
      '--prompt-code', 'json_agent',
      '--message', 'Give me a JSON image prompt.',
      '--model', 'caller-selected-model',
      ...scenario.args,
      '--json',
    ]);

    assert.equal(result.code, 1);
    assert.equal(generationCount, 0);
    assert.match(`${result.stdout}\n${result.stderr}`, scenario.expected);
    assert.deepEqual(mock.requests.map((request) => request.url.pathname), [
      '/openapi/v1/image/models',
      '/openapi/v1/agent/agents',
      '/openapi/v1/agent/call',
    ]);
    mock.assertHealthy();
  });
}

test('agent image blocks an empty model parameter contract before the paid Agent call', async (t) => {
  let agentCallCount = 0;
  let generationCount = 0;
  const mock = await startMock((request, res) => {
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/image/models') {
      sendJson(res, [{
        model_name: 'empty-contract-model',
        model_type: 'text2img',
        capabilities: { params: [] },
      }]);
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      agentCallCount += 1;
      sendJson(res, { success: true, message: 'must not run' });
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
      generationCount += 1;
      sendJson(res, { task_id: 'must-not-run' });
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent', 'image',
    '--prompt-code', 'image_prompt_agent',
    '--message', 'Create a prompt.',
    '--model', 'empty-contract-model',
    '--json',
  ]);

  assert.equal(result.code, 1);
  assert.match(`${result.stdout}\n${result.stderr}`, /capabilities\.params/);
  assert.equal(agentCallCount, 0);
  assert.equal(generationCount, 0);
  assert.deepEqual(mock.requests.map((request) => request.url.pathname), ['/openapi/v1/image/models']);
  mock.assertHealthy();
});

test('agent image rechecks model capabilities after the Agent call and blocks contract drift', async (t) => {
  let modelLookupCount = 0;
  let generationCount = 0;
  const mock = await startMock((request, res) => {
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/image/models') {
      modelLookupCount += 1;
      sendJson(res, [modelLookupCount === 1 ? generationModel() : {
        model_name: 'caller-selected-model',
        capabilities: { params: [] },
      }]);
      return;
    }
    if (request.method === 'GET' && request.url.pathname === '/openapi/v1/agent/agents') {
      sendJson(res, listPayload(visibleAgent()));
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/agent/call') {
      sendJson(res, { success: true, message: 'A prompt returned after the contract changed.' });
      return;
    }
    if (request.method === 'POST' && request.url.pathname === '/openapi/v1/image/generate') {
      generationCount += 1;
      sendJson(res, { task_id: 'must-not-run' });
      return;
    }
    throw new Error(`Unexpected request: ${request.method} ${request.url.pathname}`);
  });
  t.after(() => mock.close());

  const result = await runCli(mock.baseUrl, [
    'agent', 'image',
    '--prompt-code', 'image_prompt_agent',
    '--message', 'Create a prompt.',
    '--model', 'caller-selected-model',
    '--json',
  ]);

  assert.equal(result.code, 1);
  assert.match(`${result.stdout}\n${result.stderr}`, /capabilities\.params/);
  assert.equal(modelLookupCount, 2);
  assert.equal(generationCount, 0);
  mock.assertHealthy();
});
