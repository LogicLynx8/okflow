# 今日头条 MCP 工具

- 来源平台：`今日头条`
- 能力分段：`toutiao`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 7

## `mcp_072010d05c2222864b47366f`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_3264eb10cc672695d9b9640f`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_41ddcf9ef2f5d3a0902d716c`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_6ee861258898fb8f41a60931`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_b12435ca49bf6e2b93fa9011`

从头条用户主页获取用户user_id/Get user_id from user profile

- Risk: `read`
- Parameters: `[{"name":"user_profile_url","type":"string","required":true}]`

## `mcp_c7393be18972692087b885ee`

获取指定作品的评论/Get comments of specified post

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true},{"name":"offset","type":"string","required":true}]`

## `mcp_cb33f1f9c8b38b55adcc63d6`

获取指定用户的信息/Get information of specified user

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`
