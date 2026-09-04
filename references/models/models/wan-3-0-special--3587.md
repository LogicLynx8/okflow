# Wan 3.0 · 特价按次

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `wan-3-0-special`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `number` | no | `30` | `{"min":5,"max":30,"step":1}` |
| `aspect_ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"}]}` |
| `resolution` | `select` | no | `"720p"` | `{"options":[{"label":"720p","value":"720p"}]}` |
| `images` | `image` | no |  | `{"max_count":10}` |
| `videos` | `video` | no |  | `{"max_count":5}` |
| `audios` | `music` | no |  | `{"max_count":5}` |

## Exact capabilities.params

```json
[
  {
    "default": 30,
    "key": "duration",
    "label": "视频时长",
    "max": 30,
    "min": 5,
    "step": 1,
    "type": "number"
  },
  {
    "default": "16:9",
    "key": "aspect_ratio",
    "label": "视频比例",
    "options": [
      {
        "label": "16:9",
        "value": "16:9"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "default": "720p",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "720p",
        "value": "720p"
      }
    ],
    "type": "select"
  },
  {
    "key": "images",
    "label": "参考图片",
    "max_count": 10,
    "type": "image"
  },
  {
    "key": "videos",
    "label": "参考视频",
    "max_count": 5,
    "type": "video"
  },
  {
    "key": "audios",
    "label": "参考音频",
    "max_count": 5,
    "type": "music"
  }
]
```
