# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-4`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 77

## `mcp_c2d0bc3f252be16057b88535`

# [中文] ### 用途: - 获取视频搜索 `fetch_item_query` 接口支持的所有筛选选项取值 - 包含：垂类(categories)、时长(duration_types)、类型(label_types)、发布时间(date_types) - 调用 `fetch_item_query` 前可先查询本接口获取所需的 ID ### 返回: - categories: 垂类列表，每项包含 id / name / name_en，id 用于 category_id 参数 - duration_types: 时长列表，每项包含 id / name / name_en，id 用于 dur

- Risk: `read`
- Parameters: `[]`

## `mcp_c2fa625ad17c1781d1321ee5`

# [中文] ### 用途: - 根据抖音号获取指定用户的信息 ### 参数: - unique_id: 用户unique_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - unique_id: User unique_id ### Return: - User information # [示例/Example] unique_id = "TheChief"

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_c3982bc9557ab0a0f5dbe6a4`

# [中文] ### 用途: - 获取抖音 App 中的话题（挑战/标签）搜索结果。 - 根据关键词返回关联的话题列表，包含话题热度、封面、参与人数等信息。 ### 备注: - 仅返回话题类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页查询时使用上次响应返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，例如 "美食" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - 

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_c3f4b496289c73448479ebff`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id ### Return: - Hashtag details data # [示例/Example] ch_id = 1575791821492238

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"integer","required":true}]`

## `mcp_c4bdb721c48c49e75181cd8c`

提取直播间号/Extract webcast id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_c67848476d69099d77872434`

# [中文] ### 用途: - 获取指定趋势报告的完整详情 - 包含报告标题、封面、发布时间、所属产品、正文内容、图片资源、PDF 下载链接等 ### 参数: - report_id: 报告 ID（字符串），可从 fetch_report_search 或 fetch_insight_recommend 返回结果中获取 ### 返回: - 报告完整数据：title, cover, publish_time, business, content, images, pdf_url 等 # [English] ### Purpose: - Get full detail of a trend in

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_c79db53cec56f32c83c4de69`

# [中文] ### 用途: - 在 DOU+ 投放场景下搜索抖音用户，支持抖音号 / ID / 昵称 - 支持游标翻页 ### 参数: - keyword: 搜索关键词，支持抖音号 / ID / 昵称（必填） - count: 每页数量，默认 20 - cursor: 翻页游标，首页传 0，后续传上一页响应里返回的 cursor ### 返回: - 匹配的用户列表（含昵称、抖音号、sec_uid、粉丝数等），以及 cursor / has_more 翻页信息 # [English] ### Purpose: - Search Douyin users in the DOU+ delivery

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_c878a0d0e48931f4f5be6d24`

# [中文] ### 用途: - 获取单个热点的完整分析数据，一次请求覆盖热点详情页的全部模块 ### 参数: - topic_name: 热点名称，可从 fetch_current_hot_topic 的结果中获取 ### 返回: - trend_item: 热点指数趋势（按时间点的指数值） - content_item: 热门内容列表（视频标题、链接、封面、作者、点赞/评论数等） - play_rank_author_item: 相关达人榜（按播放量排序） - digg_rank_author_item: 相关达人榜（按点赞数排序） - fans_rank_author_item: 相关达

- Risk: `read`
- Parameters: `[{"name":"topic_name","type":"string","required":true}]`

## `mcp_c90c75174ecfcfd9eec2eba7`

# [中文] ### 用途: - 获取创作指南各类型数据的有效日期范围 ### 返回: - 创作指南可查询的起止日期 # [English] ### Purpose: - Get valid date range for the creation guide section

- Risk: `read`
- Parameters: `[]`

## `mcp_caadc22e73f248d5a497e957`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容。 - 专注于视频内容的搜索结果，不包含其他类型。 ### 备注: - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回的视频包含作者信息、播放地址、封面、互动数据等。 - 同时返回一组关键词推荐 (`guide_search_words`) 用于引导用户继续搜索。 ### 参数: - keyword: 搜索关键词，例如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_cb8e9f76c136bfa34f1749c5`

# [中文] ### 用途: - 搜索抖音用户，支持抖音号和抖音昵称搜索 ### 参数: - user_name: 用户名 (支持抖音号和抖音昵称) - 抖音号: 如 "rmrbxmt" - 抖音昵称: 如 "Y"、"人民日报" ### 返回: - 最多返回20个匹配的用户信息 - 包含用户基本信息如头像、昵称、抖音号等 # [English] ### Purpose: - Search Douyin users by Douyin ID or nickname ### Parameters: - user_name: Username (supports Douyin ID and nick

- Risk: `read`
- Parameters: `[{"name":"user_name","type":"string","required":true}]`

## `mcp_cb8eb6d3ce24deef2c270088`

# [中文] ### 用途: - 获取指定垂类的消费数据（播放量、观看时长等）随时间变化趋势 - 衡量该垂类内容被用户实际消费（观看）的热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的消费数据：每日播放总量、观看时长、独立观看人数等 # [English] ### Purpose: - Get consumption 

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_cd6fe183b71d0f5705f6b824`

获取作品总览数据/Fetch item overview data

- Risk: `write`
- Parameters: `[{"name":"fields","type":"any","required":false},{"name":"ids","type":"string","required":true}]`

## `mcp_ce53036f62bfe1ad4b766dc4`

# [中文] ### 用途: - 获取指定垂类的视频发布数量随时间变化趋势 - 用于了解某垂类的内容供给热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的发布量数据（日期 + 当日发布作品数） # [English] ### Purpose: - Get the content publish volume trend 

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_cfc26fdbccb0a22577fd4df0`

获取营销活动案例/Get Resource List

- Risk: `read`
- Parameters: `[{"name":"resource_id","type":"integer","required":true}]`

## `mcp_cff69486125f55639a83ef99`

获取首页推荐数据/Get home feed data

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_d05a4184c0d23f37859a32b9`

获取达人广场筛选字段/Get Author Market Fields

- Risk: `read`
- Parameters: `[{"name":"market_scene","type":"integer","required":false}]`

## `mcp_d063cbbff4c8104fb1dbc90c`

关键词搜索kol V1/Search Kol V1

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"platformSource","type":"string","required":true}]`

## `mcp_d071e6861df1b8c25e3ff715`

# [中文] ### 用途: - 生成s_v_web_id ### 返回: - s_v_web_id # [English] ### Purpose: - Generate s_v_web_id ### Return: - s_v_web_id

- Risk: `read`
- Parameters: `[]`

## `mcp_d0d974d36c724397f162657f`

获取创作者基本信息/Get Author Base Info

- Risk: `read`
- Parameters: `[{"name":"need_linkage_info","type":"boolean","required":false},{"name":"need_sec_uid","type":"boolean","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"recommend","type":"boolean","required":false}]`

## `mcp_d0dcddfe21d53db140686fff`

# [中文] ### 用途: - 获取指定垂类的互动数据（点赞/评论/分享/收藏等）随时间变化趋势 - 衡量该垂类内容引发用户互动的活跃程度 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的互动数据：每日点赞总数、评论总数、分享总数、收藏总数等 # [English] ### Purpose: - Get interaction

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_d40f468e279cce67f0405c29`

# [中文] ### 用途: - 抖音直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕参数数据 # [English] ### Purpose: - Douyin live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID ### Return: - Danmaku parameter data

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_d438a877424886db0958c0fe`

# [中文] ### 用途: - 获取用户收藏夹数据 ### 参数: - collects_id: 收藏夹id - max_cursor: 最大游标 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user collection data ### Parameters: - collects_id: Collection id - max_cursor: Maximum cursor - count: Maximum number ### Return: - User video data # [示例/Example]

- Risk: `read`
- Parameters: `[{"name":"collects_id","type":"string","required":true},{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_d476219c94e73beb4b86b268`

# [中文] ### 用途: - 获取用户粉丝列表 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 粉丝列表 # [English] ### Purpose: - Get user fans list ### Parameters: - sec_user_id: User sec_user_id - max_time: Maximum timestamp, default is 0, get from the retu

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false}]`

## `mcp_d502f7cd7d29074e6e095ecd`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_d53c8b291129e19b63844763`

获取kol性价比能力分析V1/Get kol Cp Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_d5b5d8ec3643171d425d4f7b`

获取创作者每日粉丝趋势/Get Author Daily Fans

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"author_type","type":"any","required":false},{"name":"end_date","type":"any","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"start_date","type":"any","required":false}]`

## `mcp_d69d6255c6f752b3f522b553`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_d6db52136e56864be44dea23`

获取用户主页二维码/Get User Profile QRCode

- Risk: `read`
- Parameters: `[{"name":"core_user_id","type":"any","required":false},{"name":"sec_uid","type":"any","required":false}]`

## `mcp_d707c226b79d2e18d95761eb`

# [中文] ### 用途: - 搜索话题，获取话题详情和相关数据 ### 参数: - keyword: 话题关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 话题详情、话题热度、相关视频数等 # [English] ### Purpose: - Search topics, get topic details and related data ### Parameters: - keyword: Topic keyword - start_date/end_da

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_d742133a79b3dff547ad4bd6`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 不支持粉丝数量、用户类型筛选查询。 ### 备注: - 初次请求 `cursor` 传 0。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） ### 请求体示例： ```json payload = { "keyword": "人工智能", "cursor": 0 } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `cursor`: 下一页游

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_d778680f93439770e64b1bca`

# [中文] ### 用途: - 获取抖音品牌热榜具体分类数据 ### 参数: - category_id: 分类id ### 返回: - 品牌热搜榜具体分类数据 # [English] ### Purpose: - Get Douyin brand hot search list detail data ### Parameters: - category_id: Category id ### Return: - Hot brand search list detail data # [示例/Example] category_id = 10

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true}]`

## `mcp_d8510b49a35e62f00501a321`

# [中文] ### 用途: - 获取抖音直播热搜榜数据 ### 返回: - 直播热搜榜数据 # [English] ### Purpose: - Get Douyin live hot search list data ### Return: - Live hot search list data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_da5313ad04dea64ce939b60b`

# [中文] ### 用途: - 获取关键词指数搜索框的热门推荐词，用作关键词指数分析的输入建议 - 注意: 这不是实时热点榜，实时热点和飙升热点请用 fetch_current_hot_topic ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条（头条当前返回空列表） - type: 推荐词类型，0=搜索热词（纯词，id 固定为 "0"），1=内容热词（带话题 id） ### 返回: - update_time: 数据更新日期（按天更新，非实时） - trend_words: 推荐词列表，含 id 和 word # [English] ### Purp

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_dab7fd77e7ed881e0129dd4a`

# [中文] ### 用途: - 获取作品评论分析-词云权重 ### 参数: - aweme_id: 作品id ### 返回: - 作品评论分析-词云权重 # [English] ### Purpose: - Get the work comment analysis word cloud weight ### Parameters: - aweme_id: Work id ### Return: - Work comment analysis word cloud weight

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_dab97c9210154c2e10d3257c`

# [中文] ### 用途: - 获取短剧视频列表 ### 参数: - series_id: 短剧id - cursor: 游标，用于翻页，第一页为0，第二页通常为count的值（如15）。 ### 返回: - 短剧视频列表数据 ### 备注: - 该接口返回短剧中的所有视频列表 - 响应中的 aweme_list 包含短剧的各集视频信息 - has_more 字段表示是否还有更多数据 # [English] ### Purpose: - Get series/playlet video list ### Parameters: - series_id: Series id - cursor:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"series_id","type":"string","required":true}]`

## `mcp_dc8dff59e031786dc77958a1`

# [中文] ### 用途: - 获取粉丝近3天感兴趣的话题 10个话题 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天感兴趣的话题 10个话题 # [English] ### Purpose: - Get the fan interest topic in the last 3 days 10 topics ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest topic in the last 3 days 10 topics

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_dce3bdf3ef0983d91d063892`

# [中文] ### 用途: - 获取单个作品数据 V2，若此接口失效，请使用 `/fetch_one_video` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2, if this interface fails, please use the `/fetch_one_video` interface, or use the APP interface. ### Parameters: - aweme_id: Video id ##

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_dd9eb1ac78d69832788e3817`

# [中文] ### 用途: - 获取用户的短剧合集列表 ### 参数: - user_id: 用户id，与sec_user_id二选一即可 - sec_user_id: 用户加密id，与user_id二选一即可 - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 ### 返回: - 用户短剧合集列表数据 ### 备注: - 该接口返回用户发布的所有短剧合集 - 响应中的 series_id 可用于获取短剧详情和视频列表 # [English] ### Purpose: - Get user's series/playlet collection list 

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_df1df99372407db88f982f20`

获取短剧演员热榜/Get Playlet Actor Rank List

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"date","type":"string","required":false},{"name":"name","type":"string","required":false},{"name":"period","type":"integer","required":false},{"name":"qualifier","type":"string","required":false}]`

## `mcp_e2a3d2c2de07c67302f50a60`

获取创作者CP合作信息/Get Author CP Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_e2bee921835f8995acfc247a`

主播搜索/Search Anchor

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_e370c12d946b6f5bb2ca472f`

# [中文] ### 用途: - 获取指定视频的视频指数解读（各分项指数的说明与归因） - 建议配合 fetch_item_index 一起使用 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频综合指数、传播指数、互动指数等分项解读 # [English] ### Purpose: - Get the interpretation of a video's index (breakdown of each sub

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_e37436e0eb00bdb14fa7183e`

# [中文] ### 用途: - 获取关键词的人群画像分析数据 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 性别分布、年龄分布、地域分布、兴趣分布等人群画像数据 # [English] ### Purpose: - Get crowd portrait analysis for a keyword ### Parameters: - keyword: The keyword

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_e398e93c93f5c3d14979be44`

# [中文] ### 用途: - 获取抖音品牌热榜分类数据 ### 返回: - 品牌热搜榜分类数据 # [English] ### Purpose: - Get Douyin brand hot search category data ### Return: - Hot brand search category data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_e47ed6b594356d1bd4ae1af1`

获取作品点赞观众画像-仅限热门榜/Fetch work like audience portrait - hot list only

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"option","type":"integer","required":false}]`

## `mcp_e4f8e0bd3b79a51083c19629`

获取用户喜欢作品数据/Get user like video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_e6b26237509270a44755baaf`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定用户主页。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法跳转到指定用户主页。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified user profile ### Parameters: - uid: User id - sec_uid: User

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_e749d989bdd1bc6899be511e`

获取作品垂类标签/Fetch item analysis involved vertical

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_e9a7ffbf81e1d5196c1b71bc`

获取星图IP活动详情/Get IP Activity Detail

- Risk: `read`
- Parameters: `[{"name":"id","type":"integer","required":true}]`

## `mcp_eae2e811aaae55fb59cf0aee`

可调用工具

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"string","required":true},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_ebb1d1273a37ec71112b239e`

# [中文] ### 用途: - 获取抖音 App 中讨论区/问答内容的搜索结果。 - 支持关键词、排序方式、发布时间、内容类型等筛选条件。 ### 备注: - 此接口专注于讨论区内容搜索（如问答讨论视频），不包含其他类型的内容。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 - 返回内容包括视频信息、作者信息、播放信息、互动数据、话题标签等。 ### 参数: - keyword: 搜索关键词，例如 "出国留学" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_ed173114736ce3250da2c8a1`

# [中文] ### 用途: - 获取抖音指数支持的所有地区列表 ### 返回: - 省份和城市的层级结构列表，可用于关键词指数的地区筛选参数 # [English] ### Purpose: - Get all supported area list for Douyin Index ### Return: - Hierarchical list of provinces and cities, used as region filter parameter in keyword index APIs

- Risk: `read`
- Parameters: `[]`

## `mcp_ef3128af6168ad016cb539fb`

# [中文] ### 用途: - 获取抖音创作者平台内容创作的合集分类列表 ### 参数: - 无需额外参数 ### 返回: - 内容创作合集分类数据 # [English] ### Purpose: - Get Douyin creator platform content creation category list ### Parameters: - No additional parameters required ### Return: - Content creation category data

- Risk: `read`
- Parameters: `[]`

## `mcp_ef6baec655443564e4f2752a`

# [中文] ### 用途: - 获取活动日历 ### 参数: - city_code: 城市编码，从城市列表获取，空为全部 - category_code: 热点榜分类编码，从热点榜分类获取，空为全部 - end_date: 快照结束时间 格式10位时间戳 - start_date: 快照开始时间 格式10位时间戳 ### 返回: - 活动日历 # [English] ### Purpose: - Get the activity calendar ### Parameters: - city_code: City code, get from city list, empty for al

- Risk: `write`
- Parameters: `[{"name":"category_code","type":"string","required":false},{"name":"city_code","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"start_date","type":"integer","required":false}]`

## `mcp_efa5ab3da0a06019ecdf9c82`

# [中文] ### 用途: - 获取抖音 App 中音乐内容的搜索结果。 - 支持关键词、排序方式、筛选条件等。 ### 备注: - 本接口专注于音乐类内容搜索，不包含其他类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回内容包含音乐基本信息、作者信息、封面、播放地址、标签等。 ### 参数: - keyword: 搜索关键词，例如 "游戏背景音乐" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_f14a887924a6c84017934d01`

获取创作者账号诊断/Fetch author diagnosis

- Risk: `write`
- Parameters: `[]`

## `mcp_f29e4a1378795455461bdea5`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_f30a8abcda6cda9fd10b9ecc`

# [中文] ### 用途: - 获取视频搜索的关键词自动补全建议 ### 参数: - query: 搜索关键词 ### 返回: - 匹配的关键词建议列表 # [English] ### Purpose: - Get keyword auto-complete suggestions for video search ### Parameters: - query: Search keyword ### Return: - Matched keyword suggestion list # [示例/Example] query = "打瓦"

- Risk: `write`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_f3bfb3cfb3fbd2a05fa81138`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor - count: Number ### Return: - Comme

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_f447909450c1efe3b2664e72`

# [中文] ### 用途: - 获取达人在指定时间范围内的热门视频列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 注意: - **日期范围不能超过30天**，否则接口会报错 ### 返回: - 达人热门视频列表（播放量、点赞数等） # [English] ### Purpose: - Get daren's top video list in a specified time range ### Pa

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_f56aff9b26a15356f618e86d`

# [中文] ### 用途: - 获取直播间送礼用户排行榜 ### 参数: - room_id: 直播间room_id - rank_type: 排行类型，默认为30不用修改。 ### 返回: - 排行榜数据 # [English] ### Purpose: - Get live room gift user ranking ### Parameters: - room_id: Room room_id - rank_type: Leaderboard type, default is 30, no need to modify. ### Return: - Leaderboard data 

- Risk: `read`
- Parameters: `[{"name":"rank_type","type":"integer","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_f6151b4b902655f15b8ed5b2`

# [中文] ### 用途: - 对比多个达人的趋势数据（粉丝增长、互动量等） ### 参数: - user_list: 达人抖音 uid 列表，逗号分隔，**最多5个** - days: 对比天数，仅支持 7 或 30 ### 返回: - 每个达人在指定天数内的趋势数据对比 # [English] ### Purpose: - Compare trend data of multiple daren/creators (follower growth, engagement, etc.) ### Parameters: - user_list: Daren uid list, comma s

- Risk: `write`
- Parameters: `[{"name":"days","type":"string","required":false},{"name":"user_list","type":"string","required":true}]`

## `mcp_f706dd3826eb9be7ffdc11d6`

# [中文] ### 用途: - 获取相关作品推荐数据 ### 参数: - aweme_id: 作品id - refresh_index: 翻页索引，默认为1，然后每次增加1用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 作品数据 # [English] ### Purpose: - Get related posts recommendation data ### Parameters: - aweme_id: Video id - refresh_index: Paging index, default is 1, then increase by 1 

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_f774f5ed84f296aab75123ef`

获取kol基本信息V1/Get kol Base Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_f78adc234b9832b5a2f208a5`

# [中文] ### 用途: - 获取热门账号 ### 参数: - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - page_num: 页码，默认1 - page_size: 每页数量，默认10 - query_tag: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "date_window": 24, "page_num": 1, "page_size": 10, "query_tag": {"value": 628, "children": [{"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"query_tag","type":"object","required":false}]`

## `mcp_f85f5d370033f1834d925571`

知识作品推荐/Knowledge Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_f86f0b006b69e51cdbb4151d`

# [中文] ### 用途: - 获取热点总榜 ### 参数: - page: 页码 - page_size: 每页数量 - type: 快照类型 snapshot 按时刻查看 range 按时间范围。 - 备注：snapshot_time 在 snapshot时有效，start_date 和 end_date 在 range 时有效 - snapshot_time: 快照时间 格式yyyyMMddHHmmss - start_date: 快照开始时间 格式yyyyMMdd - end_date: 快照结束时间 格式yyyyMMdd - sentence_tag: 热点分类标签，从热点榜分类获

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false},{"name":"type","type":"string","required":true}]`

## `mcp_f982c0f3739527f8976669c9`

获取加密图片解析/Get Sign Image

- Risk: `read`
- Parameters: `[{"name":"durationTS","type":"integer","required":false},{"name":"format","type":"string","required":false},{"name":"uri","type":"string","required":true}]`

## `mcp_f9b71d002b756427dffa13e2`

# [中文] ### 用途: - 获取与指定达人相似的达人列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 相似达人列表 # [English] ### Purpose: - Get similar daren/creators to a specified user ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - List of similar daren # [示例/Example]

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_fa9af293d6dbeb03e80fe61e`

使用接口网址生成X-Bogus参数/Generate X-Bogus parameter using API URL

- Risk: `write`
- Parameters: `[{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_fae5b14013395cab2153fa17`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "7136850194742315016"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_fb97a1e205f275aa1277a7ef`

# [中文] ### 用途: - 获取抖音创作者平台热门音乐榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过配置接口获取 - order_key: 排序键 (1=播放最高, 2=点赞最多, 4=热度最高, 5=投稿最多) - time_filter: 时间筛选 (1=24小时, 2=7天, 3=30天) ### 返回: - 热门音乐榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot music billboard data ### Parameters: - billboar

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_fc56cb3d0ee7475f21219c67`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容（V2版本接口）。 - 相较于 V1，返回字段更加详细，包括作者资料、视频多清晰度播放源、标签列表等。 ### 备注: - 初次请求时 `cursor` 传入0，`search_id`传空字符串。 - 返回的视频内容丰富，可用于推荐展示、内容抓取、智能分析等应用场景。 ### 参数: - keyword: 搜索关键词，如 "机器人" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_fc8fb6747aba52dbe4c3d9da`

# [中文] ### 用途: - 根据视频ID获取作品的统计数据 - 抖音大多数接口已经不再返回作品的播放数，只能通过此接口获取。 - 可以获取到的统计有： - 点赞数（digg_count） - 下载数（download_count） - 播放数（play_count） - 分享数（share_count） ### 参数: - aweme_ids: 作品id，支持多个视频id，用逗号隔开即可，不能超过2个，单个也可以，则无需逗号。 ### 返回: - 作品统计数据 # [English] ### Purpose: - Get the statistical data of the Post 

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_fe8774180387885e6bc9f1d7`

获取kol观众画像V1/Get kol Audience Portrait V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_fefcf43bbd9e2d280c2c1b75`

# [中文] ### 用途: - 获取活动日历详情 ### 参数: - calendar_id: 活动id ### 返回: - 活动日历详情 # [English] ### Purpose: - Get the activity calendar details ### Parameters: - calendar_id: Activity id ### Return: - Activity calendar details

- Risk: `read`
- Parameters: `[{"name":"calendar_id","type":"string","required":true}]`
