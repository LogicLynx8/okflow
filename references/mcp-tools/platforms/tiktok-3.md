# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-3`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 5

## `mcp_f91e7ea52cb5419d4d3d0102`

# [中文] ### 用途: - 获取用户的点赞列表 - 注意: 该接口需要用户点赞列表为公开状态 ### 参数: - secUid: 用户secUid - cursor: 翻页游标 - count: 每页数量，默认为20，不可变更。 - coverFormat: 封面格式 - post_item_list_request_type: 排序方式 - 0：默认排序 - 1：热门排序 - 2：最旧排序 ### 返回: - 用户的点赞列表 ### 备注: - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，否则会返回 HTTP 403。 - 访问视频CDN直链时

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"coverFormat","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"post_item_list_request_type","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_fabd07ab93b6762f2f1aec63`

提取单个作品id/Extract single video id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_fb3afccb8a509d6af0a411c9`

批量获取视频信息/Batch Get Video Information

- Risk: `write`
- Parameters: `[{"name":"body","type":"array","required":true}]`

## `mcp_fe23608fb70b1b72754017ba`

# [中文] ### 用途: - 获取指定用户的关注列表数据 ### 参数: - user_id: 用户ID，这是一个纯数字版本的用户ID (与sec_user_id二选一/One of user_id and sec_user_id) - sec_user_id: 用户sec_user_id，这是一个混合字母和数字的版本ID (与user_id二选一/One of user_id and sec_user_id) - count: 数量，不要超过20，保持固定。 - min_time: 最小时间，用于翻页，第一次请求使用默认值0，后续请求使用上一次请求返回的min_time值。 - page

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"min_time","type":"integer","required":false},{"name":"sec_user_id","type":"string","required":false},{"name":"user_id","type":"string","required":false}]`

## `mcp_ff72876abf8f69f82572c76b`

提取用户user_id/Extract user user_id

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`
