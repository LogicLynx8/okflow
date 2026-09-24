/** Complete Knowledge Base management commands for local Agent workflows. */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, dirname, isAbsolute, resolve } from 'node:path';

import {
  createKnowledgeArticle,
  createKnowledgeBase,
  deleteKnowledgeArticle,
  deleteKnowledgeBase,
  getKnowledgeArticle,
  getKnowledgeBase,
  knowledgeSchema,
  listKnowledgeArticles,
  listKnowledgeBases,
  publishKnowledgeArticle,
  searchKnowledge,
  syncKnowledgeMarkdown,
  updateKnowledgeArticle,
  updateKnowledgeArticleDraft,
  updateKnowledgeArticlePricing,
  updateKnowledgeBase,
  uploadFile,
} from '../lib/api.mjs';
import { num, positional, UsageError } from '../lib/args.mjs';
import { json, ok } from '../lib/output.mjs';

const IMAGE_RE = /!\[([^\]]*)\]\((?:<)?([^)>\s]+)(?:>)?\)/g;
const IMAGE_EXTENSIONS = new Set(['.avif', '.bmp', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

export function help() {
  console.log(`
Usage:
  okflow knowledge schema
  okflow knowledge bases list|create|get|update|delete
  okflow knowledge articles list|create|get|update|draft|pricing|delete|publish
  okflow knowledge search
  okflow knowledge sync <baseId> <markdown>

Common options:
  --base-url <url> --timeout <seconds> --json

Base options:
  --title <title> --type <document|image|video|music> --description <text>
  --cover <url> --cover-file <path> --public --status <0-4> --metadata <json>

Article options:
  --base-id <id> --article-id <id> --title <title> --text <text>
  --type <document|article|image|video|music> --source <url> --tags <a,b,c>
  --parent-id <id> --chapter-level <n> --sort <n> --status <0-2>
  --free --paid --points-price <n>

Search options:
  --query <text> --mode <keyword|vector|hybrid> --limit <n>
  --threshold <0..1> --include-content
`);
}

function defined(value) {
  return value !== undefined && value !== null;
}

function requireValue(args, name) {
  const value = args[name];
  if (value === undefined || value === true || value === '') throw new UsageError(`--${name} requires a value`);
  return value;
}

function jsonOption(args, name) {
  const value = args[name];
  if (value === undefined || value === true) return undefined;
  try {
    return JSON.parse(value);
  } catch (error) {
    throw new UsageError(`--${name} 必须是合法 JSON: ${error.message}`);
  }
}

function csvOption(args, name) {
  const value = args[name];
  if (value === undefined || value === true || value === '') return undefined;
  return String(value).split(',').map((item) => item.trim()).filter(Boolean);
}

function printResult(value, args, message) {
  if (args.json) json(value);
  else if (message) ok(message);
  else json(value);
}

function baseBody(args, { cover } = {}) {
  const body = {};
  for (const [key, value] of [
    ['title', args.title],
    ['type', args.type],
    ['description', args.description],
    ['is_public', args.public === true ? true : undefined],
    ['status', args.status === undefined ? undefined : num(args, 'status')],
    ['metadata_data', jsonOption(args, 'metadata')],
  ]) {
    if (defined(value)) body[key] = value;
  }
  if (defined(cover)) body.image_url = cover;
  return body;
}

async function resolveCover(args, { baseId, timeout }) {
  if (args['cover-file'] === undefined) return args.cover === undefined ? undefined : String(args.cover);
  const file = requireValue(args, 'cover-file');
  const uploaded = await uploadFile({
    filePath: file,
    businessType: 'knowledge_media',
    businessId: baseId,
    resourceCategory: 'protected',
    baseUrl: args['base-url'],
    timeout,
  });
  if (!uploaded?.url) throw new Error('封面上传响应缺少 url');
  return uploaded.url;
}

async function runBaseCommand(args) {
  const action = positional(args, 1, { name: 'base action', usage: 'okflow knowledge bases list|create|get|update|delete' });
  const timeout = num(args, 'timeout', 60);
  if (action === 'list') {
    printResult(await listKnowledgeBases({
      page: num(args, 'page', 1), pageSize: num(args, 'page-size', 20), keyword: args.keyword, type: args.type,
      status: args.status === undefined ? undefined : num(args, 'status'), baseUrl: args['base-url'], timeout,
    }), args);
    return 0;
  }
  const id = action === 'create' ? undefined : positional(args, 2, { name: 'baseId', usage: `okflow knowledge bases ${action} <baseId>` });
  if (action === 'get') {
    printResult(await getKnowledgeBase(id, { baseUrl: args['base-url'], timeout }), args);
    return 0;
  }
  if (action === 'create') {
    const created = await createKnowledgeBase({ body: baseBody(args), baseUrl: args['base-url'], timeout });
    const cover = await resolveCover(args, { baseId: created?.id, timeout });
    const result = cover ? await updateKnowledgeBase(created.id, { body: { image_url: cover }, baseUrl: args['base-url'], timeout }) : created;
    printResult(result, args, `知识库已创建: ${created?.id || ''}`);
    return 0;
  }
  if (action === 'delete') {
    printResult(await deleteKnowledgeBase(id, { baseUrl: args['base-url'], timeout }), args, `知识库已删除: ${id}`);
    return 0;
  }
  if (action !== 'update') throw new UsageError(`不支持的 bases 操作: ${action}`);
  const cover = await resolveCover(args, { baseId: id, timeout });
  printResult(await updateKnowledgeBase(id, { body: baseBody(args, { cover }), baseUrl: args['base-url'], timeout }), args, `知识库已更新: ${id}`);
  return 0;
}

function articleBody(args, { baseId } = {}) {
  const body = {};
  for (const [key, value] of [
    ['worldview_id', baseId === undefined ? undefined : Number(baseId)],
    ['title', args.title], ['text', args.text], ['type', args.type], ['source', args.source],
    ['tags', csvOption(args, 'tags')],
    ['parent_id', args['parent-id'] === undefined ? undefined : num(args, 'parent-id')],
    ['chapter_level', args['chapter-level'] === undefined ? undefined : num(args, 'chapter-level')],
    ['sort', args.sort === undefined ? undefined : num(args, 'sort')],
    ['status', args.status === undefined ? undefined : num(args, 'status')],
    ['is_free', args.free === true ? true : args.paid === true ? false : undefined],
    ['points_price', args['points-price'] === undefined ? undefined : num(args, 'points-price')],
  ]) {
    if (defined(value)) body[key] = value;
  }
  return body;
}

async function runArticleCommand(args) {
  const action = positional(args, 1, { name: 'article action', usage: 'okflow knowledge articles list|create|get|update|delete|publish' });
  const timeout = num(args, 'timeout', action === 'publish' ? 300 : 60);
  const baseId = args['base-id'] ?? positional(args, 2, { name: 'baseId', usage: `okflow knowledge articles ${action} <baseId> <articleId>` });
  const articleId = ['get', 'update', 'draft', 'pricing', 'delete', 'publish'].includes(action)
    ? (args['article-id'] ?? positional(args, 3, { name: 'articleId', usage: `okflow knowledge articles ${action} <baseId> <articleId>` }))
    : undefined;
  if (action === 'list') {
    printResult(await listKnowledgeArticles(baseId, {
      page: num(args, 'page', 1), pageSize: num(args, 'page-size', 20), keyword: args.keyword, type: args.type,
      status: args.status === undefined ? undefined : num(args, 'status'), parentId: args['parent-id'] === undefined ? undefined : num(args, 'parent-id'),
      rootOnly: args['root-only'] === true, tree: args.tree === true, includeContent: args['include-content'] === true,
      baseUrl: args['base-url'], timeout,
    }), args);
    return 0;
  }
  if (action === 'create') {
    printResult(await createKnowledgeArticle(baseId, { body: articleBody(args, { baseId }), baseUrl: args['base-url'], timeout }), args, '知识点已创建');
    return 0;
  }
  if (action === 'get') {
    printResult(await getKnowledgeArticle(baseId, articleId, { baseUrl: args['base-url'], timeout }), args);
    return 0;
  }
  if (action === 'update') {
    printResult(await updateKnowledgeArticle(baseId, articleId, { body: articleBody(args), baseUrl: args['base-url'], timeout }), args, '知识点已更新');
    return 0;
  }
  if (action === 'draft') {
    printResult(await updateKnowledgeArticleDraft(baseId, articleId, {
      body: { title: args.title, text: args.text }, baseUrl: args['base-url'], timeout,
    }), args, '知识点草稿已保存');
    return 0;
  }
  if (action === 'pricing') {
    const isFree = args.free === true;
    if (args.free !== true && args.paid !== true) throw new UsageError('pricing 操作需要 --free 或 --paid');
    printResult(await updateKnowledgeArticlePricing(baseId, articleId, {
      body: { is_free: isFree, points_price: isFree ? undefined : num(args, 'points-price') },
      baseUrl: args['base-url'], timeout,
    }), args, '知识点收费配置已更新');
    return 0;
  }
  if (action === 'delete') {
    printResult(await deleteKnowledgeArticle(baseId, articleId, { baseUrl: args['base-url'], timeout }), args, '知识点已删除');
    return 0;
  }
  if (action === 'publish') {
    printResult(await publishKnowledgeArticle(baseId, articleId, { baseUrl: args['base-url'], timeout }), args, '知识点已发布');
    return 0;
  }
  throw new UsageError(`不支持的 articles 操作: ${action}`);
}

function renderMarkdown(markdown, imageMap) {
  return markdown.replace(IMAGE_RE, (full, alt, source) => {
    const url = imageMap[source] || imageMap[basename(decodeURIComponent(source))] || source;
    const name = alt || basename(source) || 'image';
    return `<media type="image" url="${String(url).replaceAll('"', '&quot;')}" name="${String(name).replaceAll('"', '&quot;')}" />`;
  });
}

async function runSearch(args) {
  const query = requireValue(args, 'query');
  const mode = args.mode || 'keyword';
  if (mode !== 'keyword') throw new UsageError('当前远程知识库 OpenAPI 适配层支持 keyword 搜索；vector/hybrid 接口待独立 Port 发布');
  printResult(await searchKnowledge({
    body: {
      query, mode: args.mode || 'hybrid', knowledge_base_ids: args['base-id'] === undefined ? undefined : [num(args, 'base-id')],
      type: args.type, limit: num(args, 'limit', 10), threshold: Number(args.threshold ?? 0.5), include_content: args['include-content'] === true,
    }, baseUrl: args['base-url'], timeout: num(args, 'timeout', 180),
  }), args);
  return 0;
}

async function runSync(args) {
  const baseId = positional(args, 1, { name: 'baseId', usage: 'okflow knowledge sync <baseId> <markdown>' });
  const markdownPath = positional(args, 2, { name: 'markdown', usage: 'okflow knowledge sync <baseId> <markdown>' });
  const timeout = num(args, 'timeout', 300);
  const markdown = await readFile(markdownPath, 'utf8');
  const imageMap = {};
  const root = dirname(resolve(markdownPath));
  for (const match of markdown.matchAll(IMAGE_RE)) {
    const reference = match[2];
    const path = reference.split(/[?#]/, 1)[0];
    if (!IMAGE_EXTENSIONS.has(path.slice(path.lastIndexOf('.')).toLowerCase())) continue;
    const decoded = decodeURIComponent(reference);
    const imagePath = isAbsolute(decoded) ? decoded : resolve(root, decoded);
    if (!existsSync(imagePath)) throw new UsageError(`本地图片不存在: ${imagePath}`);
    const uploaded = await uploadFile({ filePath: imagePath, businessType: 'knowledge_media', businessId: baseId, resourceCategory: 'protected', baseUrl: args['base-url'], timeout });
    imageMap[reference] = uploaded.url;
    imageMap[basename(decoded)] = uploaded.url;
  }
  const result = await syncKnowledgeMarkdown({
    body: {
      knowledge_base_id: Number(baseId), markdown: renderMarkdown(markdown, imageMap), filename: basename(markdownPath),
      title: args.title, source: args.source || markdownPath, article_id: args['article-id'] === undefined ? undefined : num(args, 'article-id'),
      parent_id: args['parent-id'] === undefined ? undefined : num(args, 'parent-id'), chapter_level: args['chapter-level'] === undefined ? undefined : num(args, 'chapter-level'),
      sort: args.sort === undefined ? undefined : num(args, 'sort'), upsert_by_source: true, dry_run: args['dry-run'] === true,
    }, baseUrl: args['base-url'], timeout,
  });
  if (args.publish && result?.article?.id) await publishKnowledgeArticle(baseId, result.article.id, { baseUrl: args['base-url'], timeout });
  printResult(result, args, `Markdown 已同步到知识库 ${baseId}`);
  return 0;
}

export async function run(args) {
  const action = positional(args, 0, { name: 'action', usage: 'okflow knowledge schema|bases|articles|search|sync' });
  if (action === 'schema') { printResult(await knowledgeSchema({ baseUrl: args['base-url'] }), args); return 0; }
  if (action === 'bases') return runBaseCommand(args);
  if (action === 'articles') return runArticleCommand(args);
  if (action === 'search') return runSearch(args);
  if (action === 'sync') return runSync(args);
  throw new UsageError(`不支持的 knowledge 操作: ${action}`);
}
