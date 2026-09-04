# Image-2（2-4k稳定版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `gpt-image-2-vip`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `resolution` | `select` | yes | `"2k"` | `{"options":[{"label":"2K","value":"2k"},{"label":"4K","value":"4k"}]}` |
| `aspectRatio` | `aspect_ratio` | yes | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"3:2","value":"3:2"},{"label":"2:3","value":"2:3"},{"label":"4:5","value":"4:5"},{"label":"5:4","value":"5:4"},{"label":"21:9","value":"21:9"},{"label":"9:21","value":"9:21"}]}` |
| `quality` | `hidden` | no |  |  |
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
        "label": "2K",
        "value": "2k"
      },
      {
        "label": "4K",
        "value": "4k"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "default": "16:9",
    "key": "aspectRatio",
    "label": "画面比例",
    "options": [
      {
        "label": "16:9",
        "value": "16:9"
      },
      {
        "label": "9:16",
        "value": "9:16"
      },
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
        "label": "3:2",
        "value": "3:2"
      },
      {
        "label": "2:3",
        "value": "2:3"
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
        "label": "21:9",
        "value": "21:9"
      },
      {
        "label": "9:21",
        "value": "9:21"
      }
    ],
    "required": true,
    "type": "aspect_ratio"
  },
  {
    "key": "quality",
    "label": "质量",
    "locked_value": "high",
    "type": "hidden"
  },
  {
    "description": "可选，最多 10 张；上传后自动切换为图生图",
    "key": "images",
    "label": "参考图（图生图）",
    "max_count": 10,
    "type": "image"
  }
]
```
