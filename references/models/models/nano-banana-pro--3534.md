# 香蕉Pro（经济版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `nano-banana-pro`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `imageSize` | `select` | yes | `"1K"` | `{"options":[{"label":"1K","value":"1K"},{"label":"2K","value":"2K"},{"label":"4K","value":"4K"}]}` |
| `aspectRatio` | `aspect_ratio` | no | `"auto"` | `{"options":[{"label":"自动","value":"auto"},{"label":"1:1","value":"1:1"},{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"3:2","value":"3:2"},{"label":"2:3","value":"2:3"},{"label":"5:4","value":"5:4"},{"label":"4:5","value":"4:5"},{"label":"21:9","value":"21:9"}]}` |
| `urls` | `image` | no |  |  |

## Exact capabilities.params

```json
[
  {
    "default": "1K",
    "key": "imageSize",
    "label": "输出分辨率",
    "options": [
      {
        "label": "1K",
        "value": "1K"
      },
      {
        "label": "2K",
        "value": "2K"
      },
      {
        "label": "4K",
        "value": "4K"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "default": "auto",
    "key": "aspectRatio",
    "label": "画面比例",
    "options": [
      {
        "label": "自动",
        "value": "auto"
      },
      {
        "label": "1:1",
        "value": "1:1"
      },
      {
        "label": "16:9",
        "value": "16:9"
      },
      {
        "label": "9:16",
        "value": "9:16"
      },
      {
        "label": "4:3",
        "value": "4:3"
      },
      {
        "label": "3:4",
        "value": "3:4"
      },
      {
        "label": "3:2",
        "value": "3:2"
      },
      {
        "label": "2:3",
        "value": "2:3"
      },
      {
        "label": "5:4",
        "value": "5:4"
      },
      {
        "label": "4:5",
        "value": "4:5"
      },
      {
        "label": "21:9",
        "value": "21:9"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "description": "可选，支持图片 URL 或 Base64；数量以上游账户限制为准",
    "key": "urls",
    "label": "参考图",
    "type": "image"
  }
]
```
