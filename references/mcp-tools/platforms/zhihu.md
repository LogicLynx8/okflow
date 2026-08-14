# 知乎 MCP 工具

- 来源平台：`知乎`
- 能力分段：`zhihu`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 41

## `mcp_03c710b828f42ebb640ac66f`

# [中文] ### 用途: - 获取知乎用户关注的话题 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页话题数量 ### 返回: - 知乎用户关注的话题 # [English] ### Purpose: - Get Zhihu User Follow Topics ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of topics per page ### Returns: - Zhihu User Follow Topics 

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_046386a86796fbb29154afa3`

# [中文] ### 用途: - 获取知乎子评论区V5 ### 参数: - comment_id: 评论ID - order_by: 排序 - score 最热排序 - ts 最新排序 - limit: 每页评论数量 - offset: 偏移量/页码 ### 返回: - 知乎子评论区V5 # [English] ### Purpose: - Get Zhihu Sub Comment V5 ### Parameters: - comment_id: Comment ID - order_by: Sort - score Hottest Sort - ts Latest Sort - limit

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false}]`

## `mcp_06d2d559fcc5dfc0fce67d64`

# [中文] ### 用途: - 获取知乎专栏搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页专栏数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎专栏搜索V3 # [English] ### Purpose: - Get Zhihu Column Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of columns per page - search_hash_id: Searc

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_0c9fed8319cdd9c39cb7dedb`

# [中文] ### 用途: - 获取知乎问题详情 (标题/描述/统计/话题等) ### 参数: - question_id: 问题ID ### 返回: - 知乎问题详情 # [English] ### Purpose: - Get Zhihu Question Detail (title / description / stats / topics, etc.) ### Parameters: - question_id: Question ID ### Returns: - Zhihu Question Detail # [示例/Example] question_id = "378114

- Risk: `read`
- Parameters: `[{"name":"question_id","type":"string","required":true}]`

## `mcp_0eb1b06ee12b75ad7c9dfa92`

# [中文] ### 用途: - 获取知乎用户信息 ### 参数: - user_url_token: 用户ID ### 返回: - 知乎用户信息 # [English] ### Purpose: - Get Zhihu User Info ### Parameters: - user_url_token: User ID ### Returns: - Zhihu User Info # [示例/Example] user_url_token = "ming-he-43-93"

- Risk: `read`
- Parameters: `[]`

## `mcp_0f0cdbbe93ef0ca8264e0ab4`

# [中文] ### 用途: - 获取知乎专栏评论区配置 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏评论区配置 # [English] ### Purpose: - Get Zhihu Column Comment Config ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Comment Config # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_13a8dce98a5f003b469ddcac`

# [中文] ### 用途: - 获取知乎 AI 搜索结果 (新版接口) ### 参数: - message_content: 搜索内容 - chat_mode: 对话模式, 默认 FAST - session_id: 会话ID, 多轮时传 ### 返回: - 知乎 AI 搜索结果, 数据为事件列表 {"events": [...]} # [English] ### Purpose: - Get Zhihu AI Search results (new endpoint) ### Parameters: - message_content: Search Content - chat_mode

- Risk: `read`
- Parameters: `[{"name":"chat_mode","type":"string","required":false},{"name":"message_content","type":"string","required":true},{"name":"session_id","type":"string","required":false}]`

## `mcp_218312be06dd4d73d40f15c2`

# [中文] ### 用途: - 获取知乎电子书搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页电子书数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎电子书搜索V3 # [English] ### Purpose: - Get Zhihu Ebook Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of ebooks per page - search_hash_id: Sear

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_232884a269f8e6763e4f776b`

# [中文] ### 用途: - 获取知乎用户**创建**的收藏夹列表 (区别于"关注的收藏夹") ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页收藏夹数量 ### 返回: - 知乎用户创建的收藏夹列表 # [English] ### Purpose: - Get collections **created** by a Zhihu user (distinct from followed favlists) ### Parameters: - user_url_token: User ID - offset: Offset -

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_2dad32c181c690fb55d69265`

# [中文] ### 用途: - 获取知乎问题的回答列表 ### 参数: - question_id: 问题ID - cursor: 分页游标，用于获取下一页数据，从返回的字段里提取 - limit: 每页回答数量，默认5 - offset: 偏移量，默认0 - order: 排序方式，default=默认排序，updated=按时间排序 - session_id: 会话ID，用于分页时保持状态，从返回的字段里提取 ### 返回: - 知乎问题回答列表数据 # [English] ### Purpose: - Get Zhihu Question Answers List ### Parame

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"limit","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order","type":"string","required":false},{"name":"question_id","type":"string","required":true},{"name":"session_id","type":"string","required":false}]`

## `mcp_32489967623f3bd978e461c8`

# [中文] ### 用途: - 获取知乎首页推荐 ### 参数: - offset: 偏移量 - page_number: 页码 - session_token: 会话令牌 ### 返回: - 知乎首页推荐 # [English] ### Purpose: - Get Zhihu Hot Recommend ### Parameters: - offset: Offset - page_number: Page Number - session_token: Session Token # [示例/Example] offset = "0" page_number = "1" session

- Risk: `read`
- Parameters: `[{"name":"offset","type":"string","required":false},{"name":"page_number","type":"string","required":false}]`

## `mcp_357f6157122c770de579508c`

# [中文] ### 用途: - 获取知乎视频搜索V3 ### 参数: - keyword: 搜索关键词 - limit: 每页视频数量 - offset: 偏移量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎视频搜索V3 # [English] ### Purpose: - Get Zhihu Video Search V3 ### Parameters: - keyword: Search Keywords - limit: Number of videos per page - offset: Offset - search_hash_id: Search 

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_3eb646b2578b7c3c1cb15737`

# [中文] ### 用途: - 获取知乎话题搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页话题数量 ### 返回: - 知乎话题搜索V3 # [English] ### Purpose: - Get Zhihu Topic Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of topics per page ### Returns: - Zhihu Topic Search V3 # [示例/Example

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_4800921da7ef77deeaa9c437`

# [中文] ### 用途: - 获取知乎用户的划线列表 (lineComments) ### 参数: - user_url_token: 此接口需传用户的 **member hash id** (如 c72367...), 不是 url_token - content_type: 内容类型, all 全部 - offset: 偏移量 - limit: 每页数量 ### 返回: - 知乎用户的划线列表 # [English] ### Purpose: - Get a Zhihu user's highlighted segments (lineComments) ### Parameters:

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"string","required":false},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_4bf90e22eb84e33cc945a27e`

# [中文] ### 用途: - 获取知乎用户关注列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户关注列表 # [English] ### Purpose: - Get Zhihu User Following ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Following # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_4e46a45601f3b107cbfd3eef`

# [中文] ### 用途: - 获取单条知乎想法 (pin) 的详情 ### 参数: - pin_id: 想法ID ### 返回: - 知乎想法详情 # [English] ### Purpose: - Get the detail of a single Zhihu pin ### Parameters: - pin_id: Pin ID ### Returns: - Zhihu Pin Detail # [示例/Example] pin_id = "2050290260991534603"

- Risk: `read`
- Parameters: `[{"name":"pin_id","type":"string","required":true}]`

## `mcp_4f2f4e9985c41fe41996a1cd`

# [中文] ### 用途: - 获取知乎用户的回答列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页回答数量 - sort_type: 排序类型 - created 按发布时间排序 - voteups 按点赞数排序 ### 返回: - 知乎用户的回答列表 # [English] ### Purpose: - Get Zhihu User Answers ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of answers p

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_553f674057789e7f80e13711`

# [中文] ### 用途: - 获取知乎用户订阅的专栏 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页专栏数量 ### 返回: - 知乎用户订阅的专栏 # [English] ### Purpose: - Get Zhihu User Columns ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of columns per page ### Returns: - Zhihu User Columns # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_5a43ca1e08f90200a5c79225`

# [中文] ### 用途: - 获取知乎用户关注的问题 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页问题数量 ### 返回: - 知乎用户关注的问题 # [English] ### Purpose: - Get Zhihu User Follow Questions ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of questions per page ### Returns: - Zhihu User Follow Q

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_68e1a906716a9f79d08f3781`

# [中文] ### 用途: - 获取知乎用户的文章列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页文章数量 - sort_type: 排序类型 - created 按发布时间排序 - voteups 按点赞数排序 ### 返回: - 知乎用户的文章列表 # [English] ### Purpose: - Get Zhihu User Articles ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of articles

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_69f3c1de091ecdf6cf1f3d40`

# [中文] ### 用途: - 获取知乎推荐关注列表 ### 参数: - 无 ### 返回: - 知乎推荐关注列表 # [English] ### Purpose: - Get Zhihu Recommend Followees ### Parameters: - None ### Returns: - Zhihu Recommend Followees

- Risk: `read`
- Parameters: `[]`

## `mcp_80e503d1c23e183eecd3d531`

# [中文] ### 用途: - 获取知乎用户的想法 (pins / moments) 列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页想法数量 ### 返回: - 知乎用户的想法列表 # [English] ### Purpose: - Get a Zhihu user's pins (moments) list ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of pins per page ### Returns: -

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_8483f7504e867e14244bdaaf`

# [中文] ### 用途: - 获取知乎相似专栏推荐 ### 参数: - article_id: 文章ID - limit: 每页专栏数量 - offset: 偏移量 ### 返回: - 知乎相似专栏推荐 # [English] ### Purpose: - Get Zhihu Similar Column Recommend ### Parameters: - article_id: Article ID - limit: Number of columns per page - offset: Offset ### Returns: - Zhihu Similar Column Reco

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_95ca7846dc6af6f8e7ec51bc`

# [中文] ### 用途: - 获取知乎文章搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页文章数量 - show_all_topics: 显示所有主题， - 0 不显示话题 - 1 显示话题 - search_source: 搜索来源 - Filter 过滤参数生效 - Normal 为普通结果 - search_hash_id: 搜索哈希ID，用于过滤重复搜索结果 - vertical: 空 不限类型 - answer 只看回答 - article 只看文章 - zvideo 只看视频 - sort: 空 综合排序 - upv

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false},{"name":"search_source","type":"string","required":false},{"name":"show_all_topics","type":"integer","required":false},{"name":"sort","type":"string","required":false},{"name":"time_interval","type":"string","required":false},{"name":"vertical","type":"string","required":false},{"name":"vertical_info","type":"string","required":false}]`

## `mcp_9b4ba3334e68f4328058fe95`

# [中文] ### 用途: - 获取知乎专栏文章列表 ### 参数: - column_id: 专栏ID - limit: 每页文章数量 - offset: 偏移量 ### 返回: - 知乎专栏文章列表 # [English] ### Purpose: - Get Zhihu Column Articles ### Parameters: - column_id: Column ID - limit: Number of articles per page - offset: Offset ### Returns: - Zhihu Column Articles # [示例/Example]

- Risk: `read`
- Parameters: `[{"name":"column_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_9bd7099006d5b4299e58423a`

# [中文] ### 用途: - 获取知乎评论区V5 ### 参数: - answer_id: 回答ID - order_by: 排序 - score 最热排序 - ts 最新排序 - limit: 每页评论数量 - offset: 偏移量/页码 ### 返回: - 知乎评论区V5 # [English] ### Purpose: - Get Zhihu Comment V5 ### Parameters: - answer_id: Answer ID - order_by: Sort - score Hottest Sort - ts Latest Sort - limit: Number 

- Risk: `read`
- Parameters: `[{"name":"answer_id","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false}]`

## `mcp_a3f7a52919b553cd14467ebb`

# [中文] ### 用途: - 获取知乎搜索发现 ### 参数: - 无 ### 返回: - 知乎搜索发现 # [English] ### Purpose: - Get Zhihu Search Recommend ### Parameters: - None ### Returns: - Zhihu Search Recommend

- Risk: `read`
- Parameters: `[]`

## `mcp_ac7781d7afff866433126100`

# [中文] ### 用途: - 获取知乎用户粉丝列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户粉丝列表 # [English] ### Purpose: - Get Zhihu User Followers ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Followers # [示例/Examp

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_b4e7915f5c577f1fb6a2193c`

# [中文] ### 用途: - 获取知乎论文搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页论文数量 - filter_fields: 过滤字段 ### 返回: - 知乎论文搜索V3 # [English] ### Purpose: - Get Zhihu Scholar Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of papers per page - filter_fields: Filter Fi

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_b995852bb5048da9d7c1da0a`

# [中文] ### 用途: - 获取知乎用户搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页用户数量 ### 返回: - 知乎用户搜索V3 # [English] ### Purpose: - Get Zhihu User Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of users per page ### Returns: - Zhihu User Search V3 # [示例/Example] k

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_bbfae149c6ca43f1a1928151`

# [中文] ### 用途: - 获取知乎用户的被收录文章列表 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页文章数量 ### 返回: - 知乎用户的被收录文章列表 # [English] ### Purpose: - Get Zhihu User Included Articles ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of articles per page ### Returns: - Zhihu User In

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_d51dfb6389d4236b25876dcd`

# [中文] ### 用途: - 获取知乎用户关注的收藏 ### 参数: - user_url_token: 用户ID - offset: 偏移量 - limit: 每页收藏数量 ### 返回: - 知乎用户关注的收藏 # [English] ### Purpose: - Get Zhihu User Follow Collections ### Parameters: - user_url_token: User ID - offset: Offset - limit: Number of collections per page ### Returns: - Zhihu User Foll

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_db23b7205abf664e655eda8e`

# [中文] ### 用途: - 获取知乎盐选内容搜索V3 ### 参数: - keyword: 搜索关键词 - offset: 偏移量 - limit: 每页内容数量 - search_hash_id: 搜索哈希ID ### 返回: - 知乎盐选内容搜索V3 # [English] ### Purpose: - Get Zhihu Salt Search V3 ### Parameters: - keyword: Search Keywords - offset: Offset - limit: Number of contents per page - search_hash_id: Se

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"search_hash_id","type":"string","required":false}]`

## `mcp_dbf23bed40f976359785e92d`

# [中文] ### 用途: - 获取知乎单个回答的详情 (正文/统计/作者/所属问题等) ### 参数: - answer_id: 回答ID (网页 URL .../answer/{answer_id} 中的数字) ### 返回: - 知乎回答详情 # [English] ### Purpose: - Get a single Zhihu answer's detail (content / stats / author / question, etc.) ### Parameters: - answer_id: Answer ID (the numeric id in the page U

- Risk: `read`
- Parameters: `[{"name":"answer_id","type":"string","required":true}]`

## `mcp_dde7b66d96b4386a9a636bfe`

# [中文] ### 用途: - 获取知乎首页热榜 ### 参数: - limit: 每页文章数量 - desktop: 是否为桌面端 ### 返回: - 知乎首页热榜 # [English] ### Purpose: - Get Zhihu Hot List ### Parameters: - limit: Number of articles per page - desktop: Is it a desktop ### Returns: - Zhihu Hot List # [示例/Example] limit = "50" desktop = "true"

- Risk: `read`
- Parameters: `[{"name":"desktop","type":"string","required":false},{"name":"limit","type":"string","required":false}]`

## `mcp_ee39de434753103f14aa833d`

# [中文] ### 用途: - 获取知乎专栏文章互动关系 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏互动关系 # [English] ### Purpose: - Get Zhihu Column Relationship ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Relationship # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_eeb900104f8c6f11c83f955e`

# [中文] ### 用途: - 知乎搜索预测词 ### 参数: - keyword: 搜索关键词 ### 返回: - 知乎搜索预测词 # [English] ### Purpose: - Get Zhihu Search Suggest ### Parameters: - keyword: Search Keywords ### Returns: - Zhihu Search Suggest # [示例/Example] keyword = "deepseek"

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_efa29d20d14aa26f134168dc`

# [中文] ### 用途: - 获取知乎想法 (pin) 的评论区列表 ### 参数: - pin_id: 想法ID - order_by: 排序方式，score=默认排序，ts=最新排序 - limit: 每页评论数量 - offset: 偏移量，翻页从返回里取游标 ### 返回: - 知乎想法评论列表 # [English] ### Purpose: - Get the comments of a Zhihu pin ### Parameters: - pin_id: Pin ID - order_by: Sort, score=default, ts=newest - limit: N

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"pin_id","type":"string","required":true}]`

## `mcp_f25f49c5bd7326aa1205d70d`

# [中文] ### 用途: - 获取知乎搜索预设词 ### 参数: - 无 ### 返回: - 知乎搜索预设词 # [English] ### Purpose: - Get Zhihu Preset Search ### Parameters: - None ### Returns: - Zhihu Preset Search

- Risk: `read`
- Parameters: `[]`

## `mcp_fa2d04fd3be753f6fe936353`

# [中文] ### 用途: - 获取知乎专栏文章详情 ### 参数: - article_id: 文章ID ### 返回: - 知乎专栏文章详情 # [English] ### Purpose: - Get Zhihu Column Article Detail ### Parameters: - article_id: Article ID ### Returns: - Zhihu Column Article Detail # [示例/Example] article_id = "669214677"

- Risk: `read`
- Parameters: `[{"name":"article_id","type":"string","required":true}]`

## `mcp_fc226f10cfa7cf8ae8bdea2c`

# [中文] ### 用途: - 获取知乎首页视频榜 ### 参数: - offset: 偏移量 - limit: 每页视频数量 ### 返回: - 知乎首页视频榜 # [English] ### Purpose: - Get Zhihu Video List ### Parameters: - offset: Offset - limit: Number of videos per page ### Returns: - Zhihu Video List # [示例/Example] offset = "" limit = "12"

- Risk: `read`
- Parameters: `[{"name":"limit","type":"string","required":false},{"name":"offset","type":"string","required":false}]`
