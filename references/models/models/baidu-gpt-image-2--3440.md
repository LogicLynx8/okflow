# Image-2（1k稳定版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `baidu-gpt-image-2`
- Type: `both`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `resolution` | `select` | no | `"2k"` | `{"options":[{"label":"1K","value":"1k"},{"label":"2K","value":"2k"},{"label":"4K","value":"4k"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"9:16"` | `{"options":[{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"},{"label":"2:3","value":"2:3"},{"label":"3:2","value":"3:2"},{"label":"4:5","value":"4:5"},{"label":"5:4","value":"5:4"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"16:9","value":"16:9"},{"label":"21:9","value":"21:9"},{"label":"9:21","value":"9:21"}]}` |
| `quality` | `select` | no | `"medium"` | `{"options":[{"label":"中等","value":"medium"},{"label":"高级","value":"high"}]}` |
| `images` | `image` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
  {
    "default": "2k",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "1K",
        "value": "1k"
      },
      {
        "label": "2K",
        "value": "2k"
      },
      {
        "label": "4K",
        "value": "4k"
      }
    ],
    "type": "select"
  },
  {
    "default": "9:16",
    "key": "aspect_ratio",
    "label": "画面比例",
    "options": [
      {
        "label": "9:16",
        "value": "9:16"
      },
      {
        "label": "1:1",
        "value": "1:1"
      },
      {
        "label": "2:3",
        "value": "2:3"
      },
      {
        "label": "3:2",
        "value": "3:2"
      },
      {
        "label": "4:5",
        "value": "4:5"
      },
      {
        "label": "5:4",
        "value": "5:4"
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
        "label": "16:9",
        "value": "16:9"
      },
      {
        "label": "21:9",
        "value": "21:9"
      },
      {
        "label": "9:21",
        "value": "9:21"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "default": "medium",
    "key": "quality",
    "label": "质量",
    "options": [
      {
        "label": "中等",
        "value": "medium"
      },
      {
        "label": "高级",
        "value": "high"
      }
    ],
    "type": "select"
  },
  {
    "description": "可选，最多 10 张",
    "key": "images",
    "label": "参考图（图生图）",
    "max_count": 10,
    "type": "image"
  }
]
```
