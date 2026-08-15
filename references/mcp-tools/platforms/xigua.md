# 西瓜视频 MCP 工具

- 来源平台：`西瓜视频`
- 能力分段：`xigua`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 7

## `mcp_13ade9506c791d0684729d2e`

# [中文] ### 用途: - 获取单个作品数据（信息全面，包含标题等信息，但是不包含相关视频推荐信息） ### 参数: - item_id: 作品id ### 返回: - 作品数据，其中包含视频链接的Base64编码播放地址，需要前端解码后使用，或者使用 /fetch_one_video_play_url 获取播放链接。 # [English] ### Purpose: - Get single video data (more comprehensive information, including title and other information, but not includi

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_307b0bab9645d39ff4ea458b`

# [中文] ### 用途: - 搜索视频 ### 参数: - keyword: 关键词 - offset: 偏移量，第一次请求传0，后续请求传上一次请求返回的offset - order_type: 排序方式，为空时按照默认排序，以下为可选排序方式。 - 最新: publish_time - 最热: play_count - min_duration: 最小时长，默认空，单位秒。 - max_duration: 最大时长，默认空，单位秒。 ### 返回: - 视频列表 # [English] ### Purpose: - Search video ### Parameters: - keyw

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"max_duration","type":"integer","required":false},{"name":"min_duration","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order_type","type":"string","required":false}]`

## `mcp_860a0a9f3201aa3cc8438a16`

# [中文] ### 用途: - 获取个人作品列表 ### 参数: - user_id: 用户id - max_behot_time: 最大行为时间，默认空，第一次请求传空，后续请求传上一次请求返回数据中的JSON中的值。 - max_behot_time的值可以是JSON路径为：$.data.data.[-1].behot_time - 也就是data中的最后一个元素的cursor值 ### 返回: - 作品列表 # [English] ### Purpose: - Get user post list ### Parameters: - user_id: User id - max_beh

- Risk: `read`
- Parameters: `[{"name":"max_behot_time","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_8f2da4253e44e2c18b464d88`

# [中文] ### 用途: - 视频评论列表 ### 参数: - item_id: 作品id - offset: 偏移量，第一次请求传0，后续请求传上一次请求返回的offset - count: 数量，默认20，建议保持默认。 ### 返回: - 评论列表 # [English] ### Purpose: - Video comment list ### Parameters: - item_id: Video id - offset: Offset, pass 0 for the first request, pass the offset returned by the previous

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"item_id","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_ad3831e53c05b8fad45f5069`

# [中文] ### 用途: - 个人信息 ### 参数: - user_id: 用户id ### 返回: - 个人信息 # [English] ### Purpose: - Personal information ### Parameters: - user_id: User id ### Return: - Personal information # [示例/Example] user_id: "52712347586"

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_ddc568ef8b8d98953305f7a8`

# [中文] ### 用途: - 获取单个作品的播放链接，此接口返回的是已经解码后的播放链接，可以直接使用。 ### 参数: - item_id: 作品id ### 返回: - 作品的播放链接的明文链接。 # [English] ### Purpose: - Get single video play URL, the interface returns the decoded play URL, which can be used directly. ### Parameters: - item_id: Video id ### Return: - Play URL of the video

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_e1ad607d9cd379674498126d`

# [中文] ### 用途: - 获取单个作品数据（信息较少，不包含标题等信息，但是包含相关视频的信息） ### 参数: - item_id: 作品id ### 返回: - 作品数据，其中包含视频链接的Base64编码播放地址，需要前端解码后使用，或者使用 /fetch_one_video_play_url 获取播放链接。 # [English] ### Purpose: - Get single video data (less information, does not include title and other information, but includes informatio

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`
