# MiniMax H3

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `Minimax-h3`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `number` | no | `4` | `{"min":4,"max":15,"step":1}` |
| `ratio` | `aspect_ratio` | no | `"9:16"` | `{"options":[{"label":"9:16","value":"9:16"},{"label":"16:9","value":"16:9"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"1:1","value":"1:1"}]}` |
| `resolution` | `select` | no | `"2K"` | `{"options":[{"label":"2K","value":"2K"},{"label":"720p","value":"720p"}]}` |
| `reference_images` | `image` | no |  | `{"max_count":9}` |
| `reference_audios` | `music` | no |  | `{"max_count":3}` |

## Exact capabilities.params

```json
[
  {
    "default": 4,
    "key": "duration",
    "label": "时长（秒）",
    "max": 15,
    "min": 4,
    "step": 1,
    "type": "number"
  },
  {
    "default": "9:16",
    "key": "ratio",
    "label": "画面比例",
    "options": [
      {
        "label": "9:16",
        "value": "9:16"
      },
      {
        "label": "16:9",
        "value": "16:9"
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
        "label": "1:1",
        "value": "1:1"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "default": "2K",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "2K",
        "value": "2K"
      },
      {
        "label": "720p",
        "value": "720p"
      }
    ],
    "type": "select"
  },
  {
    "key": "reference_images",
    "label": "参考图",
    "max_count": 9,
    "type": "image"
  },
  {
    "key": "reference_audios",
    "label": "参考音频",
    "max_count": 3,
    "type": "music"
  }
]
```
