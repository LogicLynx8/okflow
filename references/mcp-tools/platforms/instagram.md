# Instagram MCP 工具

- 来源平台：`Instagram`
- 能力分段：`instagram`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_00a569ec5b8ffd4d9429c1af`

# [中文] ### 用途: - 获取Instagram用户的Stories（快拍）列表 - 即点击用户头像后展示的24小时内发布的快拍内容 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.reels_media`: Stories列表（按用户分组） - `id`: 用户ID - `user`: 用户信息 - `username`: 用户名 - `full_name`: 全名 - `profile_pic_url`: 头像URL - `items`: Stories条目列表 - `id`: Story ID - `pk`: Story

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_05e2548fa4a5b644c782d068`

获取用户关注/Get user following

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_08b3e785154bbbad1f395d16`

# [中文] ### 用途: - 获取Instagram用户的精选Highlights列表 - 返回用户创建的所有精选集合 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 每页精选数量（默认10，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 ### 返回: - `data.edg

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_0b95015512fbf96c1eb9731d`

获取用户精选/Get user highlights

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_0bc44629e8ad3a104ca08f56`

# [中文] ### 用途: - 获取Instagram地点相关的帖子列表 - 支持按热门或最新排序 - 地点ID可从搜索接口（search_places）或帖子详情中获取 ### 参数: - location_id: 地点ID（数字） - tab: 帖子排序方式 - `ranked`: 热门帖子（默认） - `recent`: 最新帖子 - first: 翻页时每页数量（默认12，最大50） - after: 翻页游标，从上一次响应的 `page_info.end_cursor` 获取 - page_size_override: 每页帖子数量（默认12） ### 返回: - `data.se

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"location_id","type":"string","required":true},{"name":"page_size_override","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_116053f75fc552026f0e6803`

获取帖子详情(code)/Get post info by shortcode

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_132866714a235c80f291a2f6`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_19e23a3e5dcd90910decb82e`

搜索音乐/Search music

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_19fff8aec1228583f02a7c57`

获取用户粉丝/Get user followers

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_1c56275905c2f55250533347`

获取帖子点赞用户列表/Get post likes

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true}]`

## `mcp_2281587168be5e9bd5519936`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_24cb7ec9b0672435a84ca6bb`

获取话题帖子/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"feed_type","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_270ae36612d0809ee19aae6a`

# [中文] ### 用途: - 批量翻译Instagram评论 - 支持同时翻译多条评论，效率更高 - 评论ID可从 get_post_comments 接口获取 ### 参数: - comment_ids: 评论ID列表，多个ID用逗号分隔，**最多10条** - 例如: `18099342953509681` （单个） - 例如: `18099342953509681,18099342953509682,18099342953509683` （多个） ### 注意: - 单次请求最多支持10条评论ID，超过会返回错误 ### 返回: - `data.comment_translation

- Risk: `read`
- Parameters: `[{"name":"comment_ids","type":"string","required":true}]`

## `mcp_271f4038e273f3710d4eb780`

# [中文] ### 用途: - 获取Instagram用户的关注列表 - 返回用户关注的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 关注用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是否

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_2c323000a9ad1b161ecde404`

获取用户帖子列表/Get user posts list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_2cf74706bbc69fe77039d909`

获取用户帖子/Get user posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_2f612bf3fdaf921322030c66`

翻译评论/帖子文本/Translate comment or caption

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true}]`

## `mcp_2fe5b5aad68252bf7844ab4b`

获取评论回复/Get comment replies

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"comment_id","type":"string","required":true}]`

## `mcp_35fbae2e10ef612232561b8f`

获取用户被标记的帖子/Get user tagged posts

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_38465e7ac7a96ef5e9d65a67`

获取地点附近内容/Get nearby location content

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_398e3a90aaed4009b29cacd4`

获取国家城市列表/Get cities by country

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_39fbb1ae81745bc881094887`

获取用户转发列表/Get user reposts list

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_3b64153b211d23a7c694ddb2`

搜索地点/Search locations

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_4cb162a2b4ab165472f5cc6a`

获取相似用户/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_5211a47816c15a8bf160fbb5`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_522a46a69e165893b23e00e6`

# [中文] ### 用途: - 获取Instagram探索/发现页的推荐帖子 - 返回个性化推荐的帖子列表 - 支持分页获取更多推荐内容 ### 参数: - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.sectional_items`: 推荐内容分区列表 - `layout_content.medias`: 媒体列表 - `media.id`: 帖子ID - `media.code`: 帖子短代码 - `media.media_type`: 媒体类型（1=图片, 2=视频, 8=合集） - `media.

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false}]`

## `mcp_5321a9fd7e658c4a5fd1a09c`

通过URL获取帖子详情 V2/Get post by URL V2

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`

## `mcp_5e4a121dd8551acb2ff8a1f2`

媒体ID转短码/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_60b99da82f00f1fe3adbfa12`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 与 get_user_id_by_username 互为逆操作（ID → 用户信息） ### 参数: - user_id: Instagram用户ID（数字字符串） ### 返回: - `data.username`: 用户名 - `data.full_name`: 全名 - `data.pk` / `data.id`: 用户ID - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `data.follower_count`: 粉丝数 - `dat

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_6192584b0d52a9bf27fc958a`

获取地点信息/Get location info

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_655be32fd53ca5f2dc67ab29`

搜索用户/话题/地点/Search users/hashtags/places

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true},{"name":"select","type":"string","required":false}]`

## `mcp_6b2f8ac6a41f04315f9d1d6b`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_6e7ddc7fe5a65cfb68eeb859`

获取相似账号推荐/Get similar users

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_701dc99ebbfa80ab179512a6`

# [中文] ### 用途: - 获取Instagram Highlight精选的详细故事/帖子内容 - 返回精选集合中的所有Stories媒体 ### 参数: - highlight_id: 精选ID，格式为 `highlight:xxx`（从 get_user_highlights 接口获取） - reel_ids: 精选ID列表，逗号分隔（可选，如不提供则仅查询highlight_id指定的精选） - 例如: `highlight:18064916456320419,highlight:18155682898389765` - 可同时查询多个精选的内容 - first: 每页数量（默认3

- Risk: `read`
- Parameters: `[{"name":"first","type":"integer","required":false},{"name":"highlight_id","type":"string","required":true},{"name":"last","type":"integer","required":false},{"name":"reel_ids","type":"string","required":false}]`

## `mcp_73cc8019987a06ec1b611667`

# [中文] ### 用途: - 获取用户的"关于此账户"（About This Account）信息 - 包含账户创建日期、所在地区、认证状态等详细信息 ### 参数: - user_id: Instagram用户ID（数字格式） ### 返回: - `status`: 请求状态 - `user_id`: 用户ID - `username`: 用户名 - `profile_pic_url`: 头像URL - `is_verified`: 是否认证 - `date_joined`: 账户创建日期（如："June 2012"） - `account_based_in`: 账户所在地区（如："Un

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_73dd60f680faf8f86ce347a0`

获取用户账户简介/Get user about info

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_775632c2ed0341191d739407`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"code_or_url","type":"string","required":true},{"name":"sort_by","type":"string","required":false}]`

## `mcp_778dde948f501616af33688e`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_79a8fae237b4d019061e4d3c`

按坐标搜索附近地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_7ccd3f574611fd1549a09b97`

Media ID转Shortcode/Convert media ID to shortcode

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true}]`

## `mcp_80488a3593c8df3b1a78f273`

获取用户Reels/Get user reels

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_821e9a234feb53c057680caf`

Shortcode转Media ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_878ce248d90e3aa74d475ec1`

# [中文] ### 用途: - 获取Instagram帖子的评论列表 - 支持分页获取所有评论 - 支持按热门或最新排序 ### 参数: - code: 帖子短代码（如 DUajw4YkorV，必填） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_id` 获取 - sort_order: 排序方式 - `popular`: 按热门排序（默认） - `newest`: 按最新排序 ### 返回: - `data.comments`: 评论列表 - `user`: 评论者信息 - `text`: 评论文本 - `created_at`: 评论时间戳 -

- Risk: `read`
- Parameters: `[{"name":"code","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_88de48416999f870fa1f1538`

获取分类下的帖子/Get posts by section

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"section_id","type":"string","required":true}]`

## `mcp_8cc05abc60f0cbf69f0cff65`

# [中文] ### 用途: - 获取帖子评论列表，支持分页 - 返回的评论数据更完整，包含子评论预览和更多元数据 ### 参数: - media_id: 帖子ID（媒体ID） - sort_order: 排序方式，popular(热门)/recent(最新) - min_id: 分页游标，首次请求不传，从上一次响应的`next_min_id`字段获取 ### 返回: - `comment_count`: 评论总数 - `comments`: 评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论

- Risk: `read`
- Parameters: `[{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false},{"name":"sort_order","type":"string","required":false}]`

## `mcp_8d0f13981ef555a939b1fd72`

获取用户Reels列表/Get user Reels list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_91dd7fd174c4bcd0fa37576e`

短码转媒体ID/Convert shortcode to media ID

- Risk: `read`
- Parameters: `[{"name":"shortcode","type":"string","required":true}]`

## `mcp_941335af5600394487ed9ddd`

获取地点帖子/Get location posts

- Risk: `read`
- Parameters: `[{"name":"location_id","type":"string","required":true}]`

## `mcp_950868af74aaa378b5e0ccfb`

搜索用户/Search users

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_9773935c2ebe5e0da7e148a9`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_98d4140c7f0338c827afa52c`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_9fac8def9093a22d8be42812`

根据用户ID获取用户数据V2/Get user data by user ID V2

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_a08552190e466c91a820c3b7`

搜索话题标签/Search hashtags

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_a24f3a1287c383a35a74a84d`

获取相关用户推荐/Get related profiles

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_a3acd8fbdfb9d6556fc167f0`

通过ID获取帖子详情/Get post by ID

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_a3f13719050fbe894251c969`

# [中文] ### 用途: - 通过Instagram用户ID获取用户信息 - 可用于将用户ID转换为用户名及获取完整用户资料 ### 参数: - user_id: 用户ID ### 返回: - `pk`/`pk_id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `is_private`: 是否私密账户 - `is_verified`: 是否已认证 - `profile_pic_url`: 头像URL - `biography`: 个人简介 - `follower_count`: 粉丝数 - `following_count`: 关注数 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_a56d20089fa7a545dacf251d`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据，返回更详细的信息 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `pk/id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `follower_count`: 粉丝数 - `following_count`: 关注数 - `media_count`: 媒体数量 - `profile_pic_url`: 头像U

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_a867da648c630f475b16f741`

获取话题标签下的帖子/Get posts by hashtag

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"hashtag","type":"string","required":true}]`

## `mcp_aaf1f4658af5ec508f80e8f1`

获取用户故事/Get user stories

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_aba0fe97d4671d5a68149fb8`

综合搜索/General search

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_ad71a829950e82d4c448b538`

获取地点下的帖子/Get posts by location

- Risk: `read`
- Parameters: `[{"name":"end_cursor","type":"string","required":false},{"name":"location_id","type":"string","required":true},{"name":"tab","type":"string","required":false}]`

## `mcp_aeb9cfef4920f8e0328c38ae`

通过用户名获取用户ID/Get user ID by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_afe20dc9dd7dc0158f3f50f8`

# [中文] ### 用途: - 获取Instagram用户被标记（tagged）的帖子列表 - 即其他用户在帖子中标记了该用户的内容 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - count: 首

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_b8e138cb58444ddac826f8ed`

获取帖子oEmbed内嵌信息/Get post oEmbed info

- Risk: `read`
- Parameters: `[{"name":"hidecaption","type":"boolean","required":false},{"name":"maxwidth","type":"integer","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_bdbbcbbab5a57e4b769e4117`

# [中文] ### 用途: - 获取Instagram用户的完整个人资料信息 - 包含用户基本信息、统计数据、最近帖子等 ### 参数: - username: Instagram用户名（必填） ### 返回: - `data.user.id`: 用户ID - `data.user.username`: 用户名 - `data.user.full_name`: 全名 - `data.user.biography`: 个人简介 - `data.user.external_url`: 外部链接 - `data.user.profile_pic_url`: 头像URL（标准） - `data.us

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_bfbfe39ff18ddc211f6b4dfb`

搜索Reels/Search reels

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_c3272fa985707ef67bb1a65d`

获取使用特定音乐的帖子/Get posts using specific music

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"music_id","type":"string","required":false},{"name":"music_url","type":"string","required":false}]`

## `mcp_c61a25d5056953955be24bfe`

获取用户曾用用户名/Get user former usernames

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_c6d93876b3759ef76fdd19ba`

# [中文] ### 用途: - 获取Instagram用户的粉丝列表 - 返回关注该用户的所有账号信息 - 支持分页获取 ### 参数: - username: Instagram用户名（必填） - count: 每次获取数量（默认12，最大100） - max_id: 分页游标，首次请求不传，从上一次响应的 `data.next_max_id` 获取 ### 返回: - `data.users`: 粉丝用户列表 - `pk`: 用户ID - `username`: 用户名 - `full_name`: 全名 - `is_private`: 是否私密账号 - `is_verified`: 是

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_caaa5b172c7175de14b084da`

根据坐标搜索地点/Search locations by coordinates

- Risk: `read`
- Parameters: `[{"name":"latitude","type":"number","required":true},{"name":"longitude","type":"number","required":true}]`

## `mcp_cbcd051164b0ca53dc3900a4`

获取话题标签帖子列表/Get hashtag posts

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"tag","type":"string","required":true}]`

## `mcp_ce89b3165c633426c53cbb20`

# [中文] ### 用途: - 根据Instagram用户名获取用户数据 ### 参数: - username: Instagram用户名 ### 返回: - 用户信息对象，包含以下主要字段： - `id`: 用户ID - `username`: 用户名 - `full_name`: 用户全名 - `biography`: 个人简介 - `bio_links`: 个人简介链接列表 - `edge_followed_by`: 粉丝数 {count: xxx} - `edge_follow`: 关注数 {count: xxx} - `profile_pic_url`: 头像URL - `prof

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_d4268fb42e6ab08603cea188`

# [中文] ### 用途: - 获取Instagram用户的短详情/悬浮卡片信息 - 返回用户核心信息，响应速度比 get_user_profile 更快 - 适用于批量获取用户摘要信息的场景 ### 参数: - user_id: Instagram用户ID（数字，必填） - username: Instagram用户名（必填） ### 返回: - `data.id`: 用户ID - `data.username`: 用户名 - `data.full_name`: 全名 - `data.biography`: 个人简介 - `data.profile_pic_url`: 头像URL - `d

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true},{"name":"username","type":"string","required":true}]`

## `mcp_d5f38f1866525084683bb27d`

获取探索页面分类/Get explore page sections

- Risk: `read`
- Parameters: `[]`

## `mcp_d83c102c6782ef51aa27b229`

# [中文] ### 用途: - 获取Instagram Reels推荐列表 - 支持分页获取更多Reels ### 参数: - first: 每次获取的Reels数量（默认12，最大50） - after: 分页游标，首次请求不传，从上一次响应的 `data.page_info.end_cursor` 获取 ### 返回: - `data.edges`: Reels列表 - `node.media`: Reels媒体信息 - `code`: 帖子短代码 - `pk`: 帖子ID - `like_count`: 点赞数 - `comment_count`: 评论数 - `play_count`

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"first","type":"integer","required":false}]`

## `mcp_de3e7ae8a81e775672b0b47f`

通过URL获取帖子详情/Get post by URL

- Risk: `read`
- Parameters: `[{"name":"post_url","type":"string","required":true}]`

## `mcp_deb4fbf9ad387b1e2802de5e`

# [中文] ### 用途: - 获取Instagram评论的子评论（回复）列表 - 支持分页获取所有回复 - 父评论的 comment_id 可从 get_post_comments 接口的评论列表中获取 ### 参数: - media_id: 帖子的媒体ID（数字ID，必填），可通过 `/shortcode_to_media_id` 接口从短码转换获得 - comment_id: 父评论ID（必填，从 get_post_comments 返回的评论中获取 `pk` 字段） - min_id: 分页游标，首次请求不传，从上一次响应的 `data.next_min_child_cursor`

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`

## `mcp_dfbfd2047ef1d93e0641bd29`

# [中文] ### 用途: - 获取Instagram用户的Reels列表 - 支持分页获取用户发布的所有Reels ### 参数: - username: Instagram用户名（必填） - first: 向后翻页时每页数量（默认12，最大50） - after: 向后翻页游标，从上一次响应的 `data.page_info.end_cursor` 获取 - before: 向前翻页游标，从上一次响应的 `data.page_info.start_cursor` 获取 - last: 向前翻页时每页数量，配合 `before` 使用 - page_size: 每页视频数量（默认12） #

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"before","type":"string","required":false},{"name":"first","type":"integer","required":false},{"name":"last","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_dfc6fa4233de8ba7bed3d9f6`

# [中文] ### 用途: - 从完整的Instagram帖子URL中提取短码 - 支持 /p/、/reel/、/reels/、/tv/ 格式的URL # [English] ### Purpose: - Extract shortcode from full Instagram post URL - Supports /p/, /reel/, /reels/, /tv/ URL formats

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_e01faf4657b2538462960fc0`

# [中文] ### 用途: - 获取指定评论下的子评论（二级评论/回复），支持分页 ### 参数: - media_id: 帖子ID（媒体ID） - comment_id: 父评论ID（从fetch_post_comments_v2返回的评论pk字段获取） - min_id: 分页游标，首次请求不传，从上一次响应的`page_info.next_min_id`字段获取 ### 返回: - `child_comments`: 子评论列表，每个评论包含： - `pk`: 评论ID - `text`: 评论内容 - `created_at`/`created_at_utc`: 评论时间戳 - `u

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"min_id","type":"string","required":false}]`
