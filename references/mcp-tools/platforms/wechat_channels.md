# 微信视频号 MCP 工具

- 来源平台：`微信视频号`
- 能力分段：`wechat_channels`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 12

## `mcp_40971be73efeef4006474824`

获取视频号合集列表/Get WeChat Channels User Collections

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_45dab5e41d9f960de9db57a2`

获取视频号账号信息/Get WeChat Channels Account Info

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_4748f9d610331718d6e39fed`

视频号号内搜索/Search Videos Within a WeChat Channel

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_4d0391ef0537e0502c49227f`

获取视频号直播间详情/Get WeChat Channels Live Detail

- Risk: `write`
- Parameters: `[{"name":"finder_username","type":"any","required":false},{"name":"live_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"scene","type":"integer","required":false}]`

## `mcp_92765fc2eb758feeda75cf33`

生成视频号作品分享链接/Generate WeChat Channels Video Share URL

- Risk: `write`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_ab0f6e26a9a9b89510acaec9`

获取视频号作品评论/Get WeChat Channels Video Comments

- Risk: `write`
- Parameters: `[{"name":"comment_id","type":"any","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_ad1e4fced292aa6726a7a7a6`

获取视频号直播回放列表/Get WeChat Channels Live History

- Risk: `write`
- Parameters: `[{"name":"flag","type":"integer","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_b0ef56d2e75383ba152e68d7`

获取视频号合集内视频/Get WeChat Channels Collection Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"topic","type":"any","required":false},{"name":"topic_id","type":"string","required":true},{"name":"topic_type","type":"integer","required":false},{"name":"username","type":"any","required":false}]`

## `mcp_c710d99285af95faeef19dd3`

获取视频号用户作品列表/Get WeChat Channels User Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_cc88b15027e57c5cb2da79c1`

获取视频号作品详情/Get WeChat Channels Video Detail

- Risk: `write`
- Parameters: `[{"name":"export_id","type":"any","required":false},{"name":"object_id","type":"any","required":false},{"name":"object_nonce_id","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"share_url","type":"any","required":false}]`

## `mcp_d94401f0b56fb2c01b801c84`

视频号ID转finder username/Convert Channel ID to Finder Username

- Risk: `write`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_ed3aef6b3c2a2ba632842152`

获取视频号账号主页资料+统计/Get WeChat Channels User Profile & Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`
