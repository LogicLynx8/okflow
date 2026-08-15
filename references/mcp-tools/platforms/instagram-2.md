# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram-2`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 13

## `mcp_e2b1285595833b9ec617d724`

获取帖子详情/Get post info

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true}]`

## `mcp_e865b1be967c3b422af87564`

# [中文] ### 用途: - Instagram综合搜索接口（支持分页） - 支持通过 next_max_id 分页获取大量搜索结果 - 返回用户、话题标签、地点等综合结果 ### 参数: - query: 搜索关键词 - next_max_id: 分页ID，首次请求不传，从上一次响应的 `data.next_max_id` 获取 - rank_token: 排序token，首次请求不传，从上一次响应的 `data.rank_token` 获取 - enable_metadata: 是否启用元数据 ### 返回: - `data.num_results`: 结果数量 - `data.use

- Risk: `read`
- Parameters: `[{"name":"enable_metadata","type":"boolean","required":false},{"name":"next_max_id","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_eb2df5cf7b8ec492453e4108`

获取帖子点赞列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"end_cursor","type":"string","required":false}]`

## `mcp_ec13d39c59d9e97e7219f957`

获取精选故事详情/Get highlight stories

- Risk: `read`
- Parameters: `[{"name":"highlight_id","type":"string","required":true}]`

## `mcp_eea0b96736fe0fd3d92435b9`

# [中文] ### 用途: - 分页获取用户发布的帖子列表，支持向前/向后翻页 ### 参数: - **username**: 用户名字符串（如 `99brasil`），**不是数字 user_id** - **first**: 向后翻页时每页数量（默认12，最大50） - **after**: 向后翻页游标，从上一次响应的 `page_info.end_cursor` 中获取 - **before**: 向前翻页游标，从上一次响应的 `page_info.start_cursor` 中获取 - **last**: 向前翻页时每页数量，配合 `before` 使用 - **count**:

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_eee36995fa19f0afadb45c30`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_f2dbfd30671a25e6dbf9ff00`

根据用户ID获取用户数据/Get user data by user ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_f2fc3edaed6e6364cd5dfe22`

获取城市地点列表/Get locations by city

- Risk: `read`
- Parameters: `[{"name":"city_id","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_f2fee2836e9c6ae66049b523`

获取音乐帖子/Get music posts

- Risk: `read`
- Parameters: `[{"name":"audio_canonical_id","type":"string","required":true}]`

## `mcp_f32c8935cea90591c13c9c47`

获取帖子详情/Get post info (media_id or URL)

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"any","required":false},{"name":"url","type":"any","required":false}]`

## `mcp_f411aa245636db45da9d618b`

# [中文] ### 用途: - 获取Instagram地点的详细信息 - 包含地点名称、地址、坐标、附近地点等 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - show_nearby: 是否显示附近地点（默认true） ### 返回: - `data.native_location_data`: 地点基本信息 - `name`: 地点名称 - `address`: 地址 - `city`: 城市 - `lat`: 纬度 - `lng`: 经度 - `website`: 网站 - `phone`: 电话

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true},{"name":"show_nearby","type":"boolean","required":false}]`

## `mcp_f4d2045bebacacb04d29d303`

获取用户帖子列表V2/Get user posts list V2

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_f5d9132217832b711b4a7fa3`

获取音频下的Reels列表/Get music (audio) posts

- Risk: `read`
- Parameters: `[{"name":"audio_cluster_id","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`
