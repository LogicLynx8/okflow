# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_0026660e6d44f47abd0ab56e`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_018b34ee228a6bc99147facc`

# [中文] ### 用途: - 获取Instagram Reels推荐列表 - 支持分页获取更多Reels ### 参数: - first: 每次获取的Reels数量（默认12，最大50） - after: 分页游标，首次请求不传，从上一次响应的 `data.page_info.end_cursor` 获取 ### 返回: - `data.edges`: Reels列表 - `node.media`: Reels媒体信息 - `code`: 帖子短代码 - `pk`: 帖子ID - `like_count`: 点赞数 - `comment_count`: 评论数 - `play_count`

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false}]`

## `mcp_044bd1562e67f92a465e8b00`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 与 get_user_id_by_username 互为逆操作（ID → 用户信息） ### 参数: - user_id: Instagram用户ID（数字字符串） ### 返回: - `data.username`: 用户名 - `data.full_name`: 全名 - `data.pk` / `data.id`: 用户ID - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `data.follower_count`: 粉丝数 - `dat

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_07813ae398496f4dccd918d7`

# [中文] ### 用途: - 获取Instagram地点相关的帖子列表 - 支持按热门或最新排序 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - tab: 帖子排序方式 - `ranked`: 热门帖子（默认） - `recent`: 最新帖子 - first: 翻页时每页数量（默认12，最大50） - after: 翻页游标，从上一次响应的 `page_info.end_cursor` 获取 - page_size_override: 每页帖子数量（默认12） ### 返回: - `data.se

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"location_id","type":"string","required":true},{"name":"page_size_override","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_0964d2eebb6cd80c1823b188`

获取相似账号推荐/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_0ab195bf709f96992a0aa002`

# [中文] ### 用途: - 获取Instagram用户被标记（tagged）的帖子列表 - 即其他用户在帖子中标记了该用户的内容 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - count: 首

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_0b07496a2b2c23974a56e1c8`

获取用户曾用用户名/Get user former usernames

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_0bebb986ca68396df05280b7`

# [中文] ### 用途: - 获取Instagram用户的Reels列表 - 支持分页获取用户发布的所有Reels ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - page_size: 每页视频数量（默认12） #

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_0bff15af946a4960528f1eb5`

获取用户帖子/Get user posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_211e5ec7c763d8d3cb9562a9`

# [中文] ### 用途: - 批量翻译Instagram评论 - 支持同时翻译多条评论，效率更高 - 评论ID可从 get_post_comments 接口获取 ### 参数: - comment_ids: 评论ID列表，多个ID用逗号分隔，**最多10条** - 例如: `18099342953509681` （单个） - 例如: `18099342953509681,18099342953509682,18099342953509683` （多个） ### 注意: - 单次请求最多支持10条评论ID，超过会返回错误 ### 返回: - `data.comment_translation

- Risk: `read`
- Parameters: `[{"name":"comment_ids","type":"string","required":true}]`

## `mcp_22705ab46987a9a98af6c6e1`

# [中文] ### 用途: - 获取Instagram探索/发现页的推荐帖子 - 返回个性化推荐的帖子列表 - 支持分页获取更多推荐内容 ### 参数: - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.sectional_items`: 推荐内容分区列表 - `layout_content.medias`: 媒体列表 - `media.id`: 帖子ID - `media.code`: 帖子短代码 - `media.media_type`: 媒体类型（1=图片, 2=视频, 8=合集） - `media.

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false}]`

## `mcp_24bbfa78ae0e051330648f16`

获取音频下的Reels列表/Get music (audio) posts

- Risk: `read`
- Parameters: `[{"name":"audio_cluster_id","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`

## `mcp_29ec3d0c5e96ec160b3e59ed`

# [中文] ### 用途: - 获取Instagram帖子的评论列表 - 支持分页获取所有评论 - 支持按热门或最新排序 ### 参数: - code: 帖子短代码（如 DUajw4YkorV，必填） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_id` 获取 - sort_order: 排序方式 - `popular`: 按热门排序（默认） - `newest`: 按最新排序 ### 返回: - `data.comments`: 评论列表 - `user`: 评论者信息 - `text`: 评论文本 - `created_at`: 评论时间戳 -

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_2a470f967ca783d1ccb4b2f2`

# [中文] ### 用途: - 获取Instagram用户的精选Highlights列表 - 返回用户创建的所有精选集合 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 每页精选数量（默认10，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 ### 返回: - `data.edg

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_2f34ac596660f9cdf0d2dedc`

获取地点下的帖子/Get posts by location

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"location_id","type":"string","required":true},{"name":"tab","type":"string","required":false}]`

## `mcp_2f3bbd4d890518baa1cd2187`

# [中文] ### 用途: - 获取指定评论下的子评论（二级评论/回复），支持分页 ### 参数: - media_id: 帖子ID（媒体ID） - comment_id: 父评论ID（从fetch_post_comments_v2返回的评论pk字段获取） - min_id: 分页游标，首次请求不传，从上一次响应的`page_info.next_min_id`字段获取 ### 返回: - `child_comments`: 子评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论时间戳 - `u

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`

## `mcp_3615340ecdb95066b0133a64`

获取用户帖子列表V2/Get user posts list V2

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_3944aafa0e8c8ae45ac1e604`

# [中文] ### 用途: - Instagram综合搜索接口（支持分页） - 支持通过 next_max_id 分页获取大量搜索结果 - 返回用户、话题标签、地点等综合结果 ### 参数: - query: 搜索关键词 - next_max_id: 分页ID，首次请求不传，从上一次响应的 `data.next_max_id` 获取 - rank_token: 排序token，首次请求不传，从上一次响应的 `data.rank_token` 获取 - enable_metadata: 是否启用元数据 ### 返回: - `data.num_results`: 结果数量 - `data.use

- Risk: `read`
- Parameters: `[{"name":"enable_metadata","type":"boolean","required":false},{"name":"next_max_id","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_3cc082e55fbb3ccd330bc46c`

# [中文] ### 用途: - 获取Instagram Highlight精选的详细故事/帖子内容 - 返回精选集合中的所有Stories媒体 ### 参数: - highlight_id: 精选ID，格式为 `highlight:xxx`（从 get_user_highlights 接口获取） - reel_ids: 精选ID列表，逗号分隔（可选，如不提供则仅查询highlight_id指定的精选） - 例如: `highlight:18064916456320419,highlight:18155682898389765` - 可同时查询多个精选的内容 - first: 每页数量（默认3

- Risk: `read`
- Parameters: `[{"name":"first","type":"integer","required":false},{"name":"highlight_id","type":"string","required":true},{"name":"last","type":"integer","required":false},{"name":"reel_ids","type":"string","required":false}]`

## `mcp_3d9e3b98e25993260bb1de84`

搜索Reels/Search reels

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_3e78a9e3adf1a9400b39867f`

获取音乐帖子/Get music posts

- Risk: `read`
- Parameters: `[{"name":"audio_canonical_id","type":"string","required":true}]`

## `mcp_3fb8229d9c8fb2e0facebacd`

# [中文] ### 用途: - 获取Instagram用户的粉丝列表 - 返回关注该用户的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 粉丝用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_418b303229523fee55dc7879`

# [中文] ### 用途: - 获取帖子评论列表，支持分页 - 返回的评论数据更完整，包含子评论预览和更多元数据 ### 参数: - media_id: 帖子ID（媒体ID） - sort_order: 排序方式，popular(热门)/recent(最新) - min_id: 分页游标，首次请求不传，从上一次响应的`next_min_id`字段获取 ### 返回: - `comment_count`: 评论总数 - `comments`: 评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_421fd1031f88a6de43fd4011`

获取用户Reels/Get user reels

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_42ad770b6efc88df037ef85f`

根据用户ID获取用户数据/Get user data by user ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_453d42bd9d5e9d1ec778d0b0`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_499b908829124c2399774589`

获取帖子oEmbed内嵌信息/Get post oEmbed info

- Risk: `read`
- Parameters: `[{"name":"hidecaption","type":"boolean","required":false},{"name":"maxwidth","type":"integer","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_4b28df14035cbc7c2719c891`

获取城市地点列表/Get locations by city

- Risk: `read`
- Parameters: `[{"name":"city_id","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_4d66483da0e84010340788f3`

获取相关用户推荐/Get related profiles

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_4f98bfc58e02b040116b36ff`

通过用户名获取用户ID/Get user ID by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_4fff900922503f5eef0b072c`

获取帖子详情/Get post info (media_id or URL)

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"any","required":false},{"name":"url","type":"any","required":false}]`

## `mcp_538c228ee22a759d6cbbd949`

获取用户转发列表/Get user reposts list

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_5592136bf5efaa98bd06d272`

# [中文] ### 用途: - 获取Instagram用户的完整个人资料信息 - 包含用户基本信息、统计数据、最近帖子等 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.user.id`: 用户ID - `data.user.username`: 用户名 - `data.user.full_name`: 全名 - `data.user.biography`: 个人简介 - `data.user.external_url`: 外部链接 - `data.user.profile_pic_url`: 头像URL（标准） - `data.us

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_57e47278393728824e580a0e`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_5b156bc845f0df1739ef555e`

搜索地点/Search locations

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_5f97edce7e6f0906bf427977`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_69aded41310b6210431fd67f`

获取用户关注/Get user following

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_6c71c751fc1619b4a357f88b`

获取精选故事详情/Get highlight stories

- Risk: `read`
- Parameters: `[{"name":"highlight_id","type":"string","required":true}]`

## `mcp_6d7bf4f4dbab148cde23cc4b`

获取帖子点赞列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"end_cursor","type":"string","required":false}]`

## `mcp_71b71380ed51489209dd9b89`

获取用户Reels列表/Get user Reels list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_746f2d3f12c9afd853f68289`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 - 

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_74c8e85e724c59549cd21428`

# [中文] ### 用途: - 获取Instagram用户的Stories（快拍）列表 - 即点击用户头像后展示的24小时内发布的快拍内容 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.reels_media`: Stories列表（按用户分组） - `id`: 用户ID - `user`: 用户信息 - `username`: 用户名 - `full_name`: 全名 - `profile_pic_url`: 头像URL - `items`: Stories条目列表 - `id`: Story ID - `pk`: Story 

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_7c9ee49382acabe61c6a3065`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_7fbac46dbee69cc7467db544`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 - 

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_8043101e32610710ddbaa271`

# [中文] ### 用途: - 获取Instagram用户的短详情/悬浮卡片信息 - 返回用户核心信息，响应速度比 get_user_profile 更快 - 适用于批量获取用户摘要信息的场景 ### 参数: - user_id: Instagram用户ID（数字，必填） - username: Instagram用户名（必填） ### 返回: - `data.id`: 用户ID - `data.username`: 用户名 - `data.full_name`: 全名 - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `d

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true},{"name":"username","type":"string","required":true}]`

## `mcp_814692f600d0cc2fb86850e7`

获取分类下的帖子/Get posts by section

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"section_id","type":"string","required":true}]`

## `mcp_88dbd9ea6e4997e646313c5b`

获取帖子详情/Get post info

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true}]`

## `mcp_8c574ee5bb593a07d4ad1413`

获取使用特定音乐的帖子/Get posts using specific music

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"music_id","type":"string","required":false},{"name":"music_url","type":"string","required":false}]`

## `mcp_8ee4d6fe8bad7cc49af39bc9`

获取用户帖子列表/Get user posts list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_90b538495f03db7cfe66066c`

获取帖子详情(code)/Get post info by shortcode

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_91c2519cba5b24b8c2c3b2d4`

短码转媒体ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_932a0a42acc9d9a00b8fa8df`

根据用户ID获取用户数据V2/Get user data by user ID V2

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_987fe1960d83d618e0cfb08f`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_99b3a8e42e6f439d1a16b27e`

通过ID获取帖子详情/Get post by ID

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_99dbb781e39b23bc1c8c492d`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_9a6121e58c8f4f0097cc0a65`

翻译评论/帖子文本/Translate comment or caption

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true}]`

## `mcp_9c17e7a8e309238b784eca1c`

获取话题标签下的帖子/Get posts by hashtag

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"hashtag","type":"string","required":true}]`

## `mcp_9fac51f38550e6b2313d2728`

获取话题标签帖子列表/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"tag","type":"string","required":true}]`

## `mcp_a5540f92c441c15b1a5277a1`

# [中文] ### 用途: - 获取Instagram地点的详细信息 - 包含地点名称、地址、坐标、附近地点等 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - show_nearby: 是否显示附近地点（默认true） ### 返回: - `data.native_location_data`: 地点基本信息 - `name`: 地点名称 - `address`: 地址 - `city`: 城市 - `lat`: 纬度 - `lng`: 经度 - `website`: 网站 - `phone`: 电话

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true},{"name":"show_nearby","type":"boolean","required":false}]`

## `mcp_a6965db4a0d0a6cbe8855e33`

按坐标搜索附近地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_ab83aa95859814c51553a971`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_b0255d909d1bbff0e335d9d3`

获取话题帖子/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"feed_type","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_b0e7b20e55fbcc5353f22ce7`

获取地点附近内容/Get nearby location content

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_b1ba6cae75f9d9b0cb610190`

综合搜索/General search

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_b3b008d1ac0e0cc1a555e8dd`

获取地点信息/Get location info

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_b71c13d1f2118d47403e0cc0`

获取用户精选/Get user highlights

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_b974287b86474be38b1e4049`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_bfa929d40f491f22771c7bcc`

# [中文] ### 用途: - 获取用户的"关于此账户"（About This Account）信息 - 包含账户创建日期、所在地区、认证状态等详细信息 ### 参数: - user_id: Instagram用户ID（数字格式） ### 返回: - `status`: 请求状态 - `user_id`: 用户ID - `username`: 用户名 - `profile_pic_url`: 头像URL - `is_verified`: 是否认证 - `date_joined`: 账户创建日期（如："June 2012"） - `account_based_in`: 账户所在地区（如："Un

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_c44df4ac642ddc2bf007d31d`

获取国家城市列表/Get cities by country

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_c587baa689cc8376ff3798ac`

# [中文] ### 用途: - 获取Instagram用户的关注列表 - 返回用户关注的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 关注用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是否

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_c625e4b65a2d9500892eca9b`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_c978bbda533751afef68e467`

搜索音乐/Search music

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_c9f290e37bcfdab0e97cdaea`

通过URL获取帖子详情/Get post by URL

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`

## `mcp_ca69ad4131581f724c7bfbef`

搜索用户/话题/地点/Search users/hashtags/places

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true},{"name":"select","type":"string","required":false}]`

## `mcp_cf5a1698a1a25156c3381e02`

获取地点帖子/Get location posts

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_cfbcfb5035b13314f576db5e`

获取探索页面分类/Get explore page sections

- Risk: `read`
- Parameters: `[]`

## `mcp_d296570a09f47d1a1cda1448`

获取帖子点赞用户列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_d30e7731babc6076e6a8d3fc`

获取相似用户/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_d4eb8f3aa5c7d8672acf82e1`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_db632bf80b17742b00c196f4`

# [中文] ### 用途: - 获取Instagram评论的子评论（回复）列表 - 支持分页获取所有回复 - 父评论的 comment_id 可从 get_post_comments 接口的评论列表中获取 ### 参数: - media_id: 帖子的媒体ID（数字ID，必填），可通过 `/shortcode_to_media_id` 接口从短码转换获得 - comment_id: 父评论ID（必填，从 get_post_comments 返回的评论中获取 `pk` 字段） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_child_cursor` 

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`
