# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-3`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 4

## `mcp_fc2c571ad81f5a53e37a4966`

批量查询Gift ID对应的礼物名称($0.025/次,建议50个)/Batch get gift names by gift IDs ($0.025/call, suggest 50)

- Risk: `write`
- Parameters: `[{"name":"gift_ids","type":"array","required":true}]`

## `mcp_fe6588bce70f9ba6060a00de`

# [中文] ### 用途: - 按关键词搜索指定地区的商品。 ### 参数: - search_word: 搜索关键词，必填。 - offset: 分页偏移量，首次请求为 0。 - page_token: 分页标记，首次请求留空。 - region: 商品或商家所在地区，US/SG/MY/PH/TH/VN/ID/JP/MX；GB、BR 暂不支持。 ### 返回与使用说明: - 商品位于 data.data.products；分页状态位于 data.data.has_more。 - 下一页使用 data.data.load_more_params 返回的 offset 和 page_token

- Risk: `read`
- Parameters: `[{"name":"offset","type":"integer","required":false},{"name":"region","type":"string","required":false},{"name":"search_word","type":"string","required":true}]`

## `mcp_ff13a2957e9d151b9b512c74`

# [中文] ### 用途: - 获取创作者搜索洞察详情数据，用于查询特定搜索词条的搜索统计数据 ### 参数: - query_id_str: 搜索词条ID，从 fetch_creator_search_insights 接口返回的数据中获取 - time_range: 时间范围，可选值: - past_7_days: 过去7天 - past_30_days: 过去30天（默认） - past_60_days: 过去60天 - past_6_months: 过去6个月 - custom: 自定义时间（需配合 start_date 和 end_date 使用，不能超过6个月） - start_

- Risk: `read`
- Parameters: `[{"name":"dimension_list","type":"string","required":false},{"name":"end_date","type":"integer","required":false},{"name":"query_id_str","type":"string","required":true},{"name":"start_date","type":"integer","required":false},{"name":"time_range","type":"string","required":false}]`

## `mcp_ffd8df61f89d37b6d1255bb5`

提取用户user_id/Extract user user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`
