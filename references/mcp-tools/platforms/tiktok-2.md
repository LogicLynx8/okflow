# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-2`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_7a4878d11a8f5e77efebf2b8`

# [中文] ### 用途: - 获取指定关键词的直播搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 直播搜索结果 # [English] ### Purpose: - Get live search results of specified keywords ### Parameters: - keywo

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_7bf9dc7c3a157c705a7aad87`

# [中文] ### 用途: - 获取直播间内观众的排行榜数据 ### 参数: - room_id: 直播间id - anchor_id: 主播id ### 返回: - 排行榜数据 # [English] ### Purpose: - Get ranking list of audience in live room ### Parameters: - room_id: Live room id - anchor_id: Anchor id ### Return: - Ranking list data # [示例/Example] room_id = "7358603858249009962

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":true},{"name":"room_id","type":"string","required":true}]`

## `mcp_7ddb1e069fd3ed5536b79468`

获取分享短链接/Get share short link

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_7f808964f92cdbbc4ce9cca7`

# [中文] ### 用途: - 获取TikTok创作者账号的基本信息和关键统计数据 - 查看创作者账号的成长历程和达成的重要里程碑 - 分析创作者账号发展轨迹，了解粉丝增长和内容影响力变化 ### 参数: - user_id: 创作者用户ID，必填参数，可从用户主页URL或TikTok后台获取 ### 返回内容说明: - `user_id`: 请求的创作者ID - `creator_info`: The creator's basic information - `nickname`: 创作者昵称 - `sec_user_id`: 安全用户ID - `unique_id`: 唯一用户名 -

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_806ca301d7ef14887007ef25`

# [中文] ### 用途: - 搜索照片 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_834a7cab45c28449cee37602`

# [中文] ### 用途: - 获取指定关键词的音乐搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量，从0开始，第二页从响应中获取cursor的值作为offset继续请求。 - count: 数量，不要超过20 - filter_by: 过滤类型，0-全部，1-标题，2-作者，默认为0-全部 - sort_type: 排序类型，0-相关度，1-最多使用，2-最新，3-时长最短，4-时长最长，默认为0-相关度 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 音乐搜

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"filter_by","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_83689bfb12a14a215045ba44`

# [中文] ### 用途: - 搜索指定用户的关注列表，可以用于查找某个用户的关注中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配。 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search following list of specified user, can be used to find whether there is a user with a specific nickname

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_83f204b977453a8863e770c5`

获取查询建议/Get query suggestions

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"country_code","type":"string","required":false},{"name":"query","type":"string","required":false},{"name":"scenario","type":"integer","required":false}]`

## `mcp_85bb2f34e505e24927937c9e`

# [中文] ### 用途: - 获取单个作品数据 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_870a4b03b0d7fa2113cdf44a`

# [中文] ### 用途: - 获取指定地区的热卖商品列表。 ### 参数: - region: ID/JP/MX/MY/PH/SG/TH/VN，默认 MY；US、GB、BR 暂不支持。 - count: 本次最多返回的商品数量，1 至 100，默认 20；实际数量可能少于 count。 - exclude_product_ids: 已取得的商品 ID，用英文逗号分隔，首次请求留空。 ### 返回与使用说明: - 商品位于 data.data.productList；data.data.hasMore 为 true 时可继续翻页。 - 下一批将前面所有已取得的 product_id 累积传入

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"exclude_product_ids","type":"string","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_877412cc6ec5056685dd6c48`

# [中文] ### 用途: - 生成真实msToken ### 参数: - random_strData: 是否使用随机化的浏览器指纹数据（推荐开启以提高反爬虫能力） - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 真实msToken # [English] ### Purpose:

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false},{"name":"random_strData","type":"boolean","required":false}]`

## `mcp_87cbfb815c80c179f858a44c`

获取用户的收藏列表/Get user favorites

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_893f50623c99f3b4bbbcb724`

获取支持的国家地区列表/Get supported location list

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_8aa050db5a8ac9464bce5e30`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id，优先级越高速度越快。 ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - sec_user

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_8ac89872523f2cc1ed224a3b`

获取视频受众分析数据/Get Video Audience Analysis Data

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_8fa5e2e6b60a477d27f55ee5`

获取创作者账号违规记录列表/Get Creator Account Violation Record List

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_90058b7221b2f06aafd4ec0d`

# [中文] ### 用途: - 获取探索作品数据 ### 参数: - categoryType: 作品分类 - 100: 动画与漫画 - 101: 表演 - 102: 美容护理 - 103: 游戏 - 104: 喜剧 - 105: 日常生活 - 106: 家庭 - 107: 情感关系 - 108: 戏剧 - 109: 穿搭 - 110: 对口型 - 111: 美食 - 112: 运动 - 113: 动物 - 114: 社会 - 115: 汽车 - 116: 教育 - 117: 健身和健康 - 118: 科技 - 119: 唱歌跳舞 - 120: 全部 - count: 每页数量 ### 返回

- Risk: `read`
- Parameters: `[{"name":"categoryType","type":"string","required":false},{"name":"count","type":"integer","required":false}]`

## `mcp_90f0fef862c4a2906c4538ae`

# [中文] ### 用途: - 获取创作者信息，包括创作者的基本信息、粉丝数、橱窗商品数量、带货直播间等信息。 ### 参数: - creator_uid: 创作者uid ### 返回: - 创作者信息 # [English] ### Purpose: - Get creator information, including the creator's basic information, number of fans, number of storefront products, shop live room and other information. ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"creator_uid","type":"string","required":true}]`

## `mcp_93f455c605a343f465be5e75`

# [中文] ### 用途: - 获取指定商家的商品列表。 ### 参数: - seller_id: 商家 ID，必填，需与 region 对应。 - search_params: 分页游标，首次请求留空。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 商品位于 data.data.products；data.data.has_more 表示是否可继续翻页。 - 下一页将 data.data.load_more_params.search_params 原样传回 search_params，不

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"search_params","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_9528bc3878df8f0b0b2147f5`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户信息。 - user_id: 用户uid，可选参数，纯数字，如果使用请保持sec_user_id以及unique_id为空。 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户信息，unique_id也是用户的用户名，如果使用请保持sec_user_id以及user_id为空。 - 以上参数必须至少填写一个，优先级为sec_user_id > user_id

- Risk: `read`
- Parameters: `[{"name":"sec_user_id","type":"string","required":false},{"name":"unique_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_973db0ed27e4206b626ebabe`

# [中文] ### 用途: - 获取直播每日榜单数据 ### 参数: - anchor_id: 主播id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的主播id。 - room_id: 直播间id，可以从直播间信息接口获取，使用默认值即可，该参数会影响返回的数据，你可以尝试不同直播间的id。 - rank_type: 榜单类型，参数值如下表： | type | rankName | 分组类型 | 说明 | |------|----------|----------|------| | 0 | `hourly_rank` | GIFT_RANK | 小

- Risk: `read`
- Parameters: `[{"name":"anchor_id","type":"string","required":false},{"name":"gap_interval","type":"integer","required":false},{"name":"rank_type","type":"integer","required":false},{"name":"region_type","type":"integer","required":false},{"name":"room_id","type":"string","required":false}]`

## `mcp_9749f3bc19cc128ee12984bc`

Tag作品/Tag Post

- Risk: `read`
- Parameters: `[{"name":"challengeID","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_98f944611bce603e3ce06f1d`

# [中文] ### 用途: - 获取用户音乐列表数据 ### 参数: - sec_uid: 用户sec_uid - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 用户音乐列表数据 # [English] ### Purpose: - Get user music list data ### Parameters: - sec_uid: User sec_uid - cursor: Cursor, used for paging, the first page is 0, the second page is t

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_997ee35c37b373371cb39609`

批量直播间开播状态检测/Batch live room start status check

- Risk: `read`
- Parameters: `[{"name":"room_ids","type":"string","required":true}]`

## `mcp_9bb2953e18cd9386527f75e9`

根据分享链接获取单个作品数据/Get single video data by sharing link

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_9db54b78706eb3245e193cbe`

# [中文] ### 用途: - 获取创作者搜索洞察相关视频，查询该搜索词条下比较火的相关视频 ### 参数: - keyword: 搜索关键词，从 fetch_creator_search_insights 或 fetch_creator_search_insights_trend 接口获取 - offset: 分页偏移量，默认0 - count: 每页数量，默认20 ### 返回: - 相关热门视频列表 # [English] ### Purpose: - Get creator search insights related videos, query popular related v

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_9e5d16e014b6bed9d88d486a`

# [中文] ### 用途: - 获取 TikTok Creative Center 趋势(Trends)板块的热门标签榜单 - 支持按国家/地区切换，发现不同市场的热门话题趋势 ### 参数: - time_range: 时间范围(天)，可选 7 / 30 / 90，默认7 - country_code: 国家/地区代码，默认US (可选值见 /get_location_list) - page: 页码，默认1 - limit: 每页数量，默认20 - industry_id: 一级行业ID(可选)，按行业筛选热门标签；不传则不限行业。可选值: - 10000000000: 教育 - 110

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_a416b56cd756381bcf4caaca`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "6943027371519772674"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_a4789d99fd5d82a86f779ae9`

# [中文] ### 用途: - 获取指定音乐的视频列表数据 ### 参数: - music_id: 音乐id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 音乐视频列表数据 # [English] ### Purpose: - Get video list of specified music ### Parameters: - music_id: Music id - cursor: Cursor, used for paging, the first page is 0, the second page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"music_id","type":"string","required":true}]`

## `mcp_a505746dc4f7af399b2dda90`

# [中文] ### 用途: - 获取用户的个人信息 ### 参数: - secUid: 用户secUid - uniqueId: 用户uniqueId - secUid和uniqueId至少提供一个, 优先使用uniqueId, 也就是用户主页的链接中的用户名。 ### 返回: - 用户的个人信息 # [English] ### Purpose: - Get user profile ### Parameters: - secUid: User secUid - uniqueId: User uniqueId - At least one of secUid and uniqueId is

- Risk: `read`
- Parameters: `[{"name":"secUid","type":"string","required":false},{"name":"uniqueId","type":"string","required":false}]`

## `mcp_a5b6a4f9535b2f650c9bec70`

获取同款商品关联视频/Get Product Related Videos

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_a8536fcb8755915b6007d34e`

# [中文] ### 用途: - 获取作品的评论回复列表 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论回复列表 # [English] ### Purpose: - Get video comment replies ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Page cursor - count: Numbe

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_a8ce55003d9be14f14619af5`

# [中文] ### 用途: - 从 TikTok Shop 分享链接获取店铺 ID 和对应链接。 ### 参数: - share_link: 分享链接，必填。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - data.shop_id 是字符串；data.shop_link 为对应链接。 - 若返回 resolved=false，请核对分享链接。 ### 返回数据结构: - 以下为主要字段示意，省略通用响应字段和部分可选字段；具体字段以实际响应为准。 ```json { "code": 200,

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"share_link","type":"string","required":true}]`

## `mcp_a9cf488f9152c5f079fdb598`

# [中文] ### 用途: - 生成TikTok Web的哈希ID ### 参数: - email: 邮箱地址 ### 返回: - 生成的哈希ID字符串 # [English] ### Purpose: - Generate hashed ID for TikTok Web ### Parameters: - email: Email address ### Return: - Generated hashed ID string # [示例/Example] email = "test@example.com"

- Risk: `read`
- Parameters: `[{"name":"email","type":"string","required":true}]`

## `mcp_af832142495e66db612d8347`

# [中文] ### 用途: - 获取指定地区的商品分类树。 ### 参数: - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 响应 data 是分类节点数组，不是无包装的顶层数组。 - 每个节点包含 self（分类信息）和 children（子分类数组）；叶节点的 children 为空。 - self.category_id 是字符串；分类数量与层级因地区而异。 ### 返回数据结构: - 以下为主要字段示意，省略通用响应字段和部分可选字段；具体字段以实际响应为准。 ```json { "co

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false}]`

## `mcp_afa2644f04755e78141ce5d0`

# [中文] ### 用途: - 获取美国地区商家的商品列表。 ### 参数: - seller_id: 美国地区商家 ID，必填。 - searchParams: 分页游标，首次请求留空。 - region: 仅支持 US，默认 US。 ### 返回与使用说明: - 商品项位于 data.data.component_data.products；每一项的 product 对象包含 product_id、title 等商品字段。 - 分页状态位于 component_data.has_more；为 true 时，将 component_data.next_search_param 原样传回 s

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"searchParams","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_b12479513e225cf03c03869b`

# [中文] ### 用途: - 获取每日趋势搜索关键词 ### 返回: - 趋势搜索关键词 # [English] ### Purpose: - Get daily trending search words ### Return: - Trending search words # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_b16e9a1b6f41d6a03734d6e5`

获取单个广告详情/Get single ad detail

- Risk: `write`
- Parameters: `[{"name":"ads_id","type":"string","required":true}]`

## `mcp_b3417f0c06f6af48ef1bd719`

# [中文] ### 用途: - Tag详情 ### 参数: - tag_name: Tag名称 ### 返回: - Tag详情 # [English] ### Purpose: - Tag Detail ### Parameters: - tag_name: Tag name ### Return: - Tag Detail # [示例/Example] tag_name = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"tag_name","type":"string","required":true}]`

## `mcp_b3843874881196076523f5d4`

# [中文] ### 用途: - 生成 XGnarly 加密，用于 TikTok Web API 请求 - 此接口使用最新版本（V5.2.0，截至2026年3月）的签名服务，不可自定义 User-Agent，会自动生成一个常见浏览器的 User-Agent - 此接口为完美还原算法，无视除验证码外的一切风控 ### 参数: - url (str): 不携带签名（X-Bogus 或 X-Gnarly）并且包含域名的请求URL，不需要进行URL编码 - body (str): 请求的API参数，适用于POST请求，如果是GET请求则不需要提供 ### 返回: - X-Gnarly 加密字符串 +

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_b50bca49d9bd4d34e4a6066f`

获取主页视频推荐数据/Get home feed(recommend) video data

- Risk: `write`
- Parameters: `[]`

## `mcp_b7f6a929f931e05b2f28614a`

批量检测直播间是否在线/Batch check if live rooms are online

- Risk: `write`
- Parameters: `[{"name":"room_ids","type":"array","required":false}]`

## `mcp_b9d719d11dd2ed419b4fb537`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_bb84f30eeca27077611c3ec2`

# [中文] ### 用途: - 获取用户的作品列表 ### 参数: - secUid: 用户secUid - cursor: 翻页游标，首次请求传0，后续传上一次响应返回的 `cursor` 值 - count: 每页数量，默认为15，最大为15，超过15将按15处理。 - coverFormat: 封面格式，默认为2，可选值为1或2。 - post_item_list_request_type: 排序方式，已废弃，传任何值均返回按时间从新到旧的作品列表。 ### 返回: - 用户的作品列表，作品按发布时间从新到旧排列 - `cursor`: 下一页游标，配合 `hasMore` 使用 -

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_bcda6f18c7ad24ccf1518ea6`

根据TikTok的Gift ID查询对应的礼物名称 | Get gift name by TikTok gift ID

- Risk: `write`
- Parameters: `[{"name":"gift_id","type":"string","required":true}]`

## `mcp_bd6e1072060f2c0b64b1e7cf`

# [中文] ### 用途: - 获取指定用户的粉丝列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_bff597abe6f41136b03dadf7`

# [中文] ### 用途: - 使用用户名获取用户 user_id 和 sec_user_id ### 参数: - username: 用户名 ### 返回: - 用户 user_id 和 sec_user_id # [English] ### Purpose: - Get user_id and sec_user_id by Username ### Parameters: - username: Username ### Return: - User user_id and sec_user_id # [示例/Example] username = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_c081ea7b78cf2f1dd63b14cc`

获取直播间商品列表数据 V2 /Get live room product list data V2

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_c26650f2e800d5b8e3b7056c`

# [中文] ### 用途: - 获取作品的评论列表 ### 参数: - aweme_id: 作品id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论列表 # [English] ### Purpose: - Get video comments ### Parameters: - aweme_id: Video id - cursor: Page cursor - count: Number per page - current_region: Current region, default

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_c306c8da2d808afbdc7e7002`

通过用户名获取用户账号国家地区/Get user account country by username

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_c3b0db7cf9e36669cb62b26a`

生成 XGnarly 和 XBogus /Generate XGnarly and XBogus

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_c506fdd2483102e65e097fa7`

# [中文] ### 用途: - 获取广告在同行业中的百分位排名数据 - 了解广告在各项指标上相对于同行的表现水平 - 帮助评估广告效果并制定优化策略 ### 参数: - material_id: 广告素材ID，必填参数 - metric: 分析指标，可选值： - ctr_percentile: 点击率百分位（默认） - time_attr_conversion_rate_percentile: 时间归因转化率百分位 - click_cnt_percentile: 点击次数百分位 - time_attr_convert_cnt_percentile: 时间归因转化次数百分位 - show_cn

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`

## `mcp_c508b2846a19e09d19318884`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内发布的视频列表及其详细数据表现。 - 支持分页查询，每页返回指定时间段内的视频及其播放、成交等详细数据。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 查询时间范围（起止时间戳、时区、语言等） - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（通常按发布时间降序） - `next_pagination`: 翻页信息（是否有更多页，当前页，总页数，总记录数） -

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"rules","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_c50936193885a89545cbca5e`

获取单个作品数据 V2/Get single video data V2

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_c78f7d9e1701e7710aaf52f4`

# [中文] ### 用途: - 直播间开播状态检测 - 如果当前直播间不存在或已下播，则返回空。 ### 参数: - room_id: 直播间ID ### 返回: - 直播间开播状态 # [English] ### Purpose: - Live room start status check - If the current live room does not exist or has ended, it will return empty. ### Parameters: - room_id: Live room ID ### Return: - Live room start sta

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_c8e59231964248df244ac620`

获取创作者账号概览/Get Creator Account Overview

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_cba4870070a831bad2409469`

搜索直播/Search live

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_ccf03c14a2a56493f4680ea7`

获取用户的播放列表/Get user play list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_cff354b5b04a64d33f269dbb`

# [中文] ### 用途: - 生成 X-Mssdk-Info 和 X-Mssdk-RC，用于 TikTok Web 设备注册、登录等场景 ### 参数: - user_agent (str, 可选): 用户代理字符串，目前不支持自定义，默认为固定的值 ### 返回: - X-Mssdk-Info: 生成的签名信息 - X-Mssdk-RC: 生成的 RC 值 - user_agent: 使用的用户代理字符串 - version: 签名使用的 webmssdk 版本 # [English] ### Purpose: - Generate X-Mssdk-Info and X-Mssdk-RC

- Risk: `write`
- Parameters: `[{"name":"user_agent","type":"any","required":false}]`

## `mcp_d0dee8f2974e554c1dc56b27`

# [中文] 获取热门广告搜索支持的国家、行业、广告目标、语言、周期和创意标签选项。 # [English] Get the countries, industries, objectives, languages, periods, and creative labels supported by Top Ads search.

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_d0ff89a555f1675f4ddc248d`

# [中文] ### 用途: - 获取分享二维码 ### 参数: - object_id: 对象id，当前支持个人主页接口响应中的uid作为参数。 ### 返回: - 二维码图片 # [English] ### Purpose: - Get share QR code ### Parameters: - object_id: Object id, currently supports the uid in the response of the personal homepage interface as a parameter. ### Return: - QR code image # [

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"schema_type","type":"integer","required":false}]`

## `mcp_d1e03bc62ed8dce37acbf594`

生成web_id/Generate web_id

- Risk: `read`
- Parameters: `[{"name":"app_id","type":"integer","required":false},{"name":"referer","type":"string","required":false},{"name":"url","type":"string","required":false},{"name":"user_agent","type":"string","required":false},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_d303ff929a7a36a73145a0e6`

# [中文] ### 用途: - 获取地点搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 地点搜索结果 # [English] ### Purpose: - Get location search results ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Location search results # [示例/Example] keyword = "Shanghai" offset = 0

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_d6943b4da8dd98f41ca450df`

检测直播间是否在线/Check if live room is online

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_dd857badfa77c7560ee3ed15`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，给指定用户发送私信。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and send private messages to specified users ### Parameters: - uid: User id, obtained from the user

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_de22f3f4f470578c10aa83a6`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定用户主页。 ### 参数: - uid: 用户id，从用户主页接口中获取。 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified user profile ### Parameters: - uid: User id, obtained from the user profil

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_dea8ba6cba5dfba590f81287`

获取视频与商品关联统计数据/Get Video-Product Association Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_e039e48487e603640fce6b39`

# [中文] ### 用途: - 获取直播间首页推荐列表 ### 参数: - related_live_tag: 相关直播标签(直播分类)。该参数的可选值不固定，请先调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签列表，再从中选取传入。 ### 返回: - 直播间首页推荐列表 ### 备注: - 不清楚 `related_live_tag` 可以传哪些值时，请调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签(分类 Tab)列表。 - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，

- Risk: `read`
- Parameters: `[{"name":"related_live_tag","type":"string","required":true}]`

## `mcp_e44f2e4b9568b647b77187bf`

# [中文] ### 用途: - 获取创作者搜索洞察数据，用于了解热门搜索趋势和创作灵感 ### 参数: - offset: 分页偏移量，默认0 - limit: 每页数量，默认20 - tab: 标签页类型，可选值: - all: 全部 - content_gap: 内容差距 - follower_searched: 粉丝常搜 - life_style: 生活方式 - topics: 话题 - challenges: 挑战 - sounds: 声音 - hashtags: 标签 - language_filters: 语言过滤器，多个用逗号分隔，可选值: id, de, en, es, fr

- Risk: `read`
- Parameters: `[{"name":"category_filters","type":"string","required":false},{"name":"creator_source","type":"string","required":false},{"name":"force_refresh","type":"boolean","required":false},{"name":"language_filters","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_e58433bd7464d5cdde19f541`

# [中文] ### 用途: - 获取指定关键词的视频搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 - region: 地区，默认为US-美国，可选值请参考TikTok地区代码或ISO 3166-1 alpha-2国家代码。 ### 返回: - 视频搜索结果 # [English] ### Purpose: - Get video search result

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_e775addb70d25be10dc6f63f`

# [中文] ### 用途: - 获取商品评论，支持分页、排序和筛选。 ### 参数: - product_id: 商品 ID，必填。 - page_start: 页码，默认 1。 - sort_rule: 1=推荐，2=最近，默认 2。 - filter_type: 1=全部，2=含图片或视频，3=真实购买，默认 1。 - filter_value: filter_type=1 时，6=全部星级、1 至 5=对应星级；filter_type=2 或 3 时传 1。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"integer","required":false},{"name":"filter_value","type":"integer","required":false},{"name":"page_start","type":"integer","required":false},{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"sort_rule","type":"integer","required":false}]`

## `mcp_e879d0a866296b51256f7fcc`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_ea40e5b9504ce5f7ab8d6182`

# [中文] ### 用途: - 获取内容翻译数据 ### 参数: - trg_lang: 目标语言 - zh-Hans: 简体中文 - zh-Hant: 繁体中文 - en: 英语 - ja: 日语 - ko: 韩语 - fr: 法语 - de: 德语 - ru: 俄语 - es: 西班牙语 - pt: 葡萄牙语 - vi: 越南语 - th: 泰语 - id: 印尼语 - ar: 阿拉伯语 - it: 意大利语 - tr: 土耳其语 - he: 希伯来语 - pl: 波兰语 - nl: 荷兰语 - sv: 瑞典语 - da: 丹麦语 - fi: 芬兰语 - no: 挪威语 - cs: 捷克

- Risk: `write`
- Parameters: `[{"name":"src_content","type":"string","required":false},{"name":"trg_lang","type":"string","required":false}]`

## `mcp_eee86501d0f844e5475ec1dd`

# [中文] ### 用途: - 生成TikTok直播WSS连接所需的X-Bogus签名 ### 参数: - user_agent: 用户浏览器代理（可选，不填则使用默认UA） ### 返回: - x_bogus: WSS X-Bogus签名字符串 # [English] ### Purpose: - Generate X-Bogus signature required for TikTok Live WSS connection ### Parameters: - user_agent: User browser agent (optional, uses default UA if no

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_f10f41d04e9ff8f6236750ee`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的直播表现数据概览。 - 默认统计从 `start_date` 当月起 1 个自然月（如传入 2025-04-01，则统计整个 4 月的数据）。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者 ID - `timed_stats`: 每个时间段（通常按日或月分段）的直播表现数据，包含： - `live_revenue.amount`: 直播带货收入

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_f14df05cb09e4de9d54f7dc5`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内的视频表现概览。 - 默认统计从调用当天向前 30 天的数据（或按平台设定的自然月分段）。 - 适合用于视频表现分析，例如视频数量、播放量、粉丝增长、成交数据等。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 时间范围设置信息（周期、起止时间戳、时区、语言） - `filter.creator_id`: 创作者账号 ID - `timed_stats`: 每个时间段的视频表现数据，包含： - `vv_cnt`: 视频播放量（Video Views

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_f6504bcfd1d583904662a9a9`

获取创作者账号信息/Get Creator Account Info

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_f6cbffc4ff6bfbcdcda09b97`

# [中文] ### 用途: - 分析视频评论中出现的热门关键词和话题，挖掘用户反馈 - 提取观众评论中的主要内容和观点，帮助理解受众关注点 - 支持创作者优化内容策略，增强与观众的互动和连接 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `key_words`: 评论中提取的关键词列表，包含以下字段: - `key_word`: 关键词文本 - `comments`: 包含该关键词的评论列表，每条评论包含: - `cid`: 评论ID - `text`: 评

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_f76cf3d48c40a222084f3ca2`

# [中文] ### 用途: - 获取创作者搜索洞察趋势数据，包含地区和时间维度的搜索热度 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - from_tab_path: 来源标签路径，默认 "TRENDING,TOPICS" - query_analysis_required: 是否需要查询分析，默认 True ### 返回: - 搜索趋势数据，包含地区热度、时间趋势等 # [English] ### Purpose: - Get creator search insights trend

- Risk: `read`
- Parameters: `[{"name":"from_tab_path","type":"string","required":false},{"name":"query_analysis_required","type":"boolean","required":false},{"name":"query_id_str","type":"string","required":true}]`

## `mcp_fb1c436bb746f1eb41162403`

# [中文] ### 用途: - 获取指定用户的关注列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`
