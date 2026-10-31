# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-4`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 79

## `mcp_c023d4195a6e2b5a30d1c204`

搜索MCN机构列表/Get Demander MCN List

- Risk: `read`
- Parameters: `[{"name":"mcn_name","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_c1e0cb214a0155bcf944c406`

# [中文] ### 用途: - 获取品牌的趋势线数据（热度随时间变化） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌热度趋势线数据 # [English] ### Purpose: - Get brand trend lines data (popularity over time) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app_n

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_c2369d858c36b189a26793a5`

# [中文] ### 用途: - 获取内容词详情 ### 参数: - keyword: 搜索关键字 - word_id: 内容词id - query_day: 查询日期，格式为YYYYMMDD ### 返回: - 内容词详情 # [English] ### Purpose: - Get the details of content words ### Parameters: - keyword: Search keyword - word_id: Content word id - query_day: Query date, format is YYYYMMDD ### Return: -

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"query_day","type":"integer","required":true},{"name":"word_id","type":"string","required":true}]`

## `mcp_c26fe89e4c915f74ba0f0f4a`

达人搜索/Search Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"integer","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":false},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"integer","required":false},{"name":"seach_type","type":"integer","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false},{"name":"time_range_days","type":"integer","required":false}]`

## `mcp_c2975e9d2e35a813f3614728`

# [中文] ### 用途: - 获取品牌的有效信息和品牌指数数据 ### 参数: - keyword_list: 品牌名称列表，逗号分隔 ### 返回: - 品牌指数、可用日期范围等 # [English] ### Purpose: - Get brand valid info and brand index data ### Parameters: - keyword_list: Brand name list, comma separated ### Return: - Brand index, available date range, etc. # [示例/Example] keyw

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_c2cfd42a9d3f08e61c5ccfc6`

# [中文] ### 用途: - 获取当前登录用户在抖音指数中订阅的关键词列表 ### 返回: - 用户已订阅的关键词列表 # [English] ### Purpose: - Get subscribed keyword list for the current logged-in user in Douyin Index ### Return: - List of keywords subscribed by the user

- Risk: `write`
- Parameters: `[]`

## `mcp_c350c002760bca4dfe6722f5`

# [中文] ### 用途: - 获取视频榜 ### 参数: - page: 页码，默认1 - page_size: 每页数量，默认10 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - sub_type: 榜单分类，1001 视频总榜 1002 低粉爆款 1003 高完播率 1004 高涨粉率 1005 高点赞率 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"sub_type","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_c41c30812beecba4f828968b`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_c4d48b6b976316cef59977c3`

获取作品观看趋势分析/Fetch item watch trend analysis

- Risk: `write`
- Parameters: `[{"name":"analysis_type","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_c51679b32343441c3ae575d7`

根据视频ID批量获取作品的统计数据（点赞数、下载数、播放数、分享数）/Get the statistical data of the Post according to the video ID (l

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_c6be37cc19f09eefd67a5e5a`

# [中文] ### 用途: - 通过sec_uid获取指定用户的直播流数据 ### 参数: - sec_uid: 用户sec_uid，也叫 sec_user_id，可以在用户主页链接中找到。 ### 返回: - 直播流数据 # [English] ### Purpose - Get live video data of specified user by sec_uid ### Parameters - sec_uid: User sec_uid, also called sec_user_id, can be found in the user's homepage link. ### R

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_c6f8d01c42f8846beb9cafff`

获取短剧演员热榜分类/Get Playlet Actor Rank Catalog

- Risk: `write`
- Parameters: `[]`

## `mcp_c7d3a78f424d614209a6f3ad`

音乐作品推荐/Music Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_c7de6c92fdec8798bf1ae5e2`

# [中文] ### 用途: - 按关键词搜索视频（V5 版本），只返回视频内容。 - 翻页参数与综合搜索 V3 一致，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagination.has_more` 为 0 表示已经到最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_cc37db483a5a9c18da89a39a`

投放数据趋势图/Delivery analysis trend graph

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_cce14d4c1941fa3fb965f65e`

# [中文] ### 用途: - DOU+ 用户搜索 V2，支持游标翻页与 scope 搜索范围 ### 参数: - keyword: 搜索关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 - scope: 搜索范围，默认 1 ### 返回: - 匹配结果列表，以及翻页信息 # [English] ### Purpose: - DOU+ user search V2, with cursor pagination and a search scope ### Parameters: - keyword: Sea

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"scope","type":"any","required":false}]`

## `mcp_cd21ec1cbab913bfa2383673`

获取用户收藏作品数据/Get user collection video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_cdcacb63c8661345e1dc5aa8`

# [中文] ### 用途: - 搜索 DOU+ 直播间，支持按抖音号或抖音昵称搜索，支持游标翻页 ### 参数: - keyword: 抖音号 或 抖音昵称（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 匹配的直播间列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ live rooms by Douyin ID or nickname, with cursor pagination ### Parameters: - keyword: Douyi

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_ce377c70351b52e2926ac8a7`

# [中文] ### 用途: - 获取用户关注列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_cf4ed66b8a271f25e2ddcf90`

头条创作者搜索/Search Toutiao Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"integer","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_d0043977249970c3f09c630b`

# [中文] ### 用途: - 获取抖音创作者中心热门视频榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_d1258b8fb58eb71e12ec7854`

投放数据明细/Delivery analysis detail

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_d3ad37e9f89b3e27be815186`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容（V2版本接口）。 - 相较于 V1，返回字段更加详细，包括作者资料、视频多清晰度播放源、标签列表等。 ### 备注: - 初次请求时 `cursor` 传入0，`search_id`传空字符串。 - 返回的视频内容丰富，可用于推荐展示、内容抓取、智能分析等应用场景。 ### 参数: - keyword: 搜索关键词，如 "机器人" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_d53230546c63b8642cbf837c`

# [中文] ### 用途: - 获取抖音直播热搜榜数据 ### 返回: - 直播热搜榜数据 # [English] ### Purpose: - Get Douyin live hot search list data ### Return: - Live hot search list data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_d613df46616b1dd37f593bc8`

获取kol内容表现V1/Get kol Rec Videos V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_d7f7990f56e35dd8985b9645`

美食作品推荐/Food Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_d7ff2b51ccedd8e12fe3a53f`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，给指定用户发送私信。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法发送私信给指定用户。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and send private messages to specified users ### Parameters: - uid: User id - sec_ui

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_d834035b86b840e0401c17e2`

# [中文] ### 用途: - 获取抖音品牌热榜具体分类数据 ### 参数: - category_id: 分类id ### 返回: - 品牌热搜榜具体分类数据 # [English] ### Purpose: - Get Douyin brand hot search list detail data ### Parameters: - category_id: Category id ### Return: - Hot brand search list detail data # [示例/Example] category_id = 10

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true}]`

## `mcp_d93e60c4c6f1bf13ab81b38e`

# [中文] ### 用途: - 获取低粉爆款榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_db8343d23352d109b4c61347`

# [中文] ### 用途: - 获取指定视频在时间范围内的视频指数趋势数据 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频指数（综合/传播/互动等）随时间变化的趋势数据 # [English] ### Purpose: - Get the video index trend for a video over a date range ### Parameters: - item_id: Video ID (D

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_db9dece7a8e4985ac34201f6`

# [中文] ### 用途: - 提取列表作品id（最多支持20个链接） ### 参数: - url: 作品链接列表 ### 返回: - 作品id列表 # [English] ### Purpose: - Extract list video id (supports up to 20 links) ### Parameters: - url: Video link list ### Return: - Video id list # [示例/Example] ```json { "urls":[ "0.53 02/26 I@v.sE Fus:/ 你别太帅了郑润泽# 现场版live # 音乐节

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_de159f4595bb2288db166462`

# [中文] ### 用途: - 获取指定视频的对比分析数据（与同类视频/大盘的表现对比） ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频在各维度上与参照对象的对比分析结果 # [English] ### Purpose: - Get comparison analysis for a video (performance vs. similar videos / benchmark) ### Paramete

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_deff82f508e3294fb51e4505`

# [中文] ### 用途: - 获取指定关键词在抖音指数中的有效日期范围 ### 参数: - keyword_list: 关键词列表，多个关键词用逗号分隔，如 "美食,旅游" ### 返回: - 各关键词可查询的起止日期 # [English] ### Purpose: - Get valid date range for specified keywords in Douyin Index ### Parameters: - keyword_list: Keyword list, comma separated, e.g. "美食,旅游" ### Return: - Queryable s

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_e01318a1c6f05a15d3563ddd`

获取星图达人商业榜数据/Get Ranking List Data

- Risk: `read`
- Parameters: `[{"name":"code","type":"integer","required":false},{"name":"date","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false},{"name":"version","type":"string","required":false}]`

## `mcp_e0b7f4232f200751272aa73e`

# [中文] ### 用途: - 获取抖音 App 中多种类型（视频、用户、音乐、话题等）的综合搜索结果。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容丰富，适合搭建搜索聚合页、推荐页等场景。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发布时间筛选 - `0`: 不限 - `1`: 最近

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_e1135916cc6b46d1a330e44c`

# [中文] ### 用途: - 根据抖音uid获取指定用户的信息 ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "16739374881

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_e1cb2912dd4339e9ca9942e5`

# [中文] ### 用途: - 按关键词搜索视频（V3 版本），支持发布时间、视频类型、时长三维筛选。 - 结果除视频基础信息外，还带播放量、点赞数、作者粉丝数等运营指标，适合做内容选题与竞品分析。 ### 备注: - 不支持翻页，返回的是当前筛选条件下的一批结果。 - 三个筛选参数都是可选的，全部留默认值即为不限。 ### 参数: - query: 搜索关键词（必填），如 "美食" - date_type: 发布时间筛选，默认 0=不限 - 可选值：0=不限, 3=近3天, 7=近7天, 30=近一个月 - label_type: 视频类型（精选标签），默认 0=不限 - 可选值：0=不限

- Risk: `write`
- Parameters: `[{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":false}]`

## `mcp_e1f3ea42f7fd81703819b03c`

# [中文] ### 用途: - 获取指定趋势报告的完整详情 - 包含报告标题、封面、发布时间、所属产品、正文内容、图片资源、PDF 下载链接等 ### 参数: - report_id: 报告 ID（字符串），可从 fetch_report_search 或 fetch_insight_recommend 返回结果中获取 ### 返回: - 报告完整数据：title, cover, publish_time, business, content, images, pdf_url 等 # [English] ### Purpose: - Get full detail of a trend in

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_e2c755959afeec31c3e42c9d`

# [中文] ### 用途: - 使用UID获取用户信息 ### 参数: - uid: 用户UID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by UID ### Parameters: - uid: User UID ### Return: - User information # [示例/Example] uid = "68141954464"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_e2ed418003b2a8f20112b079`

# [中文] ### 用途: - 获取话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_e36fb70c2a134c6cf287b5de`

获取创作者推荐视频/Get Author Recommended Videos V2

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_e387aeee9e007388f64d2129`

获取创作者内容热词/Get Author Content Hot Keywords

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"keyword_type","type":"integer","required":false}]`

## `mcp_e3886bd2028985b8cc8febf5`

# [中文] ### 用途: - 获取抖音指数关联分析功能的有效日期范围 ### 返回: - 关联分析的起止可用日期 # [English] ### Purpose: - Get valid date range for the relation analysis feature ### Return: - Start and end available dates for relation analysis

- Risk: `read`
- Parameters: `[]`

## `mcp_e5493bc464dce4755f930f32`

获取投稿作品列表/Fetch item list

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"any","required":false},{"name":"end_time","type":"integer","required":true},{"name":"fields","type":"string","required":false},{"name":"need_cooperation","type":"boolean","required":false},{"name":"need_long_article","type":"boolean","required":false},{"name":"order_by","type":"integer","required":false},{"name":"start_time","type":"integer","required":true}]`

## `mcp_e5a6664a70914fed2c3ef28a`

获取短剧演员热榜/Get Playlet Actor Rank List

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"date","type":"string","required":false},{"name":"name","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false}]`

## `mcp_e736267783301ad56b6f3dd1`

# [中文] ### 用途: - 获取抖音 App 中音乐内容的搜索结果。 - 支持关键词、排序方式、筛选条件等。 ### 备注: - 本接口专注于音乐类内容搜索，不包含其他类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容包含音乐基本信息、作者信息、封面、播放地址、标签等。 ### 参数: - keyword: 搜索关键词，例如 "游戏背景音乐" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_e8a215462d683c8c6ee2fb1c`

获取创作者CP合作信息/Get Author CP Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_e8ae9ed12a5ea56966b87a0d`

# [中文] ### 用途: - 获取抖音实时热点和飙升热点排行榜 ### 返回: - 热点名称、热点指数、排名变化等信息 # [English] ### Purpose: - Get Douyin real-time hot topics and trending topics leaderboard ### Return: - Topic name, topic index, rank change and other information

- Risk: `read`
- Parameters: `[]`

## `mcp_e8c15bae037638862c54faf8`

提取直播间号/Extract webcast id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_e8eb4f0bb1c0388fa12f7da4`

# [中文] ### 用途: - 获取活动日历详情 ### 参数: - calendar_id: 活动id ### 返回: - 活动日历详情 # [English] ### Purpose: - Get the activity calendar details ### Parameters: - calendar_id: Activity id ### Return: - Activity calendar details

- Risk: `read`
- Parameters: `[{"name":"calendar_id","type":"string","required":true}]`

## `mcp_e9be2efab516b2e94ea941f0`

获取作品观众其他数据分析/Fetch item audience others analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_eb40ecc7b16035fc2a9ce6bc`

获取营销活动案例/Get Resource List

- Risk: `read`
- Parameters: `[{"name":"resource_id","type":"integer","required":true}]`

## `mcp_ec42a4201bf796c2a647dd4e`

获取作品点赞观众画像-仅限热门榜/Fetch work like audience portrait - hot list only

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"option","type":"integer","required":false}]`

## `mcp_ecab02c20f738ae35c07ba57`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_ee126da9a7d90f03217026f4`

获取创作者星图连接指数/Get Author Link Info

- Risk: `read`
- Parameters: `[{"name":"industy_tag","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_eeb1009a30eb11e7161b7016`

# [中文] ### 用途: - 获取抖音 App 中经验（知识/教程）内容的搜索结果。 - 支持通过关键词检索，与经验类内容（如攻略、教程、分享等）相关的视频信息。 ### 备注: - 此接口专注于经验类内容，不包含其他类型的内容。 - 初次请求时，`cursor` 应传 0，`search_id` 传空字符串，翻页时使用上次响应返回的 cursor 和 search_id。 - 返回的结果中包含视频详情、作者信息、背景音乐、话题标签、播放地址、互动数据等。 ### 参数: - keyword: 搜索关键词，例如 "游戏攻略" - cursor: 翻页游标，首次请求传 0 - sort_ty

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_f031233690a1b8786cba6c7a`

# [中文] ### 用途: - 获取视频搜索 `fetch_item_query` 接口支持的所有筛选选项取值 - 包含：垂类(categories)、时长(duration_types)、类型(label_types)、发布时间(date_types) - 调用 `fetch_item_query` 前可先查询本接口获取所需的 ID ### 返回: - categories: 垂类列表，每项包含 id / name / name_en，id 用于 category_id 参数 - duration_types: 时长列表，每项包含 id / name / name_en，id 用于 dur

- Risk: `read`
- Parameters: `[]`

## `mcp_f06302cd9b196c0758bc19ff`

获取用户直播流数据/Get user live video data

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_f0c355a4776bb434dbc11bb0`

# [中文] ### 用途: - 获取指定视频的观众人群画像 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 观众性别分布、年龄分布、地域分布、兴趣分布等画像数据 # [English] ### Purpose: - Get the audience portrait for a video ### Parameters: - item_id: Video ID (Douyin aweme id, numeric s

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_f452900e4b0f13342ac2b0d1`

获取星图IP日历活动列表/Get IP Activity List

- Risk: `write`
- Parameters: `[{"name":"category_list","type":"any","required":false},{"name":"industry_id_list","type":"any","required":false},{"name":"query_end_time","type":"string","required":true},{"name":"query_start_time","type":"string","required":true},{"name":"status_list","type":"any","required":false}]`

## `mcp_f46dc020eaaaaa4dd697c75d`

# [中文] ### 用途: - 获取作品评论分析-词云权重 ### 参数: - aweme_id: 作品id ### 返回: - 作品评论分析-词云权重 # [English] ### Purpose: - Get the work comment analysis word cloud weight ### Parameters: - aweme_id: Work id ### Return: - Work comment analysis word cloud weight

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_f4ffb8e0f78591f00bdb91ce`

获取直播场次历史记录/Fetch live room history list

- Risk: `write`
- Parameters: `[{"name":"download","type":"integer","required":false},{"name":"end_date","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"need_living","type":"integer","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_f51860f9b7eb9a134c4c4450`

# [中文] ### 用途: - 获取单个作品数据，支持文章、图文、视频等。 - V3版本的接口，解决了版权限制问题，可以获取更多受限内容，比如 V1，V2版本返回的Reason为8的内容和部分文章或短剧等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data, support article, photo, video, etc. - V3 version of the interface, which solves the copyright restriction

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_f84187d37012b094b9258d1d`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_f894af49fd6fda0f069c8fb0`

主播搜索/Search Anchor

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"integer","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_f8a8ad6760acd6e065d8968e`

# [中文] ### 用途: - 直播间号转房间号 ### 参数: - webcast_id: 直播间号 ### 返回: - 房间号 # [English] ### Purpose: - Webcast id to room id ### Parameters: - webcast_id: Webcast id ### Return: - Room id # [示例/Example] "webcast_id = "775841227732"

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_f98b6694d9805bff83e8c722`

# [中文] ### 用途: - 获取指定作品在给定推广目标、预算和投放时长下的预计投放效果 - 适合在正式创建 DOU+ 订单前比较不同预算和时长的预估结果 ### 参数: - item_ids: 作品ID，多个用逗号分隔（必填）。单作品通常使用 schema=0，多作品使用 schema=3 - external_action: 优化动作编码，需与 target_id 对应。默认 44（NativeAction）；常用值：45=点赞，46=关注， 47=评论，51=链接点击，102=多互动，181=主页访问 - target_id: 推广目标ID，默认 31（点赞评论量）。常用值：32=粉

- Risk: `write`
- Parameters: `[{"name":"cost_int","type":"integer","required":false},{"name":"duration_seconds","type":"integer","required":false},{"name":"external_action","type":"integer","required":false},{"name":"is_max_cv","type":"boolean","required":false},{"name":"item_ids","type":"string","required":true},{"name":"pay_type","type":"integer","required":false},{"name":"schema","type":"integer","required":false},{"name":"target_id","type":"integer","required":false}]`

## `mcp_fa074136a50b90f57f22fd03`

二次元作品推荐/Anime Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_fa193f5c707336d6f33c9680`

# [中文] ### 用途: - 通过视频ID 或 视频链接/分享文本 获取视频详情 ### 参数: - video: 视频ID 或 视频链接/分享文本（必填）。例：`7651708301280906538`，或含 v.douyin.com 链接的分享文案 ### 返回: - 匹配到的视频数据 # [English] ### Purpose: - Get a video's detail by its ID or share link/text ### Parameters: - video: Video ID, or share link/text (required). e.g. `765

- Risk: `write`
- Parameters: `[{"name":"video","type":"string","required":true}]`

## `mcp_fa4cecbc43f7dfe7842f08f7`

# [中文] ### 用途: - 获取抖音 App 中图片内容搜索的结果。 - 主要返回带有多张图片的帖子（图片合集）。 ### 备注: - 仅返回图片类型的内容，适用于图片展示类应用场景。 - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 翻页时使用上一次响应中的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "猫咪" - cursor: 翻页游标（首次请求传0） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_fa78fa59a355bcb47ebfa319`

获取投放过的账号/Get promoted accounts

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"limit","type":"any","required":false}]`

## `mcp_fa9f41e23e2d703b8b4f2e99`

获取作品观众数据分析/Fetch item audience portrait

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_fac7016c5a3cf326556adaa7`

# [中文] ### 用途: - 获取抖音指数支持的所有地区列表 ### 返回: - 省份和城市的层级结构列表，可用于关键词指数的地区筛选参数 # [English] ### Purpose: - Get all supported area list for Douyin Index ### Return: - Hierarchical list of provinces and cities, used as region filter parameter in keyword index APIs

- Risk: `read`
- Parameters: `[]`

## `mcp_fb70bdf216d9d93ff3ad1bc7`

# [中文] ### 用途: - 获取高完播率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_fb9cca03f9abf57a73b9956b`

# [中文] ### 用途: - 获取指定视频的视频指数解读（各分项指数的说明与归因） - 建议配合 fetch_item_index 一起使用 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频综合指数、传播指数、互动指数等分项解读 # [English] ### Purpose: - Get the interpretation of a video's index (breakdown of each sub

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_fbccc46ed74d25f13fc92fcb`

# [中文] ### 用途: - 获取抖音热榜数据 ### 返回: - 热榜数据 # [English] ### Purpose: - Get Douyin hot search results ### Return: - Hot search results

- Risk: `read`
- Parameters: `[]`

## `mcp_fd703f5cc0f8a172cad4e071`

高级搜索kol V2/Search Kol Advanced V2

- Risk: `read`
- Parameters: `[{"name":"contentTag","type":"string","required":false},{"name":"followerRange","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_fdf89e3bfd1450084cd1b61e`

# [中文] ### 用途: - 获取作品数据趋势 ### 参数: - aweme_id: 作品id - option: 选项，7 点赞量 8 分享量 9 评论量 - date_window: 数据点粒度，可选 1/2，代表按小时/按天，默认1 ### 返回: - 作品数据趋势 # [English] ### Purpose: - Get the work data trend ### Parameters: - aweme_id: Work id - option: Option, 7 Like 8 Share 9 Comment - date_window: Data point gran

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false}]`

## `mcp_fe112ed7787abc050d6c2ecf`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`
