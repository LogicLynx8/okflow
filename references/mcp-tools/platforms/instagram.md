# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_00e97694892a3780ff6c4b1d`

# [中文] ### 用途: - 获取Instagram帖子的评论列表 - 支持分页获取所有评论 - 支持按热门或最新排序 ### 参数: - code: 帖子短代码（如 DUajw4YkorV，必填） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_id` 获取 - sort_order: 排序方式 - `popular`: 按热门排序（默认） - `newest`: 按最新排序 ### 返回: - `data.comments`: 评论列表 - `user`: 评论者信息 - `text`: 评论文本 - `created_at`: 评论时间戳 -

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_0132dceceb3ad77dec6b3026`

搜索地点/Search locations

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_0526ae1ac9ae8706ce568b02`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"sort_by","type":"string","required":false}]`

## `mcp_06be96ae740b8e38380f4974`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_07df9a7c7f4aa889f69ef548`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 与 get_user_id_by_username 互为逆操作（ID → 用户信息） ### 参数: - user_id: Instagram用户ID（数字字符串） ### 返回: - `data.username`: 用户名 - `data.full_name`: 全名 - `data.pk` / `data.id`: 用户ID - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `data.follower_count`: 粉丝数 - `dat

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_0d2bc970743b02639fb5d6d4`

获取用户粉丝/Get user followers

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_0e559a45108ef33d5cda67dc`

获取精选故事详情/Get highlight stories

- Risk: `read`
- Parameters: `[{"name":"highlight_id","type":"string","required":true}]`

## `mcp_101472593037d8805c6239ca`

# [中文] ### 用途: - 分页获取用户发布的帖子列表，支持向前/向后翻页 ### 参数: - **username**: 用户名字符串（如 `99brasil`），**不是数字 user_id** - **first**: 向后翻页时每页数量（默认12，最大50） - **after**: 向后翻页游标，从上一次响应的 `page_info.end_cursor` 中获取 - **before**: 向前翻页游标，从上一次响应的 `page_info.start_cursor` 中获取 - **last**: 向前翻页时每页数量，配合 `before` 使用 - **count**:

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_111704dc9b8ee65aea061843`

获取分类下的帖子/Get posts by section

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"section_id","type":"string","required":true}]`

## `mcp_146a8ba661c90f0ade48c498`

获取相似账号推荐/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_199b908d0adc774c34683b58`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据，返回更详细的信息 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `pk/id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `follower_count`: 粉丝数 - `following_count`: 关注数 - `media_count`: 媒体数量 - `profile_pic_url`: 头像U

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_1aaf1163c08536811925c5f3`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_1bd36d01e447a657b98e580b`

# [中文] ### 用途: - 获取Instagram地点相关的帖子列表 - 支持按热门或最新排序 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - tab: 帖子排序方式 - `ranked`: 热门帖子（默认） - `recent`: 最新帖子 - first: 翻页时每页数量（默认12，最大50） - after: 翻页游标，从上一次响应的 `page_info.end_cursor` 获取 - page_size_override: 每页帖子数量（默认12） ### 返回: - `data.se

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"location_id","type":"string","required":true},{"name":"page_size_override","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_1e8805b363a03c88ff377b66`

根据用户ID获取用户数据/Get user data by user ID

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_1fdb0d11d13a7566deddcdf1`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_24699c9ccac3887c916b64d3`

# [中文] ### 用途: - 获取Instagram用户的Stories（快拍）列表 - 即点击用户头像后展示的24小时内发布的快拍内容 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.reels_media`: Stories列表（按用户分组） - `id`: 用户ID - `user`: 用户信息 - `username`: 用户名 - `full_name`: 全名 - `profile_pic_url`: 头像URL - `items`: Stories条目列表 - `id`: Story ID - `pk`: Story

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_25b377b4e203ecc20202e7eb`

获取音乐帖子/Get music posts

- Risk: `read`
- Parameters: `[{"name":"audio_canonical_id","type":"string","required":true}]`

## `mcp_27dc6082c13b70cd0f131716`

通过用户名获取用户ID/Get user ID by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_2d74fe92b6d2baa71af16f1e`

搜索音乐/Search music

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_2f3909dda85569e126c34091`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_301dc2fc64bdd75ffd1ec336`

获取帖子点赞列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"end_cursor","type":"string","required":false}]`

## `mcp_35a38f2c531d9b4a1711f0c2`

# [中文] ### 用途: - 获取Instagram Reels推荐列表 - 支持分页获取更多Reels ### 参数: - first: 每次获取的Reels数量（默认12，最大50） - after: 分页游标，首次请求不传，从上一次响应的 `data.page_info.end_cursor` 获取 ### 返回: - `data.edges`: Reels列表 - `node.media`: Reels媒体信息 - `code`: 帖子短代码 - `pk`: 帖子ID - `like_count`: 点赞数 - `comment_count`: 评论数 - `play_count`

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false}]`

## `mcp_3813749dda18fcbc62c43b15`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_391571efde9661a2755762be`

通过ID获取帖子详情/Get post by ID

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_39b3b926c5716f5359d6991a`

获取话题标签帖子列表/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"tag","type":"string","required":true}]`

## `mcp_3b17b7e66ab396c10de87e87`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_40c317f972067c7056574b1f`

获取用户Reels/Get user reels

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_45d83101a0128303c184416e`

获取用户精选/Get user highlights

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_46303a4f63fd8a8b3e3b54dd`

翻译评论/帖子文本/Translate comment or caption

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true}]`

## `mcp_46733d086cdcab4aada824b5`

根据用户ID获取用户数据V2/Get user data by user ID V2

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_46a9a08736d0e25be51c60d6`

搜索Reels/Search reels

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_4f5b48aff2463bbc4c7313a4`

获取用户帖子列表/Get user posts list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_524517ddeba424d08301b1bb`

# [中文] ### 用途: - 获取帖子评论列表，支持分页 - 返回的评论数据更完整，包含子评论预览和更多元数据 ### 参数: - media_id: 帖子ID（媒体ID） - sort_order: 排序方式，popular(热门)/recent(最新) - min_id: 分页游标，首次请求不传，从上一次响应的`next_min_id`字段获取 ### 返回: - `comment_count`: 评论总数 - `comments`: 评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_556ef5dc4165f500760fb4cf`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_56a5a081dc347517af573bc5`

获取用户Reels列表/Get user Reels list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_56a6186773ce38a395d4d473`

# [中文] ### 用途: - Instagram综合搜索接口（支持分页） - 支持通过 next_max_id 分页获取大量搜索结果 - 返回用户、话题标签、地点等综合结果 ### 参数: - query: 搜索关键词 - next_max_id: 分页ID，首次请求不传，从上一次响应的 `data.next_max_id` 获取 - rank_token: 排序token，首次请求不传，从上一次响应的 `data.rank_token` 获取 - enable_metadata: 是否启用元数据 ### 返回: - `data.num_results`: 结果数量 - `data.use

- Risk: `read`
- Parameters: `[{"name":"enable_metadata","type":"boolean","required":false},{"name":"next_max_id","type":"string","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_58cacae92df93f9c56539502`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_623cbe74f3a1422720fbfddc`

综合搜索/General search

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_66d07ea74dfbcfb1af994c9f`

# [中文] ### 用途: - 获取用户的"关于此账户"（About This Account）信息 - 包含账户创建日期、所在地区、认证状态等详细信息 ### 参数: - user_id: Instagram用户ID（数字格式） ### 返回: - `status`: 请求状态 - `user_id`: 用户ID - `username`: 用户名 - `profile_pic_url`: 头像URL - `is_verified`: 是否认证 - `date_joined`: 账户创建日期（如："June 2012"） - `account_based_in`: 账户所在地区（如："Un

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_67fe7ec6348ecb270ef28a37`

获取相关用户推荐/Get related profiles

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_712c02f2a30cb8266504df65`

# [中文] ### 用途: - 获取Instagram用户的精选Highlights列表 - 返回用户创建的所有精选集合 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 每页精选数量（默认10，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 ### 返回: - `data.edg

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_779b19c814886fdf8eb2825b`

通过URL获取帖子详情 V2/Get post by URL V2

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`

## `mcp_78ab5eb248eb8f20b3785cf7`

获取相似用户/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_7a38343b94d6b397a14212a2`

获取用户转发列表/Get user reposts list

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_7b7e98a315e117127a5bc1da`

获取评论回复/Get comment replies

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"comment_id","type":"string","required":true}]`

## `mcp_7bf50531b39ad82262818314`

搜索用户/话题/地点/Search users/hashtags/places

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true},{"name":"select","type":"string","required":false}]`

## `mcp_7d00f9edf29fbbf2085e0347`

获取用户帖子列表V2/Get user posts list V2

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_7e245ca54f47fecebb0139ff`

获取话题标签下的帖子/Get posts by hashtag

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"hashtag","type":"string","required":true}]`

## `mcp_7f06d11964dc74ba3bfd0aa0`

获取帖子点赞用户列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_800850de594adeb48904baaa`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"end_cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_80281f34d4c76262c0185621`

获取城市地点列表/Get locations by city

- Risk: `read`
- Parameters: `[{"name":"city_id","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_84e02dc68569616daf89921a`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_856436ec5b58708ef017249b`

# [中文] ### 用途: - 获取Instagram用户的关注列表 - 返回用户关注的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 关注用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是否

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_8571c7ebb645b66cb5caf0aa`

获取话题帖子/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"feed_type","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_85bdbbbca7b6992db89717cb`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_861e50e8c0b50d5d19b3f7c3`

根据坐标搜索地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_864b784a2edce56f5713a0f1`

通过URL获取帖子详情/Get post by URL

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`

## `mcp_8929fc65e5788af8c5e733f4`

按坐标搜索附近地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_898e67dc2586366e36abaf73`

获取用户关注/Get user following

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_95b0e825e9b17e2fedc269c7`

获取帖子详情/Get post info

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true}]`

## `mcp_96a4a9771bb5dc5a0b94101b`

短码转媒体ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_9ab097f4889b700e5b8e57c5`

# [中文] ### 用途: - 获取Instagram探索/发现页的推荐帖子 - 返回个性化推荐的帖子列表 - 支持分页获取更多推荐内容 ### 参数: - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.sectional_items`: 推荐内容分区列表 - `layout_content.medias`: 媒体列表 - `media.id`: 帖子ID - `media.code`: 帖子短代码 - `media.media_type`: 媒体类型（1=图片, 2=视频, 8=合集） - `media.

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false}]`

## `mcp_9b95353367b50543ad78771e`

# [中文] ### 用途: - 从完整的Instagram帖子URL中提取短码 - 支持 /p/、/reel/、/reels/、/tv/ 格式的URL # [English] ### Purpose: - Extract shortcode from full Instagram post URL - Supports /p/, /reel/, /reels/, /tv/ URL formats

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_9e687db03d36de6b8c9e4e53`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_ab65a2c27452b6043ff54bd3`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_aff43d5d2d42f0c09c05c47f`

# [中文] ### 用途: - 获取Instagram Highlight精选的详细故事/帖子内容 - 返回精选集合中的所有Stories媒体 ### 参数: - highlight_id: 精选ID，格式为 `highlight:xxx`（从 get_user_highlights 接口获取） - reel_ids: 精选ID列表，逗号分隔（可选，如不提供则仅查询highlight_id指定的精选） - 例如: `highlight:18064916456320419,highlight:18155682898389765` - 可同时查询多个精选的内容 - first: 每页数量（默认3

- Risk: `read`
- Parameters: `[{"name":"first","type":"integer","required":false},{"name":"highlight_id","type":"string","required":true},{"name":"last","type":"integer","required":false},{"name":"reel_ids","type":"string","required":false}]`

## `mcp_b021f60021d128c54a35f9f9`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_b32007701ed34ae8bd8c1a88`

# [中文] ### 用途: - 获取Instagram评论的子评论（回复）列表 - 支持分页获取所有回复 - 父评论的 comment_id 可从 get_post_comments 接口的评论列表中获取 ### 参数: - media_id: 帖子的媒体ID（数字ID，必填），可通过 `/shortcode_to_media_id` 接口从短码转换获得 - comment_id: 父评论ID（必填，从 get_post_comments 返回的评论中获取 `pk` 字段） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_child_cursor`

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`

## `mcp_b8753ad409078cdac815d0a4`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_bb5d08b7f49d1c2f0e59078b`

# [中文] ### 用途: - 获取Instagram用户的短详情/悬浮卡片信息 - 返回用户核心信息，响应速度比 get_user_profile 更快 - 适用于批量获取用户摘要信息的场景 ### 参数: - user_id: Instagram用户ID（数字，必填） - username: Instagram用户名（必填） ### 返回: - `data.id`: 用户ID - `data.username`: 用户名 - `data.full_name`: 全名 - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `d

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true},{"name":"username","type":"string","required":true}]`

## `mcp_bf0df3abaa8efca2f669f580`

获取地点附近内容/Get nearby location content

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_c1beccab89076386af568567`

# [中文] ### 用途: - 获取Instagram用户的粉丝列表 - 返回关注该用户的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 粉丝用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_c2ab71cece8d2e234bd84943`

获取使用特定音乐的帖子/Get posts using specific music

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"music_id","type":"string","required":false},{"name":"music_url","type":"string","required":false}]`

## `mcp_c39cb4d8b6f01913e007edcf`

# [中文] ### 用途: - 获取Instagram用户被标记（tagged）的帖子列表 - 即其他用户在帖子中标记了该用户的内容 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - count: 首

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_c5cf18fc54dd5731c10fc074`

获取帖子详情(code)/Get post info by shortcode

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_cd29c56cc9157c50e74cc99c`

获取用户账户简介/Get user about info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_cde4515bfba7fab53369b14b`

获取地点下的帖子/Get posts by location

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"location_id","type":"string","required":true},{"name":"tab","type":"string","required":false}]`

## `mcp_ce0ddbe09037d34e13d9f6ba`

# [中文] ### 用途: - 获取指定评论下的子评论（二级评论/回复），支持分页 ### 参数: - media_id: 帖子ID（媒体ID） - comment_id: 父评论ID（从fetch_post_comments_v2返回的评论pk字段获取） - min_id: 分页游标，首次请求不传，从上一次响应的`page_info.next_min_id`字段获取 ### 返回: - `child_comments`: 子评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论时间戳 - `u

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`

## `mcp_d47c0ff2eaf6af454346681b`

# [中文] ### 用途: - 获取Instagram用户的完整个人资料信息 - 包含用户基本信息、统计数据、最近帖子等 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.user.id`: 用户ID - `data.user.username`: 用户名 - `data.user.full_name`: 全名 - `data.user.biography`: 个人简介 - `data.user.external_url`: 外部链接 - `data.user.profile_pic_url`: 头像URL（标准） - `data.us

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_d4a17d0569725bd1afdc2333`

获取帖子详情/Get post info (media_id or URL)

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"any","required":false},{"name":"url","type":"any","required":false}]`
