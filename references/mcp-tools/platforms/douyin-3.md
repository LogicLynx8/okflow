# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-3`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_800822646bcc78ff3e1a63c6`

# [中文] ### 用途: - 获取热点榜分类的id与热度 - 注意：使用start_date和end_date参数需要移除snapshot_time参数才可以生效 ### 参数: - billboard_type: 榜单类型 - rise 上升热点榜 - city 城市热点榜 - total 热点总榜 - snapshot_time: 快照时间 - start_date: 快照开始时间 - end_date: 快照结束时间 - keyword: 热点搜索词 ### 返回: - 热点榜分类 # [English] ### Purpose: - Get the id and popularit

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"string","required":true},{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_8126f470093e4774c4b2eb7f`

# [中文] ### 用途: - 获取多个关键词在指定时间范围内的热度趋势数据 - 可对比多个关键词的热度变化 ### 参数: - keyword_list: 关键词列表，逗号分隔，如 "美食,旅游" - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔（如 "云南,上海,北京"），留空表示全国 ### 返回: - 每日热度趋势数据 # [English] ### Purpose: - Get hot trend d

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_81abd2f66a894309390d6e15`

# [中文] ### 用途: - 获取指定视频在抖音指数「视频分析」中的基础详情 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） ### 返回: - 视频标题、封面、时长、发布时间、作者信息及基础数据等 # [English] ### Purpose: - Get the basic detail of a video in Douyin Index video analysis ### Parameters: - item_id: Video ID (Douyin aweme id, numeric string) ### Return: - Vide

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_82d6648f8bb135baacbf2103`

# [中文] ### 用途: - 获取高涨粉率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_831cdb2ca490a027fa39e55d`

# [中文] ### 用途: - 按视频标题/关键词搜索视频（V4 版本），支持游标翻页。 - 关键词匹配的是视频标题，也可以直接传入视频ID或视频分享链接来精确定位一条视频。 ### 备注: - 本接口不支持排序、发布时间、时长、内容类型等筛选条件，只有关键词与翻页参数。 - 每页固定 12 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 视频标题/关键词（必填），如 "猫咪" - cursor: 翻页游标（首次请求传 0） ### 请求体示例： ```json payload = { "ke

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_834d7f2343c6e72c723b201b`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cur

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_837c674f82381e239aa39ad3`

# [中文] ### 用途: - 获取全部内容词 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 全部内容词 # [English] ### Purpose: - Get the list of all conte

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_83de0f563f53c39d6ae34a5e`

获取星图IP日历活动列表/Get IP Activity List

- Risk: `write`
- Parameters: `[{"name":"category_list","type":"any","required":false},{"name":"industry_id_list","type":"any","required":false},{"name":"query_end_time","type":"string","required":true},{"name":"query_start_time","type":"string","required":true},{"name":"status_list","type":"any","required":false}]`

## `mcp_83e2847fdb93f5583933d645`

获取直播场次历史记录/Fetch live room history list

- Risk: `write`
- Parameters: `[{"name":"download","type":"integer","required":false},{"name":"end_date","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"need_living","type":"integer","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_83e33a09508667cf913db336`

获取作品观众其他数据分析/Fetch item audience others analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_85738d1bada1b7b3b2cc3591`

# [中文] ### 用途: - 获取内容词详情 ### 参数: - keyword: 搜索关键字 - word_id: 内容词id - query_day: 查询日期，格式为YYYYMMDD ### 返回: - 内容词详情 # [English] ### Purpose: - Get the details of content words ### Parameters: - keyword: Search keyword - word_id: Content word id - query_day: Query date, format is YYYYMMDD ### Return: - 

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"query_day","type":"integer","required":true},{"name":"word_id","type":"string","required":true}]`

## `mcp_86895922c542e639744177a5`

# [中文] ### 用途: - 获取话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_8694d58e5eb2ee9b6ecf17e8`

# [中文] ### 用途: - 搜索抖音指数视频库，支持垂类、时长、类型、发布时间四维筛选 - 结果包含视频基础信息、播放/点赞/粉丝等核心数据 ### 参数: - query: 搜索关键词（必填），例如 "美食" - category_id: 垂类ID（字符串），默认 "0"=全部 - 常用示例：601=剧情, 602=明星, 603=综艺, 604=电影, 605=电视剧, 606=音乐, 607=二次元, 608=游戏, 609=社会时政, 612=舞蹈, 615=科技, 617=母婴, 619=生活家居, 628=美食, 629=旅行, 631=时尚, 633=体育, 635=汽车 

- Risk: `write`
- Parameters: `[{"name":"category_id","type":"string","required":false},{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_86c55c12c1c63045674897de`

# [中文] ### 用途: - 获取品牌的周期数据（周期性热度分析） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌周期性热度数据 # [English] ### Purpose: - Get brand cycles data (periodic popularity analysis) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_87327ae365461f3603a1c0b4`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the secon

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_87c0d4c9006fd18c9a3a428f`

导出投稿作品列表/Download item list

- Risk: `write`
- Parameters: `[{"name":"max_cursor","type":"integer","required":true},{"name":"min_cursor","type":"integer","required":true},{"name":"need_long_article","type":"boolean","required":false},{"name":"type_filters","type":"array","required":false}]`

## `mcp_896932a90c8d07c4f05d21be`

获取创作者传播价值/Get Author Spread Info

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"range","type":"integer","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_8aad6ac41b674ae4a86c4198`

# [中文] ### 用途: - 获取话题搜索的自动补全建议列表 ### 参数: - keyword: 话题关键词 - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 匹配的话题列表 # [English] ### Purpose: - Get topic search auto-complete suggestion list ### Parameters: - keyword: Topic keyword - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Matche

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_8ac72138b1edd63fff7e718f`

# [中文] ### 用途: - 获取指定垂类下、指定热门关键词的相关视频列表 - 用于查看某个热门关键词具体由哪些视频贡献 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - period: 时间周期 "1"=近1天 / "3"=近3天 / "7"=近7天 - end_date: 结束日期 YYYYMMDD。**仅当 period=7 时必须为周日**（如 20260412），period=1/3 时可为任意日期 - keyword: 热门关键词（**必须**先调 fetch_content_creative_key

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_8b3083471e8cae5296adbe3d`

获取投稿表现数据/Fetch item analysis item performance

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"metric_type","type":"integer","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_8ca2767dd929351180117b3c`

# [中文] ### 用途: - 获取抖音 App 中图文内容搜索的结果。 - 返回带有多张图片的帖子（aweme_type=68），适用于图文展示类应用场景。 ### 备注: - 该接口与 `fetch_image_search` 使用不同的数据源，返回结果可能有所差异。 - 推荐用于需要高质量图文内容的场景。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页请求时，使用上一次响应返回的 `cursor` 和 `search_id`。 - 每页返回约 12 条数据。 ### 参数: - keyword: 搜索关键词，如 "美食" - cursor: 翻

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_8dd5c04a7fcd7858de49fa00`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified video ### Parameters: - aweme_id: Video id ### Return: - Share link # [示例/Example] aweme_id = "7197598285882789120"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_8f5c7331dc4cf0f3447f7834`

抖音sec_user_id转星图达人ID/Get Xingtu Author ID by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_90820a34f6a5a467973161e5`

# [中文] ### 用途: - 获取达人粉丝分析数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝性别分布、年龄分布、地域分布、活跃时间等 # [English] ### Purpose: - Get daren fans analysis data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Fans gender, age, region distribution, act

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_92250dd73bca9cb74dc08aa2`

# [中文] ### 用途: - 获取抖音 App 中图片内容搜索的结果。 - 主要返回带有多张图片的帖子（图片合集）。 ### 备注: - 仅返回图片类型的内容，适用于图片展示类应用场景。 - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 翻页时使用上一次响应中的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "猫咪" - cursor: 翻页游标（首次请求传0） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_93b917f7c574220098356bca`

获取用户收藏作品数据/Get user collection video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_941fa7872fb14f6736c6a3f1`

# [中文] ### 用途: - 获取抖音创作者平台的行业分类配置 - 返回所有可用的行业分类层级结构 - **建议在调用商单任务列表接口前先调用此接口获取完整的行业分类信息** ### 重要说明: - 此接口已优化为Redis缓存，首次调用后数据将缓存30天 - 缓存键: `douyin_creator:industry_categories` - 数据结构包含一级行业和二级行业的完整映射关系 ### 数据结构: ```json { "status_code": 0, "status_msg": "success", "data": { "industry_categories": [ {"

- Risk: `read`
- Parameters: `[]`

## `mcp_9561401a347762f102fa07be`

根据视频ID批量获取作品的统计数据（点赞数、下载数、播放数、分享数）/Get the statistical data of the Post according to the video ID (l

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_967d21d2a5dfb2174b619bd7`

# [中文] ### 用途: - 获取抖音创作者平台热门课程数据或精选专题课程 ### 参数: - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) - category_id: 精选专题分类ID (不传则获取热门课程，传入则获取指定分类的精选专题) 可选值: - 6976547830546582816: 知识品类 - 6976547923849006336: 生活品类 - 6976547940311633165: 娱乐品类 - 6976547972108635404: 

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_96d1f0ae065d97f57c2295c1`

# [中文] ### 用途: - 根据当前报告 ID 获取相关推荐的其他报告 - 通常用于报告详情页底部的"相关推荐"模块 ### 参数: - report_id: 当前正在查看的报告 ID，从 fetch_report_search 或 fetch_insight_recommend 获取 ### 返回: - 相关推荐的报告列表（含 ID、标题、封面、发布时间等） # [English] ### Purpose: - Get related insight recommendations based on a current report ID - Typically used for th

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_97f7f17a2d8e742700caccb6`

# [中文] ### 用途: - 获取热度飙升的搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 热度飙升的搜索榜 # [English] ### Purpose: - Get the sear

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_989eed8439491e1e5d0971da`

音乐作品推荐/Music Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_98b1091f42fe908ccb1184d1`

# [中文] ### 用途: - 按关键词搜索视频（V3 版本），支持发布时间、视频类型、时长三维筛选。 - 结果除视频基础信息外，还带播放量、点赞数、作者粉丝数等运营指标，适合做内容选题与竞品分析。 ### 备注: - 不支持翻页，返回的是当前筛选条件下的一批结果。 - 三个筛选参数都是可选的，全部留默认值即为不限。 ### 参数: - query: 搜索关键词（必填），如 "美食" - date_type: 发布时间筛选，默认 0=不限 - 可选值：0=不限, 3=近3天, 7=近7天, 30=近一个月 - label_type: 视频类型（精选标签），默认 0=不限 - 可选值：0=不限

- Risk: `write`
- Parameters: `[{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":false}]`

## `mcp_98f6831af41c394cc65a06a4`

# [中文] ### 用途: - 获取抖音创作者中心配置信息 ### 返回: - 创作者中心配置数据 # [English] ### Purpose: - Get Douyin creator material center configuration ### Return: - Creator material center config data

- Risk: `read`
- Parameters: `[]`

## `mcp_9909f98572bbd5c112dad42b`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息，包含性别，年龄，直播等级，直播间牌子 ### 说明： - 性别：1为男，2为女，0为未知，在live_user字段中。 - 年龄：在user字段中，-1为未知。 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information,

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_999d7711528c14dfa8cdbb9d`

# [中文] ### 用途: - 使用接口网址生成A-Bogus参数，提交的URL不能带有a_bogus参数，同时a_bogus参数与请求头中的User-Agent有关，需要一起提交和请求。 ### 参数: - url: API链接，请去除url中的原本的a_boogus参数(如有)。 - data: 请求载荷，只有在POST请求中才需要提交，GET请求中使用空字符串即可。 - user_agent: user-agent，需要提交你请求头中的User-Agent，该值参与a_bogus参数的计算。 - index_0: 加密明文列表的第一个值，无特殊要求，默认为0，不要随意修改。 - ind

- Risk: `write`
- Parameters: `[{"name":"data","type":"string","required":true},{"name":"index_0","type":"integer","required":false},{"name":"index_1","type":"integer","required":false},{"name":"index_2","type":"integer","required":false},{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_9a073acb27b4f647fe0953d1`

获取星图IP日历行业列表/Get IP Activity Industry List

- Risk: `read`
- Parameters: `[]`

## `mcp_9a399f2f48be03a3576cafee`

# [中文] ### 用途: - 获取用户粉丝列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_9b339e895e8aaff5a2297ceb`

# [中文] ### 用途: - 获取粉丝兴趣作者 20个用户 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝兴趣作者 20个用户 # [English] ### Purpose: - Get the fan interest author 20 users ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest author 20 users

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_9ecf0ca4f22fc73ba8a7717c`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 此接口稳定性可能不如 V1版本，作为备用接口。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_9f52bb3afac19f3bd4285578`

短剧作品/Series Video

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"integer","required":true},{"name":"count","type":"integer","required":true},{"name":"offset","type":"integer","required":true}]`

## `mcp_a0babd434c316383b48cbe31`

# [中文] ### 用途: - 获取指定垂类下创作热门话题 ### 参数: - tag_id: 垂类ID（同 fetch_item_query 的 category_id） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期 "1"/"3"/"7" - end_date: 结束日期。**仅当 period=7 时必须为周日**，period=1/3 时可为任意日期 - rank_type: 排序类型，"index"=指数, "ri

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"rank_type","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_a1e2e89e10e6f8fadb6cc7d5`

# [中文] ### 用途: - 按标题/关键词搜索 DOU+ 视频，支持游标翻页 ### 参数: - keyword: 视频标题/关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 12 ### 返回: - 匹配的视频列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ videos by title/keyword, with cursor pagination ### Parameters: - keyword: Video title or keyword (requ

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_a1e9760944c03fbd88a65760`

# [中文] ### 用途: - 获取指定垂类下**消费者**人群画像（即"观看该垂类视频的用户"画像） - 与 fetch_content_author_portrait 互为补充：一个看作者，一个看观众 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 per

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_a376021e69138d9f1c43ebce`

获取投稿作品列表/Fetch item list

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"any","required":false},{"name":"end_time","type":"integer","required":true},{"name":"fields","type":"string","required":false},{"name":"need_cooperation","type":"boolean","required":false},{"name":"need_long_article","type":"boolean","required":false},{"name":"order_by","type":"integer","required":false},{"name":"start_time","type":"integer","required":true}]`

## `mcp_a3eed415a4452d834c52af37`

# [中文] ### 用途: - 获取抖音创作者热门道具榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_a501596b3b112e71a25d9292`

# [中文] ### 用途: - 获取搜索用户名或抖音号 ### 参数: - keyword: 搜索的用户名或抖音号 - cursor: 游标，默认空 ### 返回: - 搜索结果 # [English] ### Purpose: - Get the search username or Douyin number ### Parameters: - keyword: Search username or Douyin number - cursor: Cursor, default empty ### Return: - Search result

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":true},{"name":"keyword","type":"string","required":true}]`

## `mcp_a6dfd384f8b818bd5091325d`

# [中文] ### 用途: - 搜索 DOU+ 直播间，支持按抖音号或抖音昵称搜索，支持游标翻页 ### 参数: - keyword: 抖音号 或 抖音昵称（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 匹配的直播间列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ live rooms by Douyin ID or nickname, with cursor pagination ### Parameters: - keyword: Douyi

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_a957cae7b8afafafff5e788a`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 支持通过粉丝数量、用户类型进行筛选查询。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） - douyin_user_fans: 粉丝数量筛选 - 为空: 不限 - "0_1k": 1000以下 - "1k_1w": 1000到1万 - "1w_10w": 1万到10万 - "10w_

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"douyin_user_fans","type":"string","required":false},{"name":"douyin_user_type","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_aa6e54b1fc8f332cd261aad7`

获取创作者粉丝画像分布/Get Author Fans Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_aaf6b3d4e48f385ba33aa939`

获取kol数据概览V1/Get kol Data Overview V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"_type","type":"string","required":true},{"name":"flowType","type":"integer","required":true},{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":false}]`

## `mcp_aaf866280f57928023202df6`

生成短链接

- Risk: `read`
- Parameters: `[{"name":"target_url","type":"string","required":true}]`

## `mcp_ad65c1b2808567270b7b6a4f`

# [中文] ### 用途: - 获取垂类内容标签 ### 参数: - 无 ### 返回: - 垂类内容标签 ### 注意: - 该接口用于获取垂类内容标签，用于 tags/query_tag 参数构建 ### 示例: 已知顶级垂类内容标签 `美食`，它的顶级垂类id为 `628`；`美食` 的子垂类标签 `品酒教学`，它的子垂类id为 `62802`。 那么构建标签查询参数为 `{"value": 628, "children": [{"value": 62802}]}` 如果需要多个子垂类标签，所有的美食子垂类标签为 `{"value":628,"children":[{"value":6

- Risk: `read`
- Parameters: `[]`

## `mcp_ad6cd4ad1b2f1d09ed8a11c6`

# [中文] ### 用途: - 获取指定视频的观众人群画像 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 观众性别分布、年龄分布、地域分布、兴趣分布等画像数据 # [English] ### Purpose: - Get the audience portrait for a video ### Parameters: - item_id: Video ID (Douyin aweme id, numeric s

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_ade68fc5f69fd8a3ae846a8d`

# [中文] ### 用途: - 获取抖音音乐热榜数据 ### 参数: - chart_type: 榜单类型，默认值为'hot'，支持下面的值： - 'hot': 热门榜 - 'trending': 飙升榜 - 'original': 原创榜 - cursor: 游标，默认值为'0'，用于分页获取数据，每次请求后会返回下一个游标值，并且通过 `has_more` 字段指示是否有更多数据可供获取。 ### 返回: - 音乐热搜榜数据 # [English] ### Purpose: - Get Douyin music hot search list data ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"chart_type","type":"string","required":false},{"name":"cursor","type":"string","required":false}]`

## `mcp_af338837e05596488b7422fb`

# [中文] ### 用途: - 获取指定关键词在抖音指数中的有效日期范围 ### 参数: - keyword_list: 关键词列表，多个关键词用逗号分隔，如 "美食,旅游" ### 返回: - 各关键词可查询的起止日期 # [English] ### Purpose: - Get valid date range for specified keywords in Douyin Index ### Parameters: - keyword_list: Keyword list, comma separated, e.g. "美食,旅游" ### Return: - Queryable s

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_af9c55f1e085daf93cce3c08`

# [中文] ### 用途: - 获取粉丝近3天搜索词 10个搜索词 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天搜索词 10个搜索词 # [English] ### Purpose: - Get the fan interest search term in the last 3 days 10 search terms ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest search term in the last 3 days 10 search terms

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_b084e4356cf62ea7568de924`

获取kol连接用户V1/Get kol Link Struct V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_b1c438b22b1679d78a0b41ff`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 # [E

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_b40095ed846f93126d430a4f`

抖音号转星图达人ID/Get Xingtu Author ID by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_b49a26d27ad420ade6f879eb`

# [中文] ### 用途: - 获取抖音创作者活动列表数据 ### 参数: - start_time: 开始时间戳 - end_time: 结束时间戳 ### 返回: - 创作者活动列表数据 # [English] ### Purpose: - Get Douyin creator activity list data ### Parameters: - start_time: Start timestamp - end_time: End timestamp ### Return: - Creator activity list data # [示例/Example] start_time

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"integer","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_b4eb5e938bd537b8123a83b8`

获取单个视频播放量(含详情)/Get Item Play Count

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_b56eca985d8d98932a07f071`

获取kol转化视频展示V1/Get kol Convert Video Display V1

- Risk: `read`
- Parameters: `[{"name":"detailType","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"page","type":"integer","required":true}]`

## `mcp_b673d184a76c4c0aefd53408`

# [中文] ### 用途: - 获取低粉爆款榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_b695dbe10bc9594151e58787`

# [中文] ### 用途: - 直播间号转房间号 ### 参数: - webcast_id: 直播间号 ### 返回: - 房间号 # [English] ### Purpose: - Webcast id to room id ### Parameters: - webcast_id: Webcast id ### Return: - Room id # [示例/Example] "webcast_id = "775841227732"

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_b843b1d6fe1a91a0d47c29cf`

# [中文] ### 用途: - 获取账号作品分析 ### 参数: - sec_uid: 用户sec_id - day: 天数，默认7天 ### 返回: - 账号作品分析 # [English] ### Purpose: - Get the account work analysis ### Parameters: - sec_uid: User sec_id - day: Number of days, default 7 days ### Return: - Account work analysis

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_b9083ab548f791b974283e7a`

# [中文] ### 用途: - 生成真实msToken ### 返回: - msToken # [English] ### Purpose: - Generate real msToken ### Return: - msToken

- Risk: `read`
- Parameters: `[]`

## `mcp_ba11f56d05a0b817d6390690`

# [中文] ### 用途: - 获取账号粉丝数据趋势 ### 参数: - sec_uid: 用户sec_id - option: 选项，2 新增点赞量 3 新增作品量 4 新增评论量 5 新增分享量 - date_window: 数据点粒度(小时)，可选 1/24，代表每小时一个点/每天一个点，默认24 ### 返回: - 账号粉丝数据趋势 # [English] ### Purpose: - Get the account fan data trend ### Parameters: - sec_uid: User sec_id - option: Option, 2 New like 3

- Risk: `read`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_ba5443c70cb60c161c0ddd2b`

获取作品观看趋势分析/Fetch item watch trend analysis

- Risk: `write`
- Parameters: `[{"name":"analysis_type","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_bb124d5737fb26131d2a0c38`

获取用户合辑作品数据/Get user mix video data

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_bb79a6684f85d3a186c7201d`

# [中文] ### 用途: - 获取抖音 App 中经验（知识/教程）内容的搜索结果。 - 支持通过关键词检索，与经验类内容（如攻略、教程、分享等）相关的视频信息。 ### 备注: - 此接口专注于经验类内容，不包含其他类型的内容。 - 初次请求时，`cursor` 应传 0，`search_id` 传空字符串，翻页时使用上次响应返回的 cursor 和 search_id。 - 返回的结果中包含视频详情、作者信息、背景音乐、话题标签、播放地址、互动数据等。 ### 参数: - keyword: 搜索关键词，例如 "游戏攻略" - cursor: 翻页游标，首次请求传 0 - sort_ty

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_bc355690e22f0ad3b695fa63`

获取创作者受众画像分布/Get Author Audience Distribution

- Risk: `read`
- Parameters: `[{"name":"link_type","type":"any","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_bc3c502fc60532c2d6b7c7d3`

获取创作者内容热词/Get Author Content Hot Keywords

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"keyword_type","type":"integer","required":false}]`

## `mcp_bcf988cff617e19cde4d57b8`

# [中文] ### 用途: - 获取抖音指数各类型数据的最新有效日期 ### 返回: - 包含关键词、品牌、话题等维度的日/周/月最新可用日期 # [English] ### Purpose: - Get the latest valid dates for each data type in Douyin Index ### Return: - Contains latest available daily/weekly/monthly dates for keyword, brand, topic dimensions

- Risk: `read`
- Parameters: `[]`

## `mcp_bd95e9068b0118740c2d0c16`

# [中文] ### 用途: - 获取指定垂类下**创作者**人群画像（即"发布该垂类视频的作者"画像） - 用于了解某垂类创作者的性别、年龄、地域、活跃时段等特征 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 创作者画

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_befe124810d237b2795f09bc`

# [中文] ### 用途: - 根据分享口令获取分享信息，比如抖音文章的分享口令提取分享人信息和文章ID等然后再去请求单一作品数据接口获取文章内容。 ### 参数: - share_code: 分享口令 ### 返回: - 分享信息，包含分享人信息和文章ID等 # [English] ### Purpose: - Get share info by share code, such as extracting sharer information and article ID from Douyin article share code, and then requesting a sing

- Risk: `read`
- Parameters: `[{"name":"share_code","type":"string","required":true}]`

## `mcp_bf42fcb00256f95af8307a28`

# [中文] ### 用途: - 获取品牌主动排行周榜数据 ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌在该周的主动排行数据 # [English] ### Purpose: - Get brand initiative rank weekly data ### Parameters: - brand_name/: Brand info - start_date/end_date: Date range in YYYYMMDD - app_name: Platform #

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_c025d985574c9e6036b29594`

获取kol热词分析内容V1/Get Author Content Hot Comment Keywords V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_c03e5d76b3f49e110ed19c7f`

获取作品弹幕分析/Fetch item bullet analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_c1ed6e233ac71782dead19c5`

# [中文] ### 用途: - 使用Short ID获取用户信息 ### 参数: - short_id: 用户Short ID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by Short ID ### Parameters: - short_id: User Short ID ### Return: - User information # [示例/Example] short_id = "114131058"

- Risk: `read`
- Parameters: `[{"name":"short_id","type":"string","required":true}]`
