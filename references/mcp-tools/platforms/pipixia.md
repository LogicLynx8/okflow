# 皮皮虾 MCP 工具

- 来源平台：`皮皮虾`
- 能力分段：`pipixia`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 17

## `mcp_1770b3f22d69e1ef767adc41`

生成短连接/Generate short URL

- Risk: `read`
- Parameters: `[{"name":"original_url","type":"string","required":true}]`

## `mcp_203f338d7283ee4e1feb51b6`

# [中文] ### 用途: - 获取热搜榜单详情数据。 ### 参数: - block_type: 榜单类型，可以从`/fetch_hot_search_board_list`接口中获取。 ### 返回: - 热搜榜单详情数据 # [English] ### Purpose: - Get hot search board detail data. ### Parameters: - block_type: Board type, can be obtained from the `/fetch_hot_search_board_list` interface. ### Return: - H

- Risk: `read`
- Parameters: `[{"name":"block_type","type":"integer","required":true}]`

## `mcp_2aa45fcb8a67b06b1b1c8a15`

# [中文] ### 用途: - 获取用户的粉丝列表。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 用户粉丝列表 # [English] ### Purpose: - Get user's follower list. ### Parameters: - user_id: AKA user id, can be obtained from the share link. - cursor: Page cursor, defau

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_2f09501a453f9fd73bc4c655`

# [中文] ### 用途: - 获取用户作品列表，如视频、图文等。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 - feed_count: 翻页数量，默认为0，后续每次翻页加1，比如第一页为0，第二页为1，第三页为2，以此类推。 ### 返回: - 用户作品列表 # [English] ### Purpose: - Get user post list, such as videos, photos, etc. ### Parameters: 

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"feed_count","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_3001b0db9f9653ae0a7366fd`

# [中文] ### 用途: - 获取用户的关注列表。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 用户关注列表 # [English] ### Purpose: - Get user's following list. ### Parameters: - user_id: AKA user id, can be obtained from the share link. - cursor: Page cursor, defa

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_40b0833225faa11693846df7`

# [中文] ### 用途: - 获取话题作品列表数据。 ### 参数: - hashtag_id: 话题id，可以从分享链接中获取。 - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 - feed_count: 翻页数量，默认为0，后续每次翻页加1，比如第一页为0，第二页为1，第三页为2，以此类推。 - hashtag_request_type: 话题请求类型，默认为0，可用值如下： - 0: 热门 - 1: 最新 - 2: 精华 - hashtag_sort_type: 话题排序类型，默认为3，可用值如下： - 3: 

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"feed_count","type":"string","required":false},{"name":"hashtag_id","type":"string","required":true},{"name":"hashtag_request_type","type":"string","required":false},{"name":"hashtag_sort_type","type":"string","required":false}]`

## `mcp_57654164051b1d731f3df66b`

# [中文] ### 用途: - 搜索接口，支持搜索用户、作品等。 ### 参数: - keyword: 搜索关键词。 - offset: 翻页游标，默认为0，后续页码从上一页返回的 `offset` Key中获取对应值。 - search_type: 搜索类型，可用值如下： - 1: 综合 - 8: 热门 - 9: 新鲜 - 2：视频 - 3：图文 - 4：用户 - 5：话题 ### 返回: - 搜索结果 # [English] ### Purpose: - Search API, support search user, post, etc. ### Parameters: - keywo

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"offset","type":"string","required":false},{"name":"search_type","type":"string","required":false}]`

## `mcp_6760574ee4efe02aedf01bd4`

# [中文] ### 用途: - 获取热搜榜单列表数据。 ### 返回: - 热搜榜单列表数据 # [English] ### Purpose: - Get hot search board list data. ### Return: - Hot search board list data # [示例/Example] 无/None

- Risk: `read`
- Parameters: `[]`

## `mcp_925c79993263951a23786a5c`

# [中文] ### 用途: - 获取单个作品数据，支持图文、视频等。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 ### 返回: - 作品数据 # [English] ### Purpose: - Get single video data, support photo, video, etc. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. - cell_type: Video type

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false}]`

## `mcp_9772ebd4f8cdcbdf4b8c63c0`

# [中文] ### 用途: - 获取热搜词条数据。 ### 返回: - 热搜词条数据 # [English] ### Purpose: - Get hot search words data. ### Return: - Hot search words data # [示例/Example] 无/None

- Risk: `read`
- Parameters: `[]`

## `mcp_9e61c14b2d7a32c5fb872229`

# [中文] ### 用途: - 获取单个作品的统计数据，如点赞数、评论数、转发数等。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 ### 返回: - 作品统计数据 # [English] ### Purpose: - Get the statistics of a single post, such as the number of likes, comments, reposts, etc. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. ### Retu

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true}]`

## `mcp_a67e1c2d1dd702992df676d6`

# [中文] ### 用途: - 获取首页短剧推荐数据。 ### 参数: - page: 页码，默认为1，每次翻页加1。 ### 返回: - 首页短剧推荐数据 # [English] ### Purpose: - Get home short drama feed data. ### Parameters: - page: Page number, default is 1, add 1 for each page. ### Return: - Home short drama feed data # [示例/Example] page = 1

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false}]`

## `mcp_aead1a0cb155492cb1b326df`

# [中文] ### 用途: - 获取首页推荐数据。 ### 参数: - cursor: 翻页游标，默认为0，后续页码从上一页返回的 `loadmore_cursor` Key中获取对应值。 ### 返回: - 首页推荐数据 # [English] ### Purpose: - Get home feed data. ### Parameters: - cursor: Page cursor, default is 0, get the corresponding value from the `loadmore_cursor` Key in the previous page. ### Re

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false}]`

## `mcp_b15de53ee4429743b6b48410`

# [中文] ### 用途: - 获取话题详情数据。 ### 参数: - hashtag_id: 话题id，可以从分享链接中获取。 ### 返回: - 话题详情数据 # [English] ### Purpose: - Get hashtag detail data. ### Parameters: - hashtag_id: AKA hashtag id, can be obtained from the share link. ### Return: - Hashtag detail data # [示例/Example] hashtag_id = "129559"

- Risk: `read`
- Parameters: `[{"name":"hashtag_id","type":"string","required":true}]`

## `mcp_beacbd6cd3581e14debc456d`

# [中文] ### 用途: - 获取作品的评论列表。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 - offset: 翻页游标，默认为0，后续页码从上一页返回的 `offset` Key中获取对应值。 ### 返回: - 作品评论列表 # [English] ### Purpose: - Get the comment list of a post. ### Parameters: - cell_id: AKA video id, can be obtained from the share l

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false},{"name":"offset","type":"string","required":false}]`

## `mcp_cc996d0140c2963b8efbb4ac`

# [中文] ### 用途: - 获取用户信息，如昵称、性别、头像等。 ### 参数: - user_id: 用户id，可以从分享链接中获取。 ### 返回: - 用户信息 # [English] ### Purpose: - Get user information, such as nickname and avatar. ### Parameters: - user_id: AKA user id, can be obtained from the share link. ### Return: - User information # [示例/Example] user_id = "1

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_cd7f46e75cba7f507c190146`

# [中文] ### 用途: - 增加作品浏览数。 ### 参数: - cell_id: 作品id，可以从分享链接中获取。 - cell_type: 作品类型，1为视频，多大数保持默认值即可。 ### 返回: - 执行结果 # [English] ### Purpose: - Increase post view count. ### Parameters: - cell_id: AKA video id, can be obtained from the share link. - cell_type: Video type, 1 for video, keep the default va

- Risk: `read`
- Parameters: `[{"name":"cell_id","type":"string","required":true},{"name":"cell_type","type":"integer","required":false}]`
