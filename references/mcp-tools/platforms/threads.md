# Threads MCP 工具

- 来源平台：`Threads`
- 能力分段：`threads`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 11

## `mcp_2389feb203041331ae627c9d`

获取帖子详情 V2(支持链接)/Get post detail V2(supports URL)

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_2445597790ab1fc0b938bb9f`

搜索热门内容/Search top content

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_3671cad2a67fbe61d8f7c4bb`

根据用户ID获取用户信息/Get user info by ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_6814081f2a3b3d2d0f2053dc`

获取帖子详情/Get post detail

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_8bcbb7dd9d18b6eb83906cb2`

搜索用户档案/Search profiles

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_9c322235ccb5de78cd232b3d`

搜索最新内容/Search recent content

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_a1749ef2dc424da860dadffb`

获取用户回复列表/Get user replies

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_a8456800e51198129b6ab377`

获取用户转发列表/Get user reposts

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_b3bdef6055169020df663137`

获取用户帖子列表/Get user posts

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_bc1d968f42c2e987a5216c30`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_f9559ac464774494df1bd4fc`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"post_id","type":"string","required":true}]`
