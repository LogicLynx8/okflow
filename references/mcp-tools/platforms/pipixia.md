# 皮皮虾 MCP 工具

- 来源平台：`皮皮虾`
- 能力分段：`pipixia`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 17

## `mcp_0ad4f15ef3d5f1160381e6b2`

# [中文] ### 用途: - 获取热搜榜单详情数据。 ### 参数: - block_type: 榜单类型，可以从`/fetch_hot_search_board_list`接口中获取。 ### 返回: - 热搜榜单详情数据 # [English] ### Purpose: - Get hot search board detail data. ### Parameters: - block_type: Board type, can be obtained from the `/fetch_hot_search_board_list` interface. ### Return: - H

- Risk: `read`
- Parameters: `[{"name":"block_type","type":"integer","required":true}]`

## `mcp_0dd4ca9ba6e81bf43daf549c`

# [中文] ### 用途: - 获取用户信息，如昵称、性别、头像等。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 ### 返回: - 用户信息 # [English] ### Purpose: - Get user information, such as nickname and avatar. ### Parameters: - user_id: AKA user id, can be obtained from the share link. ### Return: - User information # [示例/Example] user_id = "1

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_246c2039b7c0a7f2a6f14b08`

# [中文] ### 用途: - 搜索接口，支持搜索用户、作品等。 ### 参数: - keyword: 搜索关键词。 - offset: 翻页游标，默认为0，后续页码从上一页返回的 `offset` Key中获取对应值。 - search_type: 搜索类型，可用值如下： - 1: 综合 - 8: 热门 - 9: 新鲜 - 2：视频 - 3：图文 - 4：用户 - 5：话题 ### 返回: - 搜索结果 # [English] ### Purpose: - Search API, support search user, post, etc. ### Parameters: - keywo

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"offset","type":"string","required":false},{"name":"search_type","type":"string","required":false}]`

## `mcp_38a66e88d201aae814545a50`

# [中文] ### 用途: - 获取首页推荐数据。 ### 参数: - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 首页推荐数据 # [English] ### Purpose: - Get home feed data. ### Parameters: - cursor: Page cursor, default is 0, get the corresponding value from the `loadmore_cursor` Key in the previous page. ### Re

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false}]`

## `mcp_3ee22e5a913d9a78b35abfa3`

# [中文] ### 用途: - 获取话题详情数据。 ### 参数: - hashtag_id: 话题id，可以从分享链接中获取。 ### 返回: - 话题详情数据 # [English] ### Purpose: - Get hashtag detail data. ### Parameters: - hashtag_id: AKA hashtag id, can be obtained from the share link. ### Return: - Hashtag detail data # [示例/Example] hashtag_id = "129559"

- Risk: `read`
- Parameters: `[{"name":"hashtag_id","type":"string","required":true}]`

## `mcp_409c9092bc3218062b4635ad`

# [中文] ### 用途: - 获取单个作品的统计数据，如点赞数、评论数、转发数等。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 ### 返回: - 作品统计数据 # [English] ### Purpose: - Get the statistics of a single post, such as the number of likes, comments, reposts, etc. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. ### Retu

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true}]`

## `mcp_4e03e57fefe9c161fd4b3237`

# [中文] ### 用途: - 获取首页短剧推荐数据。 ### 参数: - page: 页码，默认为1，每次翻页加1。 ### 返回: - 首页短剧推荐数据 # [English] ### Purpose: - Get home short drama feed data. ### Parameters: - page: Page number, default is 1, add 1 for each page. ### Return: - Home short drama feed data # [示例/Example] page = 1

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false}]`

## `mcp_5271e28a90671f75aff25241`

生成短连接/Generate short URL

- Risk: `read`
- Parameters: `[{"name":"original_url","type":"string","required":true}]`

## `mcp_6956a7e0c25db0c2a442e7f1`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data, support photo, video, etc. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. - cell_type: Video type

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false}]`

## `mcp_73eadbf589f1398c0ca515ff`

# [中文] ### 用途: - 获取用户的关注列表。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 用户关注列表 # [English] ### Purpose: - Get user's following list. ### Parameters: - user_id: AKA user id, can be obtained from the share link. - cursor: Page cursor, defa

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_86c710cbebbe7c5a40859e9c`

# [中文] ### 用途: - 增加作品浏览数。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 ### 返回: - 执行结果 # [English] ### Purpose: - Increase post view count. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. - cell_type: Video type, 1 for video, keep the default va

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false}]`

## `mcp_8ff8b3231be633433f33648d`

# [中文] ### 用途: - 获取话题作品列表数据。 ### 参数: - hashtag_id: 话题id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 - feed_count: 翻页数量，默认为0，后续每次翻页加1，比如第一页为0，第二页为1，第三页为2，以此类推。 - hashtag_request_type: 话题请求类型，默认为0，可用值如下： - 0: 热门 - 1: 最新 - 2: 精华 - hashtag_sort_type: 话题排序类型，默认为3，可用值如下： - 3:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"feed_count","type":"string","required":false},{"name":"hashtag_id","type":"string","required":true},{"name":"hashtag_request_type","type":"string","required":false},{"name":"hashtag_sort_type","type":"string","required":false}]`

## `mcp_9d14c1ced9b70a6b57084b2c`

# [中文] ### 用途: - 获取作品的评论列表。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 - offset: 翻页游标，默认为0，后续页码从上一页返回的 `offset` Key中获取对应值。 ### 返回: - 作品评论列表 # [English] ### Purpose: - Get the comment list of a post. ### Parameters: - cell_id: AKA video id, can be obtained from the share l

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_a5c5fcc3c573241c8d05513d`

# [中文] ### 用途: - 获取热搜词条数据。 ### 返回: - 热搜词条数据 # [English] ### Purpose: - Get hot search words data. ### Return: - Hot search words data # [示例/Example] 无/None

- Risk: `read`
- Parameters: `[]`

## `mcp_e4843a01cb4c10bb73a076b9`

# [中文] ### 用途: - 获取用户的粉丝列表。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 用户粉丝列表 # [English] ### Purpose: - Get user's follower list. ### Parameters: - user_id: AKA user id, can be obtained from the share link. - cursor: Page cursor, defau

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_f960e31c516629deeaa79b13`

# [中文] ### 用途: - 获取用户作品列表，如视频、图文等。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 - feed_count: 翻页数量，默认为0，后续每次翻页加1，比如第一页为0，第二页为1，第三页为2，以此类推。 ### 返回: - 用户作品列表 # [English] ### Purpose: - Get user post list, such as videos, photos, etc. ### Parameters:

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"feed_count","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_fddaa6cdde996c46ae1d4ecb`

# [中文] ### 用途: - 获取热搜榜单列表数据。 ### 返回: - 热搜榜单列表数据 # [English] ### Purpose: - Get hot search board list data. ### Return: - Hot search board list data # [示例/Example] 无/None

- Risk: `read`
- Parameters: `[]`
