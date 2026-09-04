---
name: okflow
slug: okflow
displayName: OKFlow AI生图·视频·音乐与社媒内容解析
version: 1.1.0
summary: 用 OKFlow 生成 AI 图片、视频和音乐，解析小红书、抖音、公众号、B站、知乎及海外社交平台的公开内容，并调用线上 Agent、同步知识库。
description: 当用户需要用 OKFlow 实际生成 AI 图片、视频或音乐，解析小红书、抖音、公众号、B站、知乎、YouTube、TikTok、Instagram 等平台的公开文章、笔记、帖子、视频、字幕、评论或趋势，调用 OKFlow 线上 Agent，或同步 OKFlow 知识库时使用；覆盖 AI 生图、文生图、图生图、AI 视频、文生视频、图生视频、AI 写歌、BGM、文章解析、内容提取和社媒数据。需要 OKFLOW_API_KEY，付费调用前必须按实时能力与参数契约校验。不要用于通用网页浏览、PDF/OCR、纯文本写作或私密内容；仅出现通用的 Agent、MCP、OpenAPI、知识库等词时不触发，除非明确指向 OKFlow。
tags: [ai-agent, image-generation, video-generation, music-generation, social-media-data, content-extraction, openapi, mcp, knowledge-base]
homepage: https://github.com/LogicLynx8/okflow
---

# OKFlow AI 生图、视频、音乐与社媒内容解析

通过 OKFlow 开放 API 生成图片、视频和音乐，解析公开社交平台的文章、笔记、帖子、
视频、字幕、评论与趋势，发现和调用线上 Agent，以及维护知识库笔记。媒体、Agent 和
MCP 调用可使用本目录下的 Node.js CLI；知识库任务优先按下文直接调用 OpenAPI，
不要修改网页代码来创建笔记。

## 前置：一次性初始化

首次使用（或换机器、依赖缺失时）先跑一次：

```bash
node bin/okflow.mjs setup
```

`setup` 会做三件事：
1. 检查 Node.js 版本（需要 >= 18，低于 18 缺少内置 fetch）
2. 安装依赖 —— **当前零第三方依赖**，只用 Node 内置模块，这步会自动跳过
3. 检查 API Key 是否已配置，未配置则打印填写指引

零依赖是刻意的：clone 下来不装任何东西就能跑，不受网络、npm 源、权限问题影响。
所以 `setup` 的实际作用主要是**校验环境和凭证**，`--help` 之外的第一条命令跑它最省事。

`setup` 退出码为 0 表示可以开始用了；非 0 表示还缺东西，按输出的指引补。

## 凭证配置

CLI 按以下优先级读取凭证，任一处配好即可：

1. 环境变量 `OKFLOW_API_KEY`
2. 本目录下 `.env` 文件里的 `OKFLOW_API_KEY=`

Key 的格式是 `ak_xxx`，只需要 access key 即可完成全部鉴权，无需 secret key。

Key 从 okflow 控制台的「开放 API」页面创建获取。**不要把 key 写进任何会提交到
git 的文件**，`.env` 已在 `.gitignore` 中。

## 服务地址

默认打到 `https://okflow.cn`，不需要配置。要指向别的环境（私有部署、联调）时两种方式：

- 环境变量或 `.env` 里设 `OKFLOW_BASE_URL`
- 单条命令临时覆盖：`--base-url https://your-host`

尾部斜杠写不写都行，CLI 会自动去掉。

## 命令速查

| 命令 | 用途 |
|------|------|
| `setup` | 初始化：检查环境 + 装依赖 + 校验凭证 |
| `models` | 列出当前 key 可用的模型 |
| `generate` | 提交生成任务并轮询到完成 |
| `request init/validate/submit` | 生成、校验并提交磁盘 JSON 请求 |
| `status <taskId>` | 查询单个任务的状态 |
| `download <taskId>` | 把已完成任务的产物下载到本地 |
| `upload <file>` | 上传本地文件并返回持久化 URL |
| `agent list` | 列出当前 API Key 可见的线上 Agent 与 `prompt_code` |
| `agent call` | 非流式调用一个线上 Agent |
| `agent image` | 用线上 Agent 生成提示词后提交生图任务 |
| `knowledge sync <baseId> <markdown>` | 同步 Markdown 文章和本地图片到知识库 |
| `node bin/sync-mcp-references.mjs` | 同步已发布的 MCP references 目录 |
| `node bin/sync-model-references.mjs` | 同步公开模型的 `capabilities.params` |

所有命令都支持 `--help` 查看完整参数。

## MCP 工具 References

当用户要求解析公开链接、提取文章正文、读取社交平台内容或获取竞品与热点数据时，
先从 `references/mcp-tools/INDEX.md` 定位平台，再只读取对应平台分段。支持范围包括
小红书笔记、抖音作品、公众号文章、B站和知乎内容，以及 YouTube、TikTok、
Instagram、LinkedIn、Reddit 等平台的公开内容；具体可用字段和动作以实时 References
及当前 API Key 权限为准。不要把这项能力扩展成通用网页浏览、PDF/OCR、私密内容读取
或未授权的数据访问。

需要发现并调用已登记 MCP/OpenAPI 工具时，先读
`references/mcp-tools/INDEX.md`，再只读取任务所需的平台能力分段。目录是导航，
不是授权缓存；`tool_ref` 可能在重新导入工具后变化。实际调用仍必须使用服务端
`/openapi/v1/agent/mcp/dispatch`，由 API Key 确定用户并复用平台计费、钱包和审计链。

### MCP 调用前置检查（必须）

安装或更新 Skill 后必须一次性检查并同步全部平台 References。默认不要附加
`--platform`、`--capability` 或 `--keyword`；这些参数只用于排障，不得让用户
每使用一个新平台就手动刷新一次：

```bash
node bin/sync-mcp-references.mjs --check-only --json
node bin/sync-mcp-references.mjs
```

同步器会逐段校验来源哈希，并自动从说明文字中移除外部地址、授权、供应方和费用等
实现信息；工具引用、参数名、参数类型和工具数量必须全部保留。一个分段需要脱敏时
继续生成该分段和其余全部平台，不得因说明文案命中规则而整批放弃。

日常调用从全量同步后的平台文件读取 `tool_ref`。推荐使用内置调度命令，它会在
付费请求前实时确认该引用仍存在，并且只接受工具参数对象：

```bash
node bin/okflow.mjs mcp dispatch \
  --platform xiaohongshu \
  --tool-ref <当前 tool_ref> \
  --arguments '{"keyword":"AI Native","page":1}' \
  --request-id <唯一 UUID> \
  --json
```

GET References 的筛选条件必须放在查询参数中（`platform`、`page`、`page_size`），不要把
JSON 请求体附加到 GET。收到 `503` 且业务错误码为 `REFERENCE_CATALOG_INVALID` 时，说明
服务端在返回内容前拒绝了整个目录，此时没有可安全同步的正文，必须停止且不得重复
扣费；恢复后重新执行不带平台筛选的全量同步。收到 `404` 或
`MCP_TOOL_REF_STALE` 时，说明本地引用过期，只同步并使用新的引用，不要重试旧值。

统一调度命令会在目录不可用、引用过期、参数不是对象时阻断请求；不要绕过预检手写
`fetch`/`curl` 调度付费工具。

同步权威目录：

```bash
node bin/sync-mcp-references.mjs
```

命令会分页读取 `/openapi/v1/agent/mcp/references`，逐段校验 SHA-256，再原子替换
`references/mcp-tools/`。不要手工写入工具密钥、请求头、外部服务地址或用户身份。

## 典型用法

### 调用线上 Agent

先查询当前 API Key 可见的 Agent，再使用返回的 `prompt_code` 调用。不要凭记忆或从
其他账户复制编码；CLI 会在付费调用前再次做可见性预检。

```bash
node bin/okflow.mjs agent list --output-format text
node bin/okflow.mjs agent list --tags image,prompt --json

node bin/okflow.mjs agent call \
  --prompt-code <agent-list 返回的编码> \
  --message-file ./agent-input.txt \
  --variables '{"style":"commercial","ratio":"1:1"}' \
  --json
```

`agent call` 只支持非流式 JSON 响应。文本 Agent 的结果在 `message`（标准化字段为
`output.agent_text`），JSON Agent 的结果在 `json_message`。双层 Agent 的外层协议、
模型优先级与模型降级继续由服务端处理；CLI 不传外层编码，也不能绕过该规则。

### Agent 生成提示词后生图

用 `agent image` 把线上 Agent 的结果作为既有生图请求的 `config.prompt`。Agent 输出不能
覆盖调用者选择的图片模型、`--config` 其余参数或参考图片。

```bash
node bin/okflow.mjs agent image \
  --prompt-code <生图提示词Agent编码> \
  --message "为一款手冲咖啡设计电商主图" \
  --model <图片模型名> \
  --config '{"ratio":"1:1","seed":42}' \
  --images https://example.com/product-reference.png \
  --wait
```

若目标 Agent 返回 JSON，必须明确指定哪一个字段是提示词，CLI 不会猜测字段或在提取失败
后继续生图：

```bash
node bin/okflow.mjs agent image \
  --prompt-code <JSON生图提示词Agent编码> \
  --message-file ./agent-input.txt \
  --prompt-path json_message.prompt \
  --model <图片模型名> \
  --wait
```

`--agent-images` 只传给 Agent 的多模态输入；`--images` 和 `--image-file` 只传给生图
模型的参考图片。`agent image` 会发起一次 Agent 调用和一次图片生成，可能产生两笔费用。
自动化验收必须使用本地 mock，不得因测试触发真实 Agent 或媒体生成。

`agent image` 也受下文模型契约保护：它会在付费 Agent 调用之前先确认目标模型存在、
`capabilities.params` 非空且调用者参数合法；最终提示词产生后会再次校验再提交生图。

### 查看可用模型

```bash
node bin/okflow.mjs models                      # 全部公开模型
node bin/okflow.mjs models --type text2video    # 只看文生视频
```

`models` 始终显式发送 `is_public=true`，只列出公开且当前 API Key 可用的模型；不提供
关闭该过滤的命令选项。先跑这个，再决定 `--model` 传什么。**不要凭记忆猜模型名** ——
平台的模型清单会变，猜错会得到「模型不存在」而不是有意义的报错。

### 用户本地模型参数缓存

公开模型接口返回的 `capabilities.params` 是模型专属请求参数的唯一权威。模型目录不随
Skill 打包；CLI 将它保存到用户目录 `~/.okflow/model-references/`。缓存不存在、损坏，
或目标模型不在缓存中时，`request init` 和 `request validate` 会自动同步。需要主动检查
或更新时运行：

```bash
node bin/sync-model-references.mjs --check-only --json
node bin/sync-model-references.mjs
```

同步器原子更新用户本地缓存：`catalog.json` 是机器可读精确契约，`INDEX.md`
用于导航，`models/*.md` 是逐模型可读说明。不得手工修改这些生成文件，也不得用旧示例、
历史记忆或供应商文档覆盖云端契约。同步失败时不得声称本地缓存为最新；可以读取旧缓存
排查，但不得据此添加未声明参数。

若模型不存在，或 `capabilities.params` 缺失/为空，必须停止生成。不要猜参数、不要退回
手写 `curl`，也不要绕过 CLI 直接请求付费接口。

### 文件化生成请求（默认工作流）

Agent 必须先生成 JSON 文件，再编辑参数、校验并提交。不要在 shell 中拼接复杂 JSON：

```bash
node bin/okflow.mjs request init \
  --model <模型名> \
  --output ./request.json

# 编辑 request.json：只填写已经生成的字段；null 表示必须由调用者补齐
node bin/okflow.mjs request validate ./request.json
node bin/okflow.mjs request submit ./request.json --wait --timeout 1200
```

`request init` 优先使用用户本地契约，缓存或目标模型缺失时自动同步；只写通用
`config.prompt`、声明的默认值、锁定值、隐藏固定值和必填 `null` 占位，不会擅自选择没有
默认值的第一个枚举。`validate` 同样在缺失时自动同步，命中缓存时可离线反复编辑；需要
主动刷新时加 `--refresh`。`submit` 必定在付费 POST 前重新获取
线上契约并校验，因此旧请求文件不能绕过参数变更。未知字段、条件不成立字段、缺失必填、
错误类型、枚举、范围、步长、媒体 URL 或数量超限都会阻止提交。

本地媒体先用 `upload` 得到持久 URL，再写入请求文件中模型声明的媒体字段，例如
`config.images` 或 `config.reference_images`；字段名必须以该模型的生成文档为准，不能都
假设叫 `images`。OpenAPI 顶层 `images` 仅作为兼容入口，且模型必须声明 `images`，不能
再与 `config.images` 同时传递。

### 兼容生成命令

```bash
node bin/okflow.mjs generate \
  --model <模型名> \
  --prompt "一只橘猫坐在窗台上，午后阳光" \
  --wait
```

`generate` 保留给旧脚本和简单调用，但也会在上传与付费提交前实时按
`capabilities.params` 校验。新 Agent 流程一律优先使用 `request init/validate/submit`。

### 生成视频

```bash
node bin/okflow.mjs generate \
  --model <模型名> \
  --prompt-file ./video-prompt.txt \
  --config-file ./model-config.json \
  --wait --timeout 1200
```

`model-config.json` 只能包含该模型生成文档中声明的字段；不要从这个兼容示例推断字段名。

视频生成通常需要 5-15 分钟，`--timeout` 要给足（单位秒）。默认超时对视频不够。

### 长 prompt 从文件读

命令行传中文长文本容易被 shell 转义搞坏，超过一两句就用文件：

```bash
node bin/okflow.mjs generate --model <模型名> --prompt-file ./my-prompt.txt --wait
```

### 不等待，先拿 taskId

```bash
node bin/okflow.mjs generate --model <模型名> --prompt "..."     # 立即返回 taskId
node bin/okflow.mjs status <taskId>                              # 之后再查
node bin/okflow.mjs status <taskId> --wait --timeout 1200         # 或者挂着等
```

视频任务建议这么用：提交和等待分开，轮询中断了也不用重新花钱提交。

### 下载产物

```bash
node bin/okflow.mjs download <taskId>                # 存到 ./downloads/<taskId>/
node bin/okflow.mjs download <taskId> --dir ./out    # 指定目录
```

会把 `images[]` 里的图片/视频/音频、以及顶层的视频地址全部扫出来下载，文件名取自
URL。任务未完成时不下载，会提示先去查状态。

### 给脚本调用（--json）

所有命令都支持 `--json`，只输出结果 JSON、不打印进度，方便管道处理：

```bash
TASK_ID=$(node bin/okflow.mjs generate --model v8.1 --prompt "..." --json | node -e '...')
```

退出码约定：0 成功，1 失败（含任务失败、参数错误、凭证缺失）。

## 参数权威

模型专属参数只认用户本地 `~/.okflow/model-references/catalog.json` 与线上实时
`capabilities.params`。不要使用手写模型资料决定字段、默认值、枚举或范围。

## Preset Styles and Prompt Variables

When users should enter only a subject or keyword while the platform keeps a stable visual style, use a database-backed image preset instead of concatenating the full style prompt on the client.

The preset generation contract is:

```http
POST /openapi/v1/agent/preset/generate
Authorization: Bearer ak_xxx
Content-Type: application/json
```

Minimal request:

```json
{
  "preset_id": "okflow_poster_v1",
  "prompt": "team collaboration dashboard"
}
```

Preset prompt templates use Jinja2 and support arbitrary variable names. `prompt` and `subject` are built-in aliases for the caller's keyword. Use the actual double-brace syntax, for example:

```text
Subject: {{ subject }}
Scene: {{ scene }}
Character: {{ character }}
Palette: {{ palette }}
Composition: {{ composition }}
Fixed style: modern product poster, blue-violet technology, clean layout
```

Use `variable_rules` to describe optional and required variables and their defaults:

```json
{
  "scene": {"type": "string", "default": "modern workspace"},
  "character": {"type": "string", "default": "collaborative team"},
  "palette": {"type": "string", "default": "blue-violet"},
  "composition": {"type": "string", "default": "centered composition"}
}
```

Supported `variable_rules.type` values are `string`, `integer`, `float`, `number`, `boolean`, `array`, and `object`. Text inserted into `prompt_template` should normally be a string; structured values are better kept in nested `generation_params`, which are rendered recursively and type-cast according to these rules.

### Keyword-only boundaries

- The generic `generate` CLI command does not resolve `preset_id`. Do not put `preset_id` into `--config` and assume the preset will be applied. Use the preset OpenAPI contract, or add a dedicated CLI subcommand before documenting a CLI invocation.
- For a keyword-only user experience, send only `preset_id` and `prompt`; do not expose unrestricted `template_vars`. Add an allowlist when callers are allowed to override only selected variables.
- Keep fixed style instructions, negative prompts, model, dimensions, and provider parameters in the preset. Set `config.hide_prompt=true` when the rendered prompt must stay hidden from public task/history responses.
- Reuse the preset billing policy (`charge_enabled=false`, `charge_type=image`, or `charge_type=fixed`) and the shared settlement path; do not create CLI-side wallet or billing logic.
- A preset keeps prompt and parameter behavior consistent, but does not guarantee pixel-identical results. Character or brand consistency may also require reference images, a supported fixed seed, or provider-specific identity controls.
- `negative_prompt` is currently a fixed preset field and is not rendered like `prompt_template`; verify backend support before designing a variable negative prompt.

## Local reference images

Upload a local reference image and receive a durable URL:

```bash
node bin/okflow.mjs upload ./reference.png --json
```

Pass local reference images directly to image generation; each file is uploaded before
the generation request is submitted:

```bash
node bin/okflow.mjs generate --model <model> --prompt "..." --image-file ./reference.png --wait
```

Use `--image-file path1,path2` for multiple files. Existing `--images url1,url2` remains supported.

## Knowledge-base OpenAPI

For every knowledge-base task, read [references/knowledge-openapi.md](references/knowledge-openapi.md) in full
before making requests. It is the authoritative workflow for API-key authentication, contract discovery, note
creation and update, dry-run and publish, protected media, image-history `<creation-reference />` blocks,
light-app `<application-reference />` blocks, verification, and error recovery.

Treat these capabilities as HTTP OpenAPI operations. Do not modify frontend code or call JWT-only user endpoints
to create notes or resolve references.

## 写 prompt 的注意事项

平台上游有内容审核，命中会导致任务失败，且**错误信息通常是空的**，只能看到
「生成失败」这类脱敏文案。规避方式：

- 人物用通用描述（「一位穿白裙的年轻女子」），不要起具体人名
- 避免听起来像已有小说/游戏原创设定的专有名词（门派名、法宝名）
- 血腥/暴力细节用抽象意象替代

失败特征：任务提交成功拿到了 taskId，但明显早于正常生成耗时就变成 failed，且
`errorMessage` 为空 —— 这种情况优先换 prompt 重试，而不是怀疑参数配错。

## 常见问题

| 现象 | 原因 | 处理 |
|------|------|------|
| `OKFLOW_API_KEY 未配置` | 凭证没设置 | 跑 `setup` 看指引 |
| 401 Unauthorized | key 无效/过期/被禁用 | 去控制台确认 key 状态 |
| `模型不存在` | 模型名猜错了 | 跑 `models` 拿准确名字 |
| 轮询超时 | 视频生成没跑完 | 用 `status <taskId>` 继续查，任务还在跑 |
| 任务快速 failed 且无错误信息 | 内容审核拦截 | 按上一节改 prompt |

## Canvas node protocol

When an Agent operates the Okflow canvas, keep the node types distinct:

- `text` means the generation-capable `scriptCard` node.
- `plain_text` means the editable `textCard` node. Send its body in `content`; it can be updated, connected, and generated with `run_generation` (use `mode: "text"`, which is also inferred when omitted).
- The canvas director uses the concrete frontend name `textCard` in `canvas_create_node` and `canvas_update_node`.
- `connect_nodes` 默认只建立候选资源关系。只有 Agent 明确要把一个 `image` 来源写进目标图片提示词时，才传 `mentionInPrompt: true`；否则该连线不会成为生图参考图。

The browser remains responsible for the existing canvas approval flow. Do not bypass it with DOM clicks or direct Socket.IO requests.

### OpenAPI relay and image model capabilities

For a remote CLI or Agent, use the existing OpenAPI relay with `Authorization: Bearer <openapi-token>`:

- `GET /openapi/v1/project/canvas/director/online?project_id=<id>&canvas_id=<id>` confirms that a browser is connected.
- `GET /openapi/v1/project/canvas/director/models?project_id=<id>&canvas_id=<id>&node_id=<optional>` lists public image models, presets, and `capabilities` without exposing provider credentials. When `node_id` is supplied, the response includes the model/preset selected on that image node as `default_model`.
- `POST /openapi/v1/project/canvas/director/send` sends the natural-language command to the director; the browser remains the only Socket.IO client.

Before image generation, call the models endpoint or the director's `canvas_list_image_models` tool when model capabilities are needed. For `canvas_run_node_action`, omit `action_params.model` to preserve the target image node's saved model, preset, and generation settings. Only pass `model` when the user explicitly chooses one. For batch group creation, omitting `model` uses the first currently available canvas image option together with its preset ID and default config. To choose a preset explicitly, pass its returned option `id`; a normal model may use its `model_name` or returned `id`.

### Batch-create image groups from a story node

For one-shot derivation of character, scene, prop, and storyboard drafts, instruct the canvas director to use `canvas_batch_create_image_groups`. Pass the story node's real backend ID, a stable `batch_key`, and one group per semantic kind. The optional image model can be omitted to use the current canvas default. The tool creates `groupCard` containers and child `imageCard` drafts in one transaction, asks for one normal canvas approval, and does not run generation or charge image-generation credits.

```json
{
  "source_node_id": 123,
  "batch_key": "okflow-xianxia-promo-v1",
  "connect_source": true,
  "groups": [
    {
      "kind": "character",
      "title": "角色形象",
      "color": "#8b5cf6",
      "items": [
        {"title": "修仙者", "description": "青年修士的角色设定", "prompt": "东方修仙角色设定图"}
      ]
    },
    {"kind": "scene", "title": "场景", "color": "#0ea5e9", "items": []},
    {"kind": "prop", "title": "道具", "color": "#f59e0b", "items": []},
    {"kind": "storyboard", "title": "分镜故事板", "color": "#22c55e", "items": []}
  ]
}
```

Use only `character`, `scene`, `prop`, and `storyboard`; allow at most one group per kind and 50 items per group. Reusing the same `source_node_id + batch_key + kind` is idempotent. Keep storyboard children as normal `imageCard` drafts with `generationMode="normal"`; never fabricate `shotId`. With `connect_source=true`, the backend creates source edges only when the canvas IO contract permits them.

### 批量关联分镜参考素材

多个现有节点需要一次性连线时，使用 `canvas_batch_connect_nodes`。传入 1-100
条 `edges`，每条包含 `from_node_id`、`to_node_id`，以及可选的
`edge_type`/`label`/`mention_in_prompt`。manual 模式整批只需一次授权；后端会先校验全部节点归属和
IO 兼容性，再在一个事务内写入，并复用完全相同的已有连线。任意一条不合法时，
本次调用不会写入任何连线。

分镜一致性应将对应的角色、场景、道具子 `imageCard` 精确连到每个分镜子
`imageCard`，不要连接 `groupCard` 容器，因为分组本身不产出资源。连线默认只暴露
候选资源：`mention_in_prompt` 默认为 `false`，因此单纯创建或复用
`imageCard -> imageCard` 连线不会选中参考图。只有当前请求明确选择该资源时才传
`mention_in_prompt=true`，后端才会在同一事务中为目标提示词补齐可见的结构化 `@`
引用；引用保存的是源节点身份，不保存图片 URL。故事文本到分镜的文本叙事边只作为
上下文，不会变成参考图。生成时只传递仍存在于目标 `prompt` 且仍可从当前图到达的
mentions；手工删除 chip 只表示本次生成不使用该资源，不会删除连线。连线本身不会
触发生图或计费；只连接属于该镜头的素材，不要把全部素材无差别连接到每个镜头。

### 批量更新画布节点

多个现有节点需要一次性改内容时，使用 `canvas_batch_update_nodes`。传入 1-100
个 `updates`，每项包含唯一的正整数 `node_id` 和非空增量 `draft_data`。后端会先
校验整批，再在一个数据库事务中写入；任一节点无效或不属于当前画布时整批失败，
不会留下部分结果，manual 模式只出现一张授权卡。

批量重写图片提示词时，必须在新 `prompt` 中保留仍需使用的可见结构化 `@` 令牌；
除非要改变资源身份，否则不要覆盖 `promptResourceMentions`。删除可见 `@` 即表示下次
生成不再传该资源，即使连线仍然存在。

分镜图片节点应保持“一节点一镜头”。提示词至少包含：画风、引用资源、场景、时间/
天气、镜头编号、景别/运镜、具体动作、构图光线、连续性、生成约束。不要只写一句
剧情概括，也不要让生图模型凭空绘制对白、字幕、Logo 或水印。

### 批量执行图片分组

分组创建完成后，使用 `canvas_batch_run_image_group`，传入分组真实
`group_node_id`，提交其中尚未生成的 `imageCard` 子节点。默认动作是
`ai_generate_image`；旧故事板分组可以显式传 `ai_generate_storyboard_image`。
已完成和处理中节点始终跳过；错误节点默认跳过，仅在用户明确要求重试时传
`retry_errors=true`。结果包含 `started_node_ids`、`skipped`、`failed`。manual
模式整组只需一次授权；单个生图节点仍使用
`canvas_run_node_action` 传入 `node_id` 和 `action_params`。

### 从分镜图片批量创建视频节点组

当一个已完成的导演分镜图片组需要按“一图一视频”派生草稿时，使用
`canvas_batch_create_video_group`。该工具只出现一次 manual 授权，并在同一个
数据库事务中创建 `groupCard`、全部子 `videoCard`，以及逐一对应的
`imageCard -> videoCard` 分镜参考连线。它不会启动视频生成，也不会产生视频费用。

传入真实分镜图片组 ID、稳定 `batch_key`，以及每张直属图片对应的一项：

```json
{
  "source_group_node_id": 887,
  "batch_key": "okflow-xianxia-promo-video-v1",
  "title": "视频分镜组（6）",
  "color": "#06b6d4",
  "position": {"x": -76, "y": 5188},
  "size": {"width": 2352, "height": 1368},
  "items": [
    {
      "source_image_node_id": 888,
      "title": "镜头1｜云海灵印觉醒（8s）",
      "description": "云海之巅，修仙者结印唤醒 OKFlow 灵印",
      "prompt": "写实东方修仙，按时间段描述连续动作与运镜",
      "duration": 8,
      "position": {"x": 44, "y": 44},
      "size": {"width": 720, "height": 620}
    }
  ]
}
```

每个来源必须是该分镜组直属且已有可用图片的 `imageCard`，来源 ID 不得重复；
`duration` 必须是 1-15 的整数。子节点位置相对分组左上角，显式传入分组尺寸时不得
越界。工具自动保存项目默认视频预设及其配置，每项只覆盖自身时长；同时保存来源
分镜身份、当前图片 URL，并在提示词前加入编辑器可见的 `@图片1` 系统首帧标记。
导演创建的普通分镜组不得伪造 shot/storyboard 数据库 ID。

只有完全相同的请求和来源图片版本才能使用同一 `batch_key` 重试。同一
`source_group_node_id + batch_key` 具备幂等性；提示词、布局、时长、来源 URL 或来源
版本变化时会明确冲突，不会静默复用旧视频草稿。目前没有
`canvas_batch_run_video_group`；校对完成后，单个视频节点使用
`canvas_run_node_action(action="ai_generate_video")` 并显式传生成参数。不得把“创建
视频组”描述成已经提交付费生成任务。
