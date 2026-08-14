/**
 * okflow 开放 API 客户端。
 *
 * 统一处理鉴权头、错误响应、超时。所有网络调用集中在这里，
 * 命令层不直接 fetch。
 */
import { readFile } from 'node:fs/promises';
import { basename, extname } from 'node:path';

import { getApiKey, getBaseUrl } from './config.mjs';

/** 凭证缺失时抛出的专用错误，便于上层给出配置指引而不是打印堆栈。 */
export class MissingCredentialError extends Error {
  constructor() {
    super('OKFLOW_API_KEY 未配置');
    this.name = 'MissingCredentialError';
  }
}

/** API 返回非 2xx 或业务 code 非 200 时抛出。 */
export class ApiError extends Error {
  constructor(message, { status, body } = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

function buildHeaders({ json = true } = {}) {
  const key = getApiKey();
  if (!key) throw new MissingCredentialError();
  const headers = {
    Authorization: `Bearer ${key}`,
  };
  if (json) headers['Content-Type'] = 'application/json';
  return headers;
}

async function request(method, path, { body, bodyType = 'json', baseUrl, timeout = 60 } = {}) {
  // 先构造 headers：凭证缺失要以 MissingCredentialError 抛出，
  // 放进下面的 try 会被包装成「请求失败」，用户就看不到配置指引了。
  const isJson = bodyType === 'json';
  const headers = buildHeaders({ json: isJson });
  const url = `${getBaseUrl(baseUrl)}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout * 1000);

  let resp;
  try {
    resp = await fetch(url, {
      method,
      headers,
      body: body === undefined ? undefined : isJson ? JSON.stringify(body) : body,
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      throw new ApiError(`请求超时（${timeout}s）: ${method} ${url}`);
    }
    throw new ApiError(`请求失败: ${method} ${url} - ${err.message}`);
  } finally {
    clearTimeout(timer);
  }

  const text = await resp.text();
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new ApiError(`响应不是合法 JSON (HTTP ${resp.status}): ${text.slice(0, 300)}`, {
      status: resp.status,
      body: text,
    });
  }

  if (!resp.ok || (parsed.code !== undefined && parsed.code !== 200)) {
    const msg = parsed.msg || parsed.message || `HTTP ${resp.status}`;
    throw new ApiError(msg, { status: resp.status, body: parsed });
  }

  return parsed.data;
}

/** 列出可用模型。type 可选，对应平台的 model_type 过滤。 */
export function listModels({ type, baseUrl, timeout } = {}) {
  const query = type ? `?model_type=${encodeURIComponent(type)}` : '';
  return request('GET', `/openapi/v1/image/models${query}`, { baseUrl, timeout });
}

/** 提交生成任务，返回含 task_id 的对象。 */
export function submitGeneration({ model, config, images, baseUrl, timeout } = {}) {
  const body = { model, config };
  if (images && images.length) body.images = images;
  return request('POST', '/openapi/v1/image/generate', { body, baseUrl, timeout });
}

/** 查询任务状态。 */
export function getTaskStatus(taskId, { baseUrl, timeout } = {}) {
  return request('GET', `/openapi/v1/image/${encodeURIComponent(taskId)}/status`, {
    baseUrl,
    timeout,
  });
}

const MIME_TYPES = {
  '.bmp': 'image/bmp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function guessMimeType(fileName) {
  return MIME_TYPES[extname(fileName).toLowerCase()] || 'application/octet-stream';
}

/** Upload a local file and return the API's FileUploadResponse data. */
export async function uploadFile({
  filePath,
  pathPrefix,
  businessType,
  businessId,
  resourceCategory,
  baseUrl,
  timeout = 300,
} = {}) {
  const fileName = basename(String(filePath || ''));
  if (!fileName) throw new TypeError('filePath is required');

  const content = await readFile(filePath);
  const form = new FormData();
  form.append('file', new Blob([content], { type: guessMimeType(fileName) }), fileName);
  if (pathPrefix) form.append('path_prefix', String(pathPrefix));
  if (businessType) form.append('business_type', String(businessType));
  if (businessId) form.append('business_id', String(businessId));
  if (resourceCategory) form.append('resource_category', String(resourceCategory));

  return request('POST', '/openapi/v1/resources/upload', {
    body: form,
    bodyType: 'multipart',
    baseUrl,
    timeout,
  });
}

/** Synchronize storage Markdown into an Agent-owned knowledge base article. */
export function syncKnowledgeMarkdown({ body, baseUrl, timeout = 300 } = {}) {
  return request('POST', '/openapi/v1/knowledge-bases/sync/markdown', {
    body,
    baseUrl,
    timeout,
  });
}

/** Read the published MCP reference catalog for local Agent synchronization. */
export function listMcpReferences({ platform, capability, keyword, page = 1, pageSize = 100, baseUrl, timeout = 60 } = {}) {
  const params = new URLSearchParams({ page: String(page), page_size: String(pageSize) });
  if (platform) params.set('platform', platform);
  if (capability) params.set('capability', capability);
  if (keyword) params.set('keyword', keyword);
  return request('GET', `/openapi/v1/agent/mcp/references?${params.toString()}`, { baseUrl, timeout });
}

/** Read one published MCP reference segment. */
export function getMcpReference(referenceId, { baseUrl, timeout = 60 } = {}) {
  const path = String(referenceId)
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/');
  return request('GET', `/openapi/v1/agent/mcp/references/${path}`, { baseUrl, timeout });
}
