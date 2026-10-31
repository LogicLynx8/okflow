# 哔哩哔哩 MCP 工具

- 来源平台：`哔哩哔哩`
- 能力分段：`bilibili-2`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 7

## `mcp_eb85dcaee6d9517361143636`

# [中文] ### 用途: - 获取主页番剧推荐 ### 返回: - 番剧推荐数据 # [English] ### Purpose: - Get bangumi tab (anime recommendations) ### Return: - Bangumi tab data

- Risk: `read`
- Parameters: `[]`

## `mcp_ebc427d65c7258802d20521d`

# [中文] ### 用途: - 获取用户信息 ### 参数: - user_id: 用户ID（必填） ### 返回: - 用户信息（包含粉丝数、关注数、投稿数等） # [English] ### Purpose: - Get user info ### Parameters: - user_id: User ID (required) ### Return: - User info (including followers, following, videos count, etc.) # [示例/Example] user_id = "203680252"

- Risk: `read`
- Parameters: `[{"name":"user_id","type":"string","required":true}]`

## `mcp_eee73ec823dd7df4c96c454e`

内容相似UP主/Get creators with similar content

- Risk: `read`
- Parameters: `[{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_f68af73f3f45976c9feddf7c`

X火榜行业下拉/Get X-Huo ranking industries

- Risk: `read`
- Parameters: `[{"name":"scene","type":"integer","required":false}]`

## `mcp_f7cd250309f62e5b54c74f60`

# [中文] ### 用途: - 获取指定动态的详情信息（v1接口） - 适用于图文 / 文字 / 专栏类动态，返回完整 module_stat（含 favorite / coin） - 视频类动态（DYNAMIC_TYPE_AV）请改用 v2 接口 ### 参数: - dynamic_id: 动态id ### 返回: - 动态详情数据 # [English] ### Purpose: - Get detail information of specified dynamic (v1 API) - For image / text / article dynamics; returns ful

- Risk: `read`
- Parameters: `[{"name":"dynamic_id","type":"string","required":true}]`

## `mcp_fcd1fa66e1525fa823fe08d6`

# [中文] ### 用途: - 获取视频评论列表 ### 参数: - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） - mode: 排序模式（3=热门, 2=时间） - next_offset: 分页游标 ### 返回: - 评论列表数据 # [English] ### Purpose: - Get video comments ### Parameters: - av_id: AV ID (choose one of av_id or bv_id) - bv_id: BV ID (choose one of av_id or bv_id) -

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false},{"name":"mode","type":"integer","required":false},{"name":"next_offset","type":"integer","required":false}]`

## `mcp_fd2484bdecc44f4a7aab95f4`

# [中文] ### 用途: - 获取热门搜索信息 ### 参数: - limit: 返回数量 ### 返回: - 热门搜索信息 ### 说明: - limit默认为10，上限为50 # [English] ### Purpose: - Get hot search data ### Parameters: - limit: Return number ### Return: - Hot search data ### Note: - limit default is 10, maximum is 50 # [示例/Example] limit = 10

- Risk: `read`
- Parameters: `[{"name":"limit","type":"any","required":true}]`
