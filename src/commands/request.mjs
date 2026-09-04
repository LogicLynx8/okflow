import { mkdir, open, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

import { submitGeneration } from '../lib/api.mjs';
import { num, positional, required, UsageError } from '../lib/args.mjs';
import { createRequestTemplate, findPublicModel, validateGenerationRequest } from '../lib/model-capabilities.mjs';
import { ensureLocalModelCatalog, fetchModelContract, syncModelReferences } from '../lib/model-references.mjs';
import { info, json, ok, step } from '../lib/output.mjs';
import { pollUntilDone } from '../lib/poll.mjs';

export function help() {
  console.log(`
用法: okflow request <init|validate|submit> [选项]

用 capabilities.params 创建、校验并提交磁盘 JSON 请求，避免在命令行拼接 JSON。

子命令:
  init      使用用户本地模型契约生成请求 JSON 模板，缺失时自动同步
  validate  使用用户本地模型契约校验请求文件，缺失时自动同步
  submit    使用最新线上契约重新校验，然后提交请求

用 'okflow request <子命令> --help' 查看详细参数。
`);
}

function commandFrom(args) {
  const command = args._[0];
  if (!command) throw new UsageError('缺少子命令，用法: okflow request <init|validate|submit>');
  if (!['init', 'validate', 'submit'].includes(command)) throw new UsageError(`未知 request 子命令: ${command}`);
  return command;
}

function initHelp() {
  console.log(`
用法: okflow request init --model <模型名> --output <request.json> [选项]

使用用户本地缓存的公开模型 capabilities.params；缓存或目标模型缺失时自动同步。
不会猜测无默认值的枚举；必填且无默认值的字段写为 null，填写后再校验。

选项:
  --model <名称>          必填，公开模型 model_name
  --output <路径>         必填，输出 JSON 文件；默认不覆盖已有文件
  --force                 允许覆盖已有输出文件
  --base-url <url>        覆盖 API 地址
  --timeout <秒>          模型同步超时，默认 60
  --json                  输出机器可读结果
`);
}

function validateHelp() {
  console.log(`
用法: okflow request validate <request.json> [选项]

使用用户目录中的模型契约缓存校验请求，不发起生成请求。
缓存不存在、损坏或不含请求中的模型时，会自动同步公开模型契约。

选项:
  --refresh               校验前先同步最新公开模型契约
  --base-url <url>        自动同步或 --refresh 时覆盖 API 地址
  --timeout <秒>          同步超时，默认 60
  --json                  输出机器可读结果
`);
}

function submitHelp() {
  console.log(`
用法: okflow request submit <request.json> [选项]

提交前强制获取最新公开模型 capabilities.params 并重新校验。校验失败不会发送生成请求。

选项:
  --wait                  轮询到任务结束
  --timeout <秒>          轮询总超时，默认 600
  --interval <秒>         轮询间隔，默认 10
  --base-url <url>        覆盖 API 地址
  --json                  只输出最终 JSON
`);
}

async function readRequestFile(path) {
  let parsed;
  try {
    parsed = JSON.parse(await readFile(path, 'utf8'));
  } catch (error) {
    throw new UsageError(`无法读取请求 JSON ${path}: ${error.message}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new UsageError('请求文件根节点必须是 JSON 对象');
  if (typeof parsed.model !== 'string' || !parsed.model.trim()) throw new UsageError('请求文件缺少非空 model');
  return parsed;
}

export async function getLivePublicModel(modelName, { baseUrl, timeout = 60 } = {}) {
  const { models } = await fetchModelContract({ baseUrl, timeout });
  return findPublicModel(models, modelName);
}

export async function validateLiveGenerationRequest(requestBody, { baseUrl, timeout = 60 } = {}) {
  const model = await getLivePublicModel(requestBody.model, { baseUrl, timeout });
  return { model, request: validateGenerationRequest(requestBody, model) };
}

async function runInit(args) {
  const modelName = required(args, 'model');
  const outputPath = resolve(required(args, 'output'));
  const result = await ensureLocalModelCatalog({
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
    modelName,
  });
  const model = findPublicModel(result.models, modelName);
  const request = createRequestTemplate(model);
  let handle;
  try {
    await mkdir(dirname(outputPath), { recursive: true });
    handle = await open(outputPath, args.force ? 'w' : 'wx');
    await handle.writeFile(`${JSON.stringify(request, null, 2)}\n`, 'utf8');
  } catch (error) {
    if (error.code === 'EEXIST') throw new UsageError(`输出文件已存在: ${outputPath}；确认后使用 --force 覆盖`);
    throw error;
  } finally {
    await handle?.close();
  }
  const output = { valid: false, reason: 'fill_required_placeholders_then_validate', file: outputPath, model: modelName, contract_sha256: result.contract_sha256 };
  if (args.json) json(output);
  else {
    ok(`请求模板已生成: ${outputPath}`);
    step(`编辑后校验: node bin/okflow.mjs request validate "${outputPath}"`);
  }
  return 0;
}

async function runValidate(args) {
  const filePath = resolve(positional(args, 1, { name: 'request.json', usage: 'okflow request validate <request.json>' }));
  const requestBody = await readRequestFile(filePath);
  let models;
  if (args.refresh) {
    const result = await syncModelReferences({ baseUrl: args['base-url'], timeout: num(args, 'timeout', 60) });
    models = result.models;
  } else {
    const result = await ensureLocalModelCatalog({
      baseUrl: args['base-url'],
      timeout: num(args, 'timeout', 60),
      modelName: requestBody.model,
    });
    models = result.models;
  }
  const model = findPublicModel(models, requestBody.model);
  const normalized = validateGenerationRequest(requestBody, model);
  const output = { valid: true, file: filePath, model: model.model_name, request: normalized };
  if (args.json) json(output);
  else ok(`请求校验通过: ${model.model_name}`);
  return 0;
}

async function runSubmit(args) {
  const filePath = resolve(positional(args, 1, { name: 'request.json', usage: 'okflow request submit <request.json>' }));
  const requestBody = await readRequestFile(filePath);
  const quiet = Boolean(args.json);
  const totalTimeout = num(args, 'timeout', 600);
  const { request } = await validateLiveGenerationRequest(requestBody, {
    baseUrl: args['base-url'],
    timeout: Math.min(totalTimeout, 60),
  });
  if (!quiet) info(`线上 capabilities.params 校验通过，提交任务: model=${request.model}`);
  const submitted = await submitGeneration({ ...request, baseUrl: args['base-url'], timeout: 120 });
  if (!submitted?.task_id || !args.wait) {
    if (quiet) json(submitted);
    else {
      ok(submitted?.task_id ? `任务已提交: ${submitted.task_id}` : '请求已完成');
      if (submitted?.task_id) step(`查询状态: okflow status ${submitted.task_id}`);
    }
    return 0;
  }
  const final = await pollUntilDone(submitted.task_id, {
    baseUrl: args['base-url'],
    totalTimeout,
    interval: num(args, 'interval', 10),
    quiet,
  });
  json(final.data);
  return final.success ? 0 : 1;
}

export async function run(args) {
  const command = commandFrom(args);
  if (args.help || args.h) {
    if (command === 'init') initHelp();
    else if (command === 'validate') validateHelp();
    else submitHelp();
    return 0;
  }
  if (command === 'init') return runInit(args);
  if (command === 'validate') return runValidate(args);
  return runSubmit(args);
}
