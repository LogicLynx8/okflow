# 小红书 MCP 工具

- 来源平台：`小红书`
- 能力分段：`xiaohongshu`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 44

## `mcp_0e18f4249873c1db4dcfba66`

# [中文] ### 用途: - 复刻蒲公英网页「找博主 → 直播博主广场」，按电商转化力/直播表现/粉丝购买力等筛选带货博主 ### 1. 与「笔记博主广场」的区别 两者是**并列的两个选号入口**，筛选维度几乎不重叠（前者看笔记种草表现，后者看直播带货表现）， 但**产出的博主 ID 是同一套**，可以互相补全：直播侧挑出的买手可以用博主侧接口查它的笔记数据。 ### 2. 搜索与筛选分组 | 分组 | 覆盖的筛选 | |---|---| | `nick_name` | 按博主昵称搜索（不是分组，是顶层参数） | | `category` | 合作品类（一级 + 二级） | | `buye

- Risk: `write`
- Parameters: `[{"name":"buyer","type":"object","required":false},{"name":"category","type":"object","required":false},{"name":"ecom","type":"object","required":false},{"name":"fans","type":"object","required":false},{"name":"flags","type":"object","required":false},{"name":"live","type":"object","required":false},{"name":"nick_name","type":"string","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"seed","type":"integer","required":false}]`

## `mcp_0e926b22b15b3c2556cb3887`

获取用户收藏笔记列表/Get user faved notes

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_14a3a3b257fd1f7a56df82df`

# [中文] ### 用途: - 给定一个博主，返回平台判定与其相似的其它博主，对应博主主页下方「相似博主推荐」 - 典型用法：先选出一个满意的标杆博主，再用本接口按相似度扩量选号 ### 请求体参数: - user_id: **必填**，目标博主用户ID - page_num: 页码，从 1 开始 - page_size: 每页数量，**1-4**（蒲公英网页固定 4，不能更大） ### 返回: - 结构与「笔记博主广场」完全一致 —— 同样的 kols[] + total，可直接复用解析代码 - 相似博主总数通常只有个位数到几十，total 即为上限 ### 翻页: - 只改 page_n

- Risk: `write`
- Parameters: `[{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_1bda44d7e8b19531aea0d4c1`

获取笔记二级评论列表/Get note sub comments

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":true},{"name":"cursor","type":"string","required":false},{"name":"index","type":"integer","required":false},{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_1c77e74089bac89b27805d9e`

# [中文] ### 用途: - 获取单篇笔记的精选评论，含博主本人的回复 - 对应蒲公英笔记详情弹窗里的「精选评论」区块 ### 请求体参数: - note_id: 笔记ID，如 "6a85646a0000000006005aea" （可从 /get_blogger_notes 的 list[].noteId、/get_blogger_notes_v2 的 noteList[].noteInfo.noteId 或 /get_content_square 的榜单结果取得） ### 没有翻页: - 上游固定返回 **5 条**，不支持翻页，因此本接口不接受任何分页参数 - 实测 pageInde

- Risk: `write`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_23f83aa6fc08748d7a3448f3`

# [中文] ### 用途: - 获取创作者中心的热点创作灵感流，使用游标分页 ### 参数: - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值（如 "1", "2"...） ### 返回: - 热点灵感列表数据 ### 翻页说明: - 首次请求：cursor 留空 - 翻页请求：传入上一次响应中返回的 cursor 值 # [English] ### Purpose: - Get creator center hot inspiration feed, using cursor pagination ### Parameters: - cursor:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false}]`

## `mcp_27de62f373f40fc0ae6d7be5`

# [中文] ### 用途: - 获取博主的逐日趋势与区间汇总，用于绘制表现趋势图 - 对应博主主页「笔记数据 → 数据表现 → 核心指标趋势」 ### 请求体参数: - user_id: **必填**，博主用户ID - business: 笔记口径，0=日常笔记(默认) 1=合作笔记 - note_type: 笔记类型，3=图文+视频(默认) 1=图文 2=视频 **注意**: 与 /get_blogger_notes 的同名参数取值不同（那个是 4=全部 3=合作笔记） - date_type: 时间范围，1=近30日(默认) 2=近90日 - advertise_switch: 流量类型

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"business","type":"integer","required":false},{"name":"date_type","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_33b04bd4ca207aac661bf9fd`

# [中文] ### 用途: - 获取用户公开资料 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - user_id: 用户ID ### 返回: - 用户信息 # [English] ### Purpose: - Get user public profile ### API Priority: - Xiaohongshu API priority: `App V2` > `App` > `Web V3 (this)` > `Web V2` > `Web` ### Par

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_37cb127a436f4d7bb9d6093f`

# [中文] ### 用途: - 获取首页推荐笔记列表 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - num: 返回数量 (最大 40) - cursor_score: 翻页游标 (首次留空) - category: 分类频道 ID (从 /fetch_homefeed_categories 获取) - need_filter_image: true=只看图文, false=综合推荐(含视频) ### 返回: - 推荐笔记列表 # [English] ### Purp

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"cursor_score","type":"string","required":false},{"name":"need_filter_image","type":"boolean","required":false},{"name":"num","type":"integer","required":false}]`

## `mcp_3b57ef4c6c5ea6267a673b4b`

获取商品评论总览/Get product review overview

- Risk: `read`
- Parameters: `[{"name":"sku_id","type":"string","required":true},{"name":"tab","type":"integer","required":false}]`

## `mcp_3e56b309968fa00cfed515d9`

# [中文] ### 用途: - 获取图文笔记的完整详情数据 ### 接口优先级: - ⭐ 小红书接口推荐优先级: `App V2（本接口）` > `App` > `Web V2` > `Web` ### ⚠️ 笔记类型说明（重要）: - 小红书笔记分为两种类型：`图文笔记（normal）` 和 `视频笔记（video）`，使用时务必区分。 - 本接口可以获取 **图文笔记和视频笔记** 两种类型的数据。 - 但受小红书官方限制：当请求的笔记为视频笔记时，本接口 **不会返回视频文件的播放链接，只会返回视频封面图**。 - 如需获取视频播放链接，请使用 `/get_video_note_det

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_4dc19fbbb10b52aceb7cba73`

# [中文] ### 用途: - 根据关键词搜索小红书商品，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "手机壳" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含商品列表和分页信息 ### 翻页说明: - 首次请求：只传keyword和page - 翻页请求：传入首次搜索返回的 search_id # [English] ### Purpose: - Search Xiaohongshu p

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_533940634160bc414b8aec45`

# [中文] ### 用途: - 根据关键词搜索小红书用户，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "美食博主" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含用户列表和分页信息 ### 翻页说明: - 首次请求：只传keyword和page - 翻页请求：传入首次搜索返回的 search_id # [English] ### Purpose: - Search Xiaohongshu

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_5541079bd041f4c3ecf658ea`

# [中文] ### 用途: - 分页获取博主的笔记明细，对应博主主页「笔记数据 → 笔记案例」 - 想看「这个博主接过哪些商单」，把 note_type 设为 3(合作笔记) - **本接口只覆盖原生笔记，少数博主（笔记以跨平台/跨域内容为主）会返回空列表 （total 为 0）。遇到这种情况改用 `/get_blogger_notes_v2`（覆盖范围更广，返回字段结构不同）** ### 请求体参数: - user_id: **必填**，博主用户ID - page_number: 页码，从 1 开始（注意本接口是 page_number，不是 page_num） - page_size:

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"content_tag","type":"string","required":false},{"name":"feature_tag","type":"string","required":false},{"name":"is_third_platform","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"order_type","type":"integer","required":false},{"name":"page_number","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_5706e0e11bcb4e1b39b791e4`

# [中文] ### 用途: - 获取单篇笔记挂载的组件配置（正文搜索组件 / 评论区组件 / 底部组件） - 对应笔记详情弹窗里标题下方的那几个组件标签 ### 请求体参数: - note_id: 笔记ID，来源同 /get_note_comments ### 与 get_note_detail 的 compClickData 不重复: - 本接口给组件**配置**：挂了哪个组件、搜索词、品牌方、博主、按钮文案、跳转 - compClickData 给组件**点击率档位**：正常 / 较高 / 极高（口径 0-2% / 2%-10% / 10%+） ### 返回: - `data.data`

- Risk: `write`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_585bc64823aee9d7fd33e09a`

获取用户笔记列表/Get user posted notes

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_6251e516edd5d3b118851c24`

# [中文] ### 用途: - 获取博主粉丝的分布画像，用于判断受众与品牌目标人群是否吻合 ### 请求体参数: - user_id: 博主用户ID，如 "5c668b3e0000000012021605" ### 返回: - ages[]: 年龄分布 - gender: 性别分布（male / female） - provinces[] / cities[]: 地域分布（省 / 市） - devices[]: 设备分布 - interests[]: 兴趣分布 ### 响应结构（取数要剥两层）: - `resp["data"]` 是蒲公英原样信封（含 `code`/`msg`/`succes

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_66010b5f69a09313da292ac5`

# [中文] ### 用途: - 获取单篇蒲公英笔记的详情数据 ### 请求体参数: - note_id: 笔记ID，如 "6a20edfa0000000021020951" ### 返回: - 笔记详情数据，主要字段: - 笔记基础: noteId / noteLink / title / content(正文) / type(类型) / createTime - 作者: userId / name / headPhoto - 媒体: imagesList[](图片url与宽高) / videoInfo(视频) - 互动数据: impNum(曝光) / readNum(阅读) / likeN

- Risk: `write`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_6a4693522de36260aa5e1360`

获取话题详情/Get topic info

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"page_id","type":"string","required":true},{"name":"source","type":"string","required":false}]`

## `mcp_6e7e345cff33377b89e12c67`

# [中文] ### 用途: - 获取博主粉丝随时间的变化曲线，对应博主主页「粉丝分析 → 粉丝趋势」 ### 请求体参数: - user_id: **必填**，博主用户ID - increase_type: 曲线口径，1=**粉丝总量**(默认，累计数) 2=**粉丝增量**(每日新增) - date_type: 时间范围，1=近30日(默认) 2=近60日 ### 返回: - list[]: 逐日数据点（当日值与日期） - fansNumInc: 区间净增 - fansNumIncRate: 区间增长率 ### 提示: - 两个参数的默认值都与蒲公英网页一致（粉丝总量 + 近30日） -

- Risk: `write`
- Parameters: `[{"name":"date_type","type":"integer","required":false},{"name":"increase_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_70f0453156a7bc81235787ea`

获取话题笔记列表/Get topic feed

- Risk: `read`
- Parameters: `[{"name":"cursor_score","type":"string","required":false},{"name":"first_load_time","type":"string","required":false},{"name":"last_note_ct","type":"string","required":false},{"name":"last_note_id","type":"string","required":false},{"name":"page_id","type":"string","required":true},{"name":"session_id","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_78a1c003a2255ccc44fd1a79`

# [中文] ### 用途: - 根据关键词搜索小红书群聊列表，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "上海" - page_no: 页码，从 0 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "unifiedSearchGroup" - is_recommend: 是否推荐，0=否, 1=是 ### 返回: - 搜索结果数据，包含群聊列表和分页信息 ### 翻页说明: - 首次请求：search_id 留空（自动生成），page_no 传 0 - 翻页请求：传入首次搜索返回的 search_id，pag

- Risk: `read`
- Parameters: `[{"name":"is_recommend","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"page_no","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"source","type":"string","required":false}]`

## `mcp_7c64ff24d8f678c97e9698c5`

# [中文] ### 用途: - 根据关键词搜索小红书笔记，支持多种排序方式、笔记类型筛选和发布时间筛选 ### 参数: - keyword: 搜索关键词（必需），如 "美食推荐" - page: 页码，从 1 开始 - sort_type: 排序方式 - "general": 综合排序（默认） - "time_descending": 按时间倒序（最新） - "popularity_descending": 按点赞数排序（最多点赞） - "comment_descending": 按评论数排序（最多评论） - "collect_descending": 按收藏数排序（最多收藏） - "eng

- Risk: `read`
- Parameters: `[{"name":"ai_mode","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"note_type","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"search_session_id","type":"string","required":false},{"name":"sort_type","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"time_filter","type":"string","required":false}]`

## `mcp_8870cffb73e87b8afb32b7a7`

# [中文] ### 用途: - 获取博主粉丝的核心指标概览，对应博主主页「粉丝分析 → 核心指标」 ### 请求体参数: - user_id: 博主用户ID，如 "5c668b3e0000000012021605" ### 返回: - fansNum(粉丝数) / fansIncreaseNum(增量) / fansGrowthRate(增长率) - activeFansRate(活跃粉丝占比) / 阅读粉丝占比 / 互动粉丝占比 - 各项的同行百分位（如 activeFansBeyondRate） ### 响应结构（取数要剥两层）: - `resp["data"]` 是蒲公英原样信封（含

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_961b1d6c20ed193ce4062b12`

# [中文] ### 用途: - 获取搜索联想词，keyword 为空时返回热门推荐 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - keyword: 关键词 (可为空) ### 返回: - 联想词列表 # [English] ### Purpose: - Get search suggestions, returns popular recommendations when keyword is empty ### API Priority: - Xiaohongsh

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false}]`

## `mcp_a8e19713b390847d142a69b7`

# [中文] ### 用途: - 给定一个关键词，返回它在小红书全站的热度概览，以及发这个词的博主长什么样 - 对应蒲公英内容广场搜索后的「全站数据」+「合作博主画像」两张卡片 ### 请求体参数: - search_word: 关键词，如 "面膜" ### 返回: | 对象 | 字段 | |---|---| | `searchWordData` | `searchScore` 搜索指数、`noteNum` 关联笔记数、`userNum` 搜索人数、`readNum` 阅读量；每项都有对应的 `*30bm` 字段，是近 30 日环比百分比 | | `wordKolProfile` | 合作博主

- Risk: `write`
- Parameters: `[{"name":"search_word","type":"string","required":true}]`

## `mcp_aad88647d700495c8ab4c759`

获取用户信息/Get user info

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_ae81075212e084719473d151`

# [中文] ### 用途: - 获取 `/get_blogger_list` 里那些**树形筛选**的可选值，是找博主的配套字典接口 - 这些选项由平台维护、会随运营变动，**不要写死在代码里**；结果基本不变，建议客户端缓存后复用 ### 请求体参数: - 无 ### 返回: - `industryTags` → 网页「**行业**」（`taxonomy1Tag` 一级 + `taxonomy2Tags` 二级）， 填进 /get_blogger_list 的 `coop.industry` / `flags.industry_first` —— **这是「行业」，不是「博主类目」**；博

- Risk: `write`
- Parameters: `[]`

## `mcp_af21063557c3c01648aff862`

获取商品评论列表/Get product reviews

- Risk: `read`
- Parameters: `[{"name":"from_page","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"share_pics_only","type":"integer","required":false},{"name":"sku_id","type":"string","required":true},{"name":"sort_strategy_type","type":"integer","required":false}]`

## `mcp_b221c3d73492b9015dce5bd6`

# [中文] ### 用途: - 获取视频笔记的完整详情数据 ### ⚠️ 笔记类型说明（重要）: - 小红书笔记分为两种类型：`图文笔记（normal）` 和 `视频笔记（video）`，使用时务必区分。 - 本接口 **只能获取视频笔记的数据**，如果传入图文笔记的 note_id 将无法请求到内容，此限制来自小红书官方。 - 图文笔记接口 `/get_image_note_detail` 可以获取图文和视频两种笔记，但对视频笔记不会返回视频文件的播放链接，只会返回视频封面图。 ### 推荐调用流程（不确定笔记类型时）: - 1. 优先请求 `/get_image_note_detail`

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":false},{"name":"share_text","type":"string","required":false}]`

## `mcp_b5d884275de3a36ffd981715`

# [中文] ### 用途: - 获取笔记详情（图文/视频通用） ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 参数: - note_id: 笔记ID，可以从小红书的分享链接中获取 - xsec_token: 安全令牌，可以从小红书的分享链接中获取 ### 返回: - 笔记详情数据 # [English] ### Purpose: - Get note detail (image/video) ### API Priority: - Xiaohongshu API priorit

- Risk: `read`
- Parameters: `[{"name":"note_id","type":"string","required":true}]`

## `mcp_b674084bb9414c5a2012d67e`

# [中文] ### 用途: - 获取创作者中心的推荐创作灵感流，使用游标分页 ### 参数: - cursor: 分页游标，首次请求留空，翻页时传入上一次响应中返回的 cursor 值（如 "r_1", "r_2"...） - tab: 标签类型，默认 0 - source: 来源，默认 "creator_center" ### 返回: - 推荐灵感列表数据 ### 翻页说明: - 首次请求：cursor 留空 - 翻页请求：传入上一次响应中返回的 cursor 值 # [English] ### Purpose: - Get creator center recommended inspi

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"tab","type":"integer","required":false}]`

## `mcp_baa231bcc6c4413d728df71b`

# [中文] ### 用途: - 获取首页频道分类列表 ### 接口优先级: - 小红书接口推荐优先级: `App V2` > `App` > `Web V3（本接口）` > `Web V2` > `Web` ### 返回: - 分类列表 # [English] ### Purpose: - Get homepage category channels ### API Priority: - Xiaohongshu API priority: `App V2` > `App` > `Web V3 (this)` > `Web V2` > `Web` ### Return: - Categori

- Risk: `read`
- Parameters: `[]`

## `mcp_c875789202dd6e89aaba2b1b`

获取笔记评论列表/Get note comments

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"index","type":"integer","required":false},{"name":"note_id","type":"string","required":false},{"name":"pageArea","type":"string","required":false},{"name":"share_text","type":"string","required":false},{"name":"sort_strategy","type":"string","required":false}]`

## `mcp_d41dc8a5dcf800bdf1de32e7`

# [中文] ### 用途: - 分页获取博主的笔记案例（v2）。与 `/get_blogger_notes` 是**两套独立接口**： 覆盖范围更广（含跨平台/跨域笔记），返回结构也不同 - **当 `/get_blogger_notes` 返回空列表时改用本接口** - 两接口的 note_type 取值与返回字段都不一样，不能混用，按各自参数调用 ### 请求体参数: - user_id: **必填**，博主用户ID - page_number: 页码，从 1 开始 - page_size: 每页数量，**1-8**（蒲公英网页固定 8，不能更大） - note_type: 笔记类型，0

- Risk: `write`
- Parameters: `[{"name":"note_type","type":"integer","required":false},{"name":"order_type","type":"integer","required":false},{"name":"page_number","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_db1e8e2c57a2d49b2a327587`

# [中文] ### 用途: - 关键词的搜索热度逐日走势，用来判断一个词是在涨还是在退、有没有季节性 - 对应内容广场搜索后「全站数据 → 查看详情」里的趋势图 ### 请求体参数: - search_word: 关键词，如 "面膜" ### 返回: - `dailyData[]`: 每天一条，含 `dateKey` 日期、`searchScore` 搜索指数、 `noteNum` 当日笔记数、`userNum` 搜索人数 ### 说明: - 时间范围由蒲公英自行决定（实测约为近三个月），本接口没有可调的时间参数 - 要看汇总值和环比请用 `/get_keyword_stat` ### 响应

- Risk: `write`
- Parameters: `[{"name":"search_word","type":"string","required":true}]`

## `mcp_dbc2d6a084bfc70d03ad4464`

# [中文] ### 用途: - 获取博主笔记的整体数据表现，用于评估内容质量与稳定性 - 对应博主主页「数据概览 → 笔记数据」与「笔记数据 → 数据表现」 ### 请求体参数: - user_id: **必填**，博主用户ID - business: 笔记口径，0=日常笔记(默认) 1=**合作笔记** - note_type: 笔记类型，3=图文+视频(默认) 1=图文 2=视频 **注意**: 与 /get_blogger_notes 的同名参数取值不同（那个是 4=全部 3=合作笔记） - date_type: 时间范围，1=近30日(默认) 2=近90日 - advertise_s

- Risk: `write`
- Parameters: `[{"name":"advertise_switch","type":"integer","required":false},{"name":"business","type":"integer","required":false},{"name":"date_type","type":"integer","required":false},{"name":"note_type","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_e014cc49c278ad3190b3acdf`

# [中文] ### 用途: - 复刻蒲公英网页「找博主 → 笔记博主广场」的搜索与筛选，约 60 个筛选条件按 7 组传入 - 每条结果内嵌约 140 个字段（报价、阅读/互动中位数、直播场次等），通常不必再逐个调博主详情类接口 ### 1. 搜索与排序 | 参数 | 说明 | |---|---| | `keyword` | 搜索词；空=只筛选不搜索 | | `search_type` | `1`=按笔记关键词找博主（默认）`0`=按昵称搜 | | `column` | 排序字段，共 **34 个**：`comprehensiverank`=智能排序（默认） `fansCount`=粉丝数

- Risk: `write`
- Parameters: `[{"name":"blogger","type":"object","required":false},{"name":"brand_user_id","type":"any","required":false},{"name":"column","type":"string","required":false},{"name":"coop","type":"object","required":false},{"name":"fans","type":"object","required":false},{"name":"flags","type":"object","required":false},{"name":"goal","type":"object","required":false},{"name":"keyword","type":"string","required":false},{"name":"live","type":"object","required":false},{"name":"note","type":"object","required":false},{"name":"page_num","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"search_type","type":"integer","required":false},{"name":"similar_user_id","type":"any","required":false},{"name":"similar_word","type":"any","required":false},{"name":"sort","type":"string","required":false}]`

## `mcp_e330183321bbd8efdcd0e843`

# [中文] ### 用途: - 根据关键词搜索小红书图片，每页返回 20 条结果，支持分页 ### 参数: - keyword: 搜索关键词（必需），如 "壁纸" - page: 页码，从 1 开始 - search_id: 搜索ID，翻页时传入首次搜索返回的值 - search_session_id: 搜索会话ID，翻页时传入首次搜索返回的值 - word_request_id: 词请求ID，翻页时传入首次搜索返回的值 - source: 来源，默认 "explore_feed" ### 返回: - 搜索结果数据，包含图片列表和分页信息 ### 翻页说明: - 首次请求：只传keyword

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"search_id","type":"string","required":false},{"name":"search_session_id","type":"string","required":false},{"name":"source","type":"string","required":false},{"name":"word_request_id","type":"string","required":false}]`

## `mcp_e4148dce72d466e24ce83f39`

# [中文] ### 用途: - 获取单个博主的详细资料，对应蒲公英博主主页顶部资料区 - 结果已内嵌大量指标，通常不必再逐个调其它博主数据接口 ### 请求体参数: - user_id: 博主用户ID，如 "5c668b3e0000000012021605" ### 返回: - 博主资料: userId / name / redId(小红书号) / headPhoto / location(地区) / personalTags(标签) - 商业信息: 图文与视频报价、合作状态、所属机构(MCN) - 标签: contentTags(内容类目) / featureTags(内容特征) - 数据

- Risk: `write`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_e498e585fe245d0a5d24e9fe`

# [中文] ### 用途: - 获取博主账号维度的数据概览汇总 ### 请求体参数: - user_id: **必填**，博主用户ID - business: 笔记口径，0=日常笔记(默认) 1=合作笔记 ### 返回: - 成本/报价预估: estimatePictureCpm / estimateVideoCpm / pictureReadCost 等 - 服务表现: 近 7 天活跃天数、邀约 48 小时回复率 - 成长表现: 粉丝量变化幅度及其同行百分位 ### 响应结构（取数要剥两层）: - `resp["data"]` 是蒲公英原样信封（含 `code`/`msg`/`succes

- Risk: `write`
- Parameters: `[{"name":"business","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_e680dc55c7e8d78106d7f489`

获取商品推荐列表/Get product recommendations

- Risk: `read`
- Parameters: `[{"name":"cursor_score","type":"string","required":false},{"name":"region","type":"string","required":false},{"name":"sku_id","type":"string","required":true}]`

## `mcp_f0c1bbe4aaa7c1e32588fdaf`

获取商品详情/Get product detail

- Risk: `read`
- Parameters: `[{"name":"pre_page","type":"string","required":false},{"name":"sku_id","type":"string","required":true},{"name":"source","type":"string","required":false}]`

## `mcp_f58c1889299cf5e4ba8b5a7d`

# [中文] ### 用途: - 返回用户搜这个词**之前**和**之后**还会搜什么，对应内容广场的「相关灵感」卡片 - 典型用法是选题扩词：拿一个核心词跑出一批关联词，再用 `/get_keyword_stat` 逐个比热度， 挑出竞争小但搜索量不低的词 ### 请求体参数: - search_word: 关键词，如 "面膜" ### 返回: - `upSearchWords[]`（上游词）与 `downSearchWords[]`（下游词） - 每个词自带 `searchScore` 搜索指数、`readTotalCount` 阅读总量、`noteNum` 笔记数、 `relevance

- Risk: `write`
- Parameters: `[{"name":"search_word","type":"string","required":true}]`
