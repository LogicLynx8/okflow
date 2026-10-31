/**
 * Local OAuth credential storage.
 *
 * The file contains tokens for the CLI only. Callers must use publicState()
 * when displaying the record; raw token values never belong in terminal output.
 */
import { chmodSync, existsSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import { homedir } from 'node:os';
import { dirname, join } from 'node:path';

import { redactSecrets } from './secrets.mjs';

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
    throw new Error(`OAuth 凭证文件无法读取: ${path}: ${redactSecrets(error.message)}`);
  }
}

export function saveCredentials(value) {
  const path = getCredentialPath();
  const directory = dirname(path);
  mkdirSync(directory, { recursive: true, mode: 0o700 });
  try {
    chmodSync(directory, 0o700);
  } catch {
    // Best effort on platforms without chmod semantics.
  }
  const tempPath = `${path}.${process.pid}.${randomUUID()}.tmp`;
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

export function isAccessTokenExpired(value = loadCredentials(), now = Date.now()) {
  if (!value?.access_token) return true;
  if (value.expires_at && !(Date.parse(value.expires_at) > now)) return true;
  return false;
}

export function getStoredCredentials() {
  return loadCredentials();
}

export function publicState(value = loadCredentials()) {
  const result = { version: 1 };
  if (value.client_id) result.client_id = value.client_id;
  if (value.subject) result.subject = value.subject;
  if (Array.isArray(value.scope)) result.scope = [...value.scope];
  if (value.acquired_at) result.acquired_at = value.acquired_at;
  if (value.expires_at) result.expires_at = value.expires_at;
  result.refresh_available = Boolean(value.refresh_token);
  if (value.pending?.user_code) result.pending_user_code = value.pending.user_code;
  if (value.pending?.verification_uri) result.verification_uri = value.pending.verification_uri;
  return result;
}

export function getStoredAccessToken() {
  const credentials = loadCredentials();
  if (isAccessTokenExpired(credentials)) return '';
  return String(credentials.access_token);
}
