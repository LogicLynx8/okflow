# Twitter / X MCP 工具

- 来源平台：`Twitter / X`
- 能力分段：`twitter`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 25

## `mcp_004e02cc698ecb4d3da952ce`

# [中文] ### 用途: - 获取社区成员列表 ### ⚠️ 本接口不支持分页（No pagination） - 单次调用只返回第一页，约 19 条成员，无法获取更多。 - 上游虽然会在响应里给出 next_cursor，但把该 cursor 传回去只会得到空列表 （已在多个不同规模的社区上验证，行为一致）。 - cursor 参数仅为兼容上游后续修复而保留，当前传入无任何效果，请勿依赖。 - 如需完整成员名单，本接口无法满足。 ### 参数: - community_id: 社区ID，例如：1493290339532222469 - cursor: 游标，默认为None。本接口不支持分页

- Risk: `read`
- Parameters: `[{"name":"community_id","type":"string","required":true},{"name":"cursor","type":"string","required":false}]`

## `mcp_00abf414bc8675b942eb9574`

# [中文] ### 用途: - 获取用户账号档案信息 ### 参数: - screen_name: 用户名，例如：elonmusk ### 返回: - 用户账号档案信息，包含注册时间、账号状态、使用情况等 # [English] ### Purpose: - Get user about profile ### Parameters: - screen_name: Screen name, for example: elonmusk ### Return: - User account profile info, including registration time, account st

- Risk: `read`
- Parameters: `[{"name":"screen_name","type":"string","required":true}]`

## `mcp_0bca98dd263b27b03a585057`

# [中文] ### 用途: - 获取趋势 ### 参数: - country: 国家，默认为UnitedStates，其他可选值见下方 - China - India - Japan - Russia - Germany - Indonesia - Brazil - France - UnitedKingdom - Turkey - Italy - Mexico - SouthKorea - Canada - Spain - SaudiArabia - Egypt - Australia - Poland - Iran - Pakistan - Vietnam - Nigeria - Ban

- Risk: `read`
- Parameters: `[{"name":"country","type":"string","required":false}]`

## `mcp_16bc69ab0de06212aab59b9c`

用户粉丝/User Followers

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_221c5f87bf42f1b8dd74623f`

转推用户列表/ReTweet User list

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_303fd50feda28facf94ba29a`

获取用户媒体/Get user media

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_338bbdcf3683b6559c065ac1`

# [中文] ### 用途: - 获取列表帖子 ### 参数: - list_id: 列表ID，例如：84839422 - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 next_cursor 获取 ### 返回: - 列表帖子 # [English] ### Purpose: - Get list timeline ### Parameters: - list_id: List ID, for example: 84839422 - cursor: Cursor, default is None, used for paging, obtained from `next

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"list_id","type":"string","required":true}]`

## `mcp_4d52fb23dc2fb8898a51e0a6`

# [中文] ### 用途: - 搜索 ### 参数: - keyword: 搜索关键字 - search_type: 搜索类型，默认为Top，其他可选值为Latest，Media，People, Lists - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 搜索结果 ### 关于搜索结果准确性的说明: - X 的搜索并不保证关键词或话题标签一定出现在推文正文（text 字段）中。 - 匹配范围远大于正文，还包括：被引用的推文、外链文章的元数据、媒体内容以及账号信号。 - 因此返回的推文完全可能是一条合法匹配，但关键词根本不在 text

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_type","type":"string","required":false}]`

## `mcp_5388fd7c277e8e63105b4dbb`

# [中文] ### 用途: - 获取列表关注者 ### 参数: - list_id: 列表ID，例如：84839422 - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 next_cursor 获取 ### 返回: - 列表关注者 # [English] ### Purpose: - Get list followers ### Parameters: - list_id: List ID, for example: 84839422 - cursor: Cursor, default is None, used for paging, obtained from `n

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"list_id","type":"string","required":true}]`

## `mcp_62645c118d36283e46e8a3bc`

# [中文] ### 用途: - 获取用户关联子账号 ### 参数: - screen_name: 用户名，例如：NASA。需为拥有子账号的机构账号，普通个人账号会返回空列表 - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 next_cursor 获取 ### 返回: - 用户关联子账号列表 # [English] ### Purpose: - Get user affiliates ### Parameters: - screen_name: Screen name, for example: NASA. Must be an organization account

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_7358d050991d2141764b20af`

# [中文] ### 用途: - 获取最新的推文评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 推文评论 # [English] ### Purpose: - Get the latest tweet comments ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: -

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_736f5e6485d3d68c99a0916c`

获取单个推文数据/Get single tweet data

- Risk: `read`
- Parameters: `[{"name":"tweet_id","type":"string","required":true}]`

## `mcp_7cb6855c0bc8885dd3fbdaf6`

# [中文] ### 用途: - 获取社区详情 ### 参数: - community_id: 社区ID，例如：1493290339532222469 ### 返回: - 社区详情，包含社区名称、简介、成员数、主题分类、规则等 ### 注意: - 上游返回体中的 status 字段是"社区加入状态"（实测恒为 failed），与请求成败无关，请勿据此判断成功与否。 # [English] ### Purpose: - Get community info ### Parameters: - community_id: Community ID, for example: 14932903395

- Risk: `read`
- Parameters: `[{"name":"community_id","type":"string","required":true}]`

## `mcp_8eb0d2dab5b601b8509ac228`

# [中文] ### 用途: - 获取社区帖子列表 ### 参数: - community_id: 社区ID，例如：1493290339532222469 - ranking: 排序方式，可选，默认为None（上游默认排序），可选值为 Relevance、Recency - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 cursor 获取 ### 返回: - 社区帖子列表 # [English] ### Purpose: - Get community timeline ### Parameters: - community_id: Community ID, for e

- Risk: `read`
- Parameters: `[{"name":"community_id","type":"string","required":true},{"name":"cursor","type":"string","required":false},{"name":"ranking","type":"string","required":false}]`

## `mcp_9bec64338bdfa0e8251a9d02`

用户关注/User Followings

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_9f841b5084c0d0abc5ecd0d5`

获取用户资料/Get user profile

- Risk: `read`
- Parameters: `[{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_a84ef9bf07d5b444f98a1421`

# [中文] ### 用途: - 检查用户是否正在直播 ### 参数: - rest_id: 用户ID（数字ID），例如：44196397 ### 返回: - 用户当前直播状态 ### 注意: - 本接口必须使用 rest_id（用户数字ID）。传用户名会得到上游的占位响应（所有字段值为 "s"），不是真实数据。 # [English] ### Purpose: - Check user live status ### Parameters: - rest_id: User rest ID (numeric), for example: 44196397 ### Return: - Curre

- Risk: `read`
- Parameters: `[{"name":"rest_id","type":"string","required":true}]`

## `mcp_c5917966bc7516c932fadfe4`

# [中文] ### 用途: - 获取推文下的评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 评论 # [English] ### Purpose: - Get comments under the tweet ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: - Com

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_dac42ed764e8d688867e2404`

# [中文] ### 用途: - 搜索社区 ### 参数: - keyword: 搜索关键字，例如：superman - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 next_cursor 获取 ### 返回: - 社区搜索结果 # [English] ### Purpose: - Search communities ### Parameters: - keyword: Search keyword, for example: superman - cursor: Cursor, default is None, used for paging, obtained f

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true}]`

## `mcp_dcbf16f83b5d44a9357de9c6`

# [中文] ### 用途: - 检查用户是否转推了某条推文 ### 参数: - screen_name: 用户名，例如：elonmusk - tweet_id: 推文ID，例如：1808168603721650364 ### 返回: - 是否转推的判断结果 # [English] ### Purpose: - Check retweet ### Parameters: - screen_name: Screen name, for example: elonmusk - tweet_id: Tweet ID, for example: 1808168603721650364 ### Retu

- Risk: `read`
- Parameters: `[{"name":"screen_name","type":"string","required":true},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_e1d44d243d01e90c1a500c11`

# [中文] ### 用途: - 获取列表成员 ### 参数: - list_id: 列表ID，例如：84839422 - cursor: 游标，默认为None，用于翻页，从上一次返回结果的 next_cursor 获取 ### 返回: - 列表成员 # [English] ### Purpose: - Get list members ### Parameters: - list_id: List ID, for example: 84839422 - cursor: Cursor, default is None, used for paging, obtained from `next_

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"list_id","type":"string","required":true}]`

## `mcp_ecced6a0810480fee7945a31`

获取用户推文回复/Get user tweet replies

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_f3dcc641c4d75688c38f1904`

获取用户发帖/Get user post

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_f614d06867830fa72271a236`

# [中文] ### 用途: - 批量根据用户ID获取用户资料 ### 参数: - rest_ids: 用户ID，多个用英文逗号分隔，例如：44196397,34743251 ### 返回: - 用户资料列表 # [English] ### Purpose: - Get profiles by rest ids ### Parameters: - rest_ids: User IDs, comma separated, for example: 44196397,34743251 ### Return: - User profile list # [示例/Example] rest_ids =

- Risk: `read`
- Parameters: `[{"name":"rest_ids","type":"string","required":true}]`

## `mcp_fad704f636772fadcf98e7db`

# [中文] ### 用途: - 检查用户是否关注了另一个用户 ### 参数: - user_name: 发起关注的用户名，例如：elonmusk - follows: 被关注的用户名，例如：NASA ### 返回: - 是否关注的判断结果 # [English] ### Purpose: - Check follow ### Parameters: - user_name: Source screen name, for example: elonmusk - follows: Target screen name, for example: NASA ### Return: - Follo

- Risk: `read`
- Parameters: `[{"name":"follows","type":"string","required":true},{"name":"user_name","type":"string","required":true}]`
