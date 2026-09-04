import { createHash, randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { listModels } from './api.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const DEFAULT_MODEL_REFERENCES_DIR = resolve(HERE, '..', '..', 'references', 'models');
const CONTRACT_FIELDS = ['id', 'model_name', 'display_name', 'description', 'model_type', 'updated_time', 'capabilities'];

function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableValue(value[key])]));
}

function normalizeModels(data) {
  const items = Array.isArray(data) ? data : (data?.items ?? []);
  if (!Array.isArray(items)) throw new Error('模型列表响应必须是数组或包含 items 数组');
  const seen = new Set();
  const models = items.map((item) => {
    if (!item || typeof item !== 'object' || typeof item.model_name !== 'string' || !item.model_name.trim()) {
      throw new Error('模型列表包含无效 model_name');
    }
    if (seen.has(item.model_name)) throw new Error(`模型列表包含重复 model_name: ${item.model_name}`);
    seen.add(item.model_name);
    const params = item.capabilities?.params;
    if (params !== undefined && params !== null && !Array.isArray(params)) {
      throw new Error(`模型 ${item.model_name} 的 capabilities.params 不是数组`);
    }
    return Object.fromEntries(CONTRACT_FIELDS.filter((key) => item[key] !== undefined).map((key) => [key, stableValue(item[key])]));
  });
  return models.sort((left, right) => left.model_name.localeCompare(right.model_name));
}

function hashModels(models) {
  return createHash('sha256').update(JSON.stringify(stableValue(models))).digest('hex');
}

function safeName(value) {
  const normalized = String(value).toLowerCase().replace(/[^a-z0-9._-]+/g, '-').replace(/^-+|-+$/g, '');
  return normalized || 'model';
}

function modelFileName(model) {
  const id = model.id === undefined ? 'no-id' : safeName(model.id);
  return `${safeName(model.model_name)}--${id}.md`;
}

function formatCell(value) {
  if (value === undefined) return '';
  return `\`${JSON.stringify(value).replaceAll('|', '\\|')}\``;
}

function renderModelDoc(model) {
  const params = model.capabilities?.params;
  const usable = Array.isArray(params) && params.length > 0;
  const lines = [
    `# ${model.display_name || model.model_name}`,
    '',
    '> AUTO-GENERATED from the public model API. Do not edit manually.',
    '',
    `- Model: \`${model.model_name}\``,
    `- Type: \`${model.model_type || ''}\``,
    `- Parameter status: **${usable ? 'available' : 'unavailable - generation must be blocked'}**`,
    '',
  ];
  if (usable) {
    lines.push('| Key | Type | Required | Default | Options / bounds |', '| --- | --- | --- | --- | --- |');
    for (const param of params) {
      const constraints = {
        ...(param.options !== undefined ? { options: param.options } : {}),
        ...(param.min !== undefined ? { min: param.min } : {}),
        ...(param.max !== undefined ? { max: param.max } : {}),
        ...(param.step !== undefined ? { step: param.step } : {}),
        ...(param.max_count !== undefined ? { max_count: param.max_count } : {}),
      };
      lines.push(`| \`${param.key}\` | \`${param.type || ''}\` | ${param.required ? 'yes' : 'no'} | ${formatCell(param.default)} | ${Object.keys(constraints).length ? formatCell(constraints) : ''} |`);
    }
  } else {
    lines.push('This model has no non-empty `capabilities.params`. Agents must not infer parameters or submit generation requests for it.');
  }
  lines.push('', '## Exact capabilities.params', '', '```json', JSON.stringify(params ?? null, null, 2), '```', '');
  return lines.join('\n');
}

function renderIndex(models) {
  const lines = [
    '# Public Model Parameter Index',
    '',
    '> AUTO-GENERATED from `GET /openapi/v1/image/models?is_public=true`. Do not edit manually.',
    '',
    '| Model | Type | Params | Reference |',
    '| --- | --- | ---: | --- |',
  ];
  for (const model of models) {
    const params = model.capabilities?.params;
    lines.push(`| \`${model.model_name}\` | \`${model.model_type || ''}\` | ${Array.isArray(params) ? params.length : 0} | [open](models/${modelFileName(model)}) |`);
  }
  lines.push('');
  return lines.join('\n');
}

async function readManifest(targetDir) {
  try {
    return JSON.parse(await readFile(join(targetDir, 'manifest.json'), 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT' || error instanceof SyntaxError) return null;
    throw error;
  }
}

async function writeTree(targetDir, models, manifest) {
  await mkdir(join(targetDir, 'models'), { recursive: true });
  await writeFile(join(targetDir, 'catalog.json'), `${JSON.stringify(models, null, 2)}\n`, 'utf8');
  await writeFile(join(targetDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  await writeFile(join(targetDir, 'INDEX.md'), renderIndex(models), 'utf8');
  await Promise.all(models.map((model) => writeFile(join(targetDir, 'models', modelFileName(model)), renderModelDoc(model), 'utf8')));
}

async function replaceDirectoryAtomically(targetDir, models, manifest) {
  const parent = dirname(targetDir);
  const token = randomUUID();
  const temporary = join(parent, `.models.tmp-${token}`);
  const backup = join(parent, `.models.backup-${token}`);
  await mkdir(parent, { recursive: true });
  let movedExisting = false;
  try {
    await writeTree(temporary, models, manifest);
    try {
      await rename(targetDir, backup);
      movedExisting = true;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    await rename(temporary, targetDir);
    if (movedExisting) await rm(backup, { recursive: true, force: true });
  } catch (error) {
    await rm(temporary, { recursive: true, force: true });
    if (movedExisting) {
      await rm(targetDir, { recursive: true, force: true });
      await rename(backup, targetDir);
    }
    throw error;
  }
}

export async function fetchModelContract({ baseUrl, timeout = 60 } = {}) {
  const models = normalizeModels(await listModels({ baseUrl, timeout }));
  const contractSha256 = hashModels(models);
  const missingParams = models.filter((model) => !Array.isArray(model.capabilities?.params) || model.capabilities.params.length === 0).map((model) => model.model_name);
  return { models, contractSha256, missingParams };
}

export async function syncModelReferences({ baseUrl, timeout = 60, targetDir = process.env.OKFLOW_MODEL_REFERENCES_DIR || DEFAULT_MODEL_REFERENCES_DIR, checkOnly = false } = {}) {
  const resolvedTarget = resolve(targetDir);
  const localManifest = await readManifest(resolvedTarget);
  const contract = await fetchModelContract({ baseUrl, timeout });
  const status = !localManifest ? 'missing' : localManifest.contract_sha256 === contract.contractSha256 ? 'current' : 'stale';
  const result = {
    status,
    current: status === 'current',
    model_count: contract.models.length,
    models_missing_params: contract.missingParams,
    local_contract_sha256: localManifest?.contract_sha256 ?? null,
    remote_contract_sha256: contract.contractSha256,
    references_dir: resolvedTarget,
  };
  if (checkOnly) return result;

  const manifest = {
    schema_version: 1,
    synced_at: new Date().toISOString(),
    source: '/openapi/v1/image/models?is_public=true',
    model_count: contract.models.length,
    usable_params_count: contract.models.length - contract.missingParams.length,
    missing_params_count: contract.missingParams.length,
    models_missing_params: contract.missingParams,
    contract_sha256: contract.contractSha256,
  };
  await replaceDirectoryAtomically(resolvedTarget, contract.models, manifest);
  return { ...result, status: 'synchronized', current: true, local_contract_sha256: contract.contractSha256, manifest, models: contract.models };
}

export async function loadLocalModelCatalog(targetDir = process.env.OKFLOW_MODEL_REFERENCES_DIR || DEFAULT_MODEL_REFERENCES_DIR) {
  const file = join(resolve(targetDir), 'catalog.json');
  try {
    const parsed = JSON.parse(await readFile(file, 'utf8'));
    if (!Array.isArray(parsed)) throw new Error('catalog.json 根节点不是数组');
    return parsed;
  } catch (error) {
    if (error.code === 'ENOENT') throw new Error(`本地模型参数缓存不存在，请先运行 node bin/sync-model-references.mjs`);
    throw new Error(`无法读取本地模型参数缓存 ${file}: ${error.message}`);
  }
}
