# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-2`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_4186a807f27bf48e626333cf`

# [中文] ### 用途: - 按分类搜索/筛选 DOU+ 达人 ### 参数: - name: 达人分类名/搜索词（取自"获取达人分类"接口）；留空为全部 - page: 页码，从 0 开始，默认 0 - limit: 每页数量，默认 20 ### 返回: - 达人列表 # [English] ### Purpose: - Search & filter DOU+ talents by category ### Parameters: - name: Category name or keyword (from the talent category endpoint); empty fo

- Risk: `write`
- Parameters: `[{"name":"limit","type":"any","required":false},{"name":"name","type":"any","required":false},{"name":"page","type":"any","required":false}]`

## `mcp_41c72568083960d8b9f46e42`

获取内容趋势指南/Get Content Trend Guide

- Risk: `read`
- Parameters: `[]`

## `mcp_4225329f6480585b75dd9eb2`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`

## `mcp_44f319757dc5243f6a30b90e`

获取DOU+ POST请求所需的sec_token/Get DOU+ sec_token for POST requests

- Risk: `write`
- Parameters: `[]`

## `mcp_459b2b1b0a1855ea3892ba20`

提取直播间弹幕/Extract live room danmaku

- Risk: `read`
- Parameters: `[{"name":"danmaku_type","type":"string","required":true},{"name":"live_room_url","type":"string","required":true}]`

## `mcp_4629a3df1ffea83b560378a6`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_475ae8d04225ada10d92cb1c`

获取粉丝画像/Fetch fan portrait

- Risk: `read`
- Parameters: `[{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_481b1ce0d4354396236a0ba6`

# [中文] ### 用途: - 获取搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 搜索榜 # [English] ### Purpose: - Get the search list ##

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_4850446bc33b1c146a854d49`

# [中文] ### 用途: - 获取抖音 App 中多种类型（视频、用户、音乐、话题等）的综合搜索结果。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容丰富，适合搭建搜索聚合页、推荐页等场景。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发布时间筛选 - `0`: 不限 - `1`: 最近

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_4866dcd5be8d0ea2110d0d4f`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)搜索的结果，使用 V2 版本 API。 - 支持关键词搜索，返回匹配的话题详情，包括话题名称、话题封面、浏览量、参与人数等。 ### 备注: - 本接口专注于搜索话题（Challenge/Hashtag）内容，不包含视频或直播等其他类型。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串，后续翻页请使用上一次返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "游戏" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_489e7cf607a49d8d78a63054`

# [中文] ### 用途: - 获取抖音实时热点和飙升热点排行榜 ### 返回: - 热点名称、热点指数、排名变化等信息 # [English] ### Purpose: - Get Douyin real-time hot topics and trending topics leaderboard ### Return: - Topic name, topic index, rank change and other information

- Risk: `read`
- Parameters: `[]`

## `mcp_49237b361d32106d8dc61186`

# [中文] ### 用途: - 获取指定垂类下视频时长分布数据 - 用于了解该垂类创作者偏好的视频时长结构 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 各时长区间（如 0-15 秒/15-60 秒/60-180 秒/大于 180 秒）的视

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_49659fc11f29e35e4821a04b`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)的推荐搜索结果。 - 根据输入的关键词，返回相关的话题建议列表，包含话题名称、浏览量等信息。 ### 备注: - 本接口可用于话题联想推荐场景，如输入关键词实时展示相关热门话题。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 ### 参数: - keyword: 搜索关键词，如 "游戏" ### 请求体示例： ```json payload = { "keyword": "游戏" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `sug_list[]

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_49e310ffdbb511866cdce04b`

获取用户主页作品数据/Get user homepage video data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_type","type":"string","required":false},{"name":"max_cursor","type":"string","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_4b389fbdb6901ea964ef67fe`

# [中文] ### 用途: - 获取品牌热门视频功能可查询的时间范围 - 用于在请求其他品牌相关接口前确定合法的日期边界 ### 参数: - 无 ### 返回: - 时间范围信息（起止日期、周期单位等） # [English] ### Purpose: - Get the queryable time scope for the brand hot videos feature - Used to determine valid date boundaries before calling other brand endpoints ### Parameters: - None ### Re

- Risk: `write`
- Parameters: `[]`

## `mcp_4bfb3d741448f18f3a1ee4c8`

搜索MCN机构列表/Get Demander MCN List

- Risk: `read`
- Parameters: `[{"name":"mcn_name","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_4c720c35736e2cd2d5a6829a`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor - count: Number ### Return: - Comments data # [示例/Example] aweme_id = "7372484719365098803" cur

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_4cd25935f60169570909c414`

# [中文] ### 用途: - 加密用户uid到sec_user_id ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Encrypt user uid to sec_user_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "1673937488185292"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_4e135e84c40c341e4ff8561f`

获取kol转化能力分析V1/Get kol Conversion Ability Analysis V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"kolId","type":"string","required":true}]`

## `mcp_4fa3414e393d298ed2cf17f4`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`

## `mcp_4ff313fe42d8449dd6deebb4`

# [中文] ### 用途: - 获取抖音搜索关键词的联想推荐结果（V2 版本）。 - 根据用户已输入的关键词前缀，返回相关搜索词建议，用于实现搜索框实时补全。 ### 备注: - 返回条数由抖音决定，不支持指定数量。 - `history_words` 为可选项，传入用户此前搜索过的词（英文逗号分隔）会影响联想词排序。 - 相比 V1，V2 直接给出纯词列表 `words`，无需再从原始结构中提取。 ### 参数: - keyword: 已输入的关键词，如 "人工智能" - history_words: 可选，历史搜索词，如 "猫咪,美食" ### 请求体示例： ```json payloa

- Risk: `write`
- Parameters: `[{"name":"history_words","type":"string","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_512b36e8395119e84b2e2dca`

批量获取创作者信息/Multi Get Author Info

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_51509fa7c6c62b946398ef5a`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 （本质上基于 `/fetch_one_video` 接口实现，建议有能力自行获取视频ID以提升接口响应速度） - 返回的视频画质比APP接口高一些，但是响应字段没有APP接口多。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link (Essentially implemented based on the `/fetch_one_video` interface, it i

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_518ddca662920c014e98991d`

# [中文] ### 用途: - 使用UID获取用户信息 ### 参数: - uid: 用户UID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by UID ### Parameters: - uid: User UID ### Return: - User information # [示例/Example] uid = "68141954464"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_5520ed30c0d62f405400f6ca`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_552a616281771b78ea76311b`

# [中文] ### 用途: - 获取指定视频在时间范围内的视频指数趋势数据 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频指数（综合/传播/互动等）随时间变化的趋势数据 # [English] ### Purpose: - Get the video index trend for a video over a date range ### Parameters: - item_id: Video ID (D

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_55d68b0b48a3c23106e5510b`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接列表（最多支持10个链接） ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link list (supports up to 10 links) ### Return: - If the sec_user_

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_562a581a8bcb21eb98edffc6`

获取创作者视频触达分布/Get Author Touch Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_568660686967ec18ebed67cb`

获取优秀行业分类列表/Get Excellent Case Category List

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false}]`

## `mcp_568d5dff65187e94852f485f`

获取短剧演员热榜分类/Get Playlet Actor Rank Catalog

- Risk: `write`
- Parameters: `[]`

## `mcp_575848d545eb46be3a517051`

获取投放过的账号/Get promoted accounts

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"limit","type":"any","required":false}]`

## `mcp_579e0a1a232f790f3db9a1a7`

# [中文] ### 用途: - 获取品牌的趋势线数据（热度随时间变化） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌热度趋势线数据 # [English] ### Purpose: - Get brand trend lines data (popularity over time) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app_n

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_59a59d012f19a8ab566be908`

# [中文] ### 用途: - 获取抖音 App 中搜索关键词的联想推荐结果。 - 根据用户输入的关键词，返回相关搜索词建议，用于提升搜索体验。 ### 备注: - 通常用于实现搜索框实时推荐（如输入时下拉补全）。 - 返回的推荐词经过抖音推荐系统内部打分排序。 ### 参数: - keyword: 输入的关键词，如 "人工智能" ### 请求体示例： ```json payload = { "keyword": "人工智能" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `status_code`: 状态码（0 表示成功） - `status_msg

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_5aa0b220e77e0eb641351120`

# [中文] ### 用途: - 根据视频ID来增加作品的播放数 - 该接口默认使用游客Cookie，如果需要使用登录用户的Cookie，请在参数中传入。 - 单一作品每次调用增加1次播放数，请求约 `1000` 次后会被抖音限制，需要等待一段时间（如：2小时后）后再继续调用。 - 该限制是针对作品的，不是针对接口的，在未登录的情况下，使用不同IP的浏览器或在APP中浏览作品，该作品的播放数也不会增加。 - 可以携带抖音网页端的Cookie来请求此接口，但是不保证一定有效，需要自行测试。 - 上述的限制是根据测试结果得出的，具体限制可能会有所不同，仅供参考。 ### 参数: - aweme_t

- Risk: `read`
- Parameters: `[{"name":"aweme_type","type":"integer","required":true},{"name":"item_id","type":"string","required":true}]`

## `mcp_5b2c85ed35981f7ce9e91659`

批量获取视频数据(播放量/点赞等)/Multi Get Item Stats

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_5d1c6c0195ef9e3be1e93db8`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_5d8a7ba2273a51f1758c5036`

# [中文] ### 用途: - 获取抖音视频合集作品列表数据 ### 参数: - mix_id: 合集id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 视频合集作品列表数据 # [English] ### Purpose: - Get Douyin video mix post list data ### Parameters: - mix_id: Mix id - cursor: Cursor, used for paging, the first page is 0, 

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_5dd56b07d57ca508bdef2df3`

# [中文] ### 用途: - 获取抖音创作者中心某个话题/热点/道具/音乐的相关视频列表 - 通过其他榜单接口（如 fetch_creator_hot_spot_billboard、fetch_creator_hot_topic_billboard）拿到 query_id 后，再用本接口拉取该条目下的相关视频 ### 参数: - query_id: 查询ID（话题ID/热点ID等） - billboard_type: 榜单类型 - 2: 热点 - 3: 话题 - 4: 道具 - 5: 音乐 - limit: 每页数量 (默认 20, 范围 1-100) - offset: 偏移量 (分页起

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"query_id","type":"string","required":true}]`

## `mcp_5f8c29693b5f31757d42c3a0`

# [中文] ### 用途: - 使用UID获取用户开播信息 ### 参数: - uid: 用户UID ### 返回: - 用户开播信息，包含room_id与live_status # [English] ### Purpose: - Get user live information by UID ### Parameters: - uid: User UID ### Return: - User live information, including room_id and live_status # [示例/Example] uid = "3081254195702747"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_600b3ab28f9827229bd96aa3`

# [中文] ### 用途: - 生成抖音视频分享二维码 ### 参数: - object_id: 作品id或作者uid ### 返回: - 二维码数据 # [English] ### Purpose: - Generate Douyin video share QR code ### Parameters: - object_id: Video id or author uid ### Return: - QR code data # [示例/Example] object_id = "7348044435755846962"

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true}]`

## `mcp_600b77335b8060a2af5fac81`

获取星图热榜分类/Get Ranking List Catalog

- Risk: `read`
- Parameters: `[{"name":"biz_scene","type":"string","required":false},{"name":"codes","type":"string","required":false}]`

## `mcp_621be5c78b4b8d4fb9100169`

# [中文] ### 用途: - 生成verify_fp ### 返回: - verify_fp # [English] ### Purpose: - Generate verify_fp ### Return: - verify_fp

- Risk: `read`
- Parameters: `[]`

## `mcp_62935f8201f4120bb1082ad9`

# [中文] ### 用途: - 获取单个作品数据，支持文章、图文、视频等。 - V3版本的接口，解决了版权限制问题，可以获取更多受限内容，比如 V1，V2版本返回的Reason为8的内容和部分文章或短剧等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data, support article, photo, video, etc. - V3 version of the interface, which solves the copyright restriction

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_62bac923a015d45d12be20b1`

获取用户直播流数据/Get user live video data

- Risk: `read`
- Parameters: `[{"name":"webcast_id","type":"string","required":true}]`

## `mcp_633053fb97cc7ff000e8a7c1`

# [中文] ### 用途: - 获取抖音视频合集详情数据 ### 参数: - mix_id: 合集id ### 返回: - 视频合集详情数据 # [English] ### Purpose: - Get Douyin video mix detail data ### Parameters: - mix_id: Mix id ### Return: - Video mix detail data # [示例/Example] mix_id = "7302011174286002217"

- Risk: `read`
- Parameters: `[{"name":"mix_id","type":"string","required":true}]`

## `mcp_64e3e3cec3de8d14d0c2b98b`

# [中文] ### 用途: - 搜索抖音指数下的趋势报告，支持类型/产品/年份/关键词四维筛选 ### 参数: - current_page / page_size: 分页参数（字符串） - type: 报告类型，空字符串表示全部 - "行业洞察" / "产品洞察" / "用户洞察" / "趋势洞察" - business: 所属产品（逗号分隔），可选值： - "巨量引擎", "今日头条", "抖音", "西瓜视频", "抖音电商", "仕小禄", "其他" - report_time: 发布年份（逗号分隔），如 "2024,2023" - search: 报告标题关键词 - categor

- Risk: `write`
- Parameters: `[{"name":"business","type":"string","required":false},{"name":"category","type":"string","required":false},{"name":"current_page","type":"string","required":false},{"name":"page_size","type":"string","required":false},{"name":"report_time","type":"string","required":false},{"name":"search","type":"string","required":false},{"name":"type","type":"string","required":false}]`

## `mcp_66876c511006c7397cd326fa`

# [中文] ### 用途: - 获取批量用户信息，最多支持10个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多10个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 10 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 10 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_66fa19dc82f792b1be00020c`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_676819928fc52585522ba118`

# [中文] ### 用途: - 获取抖音创作者热点榜单数据 ### 参数: - billboard_tag: 热点标签，多个标签用逗号分隔 可选值: - 站内玩法: 1004,1000,1002,1003,1001 - 话题互动: 20001,20006,20000,20003,20005,20002,20 - 娱乐: 2007,2000,2011,2012,2009,2010,2004,2005,2003,2008,2001,2002,2006 - 社会: 4005,4006,4007,4003,4004,4000 - 二次元: 13000 - 交通: 23000 - 亲子: 19000 

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"string","required":false},{"name":"city_code","type":"any","required":false},{"name":"hot_search_type","type":"integer","required":false}]`

## `mcp_691eb5d1dbd6bc9711a97b6c`

# [中文] ### 用途: - 获取抖音创作者平台指定分类的内容创作课程 ### 参数: - category_id: 分类ID (更多分类ID请通过内容创作合集分类接口获取) 常见分类ID示例: - 184: 视频创作 - 185: 直播创作 - 186: 图文创作 - 188: 美食视频创作 - 180: 内容创作基础 - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) ### 返回: - 指定分类的内容创作课程数据 # [English] ### Purpose

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_69f81faf4f55e417e0e2fb99`

# [中文] ### 用途: - 生成弹幕xb签名 ### 参数: - user_agent: 用户浏览器代理 - room_id: 房间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕xb签名 # [English] ### Purpose: - Generate danmu xb signature ### Parameters: - user_agent: User browser agent - room_id: Room ID - user_unique_id: User unique ID ### Return: - Danmu xb signatur

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_agent","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_6a186933a9582c5e58e7bc11`

获取kol粉丝画像V1/Get kol Fans Portrait V1

- Risk: `read`
- Parameters: `[{"name":"fansType","type":"string","required":false},{"name":"kolId","type":"string","required":true}]`

## `mcp_6a51e1937706c3b70306bad2`

# [中文] ### 用途: - 按抖音号或抖音昵称搜索直播间（V2 版本），支持游标翻页。 - 适合定位某个主播的直播间，而不是按内容关键词泛搜直播。 ### 备注: - `keyword` 匹配的是主播的抖音号或昵称，传入内容类关键词（如 "游戏"）通常匹配不到结果。 - 本接口不支持排序、发布时间、时长等筛选条件。 - 每页固定 10 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 抖音号 或 抖音昵称（必填），如 "小耳朵" - cursor: 翻页游标（首次请求传 0） ### 请求体

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_6b6c00a8dca03f028c16ebab`

获取创作者转化视频/商品明细/Get Author Convert Videos or Products

- Risk: `read`
- Parameters: `[{"name":"detail_type","type":"integer","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_6c790aa952ae8c62ed534fad`

投放数据趋势图/Delivery analysis trend graph

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_6edf9933439503fc7b4a3389`

# [中文] ### 用途: - 按关键词搜索正在直播的直播间（V3 版本），返回主播资料、直播标题、封面、观众数与拉流地址等。 - 支持内容类关键词（如 "游戏"），响应结构与综合搜索 V3 一致（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset` 与 `search_id` 原样传回，并把 `page` 加 1。 - `data.pagination.has_more` 为

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_6f3b4155655a429550116936`

# [中文] ### 用途: - 获取高点赞率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_6f99bf90e75087abeac070c3`

# [中文] ### 用途: - 获取挑战榜 ### 参数: - page: 页码 - page_size: 每页数量 - keyword: 热点搜索词 ### 返回: - 挑战榜 # [English] ### Purpose: - Get the challenge list ### Parameters: - page: Page number - page_size: Number of items per page - keyword: Hot search term ### Return: - Challenge list

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true}]`

## `mcp_70864e454c26f7a2e439587d`

头条创作者搜索/Search Toutiao Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_7101f747877d321e41f02e60`

# [中文] ### 用途: - 获取单个作品视频弹幕数据 ### 参数: - item_id: 作品id - duration: 视频总时长 - end_time: 结束时间 - start_time: 开始时间 ### 返回: - 视频弹幕数据 # [English] ### Purpose: - Get single video danmaku data ### Parameters: - item_id: Video id - duration: Video total duration - end_time: End time - start_time: Start time ###

- Risk: `read`
- Parameters: `[{"name":"duration","type":"integer","required":true},{"name":"end_time","type":"integer","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_7315715805438f3b1ce8dbd4`

# [中文] ### 用途: - 获取指定用户的直播流数据V2 ### 参数: - room_id: 直播间room_id ### 返回: - 直播流数据 ### 备注: modify_time字段是直播间的最后更新时间，也就相当于开播时间，如果下播也不会重置回0，而是一直保持最后的更新时间。 # [English] ### Purpose: - Gets the live stream data of the specified user V2 ### Parameters: - room_id: Room room_id ### Return: - Live stream data ###

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_737aa4178db5919dcb9c34d7`

# [中文] ### 用途: - 获取多个关键词的指数解读数据（综合指数、搜索指数、内容指数等） - 建议配合 fetch_multi_keyword_hot_trend 一起使用 ### 参数: - keyword_list: 关键词列表，逗号分隔 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔，留空表示全国 ### 返回: - 关键词综合指数、搜索指数、内容指数解读 # [English] ### Purp

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_7389fdc39d153cba1d1b99a0`

# [中文] ### 用途: - 获取抖音热榜数据，包括： - 热点榜 - 种草榜 - 娱乐榜 - 社会榜 - 挑战榜 ### 参数: - board_type: - 0: 热点榜（默认） - 2: 其他榜单，如种草榜等，需要传入对应的board_sub_type参数。 - board_sub_type: - 空字符串: 热点榜（默认） - seeding: 种草榜 - 2: 娱乐榜 - 4: 社会榜 - hotspot_challenge: 挑战榜 ### 返回: - 热搜榜数据 # [English] ### Purpose: - Get Douyin hot search list da

- Risk: `read`
- Parameters: `[{"name":"board_sub_type","type":"string","required":false},{"name":"board_type","type":"string","required":false}]`

## `mcp_74358f742f26ed4667ca19c9`

# [中文] ### 用途: - 获取作品数据趋势 ### 参数: - aweme_id: 作品id - option: 选项，7 点赞量 8 分享量 9 评论量 - date_window: 数据点粒度，可选 1/2，代表按小时/按天，默认1 ### 返回: - 作品数据趋势 # [English] ### Purpose: - Get the work data trend ### Parameters: - aweme_id: Work id - option: Option, 7 Like 8 Share 9 Comment - date_window: Data point gran

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false}]`

## `mcp_743ae904c40b5a9d5870dfe9`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_74bb4dfe860b67571839b38f`

获取作品流量来源统计/Fetch item play source statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_75f185ec50148c6c7b1606d5`

抖音视频频道数据/Douyin video channel data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false},{"name":"tag_id","type":"integer","required":true}]`

## `mcp_76fc93d89318d975542f6dd1`

获取创作者视频列表/Get Author Show Items

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_790c2f8126e63cefe0a4dfdf`

# [中文] ### 用途: - 根据抖音uid获取指定用户的信息 ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "16739374881

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_7ae40bb909653a6eed044b3d`

查询抖音用户基本信息/Query Douyin user basic information

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_7b2d544a3b140852f7cd23c9`

根据抖音sec_user_id获取游客星图kolid/Get XingTu kolid by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_7b4c373a589775b727b5f2b3`

# [中文] ### 用途: - 获取高完播率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_7d01545edc52a98da2d3cfbd`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword ### Return: - Share link # [示例/Example] keyword = "雷军"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_7d0d4b156e0d52b4fa41db92`

# [中文] ### 用途: - 获取批量用户信息，最多支持50个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多50个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 50 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 50 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_7e4197132b6a3e7deb7cc97b`

# [中文] ### 用途: - 获取用户关注列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_7e71ee5729517a09437b1b35`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，给指定用户发送私信。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法发送私信给指定用户。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and send private messages to specified users ### Parameters: - uid: User id - sec_ui

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_7f40bcb68eb3f602e514c02a`

获取kol内容表现V1/Get kol Rec Videos V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_7f5d6dc1fb0ae93df40c20a0`

获取作品观众数据分析/Fetch item audience portrait

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_7f8e57cbc3a4ef18994c829a`

# [中文] ### 用途: - 获取抖音指数关联分析功能的有效日期范围 ### 返回: - 关联分析的起止可用日期 # [English] ### Purpose: - Get valid date range for the relation analysis feature ### Return: - Start and end available dates for relation analysis

- Risk: `read`
- Parameters: `[]`

## `mcp_7ff936d4b26e1af6a759655f`

# [中文] ### 用途: - 获取关键词的关联词分析，包含搜索关联词和内容关联词 - 展示关联词图谱和关联词排名 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期（建议为周一），格式 YYYYMMDD - end_date: 结束日期（**必须为周日**），格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 注意: - **关联分析的日期范围必须以周日为终止日期**，例如 start_date=20260330, end_date=20260405（周日） - 如果 end_date 不是周日，

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`
