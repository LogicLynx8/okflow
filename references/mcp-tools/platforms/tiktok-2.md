# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-2`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_7c96e4f3a1aacf92fd9b4640`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id，优先级越高速度越快。 ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_7ead9b7164da44407a703cd8`

获取单个广告详情/Get single ad detail

- Risk: `write`
- Parameters: `[{"name":"ads_id","type":"string","required":true}]`

## `mcp_7eeb8167df3fa8b11eaef591`

通过分享链接获取店铺ID/Get Shop ID by Share Link

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_7f0b62de0bf2ecfa27c86b39`

获取列表unique_id/Get list unique_id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_80278f620432c20b40ee8ca0`

# [中文] ### 用途: - 获取作品的评论列表 ### 参数: - aweme_id: 作品id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论列表 # [English] ### Purpose: - Get video comments ### Parameters: - aweme_id: Video id - cursor: Page cursor - count: Number per page - current_region: Current region, default

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_8068f535c057efd594c889fa`

# [中文] ### 用途: - 根据关键词搜索商品 - 支持分页加载更多结果 ### 参数: - search_word: 搜索关键词 (必填) - offset: 偏移量，用于分页 (默认0) - page_token: 分页标记，用于获取下一页 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "produ

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_81be44d73eb51f16a04fa50c`

# [中文] ### 用途: - 获取创作者搜索洞察相关视频，查询该搜索词条下比较火的相关视频 ### 参数: - keyword: 搜索关键词，从 fetch_creator_search_insights 或 fetch_creator_search_insights_trend 接口获取 - offset: 分页偏移量，默认0 - count: 每页数量，默认20 ### 返回: - 相关热门视频列表 # [English] ### Purpose: - Get creator search insights related videos, query popular related v

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_82f159fe460d48aead233942`

获取用户的关注列表/Get user followings

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_83736e61922513a7fb050ad4`

# [中文] ### 用途: - 获取TikTok Shop的商品分类目录 - 返回完整的分类树结构 ### 参数: - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 返回数据结构: ```json [ { "self": { // 分类自身信息 "category_id": "xxx", "category_level": 1, "is_leaf": false, "parent_category_id": "0", "category_name": "分类名称", "category_name_en": "Category Name", "image

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false}]`

## `mcp_845584b4fb722307a0598ce9`

生成web_id/Generate web_id

- Risk: `read`
- Parameters: `[{"name":"app_id","type":"integer","required":false},{"name":"referer","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"user_agent","type":"string","required":false},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_86bfb00da0445c408d694f4b`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 V2，数据结构会有些不一样，会返回region字段。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link V2, the data structure will be a bit different, and the region field will be returned. ### Parameters: - share_url: Share link ### Retu

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_872ff0d0cddf48f9db6f5e72`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的视频表现概览。 - 默认统计从调用当天向前 30 天的数据（或按平台设定的自然月分段）。 - 适合用于视频表现分析，例如视频数量、播放量、粉丝增长、成交数据等。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置信息（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者账号 ID - `timed_stats`: 每个时间段的视频表现数据，包含： - `vv_cnt`: 视频播放量（Video Views

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_88be09378a43213675b167cf`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for pagin

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_8ae881be0588ff8dbc317283`

获取创作者账号概览/Get Creator Account Overview

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_8db8d53d7a195848da01efdc`

搜索直播/Search live

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_8e087212c168bd7a8ed6a08a`

Tag作品/Tag Post

- Risk: `read`
- Parameters: `[{"name":"challengeID","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_8e23da8aa53a01d62eb89246`

获取用户的转发作品列表/Get user reposts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_8fae69a1820e9371e96aa1ea`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_90cffba2be20e1dc6180c64c`

# [中文] ### 用途: - 获取指定关键词的话题搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 话题搜索结果 # [English] ### Purpose: - Get hashtag search results of specified keywords ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Hashtag search results # [示例/Example] keywor

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_93a71c80a44862b3e401dc1f`

# [中文] ### 用途: - 获取TikTok创作者账号的基本信息和关键统计数据 - 查看创作者账号的成长历程和达成的重要里程碑 - 分析创作者账号发展轨迹，了解粉丝增长和内容影响力变化 ### 参数: - user_id: 创作者用户ID，必填参数，可从用户主页URL或TikTok后台获取 ### 返回内容说明: - `user_id`: 请求的创作者ID - `creator_info`: The creator's basic information - `nickname`: 创作者昵称 - `sec_user_id`: 安全用户ID - `unique_id`: 唯一用户名 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_9990972e7592ea121dd8f85c`

获取用户unique_id/Get user unique_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_9dbdd94d3d27d5db348181bd`

获取视频关联商品列表/Get Video Associated Product List

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_9f847d29d90f62a527034263`

# [中文] ### 用途: - 获取创作者搜索洞察趋势数据，包含地区和时间维度的搜索热度 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - from_tab_path: 来源标签路径，默认 "TRENDING,TOPICS" - query_analysis_required: 是否需要查询分析，默认 True ### 返回: - 搜索趋势数据，包含地区热度、时间趋势等 # [English] ### Purpose: - Get creator search insights trend

- Risk: `read`
- Parameters: `[{"name":"from_tab_path","type":"string","required":false},{"name":"query_analysis_required","type":"boolean","required":false},{"name":"query_id_str","type":"string","required":true}]`

## `mcp_9ff51789e380e8d2558a957d`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "6943027371519772674"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_a1780dc11e4cf5a0b35ad6dc`

根据分享链接获取单个作品数据/Get single video data by sharing link

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_a19552342aaff0a6ae12a5b0`

# [中文] ### 用途: - 生成ttwid ### 参数: - 无 ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Parameters: - None ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_a24153e00c24f8c5f1ffb1f6`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_a37d4638ee05cc5e122a625a`

# [中文] ### 用途: - 获取用户转发的作品数据 ### 参数: - user_id: 用户id，可以通过 handler_user_profile 端点获取，响应中的关键字为uid。 - offset: 偏移量 - count: 数量 ### 返回: - 用户转发作品数据 # [English] ### Purpose: - Get user repost video data ### Parameters: - user_id: User id, which can be obtained through the handler_user_profile endpoint, wit

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"user_id","type":"integer","required":true}]`

## `mcp_a3ddb8d53a033f2602aa4fa7`

# [中文] ### 用途: - 获取综合搜索列表 ### 参数: - keyword: 搜索关键词 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.im

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_a7c2e607c137228e3074a9f0`

加密或解密 TikTok APP 登录请求体/Encrypt or Decrypt TikTok APP login request body

- Risk: `write`
- Parameters: `[{"name":"mode","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_a9520e4789a0354df59b9930`

批量直播间开播状态检测/Batch live room start status check

- Risk: `read`
- Parameters: `[{"name":"room_ids","type":"string","required":true}]`

## `mcp_aac7bc2aa8c23a395d27c7c4`

提取列表作品id/Extract list video id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_abc1c34f245cc3c3984b3867`

# [中文] ### 用途: - 获取商家商品列表(移动端接口) - 数据结构更精简 ### 参数: - seller_id: 卖家ID (必填) - searchParams: 搜索参数(可选) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [...], // 商品列表 "has_m

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"searchParams","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_ac289a118b6ff651f97c5732`

# [中文] ### 用途: - 获取作品的评论回复列表 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论回复列表 # [English] ### Purpose: - Get video comment replies ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Page cursor - count: Numbe

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_aecab3943c2a00d3da8a3327`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_b22e8a01461dfe8927ccc15c`

# [中文] ### 用途: - 生成真实msToken ### 参数: - random_strData: 是否使用随机化的浏览器指纹数据（推荐开启以提高反爬虫能力） - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 真实msToken # [English] ### Purpose:

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false},{"name":"random_strData","type":"boolean","required":false}]`

## `mcp_b2677befe0057eec94677862`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，给指定用户发送私信。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and send private messages to specified users ### Parameters: - uid: User id, obtained from the user

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_b5a1b5e34cb01959703eca87`

# [中文] ### 用途: - 获取 TikTok Creative Center 热门视频榜单(Top Contents)，榜单固定收录 100 条热门视频 - 支持按内容分类筛选、按播放量/互动率/完播率排序，用于选题与创意参考 ### 参数: - period_end_timestamp: 榜单周期结束时间戳(10位秒级)，必填 - period_dimension 为 1 时需传周日 00:00 UTC 的时间戳，其余日期无数据 - period_dimension 为 3 或 5 时可传任意已过去日期的时间戳 - period_dimension: 榜单周期，默认3 - `1`:

- Risk: `write`
- Parameters: `[{"name":"content_label_ids","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"order_by_metric","type":"integer","required":false},{"name":"organic_only","type":"boolean","required":false},{"name":"page","type":"integer","required":false},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_b5ed844c55f50b21033a55f7`

# [中文] ### 用途: - 获取单个作品数据 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_b8e15ef2d9aac487cdc0e233`

获取广告互动分析/Get ad interactive analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric_type","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`

## `mcp_b8e5df4c3c58022d241d5f95`

# [中文] ### 用途: - 获取每日趋势搜索关键词 ### 返回: - 趋势搜索关键词 # [English] ### Purpose: - Get daily trending search words ### Return: - Trending search words # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_b98f8f5d56c8c97f46d0cc77`

获取创作者账号违规记录列表/Get Creator Account Violation Record List

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_bac4fa1b3674e0fdde9ae695`

# [中文] ### 用途: - 获取创作者信息，包括创作者的基本信息、粉丝数、橱窗商品数量、带货直播间等信息。 ### 参数: - creator_uid: 创作者uid ### 返回: - 创作者信息 # [English] ### Purpose: - Get creator information, including the creator's basic information, number of fans, number of storefront products, shop live room and other information. ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"creator_uid","type":"string","required":true}]`

## `mcp_bcea88aee5c7567705576248`

# [中文] ### 用途: - 获取搜索关键词建议(移动端接口) - 专为电商搜索结果优化 ### 参数: - search_word: 搜索关键词 (必填) - lang: 语言代码 (en-US/zh-CN等) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "", "data": [ // 建议列表(最多50个) "关键词1", "关键词2",

- Risk: `read`
- Parameters: `[{"name":"lang","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_bee8beeafd6bcbd0a6b3ea04`

# [中文] ### 用途: - 获取指定关键词的直播搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 直播搜索结果 # [English] ### Purpose: - Get live search results of specified keywords ### Parameters: - keywo

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_bef5f8989951d2dd47640224`

# [中文] ### 用途: - 获取指定商家的商品列表 - 支持分页加载更多商品 ### 参数: - seller_id: 卖家ID (必填) - search_params: 搜索参数，用于分页加载(可选) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [ // 商品列表(每页30

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"search_params","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_c0b2e7f6d088fa84281ebfab`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_c150f63087e9f2aca6f6af49`

获取同款商品关联视频/Get Product Related Videos

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_c160ff43ce1d9af3f776ad63`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor, use

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_c5313bc46232080d11bb2087`

获取视频详细分段统计数据/Get Video Detailed Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_c703fdaf147e2c5e6ff3eaf4`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0, the second page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_cacdf0ba3db073254d707800`

生成 XBogus/Generate XBogus

- Risk: `write`
- Parameters: `[{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_cae03973a881181f510747ac`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword - Note: If you cannot j

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_cc337bfdda33b5763af62181`

获取广告关键帧分析/Get ad keyframe analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false}]`

## `mcp_ccd5c702cbe3be00195814be`

# [中文] ### 用途: - 根据视频ID来增加作品的播放数 ### 参数: - aweme_type: 作品类型，0:视频 1:图文，可以从单一作品数据接口中获取。 - item_id: 作品id，别名为aweme_id - invite_code: 邀请码，此接口需要邀请码才能使用。 ### 返回: - 当前时间戳和状态码，状态码为200时表示成功，否则为失败，可以尝试更换一个作品id再次调用，或者等待一段时间后再次调用。 # [English] ### Purpose: - Increase the number of plays of the work according to t

- Risk: `read`
- Parameters: `[{"name":"aweme_type","type":"integer","required":true},{"name":"item_id","type":"string","required":true}]`

## `mcp_cfbaabf42aaf835dc9a648db`

# [中文] ### 用途: - 获取用户的点赞列表 - 注意: 该接口需要用户点赞列表为公开状态 ### 参数: - secUid: 用户secUid - cursor: 翻页游标 - count: 每页数量，默认为20，不可变更。 - coverFormat: 封面格式 - post_item_list_request_type: 排序方式 - 0：默认排序 - 1：热门排序 - 2：最旧排序 ### 返回: - 用户的点赞列表 ### 备注: - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，否则会返回 HTTP 403。 - 访问视频CDN直链时

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_d1e071e2338f738fd02be550`

# [中文] ### 用途: - 获取直播间首页推荐的可用标签(直播分类 Tab)列表 - 用于配合 `/fetch_live_recommend` 接口，获取其 `related_live_tag` 参数的可选值 ### 参数: - logid: 翻页游标。首页请求时留空；加载下一页时，传入上一次响应返回的 `logid` 值 ### 返回: - 可用标签(直播分类 Tab)列表 - logid: 本次请求的日志ID(来自响应头 `x-tt-logid`)，翻页加载更多时需把它再次作为 `logid` 参数传入 ### 备注: - `related_live_tag` 的可选值并不固定，会随

- Risk: `read`
- Parameters: `[{"name":"logid","type":"string","required":false}]`

## `mcp_d2ef14fb83c716ded7e0dde7`

获取用户的直播详情/Get user live details

- Risk: `read`
- Parameters: `[{"name":"uniqueId","type":"string","required":true}]`

## `mcp_d41eff9f4f20f28724369e03`

获取用户的收藏列表/Get user favorites

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_d529efc9d48fb7c594aa76f1`

# [中文] ### 用途: - TikTok直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID（可选） - resp_content_type: 响应格式，protobuf（默认）或 json ### 返回: - 弹幕参数数据 # [English] ### Purpose: - TikTok live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID (optional) - res

- Risk: `read`
- Parameters: `[{"name":"resp_content_type","type":"string","required":false},{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_d6402f037c0657f8b07ab807`

# [中文] ### 用途: - 获取分享二维码 ### 参数: - object_id: 对象id，当前支持个人主页接口响应中的uid作为参数。 ### 返回: - 二维码图片 # [English] ### Purpose: - Get share QR code ### Parameters: - object_id: Object id, currently supports the uid in the response of the personal homepage interface as a parameter. ### Return: - QR code image # [

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"schema_type","type":"integer","required":false}]`

## `mcp_d6adfa71a8bd7476db63f2dd`

# [中文] ### 用途: - 使用用户名获取用户 user_id 和 sec_user_id ### 参数: - username: 用户名 ### 返回: - 用户 user_id 和 sec_user_id # [English] ### Purpose: - Get user_id and sec_user_id by Username ### Parameters: - username: Username ### Return: - User user_id and sec_user_id # [示例/Example] username = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_da3b9177f9c82032d79fcb4a`

获取直播间商品列表数据/Get live room product list data

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_dc513dd70aebe40eb36482cd`

# [中文] ### 用途: - 搜索关键字推荐 ### 参数: - keyword: 搜索关键词 ### 返回: - 关键字推荐列表 # [English] ### Purpose: - Search keyword suggest ### Parameters: - keyword: Search keyword ### Return: - Keyword suggest list # [示例/Example] keyword = "TikTok"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_dc6e85dfb287467f75ac49b5`

获取视频与商品关联统计数据/Get Video-Product Association Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_dcfefd2687ea94ddb0aa89d7`

提取用户user_id/Extract user user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_e033f002e8a711f390da1087`

# [中文] ### 用途: - 分析视频评论中出现的热门关键词和话题，挖掘用户反馈 - 提取观众评论中的主要内容和观点，帮助理解受众关注点 - 支持创作者优化内容策略，增强与观众的互动和连接 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `key_words`: 评论中提取的关键词列表，包含以下字段: - `key_word`: 关键词文本 - `comments`: 包含该关键词的评论列表，每条评论包含: - `cid`: 评论ID - `text`: 评

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_e3046903788d66d24dce7efe`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_e566dc5e0f8e27b84b01dc77`

# [中文] ### 用途: - 直播间开播状态检测 - 如果当前直播间不存在或已下播，则返回空。 ### 参数: - room_id: 直播间ID ### 返回: - 直播间开播状态 # [English] ### Purpose: - Live room start status check - If the current live room does not exist or has ended, it will return empty. ### Parameters: - room_id: Live room ID ### Return: - Live room start sta

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_e9030ee44d4e7b48773890f8`

# [中文] ### 用途: - 获取单个作品数据 V3 ### 参数: - aweme_id: 作品id - region: 国家代码，默认US，支持ISO 3166-1 alpha-2国家代码，例如：US、GB、FR、DE、IN、JP等。 - 备注：某些视频可能在特定国家/地区不可用，设置region参数可以尝试获取该国家/地区的视频数据。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V3 ### Parameters: - aweme_id: Video id - region: Country code

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_e96bf05b8a3fa5ffb53e7228`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户信息，unique_id也是用户的用户名，如果使用请保持sec_user_id以及user_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"unique_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_eb9748bd0da37b0ed61193c6`

设备注册/Register device for TikTok Web

- Risk: `read`
- Parameters: `[]`

## `mcp_ebeafcfeefe5359029219bc3`

# [中文] ### 用途: - 获取TikTok视频的详细统计数据，包括观看量、点赞数、评论数和收藏数等核心指标 - 提供总量统计以及从发布日期起14天的每日趋势数据，便于分析视频表现 - 帮助创作者分析内容效果，评估用户互动情况，优化内容策略 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `video_views`: 视频总观看次数 - `value`: 观看次数数值 - `video_views_14_days`: 近14天的每日观看量趋势数据 - `i

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_ee1e804a8aca388b3836b326`

获取热门视频详情/Get top contents item detail

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"item_id","type":"string","required":true},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_f06ce8966528623b39913a68`

获取商品详情V1(桌面端-数据完整)/Get product detail V1(Full data)

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_f20129db672a17ca39c69bc7`

# [中文] ### ⚠️ 本接口已弃用: - 请改用 `fetch_product_detail` 或 `fetch_product_detail_v3` ### 用途: - 获取TikTok Shop商品详情(移动端接口) - 数据结构更精简，响应速度更快 ### 参数: - seller_id: 卖家ID (可传空字符串) - product_id: 商品ID (必填) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```j

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_f534d3ce5b00b726e3005257`

批量检测直播间是否在线/Batch check if live rooms are online

- Risk: `write`
- Parameters: `[{"name":"room_ids","type":"array","required":false}]`

## `mcp_f58fe0263cdcd3fc570447c2`

获取直播间商品列表数据 V2 /Get live room product list data V2

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_f5946868e7d1f0427789512e`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内推广的商品列表及其销售数据分析。 - 支持按商品成交额、商品上架时间排序，可分页查询。 ### 返回内容说明: - `segments`（分段数据列表）: - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（如按成交额、商品 ID 排序） - `next_pagination`: 翻页信息（是否还有更多页、下一页页码、总页数、总记录数） - `timed_lists`: 每个时间段内的商品数据，包括： - `product

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_f695e51f24bfae898252433f`

首页推荐作品/Home Feed

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"region","type":"string","required":false}]`
