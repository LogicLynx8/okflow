/** Knowledge-base maintenance commands for local Agent workflows. */
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { basename, dirname, isAbsolute, resolve } from 'node:path';

import { syncKnowledgeMarkdown, uploadFile } from '../lib/api.mjs';
import { num, positional, UsageError } from '../lib/args.mjs';
import { info, json, ok, step } from '../lib/output.mjs';

const IMAGE_RE = /!\[([^\]]*)\]\((?:<)?([^)>\s]+)(?:>)?\)/g;
const IMAGE_EXTENSIONS = new Set(['.avif', '.bmp', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp']);

export function help() {
  console.log(`
Usage: okflow knowledge sync <baseId> <markdown> [options]

Read a local Markdown file, upload its relative images as protected knowledge media,
and synchronize the rendered storage Markdown into one article.

Options:
  --title <title>        Override the article title
  --source <source>      Article source/identity used with --upsert-by-source
  --article-id <id>      Update an existing article
  --parent-id <id>       Parent article ID
  --chapter-level <n>    Article hierarchy level
  --sort <n>             Sibling order
  --publish              Vectorize and publish after synchronization
  --dry-run              Render and validate without writing the article
  --allow-unresolved-images  Keep unresolved local image references
  --timeout <seconds>    Request timeout, default 300
  --json                 Print only the response JSON
  --base-url <url>       Override the API base URL
`);
}

function isLocalImage(reference) {
  if (/^(?:https?:|data:|blob:)/i.test(reference)) return false;
  const path = reference.split(/[?#]/, 1)[0];
  return IMAGE_EXTENSIONS.has(path.slice(path.lastIndexOf('.')).toLowerCase());
}

async function uploadRelativeImages(markdown, markdownPath, { baseUrl, timeout, businessId, jsonMode = false }) {
  const imageMap = {};
  const seen = new Set();
  const root = dirname(resolve(markdownPath));
  for (const match of markdown.matchAll(IMAGE_RE)) {
    const reference = match[2];
    if (!isLocalImage(reference) || seen.has(reference)) continue;
    seen.add(reference);
    const decoded = decodeURIComponent(reference);
    const imagePath = isAbsolute(decoded) ? decoded : resolve(root, decoded);
    if (!existsSync(imagePath)) throw new UsageError(`本地图片不存在: ${imagePath}`);
    const uploaded = await uploadFile({
      filePath: imagePath,
      businessType: 'knowledge_media',
      businessId,
      resourceCategory: 'protected',
      baseUrl,
      timeout,
    });
    imageMap[reference] = uploaded.url;
    imageMap[basename(decoded)] = uploaded.url;
    if (!jsonMode) step(`图片已上传: ${basename(decoded)}`);
  }
  return imageMap;
}

export async function run(args) {
  const action = positional(args, 0, { name: 'action', usage: 'okflow knowledge sync <baseId> <markdown>' });
  if (action !== 'sync') throw new UsageError(`不支持的 knowledge 操作: ${action}`);
  const knowledgeBaseId = positional(args, 1, { name: 'baseId', usage: 'okflow knowledge sync <baseId> <markdown>' });
  const markdownPath = positional(args, 2, { name: 'markdown', usage: 'okflow knowledge sync <baseId> <markdown>' });
  const timeout = num(args, 'timeout', 300);
  const markdown = await readFile(markdownPath, 'utf8');
  const imageMap = await uploadRelativeImages(markdown, markdownPath, {
    baseUrl: args['base-url'],
    timeout,
    businessId: knowledgeBaseId,
    jsonMode: Boolean(args.json),
  });
  const body = {
    knowledge_base_id: Number(knowledgeBaseId),
    markdown,
    filename: basename(markdownPath),
    title: args.title,
    source: args.source || markdownPath,
    article_id: args['article-id'] === undefined ? undefined : num(args, 'article-id'),
    parent_id: args['parent-id'] === undefined ? undefined : num(args, 'parent-id'),
    chapter_level: args['chapter-level'] === undefined ? undefined : num(args, 'chapter-level'),
    sort: args.sort === undefined ? undefined : num(args, 'sort'),
    image_map: imageMap,
    upsert_by_source: true,
    publish: Boolean(args.publish),
    dry_run: Boolean(args['dry-run']),
    allow_unresolved_images: Boolean(args['allow-unresolved-images']),
  };
  const result = await syncKnowledgeMarkdown({ body, baseUrl: args['base-url'], timeout });
  if (args.json) {
    json(result);
    return 0;
  }
  ok(`Markdown 已同步到知识库 ${knowledgeBaseId}`);
  if (result?.article?.id) info(`文章 ID: ${result.article.id}`);
  if (result?.action) info(`操作: ${result.action}`);
  return 0;
}
