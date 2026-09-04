# OKFlow AI 多模态创作与智能体 CLI

**面向 AI Agent 的 OpenAPI 与命令行工具：生成图片、视频和音乐，调用线上智能体，维护知识库，并安全调度 MCP 工具。**

OKFlow CLI 适合 AI 内容创作、图生图、文生图、图生视频、文生视频、AI 音乐、智能体调用、模型参数同步和自动化工作流。它从公开模型的 `capabilities.params` 获取真实参数契约，在付费生成前完成校验，减少参数幻觉和无效请求。

> 👉 **[免费注册 okflow.cn，领取试用额度 →](https://okflow.cn)**

<!-- 效果展示位：建议放 2-4 张真实生成作品（图片/视频缩略图）
     图片可放到 docs/images/ 目录后引用，例如：
     ![生成示例](docs/images/showcase-1.png)
-->

## 你能用它做什么

### 🖼️ 图片生成 —— 配图自由，不用再翻素材站

小说推文配图、小红书封面、公众号头图、营销海报……描述一下画面，几十秒出图，风格随你定。

```bash
node bin/okflow.mjs generate --model <模型名> --prompt "一只橘猫坐在窗台上，午后阳光" --wait
```

### 🎬 视频生成 —— 短视频素材，AI 直接给你拍

产品宣传片、动态分镜、口播背景素材。写好画面和运镜描述，AI 帮你生成 1080p 视频片段。

```bash
node bin/okflow.mjs request init --model <视频模型名> --output ./video-request.json
# 在文件里填写提示词和该模型已经声明的参数
node bin/okflow.mjs request submit ./video-request.json --wait --timeout 1200
```

### 🎵 音乐生成 —— 视频配乐，告别版权焦虑

背景音乐、氛围音效，按你的视频情绪生成，不用再担心 BGM 侵权下架。

### 线上 Agent - 把提示词能力接进自动化

先列出当前 API Key 可见的 Agent，拿到 `prompt_code` 后再调用。比如让一个线上 Agent
把商品描述整理为生图提示词，再直接交给图片模型生成：

```bash
node bin/okflow.mjs agent list --tags image,prompt

node bin/okflow.mjs agent image \
  --prompt-code <生图提示词Agent编码> \
  --message "为一款复古机械键盘设计电商主图" \
  --model <图片模型名> \
  --wait
```

Agent 只能提供最终图片提示词，不能改写你指定的图片模型、尺寸、参考图或其他生成参数。
JSON Agent 需要加 `--prompt-path json_message.prompt` 指定提示词字段。该串联会分别调用
Agent 和图片生成能力，可能产生两笔费用。

### 🎨 画布工作流 —— 从剧本到成片，一站编完

在 [okflow.cn](https://okflow.cn) 的可视化画布里，把剧本、分镜、图片、视频、配乐串成一条流水线：剧本节点产出分镜，分镜节点生成图片，图片节点一键转视频。多人设、多场戏的一致性素材，画布帮你管得明明白白。

---

> 💡 **不想碰命令行？** 上面这些事在 okflow.cn 网页画布里点点鼠标也能做。
> **[免费注册，先玩起来 →](https://okflow.cn)**

## 5 分钟跑通第一张图

CLI 零第三方依赖，只要 Node.js ≥ 18，clone 下来就能跑。

**1. 拿 Key**

注册 [okflow.cn](https://okflow.cn) → 控制台 →「开放 API」→ 创建 API Key，拿到 `ak_xxx`。

**2. 配 Key**

在本目录新建 `.env` 文件（首次运行 `setup` 也会自动帮你建好）：

```
OKFLOW_API_KEY=ak_xxx
```

**3. 验证环境**

```bash
node bin/okflow.mjs setup
```

**4. 看看能用哪些模型**

```bash
node bin/okflow.mjs models                  # 全部公开模型
node bin/okflow.mjs models --type text2video # 只看文生视频
```

`models` 固定请求 `is_public=true`，只返回公开且当前 API Key 可用的模型。

**5. 生成请求文件并提交**

```bash
node bin/okflow.mjs request init --model <模型名> --output ./request.json
# 填写 request.json 中的 prompt 和 null 必填项
node bin/okflow.mjs request validate ./request.json
node bin/okflow.mjs request submit ./request.json --wait
```

看到产物 URL 或 `download` 下载成功，就算跑通了。🎉

## 进阶技巧

- **视频任务分开提交和等待**：视频生成通常要 5-15 分钟，先不加 `--wait` 拿到 taskId，回头用 `status <taskId> --wait --timeout 1200` 挂着等——轮询中断了也不用重新花钱提交。
- **长 prompt 用文件**：`--prompt-file ./my-prompt.txt`，避免命令行转义把中文长文本搞坏。
- **下载产物**：`node bin/okflow.mjs download <taskId>`，产物存到 `./downloads/<taskId>/`。
- **脚本集成**：所有命令支持 `--json`，只输出结果 JSON，方便接进你的自动化流水线。
- **线上 Agent**：先跑 `agent list` 获取当前 Key 可见的 `prompt_code`；`agent call` 只支持非流式调用，`agent image` 会把 Agent 输出严格写入生图的 `config.prompt`。
- **写 prompt 避坑**：人物用通用描述（「一位穿白裙的年轻女子」）而不是具体人名；避免像已有作品原创设定的专有名词。命中内容审核的任务会「很快失败且没有错误信息」，遇到这种特征先改 prompt 重试。
- **按模型查参数**：运行 `node bin/sync-model-references.mjs`，再读取自动生成的 `references/models/INDEX.md`；参数唯一来源是公开模型 API 的 `capabilities.params`。

## 不猜参数的 JSON 请求流程

复杂 JSON 不要直接拼在命令行里。CLI 会把云端 `capabilities.params` 同步成机器可读
`catalog.json` 和逐模型 Markdown，并在付费提交前再次按最新线上契约校验：

```bash
node bin/sync-model-references.mjs --check-only --json
node bin/sync-model-references.mjs

node bin/okflow.mjs request init --model <模型名> --output ./request.json
node bin/okflow.mjs request validate ./request.json --refresh
node bin/okflow.mjs request submit ./request.json --wait --timeout 1200
```

模型缺少非空 `capabilities.params` 时，CLI 会阻止模板创建和生成。未知参数、空必填项、
错误枚举/类型/范围、媒体 URL 或数量超限也会在请求前失败。`generate` 和 `agent image`
仍保留兼容，但同样不能绕过这套实时校验。

## 常见问题

| 现象 | 怎么办 |
|------|--------|
| `OKFLOW_API_KEY 未配置` | 跑 `setup` 看指引，把 Key 填进 `.env` |
| 401 Unauthorized | Key 无效或过期，去控制台确认状态 |
| `模型不存在` | 别猜模型名，跑 `models` 拿准确清单 |
| 轮询超时 | 任务还在跑，用 `status <taskId>` 继续查 |
| 任务很快 failed 且无错误信息 | 内容审核拦截，按上面的避坑建议改 prompt |

更多用法：`node bin/okflow.mjs <命令> --help`。

---

## 开始创作

素材生产这件事，交给 AI；创意和审美，留给你。

> 🚀 **[免费注册 okflow.cn，领取试用额度 →](https://okflow.cn)**
>
> 官网：[okflow.cn](https://okflow.cn) ｜ 控制台：okflow.cn → 开放 API ｜ 参数文档：`references/`
