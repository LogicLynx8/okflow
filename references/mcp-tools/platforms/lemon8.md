# Lemon8 MCP 工具

- 来源平台：`Lemon8`
- 能力分段：`lemon8`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 16

## `mcp_02b855715e4da11031ad67d1`

# [中文] ### 用途: - 获取指定作品的信息 ### 参数: - item_id: 作品ID，可以从接口`/lemon8/app/get_item_id`获取 ### 返回: - 作品信息 # [English] ### Purpose: - Get information of specified post ### Parameters: - item_id: Post ID, can be obtained from the interface `/lemon8/app/get_item_id` ### Return: - Post information # [示例/Exampl

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_0e17a836d863f69c0b05d9d6`

# [中文] ### 用途: - 获取发现页Banner（搜索页上方的滚动内容） ### 返回: - Banner列表 # [English] ### Purpose: - Get banners of discover page ### Return: - Banners list # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_0e17fb752159fefe2b31389b`

# [中文] ### 用途: - 获取热搜关键词 ### 返回: - 热搜关键词列表 # [English] ### Purpose: - Get hot search keywords ### Return: - Hot search keywords list # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_0e7aac34dfa808026bdde56e`

# [中文] ### 用途: - 获取发现页（搜索页下方的推荐内容 - Editor's Picks） ### 返回: - 推荐内容 # [English] ### Purpose: - Get Editor's Picks of discover page ### Return: - Editor's Picks # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_117c4a780b3883679b437d9b`

# [中文] ### 用途: - 获取指定作品的评论列表 ### 参数: - group_id: 作品的group_id，可以从接口`/lemon8/app/fetch_post_detail`获取 - item_id: 作品的item_id，可以从接口`/lemon8/app/fetch_post_detail` 或 `/lemon8/app/get_item_id`获取 - media_id: 作品的media_id，可以从接口`/lemon8/app/fetch_post_detail`获取 - offset: 翻页参数，可以从上一次请求的返回结果中获取，第一次请求为空，后续请求使用上一

- Risk: `read`
- Parameters: `[{"name":"group_id","type":"string","required":true},{"name":"item_id","type":"string","required":true},{"name":"media_id","type":"string","required":true},{"name":"offset","type":"string","required":false}]`

## `mcp_12fc7a4a926562fbb4a1006a`

# [中文] ### 用途: - 获取话题信息 ### 参数: - forum_id: 话题ID，可以从下面的接口获取 - 获取指定作品的信息：`/lemon8/app/fetch_post_detail` - 获取发现页的 Editor's Picks：`/lemon8/app/fetch_discover_tab_information_tabs` - 通过接口搜索 Hashtag：`/lemon8/app/fetch_search?search_tab=hashtag&keyword=lemon8` ### 返回: - 话题信息 # [English] ### Purpose: - Ge

- Risk: `read`
- Parameters: `[{"name":"forum_id","type":"string","required":true}]`

## `mcp_288ca7396a42a20b06914557`

# [中文] ### 用途: - 通过分享链接获取作品ID ### 参数: - share_text: 分享链接，支持长链接和短链接，可以从网页端以及APP中的分享按钮获取并复制。 ### 返回: - 作品ID # [English] ### Purpose: - Get post ID through sharing link ### Parameters: - share_text: Share link, supports long links and short links, can be obtained and copied from the share button on the

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":true}]`

## `mcp_2a160fa4cbd297a7c636fe0f`

# [中文] ### 用途: - 获取发现页（搜索页主体内容） ### 返回: - 主体内容 # [English] ### Purpose: - Get main content of discover page ### Return: - Main content # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_47a78fec310974d59f6e7c4b`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - user_id: 用户ID，可以从接口`/lemon8/app/get_user_id`获取 ### 返回: - 用户信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - user_id: User ID, can be obtained from the interface `/lemon8/app/get_user_id` ### Return: - User information # [示例/Exampl

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_75855c276fd9aafd8fb9f21b`

# [中文] ### 用途: - 搜索接口 ### 参数: - query: 搜索关键词 - max_cursor: 翻页参数，可以从上一次请求的返回结果中获取，第一次请求为空，后续请求使用上一次请求返回的`max_cursor`进行翻页，可以通过返回结果的`has_more`字段判断是否还有更多数据。 - filter_type: 搜索过滤类型，默认为空字符串，可选值如下： - 空字符串：All（全部，默认使用此参数搜索） - video：只搜索视频作品 - posts：只搜索文章作品 - order_by: 搜索排序方式，默认为空字符串，可选值如下： - 空字符串：Relevance（相关

- Risk: `read`
- Parameters: `[{"name":"filter_type","type":"string","required":false},{"name":"max_cursor","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"query","type":"string","required":true},{"name":"search_tab","type":"string","required":false}]`

## `mcp_7e8377da6aa4dcf482113174`

# [中文] ### 用途: - 获取指定用户的关注列表 ### 参数: - user_id: 用户ID，可以从接口`/lemon8/app/get_user_id`获取 - cursor: 翻页参数，可以从上一次请求的返回结果中获取，第一次请求为空，后续请求使用上一次请求返回的cursor进行翻页。 ### 返回: - 关注列表 # [English] ### Purpose: - Get following list of specified user ### Parameters: - user_id: User ID, can be obtained from the interfac

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_8fdf515c39e06bb9d1f10e33`

# [中文] ### 用途: - 通过分享链接批量获取用户ID，一次最多获取10个 ### 参数: - share_texts: 分享链接列表，支持长链接和短链接，可以从网页端以及APP中的分享按钮获取并复制。 ### 返回: - 用户ID列表 # [English] ### Purpose: - Get user IDs in batch through sharing links, up to 10 at a time ### Parameters: - share_texts: Share links list, supports long links and short links,

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_932c9254c8417c8d5a796d88`

# [中文] ### 用途: - 获取指定用户的粉丝列表 ### 参数: - user_id: 用户ID，可以从接口`/lemon8/app/get_user_id`获取 - cursor: 翻页参数，可以从上一次请求的返回结果中获取，第一次请求为空，后续请求使用上一次请求返回的cursor进行翻页。 ### 返回: - 粉丝列表 # [English] ### Purpose: - Get fans list of specified user ### Parameters: - user_id: User ID, can be obtained from the interface `/l

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_a76d8367ad5fa93983cf540a`

# [中文] ### 用途: - 获取话题作品列表 ### 参数: - category: 话题分类 ID，可以从接口`/lemon8/app/fetch_topic_info`获取 - max_behot_time: 翻页参数，可以从上一次请求的返回结果中获取，第一次请求为空，后续请求使用上一次请求返回的max_behot_time进行翻页。 - category_parameter: 分类参数ID，可以从接口`/lemon8/app/fetch_topic_info`获取 - hashtag_name: Hashtag名称，可以从接口`/lemon8/app/fetch_topic_inf

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":true},{"name":"category_parameter","type":"string","required":true},{"name":"hashtag_name","type":"string","required":true},{"name":"max_behot_time","type":"string","required":false},{"name":"sort_type","type":"string","required":false}]`

## `mcp_c775fe3b3aba96a1cfd80103`

# [中文] ### 用途: - 通过分享链接批量获取作品ID，一次最多获取10个 ### 参数: - share_texts: 分享链接列表，支持长链接和短链接，可以从网页端以及APP中的分享按钮获取并复制。 ### 返回: - 作品ID列表 # [English] ### Purpose: - Get post IDs in batch through sharing links, up to 10 at a time ### Parameters: - share_texts: Share links list, supports long links and short links,

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_dbd14d858be66ce07ed0b5ac`

# [中文] ### 用途: - 通过分享链接获取用户ID ### 参数: - share_text: 分享链接，支持长链接和短链接，可以从网页端以及APP中的分享按钮获取并复制。 ### 返回: - 用户ID # [English] ### Purpose: - Get user ID through sharing link ### Parameters: - share_text: Share link, supports long links and short links, can be obtained and copied from the share button on the

- Risk: `read`
- Parameters: `[{"name":"share_text","type":"string","required":true}]`
