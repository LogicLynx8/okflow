import { spawn } from 'node:child_process';

export function browserCommand(url, platform = process.platform) {
  const parsed = new URL(String(url));
  if (!['http:', 'https:'].includes(parsed.protocol)) {
    throw new TypeError('浏览器授权地址必须使用 HTTP(S)');
  }
  const target = parsed.href;
  if (platform === 'win32') {
    return { command: 'rundll32.exe', args: ['url.dll,FileProtocolHandler', target] };
  }
  if (platform === 'darwin') {
    return { command: 'open', args: [target] };
  }
  return { command: 'xdg-open', args: [target] };
}

export function openBrowser(url, { platform = process.platform, spawnImpl = spawn } = {}) {
  const { command, args } = browserCommand(url, platform);
  return new Promise((resolve) => {
    let settled = false;
    const finish = (opened) => {
      if (settled) return;
      settled = true;
      resolve(opened);
    };
    try {
      const child = spawnImpl(command, args, {
        detached: true,
        stdio: 'ignore',
        windowsHide: true,
        shell: false,
      });
      child.once('error', () => finish(false));
      child.once('spawn', () => {
        child.unref();
        finish(true);
      });
    } catch {
      finish(false);
    }
  });
}
