# YouTube MCP 工具

- 来源平台：`YouTube`
- 能力分段：`youtube`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 34

## `mcp_0607a6e5e88c45f4263c871a`

获取频道描述信息/Get channel description

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_0d94d00a29aa1ccf2f0c9c17`

使用自带固定出口代理获取下载链接 / Get download URLs with your fixed-exit proxy

- Risk: `write`
- Parameters: `[{"name":"itags","type":"array","required":false},{"name":"proxy_url","type":"string","required":true},{"name":"verify_download","type":"boolean","required":false},{"name":"video_id","type":"string","required":true}]`

## `mcp_119b7687d82850b5beb66e1d`

# [中文] ### ⚠️ 推荐使用 V2 版本: - 本接口返回 YouTube 原始数据结构，需要自行解析 - **清洗过的数据版本请使用 `/get_shorts_search_v2` 接口**，返回结构化的 Shorts 列表数据，自动过滤非 Shorts 内容 ### 用途: - YouTube Shorts短视频专门搜索，使用原生YouTube API接口 ### 特点: - 🎬 专门搜索YouTube Shorts短视频（<60秒） - 🔍 支持多种过滤条件和排序方式 - 📱 优化的移动端短视频内容 - ⚡ 智能过滤：首次请求可能返回混合内容（长视频+短视频），默认自动过滤长视频

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"filter_mixed_content","type":"boolean","required":false},{"name":"language_code","type":"string","required":false},{"name":"search_query","type":"string","required":true},{"name":"sort_by","type":"string","required":false},{"name":"time_zone","type":"string","required":false},{"name":"upload_time","type":"string","required":false}]`

## `mcp_15dc3446484a8bdec9abb6de`

# [中文] ### 用途: - 获取帖子评论的回复（二级评论） ### 参数详解: #### 必选参数: **continuation_token** (string) - **作用**: 回复的continuation token - **获取方式**: 从帖子一级评论的响应数据中获取 `reply_continuation_token` 字段 #### 可选参数: **language_code** (string, 可选) - 语言代码，默认 `"zh-CN"` **country_code** (string, 可选) - 国家代码，默认 `"US"` **need_format**

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_2def51adf1a661dfc6b42f24`

# [中文] ### 用途: - 从YouTube频道ID转换获取频道Handle (@用户名) - 与 get_channel_id_v2 接口互为反向操作 ### 参数: - channel_id: 频道ID（如：UCeu6U67OzJhV1KwBansH3Dg） ### 返回: - channel_id: 频道ID - handle: 频道Handle（如：CozyCraftYT） - title: 频道名称 - channel_url: 标准频道URL（/channel/格式） - vanity_url: 个性化URL（/@用户名格式） ### 使用场景: - 当你有频道ID但需要获取

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true}]`

## `mcp_309c99cd4440d58bb3654e5f`

# [中文] ### 用途: - 获取频道ID。 ### 参数: - channel_name: 频道名称。 ### 返回: - 频道ID。 # [English] ### Purpose: - Get channel ID. ### Parameters: - channel_name: Channel name. ### Returns: - Channel ID. # [示例/Example] channel_name = "LinusTechTips"

- Risk: `read`
- Parameters: `[{"name":"channel_name","type":"string","required":true}]`

## `mcp_487dc74e9730702abfe08916`

# [中文] ### 用途: - 获取视频二级评论 ### 参数详解: #### 📌 必选参数: **continuation_token** (string) - **作用**: 回复的continuation token - **获取方式**: 从一级评论的响应数据中获取 `reply_continuation_token` 字段 - **示例**: `"Eg0SC29hU05CejRxTVFZGAYygwEaUBIaVWd3WmhjUXVGUmJZTlhkUV85VjRBYUFCQWciAggAKhhVQ0pIQko3Ri1uQUlsTUdvbG0wSHU0dmcyC29hU05CejR

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_5214925c12dc4dbe78bf526c`

# [中文] ### 用途: - 获取视频的字幕列表或指定语言的字幕内容 - 支持多种字幕格式输出 ### 参数: - video_id: 视频ID（推荐） - video_url: 完整的视频URL（可选） - language_code: 语言代码（如 en, zh-Hans, a.en），为空时返回可用字幕列表 - format: 字幕格式 - srt: SubRip 字幕格式（带时间轴） - xml: 原始 XML 格式 - json3: JSON 格式（YouTube 原始结构） - txt: 纯文本（无时间轴） ### 使用流程: 1. 不传 language_code，获取字幕列

- Risk: `read`
- Parameters: `[{"name":"format","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_54303df494a19325d602bcab`

# [中文] ### 用途: - 获取指定 itag 的已签名播放地址（可直接播放） - 配合 get_video_streams 接口使用，先获取所有格式，再选择 itag 获取播放地址 ### 参数: - video_id: 视频ID（推荐） - video_url: 完整的视频URL（可选） - itag: 格式标识符，从 get_video_streams 接口返回的格式列表中选择 ### 返回数据: - itag: 格式标识符 - url: 已签名的播放地址（可直接使用） - expires_in_seconds: URL有效期（通常为6小时 = 21600秒） ### 注意事项:

- Risk: `read`
- Parameters: `[{"name":"itag","type":"integer","required":true},{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_5864218619009a9a604a907d`

# [中文] ### 用途: - 搜索 YouTube 视频、Shorts、频道、播放列表 - 返回清洗后的结构化数据（相比 get_general_search 返回原始数据） - 支持多种过滤条件和排序方式 - 支持分页加载更多结果 ### 参数: - keyword: 搜索关键词（首次请求必填） - continuation_token: 分页token（获取下一页时传入，从上一次返回结果中获取） - upload_date: 上传时间过滤 - last_hour/today/this_week/this_month/this_year - type: 结果类型过滤 - video/ch

- Risk: `read`
- Parameters: `[{"name":"duration","type":"any","required":false},{"name":"features","type":"any","required":false},{"name":"keyword","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"type","type":"any","required":false},{"name":"upload_date","type":"any","required":false}]`

## `mcp_65ef241dc20a6a177a9f2464`

# [中文] ### 用途: - 搜索频道。 ### 参数: - search_query: 搜索关键字。 - language_code: 语言代码，默认为en。 - country_code: 国家代码，默认为us。 - continuation_token: 用于继续获取搜索结果的令牌。默认为None。 ### 返回: - 搜索结果。 # [English] ### Purpose: - Search channel. ### Parameters: - search_query: Search keyword. - language_code: Language code, defau

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"search_query","type":"string","required":true}]`

## `mcp_67639cdca692ad7b0ebad888`

# [中文] ### 用途: - 获取频道信息。 ### 参数: - channel_id: 频道ID。 ### 返回: - 频道信息。 # [English] ### Purpose: - Get channel information. ### Parameters: - channel_id: Channel ID. ### Returns: - Channel information. # [示例/Example] channel_id = "UCXuqSBlHAE6Xw-yeJA0Tunw"

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true}]`

## `mcp_6da88ec169fe5cf527626e59`

获取视频详情 /Get video information

- Risk: `read`
- Parameters: `[{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"video_id","type":"string","required":true}]`

## `mcp_7b090394cec237cf8c182f38`

获取视频详情 V2/Get video information V2

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_7f7642bb79dbcab1b5d4f48d`

# [中文] ### ⚠️ 重要说明: - **此接口仅返回格式信息，URL 字段为 null** - **必须搭配 get_signed_stream_url 接口获取播放地址** - 如需一次性获取所有 URL，请使用 get_video_streams_v2 接口 ### 用途: - 获取YouTube视频所有清晰度的格式信息 - 返回标准格式（音视频合并）和自适应格式（音视频分离） ### 参数: - video_id: 视频ID（推荐） - video_url: 完整的视频URL（可选，如果提供video_id则忽略） ### 返回数据包含: - 视频基本信息（标题、作者、时长、观看

- Risk: `read`
- Parameters: `[{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_7fe1e5c97cc3e3b731427686`

# [中文] ### 用途: - 获取YouTube频道的短视频(Shorts)列表 - 支持分页获取更多短视频 ### 参数: - channel_id: 频道ID（推荐，如 UCuAXFkgsw1L7xaCfnd5JJOw） - channel_url: 频道URL（可选，如果提供channel_id则忽略） - continuation_token: 分页token（可选，用于获取下一页） - need_format: 是否格式化数据（默认 true） - true: 返回格式化的结构化数据（推荐） - false: 返回原始的 YouTube API 结构（用于调试） ### 返回数据

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":false},{"name":"channel_url","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_83dca0385bc60c95d8711f71`

获取频道视频 /Get channel videos

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_8fe72643dd1c277504bcbc92`

获取帖子详情/Get post detail

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_id","type":"string","required":true}]`

## `mcp_9061061f62c75e7e2c4ea7be`

# [中文] ### 用途: - 搜索视频。 ### 参数: - search_query: 搜索关键字。 - language_code: 语言代码，默认为en。 - order_by: 排序方式，默认为this_month，可选值为this_week, this_month, this_year, last_hour, today。 - country_code: 国家代码，默认为us。 - continuation_token: 用于继续获取搜索结果的令牌。默认为None。 ### 返回: - 搜索结果。 # [English] ### Purpose: - Search video.

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"order_by","type":"string","required":false},{"name":"search_query","type":"string","required":true}]`

## `mcp_93696e27ebd81632ab64630c`

# [中文] ### 用途: - 获取YouTube搜索推荐词（自动补全） - 类似于在YouTube搜索框输入时显示的推荐词 ### 参数: - keyword: 搜索关键词（必填） - language: 语言代码（可选，默认 en） - en: 英语 - zh-cn: 简体中文 - ja: 日语 - ko: 韩语 - region: 地区代码（可选，默认 US） - US: 美国 - SG: 新加坡 - CN: 中国 - JP: 日本 - KR: 韩国 ### 返回数据包含: - keyword: 搜索关键词 - suggestions: 推荐词列表（字符串数组） - total_cou

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":true},{"name":"language","type":"string","required":false},{"name":"region","type":"string","required":false}]`

## `mcp_97e9b58af37002e31d7b8195`

获取帖子评论/Get post comments

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"post_id","type":"string","required":false}]`

## `mcp_9cd1838066f72e18588aad7c`

# [中文] ### 用途: - 从YouTube频道URL转换获取频道ID（channel_id）。 - 支持多种URL格式，包括@用户名格式、/channel/格式、/c/格式、/user/格式。 ### 参数: - channel_url: 频道URL。 ### 返回: - channel_id: 频道ID（如：UCeu6U67OzJhV1KwBansH3Dg） - channel_url: 标准化的频道URL - source: 数据来源（url_parse表示直接从URL解析，page_parse表示从页面解析） # [English] ### Purpose: - Convert

- Risk: `read`
- Parameters: `[{"name":"channel_url","type":"string","required":true}]`

## `mcp_9fec21f8d41095647da0171d`

获取推荐视频/Get related videos

- Risk: `read`
- Parameters: `[{"name":"video_id","type":"string","required":true}]`

## `mcp_a8ba307ffd9b1debfa0eb466`

# [中文] ### 用途: - 从YouTube频道ID转换获取频道Handle (@用户名) - 与 get_channel_id 接口互为反向操作 ### 参数: - channel_id: 频道ID（如：UCeu6U67OzJhV1KwBansH3Dg） ### 返回: - channel_id: 频道ID - handle: 频道Handle（如：CozyCraftYT） - title: 频道名称 - channel_url: 标准频道URL（/channel/格式） - vanity_url: 个性化URL（/@用户名格式） ### 使用场景: - 当你有频道ID但需要获取@用户

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true}]`

## `mcp_a9cbf1d59c8105785ff3a265`

# [中文] ### 用途: - 搜索YouTube频道 - 只返回频道类型的搜索结果（过滤掉视频、播放列表等） - 支持分页获取更多频道 ### 参数: - keyword: 搜索关键词（首次请求必填） - continuation_token: 分页token（可选，用于获取下一页） - need_format: 是否格式化数据（默认 true） - true: 返回格式化的结构化数据（推荐） - false: 返回原始的 YouTube API 结构（用于调试） ### 返回数据包含: #### 当 need_format=true 时: - keyword: 搜索关键词 - chann

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"any","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_b8a04d4d478f494328c11b58`

# [中文] ### 用途: - 从YouTube频道URL转换获取频道ID（channel_id）。 - 支持多种URL格式，包括@用户名格式、/channel/格式、/c/格式、/user/格式。 ### 参数: - channel_url: 频道URL。 ### 返回: - channel_id: 频道ID（如：UCeu6U67OzJhV1KwBansH3Dg） - channel_url: 标准化的频道URL - source: 数据来源（url_parse表示直接从URL解析，page_parse表示从页面解析） # [English] ### Purpose: - Convert

- Risk: `read`
- Parameters: `[{"name":"channel_url","type":"string","required":true}]`

## `mcp_ba9cbf3060a2570fd4821df8`

# [中文] ### 用途: - 获取频道短视频。 ### 参数: - channel_id: 频道ID。 - continuation_token: 用于继续获取频道短视频的令牌。默认为None。 ### 返回: - 频道短视频。 # [English] ### Purpose: - Get channel short videos. ### Parameters: - channel_id: Channel ID. - continuation_token: Token to continue fetching channel short videos. Default is None.

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true}]`

## `mcp_c38b72275c6a672ce07c5c18`

# [中文] ### ✅ 特性: - **自动返回所有格式的已解密播放地址** - 无需额外调用 get_signed_stream_url 接口 - 一次性获取所有清晰度的可用链接 ### 用途: - 获取YouTube视频所有清晰度的格式信息和播放地址 - 返回标准格式（音视频合并）和自适应格式（音视频分离） - 适合需要展示所有清晰度选项的场景 ### 参数: - video_id: 视频ID（推荐） - video_url: 完整的视频URL（可选，如果提供video_id则忽略） ### 返回数据包含: - 视频基本信息（标题、作者、时长、观看次数等） - formats: 标准格式

- Risk: `read`
- Parameters: `[{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_d56984b97d29cef12ab5fb99`

# [中文] ### 用途: - 专门搜索 YouTube Shorts 短视频 - 返回清洗后的结构化数据（相比 get_shorts_search 返回原始数据） - 自动过滤非 Shorts 内容，仅返回短视频结果 - 支持分页加载更多 ### 参数: - keyword: 搜索关键词（首次请求必填） - continuation_token: 分页token（从上一次返回结果获取） - upload_date: 上传时间过滤 - last_hour/today/this_week/this_month/this_year - sort_by: 排序方式 - relevance/uplo

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"upload_date","type":"any","required":false}]`

## `mcp_dcfdf2dd6fc95eae7fdfb38b`

获取频道帖子列表/Get channel community posts

- Risk: `read`
- Parameters: `[{"name":"channel_id","type":"string","required":true},{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false}]`

## `mcp_ec595e2738afe13da51b7c77`

# [中文] ### 用途: - 获取YouTube视频的相似内容推荐（推荐视频列表） - 类似于视频播放页面右侧的相关视频 - 一次性返回所有推荐视频（通常20-30个） ### 参数: - video_id: 视频ID（推荐） - video_url: 完整的视频URL（可选，如果提供video_id则忽略） - need_format: 是否格式化数据（默认 true） - true: 返回格式化的结构化数据（推荐） - false: 返回原始的 YouTube API 结构（用于调试或自定义解析） ### 返回数据包含: #### 当 need_format=true 时: - vid

- Risk: `read`
- Parameters: `[{"name":"need_format","type":"boolean","required":false},{"name":"video_id","type":"string","required":false},{"name":"video_url","type":"string","required":false}]`

## `mcp_f3d8389c43683728ea5b5320`

# [中文] ### ⚠️ 推荐使用 V2 版本: - 本接口返回 YouTube 原始数据结构，需要自行解析 - **清洗过的数据版本请使用 `/get_general_search_v2` 接口**，返回结构化的视频、Shorts、频道、播放列表数据 ### 用途: - YouTube综合搜索，支持多种过滤条件，可以精确筛选搜索结果 ### 参数详解: - **search_query**: 搜索关键字 - **language_code**: 语言代码，推荐使用zh-CN（中文）或en-US（英文） - **country_code**: 国家代码，影响搜索结果的地区相关性 - **ti

- Risk: `read`
- Parameters: `[{"name":"content_type","type":"string","required":false},{"name":"country_code","type":"string","required":false},{"name":"duration","type":"string","required":false},{"name":"feature","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"search_query","type":"string","required":true},{"name":"sort_by","type":"string","required":false},{"name":"time_zone","type":"string","required":false},{"name":"upload_time","type":"string","required":false}]`

## `mcp_f60d067f6ae5d01c39891d8e`

获取视频评论/Get video comments

- Risk: `read`
- Parameters: `[{"name":"country_code","type":"string","required":false},{"name":"language_code","type":"string","required":false},{"name":"need_format","type":"boolean","required":false},{"name":"sort_by","type":"string","required":false},{"name":"video_id","type":"string","required":true}]`

## `mcp_fe53a48b7959e49e221b5a1f`

# [中文] ### 用途: - 查询字幕异步任务的处理结果 - 视频较大时 `/get_video_captions` 会返回 `status="processing"` 和 `job_id`， 用该 `job_id` 调用本接口即可获取最终字幕 - 本接口为单次查询、不阻塞等待，由调用方按需重复调用直到任务完成 ### 参数: - job_id: 异步任务ID（由 `/get_video_captions` 返回） - format: 字幕格式（仅任务完成时生效） - srt: SubRip 字幕格式（带时间轴） - xml: XML 格式 - json3: JSON 格式 - txt:

- Risk: `read`
- Parameters: `[{"name":"format","type":"string","required":false},{"name":"job_id","type":"string","required":true}]`
