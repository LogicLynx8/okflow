# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 80

## `mcp_038ffb9c5d76e1a67b48d61f`

批量直播间开播状态检测/Batch live room start status check

- Risk: `read`
- Parameters: `[{"name":"room_ids","type":"string","required":true}]`

## `mcp_039d24e023a238678c43403f`

# [中文] ### 用途: - 获取作品的评论回复列表 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论回复列表 # [English] ### Purpose: - Get video comment replies ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Page cursor - count: Numbe

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_04a27f50e7d3917a8997b3b8`

# [中文] ### 用途: - 获取用户的作品列表 ### 参数: - secUid: 用户secUid - cursor: 翻页游标，首次请求传0，后续传上一次响应返回的 `cursor` 值 - count: 每页数量，默认为15，最大为15，超过15将按15处理。 - coverFormat: 封面格式，默认为2，可选值为1或2。 - post_item_list_request_type: 排序方式，已废弃，传任何值均返回按时间从新到旧的作品列表。 ### 返回: - 用户的作品列表，作品按发布时间从新到旧排列 - `cursor`: 下一页游标，配合 `hasMore` 使用 - 

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_05091e3a4e2707be4f8b88b6`

获取搜索板块配置/Get search modules config

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_0550fa55636f79a60d7b475e`

获取用户的直播详情/Get user live details

- Risk: `read`
- Parameters: `[{"name":"uniqueId","type":"string","required":true}]`

## `mcp_0894800761e0690b495067fa`

# [中文] ### 用途: - TikTok直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID（可选） - resp_content_type: 响应格式，protobuf（默认）或 json ### 返回: - 弹幕参数数据 # [English] ### Purpose: - TikTok live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID (optional) - res

- Risk: `read`
- Parameters: `[{"name":"resp_content_type","type":"string","required":false},{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_09313165779ef739c893cc44`

# [中文] ### 用途: - 获取每日趋势搜索关键词 ### 返回: - 趋势搜索关键词 # [English] ### Purpose: - Get daily trending search words ### Return: - Trending search words # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_0ad33ef7a7231feb6e013f2e`

# [中文] ### 用途: - 获取用户转发的作品数据 ### 参数: - user_id: 用户id，可以通过 handler_user_profile 端点获取，响应中的关键字为uid。 - offset: 偏移量 - count: 数量 ### 返回: - 用户转发作品数据 # [English] ### Purpose: - Get user repost video data ### Parameters: - user_id: User id, which can be obtained through the handler_user_profile endpoint, wit

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"user_id","type":"integer","required":true}]`

## `mcp_0b56c3d40e430a0e93bebdd0`

获取主页视频推荐数据/Get home feed(recommend) video data

- Risk: `write`
- Parameters: `[]`

## `mcp_0d26cfcc7c828c9b78b75bbc`

获取同款商品关联视频/Get Product Related Videos

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_0d3f724d645535d51dd2f95a`

# [中文] ### 用途: - 根据商品分类ID获取该分类下的商品列表 - 可用于构建分类浏览功能 ### 参数: - category_id: 分类ID (必填，从fetch_products_category_list接口获取) - offset: 翻页偏移量 (默认0) - 每页默认20个商品，每次请求增加20，当响应中的 `hasMore` 为true时可继续请求下一页，否则已到最后一页。 - 例如: 第1页offset=0，第2页offset=20，第3页offset=40，以此类推。 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_0e16ac12702ac4d536bae4ee`

# [中文] ### 用途: - 根据视频ID来增加作品的播放数 ### 参数: - aweme_type: 作品类型，0:视频 1:图文，可以从单一作品数据接口中获取。 - item_id: 作品id，别名为aweme_id - invite_code: 邀请码，此接口需要邀请码才能使用。 ### 返回: - 当前时间戳和状态码，状态码为200时表示成功，否则为失败，可以尝试更换一个作品id再次调用，或者等待一段时间后再次调用。 # [English] ### Purpose: - Increase the number of plays of the work according to t

- Risk: `read`
- Parameters: `[{"name":"aweme_type","type":"integer","required":true},{"name":"item_id","type":"string","required":true}]`

## `mcp_1009c6573a3ff387005e3478`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内发布的视频列表及其详细数据表现。 - 支持分页查询，每页返回指定时间段内的视频及其播放、成交等详细数据。 ### 返回内容说明: - `segments`（分段数据列表）: - `time_selector`: 查询时间范围（起止时间戳、时区、语言等） - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（通常按发布时间降序） - `next_pagination`: 翻页信息（是否有更多页，当前页，总页数，总记录数） - 

- Risk: `write`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"rules","type":"string","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_10e6f77ba0f66757414601c7`

# [中文] ### 用途: - 获取TikTok Shop商品详情 - 提供最完整的商品信息，包括推荐商品、相关视频、店铺信息等 - 适用于所有地区的商品 ### 参数: - product_id: 商品ID (必填) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - **请务必确保 `product_id` 对应的 `region` 是正确的，否则接口将不会返回数据。** - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_12e617c6db0cee4be510a099`

# [中文] ### 用途: - 获取创作者搜索洞察详情数据，用于查询特定搜索词条的搜索统计数据 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - time_range: 时间范围，可选值: - past_7_days: 过去7天 - past_30_days: 过去30天（默认） - past_60_days: 过去60天 - past_6_months: 过去6个月 - custom: 自定义时间（需配合 start_date 和 end_date 使用，不能超过6个月） - start_

- Risk: `read`
- Parameters: `[{"name":"dimension_list","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"query_id_str","type":"string","required":true},{"name":"start_date","type":"integer","required":false},{"name":"time_range","type":"string","required":false}]`

## `mcp_14526e71164979b3de4903ff`

获取用户的合辑列表/Get user mix list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mixId","type":"string","required":true}]`

## `mcp_14c98c56a98e7d6e407fa6e5`

# [中文] ### 用途: - 获取单个作品数据 V3 ### 参数: - aweme_id: 作品id - region: 国家代码，默认US，支持ISO 3166-1 alpha-2国家代码，例如：US、GB、FR、DE、IN、JP等。 - 备注：某些视频可能在特定国家/地区不可用，设置region参数可以尝试获取该国家/地区的视频数据。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V3 ### Parameters: - aweme_id: Video id - region: Country code

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_15a14a9186926dce929ae750`

# [中文] ### 用途: - 搜索关键字推荐 ### 参数: - keyword: 搜索关键词 ### 返回: - 关键字推荐列表 # [English] ### Purpose: - Search keyword suggest ### Parameters: - keyword: Search keyword ### Return: - Keyword suggest list # [示例/Example] keyword = "TikTok"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_161f7d7bb557e05a8fe479e6`

提取直播间弹幕/Extract live room danmaku

- Risk: `read`
- Parameters: `[{"name":"danmaku_type","type":"string","required":true},{"name":"live_room_url","type":"string","required":true}]`

## `mcp_17bfafa1f218751929680e85`

# [中文] ### 用途: - 获取TikTok视频的详细统计数据，包括观看量、点赞数、评论数和收藏数等核心指标 - 提供总量统计以及从发布日期起14天的每日趋势数据，便于分析视频表现 - 帮助创作者分析内容效果，评估用户互动情况，优化内容策略 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `video_views`: 视频总观看次数 - `value`: 观看次数数值 - `video_views_14_days`: 近14天的每日观看量趋势数据 - `i

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_18b8c160849f8612f2349864`

生成 XBogus/Generate XBogus

- Risk: `write`
- Parameters: `[{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_19ae6536e3da9f00f6c93366`

# [中文] ### 用途: - 获取指定关键词的话题搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 话题搜索结果 # [English] ### Purpose: - Get hashtag search results of specified keywords ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Hashtag search results # [示例/Example] keywor

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_1ac3e86aedf395857dce5990`

# [中文] ### 用途: - 获取指定直播间的数据 ### 参数: - room_id: 直播间id ### 返回: - 直播间数据 # [English] ### Purpose: - Get data of specified live room ### Parameters: - room_id: Live room id ### Return: - Live room data # [示例/Example] room_id = "7385461256746060575"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_1b9bee09b4db62e28378f050`

获取用户unique_id/Get user unique_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_1c25eb36f2bf1aa9e0ea5666`

# [中文] ### 用途: - 获取直播间首页推荐的可用标签(直播分类 Tab)列表 - 用于配合 `/fetch_live_recommend` 接口，获取其 `related_live_tag` 参数的可选值 ### 参数: - logid: 翻页游标。首页请求时留空；加载下一页时，传入上一次响应返回的 `logid` 值 ### 返回: - 可用标签(直播分类 Tab)列表 - logid: 本次请求的日志ID(来自响应头 `x-tt-logid`)，翻页加载更多时需把它再次作为 `logid` 参数传入 ### 备注: - `related_live_tag` 的可选值并不固定，会随

- Risk: `read`
- Parameters: `[{"name":"logid","type":"string","required":false}]`

## `mcp_1ea24479d78009435bf88f74`

获取用户的关注列表/Get user followings

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_1fba45ec598412cf2f106645`

# [中文] ### 用途: - 获取探索作品数据 ### 参数: - categoryType: 作品分类 - 100: 动画与漫画 - 101: 表演 - 102: 美容护理 - 103: 游戏 - 104: 喜剧 - 105: 日常生活 - 106: 家庭 - 107: 情感关系 - 108: 戏剧 - 109: 穿搭 - 110: 对口型 - 111: 美食 - 112: 运动 - 113: 动物 - 114: 社会 - 115: 汽车 - 116: 教育 - 117: 健身和健康 - 118: 科技 - 119: 唱歌跳舞 - 120: 全部 - count: 每页数量 ### 返回

- Risk: `read`
- Parameters: `[{"name":"categoryType","type":"string","required":false},{"name":"count","type":"integer","required":false}]`

## `mcp_2208001d343133a5fd936a0b`

获取用户的转发作品列表/Get user reposts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_22edccfbde799943e5a59ff4`

根据TikTok的Gift ID查询对应的礼物名称 | Get gift name by TikTok gift ID

- Risk: `write`
- Parameters: `[{"name":"gift_id","type":"string","required":true}]`

## `mcp_256706c29ca86f61cd62764b`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":true}]`

## `mcp_263bc1f47e788eda0e76ec32`

# [中文] ### 用途: - 搜索商品(移动端接口) - 数据结构更精简，响应更快 ### 参数: - search_word: 搜索关键词 (必填) - offset: 偏移量 (默认0) - page_token: 分页标记 - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [...], // 商品列表 "has_more": true, // 是否有更多 "load_more_params": {} 

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_279f1d8af0cb3308a2e47f0a`

Tag作品/Tag Post

- Risk: `read`
- Parameters: `[{"name":"challengeID","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_27a2658371d42438c2447ff6`

# [中文] ### 用途: - 搜索照片 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_29a58e0defb6ec783ee34d7f`

# [中文] ### 用途: - 获取单个作品数据 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_29eb27fc89bbba071f703936`

# [中文] ### 用途: - 获取地点搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 地点搜索结果 # [English] ### Purpose: - Get location search results ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Location search results # [示例/Example] keyword = "Shanghai" offset = 0 

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_2a14c3b2e3772063ea2d552f`

获取单个作品数据 V2/Get single video data V2

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_2a69b831e097a8bbae00e601`

# [中文] ### 用途: - 获取创作者搜索洞察数据，用于了解热门搜索趋势和创作灵感 ### 参数: - offset: 分页偏移量，默认0 - limit: 每页数量，默认20 - tab: 标签页类型，可选值: - all: 全部 - content_gap: 内容差距 - follower_searched: 粉丝常搜 - life_style: 生活方式 - topics: 话题 - challenges: 挑战 - sounds: 声音 - hashtags: 标签 - language_filters: 语言过滤器，多个用逗号分隔，可选值: id, de, en, es, fr

- Risk: `read`
- Parameters: `[{"name":"category_filters","type":"string","required":false},{"name":"creator_source","type":"string","required":false},{"name":"force_refresh","type":"boolean","required":false},{"name":"language_filters","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"tab","type":"string","required":false}]`

## `mcp_2ad2c09d3d4a3de2d29dbf03`

# [中文] ### 用途: - 获取单个作品数据 V2 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2 ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_2ae4b49fd8443cc2c7e58d7f`

搜索直播/Search live

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_2bb518df2fc6341658e33ae8`

# [中文] ### 用途: - 获取用户音乐列表数据 ### 参数: - sec_uid: 用户sec_uid - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 用户音乐列表数据 # [English] ### Purpose: - Get user music list data ### Parameters: - sec_uid: User sec_uid - cursor: Cursor, used for paging, the first page is 0, the second page is t

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"sec_uid","type":"string","required":true}]`

## `mcp_2ccc830cff2a2aeb1f5c1222`

# [中文] ### 用途: - 获取作品的评论列表 ### 参数: - aweme_id: 作品id - cursor: 翻页游标 - count: 每页数量 - current_region: 当前地区，默认为空。 ### 返回: - 作品的评论列表 # [English] ### Purpose: - Get video comments ### Parameters: - aweme_id: Video id - cursor: Page cursor - count: Number per page - current_region: Current region, default 

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"current_region","type":"string","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_324476a78f7903e2fb00c994`

# [中文] ### 用途: - 生成真实msToken ### 参数: - random_strData: 是否使用随机化的浏览器指纹数据（推荐开启以提高反爬虫能力） - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 真实msToken # [English] ### Purpose:

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false},{"name":"random_strData","type":"boolean","required":false}]`

## `mcp_330a750941fcdc9862bc355a`

# [中文] ### 用途: - 获取指定音乐的详情数据 ### 参数: - music_id: 音乐id ### 返回: - 音乐详情数据 # [English] ### Purpose: - Get details of specified music ### Parameters: - music_id: Music id ### Return: - Music details data # [示例/Example] music_id = "6943027371519772674"

- Risk: `read`
- Parameters: `[{"name":"music_id","type":"string","required":true}]`

## `mcp_33939b66e351faf21531b838`

检测视频虚假流量分析/Detect fake views in video

- Risk: `read`
- Parameters: `[{"name":"content_category","type":"string","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_352fe27dc2384c816a81e4a8`

# [中文] ### 用途: - 获取TikTok Shop的商品分类目录 - 返回完整的分类树结构 ### 参数: - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 返回数据结构: ```json [ { "self": { // 分类自身信息 "category_id": "xxx", "category_level": 1, "is_leaf": false, "parent_category_id": "0", "category_name": "分类名称", "category_name_en": "Category Name", "image

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false}]`

## `mcp_35fc056224fdbadbd4fb3a53`

# [中文] ### 用途: - 生成 XGnarly 加密，用于 TikTok Web API 请求 - 此接口使用最新版本（V5.2.0，截至2026年3月）的签名服务，不可自定义 User-Agent，会自动生成一个常见浏览器的 User-Agent - 此接口为完美还原算法，无视除验证码外的一切风控 ### 参数: - url (str): 不携带签名（X-Bogus 或 X-Gnarly）并且包含域名的请求URL，不需要进行URL编码 - body (str): 请求的API参数，适用于POST请求，如果是GET请求则不需要提供 ### 返回: - X-Gnarly 加密字符串 + 

- Risk: `write`
- Parameters: `[{"name":"body","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_36f881314be892ccdec55edb`

批量获取视频信息 V2/Batch Get Video Information V2

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_375ef01dce329a506f36fb31`

获取视频与商品关联统计数据/Get Video-Product Association Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"product_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_385fc2f9d72db652f7a039b0`

获取视频受众分析数据/Get Video Audience Analysis Data

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_3a655d4eed7a72d03604d582`

# [中文] ### 用途: - 获取搜索关键词建议(移动端接口) - 专为电商搜索结果优化 ### 参数: - search_word: 搜索关键词 (必填) - lang: 语言代码 (en-US/zh-CN等) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "", "data": [ // 建议列表(最多50个) "关键词1", "关键词2",

- Risk: `read`
- Parameters: `[{"name":"lang","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_3b16f8048c9790382b12db38`

# [中文] ### 用途: - TikTok APP加密算法，用于生成请求头中的加密参数。 - 生成的加密参数列表： - `x-ladon` - `x-khronos` - `x-argus` - `x-gorgon` （8404） ### 参数: - url: 需要加密的完整URL - data: 如果接口是POST请求，请填写POST请求的数据参与加密计算，GET请求时传入空字符串即可。 - device_info: 设备信息，可选参数，如果不填写则使用默认设备信息，设备信息会修改传入的URL中的参数。 ### 返回: - 加密参数列表 # [English] ### Purpose: 

- Risk: `write`
- Parameters: `[{"name":"data","type":"string","required":false},{"name":"device_info","type":"object","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_3b817e45e1b4924f1b86c471`

# [中文] ### 用途: - 搜索视频 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_3cb3ff53325a13ec5bbda550`

# [中文] ### 用途: - 使用用户名获取用户 user_id 和 sec_user_id ### 参数: - username: 用户名 ### 返回: - 用户 user_id 和 sec_user_id # [English] ### Purpose: - Get user_id and sec_user_id by Username ### Parameters: - username: Username ### Return: - User user_id and sec_user_id # [示例/Example] username = "tiktok"

- Risk: `read`
- Parameters: `[{"name":"username","type":"string","required":true}]`

## `mcp_3d898074034d1998e5a6420b`

# [中文] ### 用途: - 生成TikTok直播WSS连接所需的X-Bogus签名 ### 参数: - user_agent: 用户浏览器代理（可选，不填则使用默认UA） ### 返回: - x_bogus: WSS X-Bogus签名字符串 # [English] ### Purpose: - Generate X-Bogus signature required for TikTok Live WSS connection ### Parameters: - user_agent: User browser agent (optional, uses default UA if no

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_40728b42fe3289ae703a40e3`

加密或解密 TikTok APP 登录请求体/Encrypt or Decrypt TikTok APP login request body

- Risk: `write`
- Parameters: `[{"name":"mode","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_4220a59032e867903f7a151f`

获取单个广告详情/Get single ad detail

- Risk: `write`
- Parameters: `[{"name":"ads_id","type":"string","required":true}]`

## `mcp_49440af7c3d33e992892a3ab`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor, use

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_4b8cc20d42099be1c8f4d7eb`

# [中文] ### 用途: - 获取TikTok Shop商品评论 - 支持自定义每页数量、多种筛选和排序方式 ### 参数: - product_id: 商品ID (必填) - page_start: 起始页码，默认1 - 当响应中 has_more=1 时，使用当前页码 +1 进行下一页请求 - page_size: 每页评论数量，默认10 - sort_rule: 排序规则，默认1 - filter_type: 筛选类型 - 1: 默认不选择任何过滤 - 2: 包含图片或视频 - 3: 真实购买过滤 - filter_value: 星级筛选 - 6: 所有星级的评论(默认) - 5: 

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"integer","required":false},{"name":"filter_value","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"page_start","type":"integer","required":false},{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"sort_rule","type":"integer","required":false}]`

## `mcp_4c16429fef4a0abca6e54044`

获取橱窗商品列表/Get Showcase Product List

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_4c5b244c72fcf2a71591e161`

# [中文] ### 用途: - 分析视频评论中出现的热门关键词和话题，挖掘用户反馈 - 提取观众评论中的主要内容和观点，帮助理解受众关注点 - 支持创作者优化内容策略，增强与观众的互动和连接 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `key_words`: 评论中提取的关键词列表，包含以下字段: - `key_word`: 关键词文本 - `comments`: 包含该关键词的评论列表，每条评论包含: - `cid`: 评论ID - `text`: 评

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_4d2f0736f1fe2d166cf31253`

# [中文] ### 用途: - 获取创作者搜索洞察趋势数据，包含地区和时间维度的搜索热度 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - from_tab_path: 来源标签路径，默认 "TRENDING,TOPICS" - query_analysis_required: 是否需要查询分析，默认 True ### 返回: - 搜索趋势数据，包含地区热度、时间趋势等 # [English] ### Purpose: - Get creator search insights trend 

- Risk: `read`
- Parameters: `[{"name":"from_tab_path","type":"string","required":false},{"name":"query_analysis_required","type":"boolean","required":false},{"name":"query_id_str","type":"string","required":true}]`

## `mcp_4dcc20fcfb2a9b46af5b5a1e`

# [中文] ### 用途: - 搜索指定用户的粉丝列表，可以用于查找某个用户的粉丝中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search follower list of specified user, can be used to find whether there is a user with a specific nickname in

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_4f40080fca61fc67a3869652`

# [中文] ### 用途: - 获取指定用户的粉丝列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_5089e641de636f89e3bb8391`

# [中文] ### 用途: - 搜索指定用户的关注列表，可以用于查找某个用户的关注中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配。 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search following list of specified user, can be used to find whether there is a user with a specific nickname 

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_518fa1f65b2c3dabd24cea42`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified video ### Parameters: - aweme_id: Video id - Note: If you cannot jump, please ma

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_55f3c4c60b9a7145051ea270`

# [中文] ### 用途: - 获取 TikTok Creative Center 趋势(Trends)板块的热门标签榜单 - 支持按国家/地区切换，发现不同市场的热门话题趋势 ### 参数: - time_range: 时间范围(天)，可选 7 / 30 / 90，默认7 - country_code: 国家/地区代码，默认US (可选值见 /get_location_list) - page: 页码，默认1 - limit: 每页数量，默认20 - industry_id: 一级行业ID(可选)，按行业筛选热门标签；不传则不限行业。可选值: - 10000000000: 教育 - 110

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry_id","type":"integer","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"time_range","type":"integer","required":false}]`

## `mcp_56f13561f4e0ecb51008971d`

根据直播间链接提取直播间ID/Extract live room ID from live room link

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_59b29688fd75773923fcabab`

# [中文] ### 用途: - 获取TikTok Shop商品评论 - 支持多种筛选和排序方式 - 数据结构更完整，包含更多评论详情 ### 参数: - product_id: 商品ID (必填) - page_start: 起始页码，默认1 - 当响应中 has_more=1 时，使用当前页码 +1 进行下一页请求 - sort_rule: 排序规则，默认2 - filter_type: 筛选类型 - 1: 默认不选择任何过滤 - 2: 包含图片或视频 - 3: 真实购买过滤 - filter_value: 星级筛选 - 6: 所有星级的评论(默认) - 5: 5星评价 - 4: 4星评价

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"integer","required":false},{"name":"filter_value","type":"integer","required":false},{"name":"page_start","type":"integer","required":false},{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"sort_rule","type":"integer","required":false}]`

## `mcp_59bb529ffed0e1d9af152286`

# [中文] ### 用途: - 解密strData指纹数据，用于分析msToken请求中的指纹信息 ### 参数: - encrypted_data: 加密后的strData字符串，从浏览器自行抓包获取 ### 返回: - 解密后的原始指纹数据，包含浏览器指纹信息和环境信息等。 # [English] ### Purpose: - Decrypt strData fingerprint data to analyze fingerprint info in msToken request ### Parameters: - encrypted_data: Encrypted strData 

- Risk: `read`
- Parameters: `[{"name":"encrypted_data","type":"string","required":true}]`

## `mcp_5a6d8b69279224c2a58eec62`

获取用户的播放列表/Get user play list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_5bcf24b917d8a41a64da1b7b`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_5e40d09d375028d60ae6eeb7`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the second page is the cu

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_5e9fa0eaff085c1a7a9dca80`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_602f4fa82c01db38355044e7`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 V2，数据结构会有些不一样，会返回region字段。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link V2, the data structure will be a bit different, and the region field will be returned. ### Parameters: - share_url: Share link ### Retu

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_62d39722b93bff40679a962d`

# [中文] ### 用途: - 获取广告在同行业中的百分位排名数据 - 了解广告在各项指标上相对于同行的表现水平 - 帮助评估广告效果并制定优化策略 ### 参数: - material_id: 广告素材ID，必填参数 - metric: 分析指标，可选值： - ctr_percentile: 点击率百分位（默认） - time_attr_conversion_rate_percentile: 时间归因转化率百分位 - click_cnt_percentile: 点击次数百分位 - time_attr_convert_cnt_percentile: 时间归因转化次数百分位 - show_cn

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`

## `mcp_695d31457e625ef8bae9bb4b`

# [中文] ### 用途: - 获取分享二维码 ### 参数: - object_id: 对象id，当前支持个人主页接口响应中的uid作为参数。 ### 返回: - 二维码图片 # [English] ### Purpose: - Get share QR code ### Parameters: - object_id: Object id, currently supports the uid in the response of the personal homepage interface as a parameter. ### Return: - QR code image # [

- Risk: `read`
- Parameters: `[{"name":"object_id","type":"string","required":true},{"name":"schema_type","type":"integer","required":false}]`

## `mcp_69b21ad0a17c6235d882ed01`

获取查询建议/Get query suggestions

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"country_code","type":"string","required":false},{"name":"query","type":"string","required":false},{"name":"scenario","type":"integer","required":false}]`

## `mcp_6ef12c3befb952192f2f0bee`

# [中文] ### 用途: - 获取单个作品由 TikTok 官方 AI 根据视频内容生成的长文与内容概览 - 可用于内容分析、选题参考、SEO 关键词挖掘等场景 ### 参数: - itemId: 作品id ### 返回: - `itemCustomTDK` 字段中包含以下内容: - `title`: AI 生成的标题 - `desc`: AI 生成的内容概览(摘要) - `keywords`: AI 提取的关键词列表 - `article`: AI 根据视频内容生成的长文正文 ### 备注: - 并非所有作品都有 AI 生成内容。若该作品没有，响应中不会出现 `itemCustomTDK

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true}]`

## `mcp_705a2db2a1bae2e4677fa910`

# [中文] ### 用途: - 获取商家商品列表(移动端接口) - 数据结构更精简 ### 参数: - seller_id: 卖家ID (必填) - searchParams: 搜索参数(可选) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code": 0, "message": "success", "data": { "products": [...], // 商品列表 "has_m

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"searchParams","type":"string","required":false},{"name":"seller_id","type":"string","required":true}]`

## `mcp_711f5f45f056b41f0174c70a`

批量查询Gift ID对应的礼物名称($0.025/次,建议50个)/Batch get gift names by gift IDs ($0.025/call, suggest 50)

- Risk: `write`
- Parameters: `[{"name":"gift_ids","type":"array","required":true}]`
