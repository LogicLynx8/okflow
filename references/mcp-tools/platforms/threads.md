# Threads MCP 工具

- 来源平台：`Threads`
- 能力分段：`threads`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 12

## `mcp_2b98ba1fa0af2cbb8c3ba4e4`

获取帖子详情 V2(支持链接)/Get post detail V2(supports URL)

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_3c2132ba0fb0bf61285cb0b4`

搜索热门内容（无分页）/Search top content (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_4e61da4de1494097300d8aa5`

搜索帖子/Search posts

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_71c06af7343f75dcaabea707`

搜索最新内容（无分页）/Search recent content (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_896d22f6e636447d6fcd7d85`

获取用户回复列表（无分页）/Get user replies (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_899e12321cf118bad3877258`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_8a57a5732a85e08798f70719`

获取帖子评论（无分页）/Get post comments (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"post_id","type":"string","required":true}]`

## `mcp_9ef4316f8d48729809e03203`

搜索用户档案/Search profiles

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_aed3e290dd1de389ee199c29`

获取用户帖子列表（无分页）/Get user posts (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_b4a138de22fb3e6c11bf4fe1`

获取帖子详情/Get post detail

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_e6cb519a4cb6767c79b4922b`

获取用户转发列表（无分页）/Get user reposts (no pagination)

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_ee7c08ffcfd5eb0d8fac5248`

根据用户ID获取用户信息/Get user info by ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`
