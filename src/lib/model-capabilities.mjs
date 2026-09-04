import { UsageError } from './args.mjs';

const MEDIA_TYPES = new Set(['image', 'video', 'audio', 'music', 'file']);
const SELECT_TYPES = new Set(['select', 'radio_group', 'aspect_ratio']);
const MULTI_SELECT_TYPES = new Set(['multi_select', 'multiselect', 'checkbox_group']);
const NUMBER_TYPES = new Set(['number', 'integer', 'int', 'float']);
const INTEGER_TYPES = new Set(['integer', 'int']);
const STRING_TYPES = new Set(['input', 'textarea', 'text', 'string']);
const TOP_LEVEL_KEYS = new Set(['model', 'config', 'images', 'workflow_code', 'project_id', 'source_project_id']);

const hasOwn = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

function valuesEqual(left, right) {
  if (Object.is(left, right)) return true;
  if (left === undefined || right === undefined) return false;
  return JSON.stringify(left) === JSON.stringify(right);
}

export function isMissingValue(value) {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

export function isUiHidden(param) {
  return String(param?.type || '').toLowerCase() === 'hidden' || param?.ui_hidden === true;
}

export function matchesCondition(param, values) {
  const condition = param?.include_when;
  if (!condition) return true;
  const actual = values[condition.key];
  if (hasOwn(condition, 'equals') && !valuesEqual(actual, condition.equals)) return false;
  if (hasOwn(condition, 'not_equals') && valuesEqual(actual, condition.not_equals)) return false;
  if (Array.isArray(condition.in) && !condition.in.some((item) => valuesEqual(actual, item))) return false;
  if (Array.isArray(condition.not_in) && condition.not_in.some((item) => valuesEqual(actual, item))) return false;
  if (condition.exists !== undefined && hasOwn(values, condition.key) !== condition.exists) return false;
  if (condition.truthy !== undefined && Boolean(actual) !== condition.truthy) return false;
  return true;
}

export function getCapabilityParams(model) {
  const params = model?.capabilities?.params;
  if (!Array.isArray(params) || params.length === 0) {
    throw new UsageError(`模型 ${model?.model_name || '<unknown>'} 没有可用的 capabilities.params，禁止猜测参数或提交生成`);
  }
  const seen = new Set();
  for (const param of params) {
    if (!isObject(param) || typeof param.key !== 'string' || !param.key.trim()) {
      throw new UsageError(`模型 ${model.model_name} 的 capabilities.params 含无效参数定义`);
    }
    if (seen.has(param.key)) throw new UsageError(`模型 ${model.model_name} 重复声明参数: ${param.key}`);
    seen.add(param.key);
  }
  return params;
}

export function findPublicModel(models, modelName) {
  const items = Array.isArray(models) ? models : (models?.items ?? []);
  const model = items.find((item) => item?.model_name === modelName);
  if (!model) throw new UsageError(`公开模型列表中不存在模型: ${modelName}`);
  getCapabilityParams(model);
  return model;
}

export function resolveCapabilityValues(params, input = {}) {
  const byKey = new Map(params.map((param) => [param.key, param]));
  const resolved = {};
  for (const [key, value] of Object.entries(input ?? {})) {
    if (byKey.has(key) && value !== undefined) resolved[key] = value;
  }

  for (const param of params) {
    if (!hasOwn(resolved, param.key) && hasOwn(param, 'default')) resolved[param.key] = param.default;
  }

  const maxPasses = Math.max(1, params.length + 1);
  for (let pass = 0; pass < maxPasses; pass += 1) {
    let changed = false;
    for (const param of params) {
      const key = param.key;
      if (!matchesCondition(param, resolved)) {
        if (hasOwn(resolved, key)) {
          delete resolved[key];
          changed = true;
        }
        continue;
      }

      let nextValue = resolved[key];
      let hasValue = hasOwn(resolved, key);
      if (hasOwn(param, 'locked_value')) {
        nextValue = param.locked_value;
        hasValue = true;
      } else if (param.sync_from && hasOwn(resolved, param.sync_from)) {
        const sourceValue = resolved[param.sync_from];
        nextValue = param.value_map?.[String(sourceValue)] ?? sourceValue;
        hasValue = true;
      } else if (isUiHidden(param) && hasOwn(param, 'value')) {
        nextValue = param.value;
        hasValue = true;
      } else if (!hasValue && hasOwn(param, 'default')) {
        nextValue = param.default;
        hasValue = true;
      }
      if (hasValue && !valuesEqual(resolved[key], nextValue)) {
        resolved[key] = nextValue;
        changed = true;
      }
    }
    if (!changed) break;
  }
  return resolved;
}

export function createRequestTemplate(model) {
  const params = getCapabilityParams(model);
  const config = { prompt: null, ...resolveCapabilityValues(params, {}) };
  for (const param of params) {
    if (matchesCondition(param, config) && param.required && !hasOwn(config, param.key)) {
      config[param.key] = null;
    }
  }
  return { model: model.model_name, config };
}

function validateUrl(value, label) {
  try {
    const parsed = new URL(value);
    if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('unsupported protocol');
  } catch {
    return `${label} 必须是 http/https URL`;
  }
  return null;
}

function validateItemFields(param, value, label) {
  if (!Array.isArray(param.item_fields) || !Array.isArray(value)) return [];
  const errors = [];
  value.forEach((item, index) => {
    if (!isObject(item)) {
      errors.push(`${label}[${index}] 必须是对象`);
      return;
    }
    const allowed = new Set(param.item_fields.map((field) => field.key));
    for (const key of Object.keys(item)) {
      if (!allowed.has(key)) errors.push(`${label}[${index}] 含未声明字段: ${key}`);
    }
    errors.push(...validateValues(param.item_fields, item, `${label}[${index}].`));
  });
  return errors;
}

function validateValues(params, originalValues, prefix = '') {
  const resolved = resolveCapabilityValues(params, originalValues);
  const errors = [];

  for (const param of params) {
    const label = `${prefix}${param.label || param.key}`;
    const wasProvided = hasOwn(originalValues, param.key);
    if (wasProvided && isUiHidden(param)) {
      const hasFixedValue = hasOwn(param, 'locked_value') || hasOwn(param, 'value') || hasOwn(param, 'default') || Boolean(param.sync_from);
      if (!hasFixedValue) {
        errors.push(`${label} 是隐藏参数，不能由请求文件直接设置`);
        continue;
      }
      if (!valuesEqual(originalValues[param.key], resolved[param.key])) {
        errors.push(`${label} 是隐藏固定参数，必须保持契约值`);
        continue;
      }
    }
    if (wasProvided && hasOwn(param, 'locked_value') && !valuesEqual(originalValues[param.key], resolved[param.key])) {
      errors.push(`${label} 是锁定参数，必须为 ${JSON.stringify(resolved[param.key])}`);
      continue;
    }
    if (wasProvided && param.sync_from && !valuesEqual(originalValues[param.key], resolved[param.key])) {
      errors.push(`${label} 是派生参数，必须与 ${param.sync_from} 同步`);
      continue;
    }
    if (wasProvided && !matchesCondition(param, resolved)) {
      errors.push(`${label} 当前条件下不可用`);
      continue;
    }
    if (!matchesCondition(param, resolved)) continue;

    const current = resolved[param.key];
    if (param.required && isMissingValue(current)) {
      errors.push(`${label} 为必填项`);
      continue;
    }
    if (isMissingValue(current)) continue;

    const type = String(param.type || 'input').toLowerCase();
    if (NUMBER_TYPES.has(type)) {
      if (typeof current !== 'number' || !Number.isFinite(current)) {
        errors.push(`${label} 必须是数字`);
        continue;
      }
      if (INTEGER_TYPES.has(type) && !Number.isInteger(current)) errors.push(`${label} 必须是整数`);
      if (param.min !== undefined && current < Number(param.min)) errors.push(`${label} 不能小于 ${param.min}`);
      if (param.max !== undefined && current > Number(param.max)) errors.push(`${label} 不能大于 ${param.max}`);
      if (param.step !== undefined && Number(param.step) > 0 && param.min !== undefined) {
        const ratio = (current - Number(param.min)) / Number(param.step);
        if (Math.abs(ratio - Math.round(ratio)) > 1e-9) errors.push(`${label} 必须按步长 ${param.step} 取值`);
      }
    } else if (SELECT_TYPES.has(type)) {
      if (Array.isArray(param.options) && param.options.length && !param.options.some((option) => valuesEqual(option?.value, current) || String(option?.value) === String(current))) {
        errors.push(`${label} 的取值不受支持`);
      }
    } else if (MULTI_SELECT_TYPES.has(type)) {
      if (!Array.isArray(current)) errors.push(`${label} 必须是数组`);
      else if (Array.isArray(param.options) && param.options.length && current.some((item) => !param.options.some((option) => valuesEqual(option?.value, item) || String(option?.value) === String(item)))) {
        errors.push(`${label} 包含不支持的选项`);
      }
    } else if (type === 'switch' || type === 'boolean') {
      if (typeof current !== 'boolean') errors.push(`${label} 必须是布尔值`);
    } else if (STRING_TYPES.has(type)) {
      if (typeof current !== 'string') errors.push(`${label} 必须是字符串`);
    } else if (type === 'array' || type === 'shot_list') {
      if (!Array.isArray(current)) errors.push(`${label} 必须是数组`);
    } else if (type === 'object') {
      if (!isObject(current)) errors.push(`${label} 必须是对象`);
    } else if (type === 'json') {
      if (typeof current === 'string') {
        try { JSON.parse(current); } catch { errors.push(`${label} 必须是有效 JSON`); }
      } else if (!isObject(current) && !Array.isArray(current)) errors.push(`${label} 必须是 JSON 对象或数组`);
    } else if (MEDIA_TYPES.has(type)) {
      const media = Array.isArray(current) ? current : [current];
      if (!Array.isArray(current)) errors.push(`${label} 必须是 URL 数组`);
      if (param.max_count !== undefined && media.length > Number(param.max_count)) {
        errors.push(`${label} 最多允许 ${param.max_count} 个资源`);
      }
      for (const item of media) {
        if (typeof item !== 'string') errors.push(`${label} 的每一项都必须是 URL 字符串`);
        else {
          const urlError = validateUrl(item, label);
          if (urlError) errors.push(urlError);
        }
      }
    }

    if (Array.isArray(current) && param.max_count !== undefined && current.length > Number(param.max_count)) {
      const message = `${label} 最多允许 ${param.max_count} 项`;
      if (!errors.includes(message) && !MEDIA_TYPES.has(type)) errors.push(message);
    }
    errors.push(...validateItemFields(param, current, label));
  }
  return errors;
}

export function validateGenerationRequest(requestBody, model) {
  const errors = [];
  if (!isObject(requestBody)) throw new UsageError('请求文件根节点必须是 JSON 对象');
  for (const key of Object.keys(requestBody)) {
    if (!TOP_LEVEL_KEYS.has(key)) errors.push(`请求含未声明的顶层字段: ${key}`);
  }
  if (requestBody.model !== model.model_name) errors.push(`请求模型必须是 ${model.model_name}`);
  if (!isObject(requestBody.config)) errors.push('config 必须是 JSON 对象');

  const params = getCapabilityParams(model);
  const paramKeys = new Set(['prompt', ...params.map((param) => param.key)]);
  const config = isObject(requestBody.config) ? requestBody.config : {};
  for (const key of Object.keys(config)) {
    if (!paramKeys.has(key)) errors.push(`config 含模型未声明的参数: ${key}`);
  }

  const values = { ...config };
  if (typeof config.prompt !== 'string' || !config.prompt.trim()) errors.push('config.prompt 必须是非空字符串');
  if (requestBody.images !== undefined) {
    if (!paramKeys.has('images')) errors.push('该模型未声明 images 参数，不能传顶层 images');
    if (hasOwn(config, 'images')) errors.push('images 不能同时出现在顶层和 config 中');
    if (!Array.isArray(requestBody.images)) errors.push('顶层 images 必须是 URL 数组');
    else values.images = requestBody.images;
  }
  const capabilityValues = { ...values };
  delete capabilityValues.prompt;
  errors.push(...validateValues(params, capabilityValues));

  if (errors.length) throw new UsageError(`请求未通过 ${model.model_name} 的 capabilities.params 校验:\n- ${[...new Set(errors)].join('\n- ')}`);

  const resolved = resolveCapabilityValues(params, capabilityValues);
  const normalizedConfig = { prompt: config.prompt, ...resolved };
  if (requestBody.images !== undefined) delete normalizedConfig.images;
  const normalized = { model: model.model_name, config: normalizedConfig };
  if (requestBody.images !== undefined) normalized.images = requestBody.images;
  for (const key of ['workflow_code', 'project_id', 'source_project_id']) {
    if (requestBody[key] !== undefined) normalized[key] = requestBody[key];
  }
  return normalized;
}
