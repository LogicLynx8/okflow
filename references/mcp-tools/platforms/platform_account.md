# 平台账户能力 MCP 工具

- 来源平台：`平台账户能力`
- 能力分段：`platform_account`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 8

## `mcp_2ddc6898bb354aa4906e2cee`

# [中文] ### 用途: - 获取阶梯式折扣百分比信息 ### 返回: - 阶梯式折扣百分比信息 # [English] ### Purpose: - Get tiered discount percentage information ### Return: - Tiered discount percentage information

- Risk: `read`
- Parameters: `[]`

## `mcp_3354fde7a3f8a6c53cfadb1f`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_47f3a989829da4b0693a48e3`

可调用工具

- Risk: `read`
- Parameters: `[]`

## `mcp_7c1cb39a0a667522bc9be740`

# [中文] ### 用途说明: - 该接口用于检测客户端操作系统，并重定向到相应的 GitHub Release 直链，方便用户请求后直接开始下载最新版本的文件。 ### 参数说明: - 无参数。 ### 返回结果: - Windows 用户：重定向到 `.exe` 下载地址。 - Mac 用户：重定向到 `.zip` 下载地址。 - 其他用户：重定向到 GitHub Release 页面。 # [English] ### Purpose: - This endpoint detects the client operating system and redirects to the cor

- Risk: `read`
- Parameters: `[]`

## `mcp_a3b2e0aa007be326af89640f`

可调用工具

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true},{"name":"request_per_day","type":"integer","required":false}]`

## `mcp_d36b928d4c03f42678d699bd`

# [中文] ### 用途: - 获取一个端点的信息 ### 参数: - endpoint: 请求的端点 ### 返回: - 端点信息 # [English] ### Purpose: - Get information of an endpoint ### Parameters: - endpoint: Requested endpoint ### Return: - Endpoint information

- Risk: `read`
- Parameters: `[{"name":"endpoint","type":"string","required":true}]`

## `mcp_e08fa9fe47730debe8737def`

获取用户每日使用情况/Get user daily usage

- Risk: `read`
- Parameters: `[]`

## `mcp_e8a8b21b14b8533b236d1cbe`

# [中文] ### 用途: - 获取所有端点信息 ### 返回: - 所有端点信息 # [English] ### Purpose: - Get all endpoints information ### Return: - All endpoints information

- Risk: `read`
- Parameters: `[]`
