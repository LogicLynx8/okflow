# 微信视频号 MCP 工具

- 来源平台：`微信视频号`
- 能力分段：`wechat_channels`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 12

## `mcp_10518e0fa2fbf58425ed8270`

获取视频号作品详情/Get WeChat Channels Video Detail

- Risk: `write`
- Parameters: `[{"name":"export_id","type":"any","required":false},{"name":"object_id","type":"any","required":false},{"name":"object_nonce_id","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"share_url","type":"any","required":false}]`

## `mcp_308eb62c7e7793ce2ed2fa7b`

获取视频号合集列表/Get WeChat Channels User Collections

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_37c516a21dfeca26f2d27d14`

获取视频号直播回放列表/Get WeChat Channels Live History

- Risk: `write`
- Parameters: `[{"name":"flag","type":"integer","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_4485f7fbdc60ffacdbaa26e2`

获取视频号账号信息/Get WeChat Channels Account Info

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_4f286665bbeda679bc6f9433`

获取视频号用户作品列表/Get WeChat Channels User Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_64272fd5ea0024740d4dc56a`

视频号ID转finder username/Convert Channel ID to Finder Username

- Risk: `write`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_6e36f03309cfd9e849f12b8c`

视频号号内搜索/Search Videos Within a WeChat Channel

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_6e4f3af775dc2cf1839e41af`

获取视频号账号主页资料+统计/Get WeChat Channels User Profile & Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_854c78437a1242b6d5988163`

获取视频号作品评论/Get WeChat Channels Video Comments

- Risk: `write`
- Parameters: `[{"name":"comment_id","type":"any","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_b042a52333ab7b55dab31fa2`

获取视频号直播间详情/Get WeChat Channels Live Detail

- Risk: `write`
- Parameters: `[{"name":"finder_username","type":"any","required":false},{"name":"live_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"scene","type":"integer","required":false}]`

## `mcp_f0e40703d7aabaae9f60a75d`

生成视频号作品分享链接/Generate WeChat Channels Video Share URL

- Risk: `write`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_f34c1e305a48d68cb5302d4a`

获取视频号合集内视频/Get WeChat Channels Collection Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"topic","type":"any","required":false},{"name":"topic_id","type":"string","required":true},{"name":"topic_type","type":"integer","required":false},{"name":"username","type":"any","required":false}]`
