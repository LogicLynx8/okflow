# 服务健康检查 MCP 工具

- 来源平台：`服务健康检查`
- 能力分段：`health`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 2

## `mcp_340f217084de62ac683ce0fa`

# [中文] ### 用途说明: - 检查服务器是否正确响应请求（存活探测，不检查任何依赖）。 ### 参数说明: - 无参数。 ### 返回结果: - `status`: 服务器状态，正常为 `ok`。 # [English] ### Purpose: - Check if the server responds to requests correctly (liveness probe, no dependency checks). ### Parameter Description: - No parameters. ### Return Result: - `status`: Serv

- Risk: `read`
- Parameters: `[]`

## `mcp_60b307efef4b359d3889f81e`

# [中文] ### 用途说明: - 深度健康检查：实测 MySQL / Redis 连通性与延迟、事件循环卡顿情况、 数据库连接池占用、进程内存与文件描述符。 - 用于多节点监控定位"半死"节点（进程存活但依赖异常/事件循环被阻塞）。 ### 返回结果: - `status`: `ok` 或 `degraded`（任一关键依赖异常或事件循环当前被阻塞）。 - `checks.mysql` / `checks.redis`: 实测状态与延迟（毫秒）。 - `checks.event_loop`: 事件循环卡顿统计（当前延迟、阻塞次数、最长阻塞）。 - `checks.db_pool`: 数据库

- Risk: `read`
- Parameters: `[]`
