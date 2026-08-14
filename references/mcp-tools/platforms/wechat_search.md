# 微信搜一搜 MCP 工具

- 来源平台：`微信搜一搜`
- 能力分段：`wechat_search`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 2

## `mcp_4a977a22172cf53b6141ad29`

搜视频号视频（时长/排序/时间筛选）/WeChat Channels Video Search

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"duration","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"sort","type":"any","required":false}]`

## `mcp_4ce6e9cdd75832de9c58ae6e`

微信综合搜索（搜一搜）/WeChat Universal Search

- Risk: `write`
- Parameters: `[{"name":"business_type","type":"string","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"sort","type":"any","required":false}]`
