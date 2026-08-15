# 今日头条 MCP 工具

- 来源平台：`今日头条`
- 能力分段：`toutiao`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 7

## `mcp_3aca7c737d729abd73f2a498`

获取指定用户的信息/Get information of specified user

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_507bec1c659cb519fd952dca`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_93248cec3562298d09ef83f2`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_a2345062a9b842886229c754`

获取指定作品的评论/Get comments of specified post

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true},{"name":"offset","type":"string","required":true}]`

## `mcp_b34fa6452c0e6af50cfe0165`

从头条用户主页获取用户user_id/Get user_id from user profile

- Risk: `read`
- Parameters: `[{"name":"user_profile_url","type":"string","required":true}]`

## `mcp_e25840a4d31f452df693ba43`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_f0231e0af5dfdc639a566c27`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`
