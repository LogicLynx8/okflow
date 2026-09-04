# Sd 2.0（促销版支持真人按条）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `seedance-2.0-mini`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `number` | no | `5` | `{"min":5,"max":15,"step":1}` |
| `ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"}]}` |
| `resolution` | `select` | no | `"720p"` | `{"options":[{"label":"720p","value":"720p"}]}` |
| `reference_images` | `image` | no |  | `{"max_count":9}` |
| `reference_videos` | `video` | no |  | `{"max_count":3}` |
| `reference_audios` | `music` | no |  | `{"max_count":3}` |

## Exact capabilities.params

```json
[
  {
    "default": 5,
    "description": "上游 seconds 参数，支持 5-15 秒。",
    "key": "duration",
    "label": "时长（秒）",
    "max": 15,
    "min": 5,
    "step": 1,
    "type": "number"
  },
  {
    "default": "16:9",
    "key": "ratio",
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
    "description": "公网可访问图片。",
    "key": "reference_images",
    "label": "参考图",
    "max_count": 9,
    "type": "image"
  },
  {
    "description": "公网可访问视频。",
    "key": "reference_videos",
    "label": "参考视频",
    "max_count": 3,
    "type": "video"
  },
  {
    "description": "公网可访问音频。",
    "key": "reference_audios",
    "label": "参考音频",
    "max_count": 3,
    "type": "music"
  }
]
```
