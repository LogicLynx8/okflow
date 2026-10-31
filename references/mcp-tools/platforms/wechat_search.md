# 微信搜一搜 MCP 工具

- 来源平台：`微信搜一搜`
- 能力分段：`wechat_search`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 2

## `mcp_637ac1c7eb180015fa732833`

搜视频号视频（时长/排序/时间筛选）/WeChat Channels Video Search

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"duration","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"sort","type":"any","required":false}]`

## `mcp_aabbac6a9c34eac630a0bfd8`

# [中文] ### 用途: - 微信「搜一搜」综合搜索，垂类由 `business_type` **字符串键**切换，传关键词即可。 - **实测可搜**：综合 / 公众号（含服务号、视频号）/ 文章 / 视频号视频 / 表情。 - ⚠️ 其余垂类（直播 / 朋友圈 / 新闻 / 读书 / 听书 / 图片 / 百科 / 微信指数 / 划线 / 评论 / 贴图 / 小游戏 / AI 搜索）由微信服务端按账号与地区下发，当前实测恒返回空结果（`no_more` 文案非空即为正常空结果，`raw=true` / `raw=false` 都在顶层；`raw=false` 时另有 `count=0`

- Risk: `write`
- Parameters: `[{"name":"business_type","type":"string","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"sort","type":"any","required":false}]`
