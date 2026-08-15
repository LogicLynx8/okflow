# 哔哩哔哩 MCP 工具

- 来源平台：`哔哩哔哩`
- 能力分段：`bilibili`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 42

## `mcp_0399f768931adec2475c9480`

# [中文] ### 用途: - 获取视频实时弹幕 ### 参数: - cid: 作品cid ### 返回: - 视频实时弹幕 # [English] ### Purpose: - Get Video Danmaku ### Parameters: - cid: Video cid ### Return: - Video Danmaku # [示例/Example] cid = "1639235405"

- Risk: `read`
- Parameters: `[{"name":"cid","type":"string","required":true}]`

## `mcp_0c4aa401f6a30815f006e5dd`

# [中文] ### 用途: - 通过bv号获得视频aid号 ### 参数: - bv_id: 作品id ### 返回: - 视频aid号 # [English] ### Purpose: - Generate aid by bvid ### Parameters: - bv_id: Video id ### Return: - Video aid # [示例/Example] bv_id = "BV1M1421t7hT"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_12f0603ebeb411d7100dcb74`

# [中文] ### 用途: - 获取指定动态的详情信息（v1接口） - 适用于图文 / 文字 / 专栏类动态，返回完整 module_stat（含 favorite / coin） - 视频类动态（DYNAMIC_TYPE_AV）请改用 v2 接口 ### 参数: - dynamic_id: 动态id ### 返回: - 动态详情数据 # [English] ### Purpose: - Get detail information of specified dynamic (v1 API) - For image / text / article dynamics; returns ful

- Risk: `read`
- Parameters: `[{"name":"dynamic_id","type":"string","required":true}]`

## `mcp_138f5d00e1919e2785e1968f`

# [中文] ### 用途: - 获取UP主状态统计信息（总播放数、总获赞数） ### 参数: - uid: 用户UID ### 返回: - UP主状态统计数据 - archive.view: 总播放数 - likes: 总获赞数 # [English] ### Purpose: - Get UP stat (total video views and total likes) ### Parameters: - uid: User UID ### Return: - UP stat data - archive.view: Total video views - likes: Total l

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_15cd338787ab7b719532c1c0`

# [中文] ### 用途: - 获取视频流地址 ### 参数: - bv_id: 作品id - cid: 作品cid ### 返回: - 视频流地址 # [English] ### Purpose: - Get video playurl ### Parameters: - bv_id: Video id - cid: Video cid ### Return: - Video playurl # [示例/Example] bv_id = "BV1y7411Q7Eq" cid = "171776208"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"cid","type":"string","required":true}]`

## `mcp_1fc530e6d566c6c877ce4a92`

# [中文] ### 用途: - 获取所有直播分区列表 ### 参数: ### 返回: - 所有直播分区列表 # [English] ### Purpose: - Get a list of all live areas ### Parameters: ### Return: - list of all live areas # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_206094e65e88338e7b592e30`

# [中文] ### 用途: - 综合搜索（返回所有类型的搜索结果） ### 参数: - keyword: 搜索关键词（必填） - cursor: 翻页游标。首页留空；翻页时把上一页响应里返回的 `data.pagination.next` 原样传回。 本接口为游标翻页，不支持按页码随机跳转。 - page_size: 每页结果数量 - order: 排序方式（0=综合排序） ### 返回: - 搜索结果，包含nav（分类导航）、item（搜索结果）、pagination（分页信息）等 - 下一页游标：`$.data.data.pagination.next`，把它作为下一次请求的 `curs

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_206339f662145938e58e6eb6`

# [中文] ### 用途: - 获取综合热门视频信息 ### 参数: - pn: 页码 ### 返回: - 综合热门视频信息 # [English] ### Purpose: - Get comprehensive popular video information ### Parameters: - pn: Page number ### Return: - comprehensive popular video information # [示例/Example] pn = 1

- Risk: `read`
- Parameters: `[{"name":"pn","type":"integer","required":false}]`

## `mcp_21ecf86b7f71747d3baa4926`

# [中文] ### 用途: - 获取热门搜索信息 ### 参数: - limit: 返回数量 ### 返回: - 热门搜索信息 ### 说明: - limit默认为10，上限为50 # [English] ### Purpose: - Get hot search data ### Parameters: - limit: Return number ### Return: - Hot search data ### Note: - limit default is 10, maximum is 50 # [示例/Example] limit = 10

- Risk: `read`
- Parameters: `[{"name":"limit","type":"any","required":true}]`

## `mcp_25f63adf34565c32f9750eed`

获取单个视频播放信息/Get single video play info

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_279ea2231ac2d1243e793d43`

# [中文] ### 用途: - 分类搜索（按类型搜索） ### 参数: - keyword: 搜索关键词（必填） - search_type: 搜索类型 - video: 视频 - bangumi: 番剧 - pgc: 影视 - live: 直播 - article: 专栏 - user: 用户 - cursor: 翻页游标。首页留空；翻页时把上一页响应里返回的 `data.pagination.next` 原样传回。 本接口为游标翻页，不支持按页码随机跳转。 - page_size: 每页结果数量 - order: 排序方式 - 0: 综合排序 - 1: 最新发布 - 2: 播放量 - 3

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"search_type","type":"string","required":false}]`

## `mcp_2adf9530c531251d427ad9b7`

# [中文] ### 用途: - 提取用户ID ### 参数: - share_link: 用户分享链接 ### 返回: - 用户ID # [English] ### Purpose: - Extract user ID ### Parameters: - share_link: User share link ### Return: - User ID

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_2d1451f9587b388a10960cff`

# [中文] ### 用途: - 通过bv号获得视频分p信息 ### 参数: - bv_id: 作品id ### 返回: - 视频分p信息 # [English] ### Purpose: - Get Video Parts By bvid ### Parameters: - bv_id: Video id ### Return: - Video Parts # [示例/Example] bv_id = "BV1vf421i7hV"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_32c01cbe2c1989cb6d7f1436`

# [中文] ### 用途: - 获取指定分区正在直播的主播 ### 参数: - area_id: 直播分区id - pn: 页码 ### 返回: - 指定分区正在直播的主播 # [English] ### Purpose: - Get live streamers of specified live area ### Parameters: - area_id: Live area ID - pn: Page number ### Return: - live streamers of specified live area # [示例/Example] area_id = "9" pn =

- Risk: `read`
- Parameters: `[{"name":"area_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`

## `mcp_36d38473ae9d9a6ebd274c63`

# [中文] ### 用途: - 获取指定用户动态 ### 参数: - uid: 用户UID - offset: 开始索引 ### 返回: - 指定用户动态数据 # [English] ### Purpose: - Get dynamic information of specified user ### Parameters: - uid: User UID - offset: offset ### Return: - dynamic information of specified user # [示例/Example] uid = "178360345" offset = "953154

- Risk: `read`
- Parameters: `[{"name":"offset","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_391aaa218b268d34dba4b118`

# [中文] ### 用途: - 获取用户投稿视频列表 ### 参数: - user_id: 用户ID（必填） - post_filter: 过滤类型（archive=投稿, season=合集, contribute=贡献） - page: 页码 - ps: 每页数量 ### 返回: - 用户投稿视频列表 # [English] ### Purpose: - Get user uploaded videos ### Parameters: - user_id: User ID (required) - post_filter: Filter type (archive/season/cont

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"post_filter","type":"string","required":false},{"name":"ps","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_40c1ef6eaadf854220550822`

获取大会员清晰度视频流地址/Get VIP video playurl

- Risk: `write`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"cid","type":"string","required":true}]`

## `mcp_417a71fda8bc1e29ed16c369`

# [中文] ### 用途: - 获取单个视频详情信息V2 ### 参数: - a_id: 作品id - c_id: 作品cid ### 返回: - 视频详情信息V2 # [English] ### Purpose: - Get single video data V2 ### Parameters: - a_id: Video id - c_id: Video cid ### Return: - Video data V2 # [示例/Example] a_id = "114006081739452" c_id = "28400484458"

- Risk: `read`
- Parameters: `[{"name":"a_id","type":"string","required":true},{"name":"c_id","type":"string","required":true}]`

## `mcp_4faaba768c5f6efd16d96852`

# [中文] ### 用途: - 获取视频字幕信息 ### 参数: - a_id: 作品id - c_id: 作品cid ### 返回: - 视频字幕信息 # [English] ### Purpose: - Get video subtitle info ### Parameters: - a_id: Video id - c_id: Video cid ### Return: - Video subtitle info # [示例/Example] a_id = "114006081739452" c_id = "28400484458"

- Risk: `read`
- Parameters: `[{"name":"a_id","type":"string","required":true},{"name":"c_id","type":"string","required":true}]`

## `mcp_52ff2972a204c89c647e7f34`

# [中文] ### 用途: - 获取主页番剧推荐 ### 返回: - 番剧推荐数据 # [English] ### Purpose: - Get bangumi tab (anime recommendations) ### Return: - Bangumi tab data

- Risk: `read`
- Parameters: `[]`

## `mcp_62efb42c325c75a9a9bfd4a1`

# [中文] ### 用途: - 获取用户信息 ### 参数: - user_id: 用户ID（必填） ### 返回: - 用户信息（包含粉丝数、关注数、投稿数等） # [English] ### Purpose: - Get user info ### Parameters: - user_id: User ID (required) ### Return: - User info (including followers, following, videos count, etc.) # [示例/Example] user_id = "203680252"

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_68e60fad80050c54308b5a5e`

# [中文] ### 用途: - 获取主页影视推荐 ### 返回: - 影视推荐数据 # [English] ### Purpose: - Get cinema tab (movies/TV recommendations) ### Return: - Cinema tab data

- Risk: `read`
- Parameters: `[]`

## `mcp_7f79ac394e69a7a6f64a8b85`

# [中文] ### 用途: - 获取用户关系状态统计信息（关注数、粉丝数） ### 参数: - uid: 用户UID ### 返回: - 用户关系状态统计数据 - following: 关注数 - follower: 粉丝数 # [English] ### Purpose: - Get user relation stat (following count and follower count) ### Parameters: - uid: User UID ### Return: - User relation stat data - following: Following count

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_85ee25ab906e637808003b88`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - uid: 用户UID ### 返回: - 指定用户的个人信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - uid: User UID ### Return: - information of specified user # [示例/Example] uid = "178360345"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_861b28d50419783e56825163`

# [中文] ### 用途: - 获取指定收藏夹内视频数据 ### 参数: - folder_id: 用户UID - pn: 页码 ### 返回: - 指定收藏夹内视频数据 # [English] ### Purpose: - Gets video data from a collection folder ### Parameters: - folder_id: collection folder id - pn: Page number ### Return: - video data from collection folder # [示例/Example] folder_id = "1

- Risk: `read`
- Parameters: `[{"name":"folder_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`

## `mcp_87d7d3988d057c30bf253569`

# [中文] ### 用途: - 获取综合搜索信息 ### 参数: - keyword: 搜索关键词 - order: 排序方式 - totalrank 综合排序 - click 最多播放 - pubdate 最新发布 - dm 最多弹幕 - stow 最多收藏 - page: 页码 - page_size: 每页数量 - duration: 时长筛选 - 0 全部时长 - 1 10分钟以下 - 2 10-30分钟 - 3 30分钟-60分钟 - 4 60分钟以上 - pubtime_begin_s: 开始日期，10位时间戳，需要小于结束日期 - pubtime_end_s: 结束日期，10位

- Risk: `read`
- Parameters: `[{"name":"duration","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"pubtime_begin_s","type":"integer","required":false},{"name":"pubtime_end_s","type":"integer","required":false}]`

## `mcp_98018e872be93a1fbc56bd58`

# [中文] ### 用途: - 获取用户发布的视频数据，并可按关键词在该用户的作品内搜索。 - 与 `/fetch_user_post_videos` 的区别见下方「与V1的区别」。 ### 参数: - uid: 用户UID - pn: 页码，无上限；超出末页返回空的 `data.archives` - ps: 每页数量，取值 1~100 - keyword: 关键词，留空表示不过滤，返回该用户全部作品 - 仅支持单个词，请勿包含空格。 ### 与V1的区别: - **无分页上限**：V1 最多只能取到第 5000 个作品，本接口可一直翻到该用户最早的一条投稿。作品数超过 5000 时请使用

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"pn","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_a969ec7434ebaa6c0fa2808e`

# [中文] ### 用途: - 获取指定直播间视频流 ### 参数: - room_id: 直播间ID ### 返回: - 指定直播间视频流 # [English] ### Purpose: - Get live video data of specified room ### Parameters: - room_id: Live room ID ### Return: - live video data of specified room # [示例/Example] room_id = "1815229528"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_ac002b65df339e0d740421f8`

# [中文] ### 用途: - 获取二级评论回复 ### 参数: - root: 一级评论ID（必填） - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） - next_offset: 下一页游标 - ps: 每页数量 ### 返回: - 二级评论列表数据 # [English] ### Purpose: - Get reply detail (second level comments) ### Parameters: - root: Root comment ID (required) - av_id: AV ID (choose one of

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false},{"name":"next_offset","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"root","type":"string","required":true}]`

## `mcp_aef5a01506639fc5ab2f15cc`

# [中文] ### 用途: - 获取指定视频的评论 ### 参数: - bv_id: 作品id - pn: 页码 ### 返回: - 指定视频的评论数据 # [English] ### Purpose: - Get comments on the specified video ### Parameters: - bv_id: Video id - pn: Page number ### Return: - comments of the specified video # [示例/Example] bv_id = "BV1M1421t7hT" pn = 1

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`

## `mcp_c826896072b8751060ae46a6`

# [中文] ### 用途: - 获取用户发布的视频数据 ### 参数: - uid: 用户UID - pn: 页码，取值 1~100 - ps: 每页数量，取值 1~50 - order: 排序方式 - pubdate 最新发布 - click 最多播放 - stow 最多收藏 ### 分页上限: - 本接口最多返回该用户的前 5000 个作品（`pn` 最大 100，`ps` 最大 50）。 - `data.page.count` 可能大于 5000，超出部分本接口不返回。 - **需要获取该用户的完整作品（超过 5000 个）请改用 `/fetch_user_post_videos_v2

- Risk: `read`
- Parameters: `[{"name":"order","type":"string","required":false},{"name":"pn","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_c8b916527fc5526d1f758007`

# [中文] ### 用途: - 获取指定动态的详情信息（v2接口） - 视频类动态（DYNAMIC_TYPE_AV）请使用本接口 - module_stat 只含 comment / forward / like；如需 favorite / coin 且为图文 / 文字 / 专栏类动态请用 v1 接口 ### 参数: - dynamic_id: 动态id ### 返回: - 动态详情数据 # [English] ### Purpose: - Get detail information of specified dynamic (v2 API) - Use this endpoint for

- Risk: `read`
- Parameters: `[{"name":"dynamic_id","type":"string","required":true}]`

## `mcp_cc312536c4084fac73832052`

# [中文] ### 用途: - 获取热门推荐视频 ### 参数: - idx: 页面索引（从1开始） - last_param: 上一页最后一个视频的ID（用于分页） ### 返回: - 热门推荐视频数据 # [English] ### Purpose: - Get popular feed ### Parameters: - idx: Page index (starting from 1) - last_param: Last video ID from previous page (for pagination) ### Return: - Popular feed data # [示

- Risk: `read`
- Parameters: `[{"name":"idx","type":"integer","required":false},{"name":"last_param","type":"string","required":false}]`

## `mcp_cf564c2ba2eb742767c159d6`

# [中文] ### 用途: - 获取指定直播间信息 ### 参数: - room_id: 直播间ID ### 返回: - 指定直播间信息 # [English] ### Purpose: - Get information of specified live room ### Parameters: - room_id: Live room ID ### Return: - information of specified live room # [示例/Example] room_id = "22816111"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_d2cc368aad8e4a28977fe945`

# [中文] ### 用途: - 获取视频评论列表 ### 参数: - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） - mode: 排序模式（3=热门, 2=时间） - next_offset: 分页游标 ### 返回: - 评论列表数据 # [English] ### Purpose: - Get video comments ### Parameters: - av_id: AV ID (choose one of av_id or bv_id) - bv_id: BV ID (choose one of av_id or bv_id) -

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false},{"name":"mode","type":"integer","required":false},{"name":"next_offset","type":"integer","required":false}]`

## `mcp_d41c5741ac7c39df6f9653d2`

# [中文] ### 用途: - 获取单个视频详情信息 ### 参数: - bv_id: 作品id ### 返回: - 视频详情信息 # [English] ### Purpose: - Get single video data ### Parameters: - bv_id: Video id ### Return: - Video data # [示例/Example] bv_id = "BV1M1421t7hT"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_d603e9f0d1a702c31bba464e`

# [中文] ### 用途: - 获取用户收藏作品数据 ### 参数: - uid: 用户UID ### 返回: - 用户收藏夹信息 # [English] ### Purpose: - Get user collection folders ### Parameters: - uid: User UID ### Return: - user collection folders # [示例/Example] uid = "178360345"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_d717c4915a60304b971c9254`

# [中文] ### 用途: - 获取单个视频详情 ### 参数: - aid: 作品id ### 返回: - 视频详情 # [English] ### Purpose: - Get single video detail ### Parameters: - aid: Video id ### Return: - Video detail # [示例/Example] aid = "114902186396822"

- Risk: `read`
- Parameters: `[{"name":"aid","type":"string","required":true}]`

## `mcp_daf8509af7a393f3b2e06e80`

# [中文] ### 用途: - 获取主页推荐视频流 ### 参数: - idx: 页面索引，默认使用当前时间戳 - flush: 刷新标记（0=普通加载, 1=刷新） - pull: 是否下拉刷新 ### 返回: - 推荐视频流数据 # [English] ### Purpose: - Get home feed (recommended videos) ### Parameters: - idx: Page index, defaults to current timestamp - flush: Flush flag (0=normal load, 1=refresh) - pull:

- Risk: `read`
- Parameters: `[{"name":"flush","type":"integer","required":false},{"name":"idx","type":"integer","required":false},{"name":"pull","type":"boolean","required":false}]`

## `mcp_de2d3b195276119a19119630`

# [中文] ### 用途: - 获取单个视频详情信息（APP接口） ### 参数: - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） ### 返回: - 视频详情信息 # [English] ### Purpose: - Get single video data (APP API) ### Parameters: - av_id: AV ID (choose one of av_id or bv_id) - bv_id: BV ID (choose one of av_id or bv_id) ### Return: - Video data

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false}]`

## `mcp_e932dc379bb7b4ee909ad685`

# [中文] ### 用途: - 获取视频下指定评论的回复 ### 参数: - bv_id: 作品id - pn: 页码 - rpid: 回复id ### 返回: - 指定评论的回复数据 # [English] ### Purpose: - Get reply to the specified comment ### Parameters: - bv_id: Video id - pn: Page number - rpid: Reply id ### Return: - Reply of the specified comment # [示例/Example] bv_id = "BV1M14

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"pn","type":"integer","required":false},{"name":"rpid","type":"string","required":true}]`

## `mcp_edea236279306a40b1f8bde4`

获取单个视频详情信息V3/Get single video data V3

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`
