import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import test from 'node:test';

import { browserCommand, openBrowser } from '../src/lib/browser.mjs';

test('browserCommand uses parameterized system launchers without a shell', () => {
  assert.deepEqual(browserCommand('https://okflow.cn/oauth/device?user_code=ABCD-1234', 'win32'), {
    command: 'rundll32.exe',
    args: ['url.dll,FileProtocolHandler', 'https://okflow.cn/oauth/device?user_code=ABCD-1234'],
  });
  assert.deepEqual(browserCommand('https://okflow.cn/oauth/device', 'darwin'), {
    command: 'open',
    args: ['https://okflow.cn/oauth/device'],
  });
  assert.deepEqual(browserCommand('https://okflow.cn/oauth/device', 'linux'), {
    command: 'xdg-open',
    args: ['https://okflow.cn/oauth/device'],
  });
  assert.throws(() => browserCommand('file:///tmp/token', 'linux'), /HTTP\(S\)/);
});

test('openBrowser returns false on launcher failure and never enables shell mode', async () => {
  let options;
  const spawnImpl = (_command, _args, receivedOptions) => {
    options = receivedOptions;
    const child = new EventEmitter();
    child.unref = () => {};
    queueMicrotask(() => child.emit('error', new Error('missing launcher')));
    return child;
  };

  assert.equal(await openBrowser('https://okflow.cn/oauth/device', { platform: 'linux', spawnImpl }), false);
  assert.equal(options.shell, false);
  assert.equal(options.windowsHide, true);
});
