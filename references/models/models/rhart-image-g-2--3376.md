# Image-2(稳定版)

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `rhart-image-g-2`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `aspectRatio` | `aspect_ratio` | yes | `"1:1"` | `{"options":[{"label":"1:1","value":"1:1"},{"label":"2:3","value":"2:3"},{"label":"3:2","value":"3:2"},{"label":"4:5","value":"4:5"},{"label":"5:4","value":"5:4"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"21:9","value":"21:9"},{"label":"9:21","value":"9:21"},{"label":"2:1","value":"2:1"},{"label":"1:2","value":"1:2"},{"label":"3:1","value":"3:1"},{"label":"1:3","value":"1:3"}]}` |
| `resolution` | `select` | no | `"1k"` | `{"options":[{"label":"1K","value":"1k"},{"label":"2K","value":"2k"},{"label":"4K","value":"4k"}]}` |
| `images` | `image` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
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
        "label": "9:16",
        "value": "9:16"
      },
      {
        "label": "21:9",
        "value": "21:9"
      },
      {
        "label": "9:21",
        "value": "9:21"
      },
      {
        "label": "2:1",
        "value": "2:1"
      },
      {
        "label": "1:2",
        "value": "1:2"
      },
      {
        "label": "3:1",
        "value": "3:1"
      },
      {
        "label": "1:3",
        "value": "1:3"
      }
    ],
    "required": true,
    "type": "aspect_ratio"
  },
  {
    "default": "1k",
    "description": "低价渠道多数情况下仍可能输出 1K",
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
    "description": "可选，最多 10 张，每张不超过 30 MB",
    "key": "images",
    "label": "参考图",
    "max_count": 10,
    "type": "image"
  }
]
```
