# 哔哩哔哩 MCP 工具

- 来源平台：`哔哩哔哩`
- 能力分段：`bilibili`
- Reference version: `sha256:7101f2f686e885c845f46663dcbe08d7c1ed1dbc6f1964fd25114ee3d35b88b6`
- Tool count: 80

## `mcp_04306ccfcff5a2c3fbd9a648`

# [中文] ### 用途: - 获取用户发布的视频数据 ### 参数: - uid: 用户UID - pn: 页码，取值 1~100 - ps: 每页数量，取值 1~50 - order: 排序方式 - pubdate 最新发布 - click 最多播放 - stow 最多收藏 ### 分页上限: - 本接口最多返回该用户的前 5000 个作品（`pn` 最大 100，`ps` 最大 50）。 - `data.page.count` 可能大于 5000，超出部分本接口不返回。 - **需要获取该用户的完整作品（超过 5000 个）请改用 `/fetch_user_post_videos_v2

- Risk: `read`
- Parameters: `[{"name":"order","type":"string","required":false},{"name":"pn","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_04e92f0d1ce24a922cc2276f`

稿件分区下拉/Get video partition options

- Risk: `read`
- Parameters: `[]`

## `mcp_053033f172ca975aa1fa4747`

# [中文] ### 用途: - 获取视频下指定评论的回复 ### 参数: - bv_id: 作品id - pn: 页码 - rpid: 回复id ### 返回: - 指定评论的回复数据 # [English] ### Purpose: - Get reply to the specified comment ### Parameters: - bv_id: Video id - pn: Page number - rpid: Reply id ### Return: - Reply of the specified comment # [示例/Example] bv_id = "BV1M14

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"pn","type":"integer","required":false},{"name":"rpid","type":"string","required":true}]`

## `mcp_0a556d58d4ce2f0338c0d436`

# [中文] ### 用途: - 获取非通用行业策略面板可用于合作经验筛选的细分行业列表。通用面板 （`panel_type=0`）应改用 `square_static_info.data.industry_tree`。 ### 参数: - `industry_type`: 必填，`1`=游戏、`2`=日化/小家电、`3`=数码家电、 `4`=汽车、`5`=食饮、`6`=网服。 ### 返回: - 将选中行业的 ID 放入 `search_upper.cooperate_experience_industry_ids`。 - 同时设置 `search_upper.cooperate_exper

- Risk: `read`
- Parameters: `[{"name":"industry_type","type":"integer","required":true}]`

## `mcp_0e7a8e8d6da0206897874c2d`

获取单个视频详情信息V3/Get single video data V3

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_0f2607dc3242932f5d87d1b3`

# [中文] ### 用途: - 获取指定用户动态 ### 参数: - uid: 用户UID - offset: 开始索引 ### 返回: - 指定用户动态数据 # [English] ### Purpose: - Get dynamic information of specified user ### Parameters: - uid: User UID - offset: offset ### Return: - dynamic information of specified user # [示例/Example] uid = "178360345" offset = "953154

- Risk: `read`
- Parameters: `[{"name":"offset","type":"string","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_10b12531cebc066b04d4b39c`

# [中文] ### 用途: - 获取视频字幕信息 ### 参数: - a_id: 作品id - c_id: 作品cid ### 返回: - 视频字幕信息 # [English] ### Purpose: - Get video subtitle info ### Parameters: - a_id: Video id - c_id: Video cid ### Return: - Video subtitle info # [示例/Example] a_id = "114006081739452" c_id = "28400484458"

- Risk: `read`
- Parameters: `[{"name":"a_id","type":"string","required":true},{"name":"c_id","type":"string","required":true}]`

## `mcp_131713724083d4081698f94e`

# [中文] ### 用途: - 获取所有直播分区列表 ### 参数: ### 返回: - 所有直播分区列表 # [English] ### Purpose: - Get a list of all live areas ### Parameters: ### Return: - list of all live areas # [示例/Example]

- Risk: `read`
- Parameters: `[]`

## `mcp_13d141b34e81053e02ce1d73`

商品带货UP主榜/Get creators ranked for a product

- Risk: `read`
- Parameters: `[{"name":"goods_id","type":"integer","required":true},{"name":"page","type":"integer","required":false}]`

## `mcp_1481490a64b731549939b1f8`

# [中文] ### 用途: - 获取视频实时弹幕 ### 参数: - cid: 作品cid ### 返回: - 视频实时弹幕 # [English] ### Purpose: - Get Video Danmaku ### Parameters: - cid: Video cid ### Return: - Video Danmaku # [示例/Example] cid = "1639235405"

- Risk: `read`
- Parameters: `[{"name":"cid","type":"string","required":true}]`

## `mcp_160d7714cfe5d283c1ed5649`

# [中文] ### 用途: - 根据昵称片段或 UID 返回候选 UP 主，适合搜索框联想和用户选择。 ### 参数: - `nickname_or_mids`: 必填，昵称片段或 UP 主 UID。 - `page`: 页码，从 1 开始。 - `panel_type`: 行业策略面板，取值与 `search_upper` 一致。 - `marketing_target`: 营销目标，取值与 `search_upper` 一致。 - `cpm_type` / `play_median_traffic_type`: 指标流量口径，1=全部流量，2=自然流量。 - `cpm_cycle` /

- Risk: `read`
- Parameters: `[{"name":"cpm_cycle","type":"integer","required":false},{"name":"cpm_type","type":"integer","required":false},{"name":"marketing_target","type":"integer","required":false},{"name":"nickname_or_mids","type":"string","required":true},{"name":"page","type":"integer","required":false},{"name":"panel_type","type":"integer","required":false},{"name":"play_median_cycle","type":"integer","required":false},{"name":"play_median_traffic_type","type":"integer","required":false}]`

## `mcp_172d8c5e341b00b8fca509f1`

职业标签字典/Get occupation tags

- Risk: `read`
- Parameters: `[]`

## `mcp_1946d529f5c1cc3b66f053dc`

# [中文] ### 用途: - 获取单个视频详情信息V2 ### 参数: - a_id: 作品id - c_id: 作品cid ### 返回: - 视频详情信息V2 # [English] ### Purpose: - Get single video data V2 ### Parameters: - a_id: Video id - c_id: Video cid ### Return: - Video data V2 # [示例/Example] a_id = "114006081739452" c_id = "28400484458"

- Risk: `read`
- Parameters: `[{"name":"a_id","type":"string","required":true},{"name":"c_id","type":"string","required":true}]`

## `mcp_1f3bff390ce3384666dc4501`

当前广告主账号信息/Get current advertiser account information

- Risk: `read`
- Parameters: `[]`

## `mcp_1fcd82721476c6e29f283658`

人设标签字典/Get persona tags

- Risk: `read`
- Parameters: `[]`

## `mcp_23107f088be967d538176bdb`

UP主粉丝增长趋势/Get creator follower trends

- Risk: `read`
- Parameters: `[{"name":"query_type","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_26b8bf954ab44908667d04d7`

UP主代表作/Get creator representative videos

- Risk: `read`
- Parameters: `[{"name":"type","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_29074c057dde48caedfb7186`

# [中文] ### 用途: - 在花火内容合作广场按 UP 主、UID 或内容关键词检索创作者。 - 可组合基础属性、粉丝画像、报价与效果、内容表现、DMP 人群包、行业标签、 合作经验和带货能力等筛选条件。 - `nickname_or_mids` 与 `main_search` 分别对应“搜 UP 主”和“搜内容”，建议二选一。 ### 参数: #### 基础搜索参数: - `nickname_or_mids`: 按昵称或 UID 搜索 UP 主；多个词使用英文逗号分隔。 - `main_search`: 按内容关键词搜索；命中的稿件随 UP 主结果返回。通常与 `nickname_or

- Risk: `write`
- Parameters: `[{"name":"av_active","type":"any","required":false},{"name":"av_active_tag","type":"any","required":false},{"name":"av_honor","type":"object","required":false},{"name":"bdata_tag_lv5","type":"any","required":false},{"name":"blue_url_click_cost_gte","type":"any","required":false},{"name":"blue_url_click_cost_lt","type":"any","required":false},{"name":"blue_url_ctr_gte","type":"any","required":false},{"name":"blue_url_ctr_lt","type":"any","required":false},{"name":"category_dmp_group_id","type":"any","required":false},{"name":"category_dmp_label","type":"any","required":false},{"name":"cooperate_experience_industry_ids","type":"any","required":false},{"name":"cooperate_experience_type","type":"any","required":false},{"name":"cpc_cycle","type":"any","required":false},{"name":"cpc_traffic_type","type":"any","required":false},{"name":"cpe_cycle","type":"any","required":false},{"name":"cpe_gte","type":"any","required":false},{"name":"cpe_lt","type":"any","required":false},{"name":"cpe_traffic_type","type":"any","required":false},{"name":"cpm_cycle","type":"any","required":false},{"name":"cpm_type","type":"any","required":false},{"name":"custom_video_pricing_set","type":"any","required":false},{"name":"dmp_group_id","type":"any","required":false},{"name":"dmp_pkg_effect_rate_gte","type":"any","required":false},{"name":"dmp_pkg_effect_rate_lte","type":"any","required":false},{"name":"dmp_pkg_fan_rate_gte","type":"any","required":false},{"name":"dmp_pkg_fan_rate_lte","type":"any","required":false},{"name":"dmp_pkg_name","type":"any","required":false},{"name":"dmp_pkg_vertical_rate_gte","type":"any","required":false},{"name":"dmp_pkg_vertical_rate_lte","type":"any","required":false},{"name":"draft_duration","type":"any","required":false},{"name":"entry_cost_max","type":"any","required":false},{"name":"entry_cost_min","type":"any","required":false},{"name":"fans_age_tag","type":"any","required":false},{"name":"fans_gender_tag","type":"any","required":false},{"name":"fans_region_tag","type":"any","required":false},{"name":"fans_stick","type":"any","required":false},{"name":"folder_id","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"goods_avg_price_max","type":"any","required":false},{"name":"goods_avg_price_min","type":"any","required":false},{"name":"goods_category_first_ids","type":"any","required":false},{"name":"goods_category_second_ids","type":"any","required":false},{"name":"goods_ctr_max","type":"any","required":false},{"name":"goods_ctr_min","type":"any","required":false},{"name":"goods_ctr_type","type":"any","required":false},{"name":"goods_gpm_max","type":"any","required":false},{"name":"goods_gpm_min","type":"any","required":false},{"name":"goods_is_high_fans_play_permeate","type":"any","required":false},{"name":"goods_is_high_video_play_permeate","type":"any","required":false},{"name":"goods_permission","type":"any","required":false},{"name":"goods_up_levels","type":"any","required":false},{"name":"half_max_hot_avid_cnt","type":"any","required":false},{"name":"half_min_hot_avid_cnt","type":"any","required":false},{"name":"high_potential_type","type":"any","required":false},{"name":"huahuo_first_industry_ids","type":"any","required":false},{"name":"huahuo_second_industry_ids","type":"any","required":false},{"name":"huahuo_third_industry_ids","type":"any","required":false},{"name":"is_boosting","type":"any","required":false},{"name":"is_new_enter","type":"any","required":false},{"name":"is_painter_order","type":"any","required":false},{"name":"is_timely_response","type":"any","required":false},{"name":"is_treasure_up","type":"any","required":false},{"name":"is_x_plan_better_up","type":"any","required":false},{"name":"label_array","type":"any","required":false},{"name":"last_14_days_set_price","type":"any","required":false},{"name":"last_30_days_set_price","type":"any","required":false},{"name":"last_7_days_set_price","type":"any","required":false},{"name":"main_search","type":"any","required":false},{"name":"marketing_target","type":"any","required":false},{"name":"max_avid_cnt","type":"any","required":false},{"name":"max_cpc","type":"any","required":false},{"name":"max_cpm","type":"any","required":false},{"name":"max_fans_num","type":"any","required":false},{"name":"max_hot_avid_rate","type":"any","required":false},{"name":"max_interact_rate","type":"any","required":false},{"name":"max_play_median","type":"any","required":false},{"name":"max_task_price","type":"any","required":false},{"name":"mcn_ids","type":"any","required":false},{"name":"mids","type":"any","required":false},{"name":"min_avid_cnt","type":"any","required":false},{"name":"min_cpc","type":"any","required":false},{"name":"min_cpm","type":"any","required":false},{"name":"min_fans_num","type":"any","required":false},{"name":"min_hot_avid_rate","type":"any","required":false},{"name":"min_interact_rate","type":"any","required":false},{"name":"min_play_median","type":"any","required":false},{"name":"min_task_price","type":"any","required":false},{"name":"nickname_or_mids","type":"any","required":false},{"name":"only_contract","type":"any","required":false},{"name":"order_by","type":"any","required":false},{"name":"page","type":"any","required":false},{"name":"panel_type","type":"any","required":false},{"name":"partition_id","type":"any","required":false},{"name":"play_median_cycle","type":"any","required":false},{"name":"play_median_traffic_type","type":"any","required":false},{"name":"price_info","type":"any","required":false},{"name":"provider_id","type":"any","required":false},{"name":"region_id","type":"any","required":false},{"name":"request_id","type":"any","required":false},{"name":"second_partition_id","type":"any","required":false},{"name":"second_region_id","type":"any","required":false},{"name":"sort","type":"any","required":false},{"name":"spark_tag","type":"any","required":false},{"name":"special_tags","type":"any","required":false},{"name":"square_tag_in","type":"any","required":false},{"name":"upper_mid","type":"any","required":false},{"name":"upper_types","type":"any","required":false}]`

## `mcp_2faa228cb6e1409e0ae8b91a`

获取大会员清晰度视频流地址/Get VIP video playurl

- Risk: `write`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"cid","type":"string","required":true}]`

## `mcp_3060d9b2436d80639ba358ab`

# [中文] ### 用途: - 获取指定行业策略面板支持的 UP 主筛选配置，用于动态展示可用条件。 ### 参数: - `panel_type`: 行业策略面板，`0`=通用、`1`=游戏、`2`=美妆、`3`=数码、 `4`=汽车、`5`=效果、`6`=食饮、`8`=网服。 ### 返回: - 筛选分组、字段、标签、可选值及展示顺序组成的配置树。 - `search_upper.label_array` 仅使用“内容类型”分组节点的 `value`；所有选中的 内容类型放在同一个内层数组。例如单选户外探险为 `[[794]]`，同时选择 户外探险、AI短片、AI整活为 `[[794,74

- Risk: `read`
- Parameters: `[{"name":"panel_type","type":"integer","required":false}]`

## `mcp_311d2a250775a48598bf6bfb`

# [中文] ### 用途: - 获取主页影视推荐 ### 返回: - 影视推荐数据 # [English] ### Purpose: - Get cinema tab (movies/TV recommendations) ### Return: - Cinema tab data

- Risk: `read`
- Parameters: `[]`

## `mcp_34f241a370977fbfb81b0276`

# [中文] ### 用途: - 获取单个视频详情信息（APP接口） ### 参数: - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） ### 返回: - 视频详情信息 # [English] ### Purpose: - Get single video data (APP API) ### Parameters: - av_id: AV ID (choose one of av_id or bv_id) - bv_id: BV ID (choose one of av_id or bv_id) ### Return: - Video data

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false}]`

## `mcp_3708578b85880e207b87e77d`

直播人设标签/Get live creator persona tags

- Risk: `read`
- Parameters: `[]`

## `mcp_3f39ec9bf23b719b6571f1b6`

# [中文] ### 用途: - 获取综合搜索信息 ### 参数: - keyword: 搜索关键词 - order: 排序方式 - totalrank 综合排序 - click 最多播放 - pubdate 最新发布 - dm 最多弹幕 - stow 最多收藏 - page: 页码 - page_size: 每页数量 - duration: 时长筛选 - 0 全部时长 - 1 10分钟以下 - 2 10-30分钟 - 3 30分钟-60分钟 - 4 60分钟以上 - pubtime_begin_s: 开始日期，10位时间戳，需要小于结束日期 - pubtime_end_s: 结束日期，10位

- Risk: `read`
- Parameters: `[{"name":"duration","type":"integer","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"string","required":true},{"name":"page","type":"integer","required":true},{"name":"page_size","type":"integer","required":true},{"name":"pubtime_begin_s","type":"integer","required":false},{"name":"pubtime_end_s","type":"integer","required":false}]`

## `mcp_3f73419a235018b4942ec7b8`

人群包列表/Get audience packages

- Risk: `read`
- Parameters: `[]`

## `mcp_42790ae65e43543d0b4a78b2`

直播UP主详情/Get live creator profile

- Risk: `read`
- Parameters: `[{"name":"mcn_id","type":"integer","required":true},{"name":"upper_mid","type":"any","required":false}]`

## `mcp_44b75b58a1cf008ad9989803`

行业标签字典/Get industry tags

- Risk: `read`
- Parameters: `[]`

## `mcp_47357e47d4ed357b04ed49bf`

粉丝重合UP主/Get creators with overlapping audiences

- Risk: `read`
- Parameters: `[{"name":"fans_range","type":"string","required":false},{"name":"page","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_47c4eb8799676ea58ba8b108`

# [中文] ### 用途: - 获取二级评论回复 ### 参数: - root: 一级评论ID（必填） - av_id: AV号（与bv_id二选一） - bv_id: BV号（与av_id二选一） - next_offset: 下一页游标 - ps: 每页数量 ### 返回: - 二级评论列表数据 # [English] ### Purpose: - Get reply detail (second level comments) ### Parameters: - root: Root comment ID (required) - av_id: AV ID (choose one of

- Risk: `read`
- Parameters: `[{"name":"av_id","type":"string","required":false},{"name":"bv_id","type":"string","required":false},{"name":"next_offset","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"root","type":"string","required":true}]`

## `mcp_4947ea0cf806e0340fd8a27e`

UP主基础信息/Get creator basic information

- Risk: `read`
- Parameters: `[{"name":"mid","type":"integer","required":true}]`

## `mcp_49f3c4f0b558f29f0fa45c04`

视频榜单/Get Huahuo video rankings

- Risk: `read`
- Parameters: `[{"name":"category","type":"string","required":false},{"name":"page","type":"integer","required":false}]`

## `mcp_4a400649a94781ab3f95adcf`

# [中文] ### 用途: - 获取用户收藏作品数据 ### 参数: - uid: 用户UID ### 返回: - 用户收藏夹信息 # [English] ### Purpose: - Get user collection folders ### Parameters: - uid: User UID ### Return: - user collection folders # [示例/Example] uid = "178360345"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_4f9451987107c8085aeeb2c4`

MCN机构下拉/Get MCN organizations

- Risk: `read`
- Parameters: `[{"name":"name","type":"string","required":false}]`

## `mcp_4fa8ddf09977ba0fbe2f4253`

UP主稿件数据趋势/Get creator video metric trends

- Risk: `read`
- Parameters: `[{"name":"trend_type","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_53f85c5e5c6835580421937b`

直播带货能力/Get live-commerce performance

- Risk: `read`
- Parameters: `[{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_57a8a58f647b239f35cc115b`

# [中文] ### 用途: - 综合搜索（返回所有类型的搜索结果） ### 参数: - keyword: 搜索关键词（必填） - cursor: 翻页游标。首页留空；翻页时把上一页响应里返回的 `data.pagination.next` 原样传回。 本接口为游标翻页，不支持按页码随机跳转。 - page_size: 每页结果数量 - order: 排序方式（0=综合排序） ### 返回: - 搜索结果，包含nav（分类导航）、item（搜索结果）、pagination（分页信息）等 - 下一页游标：`$.data.data.pagination.next`，把它作为下一次请求的 `curs

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"integer","required":false},{"name":"page_size","type":"integer","required":false}]`

## `mcp_58d0a7b12be8714dd74081f7`

UP主稿件高光/Get creator video highlights

- Risk: `read`
- Parameters: `[{"name":"day_range","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_5edd816a5ba22aeb318fb433`

UP主榜单分区下拉/Get creator ranking categories

- Risk: `read`
- Parameters: `[]`

## `mcp_6018c27ea97acd862e2fb343`

# [中文] ### 用途: - 获取视频流地址 ### 参数: - bv_id: 作品id - cid: 作品cid ### 返回: - 视频流地址 # [English] ### Purpose: - Get video playurl ### Parameters: - bv_id: Video id - cid: Video cid ### Return: - Video playurl # [示例/Example] bv_id = "BV1y7411Q7Eq" cid = "171776208"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"cid","type":"string","required":true}]`

## `mcp_66ff0e5236d376b94252bc9c`

商业标签字典/Get commercial tags

- Risk: `read`
- Parameters: `[]`

## `mcp_67e722b394b780da0ba4dc51`

UP主稿件表现/Get creator video performance

- Risk: `read`
- Parameters: `[{"name":"day_range","type":"integer","required":false},{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_68febc9d33a156eb99625f8b`

# [中文] ### 用途: - 获取用户关系状态统计信息（关注数、粉丝数） ### 参数: - uid: 用户UID ### 返回: - 用户关系状态统计数据 - following: 关注数 - follower: 粉丝数 # [English] ### Purpose: - Get user relation stat (following count and follower count) ### Parameters: - uid: User UID ### Return: - User relation stat data - following: Following count

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_6dd5ed93c028a2417e772f90`

直播分区下拉/Get live-streaming areas

- Risk: `read`
- Parameters: `[]`

## `mcp_7bd2bf4059f28d32fc89239a`

# [中文] ### 用途: - 获取指定视频的评论 ### 参数: - bv_id: 作品id - pn: 页码 ### 返回: - 指定视频的评论数据 # [English] ### Purpose: - Get comments on the specified video ### Parameters: - bv_id: Video id - pn: Page number ### Return: - comments of the specified video # [示例/Example] bv_id = "BV1M1421t7hT" pn = 1

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`

## `mcp_7d06dde62d140a453ebf6ea8`

# [中文] ### 用途: - 获取内容合作广场常用筛选项的完整取值字典，用于构建搜索表单。 ### 参数: - 无。 ### 返回: - `fans_age_tag`、`fans_gender_tag`、`fans_region_tag`: 粉丝画像筛选项。 - `gender_info`: UP 主性别筛选项。 - `av_active_tag`: 近期投稿活跃筛选项。 - 特色标签及子项，以及 `data.industry_tree` 三级合作行业树。 - `data.费用字段`: `search_upper.费用字段` 的合作报价字典： `co

- Risk: `read`
- Parameters: `[]`

## `mcp_7fd1490e80f9ab4ed98b7790`

按昵称查UP主/Find creators by nickname

- Risk: `read`
- Parameters: `[{"name":"nickname","type":"string","required":true}]`

## `mcp_8081f423c36bde65097b52f2`

# [中文] ### 用途: - 在直播合作广场检索适合内容直播或带货直播合作的主播。 - 按主播属性、粉丝画像、直播分区、直播表现、公会、主营类目和 GMV 筛选。 ### 参数: - `is_brand_live`: 直播类型，`1` 为内容直播，`0` 为带货直播。 - 内容直播可使用人气峰值、时均观众数、时均弹幕数、公会和入驻状态等条件。 - 带货直播可使用主营类目和近 90 天 GMV 等条件。 - `page`: 页码，从 1 开始，每页固定返回 20 条。 ### 返回: - `total_count`: 匹配主播总数。 - `data`: 主播列表，包含基础资料、粉丝画像、直播

- Risk: `write`
- Parameters: `[{"name":"fans_age_tag","type":"any","required":false},{"name":"fans_gender_tag","type":"any","required":false},{"name":"fans_region_tag","type":"any","required":false},{"name":"gender","type":"any","required":false},{"name":"high_potential_type","type":"any","required":false},{"name":"is_brand_live","type":"any","required":false},{"name":"live_audience_h_avg_30d_max","type":"any","required":false},{"name":"live_audience_h_avg_30d_min","type":"any","required":false},{"name":"live_danmu_h_avg_30d_max","type":"any","required":false},{"name":"live_danmu_h_avg_30d_min","type":"any","required":false},{"name":"live_good_category","type":"any","required":false},{"name":"live_good_gmv","type":"any","required":false},{"name":"live_guild_id","type":"any","required":false},{"name":"live_subarea_id","type":"any","required":false},{"name":"max_fans_num","type":"any","required":false},{"name":"max_popularity","type":"any","required":false},{"name":"mids","type":"any","required":false},{"name":"min_fans_num","type":"any","required":false},{"name":"min_popularity","type":"any","required":false},{"name":"nickname_or_mids","type":"any","required":false},{"name":"order_by","type":"any","required":false},{"name":"page","type":"any","required":false},{"name":"partition_id","type":"any","required":false},{"name":"region_id","type":"any","required":false},{"name":"second_partition_id","type":"any","required":false},{"name":"second_region_id","type":"any","required":false},{"name":"sort","type":"any","required":false}]`

## `mcp_829482eaf9d824b9644f82ce`

# [中文] ### 用途: - 获取指定动态的详情信息（v2接口） - 视频类动态（DYNAMIC_TYPE_AV）请使用本接口 - module_stat 只含 comment / forward / like；如需 favorite / coin 且为图文 / 文字 / 专栏类动态请用 v1 接口 ### 参数: - dynamic_id: 动态id ### 返回: - 动态详情数据 # [English] ### Purpose: - Get detail information of specified dynamic (v2 API) - Use this endpoint for

- Risk: `read`
- Parameters: `[{"name":"dynamic_id","type":"string","required":true}]`

## `mcp_8694d2c11bae44a91b484f48`

# [中文] ### 用途: - 通过bv号获得视频aid号 ### 参数: - bv_id: 作品id ### 返回: - 视频aid号 # [English] ### Purpose: - Generate aid by bvid ### Parameters: - bv_id: Video id ### Return: - Video aid # [示例/Example] bv_id = "BV1M1421t7hT"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_8b3fdd99f36a04cc24c665b3`

UP主档期占用/Get creator unavailable dates

- Risk: `read`
- Parameters: `[{"name":"mid","type":"integer","required":true}]`

## `mcp_8faaf422834b625c904468bc`

# [中文] ### 用途: - 获取用户投稿视频列表 ### 参数: - user_id: 用户ID（必填） - post_filter: 过滤类型（archive=投稿, season=合集, contribute=贡献） - page: 页码 - ps: 每页数量 ### 返回: - 用户投稿视频列表 # [English] ### Purpose: - Get user uploaded videos ### Parameters: - user_id: User ID (required) - post_filter: Filter type (archive/season/cont

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"post_filter","type":"string","required":false},{"name":"ps","type":"integer","required":false},{"name":"user_id","type":"string","required":true}]`

## `mcp_9368358e12a47b6c56e6350c`

# [中文] ### 用途: - 获取指定直播间信息 ### 参数: - room_id: 直播间ID ### 返回: - 指定直播间信息 # [English] ### Purpose: - Get information of specified live room ### Parameters: - room_id: Live room ID ### Return: - information of specified live room # [示例/Example] room_id = "22816111"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_95068291d0b5c2c6ca356af9`

# [中文] ### 用途: - 获取主页推荐视频流 ### 参数: - idx: 页面索引，默认使用当前时间戳 - flush: 刷新标记（0=普通加载, 1=刷新） - pull: 是否下拉刷新 ### 返回: - 推荐视频流数据 # [English] ### Purpose: - Get home feed (recommended videos) ### Parameters: - idx: Page index, defaults to current timestamp - flush: Flush flag (0=normal load, 1=refresh) - pull:

- Risk: `read`
- Parameters: `[{"name":"flush","type":"integer","required":false},{"name":"idx","type":"integer","required":false},{"name":"pull","type":"boolean","required":false}]`

## `mcp_990dd51d5ebe105e41b15939`

# [中文] ### 用途: - 获取单个视频详情 ### 参数: - aid: 作品id ### 返回: - 视频详情 # [English] ### Purpose: - Get single video detail ### Parameters: - aid: Video id ### Return: - Video detail # [示例/Example] aid = "114902186396822"

- Risk: `read`
- Parameters: `[{"name":"aid","type":"string","required":true}]`

## `mcp_9b9d74bc905ece9b2dddc372`

获取单个视频播放信息/Get single video play info

- Risk: `read`
- Parameters: `[{"name":"url","type":"string","required":true}]`

## `mcp_a21f13c217c8acef2acd5d42`

直播公会下拉/Get live-streaming guilds

- Risk: `read`
- Parameters: `[{"name":"name","type":"string","required":false}]`

## `mcp_a249a540b4aa8c70e30f7393`

# [中文] ### 用途: - 通过bv号获得视频分p信息 ### 参数: - bv_id: 作品id ### 返回: - 视频分p信息 # [English] ### Purpose: - Get Video Parts By bvid ### Parameters: - bv_id: Video id ### Return: - Video Parts # [示例/Example] bv_id = "BV1vf421i7hV"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_a2b19ff9ae18bb871ed4bb86`

# [中文] ### 用途: - 提取用户ID ### 参数: - share_link: 用户分享链接 ### 返回: - 用户ID # [English] ### Purpose: - Extract user ID ### Parameters: - share_link: User share link ### Return: - User ID

- Risk: `read`
- Parameters: `[{"name":"share_link","type":"string","required":true}]`

## `mcp_a46bf0e80a455cc04e795121`

内容风格字典/Get content-style tags

- Risk: `read`
- Parameters: `[]`

## `mcp_a7cfef4bbfab79cfa91e78d3`

UP主详情/Get creator profile

- Risk: `read`
- Parameters: `[{"name":"upper_mid","type":"integer","required":true}]`

## `mcp_aa16e220007bd480861f1cd7`

# [中文] ### 用途: - 获取指定行业和周期的 X 火种草 UP 主榜单，用于行业达人选取和趋势分析。 ### 参数: - `x_huo_industry_id`: 必填，行业 ID，取值见 `x_huo_industry_drop?scene=1`； 存在二级行业时建议传二级 ID。 - `rank_date_type`: `1`=月度榜，`2`=季度榜。 - `rank_date`: `YYYY-MM` 格式的榜单期数，取值见 `x_huo_date_options`；留空取最新一期。 - `page`: 页码，从 1 开始。 ### 返回: - UP 主排名、账号资料、行业相关度

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"rank_date","type":"any","required":false},{"name":"rank_date_type","type":"integer","required":false},{"name":"x_huo_industry_id","type":"integer","required":true}]`

## `mcp_add4938a68e7de436a8162ca`

直播带货类目/Get live-commerce categories

- Risk: `read`
- Parameters: `[]`

## `mcp_ae2f221d22abbb5af04106fa`

# [中文] ### 用途: - 获取热门推荐视频 ### 参数: - idx: 页面索引（从1开始） - last_param: 上一页最后一个视频的ID（用于分页） ### 返回: - 热门推荐视频数据 # [English] ### Purpose: - Get popular feed ### Parameters: - idx: Page index (starting from 1) - last_param: Last video ID from previous page (for pagination) ### Return: - Popular feed data # [示

- Risk: `read`
- Parameters: `[{"name":"idx","type":"integer","required":false},{"name":"last_param","type":"string","required":false}]`

## `mcp_afad3992b7d20660b437a5c9`

UP主询单配置/Get creator inquiry settings

- Risk: `read`
- Parameters: `[{"name":"mid","type":"integer","required":true}]`

## `mcp_b0627a0fc71bc50f037d0379`

X火商品榜/Get X-Huo product rankings

- Risk: `read`
- Parameters: `[{"name":"data_cycle","type":"any","required":false},{"name":"max_goods_price","type":"any","required":false},{"name":"min_goods_price","type":"any","required":false},{"name":"page","type":"integer","required":false},{"name":"rank_type","type":"any","required":false},{"name":"x_huo_industry_id","type":"integer","required":true}]`

## `mcp_b10c7012922ab2ebde8b36f5`

# [中文] ### 用途: - 获取单个视频详情信息 ### 参数: - bv_id: 作品id ### 返回: - 视频详情信息 # [English] ### Purpose: - Get single video data ### Parameters: - bv_id: Video id ### Return: - Video data # [示例/Example] bv_id = "BV1M1421t7hT"

- Risk: `read`
- Parameters: `[{"name":"bv_id","type":"string","required":true}]`

## `mcp_b6d1079f3eae14b1d755cf5d`

# [中文] ### 用途: - 获取指定直播间视频流 ### 参数: - room_id: 直播间ID ### 返回: - 指定直播间视频流 # [English] ### Purpose: - Get live video data of specified room ### Parameters: - room_id: Live room ID ### Return: - live video data of specified room # [示例/Example] room_id = "1815229528"

- Risk: `read`
- Parameters: `[{"name":"room_id","type":"string","required":true}]`

## `mcp_b72bd9f182505f5bd402ae05`

行业带货UP主榜/Get commerce creators by industry

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"x_huo_industry_id","type":"integer","required":true}]`

## `mcp_b7642abbcb5b60cfc6245f33`

视频榜单行业下拉/Get video ranking industries

- Risk: `read`
- Parameters: `[]`

## `mcp_b7799aa3a04c4000f63f7f56`

# [中文] ### 用途: - 获取UP主状态统计信息（总播放数、总获赞数） ### 参数: - uid: 用户UID ### 返回: - UP主状态统计数据 - archive.view: 总播放数 - likes: 总获赞数 # [English] ### Purpose: - Get UP stat (total video views and total likes) ### Parameters: - uid: User UID ### Return: - UP stat data - archive.view: Total video views - likes: Total l

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_b9591ac5c6a3e2da246a493b`

# [中文] ### 用途: - 获取指定用户的信息 ### 参数: - uid: 用户UID ### 返回: - 指定用户的个人信息 # [English] ### Purpose: - Get information of specified user ### Parameters: - uid: User UID ### Return: - information of specified user # [示例/Example] uid = "178360345"

- Risk: `read`
- Parameters: `[{"name":"uid","type":"string","required":true}]`

## `mcp_ba80beaa93f516257ea10050`

UP主榜单/Get creator rankings

- Risk: `read`
- Parameters: `[{"name":"page","type":"integer","required":false},{"name":"rank_cate","type":"integer","required":false},{"name":"tid_name","type":"string","required":false}]`

## `mcp_bb2a8d576356bc8a17f38d74`

# [中文] ### 用途: - 分类搜索（按类型搜索） ### 参数: - keyword: 搜索关键词（必填） - search_type: 搜索类型 - video: 视频 - bangumi: 番剧 - pgc: 影视 - live: 直播 - article: 专栏 - user: 用户 - cursor: 翻页游标。首页留空；翻页时把上一页响应里返回的 `data.pagination.next` 原样传回。 本接口为游标翻页，不支持按页码随机跳转。 - page_size: 每页结果数量 - order: 排序方式 - 0: 综合排序 - 1: 最新发布 - 2: 播放量 - 3

- Risk: `read`
- Parameters: `[{"name":"cursor","type":"string","required":false},{"name":"keyword","type":"string","required":true},{"name":"order","type":"integer","required":false},{"name":"page_size","type":"integer","required":false},{"name":"search_type","type":"string","required":false}]`

## `mcp_bbcf27c1f29e611c23cf2b10`

# [中文] ### 用途: - 获取指定分区正在直播的主播 ### 参数: - area_id: 直播分区id - pn: 页码 ### 返回: - 指定分区正在直播的主播 # [English] ### Purpose: - Get live streamers of specified live area ### Parameters: - area_id: Live area ID - pn: Page number ### Return: - live streamers of specified live area # [示例/Example] area_id = "9" pn =

- Risk: `read`
- Parameters: `[{"name":"area_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`

## `mcp_c38f8fef2b9355b1bf3a4f99`

# [中文] ### 用途: - 获取综合热门视频信息 ### 参数: - pn: 页码 ### 返回: - 综合热门视频信息 # [English] ### Purpose: - Get comprehensive popular video information ### Parameters: - pn: Page number ### Return: - comprehensive popular video information # [示例/Example] pn = 1

- Risk: `read`
- Parameters: `[{"name":"pn","type":"integer","required":false}]`

## `mcp_d52b6a1988f617541a02f596`

带货类目下拉/Get commerce category options

- Risk: `read`
- Parameters: `[]`

## `mcp_e0784e6f60b929a7c744e9f0`

# [中文] ### 用途: - 获取用户发布的视频数据，并可按关键词在该用户的作品内搜索。 - 与 `/fetch_user_post_videos` 的区别见下方「与V1的区别」。 ### 参数: - uid: 用户UID - pn: 页码，无上限；超出末页返回空的 `data.archives` - ps: 每页数量，取值 1~100 - keyword: 关键词，留空表示不过滤，返回该用户全部作品 - 仅支持单个词，请勿包含空格。 ### 与V1的区别: - **无分页上限**：V1 最多只能取到第 5000 个作品，本接口可一直翻到该用户最早的一条投稿。作品数超过 5000 时请使用

- Risk: `read`
- Parameters: `[{"name":"keyword","type":"string","required":false},{"name":"pn","type":"integer","required":false},{"name":"ps","type":"integer","required":false},{"name":"uid","type":"string","required":true}]`

## `mcp_e58d7b7c6f0ac17fc0d376d7`

# [中文] ### 用途: - 获取 UP 主常驻地域筛选所需的省市层级字典。 ### 参数: - 无。 ### 返回: - 把选中一级地域节点的 `value` 放入 `search_upper.region_id`；把选中一级节点 `children` 中的二级节点 `value` 放入 `search_upper.second_region_id`。 - 多选时将所有选中值分别放入对应数组。例如北京、上海、福建，以及福建下的 厦门和福州为 `{"region_id":[4,5,23],"second_region_id":[51,50]}`。 ### 调用示例: `GET /api/v

- Risk: `read`
- Parameters: `[]`

## `mcp_e775d63170bfbb9a890ff1e6`

X火榜可选期数/Get X-Huo ranking periods

- Risk: `read`
- Parameters: `[{"name":"rank_date_type","type":"integer","required":false}]`

## `mcp_e9d5319d651b50ad7764c0ba`

# [中文] ### 用途: - 获取指定收藏夹内视频数据 ### 参数: - folder_id: 用户UID - pn: 页码 ### 返回: - 指定收藏夹内视频数据 # [English] ### Purpose: - Gets video data from a collection folder ### Parameters: - folder_id: collection folder id - pn: Page number ### Return: - video data from collection folder # [示例/Example] folder_id = "1

- Risk: `read`
- Parameters: `[{"name":"folder_id","type":"string","required":true},{"name":"pn","type":"integer","required":false}]`
