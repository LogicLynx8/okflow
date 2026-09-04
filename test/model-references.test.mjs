import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { homedir, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import test from 'node:test';

import {
  DEFAULT_MODEL_REFERENCES_DIR,
  ensureLocalModelCatalog,
  syncModelReferences,
} from '../src/lib/model-references.mjs';

process.env.OKFLOW_API_KEY = 'ak_test_model_references';

function model(name = 'reference-model', max = 10) {
  return {
    id: 42,
    model_name: name,
    display_name: 'Reference Model',
    model_type: 'text2video',
    capabilities: {
      params: [
        { key: 'duration', type: 'integer', min: 5, max, default: 5 },
        {
          key: 'shots',
          type: 'shot_list',
          item_fields: [{ key: 'prompt', type: 'textarea', required: true }],
        },
      ],
      request_binding: { endpoint: '/v1/videos', body: { duration: '$duration' } },
    },
  };
}

async function startMock(state) {
  const server = createServer((req, res) => {
    state.requestCount = (state.requestCount ?? 0) + 1;
    if (state.fail) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ code: 500, msg: 'mock failure' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ code: 200, data: state.models }));
  });
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });
  return {
    baseUrl: `http://127.0.0.1:${server.address().port}`,
    close: () => new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve())),
  };
}

test('default model reference cache lives in the user home directory', () => {
  assert.equal(DEFAULT_MODEL_REFERENCES_DIR, resolve(homedir(), '.okflow', 'model-references'));
});

test('local catalog is fetched when the cache or requested model is missing', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-model-ensure-'));
  const targetDir = join(tempDir, 'models');
  const state = { models: [model('first-model')], requestCount: 0 };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const first = await ensureLocalModelCatalog({
    baseUrl: mock.baseUrl,
    targetDir,
    modelName: 'first-model',
  });
  assert.equal(first.synchronized, true);
  assert.equal(first.sync_reason, 'cache_missing');
  assert.equal(state.requestCount, 1);

  const cached = await ensureLocalModelCatalog({
    baseUrl: 'http://127.0.0.1:1',
    targetDir,
    modelName: 'first-model',
  });
  assert.equal(cached.synchronized, false);
  assert.equal(state.requestCount, 1);

  state.models = [model('second-model')];
  const refreshed = await ensureLocalModelCatalog({
    baseUrl: mock.baseUrl,
    targetDir,
    modelName: 'second-model',
  });
  assert.equal(refreshed.synchronized, true);
  assert.equal(refreshed.sync_reason, 'model_missing');
  assert.equal(state.requestCount, 2);
  assert.deepEqual(
    JSON.parse(await readFile(join(targetDir, 'catalog.json'), 'utf8')).map((item) => item.model_name),
    ['second-model'],
  );
});

test('model reference sync writes exact JSON, manifest, index and per-model docs', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-model-sync-'));
  const targetDir = join(tempDir, 'models');
  const state = { models: [model(), { model_name: 'empty-model', capabilities: { params: [] } }] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  const synced = await syncModelReferences({ baseUrl: mock.baseUrl, targetDir });
  assert.equal(synced.status, 'synchronized');
  assert.deepEqual(synced.models[1].capabilities.params[1].item_fields, [
    { key: 'prompt', required: true, type: 'textarea' },
  ]);

  const catalog = JSON.parse(await readFile(join(targetDir, 'catalog.json'), 'utf8'));
  const manifest = JSON.parse(await readFile(join(targetDir, 'manifest.json'), 'utf8'));
  const index = await readFile(join(targetDir, 'INDEX.md'), 'utf8');
  const modelDoc = await readFile(join(targetDir, 'models', 'reference-model--42.md'), 'utf8');
  assert.deepEqual(catalog, synced.models);
  assert.equal(manifest.model_count, 2);
  assert.deepEqual(manifest.models_missing_params, ['empty-model']);
  assert.match(index, /reference-model--42\.md/);
  assert.match(modelDoc, /Exact capabilities\.params/);
  assert.match(modelDoc, /"item_fields"/);
});

test('check-only reports current and stale contracts without replacing files', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-model-check-'));
  const targetDir = join(tempDir, 'models');
  const state = { models: [model()] };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  await syncModelReferences({ baseUrl: mock.baseUrl, targetDir });
  assert.equal((await syncModelReferences({ baseUrl: mock.baseUrl, targetDir, checkOnly: true })).status, 'current');
  const before = await readFile(join(targetDir, 'catalog.json'), 'utf8');
  state.models = [model('reference-model', 15)];
  const stale = await syncModelReferences({ baseUrl: mock.baseUrl, targetDir, checkOnly: true });
  assert.equal(stale.status, 'stale');
  assert.notEqual(stale.local_contract_sha256, stale.remote_contract_sha256);
  assert.equal(await readFile(join(targetDir, 'catalog.json'), 'utf8'), before);
});

test('failed remote synchronization leaves the previous reference tree untouched', async (t) => {
  const tempDir = await mkdtemp(join(tmpdir(), 'okflow-model-failure-'));
  const targetDir = join(tempDir, 'models');
  const state = { models: [model()], fail: false };
  const mock = await startMock(state);
  t.after(() => mock.close());
  t.after(() => rm(tempDir, { recursive: true, force: true }));

  await syncModelReferences({ baseUrl: mock.baseUrl, targetDir });
  await writeFile(join(targetDir, 'sentinel.txt'), 'keep-me', 'utf8');
  state.fail = true;
  await assert.rejects(syncModelReferences({ baseUrl: mock.baseUrl, targetDir }), /mock failure/);
  assert.equal(await readFile(join(targetDir, 'sentinel.txt'), 'utf8'), 'keep-me');
});
