# 服务健康检查 MCP 工具

- 来源平台：`服务健康检查`
- 能力分段：`health`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 2

## `mcp_4f698f76f945f6a89eee987b`

# [中文] ### 用途说明: - 检查服务器是否正确响应请求（存活探测，不检查任何依赖）。 ### 参数说明: - 无参数。 ### 返回结果: - `status`: 服务器状态，正常为 `ok`。 # [English] ### Purpose: - Check if the server responds to requests correctly (liveness probe, no dependency checks). ### Parameter Description: - No parameters. ### Return Result: - `status`: Serv

- Risk: `read`
- Parameters: `[]`

## `mcp_952b0749a3d77a995d416325`

# [中文] ### 用途说明: - 深度健康检查：实测 MySQL / Redis 连通性与延迟、事件循环卡顿情况、 数据库连接池占用、进程内存与文件描述符。 - 用于多节点监控定位"半死"节点（进程存活但依赖异常/事件循环被阻塞）。 ### 返回结果: - `status`: `ok` 或 `degraded`（任一关键依赖异常或事件循环当前被阻塞）。 - `checks.mysql` / `checks.redis`: 实测状态与延迟（毫秒）。 - `checks.event_loop`: 事件循环卡顿统计（当前延迟、阻塞次数、最长阻塞）。 - `checks.db_pool`: 数据库

- Risk: `read`
- Parameters: `[]`
