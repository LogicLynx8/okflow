---
name: okflow
description: 当用户明确要用 OKFlow 生成或查询 AI 图片、视频、语音、音效、音乐，解析小红书、抖音、公众号、B站、知乎、YouTube、TikTok、Instagram 等公开内容，调用 OKFlow 线上 Agent，或同步 OKFlow 知识库时使用。可用 `okflow auth login` 浏览器授权或 `OKFLOW_API_KEY`；生成和付费 MCP 调用必须先按实时契约校验。不要用于通用网页浏览、PDF/OCR、纯文本写作或私密内容；仅出现通用 Agent、MCP、OpenAPI、知识库等词时不要触发。
slug: okflow
version: 1.4.0
display_name: OKFlow AI生图·视频·音频·音乐与社媒内容解析
display_name_en: OKFlow AI Image, Video, Audio, Music & Social Content
description_zh: 用 OKFlow 生成 AI 图片、视频、语音、音效和音乐，解析小红书、抖音、公众号、B站、知乎、YouTube、TikTok、Instagram 等平台的公开内容，并调用线上 Agent、同步知识库。支持浏览器授权登录，付费生成前按实时模型契约校验参数。
description_en: Generate AI images, videos, speech, sound effects and music with OKFlow; parse public content from Xiaohongshu, Douyin, WeChat, Bilibili, Zhihu, YouTube, TikTok, Instagram and more; invoke online Agents and sync knowledge bases. Supports browser-based authorization; paid generation is validated against live model contracts before submission.
summary: 用 OKFlow 生成图片、视频、语音、音效和音乐，解析公开社媒内容，并调用线上 Agent 与知识库。
tags: [ai-agent, image-generation, video-generation, audio-generation, music-generation, social-media-data, content-extraction, openapi, mcp, knowledge-base]
homepage: https://github.com/LogicLynx8/okflow
metadata:
  slug: okflow
  displayName: OKFlow AI生图·视频·音频·音乐与社媒内容解析
  version: 1.4.0
  summary: 用 OKFlow 生成图片、视频、语音、音效和音乐，解析公开社媒内容，并调用线上 Agent 与知识库。
  tags: [ai-agent, image-generation, video-generation, audio-generation, music-generation, social-media-data, content-extraction, openapi, mcp, knowledge-base]
  homepage: https://github.com/LogicLynx8/okflow
---

# OKFlow

使用本 Skill 的 Node.js CLI 生成 AI 图片、视频、语音、音效和音乐，解析公开文章、笔记、帖子、视频、字幕、评论与趋势，调用 OKFlow 线上 Agent，或同步知识库。CLI 只使用 Node.js 内置模块，要求 Node.js 18+。

## 先判断是否触发

触发条件：用户明确提到 OKFlow、`okflow.cn`、`OKFLOW_API_KEY`，或明确要用 OKFlow 完成以下任务：

- AI 生图、文生图、图生图、AI 视频、文生视频、图生视频、语音合成、音效/环境声生成、AI 写歌或 BGM。
- 小红书、抖音、公众号、B站、知乎、微博、视频号、YouTube、TikTok、Instagram、LinkedIn、Reddit 等公开内容解析、竞品采集、热点研究或选题整理。
- 调用 OKFlow Agent、使用 `prompt_code`、同步 OKFlow 知识库或调度 OKFlow MCP。

不要因为“网页解析”“Agent”“MCP”“OpenAPI”这些泛词单独触发；不要尝试读取登录后、私密或未授权内容。

## 初始化与凭证

推荐使用 Device Grant 登录：

```bash
node bin/okflow.mjs auth login
```

交互模式默认调用系统浏览器打开 `verification_uri_complete`；页面自动读取并清除 URL 中的设备码，用户只点击“同意授权”。默认申请 `openapi:invoke` 与 `wallet:balance:read`，前者仍受服务端既有角色、资源归属、租户和计费规则约束，后者只允许读取本人余额概览。`--json` 不打开浏览器，适合自动化；`--no-browser` 保留完整链接供无图形环境手动打开。`auth status` 只显示账户、Client、scope 和到期时间，`auth logout` 撤销 refresh family 并清理本地凭据。

```bash
node bin/okflow.mjs setup
```

凭证优先级为环境变量 `OKFLOW_API_KEY`，其次是 OAuth access token，最后是本目录 `.env` 中的 API Key。Key 通常形如 `ak_xxx`，不要写入 Git。默认服务地址为 `https://okflow.cn`，联调可用 `OKFLOW_BASE_URL` 或命令行 `--base-url` 覆盖。

## 命令速查

| 命令 | 用途 |
| --- | --- |
| `auth login/status/logout` | 默认浏览器 Device Grant 登录、脱敏状态和撤销登出 |
| `setup` | 检查 Node、依赖和 API Key |
| `models` | 列出当前 Key 可用的公开模型 |
| `generate` | 兼容模式提交媒体生成任务 |
| `tts` | 提交标准 TTS 语音合成任务，支持模型或音色资产路由 |
| `request init/validate/submit` | 按实时模型契约创建、校验、提交 JSON 请求 |
| `status <taskId>` | 查询或等待任务 |
| `history` | 查询当前 Key 的生成历史，用于恢复中断任务 |
| `download <taskId>` | 下载已完成产物 |
| `upload <file>` | 上传本地媒体并取得持久 URL |
| `sign-url` / `sign-urls` | 刷新过期 OSS 签名，不重复上传 |
| `agent list/call/image` | 查询、调用 Agent，或让 Agent 生成提示词后生图 |
| `knowledge sync` | 将 Markdown 和本地图片同步到知识库 |
| `mcp dispatch` | 预检实时 References 后调度一个 MCP 工具 |

所有命令支持 `--help` 和适合脚本集成的 `--json`。

## 常用工作流

### 生成图片、视频、音频或音乐

先列模型，不要凭记忆猜模型名或参数：

```bash
node bin/okflow.mjs models --json
node bin/okflow.mjs request init --model <模型名> --output ./request.json
```

只编辑模板中已经声明的字段，再校验并提交：

```bash
node bin/okflow.mjs request validate ./request.json
node bin/okflow.mjs request submit ./request.json --wait --timeout 1200
```

简单旧脚本可以使用：

```bash
node bin/okflow.mjs generate --model <模型名> --prompt "一张产品发布会海报，16:9" --wait
```

长中文提示词必须先写入文件，再使用 `--prompt-file` 提交；不要把长提示词直接拼接在命令行中，也不要先探索命令参数。

模型参数唯一以线上 `capabilities.params` 为准。`request submit` 会在付费 POST 前再次获取并校验线上契约；模型不存在、参数缺失、类型/枚举/范围错误时必须停止，不要猜参数或手写付费请求。视频通常需要较长等待，可先提交拿 `taskId`，之后用 `status <taskId> --wait`。

音频模型同样使用这套实时契约流程。需要语音合成、音效、多角色对白、参考音频或参考图片时，读取 [audio-generation.md](references/audio-generation.md)；不要把供应商端点、`request_type`、Webhook、计费公式或实际用量路径当作用户参数。

标准 TTS 使用专用命令，不要走统一媒体接口：

```bash
node bin/okflow.mjs tts \
  --model runninghub-speech-2.8-hd \
  --voice Elegant_Man \
  --text "你好，这是语音合成测试。" \
  --wait --json
```

若平台音色资产已绑定模型，可改用 `--speaker-id` 并省略模型。模型是否公开只影响列表发现；精确模型名或音色绑定是否可调用由服务端的启用状态决定。可选高级参数与安全边界见音频参考。

### 本地中断后的恢复

等待进程退出、网络错误或轮询超时不代表云端任务失败。禁止直接重提，否则可能重复扣费。先查当前 API Key 的历史，再核对模型、状态、请求类型、时间和服务端实际返回的提示词：

```bash
node bin/okflow.mjs history --model <模型名> --status processing --size 100 --json
node bin/okflow.mjs history --model <模型名> --status completed --size 100 --json
node bin/okflow.mjs status <疑似taskId> --wait --timeout 1200
```

只有历史中不存在匹配任务，或原任务明确 `failed`，才可考虑重新提交。CLI 不会自动挑选历史任务或自动重试。

### 解析公开社媒内容

安装或更新 Skill 后，先同步完整的 MCP References：

```bash
node bin/sync-mcp-references.mjs --check-only --json
node bin/sync-mcp-references.mjs
```

然后按 `references/mcp-tools/INDEX.md` 找到对应平台，只读取需要的平台分段，使用其中当前的 `tool_ref` 和参数。不要使用旧引用、手写供应商地址、凭据或未登记工具。统一通过 CLI 调度：

```bash
node bin/okflow.mjs mcp dispatch \
  --platform xiaohongshu \
  --tool-ref <当前tool_ref> \
  --arguments '{"keyword":"AI Native","page":1}' \
  --request-id <唯一UUID> \
  --json
```

平台目录是导航，不是授权缓存；调用前必须以服务端实时目录确认 `tool_ref` 仍存在。`503` 且业务码为 `REFERENCE_CATALOG_INVALID` 时停止并等待恢复；`404` 或 `MCP_TOOL_REF_STALE` 时同步后改用新引用，不要重试旧值。仅处理公开或已授权内容。

### 调用 Agent 与同步知识库

先列出当前 Key 可见的 Agent，再使用返回的 `prompt_code`；不要猜编码：

```bash
node bin/okflow.mjs agent list --json
node bin/okflow.mjs agent call --prompt-code <prompt_code> --message "整理这篇公开文章的要点" --json
```

`agent image` 会先调用 Agent，再把明确的提示词交给指定图片模型，可能产生两笔费用。JSON Agent 必须用 `--prompt-path` 明确提示词字段。

知识库同步使用：

```bash
node bin/okflow.mjs knowledge sync <baseId> ./article.md --json
```

字段、图片上传和错误处理细节见 [knowledge-openapi.md](references/knowledge-openapi.md)。不要修改网页代码代替知识库 OpenAPI。

### 刷新 OSS 地址

已有对象的临时签名过期时，先刷新而不是重新上传或重提任务：

```bash
node bin/okflow.mjs sign-url "<旧 OSS URL>" --json
node bin/okflow.mjs sign-urls ./anchor-urls.json --output ./refreshed.json --json
```

批量输入为 `{"urls":[...]}`，最多 100 条。长期保存 canonical URL，临时签名只在实际使用前刷新。

## 安全与输出边界

- 不提交 `.env`、API Key、签名 URL、下载产物或临时文件。
- 不绕过 CLI 直接调用付费媒体或 MCP 接口，不从旧示例推断实时参数。
- 生成内容遵守平台审核与用户授权边界；公开内容解析不等于绕过登录或访问私密数据。
- 命令失败时保留完整错误上下文；需要诊断时设置 `DEBUG=1`，不要吞掉错误。

## 发布包说明

SkillHub 发布包由 `node bin/package-skillhub.mjs` 生成。为降低加载 token，发布包不携带预同步的 `references/mcp-tools/platforms/*.md`、测试、缓存、下载物或 Git 元数据；安装后运行上面的同步命令即可获得当前目录。GitHub 源码仓库仍保留完整 README、测试和开发资料。
