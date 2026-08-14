# 微信公众号 MCP 工具

- 来源平台：`微信公众号`
- 能力分段：`wechat_mp`
- Reference version: `sha256:fe1f83703ef02c0593039d876a0cdd96dafe950617cfe0fdc58166b778405dac`
- Tool count: 9

## `mcp_251fee6da55c989d114f5761`

获取公众号文章详情/Get WeChat MP Article Detail

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_30ae195e3da84c11e20ff7aa`

获取公众号文章互动数据/Get WeChat MP Article Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_3598b7f5aee4e304b6444bed`

获取公众号文章列表/Get WeChat MP Account Articles

- Risk: `write`
- Parameters: `[{"name":"item_show_type","type":"any","required":false},{"name":"offset","type":"any","required":false},{"name":"page_size","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_77d981b0815d64bd1a9864f5`

获取公众号文章评论/Get WeChat MP Article Comments

- Risk: `write`
- Parameters: `[{"name":"buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_8591657f39ce93c31db55238`

获取公众号资料页/Get WeChat MP Account Profile

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_8db7c52394dbecff112137de`

获取公众号评论的二级回复/Get WeChat MP Comment Replies

- Risk: `write`
- Parameters: `[{"name":"all_pages","type":"boolean","required":false},{"name":"content_id","type":"any","required":false},{"name":"offset","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_9f7f07ca339e4f205b0f3113`

获取公众号关联文章/Get WeChat MP Related Articles

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_b6028462bd7080b072d15123`

获取公众号服务/自定义菜单/Get WeChat MP Account Services & Custom Menu

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_c5289a27526e4ec70eb98544`

获取公众号文章广告/Get WeChat MP Article Ads

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`
