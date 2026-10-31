# 西瓜视频 MCP 工具

- 来源平台：`西瓜视频`
- 能力分段：`xigua`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 7

## `mcp_2228cea06599d878d4229bc9`

# [中文] ### 用途: - 获取个人作品列表 ### 参数: - user_id: 用户id - max_behot_time: 最大行为时间，默认空，第一次请求传空，后续请求传上一次请求返回数据中的JSON中的值。 - max_behot_time的值可以是JSON路径为：$.data.data.[-1].behot_time - 也就是data中的最后一个元素的cursor值 ### 返回: - 作品列表 # [English] ### Purpose: - Get user post list ### Parameters: - user_id: User id - max_beh

- Risk: `read`
- Parameters: `[{"name":"max_behot_time","type":"string","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_3580ec010f6ebaf04201294d`

# [中文] ### 用途: - 获取单个作品数据（信息全面，包含标题等信息，但是不包含相关视频推荐信息） ### 参数: - item_id: 作品id ### 返回: - 作品数据，其中包含视频链接的Base64编码播放地址，需要前端解码后使用，或者使用 /fetch_one_video_play_url 获取播放链接。 # [English] ### Purpose: - Get single video data (more comprehensive information, including title and other information, but not includi

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_693c41b25f38e98a825b3898`

# [中文] ### 用途: - 视频评论列表 ### 参数: - item_id: 作品id - offset: 偏移量，第一次请求传0，后续请求传上一次请求返回的offset - count: 数量，默认20，建议保持默认。 ### 返回: - 评论列表 # [English] ### Purpose: - Video comment list ### Parameters: - item_id: Video id - offset: Offset, pass 0 for the first request, pass the offset returned by the previous

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"item_id","type":"string","required":true},{"name":"offset","type":"integer","required":false}]`

## `mcp_742ea28beddb6a3d9326c822`

# [中文] ### 用途: - 个人信息 ### 参数: - user_id: 用户id ### 返回: - 个人信息 # [English] ### Purpose: - Personal information ### Parameters: - user_id: User id ### Return: - Personal information # [示例/Example] user_id: "52712347586"

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_84fb907bd936cfb535df94f4`

# [中文] ### 用途: - 获取单个作品数据（信息较少，不包含标题等信息，但是包含相关视频的信息） ### 参数: - item_id: 作品id ### 返回: - 作品数据，其中包含视频链接的Base64编码播放地址，需要前端解码后使用，或者使用 /fetch_one_video_play_url 获取播放链接。 # [English] ### Purpose: - Get single video data (less information, does not include title and other information, but includes informatio

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_a640513485135c78c9a83b98`

# [中文] ### 用途: - 获取单个作品的播放链接，此接口返回的是已经解码后的播放链接，可以直接使用。 ### 参数: - item_id: 作品id ### 返回: - 作品的播放链接的明文链接。 # [English] ### Purpose: - Get single video play URL, the interface returns the decoded play URL, which can be used directly. ### Parameters: - item_id: Video id ### Return: - Play URL of the video

- Risk: `read`
- Parameters: `[{"name":"item_id","type":"string","required":true}]`

## `mcp_ffa93e089da8047dd9e77bda`

# [中文] ### 用途: - 搜索视频 ### 参数: - keyword: 关键词 - offset: 偏移量，第一次请求传0，后续请求传上一次请求返回的offset - order_type: 排序方式，为空时按照默认排序，以下为可选排序方式。 - 最新: publish_time - 最热: play_count - min_duration: 最小时长，默认空，单位秒。 - max_duration: 最大时长，默认空，单位秒。 ### 返回: - 视频列表 # [English] ### Purpose: - Search video ### Parameters: - keyw

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"max_duration","type":"integer","required":false},{"name":"min_duration","type":"integer","required":false},{"name":"offset","type":"integer","required":false},{"name":"order_type","type":"string","required":false}]`
