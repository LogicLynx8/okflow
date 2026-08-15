# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 80

## `mcp_0124c8ea834e6adb7cfd1fb4`

获取分享短链接/Get share short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_03c76098d8aec006b836139c`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的直播表现数据概览。 - 默认统计从 `start_date` 当月起 1 个自然月（如传入 2025-04-01，则统计整个 4 月的数据）。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者 ID - `timed_stats`: 每个时间段（通常按日或月分段）的直播表现数据，包含： - `live_revenue.amount`: 直播带货收入

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_085fea8facb76c927320328d`

# [中文] ### 用途: - 获取广告在同行业中的百分位排名数据 - 了解广告在各项指标上相对于同行的表现水平 - 帮助评估广告效果并制定优化策略 ### 参数: - material_id: 广告素材ID，必填参数 - metric: 分析指标，可选值： - ctr_percentile: 点击率百分位（默认） - time_attr_conversion_rate_percentile: 时间归因转化率百分位 - click_cnt_percentile: 点击次数百分位 - time_attr_convert_cnt_percentile: 时间归因转化次数百分位 - show_cn

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`

## `mcp_08d170308ae0ff55e8e7b71c`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定用户主页。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified user profile ### Parameters: - uid: User id, obtained from the user profil

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_0a1ff89f288f3fb4983e7749`

# [中文] ### 用途: - 生成TikTok Web的哈希ID ### 参数: - email: 邮箱地址 ### 返回: - 生成的哈希ID字符串 # [English] ### Purpose: - Generate hashed ID for TikTok Web ### Parameters: - email: Email address ### Return: - Generated hashed ID string # [示例/Example] email = "test@example.com"

- Risk: `read`
- Parameters: `[{"name":"email","type":"string","required":true}]`

## `mcp_0b286ef3d539e127bd6ea9a8`

通过分享链接获取商品ID/Get Product ID by Share Link

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_0cad79b028f50dceaacee2aa`

获取搜索板块配置/Get search modules config

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_0d5630a4389defb7b0dc512a`

# [中文] ### 用途: - 搜索照片 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_0dfefbe331b9ed33552891c0`

# [中文] ### 用途: - 搜索商品(移动端接口) - 数据结构更精简，响应更快 ### 参数: - search_word: 搜索关键词 (必填) - offset: 偏移量 (默认0) - page_token: 分页标记 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [...], // 商品列表 "has_more": true, // 是否有更多 "load_more_params": {}

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_0f027bffc373646ccf8baabc`

提取直播间弹幕/Extract live room danmaku

- Risk: `read`
- Parameters: `[{"name":"danmaku_type","type":"string","required":true},{"name":"live_room_url","type":"string","required":true}]`

## `mcp_116eef1ac38f3b7bf1a102b3`

生成 XGnarly 和 XBogus /Generate XGnarly and XBogus

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_12c9690cb91bd8baf35aa763`

获取支持的国家地区列表/Get supported location list

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_15506272af60442e68149632`

获取单个作品数据 V2/Get single video data V2

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_18a29fc95396ca711e3fc246`

# [中文] ### 用途: - TikTok APP加密算法，用于生成请求头中的加密参数。 - 生成的加密参数列表： - `x-ladon` - `x-khronos` - `x-argus` - `x-gorgon` （8404） ### 参数: - url: 需要加密的完整URL - data: 如果接口是POST请求，请填写POST请求的数据参与加密计算，GET请求时传入空字符串即可。 - device_info: 设备信息，可选参数，如果不填写则使用默认设备信息，设备信息会修改传入的URL中的参数。 ### 返回: - 加密参数列表 # [English] ### Purpose:

- Risk: `write`
- Parameters: `[{"name":"data","type":"string","required":false},{"name":"device_info","type":"object","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_18b7a50e942f1001df65594e`

# [中文] ### 用途: - 生成随机浏览器指纹数据，可用于自定义msToken请求 ### 参数: - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 浏览器指纹数据 # [English] ### Purpose: - Generate random browser fingerp

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false}]`

## `mcp_1936f1ae7fea5598d3b25cc2`

批量查询Gift ID对应的礼物名称($0.025/次,建议50个)/Batch get gift names by gift IDs ($0.025/call, suggest 50)

- Risk: `write`
- Parameters: `[{"name":"gift_ids","type":"array","required":true}]`

## `mcp_1d206139bb2f713c1b0f6d12`

# [中文] ### 用途: - 获取创作者搜索洞察详情数据，用于查询特定搜索词条的搜索统计数据 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - time_range: 时间范围，可选值: - past_7_days: 过去7天 - past_30_days: 过去30天（默认） - past_60_days: 过去60天 - past_6_months: 过去6个月 - custom: 自定义时间（需配合 start_date 和 end_date 使用，不能超过6个月） - start_

- Risk: `read`
- Parameters: `[{"name":"dimension_list","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"query_id_str","type":"string","required":true},{"name":"start_date","type":"integer","required":false},{"name":"time_range","type":"string","required":false}]`

## `mcp_2122d2f10ea1c51445318c72`

# [中文] ### 用途: - 获取用户的个人信息 ### 参数: - secUid: 用户secUid - uniqueId: 用户uniqueId - secUid和uniqueId至少提供一个, 优先使用uniqueId, 也就是用户主页的链接中的用户名。 ### 返回: - 用户的个人信息 # [English] ### Purpose: - Get user profile ### Parameters: - secUid: User secUid - uniqueId: User uniqueId - At least one of secUid and uniqueId is

- Risk: `read`
- Parameters: `[{"name":"secUid","type":"string","required":false},{"name":"uniqueId","type":"string","required":false}]`

## `mcp_217ab28c82b68a3a9caeca19`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_2242d9c4a5146eb890205f61`

# [中文] ### 用途: - 获取单个作品数据 V2 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2 ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_239787846d906e44a415d61b`

# [中文] ### 用途: - 搜索指定用户的关注列表，可以用于查找某个用户的关注中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配。 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search following list of specified user, can be used to find whether there is a user with a specific nickname

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_25913774e27f3541590d5896`

获取热门广告聚光灯/Get top ads spotlight

- Risk: `write`
- Parameters: `[{"name":"industry","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_289791fb34e5baa19d78a5e5`

# [中文] ### 用途: - 获取指定用户的关注列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_2993171abe422621848bcc55`

# [中文] ### 用途: - 获取类似用户推荐 ### 参数: - sec_uid: 用户sec_uid - page_token: 分页标记，第一次请求时不需要传递，后续请求时传递上一次响应中的next_page_token值。 ### 返回: - 类似用户推荐 # [English] ### Purpose: - Similar User Recommendations ### Parameters: - sec_uid: User sec_uid - page_token: Page token, not required for the first request, for sub

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_2b5ae5f930bbae35cfd9f485`

搜索广告/Search ads

- Risk: `write`
- Parameters: `[{"name":"ad_format","type":"integer","required":false},{"name":"ad_language","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"industry","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"like","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"objective","type":"integer","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"period","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_2c76c3d1d51a33313f700388`

# [中文] ### 用途: - 加密strData指纹数据，用于生成msToken请求 ### 参数: - data: 原始指纹数据字符串（请先将JSON格式然后转换成字符串进行请求） ### 返回: - 加密后的strData # [English] ### Purpose: - Encrypt strData fingerprint data for msToken request ### Parameters: - data: Raw fingerprint data string (please convert JSON format to string before request

- Risk: `read`
- Parameters: `[{"name":"data","type":"string","required":true}]`

## `mcp_2ddb4ef8a20d586fa8e93678`

根据TikTok的Gift ID查询对应的礼物名称 | Get gift name by TikTok gift ID

- Risk: `write`
- Parameters: `[{"name":"gift_id","type":"string","required":true}]`

## `mcp_2ecd726a49253d7ee52d48a5`

# [中文] ### 用途: - 根据商品分类ID获取该分类下的商品列表 - 可用于构建分类浏览功能 ### 参数: - category_id: 分类ID (必填，从fetch_products_category_list接口获取) - offset: 翻页偏移量 (默认0) - 每页默认20个商品，每次请求增加20，当响应中的 `hasMore` 为true时可继续请求下一页，否则已到最后一页。 - 例如: 第1页offset=0，第2页offset=20，第3页offset=40，以此类推。 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_31ce55c2d9c261cb34888586`

获取用户的合辑列表/Get user mix list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mixId","type":"string","required":true}]`

## `mcp_3543fc209098082b7e19edbd`

根据直播间链接提取直播间ID/Extract live room ID from live room link

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_38cb06e3acffa8304d8f2ee4`

# [中文] ### 用途: - 获取指定关键词的用户搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - user_search_follower_count（根据粉丝数排序）: - 空-不限制， - ZERO_TO_ONE_K = 0-1K， - ONE_K_TO_TEN_K-1K = 1K-10K， - TEN_K_TO_ONE_H_K = 10K-100K， - ONE_H_K_PLUS = 100K以上 - user_search_profile_type（根据账号类型排序）: - 空-不限制， - VERIFIED = 认证

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"user_search_follower_count","type":"string","required":false},{"name":"user_search_other_pref","type":"string","required":false},{"name":"user_search_profile_type","type":"string","required":false}]`

## `mcp_397eaecdf1429130cd4e7e3a`

# [中文] ### 用途: - 获取直播间内观众的排行榜数据 ### 参数: - room_id: 直播间id - anchor_id: 主播id ### 返回: - 排行榜数据 # [English] ### Purpose: - Get ranking list of audience in live room ### Parameters: - room_id: Live room id - anchor_id: Anchor id ### Return: - Ranking list data # [示例/Example] room_id = "7358603858249009962

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":true},{"name":"room_id","type":"string","required":true}]`

## `mcp_3a8f4f8314319b3f9e995d89`

获取视频受众分析数据/Get Video Audience Analysis Data

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_3abd0c1b18d267d95d6aa63d`

提取用户sec_user_id/Extract user sec_user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_3b6f2d8187819112b45b41d1`

# [中文] ### 用途: - 搜索视频 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_3d41eb8d7068f5f381fa3747`

# [中文] ### 用途: - 获取指定关键词的音乐搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - filter_by: 过滤类型，0-全部，1-标题，2-作者，默认为0-全部 - sort_type: 排序类型，0-相关度，1-最多使用，2-最新，3-时长最短，4-时长最长，默认为0-相关度 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 音乐搜

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_by","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_3da2e06e7a60a4e385fc8407`

批量获取创作者卡片/Get creators card

- Risk: `write`
- Parameters: `[{"name":"creator_type","type":"integer","required":false},{"name":"need_loader_list","type":"array","required":false},{"name":"tt_uids","type":"array","required":false}]`

## `mcp_3de6614694e224748ed3fab9`

# [中文] ### ⚠️ 本接口已弃用: - 如需按类目或关键词取商品，请改用 `fetch_products_by_category_id` 或 `fetch_search_products_list` ### 用途: - 获取TikTok Shop的热卖商品列表 - 返回当前最受欢迎的商品 ### 参数: - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) - count: 返回商品数量，默认20 (可选)。数值越大响应越慢 - exclude_product_ids: 已获取过的商品ID，逗号分隔 (可选)，用于翻页 ### 翻页方式: - 本接口没有页码

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"exclude_product_ids","type":"string","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_3eb9e85855c6b1e3ee90115c`

# [中文] ### 用途: - 获取单个作品由 TikTok 官方 AI 根据视频内容生成的长文与内容概览 - 可用于内容分析、选题参考、SEO 关键词挖掘等场景 ### 参数: - itemId: 作品id ### 返回: - `itemCustomTDK` 字段中包含以下内容: - `title`: AI 生成的标题 - `desc`: AI 生成的内容概览(摘要) - `keywords`: AI 提取的关键词列表 - `article`: AI 根据视频内容生成的长文正文 ### 备注: - 并非所有作品都有 AI 生成内容。若该作品没有，响应中不会出现 `itemCustomTDK

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true}]`

## `mcp_4162cc3f63359a004312cb35`

# [中文] ### 用途: - 获取探索作品数据 ### 参数: - categoryType: 作品分类 - 100: 动画与漫画 - 101: 表演 - 102: 美容护理 - 103: 游戏 - 104: 喜剧 - 105: 日常生活 - 106: 家庭 - 107: 情感关系 - 108: 戏剧 - 109: 穿搭 - 110: 对口型 - 111: 美食 - 112: 运动 - 113: 动物 - 114: 社会 - 115: 汽车 - 116: 教育 - 117: 健身和健康 - 118: 科技 - 119: 唱歌跳舞 - 120: 全部 - count: 每页数量 ### 返回

- Risk: `read`
- Parameters: `[{"name":"categoryType","type":"string","required":false},{"name":"count","type":"integer","required":false}]`

## `mcp_446b99a26ec2ef1c49b346a2`

# [中文] ### 用途: - 获取用户的作品列表 ### 参数: - secUid: 用户secUid - cursor: 翻页游标，首次请求传0，后续传上一次响应返回的 `cursor` 值 - count: 每页数量，默认为15，最大为15，超过15将按15处理。 - coverFormat: 封面格式，默认为2，可选值为1或2。 - post_item_list_request_type: 排序方式，已废弃，传任何值均返回按时间从新到旧的作品列表。 ### 返回: - 用户的作品列表，作品按发布时间从新到旧排列 - `cursor`: 下一页游标，配合 `hasMore` 使用 -

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_44d8b7234c90d90e9d6d1135`

# [中文] ### 用途: - 获取指定用户的粉丝列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_45e1383f7e8e8c651e0edb29`

检测视频虚假流量分析/Detect fake views in video

- Risk: `read`
- Parameters: `[{"name":"content_category","type":"string","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_4667002750338bc5f2061a46`

# [中文] ### 用途: - 获取内容翻译数据 ### 参数: - trg_lang: 目标语言 - zh-Hans: 简体中文 - zh-Hant: 繁体中文 - en: 英语 - ja: 日语 - ko: 韩语 - fr: 法语 - de: 德语 - ru: 俄语 - es: 西班牙语 - pt: 葡萄牙语 - vi: 越南语 - th: 泰语 - id: 印尼语 - ar: 阿拉伯语 - it: 意大利语 - tr: 土耳其语 - he: 希伯来语 - pl: 波兰语 - nl: 荷兰语 - sv: 瑞典语 - da: 丹麦语 - fi: 芬兰语 - no: 挪威语 - cs: 捷克

- Risk: `write`
- Parameters: `[{"name":"src_content","type":"string","required":false},{"name":"trg_lang","type":"string","required":false}]`

## `mcp_4a8df719c3c884666d7b43a4`

# [中文] ### 用途: - 获取指定关键词的视频搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 视频搜索结果 # [English] ### Purpose: - Get video search result

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_4cb6a810648c2c4245ca7152`

# [中文] ### 用途: - 获取地点搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 地点搜索结果 # [English] ### Purpose: - Get location search results ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Location search results # [示例/Example] keyword = "Shanghai" offset = 0

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_4d1ab546febeafc401fe70cc`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id - region: Region, supports US, GB, FR, JP, VN, SG, default US ### Return: - Hashtag details

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_4e3c0a062d221b8f18946192`

# [中文] ### 用途: - 获取 TikTok Creative Center 趋势(Trends)板块的热门标签榜单 - 支持按国家/地区切换，发现不同市场的热门话题趋势 ### 参数: - time_range: 时间范围(天)，可选 7 / 30 / 90，默认7 - country_code: 国家/地区代码，默认US (可选值见 /get_location_list) - page: 页码，默认1 - limit: 每页数量，默认20 - industry_id: 一级行业ID(可选)，按行业筛选热门标签；不传则不限行业。可选值: - 10000000000: 教育 - 110

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_4faaee2da8c9a11f0dc0904c`

# [中文] ### 用途: - 获取直播每日榜单数据 ### 参数: - anchor_id: 主播id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的主播id。 - room_id: 直播间id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的id。 - rank_type: 榜单类型，参数值如下表： | type | rankName | 分组类型 | 说明 | |------|----------|----------|------| | 0 | `hourly_rank` | GIFT_RANK | 小

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":false},{"name":"gap_interval","type":"integer","required":false},{"name":"rank_type","type":"integer","required":false},{"name":"region_type","type":"integer","required":false},{"name":"room_id","type":"string","required":false}]`

## `mcp_5020bac9522a384d8905fb5e`

通过用户名获取用户账号国家地区/Get user account country by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_50aad6f626439bbef5f011e6`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内发布的视频列表及其详细数据表现。 - 支持分页查询，每页返回指定时间段内的视频及其播放、成交等详细数据。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 查询时间范围（起止时间戳、时区、语言等） - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（通常按发布时间降序） - `next_pagination`: 翻页信息（是否有更多页，当前页，总页数，总记录数） -

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"rules","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_5180670aa45d9528cd07c318`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_5380593b03c1d8a96ffae940`

# [中文] ### 用途: - 获取TikTok Shop商品评论 - 支持自定义每页数量、多种筛选和排序方式 ### 参数: - product_id: 商品ID (必填) - page_start: 起始页码，默认1 - 当响应中 has_more=1 时，使用当前页码 +1 进行下一页请求 - page_size: 每页评论数量，默认10 - sort_rule: 排序规则，默认1 - filter_type: 筛选类型 - 1: 默认不选择任何过滤 - 2: 包含图片或视频 - 3: 真实购买过滤 - filter_value: 星级筛选 - 6: 所有星级的评论(默认) - 5:

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"integer","required":false},{"name":"filter_value","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"page_start","type":"integer","required":false},{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"sort_rule","type":"integer","required":false}]`

## `mcp_53d9c2a70f8786ab096dcf4b`

获取创作者账号信息/Get Creator Account Info

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_5ce9bc6da6c132ec5ab40406`

检测直播间是否在线/Check if live room is online

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_5f24d94bf4ecf602023789b0`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified video ### Parameters: - aweme_id: Video id - Note: If you cannot jump, please ma

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_5f3127fd17a3a0dde1ab7a4b`

# [中文] ### 用途: - 搜索用户 ### 参数: - keyword: 搜索关键词 - cursor: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_5f4974a7aa42a1b7f2ce84cd`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the second page is the cu

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_609eddf2b13a114a2085382f`

# [中文] ### 用途: - 获取指定直播间的数据 ### 参数: - room_id: 直播间id ### 返回: - 直播间数据 # [English] ### Purpose: - Get data of specified live room ### Parameters: - room_id: Live room id ### Return: - Live room data # [示例/Example] room_id = "7385461256746060575"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_63c2e3b07ecc5ec70bb4ac5d`

# [中文] ### 用途: - 生成 X-Mssdk-Info 和 X-Mssdk-RC，用于 TikTok Web 设备注册、登录等场景 ### 参数: - user_agent (str, 可选): 用户代理字符串，目前不支持自定义，默认为固定的值 ### 返回: - X-Mssdk-Info: 生成的签名信息 - X-Mssdk-RC: 生成的 RC 值 - user_agent: 使用的用户代理字符串 - version: 签名使用的 webmssdk 版本 # [English] ### Purpose: - Generate X-Mssdk-Info and X-Mssdk-RC

- Risk: `write`
- Parameters: `[{"name":"user_agent","type":"any","required":false}]`

## `mcp_64f834e05965126b467dc90c`

# [中文] ### 用途: - 生成 XGnarly 加密，用于 TikTok Web API 请求 - 此接口使用最新版本（V5.2.0，截至2026年3月）的签名服务，不可自定义 User-Agent，会自动生成一个常见浏览器的 User-Agent - 此接口为完美还原算法，无视除验证码外的一切风控 ### 参数: - url (str): 不携带签名（X-Bogus 或 X-Gnarly）并且包含域名的请求URL，不需要进行URL编码 - body (str): 请求的API参数，适用于POST请求，如果是GET请求则不需要提供 ### 返回: - X-Gnarly 加密字符串 +

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_662cc69a6ab73814ca9026b7`

# [中文] ### 用途: - 生成TikTok直播WSS连接所需的X-Bogus签名 ### 参数: - user_agent: 用户浏览器代理（可选，不填则使用默认UA） ### 返回: - x_bogus: WSS X-Bogus签名字符串 # [English] ### Purpose: - Generate X-Bogus signature required for TikTok Live WSS connection ### Parameters: - user_agent: User browser agent (optional, uses default UA if no

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_6660dd96b9ccf2a20f326ac7`

# [中文] ### 用途: - 获取指定关键词的综合搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 ### 返回: - 综合搜索结果 # [English] ### Purpose: - Get comprehensive search results of specified keywords ### Parameters: - keyword: Keyw

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_66c2d37272598bebe59925e4`

# [中文] ### 用途: - 获取用户音乐列表数据 ### 参数: - sec_uid: 用户sec_uid - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 用户音乐列表数据 # [English] ### Purpose: - Get user music list data ### Parameters: - sec_uid: User sec_uid - cursor: Cursor, used for paging, the first page is 0, the second page is t

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_670e6edaf217df4f0a11e799`

获取主页视频推荐数据/Get home feed(recommend) video data

- Risk: `write`
- Parameters: `[]`

## `mcp_675a0a5463bd9a740b0c9950`

获取用户的粉丝列表/Get user followers

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_67962d9158fc9f9c98e1d355`

# [中文] ### 用途: - 解密strData指纹数据，用于分析msToken请求中的指纹信息 ### 参数: - encrypted_data: 加密后的strData字符串，从浏览器自行抓包获取 ### 返回: - 解密后的原始指纹数据，包含浏览器指纹信息和环境信息等。 # [English] ### Purpose: - Decrypt strData fingerprint data to analyze fingerprint info in msToken request ### Parameters: - encrypted_data: Encrypted strData

- Risk: `read`
- Parameters: `[{"name":"encrypted_data","type":"string","required":true}]`

## `mcp_686c502085546aeeca589a73`

获取橱窗商品列表/Get Showcase Product List

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_6a9bb3b549f41faf102f9f8b`

获取推荐广告/Get recommended ads

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry","type":"string","required":false},{"name":"material_id","type":"string","required":true}]`

## `mcp_6df9b5fcb5fa495a2a6468de`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接（最多支持10个链接）、 ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link (Support up to 10 links) ### Return: - If the sec_user_id is s

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_6ed82941b9eedde3d1a7caaa`

# [中文] ### 用途: - 获取TikTok音乐排行榜数据 ### 参数: - scene: 排行榜类型 - 0: Top 50 (热门前50) - 1: Viral 50 (病毒式传播前50) - cursor: 分页游标，默认0 - count: 每页数量，默认50，最大50 ### 返回: - 音乐排行榜数据，包含歌曲信息、排名变化等 # [English] ### Purpose: - Get TikTok music chart list data ### Parameters: - scene: Chart type - 0: Top 50 (Popular top 50)

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"scene","type":"integer","required":false}]`

## `mcp_70e0c8107c15c11471283631`

# [中文] ### 用途: - 获取TikTok Shop商品评论 - 支持多种筛选和排序方式 - 数据结构更完整，包含更多评论详情 ### 参数: - product_id: 商品ID (必填) - page_start: 起始页码，默认1 - 当响应中 has_more=1 时，使用当前页码 +1 进行下一页请求 - sort_rule: 排序规则，默认2 - filter_type: 筛选类型 - 1: 默认不选择任何过滤 - 2: 包含图片或视频 - 3: 真实购买过滤 - filter_value: 星级筛选 - 6: 所有星级的评论(默认) - 5: 5星评价 - 4: 4星评价

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"integer","required":false},{"name":"filter_value","type":"integer","required":false},{"name":"page_start","type":"integer","required":false},{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"sort_rule","type":"integer","required":false}]`

## `mcp_7148f4b43d2d9f0c29e3bcef`

# [中文] ### 用途: - 搜索指定用户的粉丝列表，可以用于查找某个用户的粉丝中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search follower list of specified user, can be used to find whether there is a user with a specific nickname in

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_72f634a7c91422de89b9d24b`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号的健康状况信息，包括过去 90 天内的健康评分（风险等级）以及当前累计的违规积分数量。 - 关于违规积分： - 违规积分是 TikTok 用于衡量账号健康状况的重要指标。 - 违规积分越高，账号健康状况越差，可能面临限流、禁播、封禁等处罚。 - 违规积分将直接影响账号的曝光量和推荐量。 ### 累计违规积分对应的惩罚等级： | 分数范围 | 惩罚措施 | 惩罚时长 | | --------- | --------------------------------------------------------- | ---

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_73adbc21d764047f77ec58ce`

# [中文] ### 用途: - Tag详情 ### 参数: - tag_name: Tag名称 ### 返回: - Tag详情 # [English] ### Purpose: - Tag Detail ### Parameters: - tag_name: Tag name ### Return: - Tag Detail # [示例/Example] tag_name = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"tag_name","type":"string","required":true}]`

## `mcp_77ff05803f6142f8947d4d6d`

获取单个作品数据/Get single video data

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_78b875295bc1d2fbe2abf7d7`

# [中文] ### 用途: - 获取创作者搜索洞察数据，用于了解热门搜索趋势和创作灵感 ### 参数: - offset: 分页偏移量，默认0 - limit: 每页数量，默认20 - tab: 标签页类型，可选值: - all: 全部 - content_gap: 内容差距 - follower_searched: 粉丝常搜 - life_style: 生活方式 - topics: 话题 - challenges: 挑战 - sounds: 声音 - hashtags: 标签 - language_filters: 语言过滤器，多个用逗号分隔，可选值: id, de, en, es, fr

- Risk: `read`
- Parameters: `[{"name":"category_filters","type":"string","required":false},{"name":"creator_source","type":"string","required":false},{"name":"force_refresh","type":"boolean","required":false},{"name":"language_filters","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_79cc9e4699616a77a1155909`

获取直播间礼物列表/Get live room gift list

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":false}]`

## `mcp_79e85a959fc4ae9f189f0ee1`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_7af5b7870ac2d16018aa0496`

获取查询建议/Get query suggestions

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"country_code","type":"string","required":false},{"name":"query","type":"string","required":false},{"name":"scenario","type":"integer","required":false}]`
