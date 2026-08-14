# Telegram MCP 工具

- 来源平台：`Telegram`
- 能力分段：`telegram`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 7

## `mcp_23ef2854d15c10bc5e375297`

# [中文] ### 用途: - 抓取公开频道最近的消息列表（含文本、图片、视频、转发、回复、链接卡、表态、阅读量、时间）。 ### 参数: - channel: 频道用户名（必填）。 - limit: 返回条数（1-100，默认 20；>20 时服务端会自动向更老方向翻页累积）。 - before: 翻页游标 —— 取「更老」的消息，回传上一页响应里的 `data.pagination.before_cursor`。 - after: 翻页游标 —— 取「更新」的消息，回传上一页响应里的 `data.pagination.after_cursor`。 ### 返回: - `channel_i

- Risk: `read`
- Parameters: `[{"name":"after","type":"integer","required":false},{"name":"before","type":"integer","required":false},{"name":"channel","type":"string","required":true},{"name":"limit","type":"integer","required":false}]`

## `mcp_39ec5877b82be73496e14867`

# [中文] ### 用途: - 获取单条公开频道消息（解析自 t.me 的 embed 预览）。 ### 参数: - channel: 频道用户名（必填）。 - post_id: 消息 ID（必填，频道内自增整数）。 ### 返回: - 单条消息对象（结构同 fetch_channel_posts 的 messages 元素）。 # [English] ### Purpose: - Get a single public-channel post (parsed from the t.me embed view). ### Parameters: - channel: Channel use

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":true},{"name":"post_id","type":"integer","required":true}]`

## `mcp_414ca84eae868b078d09504a`

# [中文] ### 用途: - 一次并发抓取多个公开频道的基本信息（标题/简介/头像/订阅数/认证）。 ### 参数: - channels: 逗号分隔的频道用户名，单次最多 20 个。 ### 返回: - `data.results`：每个频道一条 `{channel, ok, info|error}`。 # [English] ### Purpose: - Fetch basic info (title/description/avatar/subscribers/verified) for multiple public channels concurrently. ### Param

- Risk: `read`
- Parameters: `[{"name":"channels","type":"string","required":true}]`

## `mcp_586c1ab3c442f8b80f8cbe49`

# [中文] ### 用途: - 拉取某条频道帖子在其**关联讨论群**里的评论。 ### 参数: - channel: 频道用户名；post_id: 帖子 ID；limit: 返回条数（1-100）。 ### 返回: - 评论列表；频道未开启评论/无关联讨论群时返回空。 - 后端 MTProto 未启用时返回 `mtproto_required = true` 与提示。 # [English] ### Purpose: - Fetch comments of a channel post from its **linked discussion group**. ### Parameters

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"post_id","type":"integer","required":true}]`

## `mcp_5c4bd5cfb94b1ce3bed83ee8`

# [中文] ### 用途: - 在某频道里按关键词搜索消息（大小写不敏感）。 - 后端 MTProto 已启用时走 Telegram 官方服务端搜索，翻遍整个频道历史， 返回 `data.backend = "mtproto"`；否则回退为近期历史的本地过滤，返回 `data.backend = "web"`。 ### 参数: - channel: 频道用户名（必填）。 - query: 关键词（必填）。 - limit: 返回命中条数（1-100，默认 20）。 # [English] ### Purpose: - Search posts in a channel by keyword 

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":true},{"name":"limit","type":"integer","required":false},{"name":"query","type":"string","required":true}]`

## `mcp_87ec31366b9ef125d448fce2`

获取频道信息/Get channel info

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":true}]`

## `mcp_e2d38c20a59adc3b49e42a69`

# [中文] ### 用途: - 获取 Telegram 官方「相似频道」推荐（用于频道发现）。 ### 参数: - channel: 频道用户名。 ### 返回: - 相似频道列表（标题/用户名/订阅数等）。 - 后端 MTProto 未启用时返回 `mtproto_required = true` 与提示。 # [English] ### Purpose: - Get Telegram's official "similar channels" recommendations (for channel discovery). ### Parameters: - channel: Chann

- Risk: `read`
- Parameters: `[{"name":"channel","type":"string","required":true}]`
