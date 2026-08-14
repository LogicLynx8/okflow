# 知识库 OpenAPI 操作指南

## 目录

- [范围与鉴权](#范围与鉴权)
- [发现契约并选择知识库](#发现契约并选择知识库)
- [创建或更新笔记](#创建或更新笔记)
- [引用生图历史](#引用生图历史)
- [引用轻应用为工作台应用块](#引用轻应用为工作台应用块)
- [本地图片与 CLI 入口](#本地图片与-cli-入口)
- [错误处理](#错误处理)

## 范围与鉴权

知识库能力是 HTTP OpenAPI，不是前端组件接入指南。所有请求使用：

```http
Authorization: Bearer ak_xxx
Content-Type: application/json
```

响应统一为 `{"code":200,"msg":"请求成功","data":...}`。同时检查 HTTP 状态和 `code`；只读取
`data` 作为业务结果。知识库读写限制在 API Key 所属用户，不能访问其他用户的知识库。
始终把 `ak` 放在 `Authorization` 请求头中；不要把凭证放入查询字符串、日志或笔记正文。

## 发现契约并选择知识库

每次不确定字段时先调用 `GET /openapi/v1/knowledge-bases/schema`，不要凭记忆猜请求结构。

1. 调用 `GET /openapi/v1/knowledge-bases/?page=1&page_size=100` 列出本人知识库。
2. 用用户指定的名称或 ID 选择目标；分页未结束时继续翻页，不要只搜索第一页。
3. 仅在用户明确要求新建或没有合适目标时调用 `POST /openapi/v1/knowledge-bases/`：

```json
{
  "title": "提示词学习笔记",
  "type": "document",
  "description": "沉淀生成案例与可复用参数",
  "is_public": false,
  "status": 1
}
```

同一用户的知识库标题不能重复，冲突会返回 409。OpenAPI 当前不提供删除知识库或文章的接口。

## 创建或更新笔记

普通单次创建可调用 `POST /openapi/v1/knowledge-bases/{base_id}/articles`：

```json
{
  "title": "生图提示词拆解",
  "content": "# 生图提示词拆解\n\n正文……",
  "type": "document",
  "tags": ["提示词", "生图"]
}
```

`content` 是 `text` 的别名；只传其中一个。更新已知文章时调用
`PATCH /openapi/v1/knowledge-bases/{base_id}/articles/{article_id}`，只传要修改的字段。修改正文会清除
旧向量，随后必须重新发布。

更新接口中的 `text`、`content` 或 `markdown` 是完整正文替换，不是追加片段。先读取现有正文，把新块
合并到正确位置，再发送整篇内容；除非目标文章本来就只需要一个引用块，否则绝不能只提交引用标签。

只有 source 时，分页调用 `GET /openapi/v1/knowledge-bases/{base_id}/articles?page=1&page_size=500`，
在本地精确匹配 `item.source`；匹配数不是 1 时停止。再 GET 文章详情，保存 `parent_id`、`type`、
正文和 `updated_time`。提交更新前重新 GET；`updated_time` 或正文已变化时重新预览，避免覆盖并发修改。

需要预览或重复执行时，优先调用 `POST /openapi/v1/knowledge-bases/sync/markdown`。第一次发送
`dry_run=true`，检查 `data.rendered_markdown`、`unresolved_images` 和目标文章；确认后以同一请求改成
`dry_run=false`：

```json
{
  "knowledge_base_id": 123,
  "markdown": "# 生图提示词拆解\n\n正文……",
  "title": "生图提示词拆解",
  "source": "agent:prompt-course/chapter-01",
  "tags": ["提示词", "生图"],
  "upsert_by_source": true,
  "publish": false,
  "dry_run": true
}
```

- 为每篇由 Agent 维护的笔记设置稳定且唯一的 `source`。`upsert_by_source=true` 会在同一知识库中
  查找相同 `source` 并更新；没有 `source` 时重复请求会持续新建。数据库没有 source 唯一约束，
  不要并发同步同一个 source。
- 只为 Agent 新建并持续维护的笔记生成 source，使用 `agent:<稳定任务或内容域>/<稳定短名>`。不要仅凭
  用户文章标题为已有笔记补造 source；已有笔记优先使用已确认的 `article_id` 或原有 source。
- 已知文章 ID 时传 `article_id`，它优先于 source 匹配。
- 标题按 `title`、Markdown 第一个 H1、`filename` 文件名、`Untitled document` 的顺序推导。
- `dry_run` 只渲染图片、检查归属并预判创建或更新，不写入，也不校验父子层级。预览成功不代表
  `parent_id` 一定合法。
- dry-run 的 `data.article` 非空表示 `article_id` 或 source 已命中旧文章。用户要求严格新建时停止并
  确认是否允许更新，不要把后续 `updated` 静默当成创建成功。
- 同步更新时，不传 `parent_id` 会把文章移到根节点；需要保留层级时，先读取文章并原样带回
  `parent_id`。`tags`、`chapter_level`、`sort` 和 `metadata_data` 在省略时保留原值。
- 同步接口会把创建或更新的文章类型设为 `document`。原文章不是 `document` 时，只用 dry-run 取得
  `rendered_markdown`，再通过 PATCH 更新 `text` 并保留原类型和父节点。
- `data.action` 为 `preview`、`created` 或 `updated`；`data.article.id` 是后续读取和发布使用的 ID。
- `markdown`/`content` 最长 2,000,000 个字符。

用户已经明确要求创建或更新时，dry-run 校验通过且目标无歧义后可继续 `dry_run=false`，无需重复索要
同一授权。用户只要求预览时必须停止在 dry-run；若预览意外命中旧文章、目标或字段仍有歧义，则先让
用户确认，不能真实写入。

确认正文后调用
`POST /openapi/v1/knowledge-bases/{base_id}/articles/{article_id}/publish` 建立搜索向量，或在最终同步请求
中传 `publish=true`。同步的文章写入先提交，向量化后执行；若发布返回 500，先读取原文章，再重试
发布，不要重新创建文章。空正文不能通过独立发布接口发布。

## 引用生图历史

先查询当前 API Key 用户的生成历史：

```http
GET /openapi/v1/image/history?generation_status=completed&page=1&size=100
```

可用 `model_name`、`vendor_name`、`request_type`、`start_date` 和 `end_date` 继续筛选。根据响应的
`total_pages` 翻页，选中用户指定的记录，不要默认取第一条。该接口不支持 `task_id` 查询参数；
已知 task ID 时也要分页并在本地精确匹配 `item.task_id`。

`/image/history` 返回的是 OpenAPI 图像日志，不是快捷创作项目的 asset 契约；当前 OpenAPI 不能按
快捷创作 asset ID 解析记录。引用块保存完整生成快照，`asset-id` 只是来源标识，不代表服务端已经
建立可追踪的外键关联。

| 引用属性 | 历史字段 |
|---|---|
| `asset-id` | `id`；按不透明字符串处理 |
| `prompt` | `prompt` |
| `model-name` | `model_name` |
| `thumbnail`、`file-url` | 用户选中的 `result_images` 结果 URL |
| `created-at` | `created_time` |
| `project-id` | 仅在历史参数中确实存在项目 ID 时填写 |

在 Storage Markdown 中插入小写、单行、自闭合的 `<creation-reference />`。所有属性使用双引号；
不要把 `creation_reference` 当成独立顶层 JSON 字段。把整段 Markdown 作为 `sync/markdown` 的
`markdown` 字段发送：

```html
<creation-reference asset-id="987" project-id="45" prompt="现代产品海报，主体清晰，留出标题区域" model-name="gpt-image-2" thumbnail="https://cdn.example.com/preview.png" file-url="https://cdn.example.com/output.png" name="产品海报方案" created-at="2026-08-05T12:00:00+08:00" params="{&quot;version&quot;:1,&quot;prompt&quot;:&quot;现代产品海报，主体清晰，留出标题区域&quot;,&quot;model_name&quot;:&quot;gpt-image-2&quot;,&quot;negative_prompt&quot;:&quot;模糊，文字乱码&quot;,&quot;config&quot;:{&quot;aspect_ratio&quot;:&quot;1:1&quot;,&quot;num_images&quot;:1},&quot;mode&quot;:&quot;image&quot;,&quot;project_id&quot;:45}" />
```

`params` 是“试运行”的回填数据，只放以下字段：

- `version: 1`
- `prompt`
- `model_name`
- `negative_prompt`
- `config`：从 `request_params` 复制仍适用于再次生成的模型参数
- `mode`：`image`、`video` 或 `music`
- `project_id`：可选

从 `request_params` 复制配置时移除 `prompt`、`model`、`model_name`、`task_id`、`user_id`、
`business_module`、`session_id`、`business_order_id`、`_response_policy` 和 `_settlement`。不要把 API Key、
计费数据或内部任务信息写进引用块。

对每个属性做 HTML 属性转义，再用 JSON 序列化整个 OpenAPI 请求；至少转义 `&`、双引号、`<` 和
`>`，`params` 内的 JSON 双引号因此表现为 `&quot;`。不要用未转义的字符串拼接请求。

引用块是知识库编辑器支持的 Storage Markdown 扩展。`sync/markdown` 会原样保存它，但服务端不会
验证 `asset-id`、不会查询历史补齐字段，也不会验证 `params`。先确认 dry-run 的
`data.rendered_markdown` 仍完整包含该标签；写入后再调用
`GET /openapi/v1/knowledge-bases/{base_id}/articles/{article_id}`，确认 `text` 中的标签完整回传。
`GET /openapi/v1/knowledge-bases/schema` 当前也不会列出此扩展，其他 Markdown 客户端可能不渲染它。

若历史项返回 `prompt_hidden=true` 或没有 `prompt`，不要猜测或还原提示词。可以只创建不可试运行的
展示引用，或先向用户取得可公开提示词。展示引用省略 `prompt` 和 `params`，只放真实存在的记录 ID、
模型、结果 URL 和时间；不要发明 `prompt-hidden` 属性。可试运行引用必须同时在 `prompt` 属性和
`params.prompt` 中保留非空提示词。用户未指定历史记录或多图中的具体结果时，不要默认取第一条。

## 引用轻应用为工作台应用块

当前 OpenAPI 只公开轻应用目录，不是完整的工作台应用市场契约：

```http
GET /openapi/v1/light-app/
GET /openapi/v1/light-app/{code}
```

列表无分页或筛选参数，不要传 `page`、`page_size`、`name` 或 `tags`。它返回 `id`、`code`、`title`、
`description`、`access_url`、`status` 和 `created_at`；
详情额外返回 `entry_file`、`source_path` 和 `updated_at`。列表查询所有 `source_type=light_app` 的记录，
当前不按 API Key 用户、工作台可见范围或状态过滤；详情也只按 `code` 查找。因此：

- 不要把该接口描述为“当前用户可见的全部工作台应用”。它不包含完整工作台中的工作流、图像、视频等
  其他应用契约，也不返回封面、分类、标签、上传者、官方标记或版本。
- 目录只用于发现候选，不能据此自动写入。只有用户明确提供或确认具体 `code` 后才允许创建引用。
- 候选只保留 `status=1`。跳过 `status=0`；`status=2` 的站点可见性无法从 API Key 上下文判断，
  除非用户明确指定且已另行确认访问权限，否则不要引用。`status=1` 仍不保证用户在工作台可访问。
- 用户按名称选择时在本地精确匹配；即使唯一命中，也要展示名称和 `code` 让用户确认。已知 `code` 时
  调用详情核对，但详情成功不等于用户在工作台有权打开该应用。
- 需要完整工作台市场字段或可见性校验时，明确说明当前 OpenAPI 不足并停止补造数据。不要拿 API Key
  调用用户端 JWT 接口，也不要抓取网页来伪装成 OpenAPI 查询。

将选中的真实字段写成小写、单行、自闭合的 `<application-reference />`。`code` 是打开应用所需的
稳定标识，也是唯一必填的引用属性；其他属性不存在或为空时直接省略。OpenAPI 字段按下表映射：

| 引用属性 | 轻应用字段 |
|---|---|
| `app-id` | `id`；按不透明字符串处理 |
| `code` | `code`；必填 |
| `name` | `title` |
| `description` | `description` |

```html
<application-reference app-id="123" code="video-redraw" name="视频转绘工作流" description="上传视频抽取首尾帧，转绘后生成视频" />
```

编辑器还支持 `cover-image`、`category-code`、`category-name`、`source-type`、`tags`、`uploader-name`、
`official="true"` 和 `version`，但只能在授权接口或用户提供的可信快照确实包含这些字段时写入。当前
`/openapi/v1/light-app/` 没有这些字段，必须省略。`tags` 存储为 JSON 数组字符串，并对其中双引号做
HTML 属性转义，例如 `tags="[&quot;AI视频&quot;,&quot;图生视频&quot;]"`。

对所有属性转义 `&`、双引号、`<` 和 `>`，再用 JSON 序列化整个同步请求。不要持久化 `access_url`、
`entry_file`、`source_path`、API Key、完整启动 URL 或 `workspace_id`。编辑器根据 `code` 生成
`/workbench/use/{code}`，团队空间参数在打开时运行时追加。

把引用块放入要同步的 Markdown，按“创建或更新笔记”流程先 `dry_run=true`。确认
`data.rendered_markdown` 完整保留标签后再写入；写入后 GET 文章详情并确认 `text` 中的标签完整回传。
服务端不会验证 `app-id` 或 `code`、不会补齐应用字段，`knowledge-bases/schema` 也不会列出这个扩展。
dry-run 成功只证明标签能按 Storage Markdown 保存，不能证明应用存在、字段真实或当前用户可以打开。

“可信快照”只指用户在当前请求中明确提供的字段，或授权 OpenAPI 的真实响应字段；它只确认要保存的
快照内容，不代表工作台访问权限。用户已提供可信的 `code`、名称和描述时，可以不依赖目录接口直接
创建引用，但不能凭空添加其他属性，并应说明访问性未被 OpenAPI 验证。若用户只说“引用这个应用”但
没有 `code`，先查询有限的轻应用目录，展示候选的名称与 `code`，等待用户确认后再写入；不能唯一确定
时停止写入并请求选择。

## 本地图片与 CLI 入口

直接调用 OpenAPI 时，先把本地图片上传到 `POST /openapi/v1/resources/upload`，multipart 字段使用
`resource_category=protected`、`business_type=knowledge_media`、`business_id=<base_id>`，再把返回 URL
放入 `image_map`。远程 `http`/`https` 图片可直接使用。未映射的本地图片默认返回 400；不要为了
绕过上传而随意设置 `allow_unresolved_images=true`。

本地 Markdown 文件也可用 CLI 包装同一个同步接口：

```bash
node bin/okflow.mjs knowledge sync 123 ./article.md --dry-run --source "prompt-course/chapter-01"
node bin/okflow.mjs knowledge sync 123 ./article.md --source "prompt-course/chapter-01" --publish
```

CLI 会先上传相对路径图片，并固定发送 `upsert_by_source=true`。即使是 `--dry-run`，图片也会先上传。
移动文件会改变默认 source；需要稳定更新时始终显式传 `--source`。

## 错误处理

- 401：API Key 缺失、无效、禁用或过期；停止写入并修复凭证。
- 403：API Key 关联用户不可用。
- 404：知识库或文章不存在，或不属于当前 API Key 用户；不要据此探测其他用户资源。
- 409：本人已有同名知识库；重新列出并选择现有知识库。
- 422：字段类型、范围或 `text`/`content` 冲突；重新读取 `/schema` 后修正请求。
- 400：父子层级、空正文发布或本地图片引用不合法；按 `msg` 修正。
- 500：尤其注意向量化失败时文章可能已经写入；先 GET 校验，再仅重试发布。
