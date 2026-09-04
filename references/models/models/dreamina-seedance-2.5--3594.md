# Dreamina Seedance 2.5

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `dreamina-seedance-2.5`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `number` | no | `5` | `{"min":5,"max":30,"step":1}` |
| `ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"1:1","value":"1:1"}]}` |
| `resolution` | `select` | no | `"480p"` | `{"options":[{"label":"480p","value":"480p"},{"label":"720p","value":"720p"}]}` |
| `reference_images` | `image` | no |  | `{"max_count":20}` |
| `reference_videos` | `video` | no |  | `{"max_count":10}` |
| `reference_audios` | `music` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
  {
    "default": 5,
    "description": "支持 5-30 秒。",
    "key": "duration",
    "label": "视频时长",
    "max": 30,
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
    "default": "480p",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "480p",
        "value": "480p"
      },
      {
        "label": "720p",
        "value": "720p"
      }
    ],
    "type": "select"
  },
  {
    "description": "上游最多支持 30 张；当前管理端单控件最多选择 20 张。",
    "key": "reference_images",
    "label": "参考图片",
    "max_count": 20,
    "type": "image"
  },
  {
    "description": "最多支持 10 段参考视频。",
    "key": "reference_videos",
    "label": "参考视频",
    "max_count": 10,
    "type": "video"
  },
  {
    "description": "最多支持 10 段参考音频。",
    "key": "reference_audios",
    "label": "参考音频",
    "max_count": 10,
    "type": "music"
  }
]
```
