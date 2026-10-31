# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin-3`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_7b16924b77707619a8152e51`

# [中文] ### 用途: - 获取首页推荐的趋势报告列表 ### 返回: - 推荐报告列表（含报告ID、标题、封面、发布时间等） # [English] ### Purpose: - Get the list of recommended trend insight reports on the home page

- Risk: `read`
- Parameters: `[]`

## `mcp_7b3caefe2dca5fcc881ed9fd`

# [中文] ### 用途: - 获取账号作品分析 ### 参数: - sec_uid: 用户sec_id - day: 天数，默认7天 ### 返回: - 账号作品分析 # [English] ### Purpose: - Get the account work analysis ### Parameters: - sec_uid: User sec_id - day: Number of days, default 7 days ### Return: - Account work analysis

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_7ba90557c9d124f829b76dce`

抖音视频频道数据/Douyin video channel data

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"refresh_index","type":"integer","required":false},{"name":"tag_id","type":"integer","required":true}]`

## `mcp_7bcddced10b12006461ed78f`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定用户主页。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法跳转到指定用户主页。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified user profile ### Parameters: - uid: User id - sec_uid: User

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_7c505ca78d412e4b42df8e4b`

# [中文] ### 用途: - 获取指定垂类的视频发布数量随时间变化趋势 - 用于了解某垂类的内容供给热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的发布量数据（日期 + 当日发布作品数） # [English] ### Purpose: - Get the content publish volume trend

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_7cfeca05745dbcd1f752f873`

获取创作者连接指数日趋势/Get Author Daily Link Score

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"industry_id","type":"integer","required":false},{"name":"link_score_type","type":"integer","required":true},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_7ddcd8df8c1c95f4798c85b1`

# [中文] ### 用途: - 获取 DOU+ 视频排行榜（热门榜），可按时间范围、垂类、榜单维度筛选 ### 参数: - time_range: 时间范围，1 / 2 / 3，默认 2 - tag_id: 垂类ID，默认 634（娱乐）。完整对照：601剧情, 602明星, 606音乐, 607二次元, 608游戏, 609时事, 612舞蹈, 614三农, 615科技, 616财经, 617亲子, 619生活, 621健康, 623情感, 624文化, 625职场, 626教育, 627摄影, 628美食, 629旅行, 631时尚, 633体育, 634娱乐, 635汽车 - dim_

- Risk: `write`
- Parameters: `[{"name":"adv_id","type":"any","required":false},{"name":"dim_type","type":"any","required":false},{"name":"tag_id","type":"any","required":false},{"name":"time_range","type":"any","required":false}]`

## `mcp_7e040b94dcd60616662ff902`

批量获取视频数据(播放量/点赞等)/Multi Get Item Stats

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"need_cover_url","type":"boolean","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_7e34765f4731362d9e803d08`

获取创作者基本信息/Get Author Base Info

- Risk: `read`
- Parameters: `[{"name":"need_linkage_info","type":"boolean","required":false},{"name":"need_sec_uid","type":"boolean","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"recommend","type":"boolean","required":false}]`

## `mcp_7eadfd32f98fa65b2cc8115d`

# [中文] ### 用途: - 获取热点榜分类的id与热度 - 注意：使用start_date和end_date参数需要移除snapshot_time参数才可以生效 ### 参数: - billboard_type: 榜单类型 - rise 上升热点榜 - city 城市热点榜 - total 热点总榜 - snapshot_time: 快照时间 - start_date: 快照开始时间 - end_date: 快照结束时间 - keyword: 热点搜索词 ### 返回: - 热点榜分类 # [English] ### Purpose: - Get the id and popularit

- Risk: `read`
- Parameters: `[{"name":"billboard_type","type":"string","required":true},{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_80e6455ab34d5865370eed35`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_8180d028c1eba3867efdaae8`

获取投稿分析概览/Fetch item analysis overview

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_81f5003199fb9f65ce760c09`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息，包含性别，年龄，直播等级，直播间牌子 ### 说明： - 性别：1为男，2为女，0为未知，在live_user字段中。 - 年龄：在user字段中，-1为未知。 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information,

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_821388b371037c25eea944ea`

获取达人主页视频列表V1/Get Author Homepage Videos V1

- Risk: `read`
- Parameters: `[{"name":"oAuthorId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":false},{"name":"page","type":"integer","required":false},{"name":"videoType","type":"string","required":false}]`

## `mcp_82a62e5d8f02c9bd4ae4768e`

获取作品弹幕分析/Fetch item bullet analysis

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_82bc1dbd28296562adc8c38b`

获取视频整体表现趋势/Get Item Report Trend

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_84309b33a859b6dab48deed6`

获取视频的最高画质播放链接/Get the highest quality play URL of the video

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"share_url","type":"string","required":false}]`

## `mcp_848925f5d887a36339b2bc7f`

获取创作者连接指标日趋势/Get Author Daily Link

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"industry_id","type":"integer","required":false},{"name":"link_type","type":"integer","required":true},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"start_date","type":"string","required":true}]`

## `mcp_84efdae281105c4cd12395d2`

# [中文] ### 用途: - 获取抖音创作者平台热门音乐榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过配置接口获取 - order_key: 排序键 (1=播放最高, 2=点赞最多, 4=热度最高, 5=投稿最多) - time_filter: 时间筛选 (1=24小时, 2=7天, 3=30天) ### 返回: - 热门音乐榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot music billboard data ### Parameters: - billboar

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`

## `mcp_858d1b3e5a0a00b800c7c7b4`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor - count: Number ### Return: - Comments data # [示例/Example] aweme_id = "7372484719365098803" cur

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_85fbc55a26b45be855753792`

# [中文] ### 用途: - 获取单个热点的完整分析数据，一次请求覆盖热点详情页的全部模块 ### 参数: - topic_name: 热点名称，可从 fetch_current_hot_topic 的结果中获取 ### 返回: - trend_item: 热点指数趋势（按时间点的指数值） - content_item: 热门内容列表（视频标题、链接、封面、作者、点赞/评论数等） - play_rank_author_item: 相关达人榜（按播放量排序） - digg_rank_author_item: 相关达人榜（按点赞数排序） - fans_rank_author_item: 相关达

- Risk: `read`
- Parameters: `[{"name":"topic_name","type":"string","required":true}]`

## `mcp_863a15d85ad4590a42a75056`

# [中文] ### 用途: - 获取单个作品视频弹幕数据 ### 参数: - item_id: 作品id - duration: 视频总时长 - end_time: 结束时间 - start_time: 开始时间 ### 返回: - 视频弹幕数据 # [English] ### Purpose: - Get single video danmaku data ### Parameters: - item_id: Video id - duration: Video total duration - end_time: End time - start_time: Start time ###

- Risk: `read`
- Parameters: `[{"name":"duration","type":"integer","required":true},{"name":"end_time","type":"integer","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_time","type":"integer","required":true}]`

## `mcp_8a7ac0317dabdad29f4fc250`

获取粉丝画像/Fetch fan portrait

- Risk: `read`
- Parameters: `[{"name":"option","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_8a82bdad541527ef994fbcc9`

获取达人广场筛选项取值/Get Search Field Options

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_8aa7de541b62ecb1e6597dcb`

获取创作者粉丝画像分布/Get Author Fans Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_8ba56f4eeedf1c7a8d97e886`

根据抖音号获取游客星图kolid/Get XingTu kolid by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_8c85e3294b0917aaa85c00d7`

# [中文] ### 用途: - 获取热点总榜 ### 参数: - page: 页码 - page_size: 每页数量 - type: 快照类型 snapshot 按时刻查看 range 按时间范围。 - 备注：snapshot_time 在 snapshot时有效，start_date 和 end_date 在 range 时有效 - snapshot_time: 快照时间 格式yyyyMMddHHmmss - start_date: 快照开始时间 格式yyyyMMdd - end_date: 快照结束时间 格式yyyyMMdd - sentence_tag: 热点分类标签，从热点榜分类获

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false},{"name":"type","type":"string","required":true}]`

## `mcp_8e793e2f7132f2fa8413777b`

获取内容趋势指南/Get Content Trend Guide

- Risk: `read`
- Parameters: `[]`

## `mcp_8e915f550978e3a9fd0a5ed5`

# [中文] ### 用途: - 获取指定垂类下创作热门关键词 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - **本接口不支持 "0=全部"，必须传入具体的垂类 ID**（如 "601"=剧情, "628"=美食 等） - 完整垂类列表见 fetch_item_filter_options - period: 时间周期，可选 "1"(近1天) / "3"(近3天) / "7"(近7天) - end_date: 结束日期（YYYYMMDD）。**仅当 period=7 时必须为周日**，period=1/3 时可为

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_8ede60cc491591069c12edaf`

获取创作者评论热词/Get Author Hot Comment Tokens

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"num","type":"integer","required":false},{"name":"without_emoji","type":"boolean","required":false}]`

## `mcp_8f9bc6d93246945cd844ccab`

# [中文] ### 用途: - 获取指定用户的直播流数据V2 ### 参数: - room_id: 直播间room_id ### 返回: - 直播流数据 ### 备注: modify_time字段是直播间的最后更新时间，也就相当于开播时间，如果下播也不会重置回0，而是一直保持最后的更新时间。 # [English] ### Purpose: - Gets the live stream data of the specified user V2 ### Parameters: - room_id: Room room_id ### Return: - Live stream data ###

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_8fe48880f465dabeeaac37e5`

可调用工具

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"string","required":true},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_90d1832a48bcb95bf92852e6`

根据抖音sec_user_id获取游客星图kolid/Get XingTu kolid by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_9187dbd20fbd9a2f902dec0e`

# [中文] ### 用途: - 获取抖音 App 中学校信息的搜索结果。 - 根据关键词返回学校名称列表，常用于用户设置学校资料、兴趣推荐等场景。 ### 备注: - 本接口专注于学校信息搜索，仅返回学校的名称字段。 - 初次请求时 `cursor` 应传 0，分页时使用上一次返回的 `cursor`。 - 本接口响应体较简单，适合快速检索学校数据。 ### 参数: - keyword: 搜索关键词，如学校名称 "北京大学"、地区名 "北京" ### 请求体示例： ```json payload = { "keyword": "北京大学" } ``` ### 返回（部分常用字段，实际返回字段

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_91e64219f5cebac5821e97ba`

获取kol粉丝画像V1/Get kol Fans Portrait V1

- Risk: `read`
- Parameters: `[{"name":"fansType","type":"string","required":false},{"name":"kolId","type":"string","required":true}]`

## `mcp_92a5443a2744e1ed234f38e9`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword ### Return: - Share link # [示例/Example] keyword = "雷军"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_935e301cd5d955bcfe01692e`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 （本质上基于 `/fetch_one_video` 接口实现，建议有能力自行获取视频ID以提升接口响应速度） - 返回的视频画质比APP接口高一些，但是响应字段没有APP接口多。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link (Essentially implemented based on the `/fetch_one_video` interface, it i

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_941dea32f363f2a2e5c024b8`

# [中文] ### 用途: - 获取抖音 App 中讨论区/问答内容的搜索结果。 - 支持关键词、排序方式、发布时间、内容类型等筛选条件。 ### 备注: - 此接口专注于讨论区内容搜索（如问答讨论视频），不包含其他类型的内容。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 - 返回内容包括视频信息、作者信息、播放信息、互动数据、话题标签等。 ### 参数: - keyword: 搜索关键词，例如 "出国留学" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_960f2f3a5dc033516fdaaf5d`

# [中文] ### 用途: - 获取品牌主动排行周榜数据 ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌在该周的主动排行数据 # [English] ### Purpose: - Get brand initiative rank weekly data ### Parameters: - brand_name/: Brand info - start_date/end_date: Date range in YYYYMMDD - app_name: Platform #

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_96660dc70fb6ad6f7ad9b01d`

短剧作品/Series Video

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"integer","required":true},{"name":"count","type":"integer","required":true},{"name":"offset","type":"integer","required":true}]`

## `mcp_96d5c9e1147685587c963f9e`

# [中文] ### 用途: - 获取抖音热榜数据，包括： - 热点榜 - 种草榜 - 娱乐榜 - 社会榜 - 挑战榜 ### 参数: - board_type: - 0: 热点榜（默认） - 2: 其他榜单，如种草榜等，需要传入对应的board_sub_type参数。 - board_sub_type: - 空字符串: 热点榜（默认） - seeding: 种草榜 - 2: 娱乐榜 - 4: 社会榜 - hotspot_challenge: 挑战榜 ### 返回: - 热搜榜数据 # [English] ### Purpose: - Get Douyin hot search list da

- Risk: `read`
- Parameters: `[{"name":"board_sub_type","type":"string","required":false},{"name":"board_type","type":"string","required":false}]`

## `mcp_979c54c9962623b8d7845ce0`

获取kol星图指数V1/Get kol Xingtu Index V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true}]`

## `mcp_9c424a77471ec498fb97f600`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容。 - 专注于视频内容的搜索结果，不包含其他类型。 ### 备注: - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回的视频包含作者信息、播放地址、封面、互动数据等。 - 同时返回一组关键词推荐 (`guide_search_words`) 用于引导用户继续搜索。 ### 参数: - keyword: 搜索关键词，例如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_9c81319d89a5eb48ef954ee8`

# [中文] ### 用途: - 使用UID获取用户开播信息 ### 参数: - uid: 用户UID ### 返回: - 用户开播信息，包含room_id与live_status # [English] ### Purpose: - Get user live information by UID ### Parameters: - uid: User UID ### Return: - User live information, including room_id and live_status # [示例/Example] uid = "3081254195702747"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_9db4f6e493b79ee806b3d6c3`

# [中文] ### 用途: - 获取关键词的人群画像分析数据 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 性别分布、年龄分布、地域分布、兴趣分布等人群画像数据 # [English] ### Purpose: - Get crowd portrait analysis for a keyword ### Parameters: - keyword: The keyword

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_9e40ab6783c6b478b3ed0f50`

# [中文] ### 用途: - 获取品牌热门视频功能可查询的时间范围 - 用于在请求其他品牌相关接口前确定合法的日期边界 ### 参数: - 无 ### 返回: - 时间范围信息（起止日期、周期单位等） # [English] ### Purpose: - Get the queryable time scope for the brand hot videos feature - Used to determine valid date boundaries before calling other brand endpoints ### Parameters: - None ### Re

- Risk: `write`
- Parameters: `[]`

## `mcp_9f24d25210d47ddfd1e923a2`

获取创作者视频触达分布/Get Author Touch Distribution

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_9f89b4e92af6d004cff70b3e`

# [中文] ### 用途: - 按分类搜索/筛选 DOU+ 达人 ### 参数: - name: 达人分类名/搜索词（取自"获取达人分类"接口）；留空为全部 - page: 页码，从 0 开始，默认 0 - limit: 每页数量，默认 20 ### 返回: - 达人列表 # [English] ### Purpose: - Search & filter DOU+ talents by category ### Parameters: - name: Category name or keyword (from the talent category endpoint); empty fo

- Risk: `write`
- Parameters: `[{"name":"limit","type":"any","required":false},{"name":"name","type":"any","required":false},{"name":"page","type":"any","required":false}]`

## `mcp_a0857ca0693531cfe0ed2ff4`

# [中文] ### 用途: - 获取抖音创作者平台热门课程数据或精选专题课程 ### 参数: - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) - category_id: 精选专题分类ID (不传则获取热门课程，传入则获取指定分类的精选专题) 可选值: - 6976547830546582816: 知识品类 - 6976547923849006336: 生活品类 - 6976547940311633165: 娱乐品类 - 6976547972108635404:

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_a0e38c52b5db10f2d3af6a5b`

# [中文] ### 用途: - 根据抖音号获取指定用户的信息 ### 参数: - unique_id: 用户unique_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user by unique_id ### Parameters: - unique_id: User unique_id ### Return: - User information # [示例/Example] unique_id = "TheChief"

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_a178e33cd20a090c60f69364`

获取作品总览数据/Fetch item overview data

- Risk: `write`
- Parameters: `[{"name":"fields","type":"any","required":false},{"name":"ids","type":"string","required":true}]`

## `mcp_a17abdad3d762b04c55a9022`

# [中文] ### 用途: - 获取抖音视频合集详情数据 ### 参数: - mix_id: 合集id ### 返回: - 视频合集详情数据 # [English] ### Purpose: - Get Douyin video mix detail data ### Parameters: - mix_id: Mix id ### Return: - Video mix detail data # [示例/Example] mix_id = "7302011174286002217"

- Risk: `read`
- Parameters: `[{"name":"mix_id","type":"string","required":true}]`

## `mcp_a19b22ff75154f68af364c38`

# [中文] ### 用途: - 获取创作指南各类型数据的有效日期范围 ### 返回: - 创作指南可查询的起止日期 # [English] ### Purpose: - Get valid date range for the creation guide section

- Risk: `read`
- Parameters: `[]`

## `mcp_a365de3d7b416b65e9ee99d7`

# [中文] ### 用途: - 获取话题搜索的自动补全建议列表 ### 参数: - keyword: 话题关键词 - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 匹配的话题列表 # [English] ### Purpose: - Get topic search auto-complete suggestion list ### Parameters: - keyword: Topic keyword - app_name: Platform, aweme=Douyin, toutiao=Toutiao ### Return: - Matche

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_a37824da13b886112841d359`

# [中文] ### 用途: - 获取批量用户信息，最多支持50个用户 ### 参数: - sec_user_ids: 用户sec_user_id列表，用逗号分隔，最多50个 ### 返回: - 批量用户信息 # [English] ### Purpose: - Get batch user profile, up to 50 users ### Parameters: - sec_user_ids: User sec_user_id list, separated by commas, up to 50 ### Return: - Batch user profile # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"sec_user_ids","type":"string","required":true}]`

## `mcp_a3a41a7de52f0d278f6148ce`

获取kol视频表现V1/Get kol Video Performance V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":true}]`

## `mcp_a3dab1e8a705ef825a84e256`

获取优秀行业分类列表/Get Excellent Case Category List

- Risk: `read`
- Parameters: `[{"name":"platform_source","type":"integer","required":false}]`

## `mcp_a4ef7a5bfc37a29fbee2d1a0`

# [中文] ### 用途: - 获取品牌的雷达图数据（多维度评分） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 品牌多维度评分雷达图数据 # [English] ### Purpose: - Get brand radar chart data (multi-dimensional scores) ### Parameters: - brand_name: Brand name - start_date/end_date: Date range in

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_a5674ca78183342786e39f5b`

获取星图IP活动详情/Get IP Activity Detail

- Risk: `read`
- Parameters: `[{"name":"id","type":"integer","required":true}]`

## `mcp_a569dca3e926ce1d5e425f88`

获取kol转化能力分析V1/Get kol Conversion Ability Analysis V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"kolId","type":"string","required":true}]`

## `mcp_a693cd6cc63e48216864c01d`

批量获取视频信息 V1/Batch Get Video Information V1

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_a72bf57b8b9cfb228a83d475`

# [中文] ### 用途: - 获取搜索用户名或抖音号 ### 参数: - keyword: 搜索的用户名或抖音号 - cursor: 游标，默认空 ### 返回: - 搜索结果 # [English] ### Purpose: - Get the search username or Douyin number ### Parameters: - keyword: Search username or Douyin number - cursor: Cursor, default empty ### Return: - Search result

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":true},{"name":"keyword","type":"string","required":true}]`

## `mcp_a781523edb6d90472ebcccf6`

# [中文] ### 用途: - 获取高涨粉率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_a8bbb002df372d3104d8faf0`

批量获取创作者信息/Multi Get Author Info

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_a91113465861d654fdf7505c`

# [中文] ### 用途: - 获取抖音创作者平台热门挑战榜单数据 ### 返回: - 热门挑战榜单数据 # [English] ### Purpose: - Get Douyin creator platform hot challenge billboard data ### Return: - Hot challenge billboard data # [示例/Example] 无需参数，直接调用即可获取当前热门挑战榜单 No parameters required, call directly to get current hot challenge billboard

- Risk: `read`
- Parameters: `[]`

## `mcp_a9e47c70f0ca6fe2299277a7`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 #

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_ab2fc4a074ee99e26a0c6768`

# [中文] ### 用途: - 获取抖音创作者活动详情数据 ### 参数: - activity_id: 活动ID（从活动列表接口获取） ### 返回: - 创作者活动详情数据 # [English] ### Purpose: - Get Douyin creator activity detail data ### Parameters: - activity_id: Activity ID (obtained from activity list interface) ### Return: - Creator activity detail data # [示例/Example] ac

- Risk: `read`
- Parameters: `[{"name":"activity_id","type":"string","required":true}]`

## `mcp_acc3f6fa98f7f372b87dd742`

# [中文] ### 用途: - 获取关键词指数搜索框的热门推荐词，用作关键词指数分析的输入建议 - 注意: 这不是实时热点榜，实时热点和飙升热点请用 fetch_current_hot_topic ### 参数: - app_name: 平台选择，aweme=抖音，toutiao=头条（头条当前返回空列表） - type: 推荐词类型，0=搜索热词（纯词，id 固定为 "0"），1=内容热词（带话题 id） ### 返回: - update_time: 数据更新日期（按天更新，非实时） - trend_words: 推荐词列表，含 id 和 word # [English] ### Purp

- Risk: `read`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"type","type":"integer","required":false}]`

## `mcp_ad7f5f690fef1a8f1e662ae7`

# [中文] ### 用途: - 获取热度飙升的搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 热度飙升的搜索榜 # [English] ### Purpose: - Get the sear

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_b072d61a28997a8339d7688f`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_b38f3d5f549b8827e7615fdc`

获取创作者传播表现视频/Get Author Spread Videos

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false}]`

## `mcp_b3e937374c00b6bbe699de99`

# [中文] ### 用途: - 获取粉丝兴趣作者 20个用户 ### 参数: - sec_uid: 用户sec_id ### 返回: - 粉丝兴趣作者 20个用户 # [English] ### Purpose: - Get the fan interest author 20 users ### Parameters: - sec_uid: User sec_id ### Return: - Fan interest author 20 users

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_b3ff8ed2dd96ab0c2d60f118`

获取视频评论分析/Get Item Report Comments

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_b5688f0e0225d0ac0f5a4faf`

# [中文] ### 用途: - 获取抖音创作者平台内容创作的合集分类列表 ### 参数: - 无需额外参数 ### 返回: - 内容创作合集分类数据 # [English] ### Purpose: - Get Douyin creator platform content creation category list ### Parameters: - No additional parameters required ### Return: - Content creation category data

- Risk: `read`
- Parameters: `[]`

## `mcp_b8882c5d6eb238701b02ad20`

获取DOU+ POST请求所需的sec_token/Get DOU+ sec_token for POST requests

- Risk: `write`
- Parameters: `[]`

## `mcp_bab753a13a6d9d24d813452d`

获取kol数据概览V1/Get kol Data Overview V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"_type","type":"string","required":true},{"name":"flowType","type":"integer","required":true},{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":false}]`

## `mcp_bb034f60b2fcbeb1b11184de`

# [中文] ### 用途: - 获取指定垂类下、指定热门关键词的相关视频列表 - 用于查看某个热门关键词具体由哪些视频贡献 ### 参数: - tag_id: 垂类ID（与 fetch_item_query 的 category_id 含义一致） - period: 时间周期 "1"=近1天 / "3"=近3天 / "7"=近7天 - end_date: 结束日期 YYYYMMDD。**仅当 period=7 时必须为周日**（如 20260412），period=1/3 时可为任意日期 - keyword: 热门关键词（**必须**先调 fetch_content_creative_key

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_bd4ae15f86886ba3a712b248`

抖音号转星图达人ID/Get Xingtu Author ID by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_bdefc08da8e53e4357a64259`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id ### Return: - Hashtag details data # [示例/Example] ch_id = 1575791821492238

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"integer","required":true}]`

## `mcp_bf9d3f42c611168f25257af7`

获取投稿表现数据/Fetch item analysis item performance

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"metric_type","type":"integer","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`
