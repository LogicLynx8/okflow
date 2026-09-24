#!/usr/bin/env node
/** Build the compact archive intended for SkillHub uploads. */
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm, cp, writeFile, readdir, stat } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const version = JSON.parse(await readFile(join(ROOT, 'package.json'), 'utf8')).version;
const output = resolve(process.argv[2] || join(ROOT, '.tmp', `skillhub-okflow-${version}.zip`));
const staging = join(dirname(output), `.skillhub-staging-${process.pid}`);

const FILES = [
  'SKILL.md',
  'package.json',
  'bin/okflow.mjs',
  'bin/sync-mcp-references.mjs',
  'bin/sync-model-references.mjs',
  'src',
  'references/knowledge-openapi.md',
  'references/audio-generation.md',
];

const RELEASE_README = `# OKFlow\n\nOKFlow 是一个面向 AI Agent 的 CLI：生成图片、视频和音乐，解析公开社媒内容，调用线上 Agent，并同步知识库。\n\n## 快速开始\n\n\`\`\`bash\nnode bin/okflow.mjs setup\nnode bin/okflow.mjs models --json\n\`\`\`\n\n模型生成使用 \`request init/validate/submit\`，参数以线上 \`capabilities.params\` 为准。公开内容解析先运行 \`node bin/sync-mcp-references.mjs\`，再按 \`references/mcp-tools/INDEX.md\` 选择平台并用 \`mcp dispatch\` 调度当前 \`tool_ref\`。\n\n本包不携带预同步 MCP 平台目录；安装后同步即可获得最新能力。详见 \`SKILL.md\`。\n`;

async function copyEntry(entry) {
  const source = join(ROOT, entry);
  const destination = join(staging, entry);
  await mkdir(dirname(destination), { recursive: true });
  await cp(source, destination, { recursive: true });
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

await rm(staging, { recursive: true, force: true });
await mkdir(staging, { recursive: true });
try {
  await Promise.all(FILES.map(copyEntry));
  await writeFile(join(staging, 'README.md'), RELEASE_README, 'utf8');
  await mkdir(dirname(output), { recursive: true });
  await rm(output, { force: true });
  execFileSync('tar', ['-a', '-c', '-f', output, '-C', staging, '.'], { stdio: 'inherit' });

  const stagedFiles = await walk(staging);
  const relativeFiles = stagedFiles.map((file) => file.slice(staging.length + 1).replaceAll('\\\\', '/'));
  const forbidden = relativeFiles.filter((file) => /(?:^|\/)\.env$|(?:^|\/)\.tmp(?:\/|$)|\.zip$|(?:^|\/)node_modules(?:\/|$)|(?:^|\/)test(?:\/|$)|^references\/mcp-tools\/platforms\//.test(file));
  if (forbidden.length) throw new Error(`发布包包含禁止文件: ${forbidden.join(', ')}`);
  const archiveListing = execFileSync('tar', ['-t', '-f', output], { encoding: 'utf8' });
  if (/references\/mcp-tools\/platforms\//.test(archiveListing) || /(?:^|\/)\.env(?:$|\r?$)/m.test(archiveListing)) {
    throw new Error('发布包包含预同步 MCP 平台目录或凭证文件');
  }
  const sizes = await Promise.all(stagedFiles.map(async (file) => (await stat(file)).size));
  const bytes = sizes.reduce((total, size) => total + Number(size), 0);
  console.log(JSON.stringify({ version, output, file_count: stagedFiles.length, uncompressed_bytes: bytes, archive_bytes: (await stat(output)).size, mcp_platform_files: 0 }, null, 2));
} finally {
  await rm(staging, { recursive: true, force: true });
}
