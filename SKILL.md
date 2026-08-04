---
name: okflow
description: Use when generating images, videos, or music through the okflow platform, including reusable image presets with multi-variable prompt templates; covers listing models, submitting generation tasks, polling, and downloading results via CLI or the preset OpenAPI contract.
---

# okflow 图片/视频生成 CLI

通过 okflow 开放 API 生成图片、视频、音乐。所有操作走本目录下的 Node.js CLI，
不需要手写 HTTP 请求，也不需要了解平台内部实现。

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

Key 的格式是 `ak_xxx:sk_xxx`（access key 和 secret key 用冒号连接）。只有 `ak_xxx`
也能用，但强烈建议带上 sk，否则平台侧无法完成完整校验。

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
| `status <taskId>` | 查询单个任务的状态 |
| `download <taskId>` | 把已完成任务的产物下载到本地 |
| `upload <file>` | 上传本地文件并返回持久化 URL |

所有命令都支持 `--help` 查看完整参数。

## 典型用法

### 查看可用模型

```bash
node bin/okflow.mjs models                      # 全部
node bin/okflow.mjs models --type text2video    # 只看文生视频
```

先跑这个，再决定 `--model` 传什么。**不要凭记忆猜模型名** —— 平台的模型清单会变，
猜错会得到「模型不存在」而不是有意义的报错。

### 生成图片

```bash
node bin/okflow.mjs generate \
  --model <模型名> \
  --prompt "一只橘猫坐在窗台上，午后阳光" \
  --wait
```

### 生成视频

```bash
node bin/okflow.mjs generate \
  --model <模型名> \
  --prompt "运镜描述..." \
  --config '{"resolution":"1080p","duration":"15","ratio":"16:9"}' \
  --wait --timeout 1200
```

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

## 生成参数怎么传

`--prompt` 之外的模型参数统一走 `--config`（JSON 字符串）或 `--config-file`。
CLI 不做参数校验和映射，原样透传给平台。

不同模型支持的参数不同（分辨率枚举、时长范围、是否支持音频等），跑 `models` 命令
看返回里的能力描述，或直接试一次看报错。

### 按模型查参数文档

`references/` 目录下按模型放了参数文档，写好了完整取值范围和可直接抄的命令示例，
比现场试错报错更省事：

| 模型 | 文档 |
|------|------|
| `hailuo-h3-text-to-video` | `references/hailuo-h3-text-to-video.md` |
| `gpt-image-2` | `references/gpt-image-2.md` |

调用这两个模型之前先读对应文档。其他模型暂时没有专门文档，走上面说的 `models` +
试错流程。

## Preset Styles and Prompt Variables

When users should enter only a subject or keyword while the platform keeps a stable visual style, use a database-backed image preset instead of concatenating the full style prompt on the client.

The preset generation contract is:

```http
POST /openapi/v1/agent/preset/generate
Authorization: Bearer ak_xxx[:sk_xxx]
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
