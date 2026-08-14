# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-2`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_71436337a6ab408d41bb02d8`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内推广的商品列表及其销售数据分析。 - 支持按商品成交额、商品上架时间排序，可分页查询。 ### 返回内容说明: - `segments`（分段数据列表）: - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（如按成交额、商品 ID 排序） - `next_pagination`: 翻页信息（是否还有更多页、下一页页码、总页数、总记录数） - `timed_lists`: 每个时间段内的商品数据，包括： - `product

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_732f4b5a0822a68dd1553158`

# [中文] ### 用途: - 加密strData指纹数据，用于生成msToken请求 ### 参数: - data: 原始指纹数据字符串（请先将JSON格式然后转换成字符串进行请求） ### 返回: - 加密后的strData # [English] ### Purpose: - Encrypt strData fingerprint data for msToken request ### Parameters: - data: Raw fingerprint data string (please convert JSON format to string before request

- Risk: `read`
- Parameters: `[{"name":"data","type":"string","required":true}]`

## `mcp_733eac41a4da93d0cd98345c`

获取创作者账号信息/Get Creator Account Info

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_73e77f7b6fc7ba87419cc801`

# [中文] ### 用途: - 获取直播每日榜单数据 ### 参数: - anchor_id: 主播id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的主播id。 - room_id: 直播间id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的id。 - rank_type: 榜单类型，参数值如下表： | type | rankName | 分组类型 | 说明 | |------|----------|----------|------| | 0 | `hourly_rank` | GIFT_RANK | 小

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":false},{"name":"gap_interval","type":"integer","required":false},{"name":"rank_type","type":"integer","required":false},{"name":"region_type","type":"integer","required":false},{"name":"room_id","type":"string","required":false}]`

## `mcp_74142b670a60e37bcca9b4fa`

通过分享链接获取商品ID/Get Product ID by Share Link

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_7863a0250c9f7054b3f9c54b`

# [中文] ### 用途: - 获取指定关键词的综合搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 ### 返回: - 综合搜索结果 # [English] ### Purpose: - Get comprehensive search results of specified keywords ### Parameters: - keyword: Keyw

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_78f85b2dc9d20ccdb55dbd6a`

# [中文] ### ⚠️ 本接口已弃用: - 如需按类目或关键词取商品，请改用 `fetch_products_by_category_id` 或 `fetch_search_products_list` ### 用途: - 获取TikTok Shop的热卖商品列表 - 返回当前最受欢迎的商品 ### 参数: - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) - count: 返回商品数量，默认20 (可选)。数值越大响应越慢 - exclude_product_ids: 已获取过的商品ID，逗号分隔 (可选)，用于翻页 ### 翻页方式: - 本接口没有页码

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"exclude_product_ids","type":"string","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_79fef8c4ed6752833a571887`

获取创作者账号概览/Get Creator Account Overview

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_7cc72e27a98f0b26beb6f95b`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定用户主页。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified user profile ### Parameters: - uid: User id, obtained from the user profil

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_7dc92a4a02f48f45be08d598`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号的健康状况信息，包括过去 90 天内的健康评分（风险等级）以及当前累计的违规积分数量。 - 关于违规积分： - 违规积分是 TikTok 用于衡量账号健康状况的重要指标。 - 违规积分越高，账号健康状况越差，可能面临限流、禁播、封禁等处罚。 - 违规积分将直接影响账号的曝光量和推荐量。 ### 累计违规积分对应的惩罚等级： | 分数范围 | 惩罚措施 | 惩罚时长 | | --------- | --------------------------------------------------------- | ---

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_7e3ee9b93c7d204e65296d50`

# [中文] ### 用途: - 直播间开播状态检测 - 如果当前直播间不存在或已下播，则返回空。 ### 参数: - room_id: 直播间ID ### 返回: - 直播间开播状态 # [English] ### Purpose: - Live room start status check - If the current live room does not exist or has ended, it will return empty. ### Parameters: - room_id: Live room ID ### Return: - Live room start sta

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_7f01bcabae88443e61a84c37`

# [中文] ### 用途: - 获取指定关键词的直播搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 直播搜索结果 # [English] ### Purpose: - Get live search results of specified keywords ### Parameters: - keywo

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_7fa6b04504f7cf0314f67fd2`

获取直播间商品列表数据 V2 /Get live room product list data V2

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_80ba5796ac5f8dc5a9d32ced`

# [中文] ### 用途: - 通过直播链接获取直播间信息 - 此接口可获取离线直播间信息 ### 参数: - live_room_url: 直播间链接 ### 返回: - 直播间信息 # [English] ### Purpose: - Get live room information via live link - This interface can get offline live room information ### Parameters: - live_room_url: Live room link ### Return: - Live room information 

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_864deb37d28a24b52a4cb292`

生成web_id/Generate web_id

- Risk: `read`
- Parameters: `[{"name":"app_id","type":"integer","required":false},{"name":"referer","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"user_agent","type":"string","required":false},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_86e83ea744ba6c86355b56f8`

提取列表作品id/Extract list video id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_87a250e06f00a7a7c43ba6d0`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id - region: Region, supports US, GB, FR, JP, VN, SG, default US ### Return: - Hashtag details

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_87c8751d498ded63c43a0fba`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的直播表现数据概览。 - 默认统计从 `start_date` 当月起 1 个自然月（如传入 2025-04-01，则统计整个 4 月的数据）。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者 ID - `timed_stats`: 每个时间段（通常按日或月分段）的直播表现数据，包含： - `live_revenue.amount`: 直播带货收入 

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_8940a73bec189d5b614016f7`

# [中文] ### 用途: - 获取指定商家的商品列表 - 支持分页加载更多商品 ### 参数: - seller_id: 卖家ID (必填) - search_params: 搜索参数，用于分页加载(可选) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [ // 商品列表(每页30

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"search_params","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_8b02e6e858ec425de11469ad`

获取单个作品数据/Get single video data

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_8c0f9909a48ee4b0cd3da183`

# [中文] ### 用途: - 获取TikTok创作者账号的基本信息和关键统计数据 - 查看创作者账号的成长历程和达成的重要里程碑 - 分析创作者账号发展轨迹，了解粉丝增长和内容影响力变化 ### 参数: - user_id: 创作者用户ID，必填参数，可从用户主页URL或TikTok后台获取 ### 返回内容说明: - `user_id`: 请求的创作者ID - `creator_info`: The creator's basic information - `nickname`: 创作者昵称 - `sec_user_id`: 安全用户ID - `unique_id`: 唯一用户名 - 

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_8c7e3206c4093dfbf78ccb8b`

获取热门视频详情/Get top contents item detail

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"item_id","type":"string","required":true},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_8e2327ec7a999ac899596510`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户信息，unique_id也是用户的用户名，如果使用请保持sec_user_id以及user_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"unique_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_8e6aba58150ae70e736f2452`

获取商品详情V1(桌面端-数据完整)/Get product detail V1(Full data)

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_8f7ddb93334353b7a98a3ccb`

获取列表unique_id/Get list unique_id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_914e59a24bdce68d156b0622`

# [中文] ### 用途: - 获取创作者信息，包括创作者的基本信息、粉丝数、橱窗商品数量、带货直播间等信息。 ### 参数: - creator_uid: 创作者uid ### 返回: - 创作者信息 # [English] ### Purpose: - Get creator information, including the creator's basic information, number of fans, number of storefront products, shop live room and other information. ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"creator_uid","type":"string","required":true}]`

## `mcp_915bf5c92a630052a5525b07`

# [中文] ### 用途: - 获取用户的个人信息 ### 参数: - secUid: 用户secUid - uniqueId: 用户uniqueId - secUid和uniqueId至少提供一个, 优先使用uniqueId, 也就是用户主页的链接中的用户名。 ### 返回: - 用户的个人信息 # [English] ### Purpose: - Get user profile ### Parameters: - secUid: User secUid - uniqueId: User uniqueId - At least one of secUid and uniqueId is 

- Risk: `read`
- Parameters: `[{"name":"secUid","type":"string","required":false},{"name":"uniqueId","type":"string","required":false}]`

## `mcp_91b7b8a49e6a039619dc0b41`

获取创作者账号违规记录列表/Get Creator Account Violation Record List

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_91ee9823bafe6b6ddca5fb0a`

# [中文] ### 用途: - 获取综合搜索列表 ### 参数: - keyword: 搜索关键词 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.im

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_94937d0d09e55a7cebf8ebdd`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，给指定用户发送私信。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and send private messages to specified users ### Parameters: - uid: User id, obtained from the user

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_9823f7c4a7d31b9a8f1c6127`

获取直播间礼物列表/Get live room gift list

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":false}]`

## `mcp_99f25677ae5cce4f223a800d`

获取视频关联商品列表/Get Video Associated Product List

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_9c8d02ed229d11bdbd32ba63`

# [中文] ### 用途: - 生成 X-Mssdk-Info 和 X-Mssdk-RC，用于 TikTok Web 设备注册、登录等场景 ### 参数: - user_agent (str, 可选): 用户代理字符串，目前不支持自定义，默认为固定的值 ### 返回: - X-Mssdk-Info: 生成的签名信息 - X-Mssdk-RC: 生成的 RC 值 - user_agent: 使用的用户代理字符串 - version: 签名使用的 webmssdk 版本 # [English] ### Purpose: - Generate X-Mssdk-Info and X-Mssdk-RC

- Risk: `write`
- Parameters: `[{"name":"user_agent","type":"any","required":false}]`

## `mcp_9f3f230dd3da2e88aaad1afd`

# [中文] ### 用途: - 获取直播间内观众的排行榜数据 ### 参数: - room_id: 直播间id - anchor_id: 主播id ### 返回: - 排行榜数据 # [English] ### Purpose: - Get ranking list of audience in live room ### Parameters: - room_id: Live room id - anchor_id: Anchor id ### Return: - Ranking list data # [示例/Example] room_id = "7358603858249009962

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":true},{"name":"room_id","type":"string","required":true}]`

## `mcp_a3485063217c7379d2d71380`

通过用户名获取用户账号国家地区/Get user account country by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_a4258db48b68ed6f9a9dea88`

生成 XGnarly 和 XBogus /Generate XGnarly and XBogus

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_a480bd6fa7763aa5929c30e4`

首页推荐作品/Home Feed

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_a4edeab8685e04d34918827e`

获取分享短链接/Get share short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_a517677d5222affd856fdad6`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id，优先级越高速度越快。 ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_a57c2ae7faf37563950264f6`

# [中文] ### ⚠️ 本接口已弃用: - 请改用 `fetch_product_detail` 或 `fetch_product_detail_v3` ### 用途: - 获取TikTok Shop商品详情(移动端接口) - 数据结构更精简，响应速度更快 ### 参数: - seller_id: 卖家ID (可传空字符串) - product_id: 商品ID (必填) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```j

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_a61f06fa06bc69ee2b1f1573`

# [中文] ### 用途: - 获取指定关键词的音乐搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - filter_by: 过滤类型，0-全部，1-标题，2-作者，默认为0-全部 - sort_type: 排序类型，0-相关度，1-最多使用，2-最新，3-时长最短，4-时长最长，默认为0-相关度 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 音乐搜

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_by","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_a84d9293305b5f7b0be94f6c`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的视频表现概览。 - 默认统计从调用当天向前 30 天的数据（或按平台设定的自然月分段）。 - 适合用于视频表现分析，例如视频数量、播放量、粉丝增长、成交数据等。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置信息（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者账号 ID - `timed_stats`: 每个时间段的视频表现数据，包含： - `vv_cnt`: 视频播放量（Video Views

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_abbb768b20fc9d9f7f5d8763`

# [中文] ### 用途: - 获取指定关键词的视频搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 视频搜索结果 # [English] ### Purpose: - Get video search result

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_ac2c5860a7691e80bdbbb12a`

获取推荐广告/Get recommended ads

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry","type":"string","required":false},{"name":"material_id","type":"string","required":true}]`

## `mcp_ae4edd0fdb7610ac4fe54677`

获取广告关键帧分析/Get ad keyframe analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false}]`

## `mcp_af2b00a900c737d339406a85`

获取视频详细分段统计数据/Get Video Detailed Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_afe982b1105c8d1d571125c0`

获取用户的粉丝列表/Get user followers

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_b0a863b79539343feebb9361`

# [中文] ### 用途: - 获取 TikTok Creative Center 热门视频榜单(Top Contents)，榜单固定收录 100 条热门视频 - 支持按内容分类筛选、按播放量/互动率/完播率排序，用于选题与创意参考 ### 参数: - period_end_timestamp: 榜单周期结束时间戳(10位秒级)，必填 - period_dimension 为 1 时需传周日 00:00 UTC 的时间戳，其余日期无数据 - period_dimension 为 3 或 5 时可传任意已过去日期的时间戳 - period_dimension: 榜单周期，默认3 - `1`: 

- Risk: `write`
- Parameters: `[{"name":"content_label_ids","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"order_by_metric","type":"integer","required":false},{"name":"organic_only","type":"boolean","required":false},{"name":"page","type":"integer","required":false},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_b138781006c3e7b74cb41f6d`

获取热门广告聚光灯/Get top ads spotlight

- Risk: `write`
- Parameters: `[{"name":"industry","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_b3342dee738c3ab1e1ca4874`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword - Note: If you cannot j

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_b393b27f8770c25167d7ff09`

获取热门标签详情(趋势)/Get trending hashtag detail

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"hashtag_id","type":"string","required":true},{"name":"time_range","type":"integer","required":false}]`

## `mcp_b5a0ee5115f13fa74d195bd8`

根据分享链接获取单个作品数据/Get single video data by sharing link

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_b8209aebf04b7d9d1dbba097`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_c097f9073dbfe72eb27cd9a2`

搜索广告/Search ads

- Risk: `write`
- Parameters: `[{"name":"ad_format","type":"integer","required":false},{"name":"ad_language","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"industry","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"like","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"objective","type":"integer","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"period","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_c4ddc96477c921b0085c9193`

# [中文] ### 用途: - 获取内容翻译数据 ### 参数: - trg_lang: 目标语言 - zh-Hans: 简体中文 - zh-Hant: 繁体中文 - en: 英语 - ja: 日语 - ko: 韩语 - fr: 法语 - de: 德语 - ru: 俄语 - es: 西班牙语 - pt: 葡萄牙语 - vi: 越南语 - th: 泰语 - id: 印尼语 - ar: 阿拉伯语 - it: 意大利语 - tr: 土耳其语 - he: 希伯来语 - pl: 波兰语 - nl: 荷兰语 - sv: 瑞典语 - da: 丹麦语 - fi: 芬兰语 - no: 挪威语 - cs: 捷克

- Risk: `write`
- Parameters: `[{"name":"src_content","type":"string","required":false},{"name":"trg_lang","type":"string","required":false}]`

## `mcp_cf3b83cd1c172e625d3e0010`

# [中文] ### 用途: - 获取指定关键词的用户搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - user_search_follower_count（根据粉丝数排序）: - 空-不限制， - ZERO_TO_ONE_K = 0-1K， - ONE_K_TO_TEN_K-1K = 1K-10K， - TEN_K_TO_ONE_H_K = 10K-100K， - ONE_H_K_PLUS = 100K以上 - user_search_profile_type（根据账号类型排序）: - 空-不限制， - VERIFIED = 认证

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"user_search_follower_count","type":"string","required":false},{"name":"user_search_other_pref","type":"string","required":false},{"name":"user_search_profile_type","type":"string","required":false}]`

## `mcp_d0c403527018a8ba0f1e5ee5`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0, the second page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_d125ad23add0b7fd5f28c579`

# [中文] ### 用途: - 根据关键词搜索商品 - 支持分页加载更多结果 ### 参数: - search_word: 搜索关键词 (必填) - offset: 偏移量，用于分页 (默认0) - page_token: 分页标记，用于获取下一页 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "produ

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_d1f8c8201320537841cddc03`

设备注册/Register device for TikTok Web

- Risk: `read`
- Parameters: `[]`

## `mcp_d220905a32ba2b7c0803cbd7`

获取广告互动分析/Get ad interactive analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric_type","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`

## `mcp_d3848a68941f97d17a83716a`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_d58ef45a9c6d20cebf0c8458`

获取支持的国家地区列表/Get supported location list

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_d742458f4bdd031872c6ac5b`

# [中文] ### 用途: - 生成ttwid ### 参数: - 无 ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Parameters: - None ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_d96f336249616eb1031bb0d8`

通过分享链接获取店铺ID/Get Shop ID by Share Link

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_dc88f236e0c2712ebbf6f6ed`

批量获取创作者卡片/Get creators card

- Risk: `write`
- Parameters: `[{"name":"creator_type","type":"integer","required":false},{"name":"need_loader_list","type":"array","required":false},{"name":"tt_uids","type":"array","required":false}]`

## `mcp_dd155ab37fb5b06402121f51`

# [中文] ### 用途: - 搜索用户 ### 参数: - keyword: 搜索关键词 - cursor: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_dd2a9daffe4744f4b5bf05cd`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接（最多支持10个链接）、 ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link (Support up to 10 links) ### Return: - If the sec_user_id is s

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_de9a2a958fe5bffeff5d6f69`

# [中文] ### 用途: - 获取类似用户推荐 ### 参数: - sec_uid: 用户sec_uid - page_token: 分页标记，第一次请求时不需要传递，后续请求时传递上一次响应中的next_page_token值。 ### 返回: - 类似用户推荐 # [English] ### Purpose: - Similar User Recommendations ### Parameters: - sec_uid: User sec_uid - page_token: Page token, not required for the first request, for sub

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_dfac4115b376f3754d18ff87`

# [中文] ### 用途: - 生成TikTok Web的哈希ID ### 参数: - email: 邮箱地址 ### 返回: - 生成的哈希ID字符串 # [English] ### Purpose: - Generate hashed ID for TikTok Web ### Parameters: - email: Email address ### Return: - Generated hashed ID string # [示例/Example] email = "test@example.com"

- Risk: `read`
- Parameters: `[{"name":"email","type":"string","required":true}]`

## `mcp_e2da35adc97c6e32dc73f92e`

获取直播间商品列表数据/Get live room product list data

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_e401625504ed5178946bde4a`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for pagin

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_e79aef0e85478510642b4cf5`

批量检测直播间是否在线/Batch check if live rooms are online

- Risk: `write`
- Parameters: `[{"name":"room_ids","type":"array","required":false}]`

## `mcp_ed2af799c5856b02756c3fea`

提取用户sec_user_id/Extract user sec_user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_f2262b4195851c4a931e968b`

# [中文] ### 用途: - 获取创作者搜索洞察相关视频，查询该搜索词条下比较火的相关视频 ### 参数: - keyword: 搜索关键词，从 fetch_creator_search_insights 或 fetch_creator_search_insights_trend 接口获取 - offset: 分页偏移量，默认0 - count: 每页数量，默认20 ### 返回: - 相关热门视频列表 # [English] ### Purpose: - Get creator search insights related videos, query popular related v

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_f2f6442335ba086c3412fa65`

# [中文] ### 用途: - 获取直播间首页推荐列表 ### 参数: - related_live_tag: 相关直播标签(直播分类)。该参数的可选值不固定，请先调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签列表，再从中选取传入。 ### 返回: - 直播间首页推荐列表 ### 备注: - 不清楚 `related_live_tag` 可以传哪些值时，请调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签(分类 Tab)列表。 - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，

- Risk: `read`
- Parameters: `[{"name":"related_live_tag","type":"string","required":true}]`

## `mcp_f3a2661a4984a05d9e54d35e`

检测直播间是否在线/Check if live room is online

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_f5390b2eb7b15a744ceeccd3`

# [中文] ### 用途: - Tag详情 ### 参数: - tag_name: Tag名称 ### 返回: - Tag详情 # [English] ### Purpose: - Tag Detail ### Parameters: - tag_name: Tag name ### Return: - Tag Detail # [示例/Example] tag_name = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"tag_name","type":"string","required":true}]`

## `mcp_f574f76b6a2e066676adb7a9`

# [中文] ### 用途: - 生成随机浏览器指纹数据，可用于自定义msToken请求 ### 参数: - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 浏览器指纹数据 # [English] ### Purpose: - Generate random browser fingerp

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false}]`

## `mcp_f8529ef0419963cee0831bb6`

获取用户的收藏列表/Get user favorites

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_f8bde5c695fda386bf10c3db`

# [中文] ### 用途: - 获取TikTok音乐排行榜数据 ### 参数: - scene: 排行榜类型 - 0: Top 50 (热门前50) - 1: Viral 50 (病毒式传播前50) - cursor: 分页游标，默认0 - count: 每页数量，默认50，最大50 ### 返回: - 音乐排行榜数据，包含歌曲信息、排名变化等 # [English] ### Purpose: - Get TikTok music chart list data ### Parameters: - scene: Chart type - 0: Top 50 (Popular top 50) 

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"scene","type":"integer","required":false}]`
