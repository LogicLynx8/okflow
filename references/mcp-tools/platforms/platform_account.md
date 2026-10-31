# 平台账户能力 MCP 工具

- 来源平台：`平台账户能力`
- 能力分段：`platform_account`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 8

## `mcp_305d33836484f12a691327e1`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true},{"name":"request_per_day","type":"integer","required":false}]`

## `mcp_39643dde806ae91f22a6ec09`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_791b62f5edff1b546bf39d3a`

# [中文] ### 用途: - 获取所有端点信息 ### 返回: - 所有端点信息 # [English] ### Purpose: - Get all endpoints information ### Return: - All endpoints information

- Risk: `read`
- Parameters: `[]`

## `mcp_b59d05845afa6e6010b76e56`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_b634a4b95e145525aaa6e379`

# [中文] ### 用途: - 获取阶梯式折扣百分比信息 ### 返回: - 阶梯式折扣百分比信息 # [English] ### Purpose: - Get tiered discount percentage information ### Return: - Tiered discount percentage information

- Risk: `read`
- Parameters: `[]`

## `mcp_cef30f81d0094057ef5b6eb5`

# [中文] ### 用途: - 获取一个端点的信息 ### 参数: - endpoint: 请求的端点 ### 返回: - 端点信息 # [English] ### Purpose: - Get information of an endpoint ### Parameters: - endpoint: Requested endpoint ### Return: - Endpoint information

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true}]`

## `mcp_ea27a47f640c5958bb426361`

# [中文] ### 用途说明: - 该接口用于检测客户端操作系统，并重定向到相应的 GitHub Release 直链，方便用户请求后直接开始下载最新版本的文件。 ### 参数说明: - 无参数。 ### 返回结果: - Windows 用户：重定向到 `.exe` 下载地址。 - Mac 用户：重定向到 `.zip` 下载地址。 - 其他用户：重定向到 GitHub Release 页面。 # [English] ### Purpose: - This endpoint detects the client operating system and redirects to the cor

- Risk: `read`
- Parameters: `[]`

## `mcp_ffa64d74aae8b8f6b8b1c1b0`

获取用户每日使用情况/Get user daily usage

- Risk: `read`
- Parameters: `[]`
