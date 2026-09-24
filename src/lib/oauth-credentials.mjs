/**
 * Local OAuth credential storage.
 *
 * The file contains tokens for the CLI only. Callers must use publicState()
 * when displaying the record; raw token values never belong in terminal output.
 */
import { chmodSync, existsSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';

const DEFAULT_PATH = join(homedir(), '.okflow', 'credentials.json');

export function getCredentialPath() {
  return process.env.OKFLOW_CREDENTIALS_PATH?.trim() || DEFAULT_PATH;
}

function normalize(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { version: 1 };
  return { version: 1, ...value };
}

export function loadCredentials() {
  const path = getCredentialPath();
  if (!existsSync(path)) return { version: 1 };
  try {
    return normalize(JSON.parse(readFileSync(path, 'utf8')));
  } catch (error) {
    throw new Error(`OAuth 凭证文件无法读取: ${path}: ${error.message}`);
  }
}

export function saveCredentials(value) {
  const path = getCredentialPath();
  mkdirSync(dirname(path), { recursive: true });
  const tempPath = `${path}.${process.pid}.tmp`;
  writeFileSync(tempPath, `${JSON.stringify(normalize(value), null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
  try {
    chmodSync(tempPath, 0o600);
  } catch {
    // Windows may not support POSIX modes; the file is still created privately.
  }
  renameSync(tempPath, path);
  try {
    chmodSync(path, 0o600);
  } catch {
    // Best effort on platforms without chmod semantics.
  }
}

export function clearCredentials() {
  const path = getCredentialPath();
  if (existsSync(path)) unlinkSync(path);
}

export function publicState(value = loadCredentials()) {
  const result = { version: 1 };
  if (value.client_id) result.client_id = value.client_id;
  if (value.subject) result.subject = value.subject;
  if (Array.isArray(value.scope)) result.scope = [...value.scope];
  if (value.acquired_at) result.acquired_at = value.acquired_at;
  if (value.expires_at) result.expires_at = value.expires_at;
  if (value.pending?.user_code) result.pending_user_code = value.pending.user_code;
  if (value.pending?.verification_uri) result.verification_uri = value.pending.verification_uri;
  return result;
}

export function getStoredAccessToken() {
  const credentials = loadCredentials();
  if (!credentials.access_token) return '';
  if (credentials.expires_at && Date.parse(credentials.expires_at) <= Date.now()) return '';
  return String(credentials.access_token);
}
