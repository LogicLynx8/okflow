# 知乎 MCP 工具

- 来源平台：`知乎`
- 能力分段：`zhihu`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 41

## `mcp_0b8baa505af97472d6fba378`

# [中文] ### 用途: - 获取知乎评论区V5 ### 参数: - answer_id: 回答ID - order_by: 排序 - score 最热排序 - ts 最新排序 - limit: 每页评论数量 - offset: 偏移量/页码 ### 返回: - 知乎评论区V5 # [English] ### Purpose: - Get Zhihu Comment V5 ### Parameters: - answer_id: Answer ID - order_by: Sort - score Hottest Sort - ts Latest Sort - limit: Number

- Risk: `read`
- Parameters: `[{"name":"answer_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false}]`

## `mcp_0c427d41755ce4940a2a0cd2`

# [中文] ### 用途: - 获取知乎用户的想法 (pins / moments) 列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页想法数量 ### 返回: - 知乎用户的想法列表 # [English] ### Purpose: - Get a Zhihu user's pins (moments) list ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of pins per page ### Returns: -

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_180498448f2c5b632d54a16a`

# [中文] ### 用途: - 获取知乎用户关注的收藏 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页收藏数量 ### 返回: - 知乎用户关注的收藏 # [English] ### Purpose: - Get Zhihu User Follow Collections ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of collections per page ### Returns: - Zhihu User Foll

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_1b0879d0b3e5c9de438e8571`

# [中文] ### 用途: - 获取知乎用户关注的话题 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页话题数量 ### 返回: - 知乎用户关注的话题 # [English] ### Purpose: - Get Zhihu User Follow Topics ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of topics per page ### Returns: - Zhihu User Follow Topics

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_1c2429fe466b71349c419728`

# [中文] ### 用途: - 获取知乎相似专栏推荐 ### 参数: - article_id: 文章ID - limit: 每页专栏数量 - offset: 偏移量 ### 返回: - 知乎相似专栏推荐 # [English] ### Purpose: - Get Zhihu Similar Column Recommend ### Parameters: - article_id: Article ID - limit: Number of columns per page - offset: Offset ### Returns: - Zhihu Similar Column Reco

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_1f43da60d793c22c11c18557`

# [中文] ### 用途: - 获取知乎用户搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户搜索V3 # [English] ### Purpose: - Get Zhihu User Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Search V3 # [示例/Example] k

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_2372749bf7fd0752ad2084ff`

# [中文] ### 用途: - 获取知乎用户信息 ### 参数: - user_url_token: 用户ID ### 返回: - 知乎用户信息 # [English] ### Purpose: - Get Zhihu User Info ### Parameters: - user_url_token: User ID ### Returns: - Zhihu User Info # [示例/Example] user_url_token = "ming-he-43-93"

- Risk: `read`
- Parameters: `[]`

## `mcp_23c54d119584461b18e060d2`

# [中文] ### 用途: - 获取知乎专栏搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页专栏数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎专栏搜索V3 # [English] ### Purpose: - Get Zhihu Column Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of columns per page - search_hash_id: Searc

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_27543d2923baba59816c6af8`

# [中文] ### 用途: - 获取知乎专栏文章详情 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏文章详情 # [English] ### Purpose: - Get Zhihu Column Article Detail ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Article Detail # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_33eb9c81f11a5fcb575abef2`

# [中文] ### 用途: - 获取知乎用户的回答列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页回答数量 - sort_type: 排序类型 - created 按发布时间排序 - voteups 按点赞数排序 ### 返回: - 知乎用户的回答列表 # [English] ### Purpose: - Get Zhihu User Answers ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of answers p

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_3d241ed38dd0085a8517c1f0`

# [中文] ### 用途: - 获取知乎搜索发现 ### 参数: - 无 ### 返回: - 知乎搜索发现 # [English] ### Purpose: - Get Zhihu Search Recommend ### Parameters: - None ### Returns: - Zhihu Search Recommend

- Risk: `read`
- Parameters: `[]`

## `mcp_450902f85ff6cdd523887a01`

# [中文] ### 用途: - 获取知乎首页热榜 ### 参数: - limit: 每页文章数量 - desktop: 是否为桌面端 ### 返回: - 知乎首页热榜 # [English] ### Purpose: - Get Zhihu Hot List ### Parameters: - limit: Number of articles per page - desktop: Is it a desktop ### Returns: - Zhihu Hot List # [示例/Example] limit = "50" desktop = "true"

- Risk: `read`
- Parameters: `[{"name":"desktop","type":"string","required":false},{"name":"limit","type":"string","required":false}]`

## `mcp_570dce40cd2b974428da97de`

# [中文] ### 用途: - 获取知乎问题详情 (标题/描述/统计/话题等) ### 参数: - question_id: 问题ID ### 返回: - 知乎问题详情 # [English] ### Purpose: - Get Zhihu Question Detail (title / description / stats / topics, etc.) ### Parameters: - question_id: Question ID ### Returns: - Zhihu Question Detail # [示例/Example] question_id = "378114

- Risk: `read`
- Parameters: `[{"name":"question_id","type":"string","required":true}]`

## `mcp_5f4561b2c20a15f56302275f`

# [中文] ### 用途: - 获取知乎 AI 搜索结果 (新版接口) ### 参数: - message_content: 搜索内容 - chat_mode: 对话模式, 默认 FAST - session_id: 会话ID, 多轮时传 ### 返回: - 知乎 AI 搜索结果, 数据为事件列表 {"events": [...]} # [English] ### Purpose: - Get Zhihu AI Search results (new endpoint) ### Parameters: - message_content: Search Content - chat_mode

- Risk: `read`
- Parameters: `[{"name":"chat_mode","type":"string","required":false},{"name":"message_content","type":"string","required":true},{"name":"session_id","type":"string","required":false}]`

## `mcp_612e8052cf439e4c94b70282`

# [中文] ### 用途: - 获取知乎用户的被收录文章列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页文章数量 ### 返回: - 知乎用户的被收录文章列表 # [English] ### Purpose: - Get Zhihu User Included Articles ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of articles per page ### Returns: - Zhihu User In

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_6543641363379ad78f534f18`

# [中文] ### 用途: - 获取知乎推荐关注列表 ### 参数: - 无 ### 返回: - 知乎推荐关注列表 # [English] ### Purpose: - Get Zhihu Recommend Followees ### Parameters: - None ### Returns: - Zhihu Recommend Followees

- Risk: `read`
- Parameters: `[]`

## `mcp_762ec1db50b86e4fc9cdd887`

# [中文] ### 用途: - 获取知乎话题搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页话题数量 ### 返回: - 知乎话题搜索V3 # [English] ### Purpose: - Get Zhihu Topic Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of topics per page ### Returns: - Zhihu Topic Search V3 # [示例/Example

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_7e6eb9a7a74101a5a3b09835`

# [中文] ### 用途: - 获取知乎文章搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页文章数量 - show_all_topics: 显示所有主题， - 0 不显示话题 - 1 显示话题 - search_source: 搜索来源 - Filter 过滤参数生效 - Normal 为普通结果 - search_hash_id: 搜索哈希ID，用于过滤重复搜索结果 - vertical: 空 不限类型 - answer 只看回答 - article 只看文章 - zvideo 只看视频 - sort: 空 综合排序 - upv

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false},{"name":"search_source","type":"string","required":false},{"name":"show_all_topics","type":"integer","required":false},{"name":"sort","type":"string","required":false},{"name":"time_interval","type":"string","required":false},{"name":"vertical","type":"string","required":false},{"name":"vertical_info","type":"string","required":false}]`

## `mcp_8380ec649b5d98e95b0b7efa`

# [中文] ### 用途: - 获取知乎专栏评论区配置 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏评论区配置 # [English] ### Purpose: - Get Zhihu Column Comment Config ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Comment Config # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_88654f97fb9c4ae1b6d2dbb3`

# [中文] ### 用途: - 获取知乎用户关注列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户关注列表 # [English] ### Purpose: - Get Zhihu User Following ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Following # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_8b3a883f6f2b9b53947fb926`

# [中文] ### 用途: - 获取知乎视频搜索V3 ### 参数: - keyword: 搜索关键词 - limit: 每页视频数量 - offset: 偏移量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎视频搜索V3 # [English] ### Purpose: - Get Zhihu Video Search V3 ### Parameters: - keyword: Search Keywords - limit: Number of videos per page - offset: Offset - search_hash_id: Search

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_8cc1000d1795d2b7c1c450a1`

# [中文] ### 用途: - 获取知乎用户**创建**的收藏夹列表 (区别于"关注的收藏夹") ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页收藏夹数量 ### 返回: - 知乎用户创建的收藏夹列表 # [English] ### Purpose: - Get collections **created** by a Zhihu user (distinct from followed favlists) ### Parameters: - user_url_token: User ID - offset: Offset -

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_8cd7d8b45c2cd6daf2cc5a69`

# [中文] ### 用途: - 获取知乎搜索预设词 ### 参数: - 无 ### 返回: - 知乎搜索预设词 # [English] ### Purpose: - Get Zhihu Preset Search ### Parameters: - None ### Returns: - Zhihu Preset Search

- Risk: `read`
- Parameters: `[]`

## `mcp_933e0004aecbfeb136ea9829`

# [中文] ### 用途: - 获取知乎首页视频榜 ### 参数: - offset: 偏移量 - limit: 每页视频数量 ### 返回: - 知乎首页视频榜 # [English] ### Purpose: - Get Zhihu Video List ### Parameters: - offset: Offset - limit: Number of videos per page ### Returns: - Zhihu Video List # [示例/Example] offset = "" limit = "12"

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_95a32a713d1c2dc4e511cd48`

# [中文] ### 用途: - 获取知乎子评论区V5 ### 参数: - comment_id: 评论ID - order_by: 排序 - score 最热排序 - ts 最新排序 - limit: 每页评论数量 - offset: 偏移量/页码 ### 返回: - 知乎子评论区V5 # [English] ### Purpose: - Get Zhihu Sub Comment V5 ### Parameters: - comment_id: Comment ID - order_by: Sort - score Hottest Sort - ts Latest Sort - limit

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false}]`

## `mcp_95e672e37c94c3a6563c3d7a`

# [中文] ### 用途: - 获取知乎电子书搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页电子书数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎电子书搜索V3 # [English] ### Purpose: - Get Zhihu Ebook Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of ebooks per page - search_hash_id: Sear

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_9b7d21219b12193b4b5e3292`

# [中文] ### 用途: - 知乎搜索预测词 ### 参数: - keyword: 搜索关键词 ### 返回: - 知乎搜索预测词 # [English] ### Purpose: - Get Zhihu Search Suggest ### Parameters: - keyword: Search Keywords ### Returns: - Zhihu Search Suggest # [示例/Example] keyword = "deepseek"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_a6cc9309aef0910df8b11e55`

# [中文] ### 用途: - 获取知乎首页推荐 ### 参数: - offset: 偏移量 - page_number: 页码 - session_token: 会话令牌 ### 返回: - 知乎首页推荐 # [English] ### Purpose: - Get Zhihu Hot Recommend ### Parameters: - offset: Offset - page_number: Page Number - session_token: Session Token # [示例/Example] offset = "0" page_number = "1" session

- Risk: `read`
- Parameters: `[{"name":"offset","type":"string","required":false},{"name":"page_number","type":"string","required":false}]`

## `mcp_aa872665a20963565770df6d`

# [中文] ### 用途: - 获取知乎用户的文章列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页文章数量 - sort_type: 排序类型 - created 按发布时间排序 - voteups 按点赞数排序 ### 返回: - 知乎用户的文章列表 # [English] ### Purpose: - Get Zhihu User Articles ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of articles

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_ac4f546b382483b105932160`

# [中文] ### 用途: - 获取知乎用户订阅的专栏 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页专栏数量 ### 返回: - 知乎用户订阅的专栏 # [English] ### Purpose: - Get Zhihu User Columns ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of columns per page ### Returns: - Zhihu User Columns # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_aff5fbf40b6ccc31a24d7200`

# [中文] ### 用途: - 获取单条知乎想法 (pin) 的详情 ### 参数: - pin_id: 想法ID ### 返回: - 知乎想法详情 # [English] ### Purpose: - Get the detail of a single Zhihu pin ### Parameters: - pin_id: Pin ID ### Returns: - Zhihu Pin Detail # [示例/Example] pin_id = "2050290260991534603"

- Risk: `read`
- Parameters: `[{"name":"pin_id","type":"string","required":true}]`

## `mcp_b44d5175ce92900867228af3`

# [中文] ### 用途: - 获取知乎用户的划线列表 (lineComments) ### 参数: - user_url_token: 此接口需传用户的 **member hash id** (如 c72367...), 不是 url_token - content_type: 内容类型, all 全部 - offset: 偏移量 - limit: 每页数量 ### 返回: - 知乎用户的划线列表 # [English] ### Purpose: - Get a Zhihu user's highlighted segments (lineComments) ### Parameters:

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"string","required":false},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_c5835132eae8f6f86ec7fdaf`

# [中文] ### 用途: - 获取知乎盐选内容搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页内容数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎盐选内容搜索V3 # [English] ### Purpose: - Get Zhihu Salt Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of contents per page - search_hash_id: Se

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_c941afd6558ca75c2a8951bf`

# [中文] ### 用途: - 获取知乎专栏文章列表 ### 参数: - column_id: 专栏ID - limit: 每页文章数量 - offset: 偏移量 ### 返回: - 知乎专栏文章列表 # [English] ### Purpose: - Get Zhihu Column Articles ### Parameters: - column_id: Column ID - limit: Number of articles per page - offset: Offset ### Returns: - Zhihu Column Articles # [示例/Example]

- Risk: `read`
- Parameters: `[{"name":"column_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_d56bf01c40d302abcd24e648`

# [中文] ### 用途: - 获取知乎论文搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页论文数量 - filter_fields: 过滤字段 ### 返回: - 知乎论文搜索V3 # [English] ### Purpose: - Get Zhihu Scholar Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of papers per page - filter_fields: Filter Fi

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_e3b4858b68bf64089d61cc09`

# [中文] ### 用途: - 获取知乎单个回答的详情 (正文/统计/作者/所属问题等) ### 参数: - answer_id: 回答ID (网页 URL .../answer/{answer_id} 中的数字) ### 返回: - 知乎回答详情 # [English] ### Purpose: - Get a single Zhihu answer's detail (content / stats / author / question, etc.) ### Parameters: - answer_id: Answer ID (the numeric id in the page U

- Risk: `read`
- Parameters: `[{"name":"answer_id","type":"string","required":true}]`

## `mcp_e655e36fae48e9f094745854`

# [中文] ### 用途: - 获取知乎问题的回答列表 ### 参数: - question_id: 问题ID - cursor: 分页游标，用于获取下一页数据，从返回的字段里提取 - limit: 每页回答数量，默认5 - offset: 偏移量，默认0 - order: 排序方式，default=默认排序，updated=按时间排序 - session_id: 会话ID，用于分页时保持状态，从返回的字段里提取 ### 返回: - 知乎问题回答列表数据 # [English] ### Purpose: - Get Zhihu Question Answers List ### Parame

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"string","required":false},{"name":"question_id","type":"string","required":true},{"name":"session_id","type":"string","required":false}]`

## `mcp_f43ee7cef4785f64aa470e90`

# [中文] ### 用途: - 获取知乎专栏文章互动关系 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏互动关系 # [English] ### Purpose: - Get Zhihu Column Relationship ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Relationship # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_f86c85f456ee7ecda22bd93c`

# [中文] ### 用途: - 获取知乎想法 (pin) 的评论区列表 ### 参数: - pin_id: 想法ID - order_by: 排序方式，score=默认排序，ts=最新排序 - limit: 每页评论数量 - offset: 偏移量，翻页从返回里取游标 ### 返回: - 知乎想法评论列表 # [English] ### Purpose: - Get the comments of a Zhihu pin ### Parameters: - pin_id: Pin ID - order_by: Sort, score=default, ts=newest - limit: N

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"pin_id","type":"string","required":true}]`

## `mcp_f8fc2cb23e471f29d03fe452`

# [中文] ### 用途: - 获取知乎用户粉丝列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户粉丝列表 # [English] ### Purpose: - Get Zhihu User Followers ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Followers # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_fb44f5d11598966e88c8e37d`

# [中文] ### 用途: - 获取知乎用户关注的问题 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页问题数量 ### 返回: - 知乎用户关注的问题 # [English] ### Purpose: - Get Zhihu User Follow Questions ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of questions per page ### Returns: - Zhihu User Follow Q

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`
