# LinkedIn MCP 工具

- 来源平台：`LinkedIn`
- 能力分段：`linkedin`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 8

## `mcp_01caed39a4b2387d59d0fa61`

获取公司主页资料/Get company profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_1393406b4dae80a898702030`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"page","type":"any","required":false},{"name":"share_urn","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"urn","type":"string","required":true}]`

## `mcp_60e7de8d78aadfb1cb707635`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"include_hiring_team","type":"boolean","required":false},{"name":"include_skills","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_8b62621e02b3ac88eee8cb07`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"start","type":"any","required":false},{"name":"type","type":"string","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_9456ed3df821e31216e645b9`

获取用户主页信息/Get user profile

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_b0e9d068d07b165820c20f98`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"company_ids","type":"any","required":false},{"name":"date_posted","type":"any","required":false},{"name":"easy_apply","type":"boolean","required":false},{"name":"experience_levels","type":"any","required":false},{"name":"functions","type":"any","required":false},{"name":"geo_code","type":"any","required":false},{"name":"industries","type":"any","required":false},{"name":"job_types","type":"any","required":false},{"name":"keywords","type":"any","required":false},{"name":"onsite_remotes","type":"any","required":false},{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"title_ids","type":"any","required":false},{"name":"under_10_applicants","type":"boolean","required":false}]`

## `mcp_c6e2401a53921fa3483b9b4a`

> ⚠️ **注意 / Note** > > 本接口由有限的资源池提供服务，在高并发或资源紧张时可能间歇性返回 400 或其他错误。 > 此类失败通常是暂时性的，重试即可成功。建议客户端实现自动重试机制，推荐 `retry = 3`。 > > This endpoint is served from a limited resource pool and may intermittently return > `400` or other errors under load. Such failures are typically transient and succeed > on retr

- Risk: `read`
- Parameters: `[{"name":"sort_by","type":"any","required":false},{"name":"start","type":"any","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_e3d38d9fd52e46f571039aae`

# [中文] ### 用途: - 按 URL 获取帖子或文章详情。 ### 参数: - url: 帖子或文章完整 URL（支持 /posts/... 与 /pulse/... 两种形态）。 ### 返回: - 正文、作者、发布时间、话题标签、图片 / 视频、互动数等字段。 # [English] ### Purpose: - Fetch a post or an article by URL. ### Parameters: - url: Full post or article URL (both /posts/... and /pulse/... are supported). ### R

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`
