# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram-2`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 13

## `mcp_e0f044313f8a74b361e32402`

获取评论回复/Get comment replies

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"comment_id","type":"string","required":true}]`

## `mcp_e8fdc25bc9e31fc687ff6654`

# [中文] ### 用途: - 从完整的Instagram帖子URL中提取短码 - 支持 /p/、/reel/、/reels/、/tv/ 格式的URL # [English] ### Purpose: - Extract shortcode from full Instagram post URL - Supports /p/, /reel/, /reels/, /tv/ URL formats

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_eb4288d4635f08e549c471c4`

# [中文] ### 用途: - 分页获取用户发布的帖子列表，支持向前/向后翻页 ### 参数: - **username**: 用户名字符串（如 `99brasil`），**不是数字 user_id** - **first**: 向后翻页时每页数量（默认12，最大50） - **after**: 向后翻页游标，从上一次响应的 `page_info.end_cursor` 中获取 - **before**: 向前翻页游标，从上一次响应的 `page_info.start_cursor` 中获取 - **last**: 向前翻页时每页数量，配合 `before` 使用 - **count**: 

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_eeb502961ea514f47acfc12f`

获取用户故事/Get user stories

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_efed91874905275191cbf606`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据，返回更详细的信息 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `pk/id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `follower_count`: 粉丝数 - `following_count`: 关注数 - `media_count`: 媒体数量 - `profile_pic_url`: 头像U

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_f1fc8905fcad504b51aabbd7`

根据坐标搜索地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_f37d1134a87524aaa36d3f1e`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_f3ed7152d11f2d6f5ccc889f`

获取用户账户简介/Get user about info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_f6379fcb68d10ac8fca29aa1`

媒体ID转短码/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_f77ef3276430600d9704c1da`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"sort_by","type":"string","required":false}]`

## `mcp_fb4d568f1488ff23ec5f3592`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_fb723bbc7dd8f1ac4304e207`

获取用户粉丝/Get user followers

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_fe471476f40318e80e621143`

通过URL获取帖子详情 V2/Get post by URL V2

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`
