# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_00f4ff19b6d23248fba01c26`

获取用户的关注列表/Get user followings

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_0227f55e0cb0a48303335d3e`

获取单个作品数据/Get single video data

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_0261fda79416a102f0682b60`

# [中文] ### 用途: - 搜索用户 ### 参数: - keyword: 搜索关键词 - cursor: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_id","type":"string","required":false}]`

## `mcp_0287c56e63740512e8dfbc96`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_02a0f6c1da7c61fe9ee415c5`

获取视频详细分段统计数据/Get Video Detailed Statistics

- Risk: `write`
- Parameters: `[{"name":"item_id","type":"string","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_02e18f20ac890b8be7daaeb4`

批量获取创作者卡片/Get creators card

- Risk: `write`
- Parameters: `[{"name":"creator_type","type":"integer","required":false},{"name":"need_loader_list","type":"array","required":false},{"name":"tt_uids","type":"array","required":false}]`

## `mcp_02ff5896cb15603f7145ceb8`

# [中文] ### 用途: - 获取用户的点赞列表 - 注意: 该接口需要用户点赞列表为公开状态 ### 参数: - secUid: 用户secUid - cursor: 翻页游标 - count: 每页数量，默认为20，不可变更。 - coverFormat: 封面格式 - post_item_list_request_type: 排序方式 - 0：默认排序 - 1：热门排序 - 2：最旧排序 ### 返回: - 用户的点赞列表 ### 备注: - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，否则会返回 HTTP 403。 - 访问视频CDN直链时

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_03d5f1dd46098084178429fb`

获取用户的转发作品列表/Get user reposts

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_043637ebf206414e41a1d762`

# [中文] ### 用途: - 获取单个视频评论数据 ### 参数: - aweme_id: 作品id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论数据 # [English] ### Purpose: - Get single video comments data ### Parameters: - aweme_id: Video id - cursor: Cursor, used for paging, the first page is 0, the second page is the cu

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false}]`

## `mcp_051767e083132d05228b6ae5`

# [中文] ### 用途: - 获取商品详情及相关组件数据；字段完整程度因商品和地区而异。 ### 参数: - product_id: 商品 ID，必填。 - seller_id: 商家 ID，可选，可留空。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 页面数据位于 data.data；可包含 components_map、global_data 等字段。 - 商品信息可见于 global_data.product_info.product_info 或商品信息组件；请检查实际存在的字段。

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_057829e786fdedefae30a448`

生成 XBogus/Generate XBogus

- Risk: `write`
- Parameters: `[{"name":"url","type":"string","required":true},{"name":"user_agent","type":"string","required":true}]`

## `mcp_05aaa843e95fdf54028b8e86`

# [中文] ### 用途: - 获取指定关键词的用户搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - user_search_follower_count（根据粉丝数排序）: - 空-不限制， - ZERO_TO_ONE_K = 0-1K， - ONE_K_TO_TEN_K-1K = 1K-10K， - TEN_K_TO_ONE_H_K = 10K-100K， - ONE_H_K_PLUS = 100K以上 - user_search_profile_type（根据账号类型排序）: - 空-不限制， - VERIFIED = 认证

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"user_search_follower_count","type":"string","required":false},{"name":"user_search_other_pref","type":"string","required":false},{"name":"user_search_profile_type","type":"string","required":false}]`

## `mcp_06610fbe510f2e21041af2da`

# [中文] ### 用途: - TikTok APP加密算法，用于生成请求头中的加密参数。 - 生成的加密参数列表： - `x-ladon` - `x-khronos` - `x-argus` - `x-gorgon` （8404） ### 参数: - url: 需要加密的完整URL - data: 如果接口是POST请求，请填写POST请求的数据参与加密计算，GET请求时传入空字符串即可。 - device_info: 设备信息，可选参数，如果不填写则使用默认设备信息，设备信息会修改传入的URL中的参数。 ### 返回: - 加密参数列表 # [English] ### Purpose:

- Risk: `write`
- Parameters: `[{"name":"data","type":"string","required":false},{"name":"device_info","type":"object","required":false},{"name":"url","type":"string","required":false}]`

## `mcp_08567e4883758c9f541e06ff`

获取视频关联商品列表/Get Video Associated Product List

- Risk: `write`
- Parameters: `[{"name":"item_ids","type":"array","required":true},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_0a39aa4fc3656ff383665b76`

# [中文] ### 用途: - 解密strData指纹数据，用于分析msToken请求中的指纹信息 ### 参数: - encrypted_data: 加密后的strData字符串，从浏览器自行抓包获取 ### 返回: - 解密后的原始指纹数据，包含浏览器指纹信息和环境信息等。 # [English] ### Purpose: - Decrypt strData fingerprint data to analyze fingerprint info in msToken request ### Parameters: - encrypted_data: Encrypted strData

- Risk: `read`
- Parameters: `[{"name":"encrypted_data","type":"string","required":true}]`

## `mcp_0a838384b7bcf9e43546d5e8`

# [中文] ### 用途: - 获取指定关键词的话题搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 ### 返回: - 话题搜索结果 # [English] ### Purpose: - Get hashtag search results of specified keywords ### Parameters: - keyword: Keyword - offset: Offset - count: Number ### Return: - Hashtag search results # [示例/Example] keywor

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_0b686fc9d9bedc816f456483`

检测视频虚假流量分析/Detect fake views in video

- Risk: `read`
- Parameters: `[{"name":"content_category","type":"string","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_0c266fc72400b9bb1570b13c`

加密或解密 TikTok APP 登录请求体/Encrypt or Decrypt TikTok APP login request body

- Risk: `write`
- Parameters: `[{"name":"mode","type":"string","required":false},{"name":"username","type":"string","required":false}]`

## `mcp_0c4739458b71becc406f4f6e`

# [中文] ### 用途: - 搜索视频 ### 参数: - keyword: 搜索关键词 - count: 每页数量，建议保持默认值20。 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.impr_i

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_0f841bb03105188c54289ed8`

# [中文] ### 用途: - 获取商品搜索关键词建议。 ### 参数: - search_word: 搜索关键词，必填。 - lang: 语言代码，默认 en-US。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 建议位于 data.data，是字符串数组，不是包含 keywords 或 suggestion 字段的对象。 - 建议数量随关键词和地区变化，数组也可能为空。 ### 返回数据结构: - 以下为主要字段示意，省略通用响应字段和部分可选字段；具体字段以实际响应为准。 ```jso

- Risk: `read`
- Parameters: `[{"name":"lang","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_103cbdd31857d3b568d0538d`

获取热门广告聚光灯/Get top ads spotlight

- Risk: `write`
- Parameters: `[{"name":"industry","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_10f0f0f8746a97da84cb4ca7`

提取用户sec_user_id/Extract user sec_user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_14fbefc75975159d643ae214`

# [中文] ### 用途: - 获取指定视频的评论回复数据 ### 参数: - item_id: 作品id - comment_id: 评论id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 ### 返回: - 评论回复数据 # [English] ### Purpose: - Get comment replies data of specified video ### Parameters: - item_id: Video id - comment_id: Comment id - cursor: Cursor, use

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"item_id","type":"string","required":true}]`

## `mcp_15373c5803e5206951bd2f9c`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_16030d5b6e8d4af3cb529aa9`

# [中文] ### 用途: - 获取指定直播间的数据 ### 参数: - room_id: 直播间id ### 返回: - 直播间数据 # [English] ### Purpose: - Get data of specified live room ### Parameters: - room_id: Live room id ### Return: - Live room data # [示例/Example] room_id = "7385461256746060575"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_164866c246089bf21ca7bb38`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_1720bacce29a8be63e876f6e`

提取列表作品id/Extract list video id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_17f0bec6dda06174e764424c`

获取直播间礼物列表/Get live room gift list

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":false}]`

## `mcp_184adf9a8ba962c439d428e3`

# [中文] ### 用途: - 获取单个作品数据 V2 ### 参数: - aweme_id: 作品id ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V2 ### Parameters: - aweme_id: Video id ### Return: - Video data # [示例/Example] aweme_id = "7350810998023949599"

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_1865e1253db15f2dadb22a99`

# [中文] ### 用途: - 从 TikTok Shop 分享链接获取商品 ID 和对应链接。 ### 参数: - share_link: 分享链接，必填。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - data.product_id 是字符串；data.product_link 为对应链接。 - 若返回 resolved=false，请核对分享链接。 ### 返回数据结构: - 以下为主要字段示意，省略通用响应字段和部分可选字段；具体字段以实际响应为准。 ```json { "code"

- Risk: `read`
- Parameters: `[{"name":"region","type":"string","required":false},{"name":"share_link","type":"string","required":true}]`

## `mcp_196c9f5dddbc4ccdbabd97ae`

# [中文] ### 用途: - 获取综合搜索列表 ### 参数: - keyword: 搜索关键词 - offset: 翻页游标，第一次请求时为0，第二次请求时从上一次请求的返回响应中获取，一般这个值的关键字为offset或者cursor。 - search_id: 搜索id，第一次请求时为空，第二次翻页时需要提供，需要从上一次请求的返回响应中获取。 - 例如: search_id = "20240828035554C02011379EBB6A00E00B" - JSON Path-1 : $.data.extra.logid - JSON Path-2 : $.data.log_pb.im

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_1d1aa6d46fb7d4f33ed9a4c1`

# [中文] ### 用途: - 获取TikTok音乐排行榜数据 ### 参数: - scene: 排行榜类型 - 0: Top 50 (热门前50) - 1: Viral 50 (病毒式传播前50) - cursor: 分页游标，默认0 - count: 每页数量，默认50，最大50 ### 返回: - 音乐排行榜数据，包含歌曲信息、排名变化等 # [English] ### Purpose: - Get TikTok music chart list data ### Parameters: - scene: Chart type - 0: Top 50 (Popular top 50)

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"scene","type":"integer","required":false}]`

## `mcp_20a4b18ab661e2fac5a1fe59`

设备注册/Register device for TikTok Web

- Risk: `read`
- Parameters: `[]`

## `mcp_21bcef0624645f7ef2eb2c52`

搜索广告/Search ads

- Risk: `write`
- Parameters: `[{"name":"ad_format","type":"any","required":false},{"name":"ad_language","type":"any","required":false},{"name":"country_code","type":"string","required":false},{"name":"duration","type":"any","required":false},{"name":"industry","type":"string","required":false},{"name":"keyword","type":"string","required":false},{"name":"like","type":"any","required":false},{"name":"limit","type":"integer","required":false},{"name":"objective","type":"any","required":false},{"name":"order_by","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"pattern_label","type":"any","required":false},{"name":"period","type":"integer","required":false},{"name":"search_id","type":"string","required":false}]`

## `mcp_232bb7c340b1f3a5c00362de`

获取用户的合辑列表/Get user mix list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"mixId","type":"string","required":true}]`

## `mcp_246c905d1421cf1a5431243c`

# [中文] ### 用途: - 获取直播间首页推荐的可用标签(直播分类 Tab)列表 - 用于配合 `/fetch_live_recommend` 接口，获取其 `related_live_tag` 参数的可选值 ### 参数: - logid: 翻页游标。首页请求时留空；加载下一页时，传入上一次响应返回的 `logid` 值 ### 返回: - 可用标签(直播分类 Tab)列表 - logid: 本次请求的日志ID(来自响应头 `x-tt-logid`)，翻页加载更多时需把它再次作为 `logid` 参数传入 ### 备注: - `related_live_tag` 的可选值并不固定，会随

- Risk: `read`
- Parameters: `[{"name":"logid","type":"string","required":false}]`

## `mcp_253f8f823e4e5ca03a450a93`

# [中文] ### 用途: - 获取指定关键词的综合搜索结果 ### 参数: - keyword: 关键词 - offset: 偏移量 - count: 数量 - sort_type: 0-相关度，1-最多点赞 - publish_time: 0-不限制，1-最近一天，7-最近一周，30-最近一个月，90-最近三个月，180-最近半年 ### 返回: - 综合搜索结果 # [English] ### Purpose: - Get comprehensive search results of specified keywords ### Parameters: - keyword: Keyw

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"publish_time","type":"integer","required":false},{"name":"sort_type","type":"integer","required":false}]`

## `mcp_25b7bd5070ca7e811a509320`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定作品详情页。 ### 参数: - aweme_id: 作品id - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified video ### Parameters: - aweme_id: Video id - Note: If you cannot jump, please ma

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true}]`

## `mcp_275c10582ccd92d8734748bd`

# [中文] ### 用途: - 获取指定话题的作品数据 ### 参数: - ch_id: 话题id - cursor: 游标，用于翻页，第一页为0，第二页为第一次响应中的cursor值。 - count: 数量 - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题作品数据 # [English] ### Purpose: - Get video list of specified hashtag ### Parameters: - ch_id: Hashtag id - cursor: Cursor, used for pagin

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_27d97ac3581f57b88ee4a4a7`

# [中文] ### 用途: - 生成TikTok分享链接，唤起TikTok APP，跳转指定关键词搜索结果。 ### 参数: - keyword: 关键词 - 注意: 如果未能跳转，请确保APP已经在后台运行。 ### 返回: - 分享链接 # [English] ### Purpose: - Generate TikTok share link, call TikTok APP, and jump to the specified keyword search result ### Parameters: - keyword: Keyword - Note: If you cannot j

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_2883bd16a9d2183a225a06f4`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_28ccd10661c858c4fb11237f`

# [中文] ### 用途: - 搜索指定用户的粉丝列表，可以用于查找某个用户的粉丝中是否有特定昵称的用户。 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID，可以先通过获取用户信息接口获取。 - keyword: 搜索关键词，用户的昵称中包含该关键词即可匹配 ### 返回: - 搜索结果列表 # [English] ### Purpose: - Search follower list of specified user, can be used to find whether there is a user with a specific nickname in

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"user_id","type":"string","required":true}]`

## `mcp_29c63d15848acb170da1913e`

获取商品详情V3(移动端-数据完整)/Get product detail V3 (Full Data)

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_2c0db92627258134cb74f4f3`

# [中文] ### 用途: - 生成ttwid ### 参数: - 无 ### 返回: - ttwid # [English] ### Purpose: - Generate ttwid ### Parameters: - None ### Return: - ttwid

- Risk: `read`
- Parameters: `[{"name":"user_agent","type":"string","required":false}]`

## `mcp_2c9be3bb7ebe40b53de1f407`

# [中文] ### 用途: - 通过直播链接获取直播间信息 - 此接口可获取离线直播间信息 ### 参数: - live_room_url: 直播间链接 ### 返回: - 直播间信息 # [English] ### Purpose: - Get live room information via live link - This interface can get offline live room information ### Parameters: - live_room_url: Live room link ### Return: - Live room information

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_2e624bc2ea539a46bf1f54e4`

# [中文] ### 用途: - TikTok直播间弹幕参数获取 ### 参数: - room_id: 直播间号 - user_unique_id: 用户唯一ID（可选） - resp_content_type: 响应格式，protobuf（默认）或 json ### 返回: - 弹幕参数数据 # [English] ### Purpose: - TikTok live room danmaku parameters ### Parameters: - room_id: Live room id - user_unique_id: User unique ID (optional) - res

- Risk: `read`
- Parameters: `[{"name":"resp_content_type","type":"string","required":false},{"name":"room_id","type":"string","required":true},{"name":"user_unique_id","type":"string","required":false}]`

## `mcp_31964256159c4764399979f3`

# [中文] ### 用途: - 搜索关键字推荐 ### 参数: - keyword: 搜索关键词 ### 返回: - 关键字推荐列表 # [English] ### Purpose: - Search keyword suggest ### Parameters: - keyword: Search keyword ### Return: - Keyword suggest list # [示例/Example] keyword = "TikTok"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_32597c06ff8ce20554c65255`

获取用户的粉丝列表/Get user followers

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"maxCursor","type":"integer","required":false},{"name":"minCursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_344e86cf512104c27df02254`

获取直播间商品列表数据/Get live room product list data

- Risk: `read`
- Parameters: `[{"name":"author_id","type":"string","required":true},{"name":"offset","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"room_id","type":"string","required":true}]`

## `mcp_38cd37e733c683db198151d1`

# [中文] ### 用途: - 获取单个作品数据 V3 ### 参数: - aweme_id: 作品id - region: 国家代码，默认US，支持ISO 3166-1 alpha-2国家代码，例如：US、GB、FR、DE、IN、JP等。 - 备注：某些视频可能在特定国家/地区不可用，设置region参数可以尝试获取该国家/地区的视频数据。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data V3 ### Parameters: - aweme_id: Video id - region: Country code

- Risk: `read`
- Parameters: `[{"name":"aweme_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_39b1272b74831b1d2ac4750b`

# [中文] ### 用途: - 获取 TikTok Creative Center 热门视频榜单(Top Contents)，榜单固定收录 100 条热门视频 - 支持按内容分类筛选、按播放量/互动率/完播率排序，用于选题与创意参考 ### 参数: - period_end_timestamp: 榜单周期结束时间戳(10位秒级)，必填 - 该参数需调用方根据目标榜单日期自行生成，并非由其他接口返回 - 示例: `1785024000`；不要传 `0`，否则会返回空结果 - period_dimension 为 1 时需传周日 00:00 UTC 的时间戳，其余日期无数据 - period_d

- Risk: `write`
- Parameters: `[{"name":"content_label_ids","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"order_by_metric","type":"integer","required":false},{"name":"organic_only","type":"boolean","required":false},{"name":"page","type":"integer","required":false},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_4033e4168089a5d07d58eb52`

# [中文] ### 用途: - 加密strData指纹数据，用于生成msToken请求 ### 参数: - data: 原始指纹数据字符串（请先将JSON格式然后转换成字符串进行请求） ### 返回: - 加密后的strData # [English] ### Purpose: - Encrypt strData fingerprint data for msToken request ### Parameters: - data: Raw fingerprint data string (please convert JSON format to string before request

- Risk: `read`
- Parameters: `[{"name":"data","type":"string","required":true}]`

## `mcp_4310d02d6e8671c172121bc3`

获取橱窗商品列表/Get Showcase Product List

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"proxy","type":"any","required":false}]`

## `mcp_434456f26b20490bf13bc86b`

# [中文] ### 用途: - 获取用户喜欢作品数据 ### 参数: - sec_user_id: 用户sec_user_id - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量 ### 返回: - 用户作品数据 # [English] ### Purpose: - Get user like video data ### Parameters: - sec_user_id: User sec_user_id - max_cursor: Maximum cursor, used for paging, the

- Risk: `read`
- Parameters: `[{"name":"counts","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":true}]`

## `mcp_4e4019534b6136bf67671424`

# [中文] ### 用途: - 获取指定话题的详情数据 ### 参数: - ch_id: 话题id - region: 地区，支持 US, GB, FR, JP, VN, SG，默认 US ### 返回: - 话题详情数据 # [English] ### Purpose: - Get details of specified hashtag ### Parameters: - ch_id: Hashtag id - region: Region, supports US, GB, FR, JP, VN, SG, default US ### Return: - Hashtag details

- Risk: `read`
- Parameters: `[{"name":"ch_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_51b1ff259e25ceab730d0fba`

获取搜索板块配置/Get search modules config

- Risk: `write`
- Parameters: `[{"name":"body","type":"string","required":false}]`

## `mcp_51e730b321c551b93c8e5a15`

# [中文] ### 用途: - 获取用户转发的作品数据 ### 参数: - user_id: 用户id，可以通过 handler_user_profile 端点获取，响应中的关键字为uid。 - offset: 偏移量 - count: 数量 ### 返回: - 用户转发作品数据 # [English] ### Purpose: - Get user repost video data ### Parameters: - user_id: User id, which can be obtained through the handler_user_profile endpoint, wit

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"user_id","type":"integer","required":true}]`

## `mcp_525fc077c1c915bee03ca19f`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号的健康状况信息，包括过去 90 天内的健康评分（风险等级）以及当前累计的违规积分数量。 - 关于违规积分： - 违规积分是 TikTok 用于衡量账号健康状况的重要指标。 - 违规积分越高，账号健康状况越差，可能面临限流、禁播、封禁等处罚。 - 违规积分将直接影响账号的曝光量和推荐量。 ### 累计违规积分对应的惩罚等级： | 分数范围 | 惩罚措施 | 惩罚时长 | | --------- | --------------------------------------------------------- | ---

- Risk: `write`
- Parameters: `[{"name":"proxy","type":"any","required":false}]`

## `mcp_5267e7d92eb2e089d70fce09`

# [中文] ### 用途: - 生成随机浏览器指纹数据，可用于自定义msToken请求 ### 参数: - browser_type: 指定浏览器类型，可选值: - chrome_windows: Chrome + Windows - chrome_mac: Chrome + macOS - firefox_windows: Firefox + Windows - firefox_mac: Firefox + macOS - 不传则随机选择 ### 返回: - 浏览器指纹数据 # [English] ### Purpose: - Generate random browser fingerp

- Risk: `read`
- Parameters: `[{"name":"browser_type","type":"string","required":false}]`

## `mcp_542cc78e5ee1b36ad5d54732`

获取广告关键帧分析/Get ad keyframe analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric","type":"string","required":false}]`

## `mcp_58699d32947a47fa5a71ce63`

# [中文] ### 用途: - 获取单个作品由 TikTok 官方 AI 根据视频内容生成的长文与内容概览 - 可用于内容分析、选题参考、SEO 关键词挖掘等场景 ### 参数: - itemId: 作品id ### 返回: - `itemCustomTDK` 字段中包含以下内容: - `title`: AI 生成的标题 - `desc`: AI 生成的内容概览(摘要) - `keywords`: AI 提取的关键词列表 - `article`: AI 根据视频内容生成的长文正文 ### 备注: - 并非所有作品都有 AI 生成内容。若该作品没有，响应中不会出现 `itemCustomTDK

- Risk: `read`
- Parameters: `[{"name":"itemId","type":"string","required":true}]`

## `mcp_5907fe5d1664133d5f42c23d`

# [中文] ### 用途: - 获取TikTok视频的详细统计数据，包括观看量、点赞数、评论数和收藏数等核心指标 - 提供总量统计以及从发布日期起14天的每日趋势数据，便于分析视频表现 - 帮助创作者分析内容效果，评估用户互动情况，优化内容策略 ### 参数: - item_id: 视频作品ID，必填参数，可从视频分享链接或TikTok Studio获取 ### 返回内容说明: - `item_id`: 请求的视频ID - `video_views`: 视频总观看次数 - `value`: 观看次数数值 - `video_views_14_days`: 近14天的每日观看量趋势数据 - `i

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_5a7f1c6cfd9f1a799b21bdfc`

# [中文] ### 用途: - 获取 TikTok Shop 创作者账号在指定时间范围内推广的商品列表及其销售数据分析。 - 支持按商品成交额、商品上架时间排序，可分页查询。 ### 返回内容说明: - `segments`（分段数据列表）: - `filter.creator_id`: 创作者账号 ID - `list_control`: - `rules`: 列表排序规则（如按成交额、商品 ID 排序） - `next_pagination`: 翻页信息（是否还有更多页、下一页页码、总页数、总记录数） - `timed_lists`: 每个时间段内的商品数据，包括： - `product

- Risk: `write`
- Parameters: `[{"name":"end_date","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"proxy","type":"any","required":false},{"name":"start_date","type":"string","required":false}]`

## `mcp_5ac19331eb06808fb5268aee`

# [中文] ### 用途: - 获取指定地区、分类下的商品列表。 ### 参数: - category_id: 分类 ID，必填，可从 fetch_products_category_list 获取，需与 region 对应。 - offset: 分页偏移量，默认 0。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 商品位于 data.data.productList，分页字段是 data.data.hasMore，不是 products 或 has_more。 - 每批实际商品数量可能少于

- Risk: `read`
- Parameters: `[{"name":"category_id","type":"integer","required":true},{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_5cbdc555ee5ba728005820f1`

根据直播间链接提取直播间ID/Extract live room ID from live room link

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_5d287d7f2c0624c6f316cbdf`

获取用户unique_id/Get user unique_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_5e72c3d463136fbf293c73ba`

首页推荐作品/Home Feed

- Risk: `write`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_604af8147d4d5537bc997c8a`

# [中文] ### 用途: - 按关键词搜索美国地区商品。 ### 参数: - search_word: 搜索关键词，必填。 - offset: 分页偏移量，首次请求为 0。 - page_token: 分页标记，首次请求留空。 - region: 仅支持 US，默认 US。 ### 返回与使用说明: - 商品位于 data.data.component_data.products；分页状态位于 component_data.has_more。 - 下一页使用 component_data.offset 和 component_data.load_more_params.page_token

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_651253dc77856d6d98a3a0a5`

获取热门标签详情(趋势)/Get trending hashtag detail

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"hashtag_id","type":"string","required":true},{"name":"time_range","type":"integer","required":false}]`

## `mcp_659f8a76623c0c47402e8ff5`

提取直播间弹幕/Extract live room danmaku

- Risk: `read`
- Parameters: `[{"name":"danmaku_type","type":"string","required":true},{"name":"live_room_url","type":"string","required":true}]`

## `mcp_694c980f1d0aea3ddf8cc5d1`

获取用户的直播详情/Get user live details

- Risk: `read`
- Parameters: `[{"name":"uniqueId","type":"string","required":true}]`

## `mcp_6a10a4deb1892e43aa84d0b3`

# [中文] ### 用途: - 根据分享链接获取单个作品数据 V2，数据结构会有些不一样，会返回region字段。 ### 参数: - share_url: 分享链接 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data by sharing link V2, the data structure will be a bit different, and the region field will be returned. ### Parameters: - share_url: Share link ### Retu

- Risk: `read`
- Parameters: `[{"name":"share_url","type":"string","required":true}]`

## `mcp_6a2a9f20e4faba7c7e256ed7`

获取列表unique_id/Get list unique_id

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_6b0f0c05b7cfcf846cab43eb`

# [中文] ### 用途: - 获取类似用户推荐 ### 参数: - sec_uid: 用户sec_uid - page_token: 分页标记，第一次请求时不需要传递，后续请求时传递上一次响应中的next_page_token值。 ### 返回: - 类似用户推荐 # [English] ### Purpose: - Similar User Recommendations ### Parameters: - sec_uid: User sec_uid - page_token: Page token, not required for the first request, for sub

- Risk: `read`
- Parameters: `[{"name":"sec_uid","type":"string","required":true}]`

## `mcp_71c24c18128f56e65378f5a8`

获取推荐广告/Get recommended ads

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"industry","type":"string","required":false},{"name":"material_id","type":"string","required":true}]`

## `mcp_73e3c2615d3f69a5be7c8a4c`

# [中文] ### 用途: - 获取热门视频榜单中单个视频的详细数据 - 在榜单数据基础上额外返回热门评论与作者主页信息，便于分析视频的受欢迎原因 ### 参数: - item_id: 视频ID，从 /get_top_contents_list 返回的 `itemInfo.itemID` 获取 - period_end_timestamp: 榜单周期结束时间戳(10位秒级)，必填 - 该参数需调用方根据目标榜单日期自行生成，并非由其他接口返回 - 示例: `1785024000`；不要传 `0`，否则会返回空结果 - period_dimension 为 1 时需传周日 00:00 UTC

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"item_id","type":"string","required":true},{"name":"period_dimension","type":"integer","required":false},{"name":"period_end_timestamp","type":"integer","required":true}]`

## `mcp_757faaf1d0f1d236a4103602`

# [中文] ### 用途: - 提取列表用户id ### 参数: - url: 用户主页链接（最多支持10个链接）、 ### 返回: - 如果链接成功获取到sec_user_id，则返回sec_user_id，否则返回原始的输入链接，后续可以手动校验链接无法获取sec_user_id的原因。 # [English] ### Purpose: - Extract list user id ### Parameters: - url: User homepage link (Support up to 10 links) ### Return: - If the sec_user_id is s

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_75d80fff6cc498bdc771dd3d`

# [中文] ### 本接口已弃用: - 请改用 fetch_product_detail_v3。 ### 用途: - 保留商品详情 V2 的原有调用参数。 ### 参数: - product_id: 商品 ID，必填。 - seller_id: 商家 ID，可选，可留空。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 本版本已弃用，新的接入请使用 fetch_product_detail_v3，并按其返回结构读取字段。 # [English] ### This endpoint is dep

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false},{"name":"seller_id","type":"string","required":false}]`

## `mcp_766f656d380b4379b6ef37b9`

# [中文] ### 用途: - 获取用户主页作品数据 ### 参数: - sec_user_id: 用户sec_user_id，优先使用sec_user_id获取用户作品数据，如果sec_user_id为空，则使用unique_id获取用户作品数据。 - max_cursor: 最大游标，用于翻页，第一页为0，第二页为第一次响应中的max_cursor值。 - count: 最大数量，建议保持默认值20。 - sort_type: 排序类型，0-最新，1-热门 - unique_id: 用户unique_id，可选参数，如果sec_user_id为空，则使用unique_id获取用户作品数据

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_cursor","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"sort_type","type":"integer","required":false},{"name":"unique_id","type":"string","required":false}]`

## `mcp_77beaeae9f6bae58572a17b2`

获取广告互动分析/Get ad interactive analysis

- Risk: `write`
- Parameters: `[{"name":"material_id","type":"string","required":true},{"name":"metric_type","type":"string","required":false},{"name":"period_type","type":"integer","required":false}]`
