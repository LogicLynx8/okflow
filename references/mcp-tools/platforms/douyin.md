# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_00af597bf5feafcc0e0c5f94`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，不要超过20，建议保持不变。 - sort_type: 排序类型，可选值如下： - `0`: 最新排序-默认 - `1`: 最热排序 - channel: 抖音渠道版本，可选值如下： - `normal`: 正常版抖音-默认 - `lite`: 极速版抖音 - 说明：正常版抖音在某些用户主页时无法查看到最新的抖音视频，这个时候可以选

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_00da595142344ce9026a436e`

# [中文] ### 用途: - 获取抖音视频合集作品列表数据 ### 参数: - mix_id: 合集id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 视频合集作品列表数据 # [English] ### Purpose: - Get Douyin video mix post list data ### Parameters: - mix_id: Mix id - cursor: Cursor, used for paging, the first page is 0,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mix_id","type":"string","required":true}]`

## `mcp_03e9914057c5765d5df2eae0`

生成抖音短链接/Generate Douyin short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_04fe4fcb9e6c0cacc53169e7`

# [中文] ### 用途: - 获取多个关键词在指定时间范围内的热度趋势数据 - 可对比多个关键词的热度变化 ### 参数: - keyword_list: 关键词列表，逗号分隔，如 "美食,旅游" - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 - region: 地区筛选，逗号分隔（如 "云南,上海,北京"），留空表示全国 ### 返回: - 每日热度趋势数据 # [English] ### Purpose: - Get hot trend d

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword_list","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_0517120567bb0fecfe82015c`

# [中文] ### 用途: - 获取挑战榜 ### 参数: - page: 页码 - page_size: 每页数量 - keyword: 热点搜索词 ### 返回: - 挑战榜 # [English] ### Purpose: - Get the challenge list ### Parameters: - page: Page number - page_size: Number of items per page - keyword: Hot search term ### Return: - Challenge list

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true}]`

## `mcp_06a0469180e11eca2bf15afc`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor - count: Number ### Return: - Comme

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_087e3be74d59c569ae2d44b0`

# [中文] ### 用途: - 获取抖音创作者中心某个话题/热点/道具/音乐的相关视频列表 - 通过其他榜单接口（如 fetch_creator_hot_spot_billboard、fetch_creator_hot_topic_billboard）拿到 query_id 后，再用本接口拉取该条目下的相关视频 ### 参数: - query_id: 查询ID（话题ID/热点ID等） - billboard_type: 榜单类型 - 2: 热点 - 3: 话题 - 4: 道具 - 5: 音乐 - limit: 每页数量 (默认 20, 范围 1-100) - offset: 偏移量 (分页起

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"query_id","type":"string","required":true}]`

## `mcp_090ef0edbd8d0e4dcdba8d99`

获取kol粉丝趋势V1/Get kol Daily Fans V1

- Risk: `read`
- Parameters: `[{"name":"endDate","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"startDate","type":"string","required":true}]`

## `mcp_09321d0c4d3ad49a361df986`

# [中文] ### 用途: - 获取抖音 App 中话题(挑战/标签)搜索的结果，使用 V2 版本 API。 - 支持关键词搜索，返回匹配的话题详情，包括话题名称、话题封面、浏览量、参与人数等。 ### 备注: - 本接口专注于搜索话题（Challenge/Hashtag）内容，不包含视频或直播等其他类型。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串，后续翻页请使用上一次返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "游戏" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_09d9d92234dc8175f8cbfb90`

获取达人广场筛选字段/Get Author Market Fields

- Risk: `read`
- Parameters: `[{"name":"market_scene","type":"integer","required":false}]`

## `mcp_0a9c7ceb7d4a5887270c9059`

# [中文] ### 用途: - 根据分享口令获取分享信息，比如抖音文章的分享口令提取分享人信息和文章ID等然后再去请求单一作品数据接口获取文章内容。 ### 参数: - share_code: 分享口令 ### 返回: - 分享信息，包含分享人信息和文章ID等 # [English] ### Purpose: - Get share info by share code, such as extracting sharer information and article ID from Douyin article share code, and then requesting a sing

- Risk: `read`
- Parameters: `[{"name":"share_code","type":"string","required":true}]`

## `mcp_0b4bddd6e406216375dd370c`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified video ### Parameters: - aweme_id: Video id ### Return: - Share link # [示例/Example] aweme_id = "7197598285882789120"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_0cab000eea112f08dfdbdc46`

# [中文] ### 用途: - 按视频标题/关键词搜索视频（V4 版本），支持游标翻页。 - 关键词匹配的是视频标题，也可以直接传入视频ID或视频分享链接来精确定位一条视频。 ### 备注: - 本接口不支持排序、发布时间、时长、内容类型等筛选条件，只有关键词与翻页参数。 - 每页固定 12 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 视频标题/关键词（必填），如 "猫咪" - cursor: 翻页游标（首次请求传 0） ### 请求体示例： ```json payload = { "ke

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_0dba86bf64e776a21152e084`

获取创作者受众画像分布/Get Author Audience Distribution

- Risk: `read`
- Parameters: `[{"name":"link_type","type":"integer","required":true},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_0e5264c5c192e725c5ea43a1`

# [中文] ### 用途: - 获取抖音创作者热门道具榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_0f5c1975398bd163ab3a75e4`

游戏作品推荐/Game Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_10beca61c89d566caeb1e384`

获取kol性价比能力分析V1/Get kol Cp Info V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_10c51838163df9f0b7f025f1`

抖音UID转星图达人ID/Get Xingtu Author ID by Douyin UID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_10d28699aedd36d8b64be711`

# [中文] ### 用途: - 获取达人核心指标数据 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 粉丝数、获赞数、作品数、互动率等核心指标 # [English] ### Purpose: - Get daren core metrics data ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - Follower count, like count, video count, enga

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_12e9b4b034641c4f005ed9eb`

获取用户喜欢作品数据/Get user like video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_148c643698b33bf6cc888052`

# [中文] ### 用途: - 获取短剧视频列表 ### 参数: - series_id: 短剧id - cursor: 游标，用于翻页，第一页为0，第二页通常为count的值（如15）。 ### 返回: - 短剧视频列表数据 ### 备注: - 该接口返回短剧中的所有视频列表 - 响应中的 aweme_list 包含短剧的各集视频信息 - has_more 字段表示是否还有更多数据 # [English] ### Purpose: - Get series/playlet video list ### Parameters: - series_id: Series id - cursor:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"series_id","type":"string","required":true}]`

## `mcp_15ecf6f6b799e10e371dd588`

# [中文] ### 用途: - 获取热度飙升的话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags":

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_1646aa20ecd1c60ae233a37d`

# [中文] ### 用途: - 获取抖音创作者平台指定分类的内容创作课程 ### 参数: - category_id: 分类ID (更多分类ID请通过内容创作合集分类接口获取) 常见分类ID示例: - 184: 视频创作 - 185: 直播创作 - 186: 图文创作 - 188: 美食视频创作 - 180: 内容创作基础 - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) ### 返回: - 指定分类的内容创作课程数据 # [English] ### Purpose

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_16a2ee47ed51148b13778e10`

# [中文] ### 用途: - 获取上升热点榜 ### 参数: - page: 页码 - page_size: 每页数量 - order: 排序方式 - rank 按热度排序 - rank_diff 按排名变化 - sentence_tag: 热点分类标签，从热点榜分类获取，多个分类用逗号分隔，空为全部 - keyword: 热点搜索词 ### 返回: - 上升热点榜 # [English] ### Purpose: - Get the rising hot list ### Parameters: - page: Page number - page_size: Number of ite

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false}]`

## `mcp_16d9e10e42d49f983e1f92dc`

# [中文] ### 用途: - 获取抖音 App 中搜索关键词的联想推荐结果。 - 根据用户输入的关键词，返回相关搜索词建议，用于提升搜索体验。 ### 备注: - 通常用于实现搜索框实时推荐（如输入时下拉补全）。 - 返回的推荐词经过抖音推荐系统内部打分排序。 ### 参数: - keyword: 输入的关键词，如 "人工智能" ### 请求体示例： ```json payload = { "keyword": "人工智能" } ``` ### 返回（部分常用字段，实际返回字段更多，一切以实际响应为准）: - `status_code`: 状态码（0 表示成功） - `status_msg

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_16e4d333880c47c528848eb1`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接列表（最多支持10个链接） ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link list (supports up to 10 links) ### Return: - If the sec_user_

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_170d76af05d4f4aaa3c59d8c`

# [中文] ### 用途: - 获取短剧详情信息 ### 参数: - series_id: 短剧id ### 返回: - 短剧详情数据 ### 备注: - 该接口返回短剧的详细信息，包括： - 短剧名称、描述、封面 - 作者信息 - 总集数、更新状态 - 播放量、收藏量等统计数据 - 付费信息（如有） # [English] ### Purpose: - Get series/playlet detail information ### Parameters: - series_id: Series id ### Return: - Series detail data ### Note:

- Risk: `read`
- Parameters: `[{"name":"series_id","type":"string","required":true}]`

## `mcp_17b69bbc90d1b050f30d841b`

获取创作者视频内容分布/Get Author Video Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_17d2826226b3028a5129d979`

# [中文] ### 用途: - 获取指定垂类的消费数据（播放量、观看时长等）随时间变化趋势 - 衡量该垂类内容被用户实际消费（观看）的热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的消费数据：每日播放总量、观看时长、独立观看人数等 # [English] ### Purpose: - Get consumption

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_17fdb5cd0955c8f1daf8af97`

# [中文] ### 用途: - 获取用户粉丝列表 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 粉丝列表 # [English] ### Purpose: - Get user fans list ### Parameters: - sec_user_id: User sec_user_id - max_time: Maximum timestamp, default is 0, get from the retu

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false}]`

## `mcp_18618f82eec052fae18ef278`

投放数据概览(账号/视频/直播)/Delivery analysis overview

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_1863eda5f41a59400b61818a`

获取用户收藏夹/Get user collection

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_1e81a407394d90670c7de61a`

生成短链接

- Risk: `read`
- Parameters: `[{"name":"target_url","type":"string","required":true}]`

## `mcp_202f6dedfe49922710d733fa`

# [中文] ### 用途: - 获取指定垂类下创作热门话题 ### 参数: - tag_id: 垂类ID（同 fetch_item_query 的 category_id） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期 "1"/"3"/"7" - end_date: 结束日期。**仅当 period=7 时必须为周日**，period=1/3 时可为任意日期 - rank_type: 排序类型，"index"=指数, "ri

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"rank_type","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_20a012ba423a1c5d8c0a6cda`

# [中文] ### 用途: - 抖音直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID ### 返回: - 弹幕参数数据 # [English] ### Purpose: - Douyin live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID ### Return: - Danmaku parameter data

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":true}]`

## `mcp_20cd81cf70dec25f3cce03f0`

批量获取视频的最高画质播放链接/Batch get the highest quality play URL of videos

- Risk: `write`
- Parameters: `[{"name":"aweme_ids","type":"string","required":false},{"name":"region","type":"any","required":false}]`

## `mcp_20d5d5d1ca7adbebaa69c81e`

# [中文] ### 用途: - 获取抖音创作者平台的行业分类配置 - 返回所有可用的行业分类层级结构 - **建议在调用商单任务列表接口前先调用此接口获取完整的行业分类信息** ### 重要说明: - 此接口已优化为Redis缓存，首次调用后数据将缓存30天 - 缓存键: `douyin_creator:industry_categories` - 数据结构包含一级行业和二级行业的完整映射关系 ### 数据结构: ```json { "status_code": 0, "status_msg": "success", "data": { "industry_categories": [ {"

- Risk: `read`
- Parameters: `[]`

## `mcp_20dac082ee77dddb33fd9769`

获取创作者性价比与效果预估/Get Author Commerce Spread Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true}]`

## `mcp_22546b16c9e5e21c7f11463c`

获取星图IP日历行业列表/Get IP Activity Industry List

- Risk: `read`
- Parameters: `[]`

## `mcp_22761b40f83b44d7b71dad37`

话题作品/Challenge Posts

- Risk: `write`
- Parameters: `[{"name":"challenge_id","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_23317fa3d5e59da7acd98c6e`

# [中文] ### 用途: - 按标题/关键词搜索 DOU+ 视频，支持游标翻页 ### 参数: - keyword: 视频标题/关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 12 ### 返回: - 匹配的视频列表，以及翻页信息 # [English] ### Purpose: - Search DOU+ videos by title/keyword, with cursor pagination ### Parameters: - keyword: Video title or keyword (requ

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_23c5035fe488f8e919aae667`

# [中文] ### 用途: - 获取抖音 App 中的话题（挑战/标签）搜索结果。 - 根据关键词返回关联的话题列表，包含话题热度、封面、参与人数等信息。 ### 备注: - 仅返回话题类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页查询时使用上次响应返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，例如 "美食" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_247336afa60ef15e00a2b4dd`

关键词搜索kol V1/Search Kol V1

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"platformSource","type":"string","required":true}]`

## `mcp_25803968a3f54ace3fb04c19`

# [中文] ### 用途: - 获取账号粉丝数据趋势 ### 参数: - sec_uid: 用户sec_id - option: 选项，2 新增点赞量 3 新增作品量 4 新增评论量 5 新增分享量 - date_window: 数据点粒度(小时)，可选 1/24，代表每小时一个点/每天一个点，默认24 ### 返回: - 账号粉丝数据趋势 # [English] ### Purpose: - Get the account fan data trend ### Parameters: - sec_uid: User sec_id - option: Option, 2 New like 3

- Risk: `read`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_2634d17de51de8c2660c790d`

获取创作者主页作品列表/Get Author Homepage Videos

- Risk: `read`
- Parameters: `[{"name":"end_time","type":"any","required":false},{"name":"is_star_item","type":"any","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"start_time","type":"any","required":false}]`

## `mcp_272ef053db2fa079989bdf6b`

# [中文] ### 用途: - 搜索抖音指数视频库，支持垂类、时长、类型、发布时间四维筛选 - 结果包含视频基础信息、播放/点赞/粉丝等核心数据 ### 参数: - query: 搜索关键词（必填），例如 "美食" - category_id: 垂类ID（字符串），默认 "0"=全部 - 常用示例：601=剧情, 602=明星, 603=综艺, 604=电影, 605=电视剧, 606=音乐, 607=二次元, 608=游戏, 609=社会时政, 612=舞蹈, 615=科技, 617=母婴, 619=生活家居, 628=美食, 629=旅行, 631=时尚, 633=体育, 635=汽车

- Risk: `write`
- Parameters: `[{"name":"category_id","type":"string","required":false},{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_27512256690d14666ff976fc`

获取作品垂类标签/Fetch item analysis involved vertical

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_27cb52b65740347ef56ae43b`

获取单个视频播放量(含详情)/Get Item Play Count

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_288f3822fabed925344340b8`

# [中文] ### 用途: - 生成抖音视频分享二维码 ### 参数: - object_id: 作品id或作者uid ### 返回: - 二维码数据 # [English] ### Purpose: - Generate Douyin video share QR code ### Parameters: - object_id: Video id or author uid ### Return: - QR code data # [示例/Example] object_id = "7348044435755846962"

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true}]`

## `mcp_28c8bcc833e8dde4d0e61b07`

获取视频详情报告/Get Item Report Detail

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_2a6e2d4e43de884c50ffe848`

# [中文] ### 用途: - 获取抖音创作者平台的商单任务列表 - 支持多种筛选条件，包括行业分类、付费类型、平台渠道等 ### 重要参数使用说明: #### 行业分类组合规则: - **industry_lv1=-1 (全部)**: 当选择全部一级行业时，industry_lv2参数将被忽略，无需设置 - **industry_lv1=具体值**: 当选择具体一级行业时，可配合industry_lv2进行二级筛选 - industry_lv2=-1: 该一级行业下的所有二级分类 - industry_lv2=具体值: 该一级行业下的具体二级分类 #### 可选参数 (选择"全部"时无需传

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"greater_than_cost_progress","type":"any","required":false},{"name":"industry_lv1","type":"integer","required":false},{"name":"industry_lv2","type":"integer","required":false},{"name":"keyword","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"mission_type","type":"integer","required":false},{"name":"pay_type","type":"any","required":false},{"name":"platform_channel","type":"any","required":false},{"name":"publish_time_start","type":"any","required":false},{"name":"quick_selector_scene","type":"any","required":false},{"name":"tab_scene","type":"integer","required":false}]`

## `mcp_2c5672984b4a6fd7fbb5a4b5`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_2d8a327605d003e36e1e1fc2`

获取相似创作者推荐/Get Recommend Similar Star Authors

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"page","type":"integer","required":false},{"name":"similar_type","type":"string","required":false}]`

## `mcp_2da25013cbfe3b3ac61bd76e`

# [中文] ### 用途: - 在 DOU+ 投放场景下搜索抖音用户，支持抖音号 / ID / 昵称 - 支持游标翻页 ### 参数: - keyword: 搜索关键词，支持抖音号 / ID / 昵称（必填） - count: 每页数量，默认 20 - cursor: 翻页游标，首页传 0，后续传上一页响应里返回的 cursor ### 返回: - 匹配的用户列表（含昵称、抖音号、sec_uid、粉丝数等），以及 cursor / has_more 翻页信息 # [English] ### Purpose: - Search Douyin users in the DOU+ delivery

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_2dcec0182a64a05659ee6ae3`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 此接口稳定性可能不如 V1版本，作为备用接口。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_2f73be1502e5fd3f916f8cb8`

# [中文] ### 用途: - 获取搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 搜索榜 # [English] ### Purpose: - Get the search list ##

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_3084938ea1620be671555c25`

# [中文] ### 用途: - 获取全部内容词 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 24/72/168，代表近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 全部内容词 # [English] ### Purpose: - Get the list of all conte

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_30d47f7d7543f71945d9e3df`

# [中文] ### 用途: - 获取视频搜索的关键词自动补全建议 ### 参数: - query: 搜索关键词 ### 返回: - 匹配的关键词建议列表 # [English] ### Purpose: - Get keyword auto-complete suggestions for video search ### Parameters: - query: Search keyword ### Return: - Matched keyword suggestion list # [示例/Example] query = "打瓦"

- Risk: `write`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_31d1d8395f5c0f5ec45e1ba0`

获取kol热词分析评论V1/Get Author Hot Comment Tokens V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_32d6c4a4c6a65209f4e85a1d`

# [中文] ### 用途: - 获取垂类内容标签 ### 参数: - 无 ### 返回: - 垂类内容标签 ### 注意: - 该接口用于获取垂类内容标签，用于 tags/query_tag 参数构建 ### 示例: 已知顶级垂类内容标签 `美食`，它的顶级垂类id为 `628`；`美食` 的子垂类标签 `品酒教学`，它的子垂类id为 `62802`。 那么构建标签查询参数为 `{"value": 628, "children": [{"value": 62802}]}` 如果需要多个子垂类标签，所有的美食子垂类标签为 `{"value":628,"children":[{"value":6

- Risk: `read`
- Parameters: `[]`

## `mcp_336045ebbff7b20c4f42f5a6`

获取加密图片解析/Get Sign Image

- Risk: `read`
- Parameters: `[{"name":"durationTS","type":"integer","required":false},{"name":"format","type":"string","required":false},{"name":"uri","type":"string","required":true}]`

## `mcp_349e5d735a40da1304b659c9`

获取kol热词分析内容V1/Get Author Content Hot Comment Keywords V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_3680bc6108ca407b49fc7063`

# [中文] ### 用途: - 搜索达人，获取达人列表建议 ### 参数: - keyword: 达人昵称关键词 - total: 返回数量，默认20 ### 返回: - 匹配的达人列表（包含达人ID、昵称、头像、粉丝数等） # [English] ### Purpose: - Search for daren/creators, get suggestion list ### Parameters: - keyword: Daren nickname keyword - total: Return count, default 20 ### Return: - Matched daren

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"total","type":"string","required":false}]`

## `mcp_38b3bbfe88771198ac36f5ed`

# [中文] ### 用途: - 获取指定垂类下视频时长分布数据 - 用于了解该垂类创作者偏好的视频时长结构 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 各时长区间（如 0-15 秒/15-60 秒/60-180 秒/大于 180 秒）的视

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_39467dc44fe0865b3522a063`

获取创作者视频列表/Get Author Show Items

- Risk: `read`
- Parameters: `[{"name":"flow_type","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"only_assign","type":"boolean","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_3994e3d6c437f6e392a595a4`

# [中文] ### 用途: - 获取直播间送礼用户排行榜 ### 参数: - room_id: 直播间room_id - rank_type: 排行类型，默认为30不用修改。 ### 返回: - 排行榜数据 # [English] ### Purpose: - Get live room gift user ranking ### Parameters: - room_id: Room room_id - rank_type: Leaderboard type, default is 30, no need to modify. ### Return: - Leaderboard data

- Risk: `read`
- Parameters: `[{"name":"rank_type","type":"integer","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_3a08230d342fe526251ea7f2`

提取列表直播间号/Extract list webcast id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_3a906eed54346b6e6a2e5999`

# [中文] ### 用途: - 获取用户粉丝列表 - 第一次请求时，max_time传`0`，source_type传`2`，然后会返回一个空的粉丝列表，里面包含了max_time，然后再次请求时，max_time传上一次请求返回的max_time，source_type传`1`，即可获取到粉丝列表。 - 如果不按照上述方式请求，可能会导致返回数据包含重复数据。 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 - source_type

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"source_type","type":"integer","required":false}]`

## `mcp_3b8f1f86d4880b2fe5e811ba`

# [中文] ### 用途: - 获取指定视频在抖音指数「视频分析」中的基础详情 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） ### 返回: - 视频标题、封面、时长、发布时间、作者信息及基础数据等 # [English] ### Purpose: - Get the basic detail of a video in Douyin Index video analysis ### Parameters: - item_id: Video ID (Douyin aweme id, numeric string) ### Return: - Vide

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_3d4c093374dc910347235568`

# [中文] ### 用途: - 获取指定垂类的互动数据（点赞/评论/分享/收藏等）随时间变化趋势 - 衡量该垂类内容引发用户互动的活跃程度 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的互动数据：每日点赞总数、评论总数、分享总数、收藏总数等 # [English] ### Purpose: - Get interaction

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_3d69fc86fbaed6c9c05866fe`

# [中文] ### 用途: - 获取与指定达人相似的达人列表 ### 参数: - user_id: 达人抖音 uid（纯数字，如 "3100268042915212"） ### 返回: - 相似达人列表 # [English] ### Purpose: - Get similar daren/creators to a specified user ### Parameters: - user_id: Douyin uid (numeric, e.g. "3100268042915212") ### Return: - List of similar daren # [示例/Example]

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_3de438424a4d8c4809f7643c`

# [中文] ### 用途: - 获取抖音 App 中综合搜索栏的搜索结果（非单独视频搜索）。 - 支持关键词、排序方式、发布时间、视频时长、内容类型等筛选条件。 - 支持翻页查询，通过 `cursor`、`search_id` 和 `backtrace` 分页。 ### 备注: - 初次请求时 `cursor` 传入 0，`search_id` 和 `backtrace` 传空字符串。 - 翻页时需从上一次响应中获取 `cursor`、`search_id` 和 `backtrace` 字段值。 - 返回的内容包含视频、作者、话题标签、播放信息、音乐、互动数据等丰富信息。 ### 参数: -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_3e37a5e846ba16229e1ac1d4`

获取作品流量来源统计/Fetch item play source statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_3ee9f313ecf35ed5f419d3c8`

# [中文] ### 用途: - 获取抖音 App 中图文内容搜索的结果。 - 返回带有多张图片的帖子（aweme_type=68），适用于图文展示类应用场景。 ### 备注: - 该接口与 `fetch_image_search` 使用不同的数据源，返回结果可能有所差异。 - 推荐用于需要高质量图文内容的场景。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页请求时，使用上一次响应返回的 `cursor` 和 `search_id`。 - 每页返回约 12 条数据。 ### 参数: - keyword: 搜索关键词，如 "美食" - cursor: 翻

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_404bbb668a19136dcf0bd76d`

# [中文] ### 用途: - 获取抖音指数各类型数据的最新有效日期 ### 返回: - 包含关键词、品牌、话题等维度的日/周/月最新可用日期 # [English] ### Purpose: - Get the latest valid dates for each data type in Douyin Index ### Return: - Contains latest available daily/weekly/monthly dates for keyword, brand, topic dimensions

- Risk: `read`
- Parameters: `[]`

## `mcp_4179bbf243e6ed4dfbe72036`

# [中文] ### 用途: - 获取抖音综合搜索结果（V3 版本），返回视频、用户、相关搜索词等混合卡片。 - 相比 V1/V2 不支持排序与筛选条件，但翻页参数更简单，响应结构统一（`config` + `items` + `pagination`）。 ### 备注: - 首次请求 `offset` 传 0、`page` 传 1，`search_id` 与 `backtrace` 传空字符串。 - 翻页时把上一次响应 `data.pagination` 里的 `offset`、`search_id`、`backtrace` 原样传回，并把 `page` 加 1。 - `data.pagin

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"offset","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_42061fb024f3700675a211f1`

获取首页推荐数据/Get home feed data

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_4350b8529f7817d50ddf5344`

提取单个用户id/Extract single user id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_438a896ca07cf8d5975b0f12`

# [中文] ### 用途: - 获取粉丝近3天感兴趣的话题 10个话题 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝近3天感兴趣的话题 10个话题 # [English] ### Purpose: - Get the fan interest topic in the last 3 days 10 topics ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest topic in the last 3 days 10 topics

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_4437548a02cf374ac3d6d6e2`

获取创作者转化视频/商品明细/Get Author Convert Videos or Products

- Risk: `read`
- Parameters: `[{"name":"detail_type","type":"integer","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`
