# 微信公众号 MCP 工具

- 来源平台：`微信公众号`
- 能力分段：`wechat_mp`
- Reference version: `sha256:b393f547c384fca750d10753974c32b9972edce5b8eaf37db23343442f1014b8`
- Tool count: 9

## `mcp_175c40bbaa346d5756a36515`

获取公众号文章互动数据/Get WeChat MP Article Stats

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_1f837d7b1a75329d574a407a`

获取公众号文章广告/Get WeChat MP Article Ads

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_4e62dd5538b836d94464e202`

获取公众号文章评论/Get WeChat MP Article Comments

- Risk: `write`
- Parameters: `[{"name":"buffer","type":"any","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_641ea51fc7758c6adc068e14`

获取公众号关联文章/Get WeChat MP Related Articles

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_8214299d331db4f1d861d8c6`

获取公众号文章详情/Get WeChat MP Article Detail

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_86366169f443c72b6baf829e`

获取公众号资料页/Get WeChat MP Account Profile

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_b7e9a280f8e81277e731b1ed`

获取公众号评论的二级回复/Get WeChat MP Comment Replies

- Risk: `write`
- Parameters: `[{"name":"all_pages","type":"boolean","required":false},{"name":"content_id","type":"any","required":false},{"name":"offset","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"url","type":"string","required":true}]`

## `mcp_c5767d9ec81107192702bdca`

获取公众号文章列表/Get WeChat MP Account Articles

- Risk: `write`
- Parameters: `[{"name":"item_show_type","type":"any","required":false},{"name":"offset","type":"any","required":false},{"name":"page_size","type":"integer","required":false},{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`

## `mcp_dce4db1a129b8d2c1cf19ce8`

获取公众号服务/自定义菜单/Get WeChat MP Account Services & Custom Menu

- Risk: `write`
- Parameters: `[{"name":"raw","type":"boolean","required":false},{"name":"username","type":"string","required":true}]`
