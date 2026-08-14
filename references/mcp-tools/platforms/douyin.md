# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_0049763cdf4fe560cad5678e`

达人搜索/Search Creator

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"integer","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_006a64387cd83fb6787d2692`

获取kol粉丝趋势V1/Get kol Daily Fans V1

- Risk: `read`
- Parameters: `[{"name":"endDate","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"startDate","type":"string","required":true}]`

## `mcp_028c5cf6bd89d46b2f220d9e`

根据抖音号获取游客星图kolid/Get XingTu kolid by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_0296f74de2478748a0ef4ce5`

# [中文] ### 用途: - 获取热度飙升的话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": 

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_039636d05a09bf8f56badaf7`

# [中文] ### 用途: - 获取指定垂类下创作热门关键词 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期，可选 "1"(近1天) / "3"(近3天) / "7"(近7天) - end_date: 结束日期（YYYYMMDD）。**仅当 period=7 时必须为周日**，period=1/3 时可为

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_042e98581326067513413dce`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - sort_type: 0:综合排序 1:最多点赞 2:最新发布 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for 

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_06106f57fdcf6d86dcedcf2d`

# [中文] ### 用途: - 获取 DOU+ 达人分类列表；其分类名可用作"按分类搜索达人"接口的 name 字段 ### 返回: - 达人分类列表 # [English] ### Purpose: - Get the DOU+ talent category list; a category name can be used as the `name` of the talent search endpoint ### Return: - Talent category list

- Risk: `write`
- Parameters: `[]`

## `mcp_069263ef1785aead22c5dbf0`

生成抖音短链接/Generate Douyin short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_06e1713ed63a1a39b9bb316d`

# [中文] ### 用途: - 通过sec_uid获取指定用户的直播流数据 ### 参数: - sec_uid: 用户sec_uid，也叫 sec_user_id，可以在用户主页链接中找到。 ### 返回: - 直播流数据 # [English] ### Purpose - Get live video data of specified user by sec_uid ### Parameters - sec_uid: User sec_uid, also called sec_user_id, can be found in the user's homepage link. ### R

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_06ef020ae89576d7ff41555e`

# [中文] ### 用途: - 生成ttwid ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_071f0b19435001c2420f8a24`

# [中文] ### 用途: - 获取品牌的有效信息和品牌指数数据 ### 参数: - keyword_list: 品牌名称列表，逗号分隔 ### 返回: - 品牌指数、可用日期范围等 # [English] ### Purpose: - Get brand valid info and brand index data ### Parameters: - keyword_list: Brand name list, comma separated ### Return: - Brand index, available date range, etc. # [示例/Example] keyw

- Risk: `write`
- Parameters: `[{"name":"keyword_list","type":"string","required":true}]`

## `mcp_08116e10b7eb853c6ff3670e`

# [中文] ### 用途: - 搜索达人，获取达人列表建议 ### 参数: - keyword: 达人昵称关键词 - total: 返回数量，默认20 ### 返回: - 匹配的达人列表（包含达人ID、昵称、头像、粉丝数等） # [English] ### Purpose: - Search for daren/creators, get suggestion list ### Parameters: - keyword: Daren nickname keyword - total: Return count, default 20 ### Return: - Matched daren 

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"total","type":"string","required":false}]`

## `mcp_085fa990d445eb9aec355f3c`

获取创作者转化能力/Get Author Convert Ability

- Risk: `read`
- Parameters: `[{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_0884db8c80e1e62ff44cc435`

# [中文] ### 用途: - 获取抖音 App 中直播搜索结果。 - 返回正在直播的房间信息，包括主播资料、直播间封面、观众人数、拉流地址等。 ### 备注: - 仅返回直播类型内容。 - 初次请求时 `cursor` 传0，`search_id` 传空字符串。 - 翻页请求时，使用上一次响应返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "游戏" - cursor: 翻页游标（首次请求传0） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_08b0dc4841cf703df2cc89b5`

获取kol视频表现V1/Get kol Video Performance V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":true}]`

## `mcp_08ced52211dcd3a719942991`

获取星图达人商业榜数据/Get Ranking List Data

- Risk: `read`
- Parameters: `[{"name":"code","type":"integer","required":false},{"name":"date","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false},{"name":"version","type":"string","required":false}]`

## `mcp_09515ede09dc955944ebdb6b`

# [中文] ### 用途: - 获取首页推荐的趋势报告列表 ### 返回: - 推荐报告列表（含报告ID、标题、封面、发布时间等） # [English] ### Purpose: - Get the list of recommended trend insight reports on the home page

- Risk: `read`
- Parameters: `[]`

## `mcp_095b08851553e8ab416af007`

获取用户收藏夹/Get user collection

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_0962af2c2fc8ce3e78870c8b`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放信息、音乐、互动数据等丰富信息。 ### 参数: -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_0a2caf9094ed973758cc3170`

获取创作者商业卡片信息/Get Author Business Card Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true}]`

## `mcp_0b1c25df1d45e50b90fc5979`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，不要超过20，建议保持不变。 - sort_type: 排序类型，可选值如下： - `0`: 最新排序-默认 - `1`: 最热排序 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user homepage video data ### Parameters: - sec_user_

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_0c264d46eda4d4add8fc3213`

# [中文] ### 用途: - 获取城市列表 ### 参数: - 无 ### 返回: - 中国城市列表 # [English] ### Purpose: - Get city list ### Parameters: - None ### Return: - Chinese city list

- Risk: `read`
- Parameters: `[]`

## `mcp_0d440d18e433227b2597eb43`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_0d7ca853dc5f1d4fd6bf9c8b`

# [中文] ### 用途: - 获取达人核心指标数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝数、获赞数、作品数、互动率等核心指标 # [English] ### Purpose: - Get daren core metrics data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Follower count, like count, video count, enga

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_0f229e6c786ebecdf329f35e`

获取相似创作者推荐/Get Recommend Similar Star Authors

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"page","type":"integer","required":false},{"name":"similar_type","type":"string","required":false}]`

## `mcp_0f34e183ae752d20de7efb83`

# [中文] ### 用途: - 获取指定用户主页的作品列表（简洁版接口，支持游标翻页） ### 参数: - sec_uid: 用户 sec_uid（必填） - cursor: 翻页游标（字符串），首页传 "0"，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 用户作品列表，以及翻页信息 # [English] ### Purpose: - Get a user's homepage works (concise endpoint, cursor pagination) ### Parameters: - sec_uid: User sec_ui

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_0fcf701ee7894d5c4ed9bda6`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_1029f1e48484dcc2e515a6ba`

批量获取视频信息 V1/Batch Get Video Information V1

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_139701a906261434b8896e8a`

抖音直播间商品信息/Douyin live room product information

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_15a6033779377708aa76f372`

# [中文] ### 用途: - 获取当前热门搜索关键词列表 ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 关键词名称、搜索指数、增长率等 # [English] ### Purpose: - Get current hot search keywords list ### Parameters: - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Keyword name, search index, growth rate, etc.

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false}]`

## `mcp_1629ad2be99420b1bf8740d1`

# [中文] ### 用途: - DOU+ 用户搜索 V2，支持游标翻页与 scope 搜索范围 ### 参数: - keyword: 搜索关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 - scope: 搜索范围，默认 1 ### 返回: - 匹配结果列表，以及翻页信息 # [English] ### Purpose: - DOU+ user search V2, with cursor pagination and a search scope ### Parameters: - keyword: Sea

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"scope","type":"any","required":false}]`

## `mcp_164e0788a1877597dbfff0a9`

# [中文] ### 用途: - 获取指定视频的对比分析数据（与同类视频/大盘的表现对比） ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频在各维度上与参照对象的对比分析结果 # [English] ### Purpose: - Get comparison analysis for a video (performance vs. similar videos / benchmark) ### Paramete

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_16d59f9c0ca466af7cd12e0a`

# [中文] ### 用途: - 获取抖音创作者热门话题榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_18558749cf110289b873d903`

根据抖音用户ID获取游客星图kolid/Get XingTu kolid by Douyin User ID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_196188d9a00410cfc816eaaa`

抖音UID转星图达人ID/Get Xingtu Author ID by Douyin UID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_1b71b04232761553dbe5479f`

获取kol热词分析评论V1/Get Author Hot Comment Tokens V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_1d18f90fac41373a65d42375`

获取创作者位置信息/Get Author Local Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_1e1cd34d9b4618da1ce5c5c0`

二次元作品推荐/Anime Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_1e212cbf38335ac051774c68`

游戏作品推荐/Game Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_1f6e7ffc663582e7e656aed3`

获取创作者星图连接指数/Get Author Link Info

- Risk: `read`
- Parameters: `[{"name":"industy_tag","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_20b4be0a6cdaae03ac849219`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_216f416139719059904baeef`

获取kol星图指数V1/Get kol Xingtu Index V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_2186faea80a50f37e2985dee`

抖音APP注册设备/Douyin APP register device

- Risk: `read`
- Parameters: `[{"name":"proxy","type":"string","required":false}]`

## `mcp_219325b2df11abfd20c430a5`

# [中文] ### 用途: - 获取当前登录用户在抖音指数中订阅的关键词列表 ### 返回: - 用户已订阅的关键词列表 # [English] ### Purpose: - Get subscribed keyword list for the current logged-in user in Douyin Index ### Return: - List of keywords subscribed by the user

- Risk: `write`
- Parameters: `[]`

## `mcp_2285895a354b3113f1a9f6e3`

获取达人广场筛选项取值/Get Search Field Options

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_24099ef7d60633a39a73b308`

# [中文] ### 用途: - 获取品牌搜索的自动补全建议列表 ### 参数: - keyword: 品牌名称关键词 ### 返回: - 匹配的品牌列表（品牌名称、分类ID等） # [English] ### Purpose: - Get brand search auto-complete suggestion list ### Parameters: - keyword: Brand name keyword ### Return: - Matched brand list (brand name, category ID, etc.) # [示例/Example] keyword = 

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_24bf00371bc2de6d5adbc3fc`

# [中文] ### 用途: - 获取单个作品数据 V1，若此接口失效，请使用 `/fetch_one_video_v2` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id - need_anchor_info: 是否需要锚点信息，默认为False，开启后会看到一些有关视频的锚点信息，如地理位置，商户信息，商品橱窗等，可能会增加接口响应时间。 - 如果不需要锚点信息，建议保持默认值False，如果接口报错，可以尝试关闭此参数。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V1, if 

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"need_anchor_info","type":"boolean","required":false}]`

## `mcp_2796da3ce4d43e9df1cf345f`

# [中文] ### 用途: - 获取上升热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 上升热点榜 # [English] ### Purpose: - Get the rising hot list ### Parameters: - page: Page number - page_size: Number of ite

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_295e3b515497a59ae1ba832a`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_29e3742c134a58f237ad316b`

# [中文] ### 用途: - 获取指定作品的弹幕列表，支持管理和筛选弹幕 ### 参数: - item_id: 作品ID (必需参数，从作品链接或API获取) - count: 每页弹幕数量 (建议20，范围1-100) - offset: 偏移量 (分页使用，起始位置) - order_type: 排序类型 (1=时间排序, 2=其他排序) - is_blocked: 是否获取被屏蔽的弹幕 (false=正常弹幕, true=被屏蔽弹幕) ### 返回: - 作品弹幕列表数据 # [English] ### Purpose: - Get danmaku list for specifie

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"is_blocked","type":"boolean","required":false},{"name":"item_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"order_type","type":"integer","required":false}]`

## `mcp_2a2a5b61e08185abe99b63d3`

提取单个用户id/Extract single user id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_2a49684b44ef27dff6a3fcbf`

# [中文] ### 用途: - 按关键词搜索视频（V5 版本），只返回视频内容。 - 翻页参数与综合搜索 V3 一致，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagination.has_more` 为 0 表示已经到最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_2b5d8c18122d5d7198fcc6a6`

# [中文] ### 用途: - 通过视频ID 或 视频链接/分享文本 获取视频详情 ### 参数: - video: 视频ID 或 视频链接/分享文本（必填）。例：`7651708301280906538`，或含 v.douyin.com 链接的分享文案 ### 返回: - 匹配到的视频数据 # [English] ### Purpose: - Get a video's detail by its ID or share link/text ### Parameters: - video: Video ID, or share link/text (required). e.g. `765

- Risk: `write`
- Parameters: `[{"name":"video","type":"string","required":true}]`

## `mcp_2bcda6ec8d310bad283c58aa`

# [中文] ### 用途: - 获取视频榜 ### 参数: - page: 页码，默认1 - page_size: 每页数量，默认10 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - sub_type: 榜单分类，1001 视频总榜 1002 低粉爆款 1003 高完播率 1004 高涨粉率 1005 高点赞率 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"sub_type","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_2d24f6dca360f54246917eb8`

美食作品推荐/Food Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_2e54c3f5d8dfcd615e89db53`

# [中文] ### 用途: - 获取 DOU+ 视频排行榜（热门榜），可按时间范围、垂类、榜单维度筛选 ### 参数: - time_range: 时间范围，1 / 2 / 3，默认 2 - tag_id: 垂类ID，默认 634（娱乐）。完整对照：601剧情, 602明星, 606音乐, 607二次元, 608游戏, 609时事, 612舞蹈, 614三农, 615科技, 616财经, 617亲子, 619生活, 621健康, 623情感, 624文化, 625职场, 626教育, 627摄影, 628美食, 629旅行, 631时尚, 633体育, 634娱乐, 635汽车 - dim_

- Risk: `write`
- Parameters: `[{"name":"adv_id","type":"any","required":false},{"name":"dim_type","type":"any","required":false},{"name":"tag_id","type":"any","required":false},{"name":"time_range","type":"any","required":false}]`

## `mcp_2ebebaef4960b664f5ab99a4`

# [中文] ### 用途: - 获取抖音创作者活动详情数据 ### 参数: - activity_id: 活动ID（从活动列表接口获取） ### 返回: - 创作者活动详情数据 # [English] ### Purpose: - Get Douyin creator activity detail data ### Parameters: - activity_id: Activity ID (obtained from activity list interface) ### Return: - Creator activity detail data # [示例/Example] ac

- Risk: `read`
- Parameters: `[{"name":"activity_id","type":"string","required":true}]`

## `mcp_2f3a5250ca13d9fa78bec7bc`

# [中文] ### 用途: - 获取指定抖音账号在 DOU+ 投放页可推广的作品列表，包含每个作品的点赞、评论、播放等数据 ### 参数: - sec_uid: 投放账号的 sec_uid（必填） - count: 返回作品数量，默认 30 - target_id: 推广目标（DOU+ 页面上的目标卡片）ID，默认 31（点赞评论量）。31=点赞评论量, 32=粉丝量, 33=主页浏览量, 37=视频播放量, 40=直播间人气, 45=评论链接点击, 63=展示给粉丝, 78=高质量互动。**只拉作品列表的话用默认 31 即可** - aim_ids: 可选高级参数——投放优化目标编码（多个

- Risk: `write`
- Parameters: `[{"name":"aim_ids","type":"any","required":false},{"name":"count","type":"any","required":false},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_2f5e9b2165968de1ad9517d6`

投放数据明细/Delivery analysis detail

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_305eff10c6e2a880e6ea84a7`

获取创作者评论热词/Get Author Hot Comment Tokens

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"num","type":"integer","required":false},{"name":"without_emoji","type":"boolean","required":false}]`

## `mcp_30d04b4e3de637a7da617fff`

# [中文] ### 用途: - 获取短剧详情信息 ### 参数: - series_id: 短剧id ### 返回: - 短剧详情数据 ### 备注: - 该接口返回短剧的详细信息，包括： - 短剧名称、描述、封面 - 作者信息 - 总集数、更新状态 - 播放量、收藏量等统计数据 - 付费信息（如有） # [English] ### Purpose: - Get series/playlet detail information ### Parameters: - series_id: Series id ### Return: - Series detail data ### Note: 

- Risk: `read`
- Parameters: `[{"name":"series_id","type":"string","required":true}]`

## `mcp_31d254525fd01c0e9dacc4b4`

# [中文] ### 用途: - 获取品牌的雷达图数据（多维度评分） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 品牌多维度评分雷达图数据 # [English] ### Purpose: - Get brand radar chart data (multi-dimensional scores) ### Parameters: - brand_name: Brand name - start_date/end_date: Date range in

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_31d463be268b84c68a251e4e`

高级搜索kol V2/Search Kol Advanced V2

- Risk: `read`
- Parameters: `[{"name":"contentTag","type":"string","required":false},{"name":"followerRange","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_31f6dc393ce4cea6c5165270`

# [中文] ### 用途: - 获取抖音创作者平台热门挑战榜单数据 ### 返回: - 热门挑战榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot challenge billboard data ### Return: - Hot challenge billboard data # [示例/Example] 无需参数，直接调用即可获取当前热门挑战榜单 No parameters required, call directly to get current hot challenge billboard

- Risk: `read`
- Parameters: `[]`

## `mcp_3286ba5dcf32b4ce5d631c32`

投放数据概览(账号/视频/直播)/Delivery analysis overview

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_32ffa156d2965d8bc5972930`

获取创作者主页作品列表/Get Author Homepage Videos

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"any","required":false},{"name":"is_star_item","type":"any","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"start_time","type":"any","required":false}]`

## `mcp_345479a2e4628bfb8288e1ea`

# [中文] ### 用途: - 获取同城热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - city_code: 城市编码，从城市列表获取，空为全部 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 同城热点榜 # [English] ### Purpose: - Get the city hot list ### Parameters: - page: Page numb

- Risk: `read`
- Parameters: `[{"name":"city_code","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_34a5f34c27a70338667b93dc`

# [中文] ### 用途: - 获取抖音热榜数据 ### 返回: - 热榜数据 # [English] ### Purpose: - Get Douyin hot search results ### Return: - Hot search results

- Risk: `read`
- Parameters: `[]`

## `mcp_3630e6991a0987e8bd637c89`

# [中文] ### 用途: - 将抖音 uid（纯数字）转换为抖音指数 API 内部使用的加密 user_id - 达人相关接口（如 fetch_daren_similar_users、fetch_daren_great_item_mile_info 等） 已自动处理此转换，通常无需手动调用本接口 - 本接口仅用于调试或需要直接拿到加密 user_id 的特殊场景 ### 参数: - uid: 抖音 uid，纯数字字符串 ### 返回: - uid: 原始输入的抖音 uid - user_id: 加密后的 user_id # [English] ### Purpose: - Convert 

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_36c6fa1a2fb670ed15e3cfe8`

# [中文] ### 用途: - 获取抖音 App 中学校信息的搜索结果。 - 根据关键词返回学校名称列表，常用于用户设置学校资料、兴趣推荐等场景。 ### 备注: - 本接口专注于学校信息搜索，仅返回学校的名称字段。 - 初次请求时 `cursor` 应传 0，分页时使用上一次返回的 `cursor`。 - 本接口响应体较简单，适合快速检索学校数据。 ### 参数: - keyword: 搜索关键词，如学校名称 "北京大学"、地区名 "北京" ### 请求体示例： ```json payload = { "keyword": "北京大学" } ``` ### 返回（部分常用字段，实际返回字段

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_39d7276717d69646335a7ea8`

话题作品/Challenge Posts

- Risk: `write`
- Parameters: `[{"name":"challenge_id","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_3a1e85451ec6473d6a40377b`

获取kol连接用户来源V1/Get kol Touch Distribution V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_3b24bb6e8414e1de77edff54`

# [中文] ### 用途: - 提取列表作品id（最多支持20个链接） ### 参数: - url: 作品链接列表 ### 返回: - 作品id列表 # [English] ### Purpose: - Extract list video id (supports up to 20 links) ### Parameters: - url: Video link list ### Return: - Video id list # [示例/Example] ```json { "urls":[ "0.53 02/26 I@v.sE Fus:/ 你别太帅了郑润泽# 现场版live # 音乐节

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_3cdd5070abf6a341a87ca723`

# [中文] ### 用途: - 获取抖音创作者平台的商单任务列表 - 支持多种筛选条件，包括行业分类、付费类型、平台渠道等 ### 重要参数使用说明: #### 行业分类组合规则: - **industry_lv1=-1 (全部)**: 当选择全部一级行业时，industry_lv2参数将被忽略，无需设置 - **industry_lv1=具体值**: 当选择具体一级行业时，可配合industry_lv2进行二级筛选 - industry_lv2=-1: 该一级行业下的所有二级分类 - industry_lv2=具体值: 该一级行业下的具体二级分类 #### 可选参数 (选择"全部"时无需传

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"greater_than_cost_progress","type":"any","required":false},{"name":"industry_lv1","type":"integer","required":false},{"name":"industry_lv2","type":"integer","required":false},{"name":"keyword","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"mission_type","type":"integer","required":false},{"name":"pay_type","type":"any","required":false},{"name":"platform_channel","type":"any","required":false},{"name":"publish_time_start","type":"any","required":false},{"name":"quick_selector_scene","type":"any","required":false},{"name":"tab_scene","type":"integer","required":false}]`

## `mcp_3d132b079b4f45f3ef979fcf`

# [中文] ### 用途: - 获取抖音创作者中心热门视频榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_3dc5f462c129ff33ef24d389`

获取投稿分析概览/Fetch item analysis overview

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_3fe7878d219496b9db7d1537`

# [中文] ### 用途: - 获取抖音综合搜索结果（V3 版本），返回视频、用户、相关搜索词等混合卡片。 - 相比 V1/V2 不支持排序与筛选条件，但翻页参数更简单，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagin

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_403bbb49f32f99a216c7fc32`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_4071fe6cedb0028f05f15f08`

提取列表直播间号/Extract list webcast id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_40c380f182fcf0a2ca323ba6`

获取作品搜索关键词统计/Fetch item search keywords statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`
