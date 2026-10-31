import assert from 'node:assert/strict';
import test from 'node:test';

import { getBaseUrl } from '../src/lib/config.mjs';

test('default API base URL points at the official site', () => {
  const saved = process.env.OKFLOW_BASE_URL;
  delete process.env.OKFLOW_BASE_URL;
  try {
    assert.equal(getBaseUrl(), 'https://okflow.cn');
  } finally {
    if (saved === undefined) delete process.env.OKFLOW_BASE_URL;
    else process.env.OKFLOW_BASE_URL = saved;
  }
});

test('OKFLOW_BASE_URL still overrides the default for local integration', () => {
  const saved = process.env.OKFLOW_BASE_URL;
  process.env.OKFLOW_BASE_URL = 'http://127.0.0.1:8080/';
  try {
    assert.equal(getBaseUrl(), 'http://127.0.0.1:8080');
  } finally {
    if (saved === undefined) delete process.env.OKFLOW_BASE_URL;
    else process.env.OKFLOW_BASE_URL = saved;
  }
});
