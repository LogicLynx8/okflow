# Twitter / X MCP 工具

- 来源平台：`Twitter / X`
- 能力分段：`twitter`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 12

## `mcp_32fe2071123477291cf522f4`

# [中文] ### 用途: - 获取推文下的评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 评论 # [English] ### Purpose: - Get comments under the tweet ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: - Com

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_342151edd9c9183804de9dde`

获取用户媒体/Get user media

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_44f64b118c4c0e12e2f68706`

获取用户推文回复/Get user tweet replies

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_5d60c638630f6c9eeb025ed4`

用户粉丝/User Followers

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_8ab07d9135a0dfe6b5a18ec7`

用户关注/User Followings

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"screen_name","type":"string","required":true}]`

## `mcp_912e6d8199c8c26de6d9f067`

获取单个推文数据/Get single tweet data

- Risk: `read`
- Parameters: `[{"name":"tweet_id","type":"string","required":true}]`

## `mcp_9ce100d25ff03c39ae88d1ee`

# [中文] ### 用途: - 搜索 ### 参数: - keyword: 搜索关键字 - search_type: 搜索类型，默认为Top，其他可选值为Latest，Media，People, Lists - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 搜索结果 # [English] ### Purpose: - Search ### Parameters: - keyword: Search keyword - search_type: Search type, default is Top, other optional va

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"search_type","type":"string","required":false}]`

## `mcp_9debca827a089070ef38aba6`

获取用户发帖/Get user post

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_b781af0abd13f46ae3bfa0c3`

获取用户资料/Get user profile

- Risk: `read`
- Parameters: `[{"name":"rest_id","type":"integer","required":false},{"name":"screen_name","type":"string","required":false}]`

## `mcp_babebedafecde8e737c4b2c2`

# [中文] ### 用途: - 获取趋势 ### 参数: - country: 国家，默认为UnitedStates，其他可选值见下方 - China - India - Japan - Russia - Germany - Indonesia - Brazil - France - UnitedKingdom - Turkey - Italy - Mexico - SouthKorea - Canada - Spain - SaudiArabia - Egypt - Australia - Poland - Iran - Pakistan - Vietnam - Nigeria - Ban

- Risk: `read`
- Parameters: `[{"name":"country","type":"string","required":false}]`

## `mcp_f10984551dc7c7b5a641beff`

# [中文] ### 用途: - 获取最新的推文评论 ### 参数: - tweet_id: 推文ID - cursor: 游标，默认为None，用于翻页，后续从上一次请求的返回结果中获取 ### 返回: - 推文评论 # [English] ### Purpose: - Get the latest tweet comments ### Parameters: - tweet_id: Tweet ID - cursor: Cursor, default is None, used for paging, obtained from the last request ### Return: -

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`

## `mcp_f2948d187b02762e2e685869`

转推用户列表/ReTweet User list

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"tweet_id","type":"string","required":true}]`
