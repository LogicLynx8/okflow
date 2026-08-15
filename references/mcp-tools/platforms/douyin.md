# 抖音 MCP 工具

- 来源平台：`抖音`
- 能力分段：`douyin`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_00e9527e168f7e6d4aa27b6f`

# [中文] ### 用途: - 使用接口网址生成A-Bogus参数，提交的URL不能带有a_bogus参数，同时a_bogus参数与请求头中的User-Agent有关，需要一起提交和请求。 ### 参数: - url: API链接，请去除url中的原本的a_boogus参数(如有)。 - data: 请求载荷，只有在POST请求中才需要提交，GET请求中使用空字符串即可。 - user_agent: user-agent，需要提交你请求头中的User-Agent，该值参与a_bogus参数的计算。 - index_0: 加密明文列表的第一个值，无特殊要求，默认为0，不要随意修改。 - ind

- Risk: `write`
- Parameters: `[{"name":"data","type":"string","required":true},{"name":"index_0","type":"integer","required":false},{"name":"index_1","type":"integer","required":false},{"name":"index_2","type":"integer","required":false},{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_0115b384aa44bd71fb24c384`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量，请保持默认，否则会出现BUG。 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cur

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_01f802d6dee18f8563f61017`

话题作品/Challenge Posts

- Risk: `write`
- Parameters: `[{"name":"challenge_id","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_025c0e245f1dec9edba3ab1d`

短剧作品/Series Video

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"integer","required":true},{"name":"count","type":"integer","required":true},{"name":"offset","type":"integer","required":true}]`

## `mcp_02762d3d01c99a8e4696ffe2`

游戏作品推荐/Game Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_05698f3a1c2e8b5b4cec3dfd`

# [中文] ### 用途: - 获取指定视频的对比分析数据（与同类视频/大盘的表现对比） ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 视频在各维度上与参照对象的对比分析结果 # [English] ### Purpose: - Get comparison analysis for a video (performance vs. similar videos / benchmark) ### Paramete

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_069aed1eeeede3a052321382`

关键词搜索kol V1/Search Kol V1

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"platformSource","type":"string","required":true}]`

## `mcp_08589214af1a2389934fbd6c`

获取kol视频表现V1/Get kol Video Performance V1

- Risk: `read`
- Parameters: `[{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":true}]`

## `mcp_08987054c412b5da1e77cebc`

# [中文] ### 用途: - 获取搜索用户名或抖音号 ### 参数: - keyword: 搜索的用户名或抖音号 - cursor: 游标，默认空 ### 返回: - 搜索结果 # [English] ### Purpose: - Get the search username or Douyin number ### Parameters: - keyword: Search username or Douyin number - cursor: Cursor, default empty ### Return: - Search result

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":true},{"name":"keyword","type":"string","required":true}]`

## `mcp_08ca60ac8d5e1724d7ca6660`

# [中文] ### 用途: - 生成抖音分享链接，唤起抖音APP，给指定用户发送私信。 ### 参数: - uid: 用户id - sec_uid: 用户sec_uid - 注意: 请确保user_id和sec_uid都有值，否则无法发送私信给指定用户。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate Douyin share link, call Douyin APP, and send private messages to specified users ### Parameters: - uid: User id - sec_ui

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true},{"name":"uid","type":"string","required":true}]`

## `mcp_090839da02cec9fb06462122`

# [中文] ### 用途: - 通过sec_uid获取指定用户的直播流数据 ### 参数: - sec_uid: 用户sec_uid，也叫 sec_user_id，可以在用户主页链接中找到。 ### 返回: - 直播流数据 # [English] ### Purpose - Get live video data of specified user by sec_uid ### Parameters - sec_uid: User sec_uid, also called sec_user_id, can be found in the user's homepage link. ### R

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_09309133799506edb67fd975`

# [中文] ### 用途: - 生成verify_fp ### 返回: - verify_fp # [English] ### Purpose: - Generate verify_fp ### Return: - verify_fp

- Risk: `read`
- Parameters: `[]`

## `mcp_0abd25341d1afe3a09e29c58`

主播搜索/Search Anchor

- Risk: `read`
- Parameters: `[{"name":"author_list_id","type":"any","required":false},{"name":"burst_text_rate_max","type":"any","required":false},{"name":"burst_text_rate_min","type":"any","required":false},{"name":"cpe_max","type":"any","required":false},{"name":"cpe_min","type":"any","required":false},{"name":"cpm_max","type":"any","required":false},{"name":"cpm_min","type":"any","required":false},{"name":"expected_play_max","type":"any","required":false},{"name":"expected_play_min","type":"any","required":false},{"name":"extra_filter","type":"any","required":false},{"name":"fans_max","type":"any","required":false},{"name":"fans_min","type":"any","required":false},{"name":"first_industry_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"interact_rate_max","type":"any","required":false},{"name":"interact_rate_min","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"marketing_target","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"persona_tags","type":"any","required":false},{"name":"play_over_rate_max","type":"any","required":false},{"name":"play_over_rate_min","type":"any","required":false},{"name":"price_max","type":"any","required":false},{"name":"price_min","type":"any","required":false},{"name":"price_type","type":"any","required":false},{"name":"sort_field","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"tag","type":"any","required":false},{"name":"task_category","type":"integer","required":false}]`

## `mcp_0b141cf8bfb08e0933f279f3`

获取kol转化视频展示V1/Get kol Convert Video Display V1

- Risk: `read`
- Parameters: `[{"name":"detailType","type":"string","required":true},{"name":"kolId","type":"string","required":true},{"name":"page","type":"integer","required":true}]`

## `mcp_0baaaa35b88d660e490e94a6`

# [中文] ### 用途: - 按视频标题/关键词搜索视频（V4 版本），支持游标翻页。 - 关键词匹配的是视频标题，也可以直接传入视频ID或视频分享链接来精确定位一条视频。 ### 备注: - 本接口不支持排序、发布时间、时长、内容类型等筛选条件，只有关键词与翻页参数。 - 每页固定 12 条，不支持指定数量。 - 首次请求 `cursor` 传 0，翻页时传上一页响应里返回的 `cursor`。 ### 参数: - keyword: 视频标题/关键词（必填），如 "猫咪" - cursor: 翻页游标（首次请求传 0） ### 请求体示例： ```json payload = { "ke

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":false}]`

## `mcp_0cbe7665e0580f2cfcf10988`

获取达人广场筛选字段/Get Author Market Fields

- Risk: `read`
- Parameters: `[{"name":"market_scene","type":"integer","required":false}]`

## `mcp_0eb7d5d8383c7575f68e0d3f`

# [中文] ### 用途: - 获取挑战榜 ### 参数: - page: 页码 - page_size: 每页数量 - keyword: 热点搜索词 ### 返回: - 挑战榜 # [English] ### Purpose: - Get the challenge list ### Parameters: - page: Page number - page_size: Number of items per page - keyword: Hot search term ### Return: - Challenge list

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true}]`

## `mcp_0ffdb59784d880ff14d616dd`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_101ecb736f8fb02037ea7b92`

获取创作者内容热词/Get Author Content Hot Keywords

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"keyword_type","type":"integer","required":false}]`

## `mcp_1222700f967a4861ede46a0b`

# [中文] ### 用途: - 获取热点总榜 ### 参数: - page: 页码 - page_size: 每页数量 - type: 快照类型 snapshot 按时刻查看 range 按时间范围。 - 备注：snapshot_time 在 snapshot时有效，start_date 和 end_date 在 range 时有效 - snapshot_time: 快照时间 格式yyyyMMddHHmmss - start_date: 快照开始时间 格式yyyyMMdd - end_date: 快照结束时间 格式yyyyMMdd - sentence_tag: 热点分类标签，从热点榜分类获

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"sentence_tag","type":"string","required":false},{"name":"snapshot_time","type":"string","required":false},{"name":"start_date","type":"string","required":false},{"name":"type","type":"string","required":true}]`

## `mcp_130133ab6c252f36ae9fac5b`

# [中文] ### 用途: - 获取抖音 App 中学校信息的搜索结果。 - 根据关键词返回学校名称列表，常用于用户设置学校资料、兴趣推荐等场景。 ### 备注: - 本接口专注于学校信息搜索，仅返回学校的名称字段。 - 初次请求时 `cursor` 应传 0，分页时使用上一次返回的 `cursor`。 - 本接口响应体较简单，适合快速检索学校数据。 ### 参数: - keyword: 搜索关键词，如学校名称 "北京大学"、地区名 "北京" ### 请求体示例： ```json payload = { "keyword": "北京大学" } ``` ### 返回（部分常用字段，实际返回字段

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_13642bcca37def54eb1f2def`

# [中文] ### 用途: - 生成ttwid ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_13bf4aaae59b4fe644712c11`

抖音sec_user_id转星图达人ID/Get Xingtu Author ID by Douyin sec_user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_148bc81226888cda655ee810`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_15b9bf37d1249c5ccb9aeb65`

# [中文] ### 用途: - 获取指定视频的观众人群画像 ### 参数: - item_id: 视频ID（抖音 aweme id，纯数字字符串） - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD ### 返回: - 观众性别分布、年龄分布、地域分布、兴趣分布等画像数据 # [English] ### Purpose: - Get the audience portrait for a video ### Parameters: - item_id: Video ID (Douyin aweme id, numeric s

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_15bcdbc0db2f3010eeff95c7`

# [中文] ### 用途: - 获取垂类内容标签 ### 参数: - 无 ### 返回: - 垂类内容标签 ### 注意: - 该接口用于获取垂类内容标签，用于 tags/query_tag 参数构建 ### 示例: 已知顶级垂类内容标签 `美食`，它的顶级垂类id为 `628`；`美食` 的子垂类标签 `品酒教学`，它的子垂类id为 `62802`。 那么构建标签查询参数为 `{"value": 628, "children": [{"value": 62802}]}` 如果需要多个子垂类标签，所有的美食子垂类标签为 `{"value":628,"children":[{"value":6

- Risk: `read`
- Parameters: `[]`

## `mcp_15ed492055d65802fe91cbe8`

# [中文] ### 用途: - 获取抖音 App 中通过关键词搜索到的视频内容。 - 专注于视频内容的搜索结果，不包含其他类型。 ### 备注: - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 返回的视频包含作者信息、播放地址、封面、互动数据等。 - 同时返回一组关键词推荐 (`guide_search_words`) 用于引导用户继续搜索。 ### 参数: - keyword: 搜索关键词，例如 "人工智能" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_1652fbddc7f02314f5f5a2e2`

# [中文] ### 用途: - 获取关键词的人群画像分析数据 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期，格式 YYYYMMDD - end_date: 结束日期，格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 返回: - 性别分布、年龄分布、地域分布、兴趣分布等人群画像数据 # [English] ### Purpose: - Get crowd portrait analysis for a keyword ### Parameters: - keyword: The keyword

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_165c8cc7804a1c16c756c0cb`

抖音UID转星图达人ID/Get Xingtu Author ID by Douyin UID

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_16a13a6e30cde5881296382d`

投放数据趋势图/Delivery analysis trend graph

- Risk: `write`
- Parameters: `[{"name":"query","type":"object","required":true}]`

## `mcp_1a56c8ac342e27a62a15988a`

可调用工具

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"string","required":true},{"name":"sec_uid","type":"string","required":true},{"name":"target_id","type":"any","required":false}]`

## `mcp_1a6fb9e8ec308d8728cf542a`

# [中文] ### 用途: - 加密用户uid到sec_user_id ### 参数: - uid: 用户uid，也就是抖音号的short_id ### 返回: - 用户信息 # [English] ### Purpose: - Encrypt user uid to sec_user_id ### Parameters: - uid: User uid, which is the short_id of the Douyin number ### Return: - User information # [示例/Example] uid = "1673937488185292"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_1a731c6628cf9378dd97df07`

# [中文] ### 用途: - DOU+ 用户搜索 V2，支持游标翻页与 scope 搜索范围 ### 参数: - keyword: 搜索关键词（必填） - cursor: 翻页游标，首页传 0，后续传上一页响应里的 cursor - count: 每页数量，默认 10 - scope: 搜索范围，默认 1 ### 返回: - 匹配结果列表，以及翻页信息 # [English] ### Purpose: - DOU+ user search V2, with cursor pagination and a search scope ### Parameters: - keyword: Sea

- Risk: `write`
- Parameters: `[{"name":"count","type":"any","required":false},{"name":"cursor","type":"any","required":false},{"name":"keyword","type":"string","required":true},{"name":"scope","type":"any","required":false}]`

## `mcp_1b9ee024adf94e72f93bf693`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 （本质上基于 `/fetch_one_video` 接口实现，建议有能力自行获取视频ID以提升接口响应速度） - 返回的视频画质比APP接口高一些，但是响应字段没有APP接口多。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link (Essentially implemented based on the `/fetch_one_video` interface, it i

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_1da3598d1f67d434cfffb889`

# [中文] ### 用途: - 获取用户粉丝列表 ### 参数: - sec_user_id: 用户sec_user_id - max_time: 最大时间戳，默认为0，后续从返回数据中获取，用于翻页。 - count: 数量，默认为20，建议保持不变。 ### 返回: - 粉丝列表 # [English] ### Purpose: - Get user fans list ### Parameters: - sec_user_id: User sec_user_id - max_time: Maximum timestamp, default is 0, get from the retu

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_time","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false}]`

## `mcp_1da84986979e976a93ff0a7c`

# [中文] ### 用途: - 获取品牌的雷达图数据（多维度评分） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围，格式 YYYYMMDD - app_name: 平台选择 ### 返回: - 品牌多维度评分雷达图数据 # [English] ### Purpose: - Get brand radar chart data (multi-dimensional scores) ### Parameters: - brand_name: Brand name - start_date/end_date: Date range in

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_1e3c20a126f9e2fa38e13304`

# [中文] ### 用途: - 获取指定垂类的视频发布数量随时间变化趋势 - 用于了解某垂类的内容供给热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的发布量数据（日期 + 当日发布作品数） # [English] ### Purpose: - Get the content publish volume trend

- Risk: `read`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_1e66d3c3bd80a3740480853c`

# [中文] ### 用途: - 获取品牌热门视频功能可查询的时间范围 - 用于在请求其他品牌相关接口前确定合法的日期边界 ### 参数: - 无 ### 返回: - 时间范围信息（起止日期、周期单位等） # [English] ### Purpose: - Get the queryable time scope for the brand hot videos feature - Used to determine valid date boundaries before calling other brand endpoints ### Parameters: - None ### Re

- Risk: `write`
- Parameters: `[]`

## `mcp_1e6f3282fac7746cd3239047`

# [中文] ### 用途: - 生成s_v_web_id ### 返回: - s_v_web_id # [English] ### Purpose: - Generate s_v_web_id ### Return: - s_v_web_id

- Risk: `read`
- Parameters: `[]`

## `mcp_1eb652f816d2a09f021cf6d9`

# [中文] ### 用途: - 获取搜索榜 ### 参数: - page_num: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键字 ### 请求示例: ```json { "page_num": 1, "page_size": 10, "date_window": 24, "keyword": "抖音" } ``` ### 返回: - 搜索榜 # [English] ### Purpose: - Get the search list ##

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_1ecb67c0a89d65c7f18eb790`

高级搜索kol V2/Search Kol Advanced V2

- Risk: `read`
- Parameters: `[{"name":"contentTag","type":"string","required":false},{"name":"followerRange","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_20753fca2f30ab111dfd17c2`

获取创作者转化视频/商品明细/Get Author Convert Videos or Products

- Risk: `read`
- Parameters: `[{"name":"detail_type","type":"integer","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_20cfdaf99d43776eb4dbeff6`

# [中文] ### 用途: - 根据视频ID获取作品的统计数据 - 抖音大多数接口已经不再返回作品的播放数，只能通过此接口获取。 - 可以获取到的统计有： - 点赞数（digg_count） - 下载数（download_count） - 播放数（play_count） - 分享数（share_count） ### 参数: - aweme_ids: 作品id，支持多个视频id，用逗号隔开即可，不能超过2个，单个也可以，则无需逗号。 ### 返回: - 作品统计数据 # [English] ### Purpose: - Get the statistical data of the Post

- Risk: `read`
- Parameters: `[{"name":"aweme_ids","type":"string","required":true}]`

## `mcp_216b10b583f821a86d89ed77`

# [中文] ### 用途: - 获取抖音创作者平台指定分类的内容创作课程 ### 参数: - category_id: 分类ID (更多分类ID请通过内容创作合集分类接口获取) 常见分类ID示例: - 184: 视频创作 - 185: 直播创作 - 186: 图文创作 - 188: 美食视频创作 - 180: 内容创作基础 - order: 排序方式 (1=推荐排序, 2=最受欢迎, 3=最新上传) - limit: 每页数量 (建议24，范围1-100) - offset: 偏移量 (起始位置) ### 返回: - 指定分类的内容创作课程数据 # [English] ### Purpose

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"integer","required":false}]`

## `mcp_217ee2a75a927d80939a16ab`

抖音直播间商品信息/Douyin live room product information

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_218316938480bf97c4e1ab80`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 ### 备注: - 如果接口出现返回空的情况，请使用一样的参数去请求 Web 版本接口，具体响应状态码参考： - JSON PATH: $.data.filter_list[0].reason - 8：该内容因海外版权限制，暂时无法观看（短剧，电影片段等） - 8：视频不存在或已被删除 - 5：该内容被标记为私人内容，没有公开展示权限 - 10：该内容被标记为部分可见，仅作者选择的部分用户可见 - 更多状态码请提交给我们的客户支持进行补充。 # [E

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_2194d944c2bbbe8662c84ed9`

使用接口网址生成X-Bogus参数/Generate X-Bogus parameter using API URL

- Risk: `write`
- Parameters: `[{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_21d590098f728836a74e2d7a`

# [中文] ### 用途: - 通过视频ID 或 视频链接/分享文本 获取视频详情 ### 参数: - video: 视频ID 或 视频链接/分享文本（必填）。例：`7651708301280906538`，或含 v.douyin.com 链接的分享文案 ### 返回: - 匹配到的视频数据 # [English] ### Purpose: - Get a video's detail by its ID or share link/text ### Parameters: - video: Video ID, or share link/text (required). e.g. `765

- Risk: `write`
- Parameters: `[{"name":"video","type":"string","required":true}]`

## `mcp_2234dabd01b5cd734542995e`

# [中文] ### 用途: - 获取指定垂类的消费数据（播放量、观看时长等）随时间变化趋势 - 衡量该垂类内容被用户实际消费（观看）的热度变化 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的消费数据：每日播放总量、观看时长、独立观看人数等 # [English] ### Purpose: - Get consumption

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_2243f16bdefdc44409716441`

获取用户收藏作品数据/Get user collection video data

- Risk: `write`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_229294a9584bfae997770e3b`

获取投稿表现数据/Fetch item analysis item performance

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"genres","type":"array","required":false},{"name":"metric_type","type":"integer","required":false},{"name":"primary_verticals","type":"array","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_25264b0b74477743c87d8e45`

# [中文] ### 用途: - 获取品牌的周期数据（周期性热度分析） ### 参数: - brand_name: 品牌名称 - start_date/end_date: 日期范围 - app_name: 平台选择 ### 返回: - 品牌周期性热度数据 # [English] ### Purpose: - Get brand cycles data (periodic popularity analysis) ### Parameters: - brand_name: Brand info - start_date/end_date: Date range in YYYYMMDD - app

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"brand_name","type":"string","required":true},{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_2581f1013f17b79e7451c0c1`

# [中文] ### 用途: - 获取指定垂类下**创作者**人群画像（即"发布该垂类视频的作者"画像） - 用于了解某垂类创作者的性别、年龄、地域、活跃时段等特征 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - period: 时间粒度，"week"=按周（end_date 必须为周日）, "month"=按月（end_date 必须为月末，如 20260331） - end_date: 结束日期 YYYYMMDD，需与 period 对齐 ### 返回: - 创作者画

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"period","type":"string","required":false},{"name":"tag_id","type":"string","required":true}]`

## `mcp_2698bfb6f0795c69e75db045`

获取投放过的账号/Get promoted accounts

- Risk: `write`
- Parameters: `[{"name":"cursor","type":"any","required":false},{"name":"limit","type":"any","required":false}]`

## `mcp_29939e77ee77533af4c2589b`

# [中文] ### 用途: - 获取指定垂类的互动数据（点赞/评论/分享/收藏等）随时间变化趋势 - 衡量该垂类内容引发用户互动的活跃程度 ### 参数: - tag_id: 垂类ID（**必填，不支持 0=全部**，需传入具体垂类 ID，可通过 fetch_item_filter_options 获取） - start_date: 起始日期 YYYYMMDD（含） - end_date: 结束日期 YYYYMMDD（含） ### 返回: - 按日聚合的互动数据：每日点赞总数、评论总数、分享总数、收藏总数等 # [English] ### Purpose: - Get interaction

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":true},{"name":"start_date","type":"string","required":true},{"name":"tag_id","type":"string","required":true}]`

## `mcp_29b90a70913dfb2bcbf6edf8`

# [中文] ### 用途: - 获取直播间送礼用户排行榜 ### 参数: - room_id: 直播间room_id - rank_type: 排行类型，默认为30不用修改。 ### 返回: - 排行榜数据 # [English] ### Purpose: - Get live room gift user ranking ### Parameters: - room_id: Room room_id - rank_type: Leaderboard type, default is 30, no need to modify. ### Return: - Leaderboard data

- Risk: `read`
- Parameters: `[{"name":"rank_type","type":"integer","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_2a3415578576778580ea617e`

# [中文] ### 用途: - 获取抖音 App 中图片内容搜索的结果。 - 主要返回带有多张图片的帖子（图片合集）。 ### 备注: - 仅返回图片类型的内容，适用于图片展示类应用场景。 - 初次请求 `cursor` 传 0，`search_id` 传空字符串。 - 翻页时使用上一次响应中的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，如 "猫咪" - cursor: 翻页游标（首次请求传0） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 - `2`: 最新发布 - publish_time: 发

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_2a78a52896402b573f936f98`

获取创作者转化能力/Get Author Convert Ability

- Risk: `read`
- Parameters: `[{"name":"industry_id","type":"integer","required":false},{"name":"o_author_id","type":"string","required":true},{"name":"platform_channel","type":"integer","required":false},{"name":"platform_source","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_2ad047d87a05f26abebb0883`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user_id: User sec_user_id ### Return: - User information # [示例/Example] sec_user_id = "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_2af38c2bc7a14679c0bed350`

生成抖音短链接/Generate Douyin short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_2b6de7b1bf4d51bcec1736f9`

# [中文] ### 用途: - 获取抖音 App 中的话题（挑战/标签）搜索结果。 - 根据关键词返回关联的话题列表，包含话题热度、封面、参与人数等信息。 ### 备注: - 仅返回话题类型内容。 - 初次请求时 `cursor` 传 0，`search_id` 传空字符串。 - 翻页查询时使用上次响应返回的 `cursor` 和 `search_id`。 ### 参数: - keyword: 搜索关键词，例如 "美食" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 - `1`: 最多点赞 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_2c26753ec0f1448435cc4c5a`

获取作品搜索关键词统计/Fetch item search keywords statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_2c9d0c8335bc7e2c200cce2f`

抖音号转星图达人ID/Get Xingtu Author ID by Douyin unique_id

- Risk: `read`
- Parameters: `[{"name":"unique_id","type":"string","required":true}]`

## `mcp_2d0b99a8c1f0cfb6eceffd3f`

# [中文] ### 用途: - 获取账号作品分析 ### 参数: - sec_uid: 用户sec_id - day: 天数，默认7天 ### 返回: - 账号作品分析 # [English] ### Purpose: - Get the account work analysis ### Parameters: - sec_uid: User sec_id - day: Number of days, default 7 days ### Return: - Account work analysis

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_2db0d3231fee689b579743d4`

# [中文] ### 用途: - 获取抖音创作者平台内容创作的合集分类列表 ### 参数: - 无需额外参数 ### 返回: - 内容创作合集分类数据 # [English] ### Purpose: - Get Douyin creator platform content creation category list ### Parameters: - No additional parameters required ### Return: - Content creation category data

- Risk: `read`
- Parameters: `[]`

## `mcp_2e5a74172b923adeaebbbce6`

获取创作者商业卡片信息/Get Author Business Card Info

- Risk: `read`
- Parameters: `[{"name":"o_author_id","type":"string","required":true}]`

## `mcp_303726bcc24787867aa1055b`

# [中文] ### 用途: - 获取抖音 App 中讨论区/问答内容的搜索结果。 - 支持关键词、排序方式、发布时间、内容类型等筛选条件。 ### 备注: - 此接口专注于讨论区内容搜索（如问答讨论视频），不包含其他类型的内容。 - 初次请求时 `cursor` 传入 0，`search_id` 传空字符串。 - 返回内容包括视频信息、作者信息、播放信息、互动数据、话题标签等。 ### 参数: - keyword: 搜索关键词，例如 "出国留学" - cursor: 翻页游标（首次请求传 0，翻页时使用上次响应的 cursor） - sort_type: 排序方式 - `0`: 综合排序 -

- Risk: `write`
- Parameters: `[{"name":"backtrace","type":"string","required":false},{"name":"content_type","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"filter_duration","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"search_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_30f24a6bb877422026dc9647`

# [中文] ### 用途: - 搜索抖音指数视频库，支持垂类、时长、类型、发布时间四维筛选 - 结果包含视频基础信息、播放/点赞/粉丝等核心数据 ### 参数: - query: 搜索关键词（必填），例如 "美食" - category_id: 垂类ID（字符串），默认 "0"=全部 - 常用示例：601=剧情, 602=明星, 603=综艺, 604=电影, 605=电视剧, 606=音乐, 607=二次元, 608=游戏, 609=社会时政, 612=舞蹈, 615=科技, 617=母婴, 619=生活家居, 628=美食, 629=旅行, 631=时尚, 633=体育, 635=汽车

- Risk: `write`
- Parameters: `[{"name":"category_id","type":"string","required":false},{"name":"date_type","type":"integer","required":false},{"name":"duration_type","type":"integer","required":false},{"name":"label_type","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_3146cfca4af8942d425cce1b`

# [中文] ### 用途: - 获取关键词的关联词分析，包含搜索关联词和内容关联词 - 展示关联词图谱和关联词排名 ### 参数: - keyword: 要分析的关键词 - start_date: 开始日期（建议为周一），格式 YYYYMMDD - end_date: 结束日期（**必须为周日**），格式 YYYYMMDD - app_name: 平台选择，aweme=抖音，toutiao=头条 ### 注意: - **关联分析的日期范围必须以周日为终止日期**，例如 start_date=20260330, end_date=20260405（周日） - 如果 end_date 不是周日，

- Risk: `write`
- Parameters: `[{"name":"app_name","type":"string","required":false},{"name":"end_date","type":"string","required":true},{"name":"keyword","type":"string","required":true},{"name":"start_date","type":"string","required":true}]`

## `mcp_321ed09c79033ea2ddf99519`

获取作品流量来源统计/Fetch item play source statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_32caf1091691669f068c910a`

获取相似创作者推荐/Get Recommend Similar Star Authors

- Risk: `write`
- Parameters: `[{"name":"author_ids","type":"array","required":true},{"name":"page","type":"integer","required":false},{"name":"similar_type","type":"string","required":false}]`

## `mcp_33c7c2bedc5ba45271935b65`

知识作品推荐/Knowledge Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_348fce8b130d16e569c488cd`

# [中文] ### 用途: - 获取热度飙升的话题榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags":

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_353807f0672a0d213210c49e`

获取星图IP日历行业列表/Get IP Activity Industry List

- Risk: `read`
- Parameters: `[]`

## `mcp_393f2ad6adb855ee667a4731`

美食作品推荐/Food Video

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":true},{"name":"refresh_index","type":"integer","required":false}]`

## `mcp_3946b6a1eef54092fe588bf0`

# [中文] ### 用途: - 获取高点赞率榜 ### 参数: - page: 页码 - page_size: 每页数量 - date_window: 时间窗口(小时)，可选 1/24/72/168，代表近1小时/近1天/近3天/近7天，默认24 - keyword: 搜索关键词，对榜单按关键词过滤，空为全部 - tags: 垂类标签筛选，空则为全部，标签id从 fetch_content_tag 接口获取 ### 请求示例: ```json { "page": 1, "page_size": 10, "date_window": 24, "keyword": "", "tags": [ {

- Risk: `write`
- Parameters: `[{"name":"date_window","type":"integer","required":false},{"name":"keyword","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"tags","type":"array","required":false}]`

## `mcp_3c886728a718562c046bdfc1`

获取kol数据概览V1/Get kol Data Overview V1

- Risk: `read`
- Parameters: `[{"name":"_range","type":"string","required":true},{"name":"_type","type":"string","required":true},{"name":"flowType","type":"integer","required":true},{"name":"kolId","type":"string","required":true},{"name":"onlyAssign","type":"boolean","required":false}]`

## `mcp_3e8b130118d3766b655f2e3b`

# [中文] ### 用途: - 搜索达人，获取达人列表建议 ### 参数: - keyword: 达人昵称关键词 - total: 返回数量，默认20 ### 返回: - 匹配的达人列表（包含达人ID、昵称、头像、粉丝数等） # [English] ### Purpose: - Search for daren/creators, get suggestion list ### Parameters: - keyword: Daren nickname keyword - total: Return count, default 20 ### Return: - Matched daren

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"total","type":"string","required":false}]`

## `mcp_4092bb28a77a6ab6cf000526`

# [中文] ### 用途: - 获取用户收藏夹数据 ### 参数: - collects_id: 收藏夹id - max_cursor: 最大游标 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user collection data ### Parameters: - collects_id: Collection id - max_cursor: Maximum cursor - count: Maximum number ### Return: - User video data # [示例/Example]

- Risk: `read`
- Parameters: `[{"name":"collects_id","type":"string","required":true},{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false}]`

## `mcp_40d857511affdc0fde22ca95`

# [中文] ### 用途: - 获取抖音创作者热门话题榜单数据 ### 参数: - billboard_tag: 榜单标签，0=全部，其他值请通过config接口获取 - 0: 全部 - 333: 美食 - 334: 旅行 - 299: 泛生活 - 335: 汽车 - 336: 科技 - 302: 游戏 - 296: 二次元 - 337: 娱乐 - 311: 明星 - 298: 体育 - 300: 文化教育 - 301: 校园 - 297: 政务 - 305: 时尚 - 306: 才艺 - 669: 财经 - 314: 随拍 - 307: 动植物 - 309: 图文控 - 308: 剧情 -

- Risk: `read`
- Parameters: `[{"name":"billboard_tag","type":"integer","required":false},{"name":"order_key","type":"integer","required":false},{"name":"time_filter","type":"integer","required":false}]`
