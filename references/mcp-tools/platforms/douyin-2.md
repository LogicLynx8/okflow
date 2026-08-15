# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-2`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_4180cea24a720b6cff72c82f`

# [中文] ### 用途: - 获取品牌的有效信息和品牌指数数据 ### 参数: - keyword_list: 品牌名称列表，逗号分隔 ### 返回: - 品牌指数、可用日期范围等 # [English] ### Purpose: - Get brand valid info and brand index data ### Parameters: - keyword_list: Brand name list, comma separated ### Return: - Brand index, available date range, etc. # [示例/Example] keyw

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_41ef957796ebe965efa3970e`

根据抖音用户ID获取游客星图kolid/Get XingTu kolid by Douyin User ID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_422481c789aae283fc3c7ff1`

# [中文] ### 用途: - 获取单个热点的完整分析数据，一次请求覆盖热点详情页的全部模块 ### 参数: - topic_name: 热点名称，可从 fetch_current_hot_topic 的结果中获取 ### 返回: - trend_item: 热点指数趋势（按时间点的指数值） - content_item: 热门内容列表（视频标题、链接、封面、作者、点赞/评论数等） - play_rank_author_item: 相关达人榜（按播放量排序） - digg_rank_author_item: 相关达人榜（按点赞数排序） - fans_rank_author_item: 相关达

- Risk: `read`
- Parameters: `[{"name":"topic_name","type":"string","required":true}]`

## `mcp_4243b29e69b99bb9703a3fb5`

获取kol连接用户来源V1/Get kol Touch Distribution V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_435c6734c7c46131423622cf`

# [中文] ### 用途: - 使用Short ID获取用户信息 ### 参数: - short_id: 用户Short ID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by Short ID ### Parameters: - short_id: User Short ID ### Return: - User information # [示例/Example] short_id = "114131058"

- Risk: `read`
- Parameters: `[{"name":"short_id","type":"string","required":true}]`

## `mcp_43cec8db886d1ff70289ebfb`

# [中文] ### 用途: - 获取作品评论分析-词云权重 ### 参数: - aweme_id: 作品id ### 返回: - 作品评论分析-词云权重 # [English] ### Purpose: - Get the work comment analysis word cloud weight ### Parameters: - aweme_id: Work id ### Return: - Work comment analysis word cloud weight

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_443f463414add52210c689ee`

# [中文] ### 用途: - 将抖音 uid（纯数字）转换为抖音指数 API 内部使用的加密 user_id - 达人相关接口（如 fetch_daren_similar_users、fetch_daren_great_item_mile_info 等） 已自动处理此转换，通常无需手动调用本接口 - 本接口仅用于调试或需要直接拿到加密 user_id 的特殊场景 ### 参数: - uid: 抖音 uid，纯数字字符串 ### 返回: - uid: 原始输入的抖音 uid - user_id: 加密后的 user_id # [English] ### Purpose: - Convert

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_459fd5d8ccef2b0a842be33b`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`

## `mcp_45b20d1137e2d9e23727b0a7`

# [中文] ### 用途: - 获取上升热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 上升热点榜 # [English] ### Purpose: - Get the rising hot list ### Parameters: - page: Page number - page_size: Number of ite

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_463f54f546d6fa0ec1f7374b`

导出投稿作品列表/Download item list

- Risk: `write`
- Parameters: `[{"name":"max_cursor","type":"integer","required":true},{"name":"min_cursor","type":"integer","required":true},{"name":"need_long_article","type":"boolean","required":false},{"name":"type_filters","type":"array","required":false}]`

## `mcp_473f7f62d83688852399ee21`

# [中文] ### 用途: - 获取当前热门搜索关键词列表 ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 关键词名称、搜索指数、增长率等 # [English] ### Purpose: - Get current hot search keywords list ### Parameters: - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Keyword name, search index, growth rate, etc.

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false}]`

## `mcp_494a63cc152d8f6d50373915`

获取作品观看趋势分析/Fetch item watch trend analysis

- Risk: `write`
- Parameters: `[{"name":"analysis_type","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_4a791cb301100be9c5ccc66f`

# [中文] ### 用途: - 提取列表作品id（最多支持20个链接） ### 参数: - url: 作品链接列表 ### 返回: - 作品id列表 # [English] ### Purpose: - Extract list video id (supports up to 20 links) ### Parameters: - url: Video link list ### Return: - Video id list # [示例/Example] ```json { "urls":[ "0.53 02/26 I@v.sE Fus:/ 你别太帅了郑润泽# 现场版live # 音乐节

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_4af77f72605bc5fd7363adf7`

# [中文] ### 用途: - 直播间号转房间号 ### 参数: - webcast_id: 直播间号 ### 返回: - 房间号 # [English] ### Purpose: - Webcast id to room id ### Parameters: - webcast_id: Webcast id ### Return: - Room id # [示例/Example] "webcast_id = "775841227732"

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_4b0fbb431287c0c06b879c3e`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`

## `mcp_4b2aac84e6435a5af7351761`

# [中文] ### 用途: - 获取达人粉丝分析数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝性别分布、年龄分布、地域分布、活跃时间等 # [English] ### Purpose: - Get daren fans analysis data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Fans gender, age, region distribution, act

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_4da303c96a536794d6e1f2b9`

获取直播场次历史记录/Fetch live room history list

- Risk: `write`
- Parameters: `[{"name":"download","type":"integer","required":false},{"name":"end_date","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"need_living","type":"integer","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_4e268af6b7305fae8b83bf60`

# [中文] ### 用途: - 获取抖音指数支持的所有地区列表 ### 返回: - 省份和城市的层级结构列表，可用于关键词指数的地区筛选参数 # [English] ### Purpose: - Get all supported area list for Douyin Index ### Return: - Hierarchical list of provinces and cities, used as region filter parameter in keyword index APIs

- Risk: `read`
- Parameters: `[]`

## `mcp_4e986d5863e30350c8b74824`

# [中文] ### 用途: - 获取抖音 App 中音乐内容的搜索结果。 - 支持关键词、排序方式、筛选条件等。 ### 备注: - 本接口专注于音乐类内容搜索，不包含其他类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容包含音乐基本信息、作者信息、封面、播放地址、标签等。 ### 参数: - keyword: 搜索关键词，例如 "游戏背景音乐" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_4f1664f0bc31bca23f4225b6`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_4fb94f9ddfebb213ad6a4ba9`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword ### Return: - Share link # [示例/Example] keyword = "雷军"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_5067d9fd851a3615565d8dde`

获取用户合辑作品数据/Get user mix video data

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_5086820c92523a93d62964ed`

获取创作者账号诊断/Fetch author diagnosis

- Risk: `write`
- Parameters: `[]`

## `mcp_50ec628dbcaefdc58b54584b`

# [中文] ### 用途: - 获取高完播率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_514cfab03b9dc7eca7a293c5`

提取列表直播间号/Extract list webcast id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_51c6a2e934871b5943bad7e4`

# [中文] ### 用途: - 获取指定垂类下**消费者**人群画像（即"观看该垂类视频的用户"画像） - 与 fetch_content_author_portrait 互为补充：一个看作者，一个看观众 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 per

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_51e37bafb3dcc606be087b78`

# [中文] ### 用途: - 获取话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_51e7e6b7c7835984c940c81e`

# [中文] ### 用途: - 获取抖音创作者活动列表数据 ### 参数: - start_time: 开始时间戳 - end_time: 结束时间戳 ### 返回: - 创作者活动列表数据 # [English] ### Purpose: - Get Douyin creator activity list data ### Parameters: - start_time: Start timestamp - end_time: End timestamp ### Return: - Creator activity list data # [示例/Example] start_time

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"integer","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_53887ce3a16efa6e973da765`

# [中文] ### 用途: - 获取批量用户信息，最多支持50个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多50个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 50 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 50 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_54e1a659617e7ff007cac41a`

# [中文] ### 用途: - 获取抖音实时热点和飙升热点排行榜 ### 返回: - 热点名称、热点指数、排名变化等信息 # [English] ### Purpose: - Get Douyin real-time hot topics and trending topics leaderboard ### Return: - Topic name, topic index, rank change and other information

- Risk: `read`
- Parameters: `[]`

## `mcp_54f76f3ec9a3e05852662727`

获取作品垂类标签/Fetch item analysis involved vertical

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_5585ba01576da9ecb7fffeea`

获取用户直播流数据/Get user live video data

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_55c18d382a9c7767a52021c8`

获取内容趋势指南/Get Content Trend Guide

- Risk: `read`
- Parameters: `[]`

## `mcp_55e56ead2f0ef8361e93791d`

# [中文] ### 用途: - 获取抖音品牌热榜具体分类数据 ### 参数: - category_id: 分类id ### 返回: - 品牌热搜榜具体分类数据 # [English] ### Purpose: - Get Douyin brand hot search list detail data ### Parameters: - category_id: Category id ### Return: - Hot brand search list detail data # [示例/Example] category_id = 10

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true}]`

## `mcp_56275b3c15dfe8d13967a995`

获取创作者评论热词/Get Author Hot Comment Tokens

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"num","type":"integer","required":false},{"name":"without_emoji","type":"boolean","required":false}]`

## `mcp_5728fb348936da4403a92826`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 此接口稳定性可能不如 V1版本，作为备用接口。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_592ef959d9514f62e302e127`

获取星图IP日历活动列表/Get IP Activity List

- Risk: `write`
- Parameters: `[{"name":"category_list","type":"any","required":false},{"name":"industry_id_list","type":"any","required":false},{"name":"query_end_time","type":"string","required":true},{"name":"query_start_time","type":"string","required":true},{"name":"status_list","type":"any","required":false}]`

## `mcp_593f444afdcb7359deb24db1`

# [中文] ### 用途: - 获取活动日历 ### 参数: - city_code: 城市编码，从城市列表获取，空为全部 - category_code: 热点榜分类编码，从热点榜分类获取，空为全部 - end_date: 快照结束时间 格式10位时间戳 - start_date: 快照开始时间 格式10位时间戳 ### 返回: - 活动日历 # [English] ### Purpose: - Get the activity calendar ### Parameters: - city_code: City code, get from city list, empty for al

- Risk: `write`
- Parameters: `[{"name":"category_code","type":"string","required":false},{"name":"city_code","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"start_date","type":"integer","required":false}]`

## `mcp_5a9c08ef0ca74b18bd2fe981`

# [中文] ### 用途: - 获取相关作品推荐数据 ### 参数: - aweme_id: 作品id - refresh_index: 翻页索引，默认为1，然后每次增加1用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 作品数据 # [English] ### Purpose: - Get related posts recommendation data ### Parameters: - aweme_id: Video id - refresh_index: Paging index, default is 1, then increase by 1

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_5b38c03059c845695ef15525`

# [中文] ### 用途: - 获取单个作品数据 V1，若此接口失效，请使用 `/fetch_one_video_v2` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id - need_anchor_info: 是否需要锚点信息，默认为False，开启后会看到一些有关视频的锚点信息，如地理位置，商户信息，商品橱窗等，可能会增加接口响应时间。 - 如果不需要锚点信息，建议保持默认值False，如果接口报错，可以尝试关闭此参数。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V1, if

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"need_anchor_info","type":"boolean","required":false}]`

## `mcp_5b8a51d879dec344d0a93b94`

# [中文] ### 用途: - 搜索抖音指数下的趋势报告，支持类型/产品/年份/关键词四维筛选 ### 参数: - current_page / page_size: 分页参数（字符串） - type: 报告类型，空字符串表示全部 - "行业洞察" / "产品洞察" / "用户洞察" / "趋势洞察" - business: 所属产品（逗号分隔），可选值： - "巨量引擎", "今日头条", "抖音", "西瓜视频", "抖音电商", "仕小禄", "其他" - report_time: 发布年份（逗号分隔），如 "2024,2023" - search: 报告标题关键词 - categor

- Risk: `write`
- Parameters: `[{"name":"business","type":"string","required":false},{"name":"category","type":"string","required":false},{"name":"current_page","type":"string","required":false},{"name":"page_size","type":"string","required":false},{"name":"report_time","type":"string","required":false},{"name":"search","type":"string","required":false},{"name":"type","type":"string","required":false}]`

## `mcp_5bed6ff1cbd3dd56c4074802`

# [中文] ### 用途: - 获取视频搜索 `fetch_item_query` 接口支持的所有筛选选项取值 - 包含：垂类(categories)、时长(duration_types)、类型(label_types)、发布时间(date_types) - 调用 `fetch_item_query` 前可先查询本接口获取所需的 ID ### 返回: - categories: 垂类列表，每项包含 id / name / name_en，id 用于 category_id 参数 - duration_types: 时长列表，每项包含 id / name / name_en，id 用于 dur

- Risk: `read`
- Parameters: `[]`

## `mcp_5ca38e08d25bbb9829353b95`

# [中文] ### 用途: - 获取首页推荐的趋势报告列表 ### 返回: - 推荐报告列表（含报告ID、标题、封面、发布时间等） # [English] ### Purpose: - Get the list of recommended trend insight reports on the home page

- Risk: `read`
- Parameters: `[]`

## `mcp_5ddf5a915c460bf2701accda`

# [中文] ### 用途: - 获取多个关键词的指数解读数据（综合指数、搜索指数、内容指数等） - 建议配合 fetch_multi_keyword_hot_trend 一起使用 ### 参数: - keyword_list: 关键词列表，逗号分隔 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔，留空表示全国 ### 返回: - 关键词综合指数、搜索指数、内容指数解读 # [English] ### Purp

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_60520b24e6fa46079f0e44e3`

抖音视频频道数据/Douyin video channel data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false},{"name":"tag_id","type":"integer","required":true}]`

## `mcp_64f64e300ca0fc4650956e79`

批量获取创作者信息/Multi Get Author Info

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_65052dbf69775de13ec05f22`

# [中文] ### 用途: - 获取粉丝近3天搜索词 10个搜索词 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天搜索词 10个搜索词 # [English] ### Purpose: - Get the fan interest search term in the last 3 days 10 search terms ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest search term in the last 3 days 10 search terms

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_65753d3554fdfa1d7b82c69e`

二次元作品推荐/Anime Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_65fbbd25858d01e12913ebbe`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 不支持粉丝数量、用户类型筛选查询。 ### 备注: - 初次请求 `cursor` 传 0。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） ### 请求体示例： ```json payload = { "keyword": "人工智能", "cursor": 0 } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `cursor`: 下一页游

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_676f261027e1ef74b3aaf774`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定用户主页。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法跳转到指定用户主页。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified user profile ### Parameters: - uid: User id - sec_uid: User

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_684c6da25c4daf8615645ff7`

# [中文] ### 用途: - 在 DOU+ 投放场景下搜索抖音用户，支持抖音号 / ID / 昵称 - 支持游标翻页 ### 参数: - keyword: 搜索关键词，支持抖音号 / ID / 昵称（必填） - count: 每页数量，默认 20 - cursor: 翻页游标，首页传 0，后续传上一页响应里返回的 cursor ### 返回: - 匹配的用户列表（含昵称、抖音号、sec_uid、粉丝数等），以及 cursor / has_more 翻页信息 # [English] ### Purpose: - Search Douyin users in the DOU+ delivery

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_68527e06e0bcdb99db5fa99c`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_694dfd550f9401b3cdbfd870`

# [中文] ### 用途: - 按关键词搜索正在直播的直播间（V3 版本），返回主播资料、直播标题、封面、观众数与拉流地址等。 - 支持内容类关键词（如 "游戏"），响应结构与综合搜索 V3 一致（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset` 与 `search_id` 原样传回，并把 `page` 加 1。 - `data.pagination.has_more` 为

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_69c0a1e85596d474117a0e29`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_6a3f114c5dc836c174ba4c3d`

获取作品观众其他数据分析/Fetch item audience others analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_6b86fdf47ed440233fe960cd`

# [中文] ### 用途: - 获取达人在指定时间范围内的热门视频列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 注意: - **日期范围不能超过30天**，否则接口会报错 ### 返回: - 达人热门视频列表（播放量、点赞数等） # [English] ### Purpose: - Get daren's top video list in a specified time range ### Pa

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_6da2f60c51ef229cc469928f`

# [中文] ### 用途: - 按关键词搜索视频（V5 版本），只返回视频内容。 - 翻页参数与综合搜索 V3 一致，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagination.has_more` 为 0 表示已经到最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_6e726b75ad8a7be048b08769`

# [中文] ### 用途: - 获取指定作品的弹幕列表，支持管理和筛选弹幕 ### 参数: - item_id: 作品ID (必需参数，从作品链接或API获取) - count: 每页弹幕数量 (建议20，范围1-100) - offset: 偏移量 (分页使用，起始位置) - order_type: 排序类型 (1=时间排序, 2=其他排序) - is_blocked: 是否获取被屏蔽的弹幕 (false=正常弹幕, true=被屏蔽弹幕) ### 返回: - 作品弹幕列表数据 # [English] ### Purpose: - Get danmaku list for specifie

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"is_blocked","type":"boolean","required":false},{"name":"item_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"order_type","type":"integer","required":false}]`

## `mcp_6e83c65e37d0f0f19625e927`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the secon

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_6f79add9086a4f6a4e74a600`

# [中文] ### 用途: - 获取抖音 App 中多种类型（视频、用户、音乐、话题等）的综合搜索结果。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容丰富，适合搭建搜索聚合页、推荐页等场景。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发布时间筛选 - `0`: 不限 - `1`: 最近

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_6f7a6aa64b56f6e4b1250dc3`

获取作品弹幕分析/Fetch item bullet analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_6fbf244cfeb5df6003dbdf93`

获取加密图片解析/Get Sign Image

- Risk: `read`
- Parameters: `[{"name":"durationTS","type":"integer","required":false},{"name":"format","type":"string","required":false},{"name":"uri","type":"string","required":true}]`

## `mcp_70cf24ffe0554b3e4ba69653`

# [中文] ### 用途: - 获取短剧视频列表 ### 参数: - series_id: 短剧id - cursor: 游标，用于翻页，第一页为0，第二页通常为count的值（如15）。 ### 返回: - 短剧视频列表数据 ### 备注: - 该接口返回短剧中的所有视频列表 - 响应中的 aweme_list 包含短剧的各集视频信息 - has_more 字段表示是否还有更多数据 # [English] ### Purpose: - Get series/playlet video list ### Parameters: - series_id: Series id - cursor:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"series_id","type":"string","required":true}]`

## `mcp_70fed8f82b40158b3ee1e5ce`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_7148d6fedea92add85868476`

# [中文] ### 用途: - 按分类搜索/筛选 DOU+ 达人 ### 参数: - name: 达人分类名/搜索词（取自"获取达人分类"接口）；留空为全部 - page: 页码，从 0 开始，默认 0 - limit: 每页数量，默认 20 ### 返回: - 达人列表 # [English] ### Purpose: - Search & filter DOU+ talents by category ### Parameters: - name: Category name or keyword (from the talent category endpoint); empty fo

- Risk: `write`
- Parameters: `[{"name":"limit","type":"any","required":false},{"name":"name","type":"any","required":false},{"name":"page","type":"any","required":false}]`

## `mcp_716c8ca23e89206fdab8f31e`

# [中文] ### 用途: - 获取用户粉丝列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_720211b1891ce960d49aa6e2`

# [中文] ### 用途: - 按关键词搜索视频（V3 版本），支持发布时间、视频类型、时长三维筛选。 - 结果除视频基础信息外，还带播放量、点赞数、作者粉丝数等运营指标，适合做内容选题与竞品分析。 ### 备注: - 不支持翻页，返回的是当前筛选条件下的一批结果。 - 三个筛选参数都是可选的，全部留默认值即为不限。 ### 参数: - query: 搜索关键词（必填），如 "美食" - date_type: 发布时间筛选，默认 0=不限 - 可选值：0=不限, 3=近3天, 7=近7天, 30=近一个月 - label_type: 视频类型（精选标签），默认 0=不限 - 可选值：0=不限

- Risk: `write`
- Parameters: `[{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":false}]`

## `mcp_72a16f77debc61a7e91e98bc`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容（V2版本接口）。 - 相较于 V1，返回字段更加详细，包括作者资料、视频多清晰度播放源、标签列表等。 ### 备注: - 初次请求时 `cursor` 传入0，`search_id`传空字符串。 - 返回的视频内容丰富，可用于推荐展示、内容抓取、智能分析等应用场景。 ### 参数: - keyword: 搜索关键词，如 "机器人" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_7328b96fd11d40474cae9bf7`

# [中文] ### 用途: - 获取品牌主动排行周榜数据 ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌在该周的主动排行数据 # [English] ### Purpose: - Get brand initiative rank weekly data ### Parameters: - brand_name/: Brand info - start_date/end_date: Date range in YYYYMMDD - app_name: Platform #

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_736f587cdc2fc717e735d3dc`

# [中文] ### 用途: - 获取抖音创作者平台热门课程数据或精选专题课程 ### 参数: - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) - category_id: 精选专题分类ID (不传则获取热门课程，传入则获取指定分类的精选专题) 可选值: - 6976547830546582816: 知识品类 - 6976547923849006336: 生活品类 - 6976547940311633165: 娱乐品类 - 6976547972108635404:

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_73eaa74b424e6ccc03992a60`

获取作品总览数据/Fetch item overview data

- Risk: `write`
- Parameters: `[{"name":"fields","type":"any","required":false},{"name":"ids","type":"string","required":true}]`

## `mcp_74c77ec20bc10838b529c977`

获取投稿分析概览/Fetch item analysis overview

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_74d1b375be14218d637bb85f`

获取kol热词分析内容V1/Get Author Content Hot Comment Keywords V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_75c5bec508b43f64480feb6d`

达人搜索/Search Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"integer","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_76985cb22cd90b4c41aafb95`

# [中文] ### 用途: - 获取抖音创作者热门道具榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_77826a6972577d79feb2dbeb`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息，包含性别，年龄，直播等级，直播间牌子 ### 说明： - 性别：1为男，2为女，0为未知，在live_user字段中。 - 年龄：在user字段中，-1为未知。 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information,

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_7827084f14c4e31523ac2799`

批量获取视频信息 V1/Batch Get Video Information V1

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_7883389837a283a82aa237d0`

获取用户主页作品数据/Get user homepage video data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_type","type":"string","required":false},{"name":"max_cursor","type":"string","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_78d6d027114c40f7fd8b333e`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_7bde2e79463c437d896da08c`

批量获取视频数据(播放量/点赞等)/Multi Get Item Stats

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`
