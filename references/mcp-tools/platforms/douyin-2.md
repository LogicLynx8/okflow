# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-2`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_44d321ef6eae6412c46d35e2`

# [中文] ### 用途: - 获取抖音创作者热门话题榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_451422c0f519ea23b3d246ca`

# [中文] ### 用途: - 获取抖音搜索关键词的联想推荐结果（V2 版本）。 - 根据用户已输入的关键词前缀，返回相关搜索词建议，用于实现搜索框实时补全。 ### 备注: - 返回条数由抖音决定，不支持指定数量。 - `history_words` 为可选项，传入用户此前搜索过的词（英文逗号分隔）会影响联想词排序。 - 相比 V1，V2 直接给出纯词列表 `words`，无需再从原始结构中提取。 ### 参数: - keyword: 已输入的关键词，如 "人工智能" - history_words: 可选，历史搜索词，如 "猫咪,美食" ### 请求体示例： ```json payloa

- Risk: `write`
- Parameters: `[{"name":"history_words","type":"string","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_45b6748f56f0d64346f0bef2`

# [中文] ### 用途: - 按抖音号或抖音昵称搜索直播间（V2 版本），支持游标翻页。 - 适合定位某个主播的直播间，而不是按内容关键词泛搜直播。 ### 备注: - `keyword` 匹配的是主播的抖音号或昵称，传入内容类关键词（如 "游戏"）通常匹配不到结果。 - 本接口不支持排序、发布时间、时长等筛选条件。 - 每页固定 10 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 抖音号 或 抖音昵称（必填），如 "小耳朵" - cursor: 翻页游标（首次请求传 0） ### 请求体

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_4609d8fc262df6e44b86d6ca`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_462dbb66d572575abc93e678`

# [中文] ### 用途: - 获取批量用户信息，最多支持10个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多10个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 10 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 10 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_464952270a0f092cdedcd974`

获取用户主页二维码/Get User Profile QRCode

- Risk: `read`
- Parameters: `[{"name":"core_user_id","type":"any","required":false},{"name":"sec_uid","type":"any","required":false}]`

## `mcp_47104068e351694cacc409f6`

# [中文] ### 用途: - 根据视频ID获取作品的统计数据 - 抖音大多数接口已经不再返回作品的播放数，只能通过此接口获取。 - 可以获取到的统计有： - 点赞数（digg_count） - 下载数（download_count） - 播放数（play_count） - 分享数（share_count） ### 参数: - aweme_ids: 作品id，支持多个视频id，用逗号隔开即可，不能超过2个，单个也可以，则无需逗号。 ### 返回: - 作品统计数据 # [English] ### Purpose: - Get the statistical data of the Post

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_472483a9335ccd64c79c2d23`

抖音APP注册设备/Douyin APP register device

- Risk: `read`
- Parameters: `[{"name":"proxy","type":"string","required":false}]`

## `mcp_477f07966dc824ea5e953c4f`

# [中文] ### 用途: - 搜索抖音指数下的趋势报告，支持类型/产品/年份/关键词四维筛选 ### 参数: - current_page / page_size: 分页参数（字符串） - type: 报告类型，空字符串表示全部 - "行业洞察" / "产品洞察" / "用户洞察" / "趋势洞察" - business: 所属产品（逗号分隔），可选值： - "巨量引擎", "今日头条", "抖音", "西瓜视频", "抖音电商", "仕小禄", "其他" - report_time: 发布年份（逗号分隔），如 "2024,2023" - search: 报告标题关键词 - categor

- Risk: `write`
- Parameters: `[{"name":"business","type":"string","required":false},{"name":"category","type":"string","required":false},{"name":"current_page","type":"string","required":false},{"name":"page_size","type":"string","required":false},{"name":"report_time","type":"string","required":false},{"name":"search","type":"string","required":false},{"name":"type","type":"string","required":false}]`

## `mcp_486b1905bec3030d64d4326f`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 支持通过粉丝数量、用户类型进行筛选查询。 ### 备注: - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） - douyin_user_fans: 粉丝数量筛选 - 为空: 不限 - "0_1k": 1000以下 - "1k_1w": 1000到1万 - "1w_10w": 1万到10万 - "10w_

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"douyin_user_fans","type":"string","required":false},{"name":"douyin_user_type","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_4875449e046a7f017c8a5f9a`

抖音sec_user_id转星图达人ID/Get Xingtu Author ID by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_48bd55f04eb5467e2c594f0d`

# [中文] ### 用途: - 获取当前热门搜索关键词列表 ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 关键词名称、搜索指数、增长率等 # [English] ### Purpose: - Get current hot search keywords list ### Parameters: - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Keyword name, search index, growth rate, etc.

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false}]`

## `mcp_49b090b0e426fdac59e4f97d`

查询抖音用户基本信息/Query Douyin user basic information

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_49c855e2625d8a9e3e401297`

# [中文] ### 用途: - 获取品牌的周期数据（周期性热度分析） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌周期性热度数据 # [English] ### Purpose: - Get brand cycles data (periodic popularity analysis) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_49cf304e169663f9b1bd4b97`

# [中文] ### 用途: - 获取用户的短剧合集列表 ### 参数: - user_id: 用户id，与sec_user_id二选一即可 - sec_user_id: 用户加密id，与user_id二选一即可 - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 ### 返回: - 用户短剧合集列表数据 ### 备注: - 该接口返回用户发布的所有短剧合集 - 响应中的 series_id 可用于获取短剧详情和视频列表 # [English] ### Purpose: - Get user's series/playlet collection list

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_4a891b56ecc1ed5214f297a3`

# [中文] ### 用途: - 获取抖音品牌热榜分类数据 ### 返回: - 品牌热搜榜分类数据 # [English] ### Purpose: - Get Douyin brand hot search category data ### Return: - Hot brand search category data # [示例/Example] pass

- Risk: `read`
- Parameters: `[]`

## `mcp_4b086e1e220039764acdf062`

# [中文] ### 用途: - 获取热门账号 ### 参数: - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - page_num: 页码，默认1 - page_size: 每页数量，默认10 - query_tag: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "date_window": 24, "page_num": 1, "page_size": 10, "query_tag": {"value": 628, "children": [{"v

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"query_tag","type":"object","required":false}]`

## `mcp_4b3fb6b5c73bba156581e070`

# [中文] ### 用途: - 获取城市列表 ### 参数: - 无 ### 返回: - 中国城市列表 # [English] ### Purpose: - Get city list ### Parameters: - None ### Return: - Chinese city list

- Risk: `read`
- Parameters: `[]`

## `mcp_4c0f4ac20d442aaa22ae68ce`

获取用户合辑作品数据/Get user mix video data

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_4ca83523d8d99a118a93f465`

# [中文] ### 用途: - 获取活动日历 ### 参数: - city_code: 城市编码，从城市列表获取，空为全部 - category_code: 热点榜分类编码，从热点榜分类获取，空为全部 - end_date: 快照结束时间 格式10位时间戳 - start_date: 快照开始时间 格式10位时间戳 ### 返回: - 活动日历 # [English] ### Purpose: - Get the activity calendar ### Parameters: - city_code: City code, get from city list, empty for al

- Risk: `write`
- Parameters: `[{"name":"category_code","type":"string","required":false},{"name":"city_code","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"start_date","type":"integer","required":false}]`

## `mcp_4cb3c49d9a928aa5111d700c`

# [中文] ### 用途: - 获取同城热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - city_code: 城市编码，从城市列表获取，空为全部 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 同城热点榜 # [English] ### Purpose: - Get the city hot list ### Parameters: - page: Page numb

- Risk: `read`
- Parameters: `[{"name":"city_code","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_4ef1013d92c3c37490971573`

# [中文] ### 用途: - 获取 DOU+ 达人分类列表；其分类名可用作"按分类搜索达人"接口的 name 字段 ### 返回: - 达人分类列表 # [English] ### Purpose: - Get the DOU+ talent category list; a category name can be used as the `name` of the talent search endpoint ### Return: - Talent category list

- Risk: `write`
- Parameters: `[]`

## `mcp_4fcc71e12ff55dad432d6bd3`

获取kol观众画像V1/Get kol Audience Portrait V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_4ffc4a22408d86473e4035ad`

获取kol转化视频展示V1/Get kol Convert Video Display V1

- Risk: `read`
- Parameters: `[{"name":"detailType","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"page","type":"integer","required":true}]`

## `mcp_504ba1cddf30f88411452fbe`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 # [E

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_5099cc4dc076e0d3eeb1811a`

# [中文] ### 用途: - 获取单个作品数据 V1，若此接口失效，请使用 `/fetch_one_video_v2` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id - need_anchor_info: 是否需要锚点信息，默认为False，开启后会看到一些有关视频的锚点信息，如地理位置，商户信息，商品橱窗等，可能会增加接口响应时间。 - 如果不需要锚点信息，建议保持默认值False，如果接口报错，可以尝试关闭此参数。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V1, if

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"need_anchor_info","type":"boolean","required":false}]`

## `mcp_53a902bcba1ff4417b2dd9da`

获取创作者转化能力/Get Author Convert Ability

- Risk: `read`
- Parameters: `[{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_53ed886671fe9a5163600b73`

# [中文] ### 用途: - 获取粉丝近3天搜索词 10个搜索词 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天搜索词 10个搜索词 # [English] ### Purpose: - Get the fan interest search term in the last 3 days 10 search terms ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest search term in the last 3 days 10 search terms

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_545b1907c4986f77752f7400`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)的推荐搜索结果。 - 根据输入的关键词，返回相关的话题建议列表，包含话题名称、浏览量等信息。 ### 备注: - 本接口可用于话题联想推荐场景，如输入关键词实时展示相关热门话题。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 ### 参数: - keyword: 搜索关键词，如 "游戏" ### 请求体示例： ```json payload = { "keyword": "游戏" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `sug_list[]

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_54d0546075f41448705c1451`

# [中文] ### 用途: - 搜索抖音用户，支持抖音号和抖音昵称搜索 ### 参数: - user_name: 用户名 (支持抖音号和抖音昵称) - 抖音号: 如 "rmrbxmt" - 抖音昵称: 如 "Y"、"人民日报" ### 返回: - 最多返回20个匹配的用户信息 - 包含用户基本信息如头像、昵称、抖音号等 # [English] ### Purpose: - Search Douyin users by Douyin ID or nickname ### Parameters: - user_name: Username (supports Douyin ID and nick

- Risk: `read`
- Parameters: `[{"name":"user_name","type":"string","required":true}]`

## `mcp_54eeda0fd4b3689f9c41eb16`

# [中文] ### 用途: - 获取达人在指定时间范围内的热门视频列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 注意: - **日期范围不能超过30天**，否则接口会报错 ### 返回: - 达人热门视频列表（播放量、点赞数等） # [English] ### Purpose: - Get daren's top video list in a specified time range ### Pa

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_556020721fe2f3c03d936949`

# [中文] ### 用途: - 获取品牌搜索的自动补全建议列表 ### 参数: - keyword: 品牌名称关键词 ### 返回: - 匹配的品牌列表（品牌名称、分类ID等） # [English] ### Purpose: - Get brand search auto-complete suggestion list ### Parameters: - keyword: Brand name keyword ### Return: - Matched brand list (brand name, category ID, etc.) # [示例/Example] keyword =

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_56fc37f6056261635787f072`

# [中文] ### 用途: - 对比多个达人的趋势数据（粉丝增长、互动量等） ### 参数: - user_list: 达人抖音 uid 列表，逗号分隔，**最多5个** - days: 对比天数，仅支持 7 或 30 ### 返回: - 每个达人在指定天数内的趋势数据对比 # [English] ### Purpose: - Compare trend data of multiple daren/creators (follower growth, engagement, etc.) ### Parameters: - user_list: Daren uid list, comma s

- Risk: `write`
- Parameters: `[{"name":"days","type":"string","required":false},{"name":"user_list","type":"string","required":true}]`

## `mcp_583cf491dcb3da8ff562c1fa`

# [中文] ### 用途: - 获取抖音 App 中根据关键词搜索到的用户列表。 - 不支持粉丝数量、用户类型筛选查询。 ### 备注: - 初次请求 `cursor` 传 0。 - 返回的数据仅包含「用户信息」，不包括视频、话题、音乐等内容。 ### 参数: - keyword: 搜索关键词，如 "人工智能" - cursor: 翻页游标（首次请求传0） ### 请求体示例： ```json payload = { "keyword": "人工智能", "cursor": 0 } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `cursor`: 下一页游

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_597a8493e643aff0115d4329`

# [中文] ### 用途: - 获取抖音创作者热点榜单数据 ### 参数: - billboard_tag: 热点标签，多个标签用逗号分隔 可选值: - 站内玩法: 1004,1000,1002,1003,1001 - 话题互动: 20001,20006,20000,20003,20005,20002,20 - 娱乐: 2007,2000,2011,2012,2009,2010,2004,2005,2003,2008,2001,2002,2006 - 社会: 4005,4006,4007,4003,4004,4000 - 二次元: 13000 - 交通: 23000 - 亲子: 19000

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"string","required":false},{"name":"city_code","type":"any","required":false},{"name":"hot_search_type","type":"integer","required":false}]`

## `mcp_5da612681654fa197e3b5eb9`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_5e16820aae367fdfede772b9`

获取用户主页作品数据/Get user homepage video data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_type","type":"string","required":false},{"name":"max_cursor","type":"string","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_5ec6ce3ef90a4e0fcb38031b`

# [中文] ### 用途: - 搜索话题，获取话题详情和相关数据 ### 参数: - keyword: 话题关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 话题详情、话题热度、相关视频数等 # [English] ### Purpose: - Search topics, get topic details and related data ### Parameters: - keyword: Topic keyword - start_date/end_da

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_5f0c92820a587b1de6d0fa90`

获取kol连接用户来源V1/Get kol Touch Distribution V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_5f3920d0fb4c879a9a692e6b`

获取创作者传播价值/Get Author Spread Info

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"range","type":"integer","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_5f70deb9dd72dd37c1cc2f41`

获取创作者位置信息/Get Author Local Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_60ef80aebeb345a5cf31a246`

获取创作者每日粉丝趋势/Get Author Daily Fans

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"author_type","type":"any","required":false},{"name":"end_date","type":"any","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"start_date","type":"any","required":false}]`

## `mcp_61052f822e7a7ce010d6f20b`

# [中文] ### 用途: - 生成弹幕xb签名 ### 参数: - user_agent: 用户浏览器代理 - room_id: 房间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕xb签名 # [English] ### Purpose: - Generate danmu xb signature ### Parameters: - user_agent: User browser agent - room_id: Room ID - user_unique_id: User unique ID ### Return: - Danmu xb signatur

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_agent","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_611674069c29ba6563d3558b`

# [中文] ### 用途: - 获取指定抖音账号在 DOU+ 投放页可推广的作品列表，包含每个作品的点赞、评论、播放等数据 ### 参数: - sec_uid: 投放账号的 sec_uid（必填） - count: 返回作品数量，默认 30 - target_id: 推广目标（DOU+ 页面上的目标卡片）ID，默认 31（点赞评论量）。31=点赞评论量, 32=粉丝量, 33=主页浏览量, 37=视频播放量, 40=直播间人气, 45=评论链接点击, 63=展示给粉丝, 78=高质量互动。**只拉作品列表的话用默认 31 即可** - aim_ids: 可选高级参数——投放优化目标编码（多个

- Risk: `write`
- Parameters: `[{"name":"aim_ids","type":"any","required":false},{"name":"count","type":"any","required":false},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_61bb64153dcd505ec2bc1281`

# [中文] ### 用途: - 获取相关作品推荐数据 ### 参数: - aweme_id: 作品id - refresh_index: 翻页索引，默认为1，然后每次增加1用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 作品数据 # [English] ### Purpose: - Get related posts recommendation data ### Parameters: - aweme_id: Video id - refresh_index: Paging index, default is 1, then increase by 1

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_622332bd486d33181c62d607`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - sort_type: 0:综合排序 1:最多点赞 2:最新发布 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_622da1f70c6203b2b5e2c8b8`

# [中文] ### 用途: - 获取达人粉丝分析数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝性别分布、年龄分布、地域分布、活跃时间等 # [English] ### Purpose: - Get daren fans analysis data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Fans gender, age, region distribution, act

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_62b6e97783f930bd9dd68477`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_634914f8802ac7da63e0d150`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_63b58843d65647994f1cfacb`

# [中文] ### 用途: - 获取指定垂类下**创作者**人群画像（即"发布该垂类视频的作者"画像） - 用于了解某垂类创作者的性别、年龄、地域、活跃时段等特征 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 创作者画

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_645e5046d78bc24b23d9b461`

获取星图热榜分类/Get Ranking List Catalog

- Risk: `read`
- Parameters: `[{"name":"biz_scene","type":"string","required":false},{"name":"codes","type":"string","required":false}]`

## `mcp_64cfc72240b0da9309de90e3`

# [中文] ### 用途: - 获取单个作品数据 V2，若此接口失效，请使用 `/fetch_one_video` 接口，或使用APP接口。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2, if this interface fails, please use the `/fetch_one_video` interface, or use the APP interface. ### Parameters: - aweme_id: Video id ##

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_66f87d5092a60d08c761fde1`

# [中文] ### 用途: - 加密用户uid到sec_user_id ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Encrypt user uid to sec_user_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "1673937488185292"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_67427f9c181231f1bdf86a04`

# [中文] ### 用途: - 获取指定用户主页的作品列表（简洁版接口，支持游标翻页） ### 参数: - sec_uid: 用户 sec_uid（必填） - cursor: 翻页游标（字符串），首页传 "0"，后续传上一页响应里的 cursor - count: 每页数量，默认 10 ### 返回: - 用户作品列表，以及翻页信息 # [English] ### Purpose: - Get a user's homepage works (concise endpoint, cursor pagination) ### Parameters: - sec_uid: User sec_ui

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_67a37e8531ed96943ce7cb84`

# [中文] ### 用途: - 根据当前报告 ID 获取相关推荐的其他报告 - 通常用于报告详情页底部的"相关推荐"模块 ### 参数: - report_id: 当前正在查看的报告 ID，从 fetch_report_search 或 fetch_insight_recommend 获取 ### 返回: - 相关推荐的报告列表（含 ID、标题、封面、发布时间等） # [English] ### Purpose: - Get related insight recommendations based on a current report ID - Typically used for th

- Risk: `read`
- Parameters: `[{"name":"report_id","type":"string","required":true}]`

## `mcp_685aa4288953f25b9d57db39`

# [中文] ### 用途: - 获取指定作品的弹幕列表，支持管理和筛选弹幕 ### 参数: - item_id: 作品ID (必需参数，从作品链接或API获取) - count: 每页弹幕数量 (建议20，范围1-100) - offset: 偏移量 (分页使用，起始位置) - order_type: 排序类型 (1=时间排序, 2=其他排序) - is_blocked: 是否获取被屏蔽的弹幕 (false=正常弹幕, true=被屏蔽弹幕) ### 返回: - 作品弹幕列表数据 # [English] ### Purpose: - Get danmaku list for specifie

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"is_blocked","type":"boolean","required":false},{"name":"item_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"order_type","type":"integer","required":false}]`

## `mcp_68d3cbfb64e95ca96ffa05f6`

获取视频互动分析/Get Item Report Interaction Analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_695790bca860b86aecb6b2d9`

获取创作者商业卡片信息/Get Author Business Card Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true}]`

## `mcp_6983cb3d978820b088109fca`

# [中文] ### 用途: - 获取多个关键词的指数解读数据（综合指数、搜索指数、内容指数等） - 建议配合 fetch_multi_keyword_hot_trend 一起使用 ### 参数: - keyword_list: 关键词列表，逗号分隔 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔，留空表示全国 ### 返回: - 关键词综合指数、搜索指数、内容指数解读 # [English] ### Purp

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_6a5f2c40f2fceddfeb2d9a91`

# [中文] ### 用途: - 将抖音 uid（纯数字）转换为抖音指数 API 内部使用的加密 user_id - 达人相关接口（如 fetch_daren_similar_users、fetch_daren_great_item_mile_info 等） 已自动处理此转换，通常无需手动调用本接口 - 本接口仅用于调试或需要直接拿到加密 user_id 的特殊场景 ### 参数: - uid: 抖音 uid，纯数字字符串 ### 返回: - uid: 原始输入的抖音 uid - user_id: 加密后的 user_id # [English] ### Purpose: - Convert

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_6aea13e11ff09ea3fbe220f7`

根据抖音用户ID获取游客星图kolid/Get XingTu kolid by Douyin User ID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_6bc37888408adede17768ffa`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cur

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_6bf2e0ddc59b5cc7c6a16b7b`

# [中文] ### 用途: - 使用Short ID获取用户信息 ### 参数: - short_id: 用户Short ID ### 返回: - 用户信息 # [English] ### Purpose: - Get user information by Short ID ### Parameters: - short_id: User Short ID ### Return: - User information # [示例/Example] short_id = "114131058"

- Risk: `read`
- Parameters: `[{"name":"short_id","type":"string","required":true}]`

## `mcp_6c7b0a79b7169a1a80cc5473`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the secon

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_6d12ae0ae3a7c64d75313a0c`

# [中文] ### 用途: - 获取抖音音乐热榜数据 ### 参数: - chart_type: 榜单类型，默认值为'hot'，支持下面的值： - 'hot': 热门榜 - 'trending': 飙升榜 - 'original': 原创榜 - cursor: 游标，默认值为'0'，用于分页获取数据，每次请求后会返回下一个游标值，并且通过 `has_more` 字段指示是否有更多数据可供获取。 ### 返回: - 音乐热搜榜数据 # [English] ### Purpose: - Get Douyin music hot search list data ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"chart_type","type":"string","required":false},{"name":"cursor","type":"string","required":false}]`

## `mcp_6d6479bcc170c34bb0315b0a`

# [中文] ### 用途: - 获取抖音创作者活动列表数据 ### 参数: - start_time: 开始时间戳 - end_time: 结束时间戳 ### 返回: - 创作者活动列表数据 # [English] ### Purpose: - Get Douyin creator activity list data ### Parameters: - start_time: Start timestamp - end_time: End timestamp ### Return: - Creator activity list data # [示例/Example] start_time

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"integer","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_6e2f8e91c068518f585ddd52`

# [中文] ### 用途: - 获取指定垂类下**消费者**人群画像（即"观看该垂类视频的用户"画像） - 与 fetch_content_author_portrait 互为补充：一个看作者，一个看观众 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 per

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_6e6cb1b3857a74823833316a`

# [中文] ### 用途: - 获取高点赞率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_6ea18578a8b4258912f4d98b`

获取创作者账号诊断/Fetch author diagnosis

- Risk: `write`
- Parameters: `[]`

## `mcp_701779cde08f0b14b0183940`

获取作品搜索关键词统计/Fetch item search keywords statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_70dd1a56e15c0b40366cf623`

知识作品推荐/Knowledge Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_70dfbc755d1ea537ed6f9ef7`

# [中文] ### 用途: - 获取关键词的关联词分析，包含搜索关联词和内容关联词 - 展示关联词图谱和关联词排名 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期（建议为周一），格式 YYYYMMDD - end_date: 结束日期（**必须为周日**），格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 注意: - **关联分析的日期范围必须以周日为终止日期**，例如 start_date=20260330, end_date=20260405（周日） - 如果 end_date 不是周日，

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_70ea6f299ecdf5b25c8c88e5`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "7136850194742315016"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_717c848d7859e6fe94cc54c8`

# [中文] ### 用途: - 获取用户收藏夹数据 ### 参数: - collects_id: 收藏夹id - max_cursor: 最大游标 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user collection data ### Parameters: - collects_id: Collection id - max_cursor: Maximum cursor - count: Maximum number ### Return: - User video data # [示例/Example]

- Risk: `read`
- Parameters: `[{"name":"collects_id","type":"string","required":true},{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_74dc8fff33a78e865bc7db9a`

# [中文] ### 用途: - 生成ttwid ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_75ed7b72ac67301f0952e950`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_76521e28f8e83953c44dcdfe`

获取kol基本信息V1/Get kol Base Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"platformChannel","type":"string","required":true}]`

## `mcp_76c9346eaaaa121646701e34`

获取kol连接用户V1/Get kol Link Struct V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_790e6715380badd3617edf96`

# [中文] ### 用途: - 获取抖音创作者中心配置信息 ### 返回: - 创作者中心配置数据 # [English] ### Purpose: - Get Douyin creator material center configuration ### Return: - Creator material center config data

- Risk: `read`
- Parameters: `[]`

## `mcp_798bcf8c784d082c5b225caa`

导出投稿作品列表/Download item list

- Risk: `write`
- Parameters: `[{"name":"max_cursor","type":"integer","required":true},{"name":"min_cursor","type":"integer","required":true},{"name":"need_long_article","type":"boolean","required":false},{"name":"type_filters","type":"array","required":false}]`
