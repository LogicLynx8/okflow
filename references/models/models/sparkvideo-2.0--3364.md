# Seedance2.0（官方直连快速版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `sparkvideo-2.0`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `request_type` | `radio_group` | no | `"text2video"` | `{"options":[{"label":"文生视频","value":"text2video"},{"label":"图生视频","value":"img2video"},{"label":"多模态","value":"multimodal"}]}` |
| `resolution` | `select` | no | `"720p"` | `{"options":[{"label":"480p","value":"480p"},{"label":"720p","value":"720p"},{"label":"1080p","value":"1080p"}]}` |
| `duration` | `select` | no | `"4"` | `{"options":[{"label":"4 秒","value":"4"},{"label":"5 秒","value":"5"},{"label":"8 秒","value":"8"},{"label":"10 秒","value":"10"},{"label":"15 秒","value":"15"}]}` |
| `ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"21:9","value":"21:9"}]}` |
| `generateAudio` | `switch` | no | `true` |  |
| `realPersonMode` | `switch` | no | `true` |  |
| `images` | `image` | no |  | `{"max_count":1}` |
| `imageUrls` | `image` | no |  | `{"max_count":9}` |
| `videoUrls` | `video` | no |  | `{"max_count":3}` |
| `audioUrls` | `music` | no |  | `{"max_count":3}` |

## Exact capabilities.params

```json
[
  {
    "default": "text2video",
    "key": "request_type",
    "label": "生成模式",
    "options": [
      {
        "label": "文生视频",
        "value": "text2video"
      },
      {
        "label": "图生视频",
        "value": "img2video"
      },
      {
        "label": "多模态",
        "value": "multimodal"
      }
    ],
    "type": "radio_group"
  },
  {
    "default": "720p",
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
      },
      {
        "label": "1080p",
        "value": "1080p"
      }
    ],
    "type": "select"
  },
  {
    "default": "4",
    "key": "duration",
    "label": "时长（秒）",
    "options": [
      {
        "label": "4 秒",
        "value": "4"
      },
      {
        "label": "5 秒",
        "value": "5"
      },
      {
        "label": "8 秒",
        "value": "8"
      },
      {
        "label": "10 秒",
        "value": "10"
      },
      {
        "label": "15 秒",
        "value": "15"
      }
    ],
    "type": "select"
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
        "label": "21:9",
        "value": "21:9"
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "default": true,
    "key": "generateAudio",
    "label": "生成音频",
    "type": "switch"
  },
  {
    "default": true,
    "key": "realPersonMode",
    "label": "真人模式",
    "type": "switch"
  },
  {
    "description": "request_type=img2video 时使用",
    "key": "images",
    "label": "首帧图（img2video）",
    "max_count": 1,
    "type": "image"
  },
  {
    "description": "request_type=multimodal 时使用",
    "key": "imageUrls",
    "label": "参考图（multimodal）",
    "max_count": 9,
    "type": "image"
  },
  {
    "description": "request_type=multimodal 时使用",
    "key": "videoUrls",
    "label": "参考视频（multimodal）",
    "max_count": 3,
    "type": "video"
  },
  {
    "description": "request_type=multimodal 时使用",
    "key": "audioUrls",
    "label": "参考音频（multimodal）",
    "max_count": 3,
    "type": "music"
  }
]
```
