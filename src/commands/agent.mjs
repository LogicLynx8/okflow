/**
 * Agent discovery and invocation commands.
 *
 * Every paid call is preceded by a live visibility lookup using the current
 * API key. The image chain treats Agent output strictly as prompt text, never
 * as executable generation configuration.
 */
import { readFileSync } from 'node:fs';

import { callAgent, listAgents, submitGeneration, uploadFile } from '../lib/api.mjs';
import { num, required, UsageError } from '../lib/args.mjs';
import { validateGenerationRequest } from '../lib/model-capabilities.mjs';
import { info, json, ok, step, table } from '../lib/output.mjs';
import { pollUntilDone } from '../lib/poll.mjs';
import { getLivePublicModel, validateLiveGenerationRequest } from './request.mjs';

export function help() {
  console.log(`
用法: okflow agent <list|call|image> [选项]

调用前会使用当前 API Key 查询线上可见 Agent；不支持 SSE 流式调用。

子命令:
  list                 列出当前 API Key 可调用的 Agent
  call                 调用一个可见 Agent（非流式）
  image                用 Agent 生成的提示词提交生图任务

用 'okflow agent <子命令> --help' 查看详细参数。
`);
}

function commandFrom(args) {
  const command = args._[0];
  if (!command) throw new UsageError('缺少子命令，用法: okflow agent <list|call|image>');
  if (!['list', 'call', 'image'].includes(command)) {
    throw new UsageError(`未知 agent 子命令: ${command}`);
  }
  return command;
}

function requireValue(args, key) {
  if (args[key] === true) throw new UsageError(`--${key} 需要传入值`);
  return args[key];
}

function parseListArg(args, key) {
  const value = args[key];
  if (value === undefined) return [];
  if (value === true) throw new UsageError(`--${key} 需要传入值`);
  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

function parseObject(raw, label) {
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (err) {
    throw new UsageError(`${label} 不是合法的 JSON 对象: ${err.message}`);
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new UsageError(`${label} 必须是 JSON 对象`);
  }
  return parsed;
}

function resolveMessage(args) {
  const inline = requireValue(args, 'message');
  const filePath = requireValue(args, 'message-file');
  if (inline !== undefined && filePath !== undefined) {
    throw new UsageError('--message 和 --message-file 只能传一个');
  }
  if (filePath !== undefined) return readFileSync(String(filePath), 'utf8').trim();
  if (inline !== undefined) return String(inline);
  throw new UsageError('必须提供 --message 或 --message-file');
}

function resolveVariables(args) {
  const inline = requireValue(args, 'variables');
  const filePath = requireValue(args, 'variables-file');
  if (inline !== undefined && filePath !== undefined) {
    throw new UsageError('--variables 和 --variables-file 只能传一个');
  }
  if (filePath !== undefined) {
    return parseObject(readFileSync(String(filePath), 'utf8'), '--variables-file 内容');
  }
  if (inline !== undefined) return parseObject(String(inline), '--variables');
  return undefined;
}

function resolveGenerationConfig(args) {
  const inline = requireValue(args, 'config');
  const filePath = requireValue(args, 'config-file');
  let config = {};
  if (filePath !== undefined) {
    config = { ...config, ...parseObject(readFileSync(String(filePath), 'utf8'), '--config-file 内容') };
  }
  if (inline !== undefined) config = { ...config, ...parseObject(String(inline), '--config') };
  return config;
}

function optionalString(args, key) {
  const value = requireValue(args, key);
  return value === undefined ? undefined : String(value);
}

async function assertVisibleAgent(promptCode, { baseUrl, timeout }) {
  let page = 1;
  while (true) {
    const listing = await listAgents({ page, pageSize: 100, baseUrl, timeout });
    const items = Array.isArray(listing?.items) ? listing.items : [];
    const item = items.find((agent) => agent?.prompt_code === promptCode);
    if (item) return item;

    const total = Number(listing?.total);
    if (!items.length || !Number.isFinite(total) || page * 100 >= total) break;
    page += 1;
  }
  throw new UsageError(`当前 API Key 无权调用 Agent: ${promptCode}；先运行 'okflow agent list' 查看可用 prompt_code`);
}

function readPath(value, path) {
  const segments = String(path).split('.').filter(Boolean);
  if (!segments.length) throw new UsageError('--prompt-path 不能为空');
  let current = value;
  for (const segment of segments) {
    if (!current || typeof current !== 'object' || !(segment in current)) {
      throw new UsageError(`Agent JSON 输出中找不到 --prompt-path: ${path}`);
    }
    current = current[segment];
  }
  if (typeof current !== 'string' || !current.trim()) {
    throw new UsageError(`--prompt-path ${path} 必须指向非空字符串`);
  }
  return current.trim();
}

function extractImagePrompt(result, promptPath) {
  if (result?.output_format === 'json' || result?.json_message != null) {
    if (!promptPath) {
      throw new UsageError('JSON 输出的 Agent 必须显式提供 --prompt-path，例如 json_message.prompt');
    }
    const normalizedPath = String(promptPath).startsWith('json_message.')
      ? String(promptPath).slice('json_message.'.length)
      : String(promptPath);
    return readPath(result?.json_message, normalizedPath);
  }

  const text = result?.message ?? result?.output?.agent_text;
  if (typeof text !== 'string' || !text.trim()) {
    throw new UsageError('Agent 未返回可用的文本提示词（需要 message 或 output.agent_text）');
  }
  return text.trim();
}

async function uploadImageFiles(files, { baseUrl, timeout, quiet, purpose }) {
  const urls = [];
  for (const [index, filePath] of files.entries()) {
    if (!quiet) step(`上传${purpose}图片 ${index + 1}/${files.length}: ${filePath}`);
    const uploaded = await uploadFile({ filePath, baseUrl, timeout });
    if (!uploaded?.url) throw new Error(`Upload response missing URL for ${filePath}`);
    urls.push(uploaded.url);
  }
  return urls;
}

function listHelp() {
  console.log(`
用法: okflow agent list [选项]

列出当前 API Key 可调用的线上 Agent。

选项:
  --category-code <编码>  分类筛选
  --tags <标签>           逗号分隔的标签筛选
  --output-format <格式>  text 或 json
  --page <页码>           默认 1
  --page-size <数量>      默认 20
  --timeout <秒>          默认 60
  --base-url <url>        覆盖 API 地址
  --json                  输出完整分页响应
`);
}

async function runList(args) {
  const data = await listAgents({
    categoryCode: optionalString(args, 'category-code'),
    tags: optionalString(args, 'tags'),
    outputFormat: optionalString(args, 'output-format'),
    page: num(args, 'page', 1),
    pageSize: num(args, 'page-size', 20),
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 60),
  });
  if (args.json) {
    json(data);
    return 0;
  }
  const items = Array.isArray(data?.items) ? data.items : [];
  info(`共 ${data?.total ?? items.length} 个可调用 Agent`);
  table(
    items.map((agent) => ({
      title: agent?.title ?? '',
      prompt_code: agent?.prompt_code ?? '',
      output_format: agent?.output_format ?? 'text',
      tags: Array.isArray(agent?.tags) ? agent.tags.join(', ') : '',
    })),
    [
      { key: 'title', label: '名称' },
      { key: 'prompt_code', label: 'prompt_code' },
      { key: 'output_format', label: '输出格式' },
      { key: 'tags', label: '标签' },
    ],
  );
  return 0;
}

function callHelp() {
  console.log(`
用法: okflow agent call --prompt-code <编码> (--message <文本> | --message-file <路径>) [选项]

先确认当前 API Key 对 prompt_code 可见，再以非流式方式调用 Agent。

选项:
  --prompt-code <编码>       必填，先用 agent list 获取
  --message <文本>            Agent 输入
  --message-file <路径>       从文件读取 Agent 输入
  --variables <JSON>          提示词变量对象
  --variables-file <路径>     从文件读取变量 JSON 对象
  --session-id <ID>           可选会话 ID
  --model-id <ID>             单层 Agent 的高级模型覆盖；双层配置由服务端决定
  --temperature <数值>        0 到 2
  --max-tokens <数量>         最大 token 数
  --agent-images <url1,url2>  仅传给 Agent 的多模态输入图片
  --workflow-code <编码>      可选工作流/轻应用编码
  --timeout <秒>              默认 180
  --base-url <url>            覆盖 API 地址
  --json                      输出原始 Agent 响应
`);
}

async function runCall(args) {
  const promptCode = required(args, 'prompt-code');
  const message = resolveMessage(args);
  const variables = resolveVariables(args);
  const baseUrl = args['base-url'];
  const timeout = num(args, 'timeout', 180);
  const quiet = Boolean(args.json);
  const agentImages = parseListArg(args, 'agent-images');

  if (args.temperature !== undefined && args.temperature !== true) {
    const temperature = num(args, 'temperature');
    if (temperature < 0 || temperature > 2) throw new UsageError('--temperature 必须在 0 到 2 之间');
  }

  await assertVisibleAgent(promptCode, { baseUrl, timeout: Math.min(timeout, 60) });
  if (!quiet) step(`已确认当前 API Key 可调用 Agent: ${promptCode}`);

  const result = await callAgent({
    promptCode,
    message,
    variables,
    sessionId: optionalString(args, 'session-id'),
    modelId: optionalString(args, 'model-id'),
    temperature: args.temperature === undefined ? undefined : num(args, 'temperature'),
    maxTokens: args['max-tokens'] === undefined ? undefined : num(args, 'max-tokens'),
    images: agentImages.length ? agentImages : undefined,
    workflowCode: optionalString(args, 'workflow-code'),
    baseUrl,
    timeout,
  });

  if (!quiet) ok(`Agent 调用完成: ${result?.prompt_code || promptCode}`);
  json(result);
  return result?.success === false ? 1 : 0;
}

function imageHelp() {
  console.log(`
用法: okflow agent image --prompt-code <编码> (--message <文本> | --message-file <路径>) --model <模型> [选项]

先由可见 Agent 生成提示词，再提交生图。Agent 输出仅会写入 config.prompt，
不会覆盖 --model、--config 或图片参数。该命令会触发一次 Agent 和一次生图计费。

Agent 输入:
  --prompt-code <编码>       必填
  --message <文本>            Agent 输入
  --message-file <路径>       从文件读取 Agent 输入
  --variables <JSON>          提示词变量对象
  --variables-file <路径>     从文件读取变量 JSON 对象
  --agent-images <url1,url2>  仅传给 Agent 的多模态输入图片
  --prompt-path <路径>        JSON Agent 必填，例如 json_message.prompt

生图参数:
  --model <模型名>            必填
  --config <JSON>             生图配置对象；其中 prompt 会被 Agent 输出替换
  --config-file <路径>        从文件读取生图配置对象
  --images <url1,url2>        仅传给生图的参考图片
  --image-file <path1,path2>  上传后仅传给生图的本地参考图片
  --upload-timeout <秒>       本地生图参考图上传超时，默认 300
  --wait                      轮询生图任务到完成
  --timeout <秒>              生图轮询总超时；Agent 调用使用该值与 180 的较小值，默认 600
  --interval <秒>             生图轮询间隔，默认 10
  --base-url <url>            覆盖 API 地址
  --json                      只输出最终生图 JSON
`);
}

async function runImage(args) {
  const promptCode = required(args, 'prompt-code');
  const model = required(args, 'model', "用 'okflow models' 查询可用模型名");
  const message = resolveMessage(args);
  const variables = resolveVariables(args);
  const baseUrl = args['base-url'];
  const quiet = Boolean(args.json);
  const totalTimeout = num(args, 'timeout', 600);
  const agentImages = parseListArg(args, 'agent-images');
  const generationImages = parseListArg(args, 'images');
  const imageFiles = parseListArg(args, 'image-file');
  const preliminaryConfig = { ...resolveGenerationConfig(args), prompt: '__AGENT_PROMPT_PENDING__' };

  const modelContract = await getLivePublicModel(model, {
    baseUrl,
    timeout: Math.min(totalTimeout, 60),
  });
  validateGenerationRequest({
    model,
    config: preliminaryConfig,
    images: generationImages.length || imageFiles.length
      ? [...generationImages, ...imageFiles.map((_, index) => `https://local-upload.invalid/reference-${index + 1}`)]
      : undefined,
  }, modelContract);

  if (args.temperature !== undefined && args.temperature !== true) {
    const temperature = num(args, 'temperature');
    if (temperature < 0 || temperature > 2) throw new UsageError('--temperature 必须在 0 到 2 之间');
  }

  await assertVisibleAgent(promptCode, { baseUrl, timeout: Math.min(totalTimeout, 60) });
  if (!quiet) step(`已确认当前 API Key 可调用 Agent: ${promptCode}`);

  const agentResult = await callAgent({
    promptCode,
    message,
    variables,
    sessionId: optionalString(args, 'session-id'),
    modelId: optionalString(args, 'model-id'),
    temperature: args.temperature === undefined ? undefined : num(args, 'temperature'),
    maxTokens: args['max-tokens'] === undefined ? undefined : num(args, 'max-tokens'),
    images: agentImages.length ? agentImages : undefined,
    workflowCode: optionalString(args, 'workflow-code'),
    baseUrl,
    timeout: Math.min(totalTimeout, 180),
  });
  if (agentResult?.success === false) {
    throw new UsageError(agentResult?.error || 'Agent 调用未成功，未提交生图任务');
  }

  const prompt = extractImagePrompt(agentResult, optionalString(args, 'prompt-path'));
  const config = { ...resolveGenerationConfig(args), prompt };
  const uploadedUrls = await uploadImageFiles(imageFiles, {
    baseUrl,
    timeout: num(args, 'upload-timeout', 300),
    quiet,
    purpose: '生图参考',
  });
  generationImages.push(...uploadedUrls);

  if (!quiet) {
    ok(`Agent 提示词已生成（${prompt.length} 字）`);
    step(`提交生图任务: model=${model}`);
    if (generationImages.length) step(`生图参考图片: ${generationImages.length} 张`);
  }

  const { request: requestBody } = await validateLiveGenerationRequest({
    model,
    config,
    images: generationImages.length ? generationImages : undefined,
  }, { baseUrl, timeout: Math.min(totalTimeout, 60) });
  const submitted = await submitGeneration({
    ...requestBody,
    baseUrl,
    timeout: 120,
  });
  const taskId = submitted?.task_id;
  if (!taskId) {
    if (!quiet) ok('生图请求已完成');
    json(submitted);
    return 0;
  }

  if (!args.wait) {
    if (quiet) json(submitted);
    else {
      ok(`生图任务已提交: ${taskId}`);
      step(`查询状态: okflow status ${taskId}`);
    }
    return 0;
  }

  const final = await pollUntilDone(taskId, {
    baseUrl,
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
    if (command === 'list') listHelp();
    else if (command === 'call') callHelp();
    else imageHelp();
    return 0;
  }
  if (command === 'list') return runList(args);
  if (command === 'call') return runCall(args);
  return runImage(args);
}
