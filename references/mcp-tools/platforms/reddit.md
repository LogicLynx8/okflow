# Reddit MCP 工具

- 来源平台：`Reddit`
- 能力分段：`reddit`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 28

## `mcp_0ea931b5cbe06955b69e5fd6`

# [中文] ### 用途: - 获取指定用户最活跃的Reddit社区列表 ### 参数: - username: Reddit用户名 ### 返回: - 用户活跃社区JSON数据,包含: - 用户最常发帖/评论的社区列表 - 每个社区的活跃度信息 - 社区基本信息(名称、图标、成员数等) # [English] ### Purpose: - Fetch list of Reddit communities where the specified user is most active ### Parameters: - username: Reddit username ### Return

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_13e1da26c8f8950c6283c4df`

# [中文] ### 用途: - 获取指定Reddit版块的Feed内容流,展示该版块的帖子列表 ### 参数: - subreddit_name: 版块名称(不带r/前缀),如"pics", "funny"等 - sort: 排序方式,可选: BEST(最佳), HOT(热门), NEW(最新), TOP(顶级), CONTROVERSIAL(有争议), RISING(上升中) - filter_posts: 过滤掉指定的帖子ID列表 - after: 分页参数,获取下一页时使用 ### 返回: - 版块Feed JSON数据,包含: - 该版块的帖子列表 - 帖子详细信息 - 版块元数据

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"filter_posts","type":"array","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false},{"name":"subreddit_name","type":"string","required":true}]`

## `mcp_220de6cc187109ab1b23d2ed`

# [中文] ### 用途: - 获取Reddit APP指定版块的设置信息,包括发帖规则、用户标签设置、审核设置等配置信息 ### 参数: - subreddit_id: 版块ID,格式为t5_开头的唯一标识符,例如"t5_2qh0u"(可从fetch_subreddit_info接口获取版块ID) ### 返回: - 指定版块的设置信息JSON数据,包含以下主要字段: - subredditType: 版块类型(public/private/restricted) - submissionType: 允许提交的内容类型(any/link/self) - allowImages: 是否允许图

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"subreddit_id","type":"string","required":true}]`

## `mcp_29bfbb172fa9fc1eaa87c78e`

# [中文] ### 用途: - 获取Reddit APP首页推荐内容 ### 参数: - sort: 排序方式，支持HOT, NEW, TOP, BEST, CONTROVERSIAL - filter_posts: 过滤掉指定的帖子ID列表，用于排除已获取的帖子，避免重复获取 - after: 分页参数，获取下一页时使用 ### 返回: - Reddit APP首页推荐内容的JSON数据 # [English] ### Purpose: - Fetch Reddit APP home feed content ### Parameters: - sort: Sort method, sup

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"filter_posts","type":"array","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false}]`

## `mcp_3cbc46ae3d5798c4b30fb315`

# [中文] ### 用途: - 检查指定Reddit版块是否被当前用户静音 ### 参数: - subreddit_id: 版块ID,格式为"t5_"开头,可从fetch_subreddit_info接口获取 ### 返回: - 静音状态JSON数据,包含: - isMuted: 是否静音的布尔值 - subredditId: 版块ID ### 注意: - **APP接口的ID格式与Web接口不同，需要添加类型前缀** - 版块ID前缀: t5_ (例如: t5_2qh0u) # [English] ### Purpose: - Check if a specified Reddit sub

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"subreddit_id","type":"string","required":true}]`

## `mcp_458817d7306cda4673405061`

# [中文] ## 用途: - 根据帖子ID列表批量获取帖子详情 - 支持最多5条帖子的批量查询 - 可选择性包含特定评论的上下文 ## 参数: - post_ids: 帖子ID列表，逗号分隔，格式如 "t3_XXXXXX,t3_YYYYYY"，最多支持5条 - include_comment_id: 是否包含特定评论ID，默认False - comment_id: 评论ID（当include_comment_id为True时使用），格式如 "t1_XXXXXX" ## 返回: - 包含帖子详细信息的数据，包括: - 帖子内容、标题、作者 - 统计数据（点赞数、评论数等） - 版块信息 - 奖

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":false},{"name":"include_comment_id","type":"boolean","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_ids","type":"string","required":true}]`

## `mcp_472cefe5a5727ce49903c02f`

# [中文] ### 用途: - 获取Reddit APP发现页(Communities Tab 的内容): - 推荐社区轮播(CarouselCommunityRecommendationsFeedUnit) - 父级分类导航(TopicGroupFeedElement,约 25 个) - 详细分类导航(TaxonomyTopicsFeedElement,约 170+ 个) - 额外返回一个扁平化的 `topics` 列表,直接拿 `id` 调 `/fetch_topic_feed` 即可获取该分类的 feed ### 参数: - sort: 排序方式,BEST(默认) / HOT / NE

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false},{"name":"time","type":"string","required":false}]`

## `mcp_5fc03674c284db6b83f1464d`

# [中文] ### 用途: - 获取Reddit APP指定用户的详细资料信息 ### 参数: - username: Reddit用户名(不带u/前缀) ### 返回: - 用户资料JSON数据,包含: - 用户名和ID - 账号创建时间 - Karma值(帖子karma和评论karma) - 头像和横幅图片 - 个人简介 - 是否验证账号 - 徽章和奖励 - 关注者数量 # [English] ### Purpose: - Fetch detailed profile information of a specified Reddit APP user ### Parameters: -

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_63e5e6f8c7794b8435a554f6`

# [中文] ### 用途: - 获取Reddit APP指定版块的规则和样式信息 ### 参数: - subreddit_name: 版块名称(不带r/前缀) ### 返回: - 指定版块的规则和样式信息JSON数据 # [English] ### Purpose: - Fetch rules and style information of a specified Reddit APP subreddit ### Parameters: - subreddit_name: Subreddit name ### Returns: - JSON data of rules and style

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"subreddit_name","type":"string","required":false}]`

## `mcp_669ea0092b48e6333dceb931`

# [中文] ### 用途: - 获取Reddit APP指定帖子下的评论 ### 参数: - post_id: 帖子ID，格式如 "t3_XXXXXX" - sort_type: 排序方式，支持CONFIDENCE, NEW, TOP, HOT, CONTROVERSIAL, OLD, RANDOM - after: 分页参数，获取下一页时使用，在commentForest里的最后一个评论节点中可以找到，例如$.data.postInfoById.commentForest.trees[-1].more.cursor ### 返回: - 指定帖子下的评论JSON数据 ### 注意: - **

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_id","type":"string","required":true},{"name":"sort_type","type":"string","required":false}]`

## `mcp_6c939876c2b6eb9728643005`

# [中文] ### 用途: - 获取Reddit APP流行/热门推荐内容,展示全站最受欢迎的帖子 ### 参数: - sort: 排序方式,可选: BEST(最佳), HOT(热门), NEW(最新), TOP(顶级), CONTROVERSIAL(有争议), RISING(上升中) - time: 时间范围,可选: ALL(全部时间), HOUR(一小时), DAY(一天), WEEK(一周), MONTH(一个月), YEAR(一年) - filter_posts: 过滤掉指定的帖子ID列表,用于避免重复获取 - after: 分页参数,获取下一页时使用 ### 返回: - 流行推荐内

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"filter_posts","type":"array","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false},{"name":"time","type":"string","required":false}]`

## `mcp_7236c1fed16d502a3610bde5`

# [中文] ### 用途: - 获取Reddit APP当前热门搜索话题和趋势内容 ### 参数: - 无需参数 ### 返回: - 热门搜索JSON数据,包含: - 热门搜索关键词列表 - 趋势话题 - 每个话题的搜索量和热度 - 相关帖子预览 # [English] ### Purpose: - Fetch currently trending search topics and content on Reddit APP ### Parameters: - No parameters required ### Returns: - JSON data of trending searc

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false}]`

## `mcp_78477c4442ba2a690ab20ce4`

# [中文] ### 用途: - 获取指定用户发布的帖子列表 ### 参数: - username: Reddit用户名 - sort: 排序方式,可选值: NEW(最新), TOP(最热), HOT(热门), CONTROVERSIAL(有争议) - after: 分页参数,用于获取下一页 ### 返回: - 用户帖子列表JSON数据,包含: - 帖子标题和内容 - 发布时间 - 所属版块 - 点赞数和评论数 - 帖子类型(文本/图片/视频/链接) - 媒体内容(如有) - 分页信息 # [English] ### Purpose: - Fetch list of posts submitt

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_7c0e29021dab5032f147c081`

# [中文] ### 用途: - 获取Reddit APP新闻资讯推荐内容,展示最新的新闻和时事讨论 ### 参数: - subtopic_ids: 子话题ID列表,默认["all"]表示所有新闻类别 - after: 分页参数,获取下一页时使用 ### 返回: - 新闻推荐内容JSON数据,包含: - 新闻帖子列表 - 时事讨论 - 热点话题 - 新闻来源和链接 # [English] ### Purpose: - Fetch news-related recommended content on Reddit APP, displaying latest news and current

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"subtopic_ids","type":"array","required":false}]`

## `mcp_846eb01004175f256c01f386`

# [中文] ### 用途: - 获取Reddit APP游戏相关的推荐内容,展示游戏社区的热门帖子 ### 参数: - sort: 排序方式,可选: NEW(最新), HOT(热门), TOP(顶级), RISING(上升中) - time: 时间范围,可选: ALL(全部时间), HOUR(一小时), DAY(一天), WEEK(一周), MONTH(一个月), YEAR(一年) - after: 分页参数,获取下一页时使用 ### 返回: - 游戏推荐内容JSON数据,包含: - 游戏相关帖子列表 - 游戏社区讨论 - 游戏新闻和更新 # [English] ### Purpose: -

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort","type":"string","required":false},{"name":"time","type":"string","required":false}]`

## `mcp_91b23d777381f70fb78b54ab`

# [中文] ### 用途: - 批量获取 Reddit Answers / "为你生成的回答" 卡片用的精简帖子信息 - 相比 fetch_post_details_batch 返回的字段更精简,仅包含展示卡片所需: id / title / score / commentCount / createdAt / url / authorInfo / subreddit / media ### 参数: - post_ids: 帖子ID列表,逗号分隔,格式如 "t3_XXXXXX,t3_YYYYYY" - need_format: 是否需要清洗数据 ### 注意: - **APP接口的ID格式与

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"post_ids","type":"string","required":true}]`

## `mcp_9d42fd8e7d15b9e39063c8f6`

# [中文] ### 用途: - 获取指定 topic(社区分类)的 feed - 一般流程: 先调 `/fetch_explore_feed` 获取所有 topicId,然后选一个 topicId 调这个接口 ### 参数: - topic_id: 分类ID,格式 "tx1_XXXXX",从 `/fetch_explore_feed` 返回的 `topics[].id` 取 - scheme_name: 分类 scheme,App 默认用 "communities_tab_taxonomy_topics_default" - sort: 排序方式 - time: 时间范围 - need_fo

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"scheme_name","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"time","type":"string","required":false},{"name":"topic_id","type":"string","required":true}]`

## `mcp_a7f83114a5391802446c8880`

# [中文] ### 用途: - 批量获取 Reddit Answers / "为你生成的回答" 卡片用的精简评论信息 - 返回字段: id / createdAt / score / authorInfo / postInfo / permalink ### 参数: - comment_ids: 评论ID列表,逗号分隔,格式如 "t1_XXXXXX,t1_YYYYYY" - need_format: 是否需要清洗数据 ### 注意: - **APP接口的ID格式与Web接口不同,需要添加类型前缀** - 评论ID前缀: t1_ # [English] ### Purpose: - Fetch

- Risk: `read`
- Parameters: `[{"name":"comment_ids","type":"string","required":true},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_a99541b421bcfc0ef4f4d07f`

# [中文] ### 用途: - 获取指定Reddit用户的公开奖杯/成就列表 ### 参数: - username: Reddit用户名(不带u/前缀) ### 返回: - 用户奖杯JSON数据,包含: - 奖杯列表(trophy list) - 每个奖杯的详细信息: - 奖杯名称 - 奖杯描述 - 奖杯图标URL - 获得时间 - 特殊徽章和成就 # [English] ### Purpose: - Fetch public trophies/achievements list of a specified Reddit user ### Parameters: - username: R

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_b08d05599b68ea84b8c934fa`

# [中文] ### 用途: - 获取Reddit APP搜索框的自动补全建议,包括推荐的版块、用户和搜索词 ### 参数: - query: 搜索关键词,输入的搜索文本 - safe_search: 安全搜索设置,可选值为"unset"(未设置)或"strict"(严格模式) - allow_nsfw: 是否允许显示NSFW(成人)内容,"0"表示不允许,"1"表示允许 ### 返回: - 搜索建议JSON数据,包含以下类型的建议: - 相关版块(subreddits) - 相关用户(users) - 搜索词建议(search suggestions) - 热门话题(trending top

- Risk: `read`
- Parameters: `[{"name":"allow_nsfw","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"query","type":"string","required":true},{"name":"safe_search","type":"string","required":false}]`

## `mcp_b1668f42485cd461356403b0`

# [中文] ### 用途: - 获取指定用户发表的评论列表 ### 参数: - username: Reddit用户名 - sort: 排序方式,可选值: NEW(最新), TOP(最热), HOT(热门), CONTROVERSIAL(有争议) - page_size: 每页返回的评论数量,默认25条 - after: 分页参数,用于获取下一页 ### 返回: - 用户评论列表JSON数据,包含: - 评论内容 - 评论所在的帖子信息 - 评论时间 - 点赞数 - 回复数 - 分页信息 # [English] ### Purpose: - Fetch list of comments po

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"page_size","type":"integer","required":false},{"name":"sort","type":"string","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_b5af4674173bb622603d5316`

# [中文] ### 用途: - 获取Reddit APP指定版块的帖子频道信息 ### 参数: - subreddit_name: 版块名称(不带r/前缀) - sort: 排序方式，支持HOT, NEW, TOP, CONTROVERSIAL, RISING - range: 时间范围，支持HOUR, DAY, WEEK, MONTH, YEAR, ALL ### 返回: - 指定版块的帖子频道信息JSON数据 # [English] ### Purpose: - Fetch post channel information of a specified Reddit APP subred

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"range","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"subreddit_name","type":"string","required":false}]`

## `mcp_c63e92ea89a213c57e7de89c`

# [中文] ### 用途: - 获取Reddit APP指定社区的精选亮点内容,包括热门帖子和重要公告 ### 参数: - subreddit_id: 版块ID,格式为"t5_"开头,可从fetch_subreddit_info接口获取 ### 返回: - 社区亮点JSON数据,包含: - 精选帖子列表 - 置顶公告 - 社区重要动态 - 推荐内容 ### 注意: - **APP接口的ID格式与Web接口不同，需要添加类型前缀** - 版块ID前缀: t5_ (例如: t5_2qh0u) # [English] ### Purpose: - Fetch featured highlight

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"subreddit_id","type":"string","required":true}]`

## `mcp_c6c3844e6db4d6c8d999b4dc`

# [中文] ## 用途: - 根据帖子ID获取单个帖子详情 - 可选择性包含特定评论的上下文 ## 参数: - post_id: 帖子ID，格式如 "t3_XXXXXX" - include_comment_id: 是否包含特定评论ID，默认False - comment_id: 评论ID（当include_comment_id为True时使用），格式如 "t1_XXXXXX" ## 返回: - 包含帖子详细信息的数据，包括: - 帖子内容、标题、作者 - 统计数据（点赞数、评论数等） - 版块信息 - 奖励信息 - 媒体资源 - 推荐原因等 ## 注意: - **APP接口的ID格式与We

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":false},{"name":"include_comment_id","type":"boolean","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_id","type":"string","required":true}]`

## `mcp_d7c3d01ceb80081d5f49890d`

# [中文] ## 用途: - 根据帖子ID列表大批量获取帖子详情 - 支持最多30条帖子的批量查询 - 可选择性包含特定评论的上下文 ## 参数: - post_ids: 帖子ID列表，逗号分隔，格式如 "t3_XXXXXX,t3_YYYYYY,..."，最多支持30条 - include_comment_id: 是否包含特定评论ID，默认False - comment_id: 评论ID（当include_comment_id为True时使用），格式如 "t1_XXXXXX" ## 返回: - 包含帖子详细信息的数据，包括: - 帖子内容、标题、作者 - 统计数据（点赞数、评论数等） - 版

- Risk: `read`
- Parameters: `[{"name":"comment_id","type":"string","required":false},{"name":"include_comment_id","type":"boolean","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_ids","type":"string","required":true}]`

## `mcp_dd8490a8bcc3aa79ca7b77e5`

# [中文] ### 用途: - 执行Reddit APP动态搜索,支持搜索帖子、社区、评论、媒体和用户 ### 参数: - query: 搜索关键词 - search_type: 搜索类型,可选值: - post: 搜索帖子(默认) - community: 搜索社区/版块 - comment: 搜索评论 - media: 搜索媒体(图片/视频/GIF) - people: 搜索用户 - sort: 排序方式(仅适用于post/comment/media类型),可选值: - RELEVANCE: 相关性 - HOT: 热门 - TOP: 最受欢迎 - NEW: 最新 - COMMENTS:

- Risk: `read`
- Parameters: `[{"name":"after","type":"string","required":false},{"name":"allow_nsfw","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"query","type":"string","required":true},{"name":"safe_search","type":"string","required":false},{"name":"search_type","type":"string","required":false},{"name":"sort","type":"string","required":false},{"name":"time_range","type":"string","required":false}]`

## `mcp_e3852b79aeb8ba3f605647e7`

# [中文] ### 用途: - 获取Reddit APP指定版块的详细信息,包括版块描述、成员数量、创建时间、规则等元数据 ### 参数: - subreddit_name: 版块名称(不带r/前缀),例如"pics", "funny", "AskReddit"等 ### 返回: - 指定版块的详细信息JSON数据 # [English] ### Purpose: - Fetch detailed information of a specified Reddit APP subreddit, including description, subscriber count, creation

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"subreddit_name","type":"string","required":false}]`

## `mcp_fb3814b7db1064ee51c29941`

# [中文] ### 用途: - 获取Reddit APP指定评论下的回复（二级评论/子评论） - 当评论节点有 more.cursor 字段时，使用此接口获取该评论的子评论 ### 参数: - post_id: 帖子ID，格式如 "t3_XXXXXX" - cursor: 评论游标，从评论数据的 more.cursor 字段获取，格式如 "commenttree:ex:(xxx)" - sort_type: 排序方式，支持CONFIDENCE, NEW, TOP, HOT, CONTROVERSIAL, OLD, RANDOM ### 返回: - 指定评论下的回复JSON数据，包含： - 子

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":true},{"name":"need_format","type":"boolean","required":false},{"name":"post_id","type":"string","required":true},{"name":"sort_type","type":"string","required":false}]`
