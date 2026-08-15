# uncategorized MCP 工具

- 来源平台：`uncategorized`
- 能力分段：`uncategorized`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 19

## `mcp_1314eb069afed11b342ce742`

骑行路径规划用于规划骑行通勤方案，规划时会考虑天桥、单行线、封路等情况。最大支持 500km 的骑行路线规划

- Risk: `write`
- Parameters: `[{"name":"destination","type":"string","required":true},{"name":"origin","type":"string","required":true}]`

## `mcp_14edb7ef2f4fd4c82e84f88a`

测量两个经纬度坐标之间的距离,支持驾车、步行以及球面距离测量

- Risk: `write`
- Parameters: `[{"name":"destination","type":"string","required":true},{"name":"origins","type":"string","required":true},{"name":"type","type":"string","required":false}]`

## `mcp_29100ebe17c9e19b493b91fa`

查询关键词搜或者周边搜获取到的POI ID的详细信息

- Risk: `write`
- Parameters: `[{"name":"id","type":"string","required":true}]`

## `mcp_320cab3cdf5439b17fdeb4be`

将一个高德经纬度坐标转换为行政区划地址信息

- Risk: `write`
- Parameters: `[{"name":"location","type":"string","required":true}]`

## `mcp_3ee5aef6bcdb5e84b3c4d7c2`

IP 定位根据用户输入的 IP 地址，定位 IP 的所在位置

- Risk: `write`
- Parameters: `[{"name":"ip","type":"string","required":true}]`

## `mcp_4db8d24ce888cd5d6a17f112`

关键字搜索 API 根据用户输入的关键字进行 POI 搜索，并返回相关的信息

- Risk: `write`
- Parameters: `[{"name":"city","type":"string","required":false},{"name":"citylimit","type":"boolean","required":false},{"name":"keywords","type":"string","required":true}]`

## `mcp_50a5745444fe9190ffdb5d4d`

驾车路径规划 API 可以根据用户起终点经纬度坐标规划以小客车、轿车通勤出行的方案，并且返回通勤方案的数据。

- Risk: `write`
- Parameters: `[{"name":"destination","type":"string","required":true},{"name":"origin","type":"string","required":true}]`

## `mcp_81ba83fae6cb4ef7f3bea5bf`

将详细的结构化地址转换为经纬度坐标。支持对地标性名胜景区、建筑物名称解析为经纬度坐标

- Risk: `write`
- Parameters: `[{"name":"address","type":"string","required":true},{"name":"city","type":"string","required":false}]`

## `mcp_894327673812b760debe1af7`

周边搜，根据用户传入关键词以及坐标location，搜索出radius半径范围的POI

- Risk: `write`
- Parameters: `[{"name":"keywords","type":"string","required":true},{"name":"location","type":"string","required":true},{"name":"radius","type":"string","required":false},{"name":"strategy","type":"integer","required":false}]`

## `mcp_b6e386e7a12dbd4840f7b24e`

根据用户输入的起点和终点信息，返回一个拼装好的客户端唤醒URI，直接唤起高德地图进行打车。直接展示生成的链接，不需要总结

- Risk: `write`
- Parameters: `[{"name":"dlat","type":"string","required":true},{"name":"dlon","type":"string","required":true},{"name":"dname","type":"string","required":true},{"name":"slat","type":"string","required":false},{"name":"slon","type":"string","required":false},{"name":"sname","type":"string","required":false}]`

## `mcp_b6f0e349e5208ce399096dc1`

Schema唤醒客户端-导航页面，用于根据用户输入终点信息，返回一个拼装好的客户端唤醒URI，用户点击该URI即可唤起对应的客户端APP。唤起客户端后，会自动跳转到导航页面。

- Risk: `write`
- Parameters: `[{"name":"lat","type":"string","required":true},{"name":"lon","type":"string","required":true}]`

## `mcp_b718efa461c7b49d5877499d`

根据城市名称或者标准adcode查询指定城市的天气

- Risk: `write`
- Parameters: `[{"name":"city","type":"string","required":true}]`

## `mcp_b77274fb81d1a2bdb63898a0`

根据用户起终点经纬度坐标规划综合各类公共（火车、公交、地铁）交通方式的通勤方案，并且返回通勤方案的数据，跨城场景下必须传起点城市与终点城市

- Risk: `write`
- Parameters: `[{"name":"city","type":"string","required":true},{"name":"cityd","type":"string","required":true},{"name":"destination","type":"string","required":true},{"name":"origin","type":"string","required":true}]`

## `mcp_d42fede740419bd36bad2c24`

用于行程规划结果在高德地图展示。将行程规划位置点按照行程顺序填入lineList，返回结果为高德地图打开的URI链接，该结果不需总结，直接返回！

- Risk: `write`
- Parameters: `[{"name":"lineList","type":"array","required":true},{"name":"orgName","type":"string","required":true}]`

## `mcp_f8099ecac2b0e6df9c570d46`

根据输入起点终点经纬度坐标规划100km 以内的步行通勤方案，并且返回通勤方案的数据

- Risk: `write`
- Parameters: `[{"name":"destination","type":"string","required":true},{"name":"origin","type":"string","required":true}]`

## `mcp_811544a2f22f383cf6703f69`

获取当前系统时间 返回当前时区的时间和UTC时间

- Risk: `write`
- Parameters: `[]`

## `mcp_935970755f13a04539fb8b9b`

创建 AI 提示词模板工具 当 AI 需要创建新的提示词模板时使用此工具。支持： - 自定义分类编码管理 - 结构化变量规则定义 - 文本或 JSON 输出格式配置 - Jinja2 模板语法支持 使用场景： - 创建特定任务的 AI 提示词模板 - 构建可复用的提示词库 - 设置结构化的 AI 交互模式 :param title: 提示词标题（必填），用于识别和检索 :param content: 提示词内容（必填），AI 的实际指令文本，支持 Jinja2 模板语法 :param description: 提示词描述（可选），详细说明用途和效果 :param tags: 标签（可选），多个

- Risk: `write`
- Parameters: `[{"name":"content","type":"string","required":true},{"name":"description","type":"any","required":false},{"name":"json_schema","type":"any","required":false},{"name":"output_format","type":"string","required":false},{"name":"prompt_code","type":"any","required":false},{"name":"tags","type":"any","required":false},{"name":"title","type":"string","required":true},{"name":"variable_rules","type":"any","required":false}]`

## `mcp_bdc0bfb9716f4aaa82823dae`

读取会话中上传的文档内容 当用户上传了文档并询问文档相关问题时，使用此工具按需读取文档内容。 不要在没有必要时调用此工具，只在用户明确询问文档内容时才调用。 使用场景： - 用户问"帮我总结这份文档" - 用户问"文档里说了什么" - 用户问"根据文档回答..." - 用户问"对比这几份文档" :param task_id: 单个文档 task_id（兼容旧调用） :param task_ids: 多个文档 task_ids :param format_type: 返回格式（text/download_link） :return: 文档内容

- Risk: `write`
- Parameters: `[{"name":"format_type","type":"string","required":false},{"name":"task_id","type":"any","required":false},{"name":"task_ids","type":"any","required":false}]`

## `mcp_caec73e82244b81f4f7162d2`

使用智谱AI联网搜索实时内容 功能特点： 1. 实时搜索：基于智谱Web Search API，获取最新资讯 2. AI增强：使用AI理解和整理搜索结果，更适合大模型处理 3. 多引擎支持：支持智谱基础版/高阶版、搜狗、夸克等搜索引擎 4. 时间过滤：支持按时间范围筛选结果（天/周/月/年/不限） 5. 结构化输出：返回网页标题、URL、摘要、网站名称、图标等结构化数据 6. 适用场景：新闻搜索、技术资料查找、市场研究、知识问答、实时信息获取 使用示例： - search_zhipu_web(query="人工智能最新进展", search_recency="oneWeek") - searc

- Risk: `write`
- Parameters: `[{"name":"content_size","type":"string","required":false},{"name":"max_results","type":"integer","required":false},{"name":"query","type":"string","required":true},{"name":"search_engine","type":"string","required":false},{"name":"search_recency","type":"string","required":false}]`
