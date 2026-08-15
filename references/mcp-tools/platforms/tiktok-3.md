# TikTok MCP 工具

- 来源平台：`TikTok`
- 能力分段：`tiktok-3`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 5

## `mcp_f70238ef0efe13ffcced6351`

# [中文] ### 用途: - 获取TikTok Shop商品详情 - 提供最完整的商品信息，包括推荐商品、相关视频、店铺信息等 - 适用于所有地区的商品 ### 参数: - product_id: 商品ID (必填) - region: 地区代码 (US/GB/SG/MY/PH/TH/VN/ID) ### 重要提示: - **请务必确保 `product_id` 对应的 `region` 是正确的，否则接口将不会返回数据。** - 由于接口风控原因，请务必将请求timeout设置为30秒 - 如遇到400错误代码，请重试请求3次 ### 返回数据结构: ```json { "code":

- Risk: `read`
- Parameters: `[{"name":"product_id","type":"string","required":true},{"name":"region","type":"string","required":false}]`

## `mcp_fa23023f72eae56fae2bf0d2`

# [中文] ### 用途: - 通过直播链接获取直播间信息 - 此接口可获取离线直播间信息 ### 参数: - live_room_url: 直播间链接 ### 返回: - 直播间信息 # [English] ### Purpose: - Get live room information via live link - This interface can get offline live room information ### Parameters: - live_room_url: Live room link ### Return: - Live room information

- Risk: `read`
- Parameters: `[{"name":"live_room_url","type":"string","required":true}]`

## `mcp_fc477a5c20245086b7360631`

获取用户的播放列表/Get user play list

- Risk: `read`
- Parameters: `[{"name":"count","type":"integer","required":false},{"name":"cursor","type":"integer","required":false},{"name":"secUid","type":"string","required":true}]`

## `mcp_fc6502efd42012e7027f2b79`

获取热门标签详情(趋势)/Get trending hashtag detail

- Risk: `write`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"hashtag_id","type":"string","required":true},{"name":"time_range","type":"integer","required":false}]`

## `mcp_fdb304b3795b0e4073858c24`

# [中文] ### 用途: - 获取直播间首页推荐列表 ### 参数: - related_live_tag: 相关直播标签(直播分类)。该参数的可选值不固定，请先调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签列表，再从中选取传入。 ### 返回: - 直播间首页推荐列表 ### 备注: - 不清楚 `related_live_tag` 可以传哪些值时，请调用 `/fetch_live_recommend_tabs` 接口获取当前可用的标签(分类 Tab)列表。 - 此接口返回的视频CDN直链需要携带返回的 `tt_chain_token` 才能访问，

- Risk: `read`
- Parameters: `[{"name":"related_live_tag","type":"string","required":true}]`
