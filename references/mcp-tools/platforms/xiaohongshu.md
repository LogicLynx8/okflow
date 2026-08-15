# 小红书 MCP 工具

- 来源平台：`小红书`
- 能力分段：`xiaohongshu`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 36

## `mcp_0b308fa6f23406f62699c2ee`

# [中文] ### 用途: - 获取笔记详情（图文/视频通用） ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - note_id: 笔记ID，可以从小红书的分享链接中获取 - xsec_token: 安全令牌，可以从小红书的分享链接中获取 ### 返回: - 笔记详情数据 # [English] ### Purpose: - Get note detail (image/video) ### API Priority: - Xiaohongshu API priorit

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_1c67526c4416ac1b989c12a9`

# [中文] ### 用途: - 获取商品的评论统计信息，包括评分分布、好评率、评论标签等 ### 参数: - sku_id: 商品 SKU ID（必需），如 "669ddd44e05f3700011067ed" - tab: 标签类型，默认 2 ### 返回: - 商品评论总览数据，包含评分分布、好评率、评论标签等 # [English] ### Purpose: - Get product review statistics, including rating distribution, positive rate, review tags, etc. ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"sku_id","type":"string","required":true},{"name":"tab","type":"integer","required":false}]`

## `mcp_1f40a14e8629b63938ed8f0e`

# [中文] ### 用途: - 获取博主账号维度的数据概览汇总 ### 请求体参数: - user_id: 博主用户ID ### 返回: - 数据概览，主要字段: - 成本/报价预估: estimatePictureCpm / estimateVideoCpm / pictureReadCost / videoReadCost - 内容形式占比: noteType[] - 粉丝增长: fans30GrowthRate - 合作行业: tradeNames - 活跃度: isActive - 各 *BeyondRate / *Compare 为同行对比 # [English] ### Purp

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_20db98182154d5c81f870dd0`

# [中文] ### 用途: - 根据关键词搜索小红书笔记，支持多种排序方式、笔记类型筛选和发布时间筛选 ### 参数: - keyword: 搜索关键词（必需），如 "美食推荐" - page: 页码，从 1 开始 - sort_type: 排序方式 - "general": 综合排序（默认） - "time_descending": 按时间倒序（最新） - "popularity_descending": 按点赞数排序（最多点赞） - "comment_descending": 按评论数排序（最多评论） - "collect_descending": 按收藏数排序（最多收藏） - "eng

- Risk: `read`
- Parameters: `[{"name":"ai_mode","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"note_type","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"search_session_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"time_filter","type":"string","required":false}]`

## `mcp_23f131f138d79d66d03c346b`

# [中文] ### 用途: - 获取创作者中心的热点创作灵感流，使用游标分页 ### 参数: - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值（如 "1", "2"...） ### 返回: - 热点灵感列表数据 ### 翻页说明: - 首次请求：cursor 留空 - 翻页请求：传入上一次响应中返回的 cursor 值 # [English] ### Purpose: - Get creator center hot inspiration feed, using cursor pagination ### Parameters: - cursor:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false}]`

## `mcp_245baf9ca1df9fb39e788d5e`

# [中文] ### 用途: - 获取用户公开资料 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - user_id: 用户ID ### 返回: - 用户信息 # [English] ### Purpose: - Get user public profile ### API Priority: - Xiaohongshu API priority: `App V2` > `App` > `Web V3 (this)` > `Web V2` > `Web` ### Par

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_2532c97e5df840cfb13c7274`

# [中文] ### 用途: - 获取小红书热榜（实时），即当日热门话题/关键词榜单 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 返回: - 热榜条目列表（名次/标题/链接/热度/趋势） # [English] ### Purpose: - Get the Xiaohongshu hot list (realtime), i.e. today's trending topics/keywords ### API Priority: - Xiaohongshu API prior

- Risk: `read`
- Parameters: `[]`

## `mcp_258784f656fbd14c013f4b23`

# [中文] ### 用途: - 根据商品 SKU ID 获取相关推荐商品列表，使用游标分页 ### 参数: - sku_id: 商品 SKU ID（必需），如 "669ddd44e05f3700011067ed" - cursor_score: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor_score 值 - region: 地区，默认 "US" ### 返回: - 推荐商品列表数据 ### 翻页说明: - 首次请求：cursor_score 留空 - 翻页请求：传入上一次响应中返回的 cursor_score 值 # [English] ### Purpose: -

- Risk: `read`
- Parameters: `[{"name":"cursor_score","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"sku_id","type":"string","required":true}]`

## `mcp_2638bfe869019f592963c0b3`

# [中文] ### 用途: - 获取博主笔记的整体数据表现（对应博主主页「数据概览」），用于评估内容质量与稳定性 ### 请求体参数: - user_id: 博主用户ID - note_type: 笔记类型，1=图文, 2=视频, 3=图文+视频（默认全部） - date_type: 统计时间范围（约 1=近7天 / 2=近30天 / 3=近90天） - advertise_switch: 流量类型，1=全部流量（含合作），0=仅自然流量 ### 返回: - 数据表现数据，主要字段: - 笔记量: noteNumber / videoNoteNumber - 各项中位数: impMedian

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"date_type","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_2e381cf1aa73ae957f4a1e62`

# [中文] ### 用途: - 获取指定用户的详细信息 ### 参数: - user_id: 用户ID，如 "61b46d790000000010008153" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`user_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`user_id`为准。 ### 返回: - 用户详细信息，包含昵称、头像、简介、粉丝数、关注数、笔记数等 # [English] ### Purpose: - Get detailed info of a specified user ### Paramet

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_34e4c7e0cc6e07d27fc7b753`

# [中文] ### 用途: - 获取单个博主的详细资料 ### 请求体参数: - user_id: 博主用户ID，可从博主列表结果或蒲公英博主页 URL 中取得 ### 返回: - 博主详情数据，主要字段: - 博主资料: userId / name / redId(小红书号) / headPhoto / location(地区) / personalTags(标签) - 粉丝与互动: fansCount(粉丝数) / likeCollectCountInfo(获赞收藏) / businessNoteCount(商业笔记数) - 合作报价: picturePrice(图文价) / video

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_401d696460636e1adeb1d56f`

# [中文] ### 用途: - 获取指定话题下的笔记列表，支持按最热或最新排序，使用游标分页 ### 参数: - page_id: 话题页面ID（必需），如 "5c1cc866febed9000184b7c1" - 可以从单一笔记接口获取或搜索接口 - sort: 排序方式 - "trend": 最热（默认） - "time": 最新 - cursor_score: 分页游标分数，翻页时传入上一页最后一个 item 的 cursor_score - last_note_id: 上一页最后一条笔记ID，翻页时传入 - last_note_ct: 上一页最后一条笔记创建时间，翻页时传入 - se

- Risk: `read`
- Parameters: `[{"name":"cursor_score","type":"string","required":false},{"name":"first_load_time","type":"string","required":false},{"name":"last_note_ct","type":"string","required":false},{"name":"last_note_id","type":"string","required":false},{"name":"page_id","type":"string","required":true},{"name":"session_id","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_410ab0d503234f83598d2824`

# [中文] ### 用途: - 分页获取博主的笔记明细列表（对应博主主页「笔记数据」），每条含曝光/阅读/互动等指标 ### 请求体参数: - user_id: 博主用户ID - page_number: 页码，从 1 开始 - page_size: 每页数量（1-100） - note_type: 笔记类型 - 0: 全部（默认） - 1: 图文 - 2: 视频 - 4: 图文+视频 - order_type: 排序方式 - 1: 阅读最多（默认） - 2: 互动最多 - 3: 发布时间（最新） - advertise_switch: 流量类型，1=全部流量（含商业合作/广告），0=仅自然

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"order_type","type":"integer","required":false},{"name":"page_number","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_46560e571ed7f0cb82b71c05`

# [中文] ### 用途: - 获取首页频道分类列表 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 返回: - 分类列表 # [English] ### Purpose: - Get homepage category channels ### API Priority: - Xiaohongshu API priority: `App V2` > `App` > `Web V3 (this)` > `Web V2` > `Web` ### Return: - Categori

- Risk: `read`
- Parameters: `[]`

## `mcp_47bb902f3e0e035bae4478a6`

获取商品详情/Get product detail

- Risk: `read`
- Parameters: `[{"name":"pre_page","type":"string","required":false},{"name":"sku_id","type":"string","required":true},{"name":"source","type":"string","required":false}]`

## `mcp_4dcb543d92a3016d192af37e`

# [中文] ### 用途: - 获取图文笔记的完整详情数据 ### 接口优先级: - ⭐ 小红书接口推荐优先级: `App V2（本接口）` > `App` > `Web V2` > `Web` ### 参数: - note_id: 笔记ID，如 "697c0eee000000000a03c308" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`note_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`note_id`为准。 ### 返回: - 图文笔记详情数据，包含笔记内容、图片列表、作者信息、互动数据等 # [En

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_67d4a57782d0f08b539f5224`

# [中文] ### 用途: - 根据关键词搜索小红书商品，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "手机壳" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含商品列表和分页信息 ### 翻页说明: - 首次请求：只传keyword和page - 翻页请求：传入首次搜索返回的 search_id # [English] ### Purpose: - Search Xiaohongshu p

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_6d8b1da912a12a761bc804ef`

# [中文] ### 用途: - 获取搜索联想词，keyword 为空时返回热门推荐 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - keyword: 关键词 (可为空) ### 返回: - 联想词列表 # [English] ### Purpose: - Get search suggestions, returns popular recommendations when keyword is empty ### API Priority: - Xiaohongsh

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_6e82764522bea61f3a4f9b20`

# [中文] ### 用途: - 获取指定用户已发布的笔记列表，使用游标分页 ### 参数: - user_id: 用户ID，如 "61b46d790000000010008153" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`user_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`user_id`为准。 - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值 - 通常cursor取值方式为notes列表的最后一条笔记的 note_id - JSON路径示例: `$.data.da

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_6efb51860881d05e2dd4e3f6`

# [中文] ### 用途: - 获取视频笔记的完整详情数据 ### 参数: - note_id: 笔记ID，如 "697c0eee000000000a03c308" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`note_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`note_id`为准。 ### 返回: - 视频笔记详情数据，包含视频播放地址、封面图、作者信息、互动数据等 # [English] ### Purpose: - Get full detail data of a video note ### Para

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_73cdc16dca941e93af1e8a72`

# [中文] ### 用途: - 获取博主粉丝概览（粉丝量级、活跃度等汇总指标） ### 请求体参数: - user_id: 博主用户ID ### 返回: - 粉丝概览，主要字段: - fansNum(粉丝数) / fansIncreaseNum(增量) / fansGrowthRate(增长率) - 活跃粉丝: activeFansL28 / activeFansRate - 互动粉丝: engageFansL30 - 阅读粉丝: readFansIn30 - 付费粉丝: payFansUserNum30d - 各 *BeyondRate 为同行超越率 # [English] ### Pur

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_8cd730f2d089ee7d0019aeae`

# [中文] ### 用途: - 按品牌维度筛选可合作博主列表（蒲公英「找博主/选号」），分页返回候选博主的基础画像与商业指标 ### 请求体参数: - brand_user_id: 品牌方/广告主用户ID，蒲公英在该品牌下做匹配，必填 - page_num: 页码，从 1 开始 - page_size: 每页数量（1-100） - fans_number_lower / fans_number_upper: 粉丝量上下限筛选（纯数字字符串），空字符串表示不限 ### 返回: - 博主列表数据，主要字段: - kols[]: 博主列表 - total: 命中总数 - trackId - hig

- Risk: `write`
- Parameters: `[{"name":"brand_user_id","type":"string","required":true},{"name":"fans_number_lower","type":"string","required":false},{"name":"fans_number_upper","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_967cbba1210ff5d9da1d28fc`

# [中文] ### 用途: - 获取指定用户公开收藏的笔记列表，使用游标分页 ### 参数: - user_id: 用户ID，如 "5a8cf39111be10466d285d6b" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`user_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`user_id`为准。 - cursor: 分页游标，首次请求留空，翻页时传入上一页列表中最后一条笔记的 note_id ### 返回: - 用户收藏笔记列表数据，包含笔记基本信息和分页信息 ### 翻页说明: - 首次请求：curso

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_97001ba7b202227c53319752`

# [中文] ### 用途: - 获取指定笔记的评论列表，支持分页和多种排序方式 ### 参数: - note_id: 笔记ID，如 "697c0eee000000000a03c308" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`note_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`note_id`为准。 - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值 - index: 评论索引，首次请求传 0，翻页时传入上一次响应中返回的 index 值 - pageArea: 折叠

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"index","type":"integer","required":false},{"name":"note_id","type":"string","required":false},{"name":"pageArea","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"sort_strategy","type":"string","required":false}]`

## `mcp_9c86d6dfb27aeb9b2d00da0c`

# [中文] ### 用途: - 获取指定话题的详细信息，包括话题名称、浏览量、讨论数、分享信息等 ### 参数: - page_id: 话题页面ID（必需），如 "5c1cc866febed9000184b7c1" - source: 来源，默认 "normal" - note_id: 来源笔记ID，从笔记跳转到话题时传入（可选） ### 返回: - 话题详情数据，包含 page_info（名称/浏览量/讨论数）、tabs、share_info 等 # [English] ### Purpose: - Get topic detail info, including topic name,

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"page_id","type":"string","required":true},{"name":"source","type":"string","required":false}]`

## `mcp_9f50794a80a100e410634ab6`

# [中文] ### 用途: - 获取博主粉丝随时间的增长曲线 ### 请求体参数: - user_id: 博主用户ID - date_type: 统计时间范围（约 1=近7天 / 2=近30天 / 3=近90天） ### 返回: - 粉丝增长历史，主要字段: - fansNumInc: 区间净增 - fansNumIncRate: 增长率 - list[]: dateKey(日期) / num(当日粉丝数) # [English] ### Purpose: - Get blogger fans growth curve over time ### Request Body Parameter

- Risk: `write`
- Parameters: `[{"name":"date_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_a6e19dafd783bb5057e17ca3`

# [中文] ### 用途: - 根据关键词搜索小红书图片，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "壁纸" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - search_session_id: 搜索会话ID，翻页时传入首次搜索返回的值 - word_request_id: 词请求ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含图片列表和分页信息 ### 翻页说明: - 首次请求：只传keyword

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"search_session_id","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"word_request_id","type":"string","required":false}]`

## `mcp_a9b482cdb9d0cb42b0d204c8`

# [中文] ### 用途: - 根据关键词搜索小红书群聊列表，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "上海" - page_no: 页码，从 0 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "unifiedSearchGroup" - is_recommend: 是否推荐，0=否, 1=是 ### 返回: - 搜索结果数据，包含群聊列表和分页信息 ### 翻页说明: - 首次请求：search_id 留空（自动生成），page_no 传 0 - 翻页请求：传入首次搜索返回的 search_id，pag

- Risk: `read`
- Parameters: `[{"name":"is_recommend","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"page_no","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_b718727e3e1371441f786980`

# [中文] ### 用途: - 获取博主核心数据，返回逐日趋势与区间汇总，用于绘制博主表现趋势图 ### 请求体参数: - user_id: 博主用户ID - note_type: 笔记类型，1=图文, 2=视频, 3=图文+视频（默认全部） - date_type: 统计时间范围（约 1=近7天 / 2=近30天 / 3=近90天） - advertise_switch: 流量类型，1=全部流量（含合作），0=仅自然流量 ### 返回: - 核心数据，主要字段: - dailyData[]: 逐日趋势（曝光/阅读/互动/CPM/CPE 等） - sumData: 区间汇总 # [Engli

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"date_type","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_c8878eb7ec63cb7edf77176f`

# [中文] ### 用途: - 根据关键词搜索小红书用户，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "美食博主" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含用户列表和分页信息 ### 翻页说明: - 首次请求：只传keyword和page - 翻页请求：传入首次搜索返回的 search_id # [English] ### Purpose: - Search Xiaohongshu

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_c8f5e11c5e930dc0e79bcee3`

# [中文] ### 用途: - 获取博主粉丝画像（性别、年龄、地域、兴趣、设备等分布） ### 请求体参数: - user_id: 博主用户ID ### 返回: - 粉丝画像，主要字段: - ages[]: 年龄分布 - gender: 性别（male/female） - interests[]: 兴趣 - provinces[] / cities[]: 地域 - devices[]: 设备分布 # [English] ### Purpose: - Get blogger fans profile (gender, age, region, interests, devices distri

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_d5b8fc4a0d5ff658d54d84f3`

# [中文] ### 用途: - 获取首页推荐笔记列表 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - num: 返回数量 (最大 40) - cursor_score: 翻页游标 (首次留空) - category: 分类频道 ID (从 /fetch_homefeed_categories 获取) - need_filter_image: true=只看图文, false=综合推荐(含视频) ### 返回: - 推荐笔记列表 # [English] ### Purp

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"cursor_score","type":"string","required":false},{"name":"need_filter_image","type":"boolean","required":false},{"name":"num","type":"integer","required":false}]`

## `mcp_e5e1a2accdedaa2d61016832`

# [中文] ### 用途: - 获取单篇蒲公英笔记的详情数据 ### 请求体参数: - note_id: 笔记ID，如 "6a20edfa0000000021020951" ### 返回: - 笔记详情数据，主要字段: - 笔记基础: noteId / noteLink / title / content(正文) / type(类型) / createTime - 作者: userId / name / headPhoto - 媒体: imagesList[](图片url与宽高) / videoInfo(视频) - 互动数据: impNum(曝光) / readNum(阅读) / likeN

- Risk: `write`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_f0a31eaffb5be73b89f0d8f9`

# [中文] ### 用途: - 获取指定笔记某条评论下的子评论（回复）列表，使用游标分页 ### 参数: - note_id: 笔记ID，如 "699916e6000000001d0253da" - share_text: 小红书分享链接（支持APP和Web端分享链接） - 优先使用`note_id`，如果没有则使用`share_text`，两个参数二选一，如都携带则以`note_id`为准。 - comment_id: 父评论ID（必需），如 "699fb9930000000008030db6" - cursor: 分页游标，首次请求留空，翻页时从上一次响应的 `$.data.data.c

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"cursor","type":"string","required":false},{"name":"index","type":"integer","required":false},{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_f7952cfe4da3710f9c9c1708`

# [中文] ### 用途: - 获取商品的用户评论列表，支持分页、排序和筛选有图评论 ### 参数: - sku_id: 商品 SKU ID（必需），如 "669ddd44e05f3700011067ed" - page: 页码，从 0 开始 - sort_strategy_type: 排序策略 - 0: 综合排序（默认） - 1: 最新排序 - share_pics_only: 仅看有图评论，0=否, 1=是 - from_page: 来源页面，默认 "score_page" ### 返回: - 商品评论列表数据 ### 翻页说明: - page 从 0 开始递增 # [English]

- Risk: `read`
- Parameters: `[{"name":"from_page","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"share_pics_only","type":"integer","required":false},{"name":"sku_id","type":"string","required":true},{"name":"sort_strategy_type","type":"integer","required":false}]`

## `mcp_fbfad8f3f50749cdf0625ba5`

# [中文] ### 用途: - 获取创作者中心的推荐创作灵感流，使用游标分页 ### 参数: - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值（如 "r_1", "r_2"...） - tab: 标签类型，默认 0 - source: 来源，默认 "creator_center" ### 返回: - 推荐灵感列表数据 ### 翻页说明: - 首次请求：cursor 留空 - 翻页请求：传入上一次响应中返回的 cursor 值 # [English] ### Purpose: - Get creator center recommended inspi

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"tab","type":"integer","required":false}]`
