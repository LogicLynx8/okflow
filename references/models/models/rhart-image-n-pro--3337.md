# 香蕉pro(稳定版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `rhart-image-n-pro`
- Type: `text2img`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `resolution` | `select` | no | `"2k"` | `{"options":[{"label":"1K","value":"1k"},{"label":"2K","value":"2k"},{"label":"4K","value":"4k"}]}` |
| `aspectRatio` | `aspect_ratio` | no | `"1:1"` | `{"options":[{"label":"1:1","value":"1:1"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"21:9","value":"21:9"},{"label":"3:2","value":"3:2"},{"label":"2:3","value":"2:3"}]}` |
| `ratio` | `hidden` | no |  |  |
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
    "default": "1:1",
    "key": "aspectRatio",
    "label": "画面比例",
    "options": [
      {
        "label": "1:1",
        "value": "1:1"
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
        "label": "9:16",
        "value": "9:16"
      },
      {
        "label": "21:9",
        "value": "21:9"
      },
      {
        "label": "3:2",
        "value": "3:2"
      },
      {
        "label": "2:3",
        "value": "2:3"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "description": "前端会同步赋值 aspectRatio/aspect_ratio/ratio 三个字段",
    "key": "ratio",
    "label": "比例（同 aspectRatio）",
    "type": "hidden",
    "value": "1:1"
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
