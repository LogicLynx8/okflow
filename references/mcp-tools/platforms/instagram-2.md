# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram-2`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 13

## `mcp_d5b17c415892ec0be12a654f`

媒体ID转短码/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_d67cfcc1bba6cd9cc6925e9d`

获取用户账号名更改次数/Get username change count

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_d77c45ff6c1ecd478a90692c`

获取用户故事/Get user stories

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_dd44f5aff62d3ea91ab82c4d`

获取音频下的Reels列表/Get music (audio) posts

- Risk: `read`
- Parameters: `[{"name":"audio_cluster_id","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`

## `mcp_df35d3bf76819f9ba7ee0f54`

获取探索页面分类/Get explore page sections

- Risk: `read`
- Parameters: `[]`

## `mcp_e3576057bd905364e82b659f`

获取帖子oEmbed内嵌信息/Get post oEmbed info

- Risk: `read`
- Parameters: `[{"name":"hidecaption","type":"boolean","required":false},{"name":"maxwidth","type":"integer","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_e67fc2b7cbec2051ba9a3fd2`

获取地点帖子/Get location posts

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_ea4ff20360c16330d0865fdd`

获取用户帖子/Get user posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_f138df412f3c9d5babf3be94`

获取地点信息/Get location info

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_f20a5c6dcf0367c6a55f6680`

# [中文] ### 用途: - 获取Instagram地点的详细信息 - 包含地点名称、地址、坐标、附近地点等 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - show_nearby: 是否显示附近地点（默认true） ### 返回: - `data.native_location_data`: 地点基本信息 - `name`: 地点名称 - `address`: 地址 - `city`: 城市 - `lat`: 纬度 - `lng`: 经度 - `website`: 网站 - `phone`: 电话

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true},{"name":"show_nearby","type":"boolean","required":false}]`

## `mcp_f6835801243b98b680a1e287`

# [中文] ### 用途: - 获取Instagram用户的Reels列表 - 支持分页获取用户发布的所有Reels ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - page_size: 每页视频数量（默认12） #

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_fe43be2190b69ed37b7a8a51`

获取国家城市列表/Get cities by country

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_ffb875ea9e0e5474ccd9b58e`

# [中文] ### 用途: - 批量翻译Instagram评论 - 支持同时翻译多条评论，效率更高 - 评论ID可从 get_post_comments 接口获取 ### 参数: - comment_ids: 评论ID列表，多个ID用逗号分隔，**最多10条** - 例如: `18099342953509681` （单个） - 例如: `18099342953509681,18099342953509682,18099342953509683` （多个） ### 注意: - 单次请求最多支持10条评论ID，超过会返回错误 ### 返回: - `data.comment_translation

- Risk: `read`
- Parameters: `[{"name":"comment_ids","type":"string","required":true}]`
