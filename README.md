# okflow CLI

**一条命令，批量生产你的内容素材 —— AI 图片 / 视频 / 音乐生成工具**

做内容最怕的不是没创意，是创意卡在「做不出来」。封面图找不到合适的、视频素材剪不出感觉、配乐翻来覆去就那几首——okflow 把这些活变成一行命令，让 AI 帮你批量出活。

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
node bin/okflow.mjs generate --model <模型名> --prompt "镜头从云海缓缓推近，一座悬浮仙山显现" \
  --config '{"resolution":"1080p","duration":"10","ratio":"16:9"}' --wait --timeout 1200
```

### 🎵 音乐生成 —— 视频配乐，告别版权焦虑

背景音乐、氛围音效，按你的视频情绪生成，不用再担心 BGM 侵权下架。

### 🎨 画布工作流 —— 从剧本到成片，一站编完

在 [okflow.cn](https://okflow.cn) 的可视化画布里，把剧本、分镜、图片、视频、配乐串成一条流水线：剧本节点产出分镜，分镜节点生成图片，图片节点一键转视频。多人设、多场戏的一致性素材，画布帮你管得明明白白。

---

> 💡 **不想碰命令行？** 上面这些事在 okflow.cn 网页画布里点点鼠标也能做。
> **[免费注册，先玩起来 →](https://okflow.cn)**

## 5 分钟跑通第一张图

CLI 零第三方依赖，只要 Node.js ≥ 18，clone 下来就能跑。

**1. 拿 Key**

注册 [okflow.cn](https://okflow.cn) → 控制台 →「开放 API」→ 创建 API Key，拿到 `ak_xxx:sk_xxx`。

**2. 配 Key**

在本目录新建 `.env` 文件（首次运行 `setup` 也会自动帮你建好）：

```
OKFLOW_API_KEY=ak_xxx:sk_xxx
```

**3. 验证环境**

```bash
node bin/okflow.mjs setup
```

**4. 看看能用哪些模型**

```bash
node bin/okflow.mjs models                  # 全部模型
node bin/okflow.mjs models --type text2video # 只看文生视频
```

**5. 生成你的第一张图**

```bash
node bin/okflow.mjs generate --model <上一步看到的模型名> --prompt "你的画面描述" --wait
```

看到产物 URL 或 `download` 下载成功，就算跑通了。🎉

## 进阶技巧

- **视频任务分开提交和等待**：视频生成通常要 5-15 分钟，先不加 `--wait` 拿到 taskId，回头用 `status <taskId> --wait --timeout 1200` 挂着等——轮询中断了也不用重新花钱提交。
- **长 prompt 用文件**：`--prompt-file ./my-prompt.txt`，避免命令行转义把中文长文本搞坏。
- **下载产物**：`node bin/okflow.mjs download <taskId>`，产物存到 `./downloads/<taskId>/`。
- **脚本集成**：所有命令支持 `--json`，只输出结果 JSON，方便接进你的自动化流水线。
- **写 prompt 避坑**：人物用通用描述（「一位穿白裙的年轻女子」）而不是具体人名；避免像已有作品原创设定的专有名词。命中内容审核的任务会「很快失败且没有错误信息」，遇到这种特征先改 prompt 重试。
- **按模型查参数**：`references/` 目录有现成的参数文档（如 `gpt-image-2`、`hailuo-h3-text-to-video`），写好取值范围和可照抄的命令示例，比现场试错省事。

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
