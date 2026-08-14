# 快手 MCP 工具

- 来源平台：`快手`
- 能力分段：`kuaishou`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 38

## `mcp_023bacfb3d28a8ef64fac70c`

# [中文] ### 用途: - 获取 App 首页「精选 / 推荐」频道的推荐作品流。 - 推荐流无游标翻页，想要更多内容直接再次调用即可（结果随推荐策略变化，不保证顺序与去重）。 ### 返回: - 推荐作品流数据 # [English] ### Purpose: - Fetch the "Selection / Recommended" feed of the App home page. - The feed has no cursor pagination; call again for more content. ### Returns: - Recommended feed da

- Risk: `read`
- Parameters: `[]`

## `mcp_035ade8e044b454892abd567`

# [中文] ### 用途: - 关键词搜索图片作品，使用游标分页。 ### 参数: - keyword: 搜索关键词 - pcursor: 分页游标，首次留空，翻页传上一页响应的 pcursor ### 返回: - 图片作品搜索结果 # [English] ### Purpose: - Search image posts by keyword, with cursor pagination. ### Parameters: - keyword: Search keyword - pcursor: Cursor, empty for first page ### Returns: - Ima

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false}]`

## `mcp_0a2c44a36b9a66f76f52614e`

# [中文] ### 用途: - 快手热榜详情 ### 参数: - boardType: 榜单类型 - boardId: 榜单ID - boardType 和 boardId 可以从热榜分类接口中获取。 ### 返回: - 详情数据 # [English] ### Purpose: - Kuaishou hot board detail ### Parameters: - boardType: Board type - boardId: Board ID - boardType and boardId can be obtained from the hot board categories 

- Risk: `read`
- Parameters: `[{"name":"boardId","type":"integer","required":false},{"name":"boardType","type":"integer","required":false}]`

## `mcp_11772fa128e7bd6b1a9e009a`

# [中文] ### 用途: - 获取单个作品数据接口 V1。 ### 参数: - photo_id: 作品ID，作品ID可以从分享链接中提取 - 格式备注：支持纯数字版本的ID，也支持短字符串版本（eID）的ID，两种ID可以混合使用。 ### 返回: - 视频数据 # [English] ### Purpose: - Fetch single video data API V1. ### Parameters: - photo_id: Photo ID, the photo ID can be extracted from the share link - Format note: Sup

- Risk: `read`
- Parameters: `[{"name":"photo_id","type":"string","required":true}]`

## `mcp_1c4589c811770f1bf3f170b8`

# [中文] ### 用途: - 生成分享短连接 ### 参数: - photo_id: 作品ID ### 返回: - 短连接 # [English] ### Purpose: - Generate share short URL ### Parameters: - photo_id: Photo ID ### Returns: - Short URL # [示例/Example] body = { "photo_id": "3xtdqvdnqd3psuc" } # [返回示例/Example Response] ```json { "code": 200, "request_id": "3f

- Risk: `read`
- Parameters: `[{"name":"photo_id","type":"string","required":true}]`

## `mcp_1fff4836778033840843ce64`

获取用户收藏作品/Fetch user collect

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_28810d4f04cd8e23c829bf62`

# [中文] ### 用途: - 获取单个作品二级评论数据 ### 参数: - photo_id: 作品ID - pcursor: 评论游标，第一次请求为空，后续请求使用返回响应中的pcursor值进行翻页。 - root_comment_id: 根评论ID ### 返回: - 评论数据 # [English] ### Purpose: - Fetch single video comment data ### Parameters: - photo_id: Photo ID - pcursor: Comment cursor, empty for the first request, and

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"photo_id","type":"string","required":true},{"name":"root_comment_id","type":"string","required":true}]`

## `mcp_294f462e3f8e5024836c6d62`

获取单个作品数据 V1/Get single video data V1

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":true}]`

## `mcp_2c4534efa02714ffa5d523ba`

获取用户信息/Fetch user info

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_2c863c48ae30a3520053804b`

# [中文] ### 用途: - 获取单个作品评论数据 ### 参数: - photo_id: 作品ID - 格式备注：支持纯数字版本的ID，也支持短字符串版本（eID）的ID，两种ID可以混合使用。 - pcursor: 评论游标，第一次请求为空，后续请求使用返回响应中的pcursor值进行翻页。 ### 返回: - 评论数据 # [English] ### Purpose: - Fetch single video comment data ### Parameters: - photo_id: Photo ID - Format note: Supports both pure digi

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"photo_id","type":"string","required":true}]`

## `mcp_36b350dd699f645cdce67511`

用户视频列表V2/User video list V2

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_4c9e64446c0869f606455e50`

链接获取作品数据/Fetch single video by URL

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_52f4d93dc6599d116495b00e`

# [中文] ### 用途: - 快手综合搜索接口，支持搜索视频、用户等内容，并提供多维度筛选功能。 ### 参数: - keyword: 搜索关键词（必填） - pcursor: 分页游标，首次请求为空，后续使用响应中的pcursor值 - sort_type: 排序方式 - all: 综合排序（默认） - newest: 最新发布 - most_likes: 最多点赞 - publish_time: 发布时间筛选 - all: 全部时间（默认） - one_day: 近一日 - one_week: 近一周 - one_month: 近一月 - duration: 作品时长筛选 - all:

- Risk: `read`
- Parameters: `[{"name":"duration","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false},{"name":"publish_time","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_5634b46a63460cb50a163312`

# [中文] ### 用途: - 获取快手热榜 V1 ### 参数: - 无 ### 返回: - 快手热榜 V1 列表 # [English] ### Purpose: - Fetch Kuaishou Hot List V1 ### Parameters: - None ### Returns: - Kuaishou Hot List V1 # [示例/Example] # [返回示例/Example Response] ```json ```

- Risk: `read`
- Parameters: `[]`

## `mcp_5f3d7689b09ea0321d4e5eb8`

# [中文] ### 用途: - 快手品牌榜单 ### 参数: 获取快手品牌榜单，支持多个子榜单，具体参数如下： - 品牌榜单热门美妆榜对应参数： - subTabId = 0 - subTabName = None - 品牌榜单热门服饰榜对应参数： - subTabId = 131 - subTabName = "服饰" - 品牌榜单热门汽车榜对应参数： - subTabId = 1 - subTabName = "汽车" - 品牌榜单热门游戏榜对应参数： - subTabId = 25 - subTabName = "游戏" - 品牌榜单热门医疗健康榜对应参数： - subTabId = 

- Risk: `read`
- Parameters: `[{"name":"subTabId","type":"integer","required":false},{"name":"subTabName","type":"string","required":false}]`

## `mcp_600e141d38fee1b2065c847f`

# [中文] ### 用途: - 获取单个作品评论数据 ### 参数: - photo_id: 作品ID - pcursor: 评论游标，第一次请求为空，后续请求使用返回响应中的pcursor值进行翻页。 ### 返回: - 评论数据 # [English] ### Purpose: - Fetch single video comment data ### Parameters: - photo_id: Photo ID - pcursor: Comment cursor, empty for the first request, and use the pcursor value in t

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"photo_id","type":"string","required":true}]`

## `mcp_66747721ad0baf7074554785`

# [中文] ### 用途: - 快手单一视频查询接口V2 ### 参数: - photo_id: 作品ID，作品ID可以从作品链接中提取 ### 返回: - 视频数据 # [English] ### Purpose: - Kuaishou single video query API V2 ### Parameters: - photo_id: Photo ID, the photo ID can be extracted from the photo link ### Returns: - Video data # [示例/Example] photo_id = "3xtdqvdnqd3p

- Risk: `read`
- Parameters: `[{"name":"photo_id","type":"string","required":true}]`

## `mcp_689a47eaeaef66e8fea47e9c`

快手批量视频查询接口/Kuaishou batch video query API

- Risk: `read`
- Parameters: `[{"name":"photo_ids","type":"string","required":true}]`

## `mcp_6d1873af0008772b41a0bec0`

# [中文] ### 用途: - 快手购物榜单 ### 参数: 获取快手购物榜单，支持多个子榜单，具体参数如下： - 购物榜单热门主播榜对应参数： - subTabId = 0 - subTabName = None - 购物榜单热销商品榜对应参数： - subTabId = 102 - subTabName = "热销商品" ### 返回: - 榜单数据 # [English] ### Purpose: - Kuaishou shopping top list ### Parameters: Get the Kuaishou shopping top list, support multip

- Risk: `read`
- Parameters: `[{"name":"subTabId","type":"integer","required":false},{"name":"subTabName","type":"string","required":false}]`

## `mcp_6de33258269c1efb2f3a0e30`

根据链接获取单个作品数据/Fetch single video by URL

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":true}]`

## `mcp_6fd1123c73b4f9bf4d7d1705`

# [中文] ### 用途: - 获取快手热榜 V2 ### 参数: - board_type 榜单类型，默认值为 1: 1 - 热榜 2 - 文娱 3 - 社会 4 - 有用 5 - 挑战 6 - 搜索 ### 返回: - 快手热榜 V2 列表 # [English] ### Purpose: - Fetch Kuaishou Hot List V2 ### Parameters: - board_type: Board Type, default is 1: 1 - Hot List 2 - Entertainment 3 - Society 4 - Useful 5 - Challeng

- Risk: `read`
- Parameters: `[{"name":"board_type","type":"string","required":false}]`

## `mcp_7d08c657f78c8106a6cdba9b`

搜索视频V2/Search video V2

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false}]`

## `mcp_91fae84a8033728944083fcf`

# [中文] ### 用途: - 获取音乐榜单（歌曲列表，结果在 musics[]），使用游标分页。 ### 参数: - tab_id: 榜单 ID，100002=热歌榜（默认），100063=π计划推荐榜 - count: 每页数量，默认 20，范围 1-50 - pcursor: 分页游标，首次留空，翻页传上一页响应的 pcursor ### 返回: - 音乐榜单数据 # [English] ### Purpose: - Fetch music ranking (songs in musics[]), with cursor pagination. ### Parameters: - ta

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"pcursor","type":"string","required":false},{"name":"tab_id","type":"integer","required":false}]`

## `mcp_93662ca47b37e4a69b03a3fa`

# [中文] ### 用途: - 关键词搜索话题标签（hashtag），结果在 tags[] 中。可配合 /fetch_tag_feed 翻该标签内容流。 ### 参数: - keyword: 话题关键词 - pcursor: 分页游标，首次留空，翻页传上一页响应的 pcursor ### 返回: - 话题标签搜索结果 # [English] ### Purpose: - Search tags (hashtags) by keyword. Use /fetch_tag_feed to browse a tag's feed. ### Parameters: - keyword: Tag ke

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false}]`

## `mcp_99dcd3dadd1f323f9fc90e00`

获取用户直播回放/Fetch user live replay

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_9c8485bb47a6080f7e377138`

# [中文] ### 用途: - 关键词搜索音乐（歌曲名 / 歌手 / 关键词），使用游标分页。 ### 参数: - keyword: 歌曲名 / 歌手 / 关键词 - pcursor: 分页游标，首次留空，翻页传上一页响应的 pcursor ### 返回: - 音乐搜索结果 # [English] ### Purpose: - Search music by keyword (song / artist), with cursor pagination. ### Parameters: - keyword: Song / artist / keyword - pcursor: Cursor,

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false}]`

## `mcp_a49effef07b71335a5e67191`

# [中文] ### 用途: - 获取某条一级评论（楼主评论）下的二级回复列表，使用游标分页。 ### 参数: - photo_id: 作品 ID（photoId） - root_comment_id: 一级评论 ID（楼主评论的 commentId） - pcursor: 分页游标，首页留空，翻页传上一页响应的 pcursor - count: 每页数量，默认 8，范围 1-20 ### 返回: - 二级回复列表数据 # [English] ### Purpose: - Fetch sub comments (replies) under a root comment, with curso

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"pcursor","type":"string","required":false},{"name":"photo_id","type":"string","required":true},{"name":"root_comment_id","type":"string","required":true}]`

## `mcp_b04c34d2fab630a31aa02b1c`

获取单个用户数据V2/Get single user data V2

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_b832ee69e8a1f3b6f5153330`

# [中文] ### 用途: - 关键词搜索正在直播的直播间，使用游标分页。 ### 参数: - keyword: 搜索关键词 - pcursor: 分页游标，首次留空，翻页传上一页响应的 pcursor ### 返回: - 直播间搜索结果 # [English] ### Purpose: - Search live rooms by keyword, with cursor pagination. ### Parameters: - keyword: Search keyword - pcursor: Cursor, empty for first page ### Returns: - L

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false}]`

## `mcp_c4908a3e0f24facad5c0f019`

# [中文] ### 用途: - 快手热搜人物榜单 ### 返回: - 榜单数据 # [English] ### Purpose: - Kuaishou hot search person board ### Returns: - Board data

- Risk: `read`
- Parameters: `[]`

## `mcp_d0101123fbcc767b51aaa1f4`

搜索用户V2/Search user V2

- Risk: `read`
- Parameters: `[{"name":"fans_sort","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"pcursor","type":"string","required":false},{"name":"user_gender","type":"string","required":false},{"name":"user_relation","type":"string","required":false}]`

## `mcp_d4fbf8f53128cc9c79e19230`

# [中文] ### 用途: - 获取用户直播信息 ### 参数: - user_id: 用户ID，此接口只支持用户ID，不支持用户eid，也就是输入必须要是纯数字ID。 - user_id 可以从获取单个用户数据接口中获取。 ### 返回: - 直播信息 # [English] ### Purpose: - Get user live info ### Parameters: - user_id: User ID, this API only supports user ID, not user eid, that is, the input must be a pure digital I

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_d6da40f85a9553d7e2386f11`

# [中文] ### 用途: - 生成快手分享链接 ### 参数: - shareObjectId: 作品ID ### 返回: - 分享链接 # [English] ### Purpose: - Generate Kuaishou share link ### Parameters: - photo_id: Photo ID ### Returns: - Share link # [示例/Example] shareObjectId = "3xg5wjqdtekbb3u"

- Risk: `read`
- Parameters: `[{"name":"shareObjectId","type":"string","required":true}]`

## `mcp_d83307bd0f8f73c86252caef`

# [中文] ### 用途: - 快手直播榜单 ### 参数: 获取快手直播榜单，支持多个子榜单，具体参数如下： - 直播总榜对应参数： - subTabId = 0 - subTabName = None - 直播音乐榜对应参数： - subTabId = 102 - subTabName = "音乐" - 直播舞蹈榜对应参数： - subTabId = 107 - subTabName = "舞蹈" - 直播颜值榜对应参数： - subTabId = 101 - subTabName = "颜值" - 直播国艺榜对应参数： - subTabId = 105 - subTabName = "

- Risk: `read`
- Parameters: `[{"name":"subTabId","type":"integer","required":false},{"name":"subTabName","type":"string","required":false}]`

## `mcp_db7514ed94078c62b5cace7a`

# [中文] ### 用途: - 快手热榜分类 ### 返回: - 分类数据 # [English] ### Purpose: - Kuaishou hot categories ### Returns: - Categories data

- Risk: `read`
- Parameters: `[]`

## `mcp_e993f2c7f3f730fa8cea99c0`

获取用户ID/Fetch user ID

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_ec8bb5070f9122d6fb491425`

# [中文] ### 用途: - 话题标签聚合页：给定标签，返回标签信息(tagInfo) + 关联作品流(mixFeeds[])。hashtag 页有 4 个子 tab。 ### 参数: - general_tag_id: 标签 ID。话题标签传标签名（如 "清纯甜美少女"）或 search_tag 的数字 id；声音标签传编码串 - tab: hashtag 子 tab —— hot(最热门) / latest(最新发布) / image(图片) / live(直播) - tag_name: 标签显示名，话题标签建议传 - tag_type: 1=话题标签（默认），29=声音/音乐标签 -

- Risk: `read`
- Parameters: `[{"name":"from_photo_id","type":"string","required":false},{"name":"general_tag_id","type":"string","required":true},{"name":"pcursor","type":"string","required":false},{"name":"tab","type":"string","required":false},{"name":"tag_name","type":"string","required":false},{"name":"tag_source","type":"integer","required":false},{"name":"tag_type","type":"integer","required":false}]`

## `mcp_edc6092dbf7083d0666f065e`

# [中文] ### 用途: - 获取用户热门作品数据 ### 参数: - user_id: 用户ID，此接口只支持用户ID，不支持用户eid，也就是输入必须要是纯数字ID。 - user_id 可以从获取单个用户数据接口中获取。 - pcursor: 作品游标，第一次请求为空，后续请求使用返回响应中的pcursor值进行翻页。 ### 返回: - 作品数据 # [English] ### Purpose: - Get user hot post data ### Parameters: - user_id: User ID, this API only supports user ID, n

- Risk: `read`
- Parameters: `[{"name":"pcursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`
