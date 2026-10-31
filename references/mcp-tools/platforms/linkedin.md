# LinkedIn MCP 工具

- 来源平台：`LinkedIn`
- 能力分段：`linkedin`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 8

## `mcp_15fd94b939fcc706d6012095`

获取用户主页信息/Get user profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_1d451173d28012f2ffdeaa4f`

获取公司主页资料/Get company profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_720ae49f66fafc32c0727154`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"include_hiring_team","type":"boolean","required":false},{"name":"include_skills","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_822247a266af3bddc8ede07b`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"start","type":"any","required":false},{"name":"type","type":"string","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_945f5e60663252300de908ba`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_a903a89486ca8720ff692362`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"company_ids","type":"any","required":false},{"name":"date_posted","type":"any","required":false},{"name":"easy_apply","type":"boolean","required":false},{"name":"experience_levels","type":"any","required":false},{"name":"functions","type":"any","required":false},{"name":"geo_code","type":"any","required":false},{"name":"industries","type":"any","required":false},{"name":"job_types","type":"any","required":false},{"name":"keywords","type":"any","required":false},{"name":"onsite_remotes","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"title_ids","type":"any","required":false},{"name":"under_10_applicants","type":"boolean","required":false}]`

## `mcp_e3845e1a6475fec7f4b7bca2`

# [中文] ### 用途: - 按 URL 获取帖子或文章详情。 ### 参数: - url: 帖子或文章完整 URL（支持 /posts/... 与 /pulse/... 两种形态）。 ### 返回: - 正文、作者、发布时间、话题标签、图片 / 视频、互动数等字段。 # [English] ### Purpose: - Fetch a post or an article by URL. ### Parameters: - url: Full post or article URL (both /posts/... and /pulse/... are supported). ### R

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_ff5e409582cb30b0bbcc1586`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"page","type":"any","required":false},{"name":"share_urn","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"urn","type":"string","required":true}]`
