# 微信公众号 MCP 工具

- 来源平台：`微信公众号`
- 能力分段：`wechat_mp`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 11

## `mcp_037a514036fda8f6b5f167b6`

获取公众号文章评论/Get WeChat MP Article Comments

- Risk: `write`
- Parameters: `[{"name":"buffer","type":"any","required":false},{"name":"comment_id","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_04a164957abf5836e6228e05`

# [中文] ### 用途: - 传公众号 username，返回公众号资料页：昵称 / IP 属地 / 原创文章数 / 认证主体类型 / 关联视频号等。 - ⚠️ **签名（简介）与头像这条路取不到** —— 微信的资料页响应里既没有可读简介也没有头像。 它们恒为 `null` 并列在 `$.data.unavailable[]` 里，**不会用空串冒充**，调用方可据此区分 「这个号真的没填」和「这条路取不到」。 - 💡 **头像请改用 `/fetch_article_detail_h5`**（传该号的任意一篇文章链接，`raw=true`）： `$.data.content.round_

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_2b2c3dc643552e9aaa513970`

获取公众号文章广告/Get WeChat MP Article Ads

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_404cc7a807e77a59298aa81f`

获取公众号文章列表/Get WeChat MP Account Articles

- Risk: `write`
- Parameters: `[{"name":"item_show_type","type":"any","required":false},{"name":"offset","type":"any","required":false},{"name":"page_size","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_5e71f49c20f12c1b198826bf`

# [中文] ### 用途: - 传文章 URL，返回文章正文 / 标题 / 作者 / 封面 / 发布时间 / 合集信息等，**推荐默认使用本接口**。 - 与 `/fetch_article_detail` 是**两个独立接口**，各自返回结果，不会自动切换： | 接口 | 特点 | 建议 | |---|---|---| | `/fetch_article_detail` | 响应快、字段较少；稳定性不如本接口 | 对速度敏感时用 | | `/fetch_article_detail_h5`（本接口） | 正文稳定、**字段最全** | **默认推荐** | - 返回结构与 `/fetch_

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_6012ec6b3297946847731e97`

# [中文] ### 用途: - 传文章 URL，返回**评论数 / 精选评论数**。与 `/fetch_article_stats` 是**两个独立接口**， 各自返回结果，不会自动切换： | 接口 | 能取到 | 建议 | |---|---|---| | `/fetch_article_stats` | 阅读量 / 点赞 / 在看 / 分享 / 收藏 / 评论数（**全部指标**） | 需要阅读量等指标时用 | | `/fetch_article_stats_h5`（本接口） | **仅评论数 / 精选评论数**；稳定性更好 | 只要评论数、或上面那条报错时用 | - ⚠️ 阅读量、点赞、

- Risk: `write`
- Parameters: `[{"name":"comment_id","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_6bdcd222df4fbfb4692b98f6`

获取公众号评论的二级回复/Get WeChat MP Comment Replies

- Risk: `write`
- Parameters: `[{"name":"comment_id","type":"any","required":false},{"name":"content_id","type":"any","required":false},{"name":"offset","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_8fe22bb9db4134d587394490`

获取公众号文章互动数据/Get WeChat MP Article Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_afecd9edaa496ffde1118aab`

获取公众号关联文章/Get WeChat MP Related Articles

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_d80719758fd56cf9ffaee2c9`

获取公众号服务/自定义菜单/Get WeChat MP Account Services & Custom Menu

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_e0bd0964f21b853f8f5a360e`

获取公众号文章详情/Get WeChat MP Article Detail

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`
