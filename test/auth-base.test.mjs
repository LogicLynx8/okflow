import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveAuthBaseUrl } from '../src/commands/auth.mjs';

test('auth authorization always defaults to the official site', () => {
  const saved = process.env.OKFLOW_BASE_URL;
  process.env.OKFLOW_BASE_URL = 'http://okflow.test';
  try {
    assert.equal(resolveAuthBaseUrl({}), 'https://okflow.cn');
    assert.equal(resolveAuthBaseUrl({ 'base-url': true }), 'https://okflow.cn');
  } finally {
    if (saved === undefined) delete process.env.OKFLOW_BASE_URL;
    else process.env.OKFLOW_BASE_URL = saved;
  }
});

test('auth authorization only leaves the official site for an explicit --base-url', () => {
  assert.equal(resolveAuthBaseUrl({ 'base-url': 'http://127.0.0.1:8080/' }), 'http://127.0.0.1:8080');
  assert.equal(resolveAuthBaseUrl({ 'base-url': '  https://staging.example.com  ' }), 'https://staging.example.com');
});

test('auth logout revokes against the site that issued the credentials', () => {
  assert.equal(resolveAuthBaseUrl({}, 'https://issued.example.com/'), 'https://issued.example.com');
  assert.equal(
    resolveAuthBaseUrl({ 'base-url': 'https://explicit.example.com' }, 'https://issued.example.com'),
    'https://explicit.example.com',
  );
});
