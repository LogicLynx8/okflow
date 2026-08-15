#!/usr/bin/env node
/**
 * Synchronize the published MCP reference catalog into references/mcp-tools.
 * A complete temporary tree is validated before it replaces the current tree.
 */
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { ApiError, getMcpReference, listMcpReferences } from '../src/lib/api.mjs';
import { parseArgs } from '../src/lib/args.mjs';
import { json, ok, step, warn } from '../src/lib/output.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_OUTPUT = join(ROOT, 'references', 'mcp-tools');

function sha256(value) {
  return createHash('sha256').update(value, 'utf8').digest('hex');
}

function help() {
  console.log(`
用法: node bin/sync-mcp-references.mjs [选项]

从 OpenAPI 权威 references 目录同步脱敏 MCP 工具说明。

选项:
  --output <目录>     输出目录，默认 references/mcp-tools
  --platform <id>    只同步一个平台
  --capability <id>  只同步一个能力分段
  --keyword <词>     只同步匹配关键词的分段
  --check-only        只检查线上目录，不替换本地文件
  --base-url <url>   覆盖 OpenAPI 地址
  --json             只输出结果 JSON
`);
}

async function readAllReferences(args) {
  const items = [];
  let page = 1;
  let referenceVersion = null;
  while (true) {
    const listing = await listMcpReferences({
      platform: args.platform,
      capability: args.capability,
      keyword: args.keyword,
      page,
      pageSize: 100,
      baseUrl: args['base-url'],
    });
    referenceVersion = referenceVersion || listing?.reference_version || null;
    const pageItems = Array.isArray(listing?.items) ? listing.items : [];
    items.push(...pageItems);
    if (items.length >= Number(listing?.total || items.length) || pageItems.length === 0) break;
    page += 1;
  }
  return { referenceVersion, items };
}

function safeRelativePath(reference) {
  const raw = String(reference?.path || `${reference?.reference_id || ''}.md`);
  if (!raw || raw.includes('..') || raw.startsWith('/') || raw.includes('\\')) {
    throw new Error(`服务端返回了非法 references 路径: ${raw}`);
  }
  return raw;
}

const CAPABILITY_LABELS = {
  bilibili: '哔哩哔哩',
  demo: '接口示例',
  douyin: '抖音',
  health: '服务健康检查',
  hybrid: '混合视频解析',
  instagram: 'Instagram',
  ios: 'iOS 快捷指令',
  ios_shortcut: 'iOS 快捷指令',
  kuaishou: '快手',
  lemon8: 'Lemon8',
  linkedin: 'LinkedIn',
  pipixia: '皮皮虾',
  platform_account: '平台账户能力',
  reddit: 'Reddit',
  telegram: 'Telegram',
  temp: '临时邮箱',
  temp_mail: '临时邮箱',
  threads: 'Threads',
  tiktok: 'TikTok',
  toutiao: '今日头条',
  twitter: 'Twitter / X',
  uncategorized: '高德地图与通用工具',
  wechat: '微信',
  wechat_channels: '微信视频号',
  wechat_mp: '微信公众号',
  wechat_search: '微信搜一搜',
  weibo: '微博',
  xiaohongshu: '小红书',
  xigua: '西瓜视频',
  youtube: 'YouTube',
  zhihu: '知乎',
};

function capabilityLabel(item) {
  const capability = String(item?.capability || '').replace(/-\d+$/, '');
  return String(item?.capability_name || CAPABILITY_LABELS[capability] || capability || '未分类');
}

const UPSTREAM_TEXT_PATTERNS = [
  /https?:\/\//i,
  /\/(?:open)?api\/v\d+/i,
  /\b(?:authorization|cookie|bearer)\b/i,
  /\b(?:tikhub|upstream|provider)\b/i,
  /\b(?:price|cost)\b|价格|收费|计费/i,
];

const SANITIZATION_REPLACEMENTS = [
  [/https?:\/\/[^\s<>)\]}]+/gi, '[外部地址已隐藏]'],
  [/\/(?:open)?api\/v\d+(?:\/[A-Za-z0-9_./:{}-]*)?/gi, '[接口路径已隐藏]'],
  [/\b(?:authorization|cookie|bearer)\b/gi, '登录凭据'],
  [/\b(?:tikhub|upstream|provider)\b/gi, '平台服务'],
  [/\b(?:price|cost)(?:_[a-z0-9]+)*/gi, '费用字段'],
  [/价格|收费|计费/g, '费用信息'],
];

function assertNoUpstreamText(value, label) {
  const descriptiveText = String(value)
    .split(/\r?\n/)
    .filter((line) => !/^\s*-\s*Parameters:\s*/.test(line))
    .join('\n');
  if (UPSTREAM_TEXT_PATTERNS.some((pattern) => pattern.test(descriptiveText))) {
    throw new Error(`references 包含不应公开的实现信息: ${label}`);
  }
}

function sanitizeReferenceContent(value, label) {
  const original = String(value);
  let sanitized = false;
  const content = original
    .split(/\r?\n/)
    .map((line) => {
      const normalizedLine = line.trimEnd();
      if (/^\s*-\s*Parameters:\s*/.test(normalizedLine) || /^\s*-\s*Risk:\s*/.test(normalizedLine)) {
        return normalizedLine;
      }
      const safeLine = SANITIZATION_REPLACEMENTS.reduce(
        (current, [pattern, replacement]) => current.replace(pattern, replacement),
        normalizedLine,
      );
      if (safeLine !== normalizedLine) sanitized = true;
      return safeLine;
    })
    .join('\n');
  assertNoUpstreamText(content, label);
  return { content, sanitized };
}

function buildIndex({ referenceVersion, entries }) {
  const lines = [
    '# MCP Tools References',
    '',
    `- Reference version: \`${referenceVersion || 'unknown'}\``,
    `- Segment count: ${entries.length}`,
    `- Tool count: ${entries.reduce((total, entry) => total + Number(entry.item.tool_count || 0), 0)}`,
    '',
    '先按“来源平台”定位目标平台，再打开对应文件查看完整工具和参数。每个文件最多收录 80 个工具；同一平台拆分时，`-2`、`-3` 表示同平台的后续分段。',
    '工具引用用于统一工具网关调度；索引仅提供能力导航与必要参数。',
    '',
    '| 来源平台 | 能力分段 | 工具数 | References 文件 |',
    '| --- | --- | ---: | --- |',
  ];
  for (const entry of entries) {
    const { item } = entry;
    lines.push(`| **${capabilityLabel(item)}** | \`${item.capability}\` | ${item.tool_count ?? ''} | [${item.path}](${item.path}) |`);
  }
  return `${lines.join('\n')}\n`;
}

async function run(args) {
  if (args.help || args.h) {
    help();
    return 0;
  }
  const { referenceVersion, items } = await readAllReferences(args);
  const output = resolve(args.output && args.output !== true ? String(args.output) : DEFAULT_OUTPUT);
  await mkdir(dirname(output), { recursive: true });
  const tempDir = await mkdtemp(join(dirname(output), '.mcp-tools-'));
  const files = [];
  const entries = [];
  const sanitizedReferences = [];
  try {
    for (const item of items) {
      const referenceId = String(item.reference_id || '');
      const detail = await getMcpReference(referenceId, { baseUrl: args['base-url'] });
      const rawContent = String(detail?.content || '');
      if (!rawContent) throw new Error(`references 分段内容为空: ${referenceId}`);
      const sourceDigest = sha256(rawContent);
      if (detail.sha256 && detail.sha256 !== sourceDigest) {
        throw new Error(`references 哈希校验失败: ${referenceId}`);
      }
      const { content, sanitized } = sanitizeReferenceContent(rawContent, referenceId);
      const relativePath = safeRelativePath(item);
      const destination = join(tempDir, relativePath);
      if (!args['check-only']) {
        await mkdir(dirname(destination), { recursive: true });
        await writeFile(destination, content, 'utf8');
      }
      const digest = sha256(content);
      const file = { path: relativePath, reference_id: referenceId, sha256: digest, tool_count: item.tool_count ?? null };
      if (sanitized) {
        file.sanitized = true;
        sanitizedReferences.push(relativePath);
      }
      files.push(file);
      entries.push({ item: { ...item, path: relativePath }, content });
    }

    const index = buildIndex({ referenceVersion, entries });
    assertNoUpstreamText(index, 'INDEX.md');
    if (!args['check-only']) await writeFile(join(tempDir, 'INDEX.md'), index, 'utf8');
    const manifest = {
      reference_version: referenceVersion,
      generated_at: new Date().toISOString(),
      segment_count: files.length,
      files: [{ path: 'INDEX.md', sha256: sha256(index) }, ...files],
    };
    if (!args['check-only']) await writeFile(join(tempDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

    if (args['check-only']) {
      const result = {
        ok: true,
        reference_version: referenceVersion,
        segment_count: files.length,
        tool_count: files.reduce((total, file) => total + Number(file.tool_count || 0), 0),
        sanitized_segment_count: sanitizedReferences.length,
        files,
      };
      if (args.json) json(result);
      else ok(`MCP references 检查通过：${files.length} 个分段，未替换本地目录`);
      await rm(tempDir, { recursive: true, force: true });
      return 0;
    }

    const previous = `${output}.previous`;
    await rm(previous, { recursive: true, force: true });
    let movedExisting = false;
    try {
      await rename(output, previous);
      movedExisting = true;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    try {
      await rename(tempDir, output);
    } catch (error) {
      if (movedExisting) await rename(previous, output);
      throw error;
    }
    await rm(previous, { recursive: true, force: true });
    if (sanitizedReferences.length && !args.json) {
      step('已对 ' + sanitizedReferences.length + ' 个分段的实现说明做脱敏，工具引用与参数保持不变');
    }
    const result = {
      output,
      reference_version: referenceVersion,
      segment_count: files.length,
      tool_count: files.reduce((total, file) => total + Number(file.tool_count || 0), 0),
      sanitized_segment_count: sanitizedReferences.length,
      files,
    };
    if (args.json) json(result);
    else ok(`MCP references 同步完成：${files.length} 个分段 -> ${output}`);
    return 0;
  } catch (error) {
    await rm(tempDir, { recursive: true, force: true });
    throw error;
  }
}

run(parseArgs(process.argv.slice(2))).catch((error) => {
  if (error instanceof ApiError && error.body?.data?.error?.code === 'REFERENCE_CATALOG_INVALID') {
    warn('线上 MCP References 暂不可用：服务端目录内容校验失败（REFERENCE_CATALOG_INVALID）');
    step('未替换本地 references，也不会继续执行 MCP 工具调用或产生费用');
    step('请先清理工具描述、参数或标签中的 URL、/api/v1、provider、price/cost、授权信息等实现细节');
  } else if (error instanceof ApiError && error.body?.data?.error?.code === 'MCP_TOOL_REF_STALE') {
    warn('MCP 工具引用已过期，未执行调用');
    step('先重新同步 References，再使用当前平台文件中的 tool_ref');
  } else {
    warn(error.message || String(error));
  }
  step('未替换现有 references 目录');
  process.exitCode = 1;
});
