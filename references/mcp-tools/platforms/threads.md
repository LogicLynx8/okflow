# Threads MCP 工具

- 来源平台：`Threads`
- 能力分段：`threads`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 11

## `mcp_02bd1c39e8a40f5951f3df74`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"post_id","type":"string","required":true}]`

## `mcp_12e757ea5ae087e017b53b2e`

获取帖子详情/Get post detail

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_389354ac8f9121298a8359cb`

获取用户帖子列表/Get user posts

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_3e974bc9ea0298070141623e`

获取用户回复列表/Get user replies

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_523410656fa706ad6ccb7c1a`

获取用户转发列表/Get user reposts

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_5841eb1cba3d0804a23c519c`

搜索热门内容/Search top content

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_94e7b328ad9830794ab6f47d`

根据用户ID获取用户信息/Get user info by ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_b7aa8f58619032f82e3c4475`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_bfba2315f0a1d8f8ef85f507`

获取帖子详情 V2(支持链接)/Get post detail V2(supports URL)

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_ebb096ed7071d4de1d8ebfa2`

搜索最新内容/Search recent content

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_ee2f93505ff0c9ce62751fa5`

搜索用户档案/Search profiles

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`
