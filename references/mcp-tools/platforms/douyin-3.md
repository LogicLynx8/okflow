# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-3`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_7c538f2e41e6e4165288f043`

# [中文] ### 用途: - 获取抖音音乐热榜数据 ### 参数: - chart_type: 榜单类型，默认值为'hot'，支持下面的值： - 'hot': 热门榜 - 'trending': 飙升榜 - 'original': 原创榜 - cursor: 游标，默认值为'0'，用于分页获取数据，每次请求后会返回下一个游标值，并且通过 `has_more` 字段指示是否有更多数据可供获取。 ### 返回: - 音乐热搜榜数据 # [English] ### Purpose: - Get Douyin music hot search list data ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"chart_type","type":"string","required":false},{"name":"cursor","type":"string","required":false}]`

## `mcp_7cd7dd56216b9af0dd4433f8`

# [中文] ### 用途: - 获取抖音创作者平台热门挑战榜单数据 ### 返回: - 热门挑战榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot challenge billboard data ### Return: - Hot challenge billboard data # [示例/Example] 无需参数，直接调用即可获取当前热门挑战榜单 No parameters required, call directly to get current hot challenge billboard

- Risk: `read`
- Parameters: `[]`

## `mcp_7dcc7688faec57fbb90c0c49`

生成短链接

- Risk: `read`
- Parameters: `[{"name":"target_url","type":"string","required":true}]`

## `mcp_7e2f444c05048f9516768444`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_80ad5223a1ed81e0d6ade31d`

# [中文] ### 用途: - 获取与指定达人相似的达人列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 相似达人列表 # [English] ### Purpose: - Get similar daren/creators to a specified user ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - List of similar daren # [示例/Example]

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_8190fae2e79464912e625937`

# [中文] ### 用途: - 获取视频搜索的关键词自动补全建议 ### 参数: - query: 搜索关键词 ### 返回: - 匹配的关键词建议列表 # [English] ### Purpose: - Get keyword auto-complete suggestions for video search ### Parameters: - query: Search keyword ### Return: - Matched keyword suggestion list # [示例/Example] query = "打瓦"

- Risk: `write`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_830b1e6a5a3494e46ddb856f`

# [中文] ### 用途: - 对比多个达人的趋势数据（粉丝增长、互动量等） ### 参数: - user_list: 达人抖音 uid 列表，逗号分隔，**最多5个** - days: 对比天数，仅支持 7 或 30 ### 返回: - 每个达人在指定天数内的趋势数据对比 # [English] ### Purpose: - Compare trend data of multiple daren/creators (follower growth, engagement, etc.) ### Parameters: - user_list: Daren uid list, comma s

- Risk: `write`
- Parameters: `[{"name":"days","type":"string","required":false},{"name":"user_list","type":"string","required":true}]`

## `mcp_83e427a6d70e4c4e47ece54e`

# [中文] ### 用途: - 获取指定抖音账号在 DOU+ 投放页可推广的作品列表，包含每个作品的点赞、评论、播放等数据 ### 参数: - sec_uid: 投放账号的 sec_uid（必填） - count: 返回作品数量，默认 30 - target_id: 推广目标（DOU+ 页面上的目标卡片）ID，默认 31（点赞评论量）。31=点赞评论量, 32=粉丝量, 33=主页浏览量, 37=视频播放量, 40=直播间人气, 45=评论链接点击, 63=展示给粉丝, 78=高质量互动。**只拉作品列表的话用默认 31 即可** - aim_ids: 可选高级参数——投放优化目标编码（多个

- Risk: `write`
- Parameters: `[{"name":"aim_ids","type":"any","required":false},{"name":"count","type":"any","required":false},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_841e5c6a00fa4d084b258fef`

获取创作者CP合作信息/Get Author CP Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_848471c3204e5cb80cf5ad12`

获取投稿作品列表/Fetch item list

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"any","required":false},{"name":"end_time","type":"integer","required":true},{"name":"fields","type":"string","required":false},{"name":"need_cooperation","type":"boolean","required":false},{"name":"need_long_article","type":"boolean","required":false},{"name":"order_by","type":"integer","required":false},{"name":"start_time","type":"integer","required":true}]`

## `mcp_851af5f6bc2533b8d9249572`

# [中文] ### 用途: - 获取视频榜 ### 参数: - page: 页码，默认1 - page_size: 每页数量，默认10 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - sub_type: 榜单分类，1001 视频总榜 1002 低粉爆款 1003 高完播率 1004 高涨粉率 1005 高点赞率 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"sub_type","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_85dff97057dacf9221426a61`

# [中文] ### 用途: - 获取创作指南各类型数据的有效日期范围 ### 返回: - 创作指南可查询的起止日期 # [English] ### Purpose: - Get valid date range for the creation guide section

- Risk: `read`
- Parameters: `[]`

## `mcp_89f80bc28bea9bbb914e5849`

获取kol粉丝趋势V1/Get kol Daily Fans V1

- Risk: `read`
- Parameters: `[{"name":"endDate","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"startDate","type":"string","required":true}]`

## `mcp_8a0bfc34d5cd228194661dcc`

# [中文] ### 用途: - 获取账号粉丝数据趋势 ### 参数: - sec_uid: 用户sec_id - option: 选项，2 新增点赞量 3 新增作品量 4 新增评论量 5 新增分享量 - date_window: 数据点粒度(小时)，可选 1/24，代表每小时一个点/每天一个点，默认24 ### 返回: - 账号粉丝数据趋势 # [English] ### Purpose: - Get the account fan data trend ### Parameters: - sec_uid: User sec_id - option: Option, 2 New like 3

- Risk: `read`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_8b730d6d3d0b0bf863667ace`

# [中文] ### 用途: - 获取城市列表 ### 参数: - 无 ### 返回: - 中国城市列表 # [English] ### Purpose: - Get city list ### Parameters: - None ### Return: - Chinese city list

- Risk: `read`
- Parameters: `[]`

## `mcp_8b8eccb68e6dadb6ecab2d63`

获取用户主页二维码/Get User Profile QRCode

- Risk: `read`
- Parameters: `[{"name":"core_user_id","type":"any","required":false},{"name":"sec_uid","type":"any","required":false}]`

## `mcp_8c5a3b61b15b8a4be1bc8e6d`

# [中文] ### 用途: - 获取关键词指数搜索框的热门推荐词，用作关键词指数分析的输入建议 - 注意: 这不是实时热点榜，实时热点和飙升热点请用 fetch_current_hot_topic ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条（头条当前返回空列表） - type: 推荐词类型，0=搜索热词（纯词，id 固定为 "0"），1=内容热词（带话题 id） ### 返回: - update_time: 数据更新日期（按天更新，非实时） - trend_words: 推荐词列表，含 id 和 word # [English] ### Purp

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_8c7a6c37a15185942f4a7903`

获取作品点赞观众画像-仅限热门榜/Fetch work like audience portrait - hot list only

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"option","type":"integer","required":false}]`

## `mcp_8c818162971f59f099a9307b`

# [中文] ### 用途: - 获取内容词详情 ### 参数: - keyword: 搜索关键字 - word_id: 内容词id - query_day: 查询日期，格式为YYYYMMDD ### 返回: - 内容词详情 # [English] ### Purpose: - Get the details of content words ### Parameters: - keyword: Search keyword - word_id: Content word id - query_day: Query date, format is YYYYMMDD ### Return: -

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"query_day","type":"integer","required":true},{"name":"word_id","type":"string","required":true}]`

## `mcp_8cf37a3293fedf111706262b`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "7136850194742315016"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_8e43b05c9942018eabee48d4`

# [中文] ### 用途: - 获取指定垂类下创作热门话题 ### 参数: - tag_id: 垂类ID（同 fetch_item_query 的 category_id） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期 "1"/"3"/"7" - end_date: 结束日期。**仅当 period=7 时必须为周日**，period=1/3 时可为任意日期 - rank_type: 排序类型，"index"=指数, "ri

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"rank_type","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_8ed8244e3390ea1c840d6bbd`

投放数据明细/Delivery analysis detail

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_8f7e0c0dd1d94da39b1529bd`

# [中文] ### 用途: - 按标题/关键词搜索 DOU+ 视频，支持游标翻页 ### 参数: - keyword: 视频标题/关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 12 ### 返回: - 匹配的视频列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ videos by title/keyword, with cursor pagination ### Parameters: - keyword: Video title or keyword (requ

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_90cc20aeaa29c74f2e8307f9`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor - count: Number ### Return: - Comme

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_916a5e457f389c838b5b8322`

获取创作者星图连接指数/Get Author Link Info

- Risk: `read`
- Parameters: `[{"name":"industy_tag","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_93ce28aecef53039c0a5eb9c`

# [中文] ### 用途: - 获取指定垂类下、指定热门关键词的相关视频列表 - 用于查看某个热门关键词具体由哪些视频贡献 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - period: 时间周期 "1"=近1天 / "3"=近3天 / "7"=近7天 - end_date: 结束日期 YYYYMMDD。**仅当 period=7 时必须为周日**（如 20260412），period=1/3 时可为任意日期 - keyword: 热门关键词（**必须**先调 fetch_content_creative_key

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_951afc7a2b6590e071201acd`

获取星图热榜分类/Get Ranking List Catalog

- Risk: `read`
- Parameters: `[{"name":"biz_scene","type":"string","required":false},{"name":"codes","type":"string","required":false}]`

## `mcp_95e2644f028200fb227caf19`

# [中文] ### 用途: - 获取抖音创作者中心某个话题/热点/道具/音乐的相关视频列表 - 通过其他榜单接口（如 fetch_creator_hot_spot_billboard、fetch_creator_hot_topic_billboard）拿到 query_id 后，再用本接口拉取该条目下的相关视频 ### 参数: - query_id: 查询ID（话题ID/热点ID等） - billboard_type: 榜单类型 - 2: 热点 - 3: 话题 - 4: 道具 - 5: 音乐 - limit: 每页数量 (默认 20, 范围 1-100) - offset: 偏移量 (分页起

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"query_id","type":"string","required":true}]`

## `mcp_970c54f08d4b501c7404296a`

# [中文] ### 用途: - 获取抖音视频合集作品列表数据 ### 参数: - mix_id: 合集id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 视频合集作品列表数据 # [English] ### Purpose: - Get Douyin video mix post list data ### Parameters: - mix_id: Mix id - cursor: Cursor, used for paging, the first page is 0,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_97967200ef609672156ea4c8`

# [中文] ### 用途: - 获取指定用户主页的作品列表（简洁版接口，支持游标翻页） ### 参数: - sec_uid: 用户 sec_uid（必填） - cursor: 翻页游标（字符串），首页传 "0"，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 用户作品列表，以及翻页信息 # [English] ### Purpose: - Get a user's homepage works (concise endpoint, cursor pagination) ### Parameters: - sec_uid: User sec_ui

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_979fbbbe565ec704032f5db6`

获取创作者每日粉丝趋势/Get Author Daily Fans

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"author_type","type":"any","required":false},{"name":"end_date","type":"any","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"start_date","type":"any","required":false}]`

## `mcp_990a9c331e27db1125ff40ac`

头条创作者搜索/Search Toutiao Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_99312c2d126c88fbed518cdf`

# [中文] ### 用途: - 获取指定垂类下创作热门关键词 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期，可选 "1"(近1天) / "3"(近3天) / "7"(近7天) - end_date: 结束日期（YYYYMMDD）。**仅当 period=7 时必须为周日**，period=1/3 时可为

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_99e27172a85c410064d946a9`

# [中文] ### 用途: - 抖音直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕参数数据 # [English] ### Purpose: - Douyin live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID ### Return: - Danmaku parameter data

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_9a25969f307cf4d508d2448f`

# [中文] ### 用途: - 获取单个作品数据 V2，若此接口失效，请使用 `/fetch_one_video` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2, if this interface fails, please use the `/fetch_one_video` interface, or use the APP interface. ### Parameters: - aweme_id: Video id ##

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_9a893dfe6305c10ff6bc6cc7`

# [中文] ### 用途: - 获取抖音搜索关键词的联想推荐结果（V2 版本）。 - 根据用户已输入的关键词前缀，返回相关搜索词建议，用于实现搜索框实时补全。 ### 备注: - 返回条数由抖音决定，不支持指定数量。 - `history_words` 为可选项，传入用户此前搜索过的词（英文逗号分隔）会影响联想词排序。 - 相比 V1，V2 直接给出纯词列表 `words`，无需再从原始结构中提取。 ### 参数: - keyword: 已输入的关键词，如 "人工智能" - history_words: 可选，历史搜索词，如 "猫咪,美食" ### 请求体示例： ```json payloa

- Risk: `write`
- Parameters: `[{"name":"history_words","type":"string","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_9b1adfce5cfbfea2478e7853`

获取粉丝画像/Fetch fan portrait

- Risk: `read`
- Parameters: `[{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_9b48f77bd3486ab0722b950b`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)搜索的结果，使用 V2 版本 API。 - 支持关键词搜索，返回匹配的话题详情，包括话题名称、话题封面、浏览量、参与人数等。 ### 备注: - 本接口专注于搜索话题（Challenge/Hashtag）内容，不包含视频或直播等其他类型。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串，后续翻页请使用上一次返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "游戏" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_9b7c19b0b3f2ac5dbd2fd4ee`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id ### Return: - Hashtag details data # [示例/Example] ch_id = 1575791821492238

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"integer","required":true}]`

## `mcp_9b7c935cd2ecc3a9c8ff6d0d`

获取创作者粉丝画像分布/Get Author Fans Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_9b9c242d7a69e71c1ef80272`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified video ### Parameters: - aweme_id: Video id ### Return: - Share link # [示例/Example] aweme_id = "7197598285882789120"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_9c6effd80271eb781c7addc1`

# [中文] ### 用途: - 生成弹幕xb签名 ### 参数: - user_agent: 用户浏览器代理 - room_id: 房间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕xb签名 # [English] ### Purpose: - Generate danmu xb signature ### Parameters: - user_agent: User browser agent - room_id: Room ID - user_unique_id: User unique ID ### Return: - Danmu xb signatur

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_agent","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_9dadee17acc354299bd7e899`

# [中文] ### 用途: - 根据视频ID来增加作品的播放数 - 该接口默认使用游客登录凭据，如果需要使用登录用户的登录凭据，请在参数中传入。 - 单一作品每次调用增加1次播放数，请求约 `1000` 次后会被抖音限制，需要等待一段时间（如：2小时后）后再继续调用。 - 该限制是针对作品的，不是针对接口的，在未登录的情况下，使用不同IP的浏览器或在APP中浏览作品，该作品的播放数也不会增加。 - 可以携带抖音网页端的登录凭据来请求此接口，但是不保证一定有效，需要自行测试。 - 上述的限制是根据测试结果得出的，具体限制可能会有所不同，仅供参考。 ### 参数: - aweme_t

- Risk: `read`
- Parameters: `[{"name":"aweme_type","type":"integer","required":true},{"name":"item_id","type":"string","required":true}]`

## `mcp_9dffaf2c305480bf0c9e8307`

# [中文] ### 用途: - 获取抖音创作者平台的商单任务列表 - 支持多种筛选条件，包括行业分类、付费类型、平台渠道等 ### 重要参数使用说明: #### 行业分类组合规则: - **industry_lv1=-1 (全部)**: 当选择全部一级行业时，industry_lv2参数将被忽略，无需设置 - **industry_lv1=具体值**: 当选择具体一级行业时，可配合industry_lv2进行二级筛选 - industry_lv2=-1: 该一级行业下的所有二级分类 - industry_lv2=具体值: 该一级行业下的具体二级分类 #### 可选参数 (选择"全部"时无需传

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"greater_than_cost_progress","type":"any","required":false},{"name":"industry_lv1","type":"integer","required":false},{"name":"industry_lv2","type":"integer","required":false},{"name":"keyword","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"mission_type","type":"integer","required":false},{"name":"pay_type","type":"any","required":false},{"name":"platform_channel","type":"any","required":false},{"name":"publish_time_start","type":"any","required":false},{"name":"quick_selector_scene","type":"any","required":false},{"name":"tab_scene","type":"integer","required":false}]`

## `mcp_9ea7085915f62815fc4a5c74`

# [中文] ### 用途: - 获取单个作品数据，支持文章、图文、视频等。 - V3版本的接口，解决了版权限制问题，可以获取更多受限内容，比如 V1，V2版本返回的Reason为8的内容和部分文章或短剧等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data, support article, photo, video, etc. - V3 version of the interface, which solves the copyright restriction

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_9edfdbd709ac68a4b538c434`

抖音APP注册设备/Douyin APP register device

- Risk: `read`
- Parameters: `[{"name":"proxy","type":"string","required":false}]`

## `mcp_a096fe83825345054510fba7`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor - count: Number ### Return: - Comments data # [示例/Example] aweme_id = "7372484719365098803" cur

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_a0ff8c1e3fd849c5ce3bbbae`

# [中文] ### 用途: - 获取抖音视频合集详情数据 ### 参数: - mix_id: 合集id ### 返回: - 视频合集详情数据 # [English] ### Purpose: - Get Douyin video mix detail data ### Parameters: - mix_id: Mix id ### Return: - Video mix detail data # [示例/Example] mix_id = "7302011174286002217"

- Risk: `read`
- Parameters: `[{"name":"mix_id","type":"string","required":true}]`

## `mcp_a273b3ecff88fa686bd22637`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_a28bc5b19f56141f9add4781`

# [中文] ### 用途: - 获取同城热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - city_code: 城市编码，从城市列表获取，空为全部 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 同城热点榜 # [English] ### Purpose: - Get the city hot list ### Parameters: - page: Page numb

- Risk: `read`
- Parameters: `[{"name":"city_code","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_a2ff270a2f69878a8ef8cefb`

# [中文] ### 用途: - 获取用户的短剧合集列表 ### 参数: - user_id: 用户id，与sec_user_id二选一即可 - sec_user_id: 用户加密id，与user_id二选一即可 - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 ### 返回: - 用户短剧合集列表数据 ### 备注: - 该接口返回用户发布的所有短剧合集 - 响应中的 series_id 可用于获取短剧详情和视频列表 # [English] ### Purpose: - Get user's series/playlet collection list

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_a4c328066d3d0c8bb5b663b6`

获取创作者位置信息/Get Author Local Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_a5146e0f7591bd92a39bb80b`

获取创作者基本信息/Get Author Base Info

- Risk: `read`
- Parameters: `[{"name":"need_linkage_info","type":"boolean","required":false},{"name":"need_sec_uid","type":"boolean","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"recommend","type":"boolean","required":false}]`

## `mcp_a5c0028acb2c10caee53a915`

获取kol转化能力分析V1/Get kol Conversion Ability Analysis V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"kolId","type":"string","required":true}]`

## `mcp_a5e707a328327341bc94a301`

提取直播间号/Extract webcast id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_a5f6e27db7def4a9e2fd1f22`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_a6bc0daae4bf707fc94fc1be`

# [中文] ### 用途: - 获取指定趋势报告的完整详情 - 包含报告标题、封面、发布时间、所属产品、正文内容、图片资源、PDF 下载链接等 ### 参数: - report_id: 报告 ID（字符串），可从 fetch_report_search 或 fetch_insight_recommend 返回结果中获取 ### 返回: - 报告完整数据：title, cover, publish_time, business, content, images, pdf_url 等 # [English] ### Purpose: - Get full detail of a trend in

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_a6fbd494fe683e1933db4105`

# [中文] ### 用途: - 获取抖音品牌热榜分类数据 ### 返回: - 品牌热搜榜分类数据 # [English] ### Purpose: - Get Douyin brand hot search category data ### Return: - Hot brand search category data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_a7eec93eca2f2974183961c5`

# [中文] ### 用途: - 获取指定垂类下视频时长分布数据 - 用于了解该垂类创作者偏好的视频时长结构 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 各时长区间（如 0-15 秒/15-60 秒/60-180 秒/大于 180 秒）的视

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_a940c5eb9d8082e2089dea76`

# [中文] ### 用途: - 生成抖音视频分享二维码 ### 参数: - object_id: 作品id或作者uid ### 返回: - 二维码数据 # [English] ### Purpose: - Generate Douyin video share QR code ### Parameters: - object_id: Video id or author uid ### Return: - QR code data # [示例/Example] object_id = "7348044435755846962"

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true}]`

## `mcp_a9c3fc14905846aeefbaed82`

获取kol连接用户V1/Get kol Link Struct V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_aa2a02be472354eba6178631`

# [中文] ### 用途: - 获取抖音创作者平台的行业分类配置 - 返回所有可用的行业分类层级结构 - **建议在调用商单任务列表接口前先调用此接口获取完整的行业分类信息** ### 重要说明: - 此接口已优化为Redis缓存，首次调用后数据将缓存30天 - 缓存键: `douyin_creator:industry_categories` - 数据结构包含一级行业和二级行业的完整映射关系 ### 数据结构: ```json { "status_code": 0, "status_msg": "success", "data": { "industry_categories": [ {"

- Risk: `read`
- Parameters: `[]`

## `mcp_abe249b2984bffbe82a60962`

获取单个视频播放量(含详情)/Get Item Play Count

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_ac0216e7593289a4c58722db`

获取kol粉丝画像V1/Get kol Fans Portrait V1

- Risk: `read`
- Parameters: `[{"name":"fansType","type":"string","required":false},{"name":"kolId","type":"string","required":true}]`

## `mcp_acd7d29c15d8fee04f2f39e2`

获取kol热词分析评论V1/Get Author Hot Comment Tokens V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_ae14a40afd33e6a9ec9517a2`

# [中文] ### 用途: - 按抖音号或抖音昵称搜索直播间（V2 版本），支持游标翻页。 - 适合定位某个主播的直播间，而不是按内容关键词泛搜直播。 ### 备注: - `keyword` 匹配的是主播的抖音号或昵称，传入内容类关键词（如 "游戏"）通常匹配不到结果。 - 本接口不支持排序、发布时间、时长等筛选条件。 - 每页固定 10 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 抖音号 或 抖音昵称（必填），如 "小耳朵" - cursor: 翻页游标（首次请求传 0） ### 请求体

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_ae14e2062bba5484bcd4886c`

# [中文] ### 用途: - 获取指定用户的直播流数据V2 ### 参数: - room_id: 直播间room_id ### 返回: - 直播流数据 ### 备注: modify_time字段是直播间的最后更新时间，也就相当于开播时间，如果下播也不会重置回0，而是一直保持最后的更新时间。 # [English] ### Purpose: - Gets the live stream data of the specified user V2 ### Parameters: - room_id: Room room_id ### Return: - Live stream data ###

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_aeaf0af64c2333f9c3207072`

# [中文] ### 用途: - 搜索抖音用户，支持抖音号和抖音昵称搜索 ### 参数: - user_name: 用户名 (支持抖音号和抖音昵称) - 抖音号: 如 "rmrbxmt" - 抖音昵称: 如 "Y"、"人民日报" ### 返回: - 最多返回20个匹配的用户信息 - 包含用户基本信息如头像、昵称、抖音号等 # [English] ### Purpose: - Search Douyin users by Douyin ID or nickname ### Parameters: - user_name: Username (supports Douyin ID and nick

- Risk: `read`
- Parameters: `[{"name":"user_name","type":"string","required":true}]`

## `mcp_aed4a2027e753626194aca56`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_af39a373fb377ff2afbc0a50`

# [中文] ### 用途: - 获取指定视频在抖音指数「视频分析」中的基础详情 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） ### 返回: - 视频标题、封面、时长、发布时间、作者信息及基础数据等 # [English] ### Purpose: - Get the basic detail of a video in Douyin Index video analysis ### Parameters: - item_id: Video ID (Douyin aweme id, numeric string) ### Return: - Vide

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_b071b87faa9302cd1662938a`

# [中文] ### 用途: - 获取抖音创作者中心热门视频榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_b17b0192f6f3ae0228861674`

搜索MCN机构列表/Get Demander MCN List

- Risk: `read`
- Parameters: `[{"name":"mcn_name","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_b17b540cf12c714503d606f0`

获取创作者受众画像分布/Get Author Audience Distribution

- Risk: `read`
- Parameters: `[{"name":"link_type","type":"any","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_b24c5b5303dbdf5754a9d25f`

获取kol性价比能力分析V1/Get kol Cp Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_b2db237fab9567c4f88ca00e`

# [中文] ### 用途: - 获取抖音创作者热点榜单数据 ### 参数: - billboard_tag: 热点标签，多个标签用逗号分隔 可选值: - 站内玩法: 1004,1000,1002,1003,1001 - 话题互动: 20001,20006,20000,20003,20005,20002,20 - 娱乐: 2007,2000,2011,2012,2009,2010,2004,2005,2003,2008,2001,2002,2006 - 社会: 4005,4006,4007,4003,4004,4000 - 二次元: 13000 - 交通: 23000 - 亲子: 19000

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"string","required":false},{"name":"city_code","type":"any","required":false},{"name":"hot_search_type","type":"integer","required":false}]`

## `mcp_b36e458a7cfd69f08c36dbb4`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放信息、音乐、互动数据等丰富信息。 ### 参数: -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_b6d56c0871a07e51c1957a9c`

# [中文] ### 用途: - 获取抖音创作者活动详情数据 ### 参数: - activity_id: 活动ID（从活动列表接口获取） ### 返回: - 创作者活动详情数据 # [English] ### Purpose: - Get Douyin creator activity detail data ### Parameters: - activity_id: Activity ID (obtained from activity list interface) ### Return: - Creator activity detail data # [示例/Example] ac

- Risk: `read`
- Parameters: `[{"name":"activity_id","type":"string","required":true}]`

## `mcp_b847994ebd17edf3c710997a`

获取kol内容表现V1/Get kol Rec Videos V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_b96e60345f6d365661387ffb`

获取用户收藏夹/Get user collection

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_bbbf2e4632eea26e3a94a369`

查询抖音用户基本信息/Query Douyin user basic information

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`
