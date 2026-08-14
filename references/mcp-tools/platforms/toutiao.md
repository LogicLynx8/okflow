# 今日头条 MCP 工具

- 来源平台：`今日头条`
- 能力分段：`toutiao`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 7

## `mcp_1403d372895f2cf8b9f977ef`

从头条用户主页获取用户user_id/Get user_id from user profile

- Risk: `read`
- Parameters: `[{"name":"user_profile_url","type":"string","required":true}]`

## `mcp_76f1dd6afe42ce207e9663b1`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_afa2c56379070fb0f0ac1391`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true}]`

## `mcp_b6baf20e975353339cce9464`

获取指定用户的信息/Get information of specified user

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_ba79f328f548cec42525a3bf`

获取指定视频的信息/Get information of specified video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_c958644c253d49b7daa04f0d`

获取指定作品的评论/Get comments of specified post

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true},{"name":"offset","type":"string","required":true}]`

## `mcp_ec3a7489be4bc79563582de2`

获取指定文章的信息/Get information of specified article

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`
