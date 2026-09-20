import { readFileSync } from 'node:fs';

import { num, required, UsageError } from '../lib/args.mjs';
import { getTtsTaskStatus, submitTtsSpeech } from '../lib/api.mjs';
import { info, json, ok, step, warn } from '../lib/output.mjs';

const SUCCESS = new Set(['completed', 'success']);
const FAILURE = new Set(['failed', 'error', 'cancelled', 'timeout']);
const sleep = (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export function help() {
  console.log(`
用法: okflow tts (--model <模型> [--voice <音色>] | --speaker-id <音色资产ID>) (--text <文本> | --text-file <路径>) [选项]

提交生产环境标准 TTS 任务。--model 与 --speaker-id 二选一；后者由音色资产自动解析模型和计费。

基础选项:
  --format <格式>                 mp3/wav/opus/aac/flac/pcm，默认 mp3
  --speed <数值>                  0.25-4，默认 1
  --wait                          轮询到终态
  --timeout <秒>                  默认 600
  --interval <秒>                 默认 3
  --json                          只输出最终 JSON
  --base-url <url>                覆盖服务地址

高级可选参数:
  --volume <数值>                 0.1-10
  --pitch <整数>                  -12 至 12
  --emotion <名称>                如 happy/calm/sad
  --pronunciation-file <路径>     UTF-8 文本，每行一个发音词典项，最多20项
  --english-normalization <布尔>  true 或 false

示例:
  okflow tts --model runninghub-speech-2.8-hd --voice Elegant_Man --text "你好" --wait
  okflow tts --speaker-id Elegant_Man --text-file ./speech.txt --wait
`);
}

function resolveText(args) {
  const inline = args.text !== undefined && args.text !== true;
  const file = args['text-file'] !== undefined && args['text-file'] !== true;
  if (inline === file) throw new UsageError('--text 与 --text-file 必须且只能提供一个');
  return file ? readFileSync(String(args['text-file']), 'utf8').trim() : String(args.text).trim();
}

function optionalNumber(args, key, min, max) {
  if (args[key] === undefined) return undefined;
  const value = num(args, key);
  if (value < min || value > max) throw new UsageError(`--${key} 必须在 ${min} 到 ${max} 之间`);
  return value;
}

function optionalBoolean(args, key) {
  if (args[key] === undefined) return undefined;
  const value = String(args[key]).toLowerCase();
  if (!['true', 'false'].includes(value)) throw new UsageError(`--${key} 必须是 true 或 false`);
  return value === 'true';
}

function pronunciationItems(args) {
  if (args['pronunciation-file'] === undefined) return undefined;
  const values = readFileSync(String(args['pronunciation-file']), 'utf8')
    .split(/\r?\n/).map((value) => value.trim()).filter(Boolean);
  if (values.length > 20) throw new UsageError('--pronunciation-file 最多包含20个非空项');
  return values.length ? values : undefined;
}

export async function run(args) {
  const hasModel = args.model !== undefined && args.model !== true && String(args.model).trim();
  const hasSpeaker = args['speaker-id'] !== undefined && args['speaker-id'] !== true && String(args['speaker-id']).trim();
  if (Boolean(hasModel) === Boolean(hasSpeaker)) throw new UsageError('--model 与 --speaker-id 必须且只能提供一个');
  if (!hasModel && args.voice !== undefined) throw new UsageError('--voice 只能和 --model 一起使用');

  const input = resolveText(args);
  if (!input) throw new UsageError('合成文本不能为空');
  const format = String(args.format || 'mp3');
  if (!['mp3', 'wav', 'opus', 'aac', 'flac', 'pcm'].includes(format)) throw new UsageError('--format 不受支持');

  const body = {
    input,
    response_format: format,
    speed: optionalNumber(args, 'speed', 0.25, 4) ?? 1,
  };
  if (hasModel) body.model = String(args.model).trim();
  if (hasSpeaker) body.speaker_id = String(args['speaker-id']).trim();
  if (args.voice !== undefined && args.voice !== true) body.voice = String(args.voice).trim();
  const volume = optionalNumber(args, 'volume', 0.1, 10);
  const pitch = optionalNumber(args, 'pitch', -12, 12);
  const englishNormalization = optionalBoolean(args, 'english-normalization');
  const pronunciation = pronunciationItems(args);
  if (volume !== undefined) body.volume = volume;
  if (pitch !== undefined) body.pitch = pitch;
  if (args.emotion !== undefined && args.emotion !== true) body.emotion = String(args.emotion).trim();
  if (englishNormalization !== undefined) body.english_normalization = englishNormalization;
  if (pronunciation) body.pronunciation_dict = pronunciation;

  const quiet = Boolean(args.json);
  const baseUrl = args['base-url'];
  if (!quiet) info(`提交 TTS：${hasModel ? `model=${body.model}` : `speaker_id=${body.speaker_id}`}`);
  const submitted = await submitTtsSpeech({ body, baseUrl, timeout: 180 });
  if (!submitted?.task_id || !args.wait) {
    json(submitted);
    return submitted?.status === 'failed' ? 1 : 0;
  }

  const deadline = Date.now() + num(args, 'timeout', 600) * 1000;
  const interval = num(args, 'interval', 3);
  let last = submitted;
  let round = 0;
  while (Date.now() < deadline) {
    await sleep(interval);
    round += 1;
    last = await getTtsTaskStatus(submitted.task_id, { baseUrl });
    const status = String(last?.status || '').toLowerCase();
    if (!quiet) step(`第 ${round} 次: ${status || 'processing'}`);
    if (SUCCESS.has(status)) {
      if (!quiet) ok('语音合成完成');
      json(last);
      return 0;
    }
    if (FAILURE.has(status)) {
      if (!quiet) warn(last?.error_message || `任务失败: ${status}`);
      json(last);
      return 1;
    }
  }
  warn('轮询超时；任务可能仍在服务端运行，请保留 task_id，禁止直接重提');
  json(last);
  return 1;
}
