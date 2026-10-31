# uncategorized MCP 工具

- 来源平台：`uncategorized`
- 能力分段：`uncategorized`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 44

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

## `mcp_140c1789be851193f3b4abb2`

把音频转写为文字；聊天模型随后基于工具结果回答。

- Risk: `write`
- Parameters: `[{"name":"audio_url","type":"string","required":true},{"name":"prompt","type":"any","required":false}]`

## `mcp_1815cd982d95f4e809061caa`

通过历史 vision direct tool 分析视频，始终以 video_url 为主输入。

- Risk: `write`
- Parameters: `[{"name":"frame_urls","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"video_url","type":"string","required":true}]`

## `mcp_191bce9387cfcf19627d14fa`

修改自己创建的 Skill：只更新显式传入的字段，未传字段保持不变。 内容（content）变化会自动生成新版本；已有会话仍用旧版本，新会话使用新版本。 只能修改自己创建的 Skill。

- Risk: `write`
- Parameters: `[{"name":"content","type":"any","required":false},{"name":"description","type":"any","required":false},{"name":"prompt_code","type":"string","required":true},{"name":"tags","type":"any","required":false},{"name":"title","type":"any","required":false},{"name":"tool_specs","type":"any","required":false}]`

## `mcp_1a56eeccba7b887c0d907bca`

下载并解析文档内容（PDF/Word/txt/md），返回提取出的纯文本供后续创作或问答使用 功能特点： 1. 支持 PDF、Word（doc/docx）、纯文本/Markdown（txt/md） 2. 自动下载文档并调用文档解析服务提取正文内容 3. 解析结果可直接用于摘要、问答、改写等下游任务 :param document_url: 文档文件的 URL 地址 :param prompt: 对文档内容的具体分析要求，留空则只返回提取的原文 :param _user_id: 内部注入的调用用户 ID，用于余额预检查与调用后扣费 :return: 解析结果

- Risk: `write`
- Parameters: `[{"name":"document_url","type":"string","required":true},{"name":"prompt","type":"string","required":false}]`

## `mcp_25051f11b8fe90e9fa34e81b`

读取自己创建的某个 Skill 的完整内容（SKILL.md 全文）与绑定的工具列表。 修改前先用本工具读取现状；只能查看自己创建的 Skill，他人的 Skill 按不存在处理。

- Risk: `write`
- Parameters: `[{"name":"prompt_code","type":"string","required":true}]`

## `mcp_284ec0856c1c8314fb7fe1f7`

使用即梦4生成图像 支持的场景： 1. 文生图：只提供prompt 2. 单图生图：提供prompt和image :param prompt: 图像生成提示词 :param image: 参考图片（可选，URL或Base64编码） :param size: 图像尺寸（可选），默认2048x2048 :return: 生成结果

- Risk: `write`
- Parameters: `[{"name":"image","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"size","type":"any","required":false}]`

## `mcp_34da3baf945ac7ce1663462b`

analyze_image_vision

- Risk: `write`
- Parameters: `[{"name":"image_url","type":"string","required":true},{"name":"prompt","type":"string","required":true}]`

## `mcp_375c9505762edca877e6c3f3`

使用智谱AI联网搜索实时内容 功能特点： 1. 实时搜索：基于智谱Web Search API，获取最新资讯 2. AI增强：使用AI理解和整理搜索结果，更适合大模型处理 3. 多引擎支持：支持智谱基础版/高阶版、搜狗、夸克等搜索引擎 4. 时间过滤：支持按时间范围筛选结果（天/周/月/年/不限） 5. 结构化输出：返回网页标题、URL、摘要、网站名称、图标等结构化数据 6. 适用场景：新闻搜索、技术资料查找、市场研究、知识问答、实时信息获取 使用示例： - search_zhipu_web(query="人工智能最新进展", search_recency="oneWeek") - searc

- Risk: `write`
- Parameters: `[{"name":"content_size","type":"string","required":false},{"name":"max_results","type":"integer","required":false},{"name":"query","type":"string","required":true},{"name":"search_engine","type":"string","required":false},{"name":"search_recency","type":"string","required":false}]`

## `mcp_3de2add50db0af16bc314e72`

声音生成：按模型生成音效、环境声、多角色对白或音乐。 模型选择： - 音效/环境声/氛围声/拟声（风雨雷、动物叫声、场景音等）→ doubao-seed-audio-1.0（豆包 Seed-Audio）， 用 prompt 画面式描述声音内容，不要用它生成歌曲； - 歌曲/纯音乐/BGM → music（Suno V6）等音乐模型，mode=song 带人声、instrumental 纯音乐。 费用由服务端按模型定价处理（后置结算，失败自动退款）。 本工具会一直等待任务完成并直接返回 audio_url，无需另行查询状态。

- Risk: `write`
- Parameters: `[{"name":"duration","type":"any","required":false},{"name":"genre","type":"any","required":false},{"name":"lyrics","type":"any","required":false},{"name":"mode","type":"string","required":false},{"name":"model","type":"string","required":true},{"name":"mood","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"response_format","type":"string","required":false}]`

## `mcp_42728cc0c23245d7b9021fba`

提取视频中的关键场景 功能特点： 1. 场景识别：识别视频中的关键场景 2. 场景描述：详细描述每个场景的内容 3. 时间顺序：按时间顺序列出场景 4. 场景转换：说明场景之间的转换关系 :param file_uri: 视频文件的URI :param scene_count: 要提取的场景数量 :return: 场景提取结果

- Risk: `write`
- Parameters: `[{"name":"file_uri","type":"string","required":true},{"name":"scene_count","type":"integer","required":false}]`

## `mcp_43e446765eeb4a39f779a427`

在一个或多个指定知识库中搜索与问题相关的知识内容。 当用户询问知识库相关问题时，调用此工具获取相关知识后再回答。

- Risk: `write`
- Parameters: `[{"name":"limit","type":"integer","required":false},{"name":"query","type":"string","required":true},{"name":"threshold","type":"number","required":false},{"name":"worldview_id","type":"any","required":false},{"name":"worldview_ids","type":"any","required":false}]`

## `mcp_62890db10da8737510ec35d9`

synthesize_speech

- Risk: `write`
- Parameters: `[{"name":"emotion","type":"any","required":false},{"name":"model","type":"any","required":false},{"name":"pitch","type":"any","required":false},{"name":"response_format","type":"string","required":false},{"name":"speaker_id","type":"any","required":false},{"name":"speed","type":"number","required":false},{"name":"text","type":"string","required":true},{"name":"voice","type":"any","required":false},{"name":"volume","type":"any","required":false}]`

## `mcp_720eed78cbfec150af10f4b5`

读取会话中上传的文档内容 当用户上传了文档并询问文档相关问题时，使用此工具按需读取文档内容。 不要在没有必要时调用此工具，只在用户明确询问文档内容时才调用。 使用场景： - 用户问"帮我总结这份文档" - 用户问"文档里说了什么" - 用户问"根据文档回答..." - 用户问"对比这几份文档" :param task_id: 单个文档 task_id（兼容旧调用） :param task_ids: 多个文档 task_ids :param format_type: 返回格式（text/download_link） :return: 文档内容

- Risk: `write`
- Parameters: `[{"name":"format_type","type":"string","required":false},{"name":"task_id","type":"any","required":false},{"name":"task_ids","type":"any","required":false}]`

## `mcp_7721dc096ae6fb0215bccce0`

query_tts_voices

- Risk: `write`
- Parameters: `[{"name":"gender","type":"any","required":false},{"name":"keyword","type":"any","required":false},{"name":"language","type":"any","required":false}]`

## `mcp_9824b43cc26c395b77ebf57b`

裁剪一段视频：从源视频的 trim_start 时刻开始截取 duration 秒，转码导出一条新视频。 注意：源视频必须先上传到当前 OSS Bucket（可使用可用的上传接口/工具完成）。 本工具会一直等待转码完成并直接返回成片 video_url，无需另行查询状态。

- Risk: `write`
- Parameters: `[{"name":"duration","type":"number","required":true},{"name":"trim_start","type":"number","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_a77c378cb5084c300ec5b408`

获取当前系统时间 返回当前时区的时间和UTC时间

- Risk: `write`
- Parameters: `[]`

## `mcp_ab2a2376be1d85339b9e08b8`

使用Sora 2模型生成高质量视频，特别适配角色扮演场景 🎭 角色扮演世界观适配： 根据当前角色设定和世界观背景生成相应风格的视频内容 提示词撰写建议： - 世界观背景：修仙/武侠/现代/科幻/奇幻等 - 角色特征：服装、外貌、身份、能力 - 场景环境：符合世界观的地点和氛围 - 动作技能：角色的特有技能和行为 - 视觉风格：匹配世界观的画面风格 🌟 各世界观示例： 修仙世界： - "仙山云海之中，白衣剑仙御剑而行，剑光如流水般划破长空，山间古寺钟声回荡，仙鹤翩翩起舞，水墨画风格，意境悠远" 武侠江湖： - "月下竹林深处，青衫侠客剑光如霜，竹叶随风飘落，剑气激荡，古风武侠片质感，冷色调月光"

- Risk: `write`
- Parameters: `[{"name":"duration","type":"any","required":false},{"name":"first_frame_image","type":"any","required":false},{"name":"orientation","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"size","type":"any","required":false}]`

## `mcp_af8588df5d4f57d785842862`

使用即梦音乐生成模型生成人声歌曲 支持的功能： 1. 文生歌曲：通过提示词生成完整的人声歌曲 2. 参数控制：可指定曲风、风格、演唱性别、音色、时长等 :param prompt: 音乐生成的提示词（5-700个中文字符） :param genre: 音乐曲风（可选） :param mood: 音乐风格（可选） :param gender: 演唱性别（可选） :param timbre: 音色（可选） :param duration: 音频时长（秒），默认60秒 :return: 生成结果

- Risk: `write`
- Parameters: `[{"name":"duration","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"genre","type":"any","required":false},{"name":"mood","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"timbre","type":"any","required":false}]`

## `mcp_b07ed0a6101632ce60f5f1e5`

把多段视频按给定顺序拼接成一条新视频（单段时等价于裁剪导出）。 注意：所有片段必须先上传到当前 OSS Bucket；每个片段都要给出参与成片的 duration（秒）与可选 trim_start（秒）。 本工具会一直等待转码完成并直接返回成片 video_url，无需另行查询状态。

- Risk: `write`
- Parameters: `[{"name":"clips","type":"array","required":true}]`

## `mcp_b16cef4192bc07115ce4b949`

基于视频内容回答问题 功能特点： 1. 内容问答：基于视频内容回答用户问题 2. 细节查询：查询视频中的特定细节 3. 推理分析：基于视频内容进行推理分析 :param file_uri: 视频文件的URI :param question: 关于视频的问题 :return: 答案

- Risk: `write`
- Parameters: `[{"name":"file_uri","type":"string","required":true},{"name":"question","type":"string","required":true}]`

## `mcp_b1d0f3f83454eef42221a491`

识别图片内容并返回文字描述。 当聊天消息中包含图片 URL，而当前模型需要理解图片内容、OCR、识别场景/人物/物体、 或回答与图片相关的问题时，调用本工具。

- Risk: `write`
- Parameters: `[{"name":"image_url","type":"string","required":true},{"name":"prompt","type":"any","required":false}]`

## `mcp_b51b74672dc32b87bdfc3db8`

把本次任务中沉淀的工具调用经验保存为平台 Skill（chat 类目、仅自己可见）。 适用场景：用户说"把刚才的流程生成一个 Skill / 保存为技能"时，先整理出 工具清单、调用方法与 SOP，再调用本工具。创建成功后返回 prompt_code， 用户新开会话选择该 Skill 即可复用。

- Risk: `write`
- Parameters: `[{"name":"content","type":"string","required":true},{"name":"description","type":"any","required":false},{"name":"prompt_code","type":"any","required":false},{"name":"tags","type":"any","required":false},{"name":"title","type":"string","required":true},{"name":"tool_specs","type":"any","required":false}]`

## `mcp_d87693238c6abdc7bd41a9dd`

查询当前用户自己创建的全部 Skill（不含别人的，不含收藏）。 返回轻量列表（编码/标题/描述/版本），需要看完整内容时再用 get_skill_detail。

- Risk: `write`
- Parameters: `[{"name":"keyword","type":"any","required":false}]`

## `mcp_da8ec8cd4a70cb3c51297a9e`

直接调用 Google Gemini API 分析视频内容 功能特点： 1. 视频内容理解：识别视频中的物体、人物、场景、动作 2. 文字识别：提取视频中的文字内容（如字幕、标题等） 3. 场景分析：理解视频的上下文和叙事结构 4. 详细描述：生成视频的详细文字描述 5. 回答问题：基于视频内容回答用户问题 6. 时间线理解：理解视频的时间顺序和事件发展 支持的视频格式： - MP4, MOV, AVI 等常见视频格式 - 最大文件大小：根据 Gemini API 限制 注意：file_uri 需要通过 Gemini File API 上传视频后获取 :param file_uri: 视频文件

- Risk: `write`
- Parameters: `[{"name":"file_uri","type":"string","required":true},{"name":"prompt","type":"string","required":true}]`

## `mcp_e593ce9ed1854a1e031959e0`

转录视频中的语音内容 功能特点： 1. 语音识别：提取视频中的语音内容并转换为文字 2. 多语言支持：支持多种语言的语音识别 3. 说话人区分：识别并区分不同的说话者 4. 时间戳：返回带有时间戳的转录文本 :param file_uri: 视频文件的URI :param language: 转录语言，auto为自动检测 :param include_timestamps: 是否包含时间戳 :return: 转录结果

- Risk: `write`
- Parameters: `[{"name":"file_uri","type":"string","required":true},{"name":"include_timestamps","type":"boolean","required":false},{"name":"language","type":"string","required":false}]`

## `mcp_e8551274f051f8f58d0b1de9`

生成视频摘要 功能特点： 1. 简短概括：用1-2句话概括视频主要内容 2. 详细描述：生成详细的视频内容描述 3. 要点列表：以列表形式呈现视频要点 4. 时间线：按时间顺序描述视频关键场景 :param file_uri: 视频文件的URI :param summary_type: 摘要类型 :return: 摘要结果

- Risk: `write`
- Parameters: `[{"name":"file_uri","type":"string","required":true},{"name":"summary_type","type":"string","required":false}]`

## `mcp_e9d57e181ceea71f6aaca954`

使用百度千帆AI搜索实时搜索内容 功能特点： 1. 实时搜索：基于百度搜索引擎，获取最新资讯 2. AI增强：使用AI理解和整理搜索结果 3. 时间过滤：支持按时间范围筛选结果 4. 内容丰富：提供标题、摘要、全文和来源信息 5. 适用场景：新闻搜索、技术资料查找、市场研究、知识问答 使用示例： - search_qianfan(query="人工智能最新进展", search_recency="week") - search_qianfan(query="Python编程最佳实践", search_recency="month", max_results=3) :param query: 搜

- Risk: `write`
- Parameters: `[{"name":"max_results","type":"integer","required":false},{"name":"query","type":"string","required":true},{"name":"search_recency","type":"string","required":false}]`

## `mcp_eb2149afc478e5fcea5b5bee`

使用即梦视频生成模型生成视频 支持的场景： 1. 文生视频：只提供prompt 2. 图生视频-首帧：提供prompt和first_frame_image 3. 图生视频-首尾帧：提供prompt、first_frame_image和last_frame_image :param prompt: 视频生成提示词 :param first_frame_image: 首帧图片（可选，URL或Base64编码） :param last_frame_image: 尾帧图片（可选，URL或Base64编码） :param resolution: 视频分辨率，默认720p :param duration:

- Risk: `write`
- Parameters: `[{"name":"duration","type":"any","required":false},{"name":"first_frame_image","type":"any","required":false},{"name":"last_frame_image","type":"any","required":false},{"name":"prompt","type":"string","required":true},{"name":"resolution","type":"any","required":false}]`

## `mcp_ebcbea1f23efb0050fdd3a24`

查询云剪辑任务状态。转码通常需要几十秒到几分钟，建议每 5-10 秒查一次。 status=success 时返回成片视频地址 video_url；status=failed 时返回转码错误信息。 只有提交任务的用户本人可以查询。

- Risk: `write`
- Parameters: `[{"name":"task_id","type":"string","required":true}]`
