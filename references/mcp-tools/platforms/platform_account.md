# 平台账户能力 MCP 工具

- 来源平台：`平台账户能力`
- 能力分段：`platform_account`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 8

## `mcp_0235ede6dd62ea54bd670d1f`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_049eb54f59816d13352d66f4`

# [中文] ### 用途: - 获取所有端点信息 ### 返回: - 所有端点信息 # [English] ### Purpose: - Get all endpoints information ### Return: - All endpoints information

- Risk: `read`
- Parameters: `[]`

## `mcp_402d087f5e2cef7faa0660ec`

# [中文] ### 用途: - 获取一个端点的信息 ### 参数: - endpoint: 请求的端点 ### 返回: - 端点信息 # [English] ### Purpose: - Get information of an endpoint ### Parameters: - endpoint: Requested endpoint ### Return: - Endpoint information

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true}]`

## `mcp_43eba2d8210b5ca738922f13`

获取用户每日使用情况/Get user daily usage

- Risk: `read`
- Parameters: `[]`

## `mcp_a455b59b2ef5cf9768e73a3e`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true},{"name":"request_per_day","type":"integer","required":false}]`

## `mcp_b5f472fbfe334e77cc3a85d5`

# [中文] ### 用途: - 获取阶梯式折扣百分比信息 ### 返回: - 阶梯式折扣百分比信息 # [English] ### Purpose: - Get tiered discount percentage information ### Return: - Tiered discount percentage information

- Risk: `read`
- Parameters: `[]`

## `mcp_d99b84f839121ee1bf9fa28e`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_e144c362c94088ee76dceb90`

# [中文] ### 用途说明: - 该接口用于检测客户端操作系统，并重定向到相应的 GitHub Release 直链，方便用户请求后直接开始下载最新版本的文件。 ### 参数说明: - 无参数。 ### 返回结果: - Windows 用户：重定向到 `.exe` 下载地址。 - Mac 用户：重定向到 `.zip` 下载地址。 - 其他用户：重定向到 GitHub Release 页面。 # [English] ### Purpose: - This endpoint detects the client operating system and redirects to the cor

- Risk: `read`
- Parameters: `[]`
