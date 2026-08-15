# LinkedIn MCP 工具

- 来源平台：`LinkedIn`
- 能力分段：`linkedin`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 8

## `mcp_34cb7baa2866180f79374833`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"page","type":"any","required":false},{"name":"share_urn","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"urn","type":"string","required":true}]`

## `mcp_4badd1ad3e2c931b128ebb42`

# [中文] ### 用途: - 按 URL 获取帖子或文章详情。 ### 参数: - url: 帖子或文章完整 URL（支持 /posts/... 与 /pulse/... 两种形态）。 ### 返回: - 正文、作者、发布时间、话题标签、图片 / 视频、互动数等字段。 # [English] ### Purpose: - Fetch a post or an article by URL. ### Parameters: - url: Full post or article URL (both /posts/... and /pulse/... are supported). ### R

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_5974190618ac4c1c64c603de`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_7eef551da212b27fccb857bd`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"start","type":"any","required":false},{"name":"type","type":"string","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_b4df94607404d045b1bd14c6`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"include_hiring_team","type":"boolean","required":false},{"name":"include_skills","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_d5126e1630e29790ef6ac142`

获取公司主页资料/Get company profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_e347b07d3fc523885cba8ccd`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"company_ids","type":"any","required":false},{"name":"date_posted","type":"any","required":false},{"name":"easy_apply","type":"boolean","required":false},{"name":"experience_levels","type":"any","required":false},{"name":"functions","type":"any","required":false},{"name":"geo_code","type":"any","required":false},{"name":"industries","type":"any","required":false},{"name":"job_types","type":"any","required":false},{"name":"keywords","type":"any","required":false},{"name":"onsite_remotes","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"title_ids","type":"any","required":false},{"name":"under_10_applicants","type":"boolean","required":false}]`

## `mcp_e37583e89dd79370ba3ca05a`

获取用户主页信息/Get user profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`
