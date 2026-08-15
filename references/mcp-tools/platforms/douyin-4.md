# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-4`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 77

## `mcp_bd93f5778e4d510d5eaa9987`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_bff24a2a05c91aa43fa9d5e3`

获取创作者传播价值/Get Author Spread Info

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"range","type":"integer","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_c02366bc552949e735af73a2`

# [中文] ### 用途: - 获取热点榜分类的id与热度 - 注意：使用start_date和end_date参数需要移除snapshot_time参数才可以生效 ### 参数: - billboard_type: 榜单类型 - rise 上升热点榜 - city 城市热点榜 - total 热点总榜 - snapshot_time: 快照时间 - start_date: 快照开始时间 - end_date: 快照结束时间 - keyword: 热点搜索词 ### 返回: - 热点榜分类 # [English] ### Purpose: - Get the id and popularit

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"string","required":true},{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_c119397a164763ca346260ec`

获取短剧演员热榜分类/Get Playlet Actor Rank Catalog

- Risk: `write`
- Parameters: `[]`

## `mcp_c37c4a5921596ca5fbda6164`

获取营销活动案例/Get Resource List

- Risk: `read`
- Parameters: `[{"name":"resource_id","type":"integer","required":true}]`

## `mcp_c394722f3ead632b51f24512`

# [中文] ### 用途: - 获取活动日历详情 ### 参数: - calendar_id: 活动id ### 返回: - 活动日历详情 # [English] ### Purpose: - Get the activity calendar details ### Parameters: - calendar_id: Activity id ### Return: - Activity calendar details

- Risk: `read`
- Parameters: `[{"name":"calendar_id","type":"string","required":true}]`

## `mcp_c3b22bca2eedd34d92f3de85`

# [中文] ### 用途: - 获取抖音直播热搜榜数据 ### 返回: - 直播热搜榜数据 # [English] ### Purpose: - Get Douyin live hot search list data ### Return: - Live hot search list data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_c3c12c4d2d0fab3db51272b4`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，不要超过20，建议保持不变。 - sort_type: 排序类型，可选值如下： - `0`: 最新排序-默认 - `1`: 最热排序 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user homepage video data ### Parameters: - sec_user_

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_c43d009188810c2047814c16`

# [中文] ### 用途: - 获取品牌搜索的自动补全建议列表 ### 参数: - keyword: 品牌名称关键词 ### 返回: - 匹配的品牌列表（品牌名称、分类ID等） # [English] ### Purpose: - Get brand search auto-complete suggestion list ### Parameters: - keyword: Brand name keyword ### Return: - Matched brand list (brand name, category ID, etc.) # [示例/Example] keyword =

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_c618926e188e4318a9ee02b8`

# [中文] ### 用途: - 获取单个作品视频弹幕数据 ### 参数: - item_id: 作品id - duration: 视频总时长 - end_time: 结束时间 - start_time: 开始时间 ### 返回: - 视频弹幕数据 # [English] ### Purpose: - Get single video danmaku data ### Parameters: - item_id: Video id - duration: Video total duration - end_time: End time - start_time: Start time ###

- Risk: `read`
- Parameters: `[{"name":"duration","type":"integer","required":true},{"name":"end_time","type":"integer","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_c6a9181b644733bcbc1627bb`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)的推荐搜索结果。 - 根据输入的关键词，返回相关的话题建议列表，包含话题名称、浏览量等信息。 ### 备注: - 本接口可用于话题联想推荐场景，如输入关键词实时展示相关热门话题。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 ### 参数: - keyword: 搜索关键词，如 "游戏" ### 请求体示例： ```json payload = { "keyword": "游戏" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `sug_list[]

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_c6d9dd6e31040287d63f65ae`

# [中文] ### 用途: - 获取指定视频在时间范围内的视频指数趋势数据 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频指数（综合/传播/互动等）随时间变化的趋势数据 # [English] ### Purpose: - Get the video index trend for a video over a date range ### Parameters: - item_id: Video ID (D

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_c80e0d0feb02f89be5b1f405`

# [中文] ### 用途: - 获取高涨粉率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_c82c08b2f44654bc65b0c223`

# [中文] ### 用途: - 获取抖音 App 中图文内容搜索的结果。 - 返回带有多张图片的帖子（aweme_type=68），适用于图文展示类应用场景。 ### 备注: - 该接口与 `fetch_image_search` 使用不同的数据源，返回结果可能有所差异。 - 推荐用于需要高质量图文内容的场景。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页请求时，使用上一次响应返回的 `cursor` 和 `search_id`。 - 每页返回约 12 条数据。 ### 参数: - keyword: 搜索关键词，如 "美食" - cursor: 翻

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_c9812c7a50e27485a5272762`

获取作品观众数据分析/Fetch item audience portrait

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_c98d69f1a367ab90403eb270`

# [中文] ### 用途: - 搜索 DOU+ 直播间，支持按抖音号或抖音昵称搜索，支持游标翻页 ### 参数: - keyword: 抖音号 或 抖音昵称（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 匹配的直播间列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ live rooms by Douyin ID or nickname, with cursor pagination ### Parameters: - keyword: Douyi

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_ca16508d03933a5830d1d6d7`

# [中文] ### 用途: - 获取品牌的趋势线数据（热度随时间变化） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌热度趋势线数据 # [English] ### Purpose: - Get brand trend lines data (popularity over time) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app_n

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_ca36969db1376f8b7973218f`

# [中文] ### 用途: - 获取指定视频的视频指数解读（各分项指数的说明与归因） - 建议配合 fetch_item_index 一起使用 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频综合指数、传播指数、互动指数等分项解读 # [English] ### Purpose: - Get the interpretation of a video's index (breakdown of each sub

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_cb850bcfadac77430413828f`

# [中文] ### 用途: - 获取抖音热榜数据，包括： - 热点榜 - 种草榜 - 娱乐榜 - 社会榜 - 挑战榜 ### 参数: - board_type: - 0: 热点榜（默认） - 2: 其他榜单，如种草榜等，需要传入对应的board_sub_type参数。 - board_sub_type: - 空字符串: 热点榜（默认） - seeding: 种草榜 - 2: 娱乐榜 - 4: 社会榜 - hotspot_challenge: 挑战榜 ### 返回: - 热搜榜数据 # [English] ### Purpose: - Get Douyin hot search list da

- Risk: `read`
- Parameters: `[{"name":"board_sub_type","type":"string","required":false},{"name":"board_type","type":"string","required":false}]`

## `mcp_cbd075e864525a4d1349b212`

提取单个用户id/Extract single user id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_ccec2633076e06f587016076`

获取kol星图指数V1/Get kol Xingtu Index V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_cdab5176ff95b7bb928ce0d1`

获取kol观众画像V1/Get kol Audience Portrait V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_cefe0051697318cd065af259`

# [中文] ### 用途: - 获取多个关键词在指定时间范围内的热度趋势数据 - 可对比多个关键词的热度变化 ### 参数: - keyword_list: 关键词列表，逗号分隔，如 "美食,旅游" - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔（如 "云南,上海,北京"），留空表示全国 ### 返回: - 每日热度趋势数据 # [English] ### Purpose: - Get hot trend d

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_cfda3eb9f950d8c02459db0b`

# [中文] ### 用途: - 获取抖音综合搜索结果（V3 版本），返回视频、用户、相关搜索词等混合卡片。 - 相比 V1/V2 不支持排序与筛选条件，但翻页参数更简单，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagin

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_d02bac3dd616a7a4ea563b53`

# [中文] ### 用途: - 获取抖音指数关联分析功能的有效日期范围 ### 返回: - 关联分析的起止可用日期 # [English] ### Purpose: - Get valid date range for the relation analysis feature ### Return: - Start and end available dates for relation analysis

- Risk: `read`
- Parameters: `[]`

## `mcp_d0422b36fd2b154dbf922163`

获取达人广场筛选项取值/Get Search Field Options

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_d2cfe9dfd6cb324e96eedfe2`

# [中文] ### 用途: - 获取粉丝兴趣作者 20个用户 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝兴趣作者 20个用户 # [English] ### Purpose: - Get the fan interest author 20 users ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest author 20 users

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_d3289ba2b898fe6f13734070`

获取DOU+ POST请求所需的sec_token/Get DOU+ sec_token for POST requests

- Risk: `write`
- Parameters: `[]`

## `mcp_d34f251fb73e70ac46f5fef2`

获取星图IP活动详情/Get IP Activity Detail

- Risk: `read`
- Parameters: `[{"name":"id","type":"integer","required":true}]`

## `mcp_d5331da4465429eabf9e6039`

获取星图达人商业榜数据/Get Ranking List Data

- Risk: `read`
- Parameters: `[{"name":"code","type":"integer","required":false},{"name":"date","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false},{"name":"version","type":"string","required":false}]`

## `mcp_d5ab38b1a8ed7b5df80dba95`

# [中文] ### 用途: - 获取 DOU+ 视频排行榜（热门榜），可按时间范围、垂类、榜单维度筛选 ### 参数: - time_range: 时间范围，1 / 2 / 3，默认 2 - tag_id: 垂类ID，默认 634（娱乐）。完整对照：601剧情, 602明星, 606音乐, 607二次元, 608游戏, 609时事, 612舞蹈, 614三农, 615科技, 616财经, 617亲子, 619生活, 621健康, 623情感, 624文化, 625职场, 626教育, 627摄影, 628美食, 629旅行, 631时尚, 633体育, 634娱乐, 635汽车 - dim_

- Risk: `write`
- Parameters: `[{"name":"adv_id","type":"any","required":false},{"name":"dim_type","type":"any","required":false},{"name":"tag_id","type":"any","required":false},{"name":"time_range","type":"any","required":false}]`

## `mcp_d63406494d59a8877e2b94ca`

# [中文] ### 用途: - 获取用户关注列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_d84330b36a6a4c497e3c0c38`

# [中文] ### 用途: - 获取抖音热榜数据 ### 返回: - 热榜数据 # [English] ### Purpose: - Get Douyin hot search results ### Return: - Hot search results

- Risk: `read`
- Parameters: `[]`

## `mcp_d87bcc44b2c1dd084041bca2`

# [中文] ### 用途: - 使用UID获取用户信息 ### 参数: - uid: 用户UID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by UID ### Parameters: - uid: User UID ### Return: - User information # [示例/Example] uid = "68141954464"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_d9a5559f1234305378f557cb`

# [中文] ### 用途: - 获取热度飙升的搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 热度飙升的搜索榜 # [English] ### Purpose: - Get the sear

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_da50d44b240b8bb611d4a27c`

# [中文] ### 用途: - 获取抖音 App 中搜索关键词的联想推荐结果。 - 根据用户输入的关键词，返回相关搜索词建议，用于提升搜索体验。 ### 备注: - 通常用于实现搜索框实时推荐（如输入时下拉补全）。 - 返回的推荐词经过抖音推荐系统内部打分排序。 ### 参数: - keyword: 输入的关键词，如 "人工智能" ### 请求体示例： ```json payload = { "keyword": "人工智能" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `status_code`: 状态码（0 表示成功） - `status_msg

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_dada2eba175eb42b135744b7`

# [中文] ### 用途: - 获取话题搜索的自动补全建议列表 ### 参数: - keyword: 话题关键词 - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 匹配的话题列表 # [English] ### Purpose: - Get topic search auto-complete suggestion list ### Parameters: - keyword: Topic keyword - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Matche

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_de3fb75633cd6d7a2135b5d1`

# [中文] ### 用途: - 获取抖音 App 中直播搜索结果。 - 返回正在直播的房间信息，包括主播资料、直播间封面、观众人数、拉流地址等。 ### 备注: - 仅返回直播类型内容。 - 初次请求时 `cursor` 传0，`search_id` 传空字符串。 - 翻页请求时，使用上一次响应返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "游戏" - cursor: 翻页游标（首次请求传0） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_df1f8cf13ce0865aa94d1ebd`

# [中文] ### 用途: - 根据分享口令获取分享信息，比如抖音文章的分享口令提取分享人信息和文章ID等然后再去请求单一作品数据接口获取文章内容。 ### 参数: - share_code: 分享口令 ### 返回: - 分享信息，包含分享人信息和文章ID等 # [English] ### Purpose: - Get share info by share code, such as extracting sharer information and article ID from Douyin article share code, and then requesting a sing

- Risk: `read`
- Parameters: `[{"name":"share_code","type":"string","required":true}]`

## `mcp_df6801fcdc09141eb604d7c9`

# [中文] ### 用途: - 根据抖音号获取指定用户的信息 ### 参数: - unique_id: 用户unique_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - unique_id: User unique_id ### Return: - User information # [示例/Example] unique_id = "TheChief"

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_df99741b1d0c8d2d64f3492f`

# [中文] ### 用途: - 根据当前报告 ID 获取相关推荐的其他报告 - 通常用于报告详情页底部的"相关推荐"模块 ### 参数: - report_id: 当前正在查看的报告 ID，从 fetch_report_search 或 fetch_insight_recommend 获取 ### 返回: - 相关推荐的报告列表（含 ID、标题、封面、发布时间等） # [English] ### Purpose: - Get related insight recommendations based on a current report ID - Typically used for th

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_e0d14157f23b355530db95da`

# [中文] ### 用途: - 获取全部内容词 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 全部内容词 # [English] ### Purpose: - Get the list of all conte

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_e28743fcaab267f538bef933`

获取创作者主页作品列表/Get Author Homepage Videos

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"any","required":false},{"name":"is_star_item","type":"any","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"start_time","type":"any","required":false}]`

## `mcp_e30d5101f4bb4ec326772728`

# [中文] ### 用途: - 获取短剧详情信息 ### 参数: - series_id: 短剧id ### 返回: - 短剧详情数据 ### 备注: - 该接口返回短剧的详细信息，包括： - 短剧名称、描述、封面 - 作者信息 - 总集数、更新状态 - 播放量、收藏量等统计数据 - 付费信息（如有） # [English] ### Purpose: - Get series/playlet detail information ### Parameters: - series_id: Series id ### Return: - Series detail data ### Note:

- Risk: `read`
- Parameters: `[{"name":"series_id","type":"string","required":true}]`

## `mcp_e35a644637ba384e566a2da5`

# [中文] ### 用途: - 获取批量用户信息，最多支持10个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多10个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 10 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 10 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_e3e4b50be77ca97b79878fab`

# [中文] ### 用途: - 获取作品数据趋势 ### 参数: - aweme_id: 作品id - option: 选项，7 点赞量 8 分享量 9 评论量 - date_window: 数据点粒度，可选 1/2，代表按小时/按天，默认1 ### 返回: - 作品数据趋势 # [English] ### Purpose: - Get the work data trend ### Parameters: - aweme_id: Work id - option: Option, 7 Like 8 Share 9 Comment - date_window: Data point gran

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false}]`

## `mcp_e4a849dcff69cb6b6b863c71`

根据视频ID批量获取作品的统计数据（点赞数、下载数、播放数、分享数）/Get the statistical data of the Post according to the video ID (l

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_e788f08919de6afa38ac67cd`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接列表（最多支持10个链接） ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link list (supports up to 10 links) ### Return: - If the sec_user_

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_e7b9f2abc194dd2c18ba92db`

# [中文] ### 用途: - 获取当前登录用户在抖音指数中订阅的关键词列表 ### 返回: - 用户已订阅的关键词列表 # [English] ### Purpose: - Get subscribed keyword list for the current logged-in user in Douyin Index ### Return: - List of keywords subscribed by the user

- Risk: `write`
- Parameters: `[]`

## `mcp_e8345f4932cd63486a1b22e9`

提取直播间弹幕/Extract live room danmaku

- Risk: `read`
- Parameters: `[{"name":"danmaku_type","type":"string","required":true},{"name":"live_room_url","type":"string","required":true}]`

## `mcp_e8c06f2ef9cb0f124c7a803b`

# [中文] ### 用途: - 获取抖音指数各类型数据的最新有效日期 ### 返回: - 包含关键词、品牌、话题等维度的日/周/月最新可用日期 # [English] ### Purpose: - Get the latest valid dates for each data type in Douyin Index ### Return: - Contains latest available daily/weekly/monthly dates for keyword, brand, topic dimensions

- Risk: `read`
- Parameters: `[]`

## `mcp_e8e8658e4c4afec7e05d4ade`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - sort_type: 0:综合排序 1:最多点赞 2:最新发布 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_e8f5373cb37ad8a27d3bcbd8`

# [中文] ### 用途: - 获取粉丝近3天感兴趣的话题 10个话题 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天感兴趣的话题 10个话题 # [English] ### Purpose: - Get the fan interest topic in the last 3 days 10 topics ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest topic in the last 3 days 10 topics

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_ea41ea240e5ae93481d4d42c`

获取创作者视频触达分布/Get Author Touch Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_ea91bfa9cbbe258e1ff7117c`

获取kol基本信息V1/Get kol Base Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_eadc9c480760bb7c9fceafd3`

获取用户喜欢作品数据/Get user like video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_eb1a6906d45a7447508be5f9`

获取短剧演员热榜/Get Playlet Actor Rank List

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"date","type":"string","required":false},{"name":"name","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false}]`

## `mcp_ee6b958b97d6ff72457396b4`

# [中文] ### 用途: - 获取低粉爆款榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_efac7f55541f22e08e128303`

# [中文] ### 用途: - 获取抖音创作者平台热门音乐榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过配置接口获取 - order_key: 排序键 (1=播放最高, 2=点赞最多, 4=热度最高, 5=投稿最多) - time_filter: 时间筛选 (1=24小时, 2=7天, 3=30天) ### 返回: - 热门音乐榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot music billboard data ### Parameters: - billboar

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_f01c494cfdfc466b81181f27`

获取优秀行业分类列表/Get Excellent Case Category List

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false}]`

## `mcp_f0203a2224d180c61e9163e7`

# [中文] ### 用途: - 搜索话题，获取话题详情和相关数据 ### 参数: - keyword: 话题关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 话题详情、话题热度、相关视频数等 # [English] ### Purpose: - Search topics, get topic details and related data ### Parameters: - keyword: Topic keyword - start_date/end_da

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_f187f8fb3b456fc3a4656939`

获取创作者视频列表/Get Author Show Items

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_f1de82e235df11a1d5b6b13c`

根据抖音号获取游客星图kolid/Get XingTu kolid by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_f385c43be606812337d55021`

获取首页推荐数据/Get home feed data

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_f3cd03e6296f38438d0a876f`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 支持通过粉丝数量、用户类型进行筛选查询。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） - douyin_user_fans: 粉丝数量筛选 - 为空: 不限 - "0_1k": 1000以下 - "1k_1w": 1000到1万 - "1w_10w": 1万到10万 - "10w_

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"douyin_user_fans","type":"string","required":false},{"name":"douyin_user_type","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_f48d6cb6bf22699e9209fbba`

根据抖音sec_user_id获取游客星图kolid/Get XingTu kolid by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_f497abc0b9d99a598b094fde`

# [中文] ### 用途: - 获取抖音创作者中心配置信息 ### 返回: - 创作者中心配置数据 # [English] ### Purpose: - Get Douyin creator material center configuration ### Return: - Creator material center config data

- Risk: `read`
- Parameters: `[]`

## `mcp_f4de8039248e24541e073c39`

# [中文] ### 用途: - 生成真实msToken ### 返回: - msToken # [English] ### Purpose: - Generate real msToken ### Return: - msToken

- Risk: `read`
- Parameters: `[]`

## `mcp_f5f42207d406b861c465a089`

音乐作品推荐/Music Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_f699c03c8f0cfad6b2cd63ec`

# [中文] ### 用途: - 根据抖音uid获取指定用户的信息 ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "16739374881

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_f8b6d36967232f2ebf4b9e69`

# [中文] ### 用途: - 获取抖音 App 中经验（知识/教程）内容的搜索结果。 - 支持通过关键词检索，与经验类内容（如攻略、教程、分享等）相关的视频信息。 ### 备注: - 此接口专注于经验类内容，不包含其他类型的内容。 - 初次请求时，`cursor` 应传 0，`search_id` 传空字符串，翻页时使用上次响应返回的 cursor 和 search_id。 - 返回的结果中包含视频详情、作者信息、背景音乐、话题标签、播放地址、互动数据等。 ### 参数: - keyword: 搜索关键词，例如 "游戏攻略" - cursor: 翻页游标，首次请求传 0 - sort_ty

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_f941150a6e9d2d2d344da920`

# [中文] ### 用途: - 获取指定关键词在抖音指数中的有效日期范围 ### 参数: - keyword_list: 关键词列表，多个关键词用逗号分隔，如 "美食,旅游" ### 返回: - 各关键词可查询的起止日期 # [English] ### Purpose: - Get valid date range for specified keywords in Douyin Index ### Parameters: - keyword_list: Keyword list, comma separated, e.g. "美食,旅游" ### Return: - Queryable s

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_fa8eeb26169f687c3d6d9df5`

# [中文] ### 用途: - 获取 DOU+ 达人分类列表；其分类名可用作"按分类搜索达人"接口的 name 字段 ### 返回: - 达人分类列表 # [English] ### Purpose: - Get the DOU+ talent category list; a category name can be used as the `name` of the talent search endpoint ### Return: - Talent category list

- Risk: `write`
- Parameters: `[]`

## `mcp_fd2fdb144680b311bdb181db`

投放数据概览(账号/视频/直播)/Delivery analysis overview

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_fe119e0e1a339e53a0bb9063`

# [中文] ### 用途: - 使用UID获取用户开播信息 ### 参数: - uid: 用户UID ### 返回: - 用户开播信息，包含room_id与live_status # [English] ### Purpose: - Get user live information by UID ### Parameters: - uid: User UID ### Return: - User live information, including room_id and live_status # [示例/Example] uid = "3081254195702747"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_ffeee188a0fb938dbd1a607c`

# [中文] ### 用途: - 获取达人核心指标数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝数、获赞数、作品数、互动率等核心指标 # [English] ### Purpose: - Get daren core metrics data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Follower count, like count, video count, enga

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_fffa22cd451aab864370122a`

# [中文] ### 用途: - 获取热门账号 ### 参数: - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - page_num: 页码，默认1 - page_size: 每页数量，默认10 - query_tag: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "date_window": 24, "page_num": 1, "page_size": 10, "query_tag": {"value": 628, "children": [{"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"query_tag","type":"object","required":false}]`
