# 微博 MCP 工具

- 来源平台：`微博`
- 能力分段：`weibo`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 64

## `mcp_040189f5a1770444644efc79`

# [中文] ### 用途: - 快速获取微博热搜前10条。 ### 参数: - 无需额外参数 ### 返回: - 热搜词条列表，包含关键词、热度值、排名等 ### 注意: - 只返回前10条热搜 - 热搜更新频繁，建议缓存2-5分钟 - 如需完整热搜，使用fetch_hot_search_summary # [English] ### Purpose: - Quickly get top 10 Weibo hot search items. ### Parameters: - No additional parameters required ### Return: - Hot search

- Risk: `read`
- Parameters: `[]`

## `mcp_05e58261166ee486718942dd`

# [中文] ### 用途: - 获取指定用户的相册内容。 ### 参数: - uid: 用户ID（必填） - since_id: 翻页游标，初次请求不传，后续请求使用返回的since_id值 ### 返回: - 用户相册数据，包含图片列表等信息 ### 注意: - 如果用户设置了隐私保护，可能无法获取相册 - 使用游标翻页（since_id），不使用页码翻页 # [English] ### Purpose: - Get the album content of specified user. ### Parameters: - uid: User ID (required) - since_

- Risk: `read`
- Parameters: `[{"name":"since_id","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_076223d61c23c1f6da697a9c`

# [中文] ### 用途: - 获取指定频道的热门趋势内容 ### 参数: - containerid: 频道容器ID，可从 fetch_config_list 接口获取 - page: 页码，默认1 ### 返回: - 热门微博列表 ### 说明: - containerid 示例: 102803_ctg1_8999_-_ctg1_8999_home - 可通过 fetch_config_list 获取所有可用的 containerid # [English] ### Purpose: - Get trending content of the specified channel ###

- Risk: `read`
- Parameters: `[{"name":"containerid","type":"string","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_0c7a25d43a5e3cf52804adb8`

# [中文] ### 用途: - 通过微博AI智能搜索获取搜索结果。 ### 参数: - query: 搜索关键词（必填，建议使用话题格式#话题名#） ### 返回: - AI搜索结果，包含推荐内容、相关话题等 ### 注意: - AI搜索结果会根据用户行为进行个性化调整 # [English] ### Purpose: - Get search results through Weibo AI intelligent search. ### Parameters: - query: Search keyword (required, recommend using topic format

- Risk: `read`
- Parameters: `[{"name":"query","type":"string","required":true}]`

## `mcp_133be6b7c83852ffdb689080`

实时搜索/Weibo Realtime Search

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_212ae5401631aafff8189536`

# [中文] ### 用途: - 获取微博社会榜单数据（时事新闻、社会热点、民生话题等）。 ### 参数: - 无需额外参数 ### 返回: - 社会话题列表，包含话题、热度值、排名、分类等 ### 注意: - 社会热点变化较快，建议缓存2-5分钟 # [English] ### Purpose: - Get Weibo social ranking data (current affairs, social hotspots, livelihood topics). ### Parameters: - No additional parameters required ### Return:

- Risk: `read`
- Parameters: `[]`

## `mcp_2649352b37e9afff518107c3`

# [中文] ### 用途: - 获取指定评论的回复（子评论）列表。 ### 参数: - id: 主评论ID（必填） - count: 子评论数量（默认10） - max_id: 翻页游标，首次请求传空，后续请求使用返回的max_id值 ### 返回: - 子评论列表数据，包含回复内容、回复者信息、点赞数等 - 包含 max_id 字段用于翻页 ### 注意: - 与fetch_post_comments的区别：本接口获取的是评论的回复，而非微博的主评论 # [English] ### Purpose: - Get the reply (sub-comment) list of a speci

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"id","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`

## `mcp_2b42d526e3c3601bbba1dd57`

# [中文] ### 用途: - 获取指定用户参与的超话列表。 ### 参数: - uid: 用户ID（必填） - page: 页码，从1开始（默认1） ### 返回: - 用户参与的超话列表数据 ### 注意: - 如果用户设置了隐私保护，可能无法获取超话列表 # [English] ### Purpose: - Get the super topics list that user participated in. ### Parameters: - uid: User ID (required) - page: Page number, starts from 1 (default 1)

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_3110125ce48447f26b73e0e3`

# [中文] ### 用途: - 获取指定用户的关注列表（该用户关注了谁）。 ### 参数: - uid: 用户ID（必填） - page: 页码，从0开始（默认0） ### 返回: - 关注用户列表，包含用户名、头像、简介、粉丝数等 ### 注意: - 关注列表受用户隐私设置影响 - page参数从0开始，而不是1 - 与fetch_user_fans的区别：本接口获取用户关注了谁，fetch_user_fans获取谁关注了该用户 # [English] ### Purpose: - Get the following list of specified user (who the user

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_35c5e4b44549f40c06374db8`

# [中文] ### 用途: - 获取微博的评论列表（热门评论流） ### 参数: - post_id: 微博ID - mid: 微博MID - max_id: 翻页用的ID，从上一页返回结果中获取 - max_id_type: max_id类型，默认0 ### 返回: - 评论列表 # [English] ### Purpose: - Get Weibo post comments (hot comments flow) ### Parameters: - post_id: Post ID - mid: Post MID - max_id: Pagination ID from previo

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"string","required":false},{"name":"max_id_type","type":"integer","required":false},{"name":"mid","type":"string","required":true},{"name":"post_id","type":"string","required":true}]`

## `mcp_36467d5550e6db80336cff1f`

# [中文] ### 用途: - 获取指定微博的详细信息。 ### 参数: - status_id: 微博ID（必填） ### 返回: - 微博详细数据，包含完整文本、图片、视频、点赞数、评论数、转发数等 ### 注意: - 如果微博已被删除或设置为私密，可能无法获取 # [English] ### Purpose: - Get detailed information of specified post. ### Parameters: - status_id: Post ID (required) ### Return: - Post detailed data, including fu

- Risk: `read`
- Parameters: `[{"name":"status_id","type":"string","required":true}]`

## `mcp_378a005c731c15bfbbcebd87`

# [中文] ### 用途: - 获取微博平台各种类型的热门榜单内容。 ### 参数: - ranking_type: 榜单类型（必填） - hour: 小时榜 - yesterday: 昨日榜 - day_before: 前日榜 - week: 周榜 - male: 男榜 - female: 女榜 - max_id: 翻页游标，首次请求传"0" - count: 获取数量（默认10） ### 返回: - 热门微博列表，包含微博内容、作者信息、互动数据等 ### 注意: - 不同榜单更新频率不同：小时榜实时性最强，周榜影响力较大 # [English] ### Purpose: - Get v

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"max_id","type":"string","required":false},{"name":"ranking_type","type":"string","required":true},{"name":"since_id","type":"string","required":false}]`

## `mcp_3bf73780e63a49ef9f67c04e`

# [中文] ### 用途: - 获取指定收藏夹的详细内容，包括视频列表。 ### 参数: - cid: 收藏夹ID（必填，从fetch_user_video_collection_list获取） - cursor: 分页游标，首次请求传空，后续使用返回的cursor - tab_code: 排序方式（0=默认，1=最热，2=最新） ### 返回: - 收藏夹信息和视频列表，包含视频标题、封面、时长、播放数等 - 包含 next_cursor 和 has_more 字段用于翻页 ### 注意: - 不同排序方式的cursor不通用，切换排序需重新开始分页 # [English] ### Pur

- Risk: `read`
- Parameters: `[{"name":"cid","type":"string","required":true},{"name":"cursor","type":"string","required":false},{"name":"tab_code","type":"integer","required":false}]`

## `mcp_49e62a5692c720d8529d840b`

# [中文] ### 用途: - 根据关键词获取微博推荐的相似搜索词。 ### 参数: - keyword: 搜索关键词（必填，支持话题标签格式如#话题名#） ### 返回: - 相似搜索词列表，包含推荐词、搜索次数等 ### 注意: - 相似词推荐相对稳定，可缓存15-30分钟 # [English] ### Purpose: - Get similar search word recommendations based on keyword. ### Parameters: - keyword: Search keyword (required, supports topic tag fo

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_4f31e7ce454f26ccdd11c829`

# [中文] ### 用途: - 获取微博热搜榜，支持多个分类。 ### 参数: - category: 热搜分类 - mineband: 我的热搜 - realtimehot: 实时热搜（默认） - social: 社会热搜 - fun: 文娱热搜 - technologynav: 科技热搜 - lifenav: 生活热搜 - region: 同城热搜（需配合 region_name 指定城市） - sportnav: 体育热搜 - gamenav: ACG热搜 - page: 页码，从1开始（默认1） - count: 每页数量，默认20，最大50 - region_name: 同城热搜城

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"region_name","type":"string","required":false}]`

## `mcp_528e7ede56000ad7468212ef`

# [中文] ### 用途: - 获取微博用户的基本信息（轻量级接口）。 ### 参数: - uid: 用户ID（必填） ### 返回: - 用户基本信息，包括用户ID、用户名、头像、简介、认证信息 ### 注意: - 与fetch_user_info相比，本接口返回数据更少，响应更快 - 适合批量用户信息获取和用户卡片展示 # [English] ### Purpose: - Get basic information of Weibo users (lightweight API). ### Parameters: - uid: User ID (required) ### Return:

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_549f08f4ddadf217d08331c5`

# [中文] ### 用途: - 获取微博短视频精选页的Feed流。 ### 参数: - page: 页码，首页不传或传空，第二页传"2"，依次递增 ### 返回: - 短视频精选Feed流数据，包含视频列表等 ### 注意: - 每页返回约20条视频 # [English] ### Purpose: - Get the featured video feed from Weibo video section. ### Parameters: - page: Page number, don't pass for first page, pass "2" for second page, an

- Risk: `read`
- Parameters: `[{"name":"page","type":"any","required":false}]`

## `mcp_5f9b8874f0ae98ce5e203d5c`

# [中文] ### 用途: - 获取微博实时热搜榜单数据。 ### 参数: - 无需额外参数 ### 返回: - 热搜数据，包含realtime（实时热搜）、hotgov等多个板块 ### 注意: - 热搜更新频繁，建议缓存2-5分钟 # [English] ### Purpose: - Get Weibo real-time hot search ranking data. ### Parameters: - No additional parameters required ### Return: - Hot search data, including realtime (real-t

- Risk: `read`
- Parameters: `[]`

## `mcp_61142bd54c13d97a015c4405`

# [中文] ### 用途: - 获取微博用户的详细信息，包括昵称、头像、简介、关注数、粉丝数等。 ### 参数: - uid: 用户ID（可选，与custom二选一） - custom: 自定义用户名（可选，与uid二选一） ### 返回: - 用户详细信息数据 ### 注意: - uid和custom参数至少需要提供一个 - 如果同时提供，优先使用uid - 建议优先使用uid参数 # [English] ### Purpose: - Get detailed information of Weibo users, including nickname, avatar, bio, foll

- Risk: `read`
- Parameters: `[{"name":"custom","type":"any","required":false},{"name":"uid","type":"any","required":false}]`

## `mcp_623bac152c9cf9c6ee652601`

# [中文] ### 用途: - 获取指定用户的粉丝列表（谁关注了该用户）。 ### 参数: - uid: 用户ID（必填） - page: 页码，从0开始（默认0） ### 返回: - 粉丝用户列表，包含用户名、头像、简介、粉丝数等 ### 注意: - 粉丝列表受用户隐私设置影响 - page参数从0开始，而不是1 - 与fetch_user_following的区别：本接口获取谁关注了该用户，fetch_user_following获取用户关注了谁 # [English] ### Purpose: - Get the fans list of specified user (who fol

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_66dc532ca81ac0a8c95d5b91`

# [中文] ### 用途: - 获取与关键词相关的内容扩展（相关问题、博主推荐、参考博文等）。 ### 参数: - keyword: 搜索关键词（必填，建议使用话题格式#话题名#） ### 返回: - HTML格式的扩展内容，包含相关问题、博主推荐、参考博文等 ### 注意: - 返回内容为HTML格式，需要进行HTML解析处理 - HTML结构可能会发生变化，需要做好容错处理 # [English] ### Purpose: - Get content extensions related to keyword (related questions, blogger recommendat

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true}]`

## `mcp_6718930606aa08518a90e24e`

# [中文] ### 用途: - 获取指定用户主页的动态流。 ### 参数: - uid: 用户ID（必填） - since_id: 翻页游标，初次请求不传，后续请求使用返回的since_id值 ### 返回: - 用户主页动态数据 ### 注意: - 如果用户设置了隐私保护，可能无法获取动态 - 使用游标翻页（since_id），不使用页码翻页 # [English] ### Purpose: - Get the profile feed of specified user. ### Parameters: - uid: User ID (required) - since_id: Pagi

- Risk: `read`
- Parameters: `[{"name":"since_id","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_6a2792411a6429ef08778e76`

# [中文] ### 用途: - 获取指定用户发布的微博列表，支持分页和多种数据详细程度。 ### 参数: - uid: 用户ID（必填） - page: 页码，从1开始（默认1） - feature: 数据特征值（默认0） - 0: 返回10条基础数据 - 1: 返回20条扩展数据 - 2: 返回20条图片相关数据 - 3: 返回20条完整数据 - since_id: 翻页标识，用于获取下一页数据 ### 返回: - 微博列表数据，包含微博内容、图片、视频等信息 - 包含 since_id 字段用于翻页 ### 注意: - feature=0性能最佳，feature=3数据最全 # [Eng

- Risk: `read`
- Parameters: `[{"name":"feature","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"since_id","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_6d762ac722aa41376929a4c9`

# [中文] ### 用途: - 获取指定微博的详细信息，包括内容、作者、互动数据等。 ### 参数: - id: 微博ID（必填） - is_get_long_text: 是否获取长微博全文（默认"true"） ### 返回: - 微博详细数据，包含完整文本、图片、视频、点赞数、评论数、转发数等 # [English] ### Purpose: - Get detailed information of a specific Weibo post, including content, author, interaction data. ### Parameters: - id: Weibo

- Risk: `read`
- Parameters: `[{"name":"id","type":"string","required":true},{"name":"is_get_long_text","type":"string","required":false}]`

## `mcp_6dd2b53445b702b94780d1b8`

# [中文] ### 用途: - 获取微博用户信息 ### 参数: - uid: 用户ID ### 返回: - 用户信息 # [English] ### Purpose: - Get Weibo user information ### Parameters: - uid: User ID ### Return: - User information # [示例/Example] uid = "2992978081"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_72a7484971327403a76762ca`

# [中文] ### 用途: - 获取指定用户发布的所有视频内容（瀑布流展示）。 ### 参数: - uid: 用户ID（必填） - cursor: 翻页游标，初次请求传"0"，后续请求使用返回的next_cursor值 ### 返回: - 视频列表数据，包含视频标题、封面、播放量等信息 - 包含 next_cursor 和 has_more 字段用于翻页 ### 注意: - 与收藏夹接口的区别：本接口获取用户发布的视频，收藏夹接口获取用户收藏的视频 # [English] ### Purpose: - Get all videos published by specified user (w

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_7975b2bc34f65ae879fc9374`

# [中文] ### 用途: - 使用微博AI智搜功能进行搜索，返回AI增强的搜索结果。 ### 参数: - query: 搜索关键词（必填） - page: 页码，从1开始（默认1） ### 返回: - AI智搜结果，包含AI增强的搜索内容 ### 注意: - 此接口为AI增强搜索，返回结果经过AI处理 # [English] ### Purpose: - Use Weibo AI Smart Search to search, return AI-enhanced search results. ### Parameters: - query: Search keyword (requir

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_79c0d30d3e4a60a97f8e8f37`

# [中文] ### 用途: - 获取微博平台的所有分组信息，包括默认分组和用户自定义分组。 ### 参数: - 无需额外参数 ### 返回: - 分组列表，包含分组ID、名称、容器ID等 ### 注意: - 返回的gid和containerid可用于时间轴接口的参数 - 分组信息变化不频繁，建议缓存 # [English] ### Purpose: - Get all group information on Weibo platform, including default and user-defined groups. ### Parameters: - No additional p

- Risk: `read`
- Parameters: `[]`

## `mcp_7f4ee1cbb0d58752357a43fc`

# [中文] ### 用途: - 搜索微博图片内容，按微博ID聚合多图。 ### 参数: - query: 搜索关键词（必填） - page: 页码（默认1） ### 返回: - 图片列表，包含微博ID、缩略图、原图链接、作者信息、图片数量 ### 注意: - 缩略图会自动转换为原图链接 # [English] ### Purpose: - Search Weibo picture content, aggregated by weibo ID. ### Parameters: - query: Search keyword (required) - page: Page number (de

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_7fb89bbe6c1a2fbf187fb53a`

# [中文] ### 用途: - 获取微博完整热搜榜单（50条）。 ### 参数: - 无需额外参数 ### 返回: - 完整热搜列表，包含排名、关键词、标签（热点/沸点/官宣/新）、热度值 ### 注意: - 与fetch_hot_search_index的区别：本接口返回50条，fetch_hot_search_index返回10条 - rank为0表示置顶内容 - 建议缓存5-10分钟 # [English] ### Purpose: - Get complete Weibo hot search ranking (50 items). ### Parameters: - No addi

- Risk: `read`
- Parameters: `[]`

## `mcp_8203b5dfa66ee04bea338c80`

# [中文] ### 用途: - 获取微博热搜榜的所有可用分类列表。 ### 参数: - 无 ### 返回: - 热搜分类列表数据，包含各分类名称和标识 ### 注意: - 返回的分类可用于 fetch_hot_search 接口的 category 参数 # [English] ### Purpose: - Get all available hot search category list from Weibo. ### Parameters: - None ### Return: - Hot search category list data, including category na

- Risk: `read`
- Parameters: `[]`

## `mcp_83115fc8d7a83dcfe2eb9cf6`

# [中文] ### 用途: - 搜索微博内容 ### 参数: - **keyword**: 搜索关键词 - 普通搜索: `游戏`、`新闻` - 话题搜索: `#话题名#`（如 `#大冰建议女生不要找老登#`） - **page**: 页码 - 从 **1** 开始递增: 1, 2, 3, 4... - 每页约返回 10-20 条结果 - **不是** 1, 10, 20 这种偏移量模式 - **search_type**: 搜索类型 - **1**: 综合（默认，按相关性排序） - **61**: 实时（按时间排序，最新优先） - **3**: 用户（搜索用户账号） - **60**: 热门

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_type","type":"string","required":false},{"name":"time_scope","type":"string","required":false}]`

## `mcp_86d59883028c1d69a3243638`

# [中文] ### 用途: - 获取微博主页的推荐时间轴内容，基于用户兴趣展示个性化推荐。 ### 参数: - refresh: 刷新类型（0=正常刷新，1=强制刷新） - group_id: 分组ID（可通过fetch_all_groups获取） - containerid: 容器ID（通常与group_id相同） - extparam: 扩展参数（默认"discover|new_feed"） - max_id: 翻页游标，首次请求传"0" - count: 获取数量（默认10，建议5-20） ### 返回: - 推荐微博列表，包含微博内容、作者信息、互动数据等 - 包含 max_id 字

- Risk: `read`
- Parameters: `[{"name":"containerid","type":"string","required":false},{"name":"count","type":"integer","required":false},{"name":"extparam","type":"string","required":false},{"name":"group_id","type":"string","required":false},{"name":"max_id","type":"string","required":false},{"name":"refresh","type":"integer","required":false}]`

## `mcp_8c697be3eb5a9f15e1441b0a`

# [中文] ### 用途: - 获取指定用户发布的视频列表（瀑布流展示）。 ### 参数: - uid: 用户ID（必填） - since_id: 翻页游标，初次请求不传，后续请求使用返回的since_id值 ### 返回: - 视频列表数据，包含视频标题、封面、播放量等信息 - 包含 moreInfo.params.since_id 字段用于翻页 ### 注意: - 只返回包含视频的微博 - 使用游标翻页（since_id），不使用页码翻页 # [English] ### Purpose: - Get the video list published by specified user (

- Risk: `read`
- Parameters: `[{"name":"since_id","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_8d994a33e625086986eb8b05`

# [中文] ### 用途: - 获取微博文娱榜单数据（娱乐圈、影视、综艺等）。 ### 参数: - 无需额外参数 ### 返回: - 文娱话题列表，包含话题、热度值、排名、分类等 ### 注意: - 建议缓存5-10分钟 # [English] ### Purpose: - Get Weibo entertainment ranking data (entertainment, film & TV, variety shows). ### Parameters: - No additional parameters required ### Return: - Entertainment t

- Risk: `read`
- Parameters: `[]`

## `mcp_8fd93d4fac42348c547a9c3c`

# [中文] ### 用途: - 在指定用户的微博中搜索包含特定关键词的内容。 ### 参数: - uid: 用户ID（必填） - q: 搜索关键词（非必填，空字符串表示搜索全部内容） - page: 页码，从1开始（默认1） - starttime: 开始时间戳（可选，Unix时间戳格式） - endtime: 结束时间戳（可选，Unix时间戳格式） - hasori: 是否包含原创（默认1包含） - hasret: 是否包含转发（默认1包含） - hastext: 是否包含文字（默认1包含） - haspic: 是否包含图片（默认1包含） - hasvideo: 是否包含视频（默认1包含）

- Risk: `read`
- Parameters: `[{"name":"endtime","type":"any","required":false},{"name":"hasmusic","type":"integer","required":false},{"name":"hasori","type":"integer","required":false},{"name":"haspic","type":"integer","required":false},{"name":"hasret","type":"integer","required":false},{"name":"hastext","type":"integer","required":false},{"name":"hasvideo","type":"integer","required":false},{"name":"page","type":"integer","required":false},{"name":"q","type":"string","required":false},{"name":"starttime","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_94c5874fdbae7170a35226d0`

# [中文] ### 用途: - 获取搜索页的热搜词列表（搜索建议/热门话题） ### 返回: - 搜索热词列表 ### 说明: - 这是搜索页面展示的热门搜索词 - 通常用于搜索框下方的热门推荐 - 与 `fetch_hot_search` 不同，此接口返回的是搜索建议词 # [English] ### Purpose: - Get search page hot topics list (search suggestions/trending topics) ### Return: - Search hot topics list ### Note: - These are hot sea

- Risk: `read`
- Parameters: `[]`

## `mcp_971b74996068857f6135b081`

# [中文] ### 用途: - 获取微博生活榜单数据（美食、旅游、健康、时尚等）。 ### 参数: - 无需额外参数 ### 返回: - 生活话题列表，包含话题、热度值、排名、分类等 ### 注意: - 建议缓存5-10分钟 # [English] ### Purpose: - Get Weibo life ranking data (food, travel, health, fashion). ### Parameters: - No additional parameters required ### Return: - Life topic list, including topic

- Risk: `read`
- Parameters: `[]`

## `mcp_973ac5feeedeb2c133c7c90e`

# [中文] ### 用途: - 获取指定用户的视频收藏夹列表。 ### 参数: - uid: 用户ID（必填） ### 返回: - 收藏夹列表，包含收藏夹ID、名称、描述、视频数量等 ### 注意: - 收藏夹列表受用户隐私设置影响 - 部分用户可能没有创建视频收藏夹 # [English] ### Purpose: - Get video collection list of specified user. ### Parameters: - uid: User ID (required) ### Return: - Collection list, including collectio

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_97cdab9e7017e9ab7cf435c9`

# [中文] ### 用途: - 搜索微博用户，支持多种筛选条件。 ### 参数: - query: 搜索关键词（可选） - page: 页码（默认1） - region: 地区编码，从/fetch_city_list获取（可选） - auth: 认证类型 org_vip/per_vip/ord（可选） - gender: 性别 man/women（可选） - age: 年龄段 18y/22y/29y/39y/40y（可选） - nickname: 昵称筛选（可选） - tag: 标签筛选（可选） - school: 学校筛选（可选） - work: 公司筛选（可选） ### 返回: - 用户

- Risk: `read`
- Parameters: `[{"name":"age","type":"any","required":false},{"name":"auth","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"nickname","type":"any","required":false},{"name":"page","type":"integer","required":false},{"name":"query","type":"any","required":false},{"name":"region","type":"any","required":false},{"name":"school","type":"any","required":false},{"name":"tag","type":"any","required":false},{"name":"work","type":"any","required":false}]`

## `mcp_9b6b1e8a776147a62edd017a`

# [中文] ### 用途: - 获取微博用户的详细信息，比基本信息更加完整，包括认证信息、标签、等级等。 ### 参数: - uid: 用户ID（必填） ### 返回: - 用户详细信息数据 ### 注意: - 如果用户设置了隐私保护，部分信息可能无法获取 # [English] ### Purpose: - Get detailed information of Weibo users, more complete than basic info, including verification info, tags, level, etc. ### Parameters: - uid: U

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_9b9c2ca2797ef22982402002`

# [中文] ### 用途: - 获取指定用户发布的音频列表。 ### 参数: - uid: 用户ID（必填） - since_id: 翻页游标，初次请求不传，后续请求使用返回的since_id值 ### 返回: - 用户音频列表数据 ### 注意: - 如果用户没有发布过音频，返回空列表 - 使用游标翻页（since_id），不使用页码翻页 # [English] ### Purpose: - Get the audio list published by specified user. ### Parameters: - uid: User ID (required) - since_id

- Risk: `read`
- Parameters: `[{"name":"since_id","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_9bb830a9a380dc23188c12dd`

# [中文] ### 用途: - 在微博中进行综合搜索，返回相关内容。支持多种搜索类型。 ### 参数: - query: 搜索关键词（必填） - page: 页码，从1开始（默认1） - search_type: 搜索类型 - 1: 综合（默认） - 61: 实时 - 3: 用户 - 64: 视频 - 63: 图片 - 62: 关注 - 60: 热门 - 21: 全网 - 38: 话题 - 98: 超话 - 92: 地点 - 97: 商品 ### 返回: - 搜索结果列表，包含微博内容、作者信息、图片、视频等 ### 注意: - 搜索结果按相关度排序 - 仅使用 page 参数进行翻页 #

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true},{"name":"search_type","type":"integer","required":false}]`

## `mcp_9d0b3b3b3032712eb56c9c1b`

# [中文] ### 用途: - 获取指定用户发布的原创微博列表（排除转发内容）。 ### 参数: - uid: 用户ID（必填） - page: 页码，从1开始（默认1） - since_id: 翻页标识（第一页必须从fetch_user_posts接口获取） ### 返回: - 原创微博列表，包含微博内容、图片、视频、互动数据等 ### 注意: - 与fetch_user_posts的区别：本接口只返回原创微博，排除转发 - since_id必须先调用fetch_user_posts获取，第一页必传，后续页面不传 # [English] ### Purpose: - Get origina

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"since_id","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_9ecac3965349acf34e7ad446`

# [中文] ### 用途: - 根据频道名称获取热门内容（便捷接口） ### 参数: - channel_name: 频道名称，如 "热门"、"榜单"、"社会" 等，不传则使用默认频道 - page: 页码，默认1 ### 返回: - 热门微博列表 ### 说明: - 此接口会自动调用 fetch_config_list 获取频道配置，然后获取对应频道的热门内容 - 如果指定的频道名称不存在，会返回错误信息 - 可用频道：热门、榜单、同城、社会、科技、明星、电影、音乐、数码、汽车、游戏 # [English] ### Purpose: - Get trending content by ch

- Risk: `read`
- Parameters: `[{"name":"channel_name","type":"string","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_9ee079b07c0ed9cd1619c5b4`

# [中文] ### 用途: - 获取微博用户的基本信息，包括昵称、头像、简介、关注数、粉丝数等。 ### 参数: - uid: 用户ID（必填） ### 返回: - 用户基本信息数据 ### 注意: - 如果用户设置了隐私保护，部分信息可能无法获取 # [English] ### Purpose: - Get basic information of Weibo users, including nickname, avatar, bio, following count, followers count, etc. ### Parameters: - uid: User ID (requi

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_b084d4e29147e6519cdce1e2`

# [中文] ### 用途: - 获取指定用户发布的文章列表。 ### 参数: - uid: 用户ID（必填） - since_id: 翻页游标，初次请求不传，后续请求使用返回的since_id值 ### 返回: - 用户文章列表数据 ### 注意: - 如果用户没有发布过文章，返回空列表 - 使用游标翻页（since_id），不使用页码翻页 # [English] ### Purpose: - Get the article list published by specified user. ### Parameters: - uid: User ID (required) - since_

- Risk: `read`
- Parameters: `[{"name":"since_id","type":"any","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_b0d56b9142e1bbb06298d015`

# [中文] ### 用途: - 搜索微博话题，获取话题名称、封面、讨论量、阅读量。 ### 参数: - query: 搜索关键词（必填） - page: 页码（默认1） ### 返回: - 话题列表，包含话题名、封面图、讨论数、阅读数 ### 注意: - 数量单位（万/亿）已转换为整数 # [English] ### Purpose: - Search Weibo topics, get topic name, cover, discussion count, read count. ### Parameters: - query: Search keyword (required) - p

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_b4c058fe2fd8df8ba94b0e97`

# [中文] ### 用途: - 检查指定微博是否允许用户在评论时上传图片。 ### 参数: - id: 微博ID（必填） ### 返回: - result: true表示允许带图评论，false表示不允许 ### 注意: - 不同微博的图片评论权限可能不同 # [English] ### Purpose: - Check if a specific Weibo post allows image comments. ### Parameters: - id: Weibo post ID (required) ### Return: - result: true means image com

- Risk: `read`
- Parameters: `[{"name":"id","type":"string","required":true}]`

## `mcp_b8a531924181514e6e98e99e`

# [中文] ### 用途: - 获取微博首页推荐Feed流。 ### 参数: - page: 页码，首页不传或传空，第二页传"2"，依次递增 - count: 每页数量，默认15，最大50 ### 返回: - 首页推荐Feed流数据 ### 注意: - 推荐内容基于热门话题和热点事件 # [English] ### Purpose: - Get the home recommend feed from Weibo. ### Parameters: - page: Page number, don't pass for first page, pass "2" for second page,

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"page","type":"any","required":false}]`

## `mcp_c1c2d6c9fee75dbb0cf37914`

# [中文] ### 用途: - 微博高级搜索，支持多维度筛选。 ### 参数: - q: 搜索关键词（必填） - search_type: 搜索类型（all/hot/original/verified/media/viewpoint） - include_type: 包含类型（all/pic/video/music/link） - timescope: 时间范围（格式: custom:开始日期:结束日期，如 custom:2025-09-01-0:2025-09-08-23） - page: 页码（默认1） ### 返回: - 搜索结果列表，包含微博内容、作者信息、图片、视频、互动数据等 #

- Risk: `read`
- Parameters: `[{"name":"include_type","type":"any","required":false},{"name":"page","type":"integer","required":false},{"name":"q","type":"string","required":true},{"name":"search_type","type":"any","required":false},{"name":"timescope","type":"any","required":false}]`

## `mcp_c3c1b3f2e7a973bb31dd3c67`

# [中文] ### 用途: - 获取地区省市映射数据，用于用户搜索等接口的地区筛选参数。 ### 参数: - normalized: 是否返回标准化结构（默认True） ### 返回: - 省市映射数据，用于fetch_user_search等接口的region参数 ### 注意: - 返回的编码格式为 custom:省代码:市代码，如 custom:11:1 # [English] ### Purpose: - Get region city mapping data for region filter parameter in user search APIs. ### Paramete

- Risk: `read`
- Parameters: `[{"name":"normalized","type":"boolean","required":false}]`

## `mcp_cccc2910a20a146f7af1a1d8`

# [中文] ### 用途: - 获取指定微博的一级评论列表。 ### 参数: - id: 微博ID（必填） - count: 评论数量（默认10） - max_id: 翻页游标，首次请求传空，后续请求使用返回的max_id值 ### 返回: - 评论列表数据，包含评论内容、评论者信息、点赞数等 - 包含 max_id 字段用于翻页 ### 注意: - 当没有更多评论时，max_id 为空 # [English] ### Purpose: - Get the first-level comment list of specified post. ### Parameters: - id: We

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"id","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`

## `mcp_cef2f01ef6a3813300446214`

# [中文] ### 用途: - 获取指定微博的一级评论列表（也适用于视频评论）。 ### 参数: - status_id: 微博ID或视频ID（必填） - max_id: 翻页游标，首次请求不传，后续请求使用返回的max_id值 - max_id json path: $.data.moreInfo.params.max_id - sort_type: 评论排序类型 - 0: 按热度排序（默认） - 1: 按时间排序 ### 返回: - 评论列表数据，包含评论内容、评论者信息、点赞数等 - 包含 max_id 字段用于翻页 ### 注意: - 每次返回约20条评论 - 当没有更多评论时，ma

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"any","required":false},{"name":"sort_type","type":"string","required":false},{"name":"status_id","type":"string","required":true}]`

## `mcp_d3336069972dab55bec2181c`

# [中文] ### 用途: - 获取微博移动端所有频道的配置信息 ### 返回: - 频道列表，包含频道名称和 containerid ### 说明: - 返回的 containerid 可用于 fetch_trend_top 接口获取对应频道的热门内容 # [English] ### Purpose: - Get all channel configuration information from Weibo mobile ### Return: - Channel list, including channel name and containerid ### Note: - The r

- Risk: `read`
- Parameters: `[]`

## `mcp_d74f363086e2d868fbd5107b`

# [中文] ### 用途: - 获取评论的子评论（回复） ### 参数: - cid: 根评论ID（从 fetch_post_comments 返回的评论中获取） - max_id: 翻页用的ID，默认0为第一页，从上一页返回结果中获取下一页的max_id ### 返回: - 子评论列表 # [English] ### Purpose: - Get comment replies (sub-comments) ### Parameters: - cid: Root comment ID (from fetch_post_comments response) - max_id: Paginat

- Risk: `read`
- Parameters: `[{"name":"cid","type":"string","required":true},{"name":"max_id","type":"string","required":false}]`

## `mcp_d791d96ea9408a40bb605794`

# [中文] ### 用途: - 获取指定微博的点赞列表（也适用于视频点赞）。 ### 参数: - status_id: 微博ID或视频ID（必填） - attitude_type: 点赞类型筛选 - 0: 全部（默认） - 1: 点赞 - 2: 开心 - 3: 惊讶 - 4: 伤心 - 5: 愤怒 - 6: 打赏 - 8: 抱抱 ### 返回: - 点赞列表数据，包含点赞者信息、点赞类型等 ### 注意: - 每次返回约50条点赞记录 # [English] ### Purpose: - Get the like list of specified post (also works for

- Risk: `read`
- Parameters: `[{"name":"attitude_type","type":"string","required":false},{"name":"status_id","type":"string","required":true}]`

## `mcp_debadf3726f0ead298e58e10`

# [中文] ### 用途: - 获取微博用户的微博列表 ### 参数: - uid: 用户ID - page: 页码，默认1 - since_id: 翻页用的ID，从上一页返回结果中获取 ### 返回: - 用户微博列表 # [English] ### Purpose: - Get Weibo user's posts list ### Parameters: - uid: User ID - page: Page number, default 1 - since_id: Pagination ID from previous page result ### Return: - User

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"since_id","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_e2dc5a3f8812e3e5562d17a2`

# [中文] ### 用途: - 获取指定微博的转发列表（也适用于视频转发）。 ### 参数: - status_id: 微博ID或视频ID（必填） - max_id: 翻页游标，首次请求不传，后续请求使用返回的max_id值 ### 返回: - 转发列表数据，包含转发内容、转发者信息等 - 包含 max_id 字段用于翻页 ### 注意: - 每次返回约20条转发 - 当没有更多转发时，max_id 为空或相同 # [English] ### Purpose: - Get the repost list of specified post (also works for video repo

- Risk: `read`
- Parameters: `[{"name":"max_id","type":"any","required":false},{"name":"status_id","type":"string","required":true}]`

## `mcp_e3ce90dd1f06a9b10d990814`

视频搜索（热门/全部）/Weibo video search (hot/all)

- Risk: `read`
- Parameters: `[{"name":"mode","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_ec22ac942a4e4a087dbc4fcb`

# [中文] ### 用途: - 获取微博实时热搜榜（Top 50）和实时上升热点 ### 返回: - 热搜榜列表，包含： - **实时热搜榜**: 当前最热门的50个话题，按热度排序 - **实时上升热点**: 正在快速上升的热门话题 ### 说明: - 这是微博官方热搜榜数据 - 每个热搜包含：排名、话题名、热度值、标签（如：新、热、沸）等 - 与 `fetch_search_topics` 不同，此接口返回的是完整的热搜排行榜 # [English] ### Purpose: - Get Weibo real-time hot search ranking (Top 50) and ri

- Risk: `read`
- Parameters: `[]`

## `mcp_ef5875761a423ff4fa738d22`

# [中文] ### 用途: - 获取指定用户发布的微博列表，支持分页和多种内容筛选。 ### 参数: - uid: 用户ID（必填） - page: 页码，从1开始（默认1） - filter_type: 筛选类型（默认"all"） - all: 全部微博 - original: 原创微博 - likes: 她/他的赞 - video: 视频微博 - pic: 图片微博 - location: 签到足迹 - month: 按时间筛选（需要同时传入month参数） - month: 时间筛选参数，格式YYYYMMDD（仅当filter_type=month时使用） ### 返回: - 微博列表

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"string","required":false},{"name":"month","type":"any","required":false},{"name":"page","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_f772ef375ea52ec27808e84f`

# [中文] ### 用途: - 获取单条微博的详情 ### 参数: - post_id: 微博ID ### 返回: - 微博详情 # [English] ### Purpose: - Get single Weibo post detail ### Parameters: - post_id: Post ID ### Return: - Post detail # [示例/Example] post_id = "5092682368025584"

- Risk: `read`
- Parameters: `[{"name":"post_id","type":"string","required":true}]`

## `mcp_f8f15e7f5e1957a43a598948`

获取视频详情/Get video detail

- Risk: `read`
- Parameters: `[{"name":"mid","type":"string","required":true}]`
