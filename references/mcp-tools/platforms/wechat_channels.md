# 微信视频号 MCP 工具

- 来源平台：`微信视频号`
- 能力分段：`wechat_channels`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 12

## `mcp_2275995539447a550beba8fe`

获取视频号作品详情/Get WeChat Channels Video Detail

- Risk: `write`
- Parameters: `[{"name":"export_id","type":"any","required":false},{"name":"object_id","type":"any","required":false},{"name":"object_nonce_id","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"share_url","type":"any","required":false}]`

## `mcp_4fc614d75aa6176b4ce2c4b8`

获取视频号直播回放列表/Get WeChat Channels Live History

- Risk: `write`
- Parameters: `[{"name":"flag","type":"integer","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_5d2d8414f57fb2cdbcdafa1d`

获取视频号作品评论/Get WeChat Channels Video Comments

- Risk: `write`
- Parameters: `[{"name":"comment_id","type":"any","required":false},{"name":"last_buffer","type":"any","required":false},{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_7cfcfcf950f634fe5c241b79`

获取视频号账号信息/Get WeChat Channels Account Info

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_825f43194d45892a7d72a512`

获取视频号合集内视频/Get WeChat Channels Collection Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"topic","type":"any","required":false},{"name":"topic_id","type":"string","required":true},{"name":"topic_type","type":"integer","required":false},{"name":"username","type":"any","required":false}]`

## `mcp_8df0207fa22577b1890993bc`

视频号ID转finder username/Convert Channel ID to Finder Username

- Risk: `write`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_bbd8937483337c50b569aabb`

获取视频号账号主页资料+统计/Get WeChat Channels User Profile & Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_c272144e5a84158bccafd83d`

获取视频号直播间详情/Get WeChat Channels Live Detail

- Risk: `write`
- Parameters: `[{"name":"finder_username","type":"any","required":false},{"name":"live_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"scene","type":"integer","required":false}]`

## `mcp_e087b14d33fb5cd20e4921b2`

生成视频号作品分享链接/Generate WeChat Channels Video Share URL

- Risk: `write`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"raw","type":"boolean","required":false}]`

## `mcp_e3affa3cec390ae133a09241`

获取视频号用户作品列表/Get WeChat Channels User Videos

- Risk: `write`
- Parameters: `[{"name":"last_buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_efa4bb20288561d0c6220b2e`

获取视频号合集列表/Get WeChat Channels User Collections

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_f4daf80657a7426eccc2f6d0`

视频号号内搜索/Search Videos Within a WeChat Channel

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`
