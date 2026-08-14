# Twitter / X MCP 工具

- 来源平台：`Twitter / X`
- 能力分段：`twitter`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 12

## `mcp_055ca1fd6a1fdb9f35281193`

获取用户资料/Get user profile

- Risk: `read`
- Parameters: `[{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_0656ee11b7e8fee2e6b91a5c`

获取单个推文数据/Get single tweet data

- Risk: `read`
- Parameters: `[{"name":"tweet_id","type":"string","required":true}]`

## `mcp_12f6be438267e6bec3e209e4`

转推用户列表/ReTweet User list

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_384783391d05b827e7716f73`

获取用户媒体/Get user media

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_4d70f6512a546ac7139038b0`

用户关注/User Followings

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_61d3115f45d616a9c19b672e`

获取用户推文回复/Get user tweet replies

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_7b460d166f771eba5e6d41cb`

获取用户发帖/Get user post

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_8b9d3977fb6d4785775bd7ad`

# [中文] ### 用途: - 获取推文下的评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 评论 # [English] ### Purpose: - Get comments under the tweet ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: - Com

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_8cbde8ad3f2f20d0fb4d9f72`

# [中文] ### 用途: - 获取最新的推文评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 推文评论 # [English] ### Purpose: - Get the latest tweet comments ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: -

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_92d9e3fb8fa574b01c841ca2`

# [中文] ### 用途: - 搜索 ### 参数: - keyword: 搜索关键字 - search_type: 搜索类型，默认为Top，其他可选值为Latest，Media，People, Lists - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 搜索结果 # [English] ### Purpose: - Search ### Parameters: - keyword: Search keyword - search_type: Search type, default is Top, other optional va

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_type","type":"string","required":false}]`

## `mcp_db9e5d65de132e6de4be8c84`

用户粉丝/User Followers

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_fd6b2d69fa857c5c3ca5e856`

# [中文] ### 用途: - 获取趋势 ### 参数: - country: 国家，默认为UnitedStates，其他可选值见下方 - China - India - Japan - Russia - Germany - Indonesia - Brazil - France - UnitedKingdom - Turkey - Italy - Mexico - SouthKorea - Canada - Spain - SaudiArabia - Egypt - Australia - Poland - Iran - Pakistan - Vietnam - Nigeria - Ban

- Risk: `read`
- Parameters: `[{"name":"country","type":"string","required":false}]`
