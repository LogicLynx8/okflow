const SENSITIVE_KEYS = /^(access[_-]?token|refresh[_-]?token|device[_-]?code|authorization|token|secret|api[_-]?key)$/i;

export function redactSecrets(value) {
  if (value === undefined || value === null) return value;
  if (typeof value === 'string') {
    return value
      .replace(/(Bearer\s+)[^\s,;]+/gi, '$1[REDACTED]')
      .replace(/((?:access|refresh|device)?[_-]?token\s*[:=]\s*["']?)[^\s,"'}]+/gi, '$1[REDACTED]')
      .replace(/(api[_-]?key\s*[:=]\s*["']?)[^\s,"'}]+/gi, '$1[REDACTED]');
  }
  if (Array.isArray(value)) return value.map((item) => redactSecrets(item));
  if (typeof value === 'object') {
    const result = {};
    for (const [key, item] of Object.entries(value)) {
      result[key] = SENSITIVE_KEYS.test(key) ? '[REDACTED]' : redactSecrets(item);
    }
    return result;
  }
  return value;
}

