# Sd  2.0 特价（支持真人按条）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `seedance-2-0-special`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `select` | no | `"15"` | `{"options":[{"label":"15秒（特价一口价）","value":"15"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"9:16"` | `{"options":[{"label":"竖屏 9:16","value":"9:16"},{"label":"横屏 16:9","value":"16:9"},{"label":"宽幅 21:9","value":"21:9"},{"label":"方形 1:1","value":"1:1"},{"label":"横屏 4:3","value":"4:3"},{"label":"竖屏 3:4","value":"3:4"}]}` |
| `resolution` | `select` | no | `"720p"` | `{"options":[{"label":"720P 高清","value":"720p"},{"label":"480P 省费","value":"480p"},{"label":"1080P 超清（需选官方满血档）","value":"1080p"},{"label":"4K 极清（需选官方满血档）","value":"4k"}]}` |
| `quality` | `radio_group` | no | `"标准"` | `{"options":[{"label":"Mini（性价比最高）","value":"标准"},{"label":"Fast（出片更快）","value":"快速"},{"label":"官方满血（真人短剧首选）","value":"高清"}]}` |
| `mode` | `radio_group` | no | `"text-to-video"` | `{"options":[{"label":"文生视频","value":"text-to-video"},{"label":"首帧生视频","value":"first-frame"},{"label":"首尾帧","value":"first-last"},{"label":"参考生（多模态）","value":"reference"}]}` |
| `images` | `image` | no |  | `{"max_count":9}` |
| `videos` | `video` | no |  | `{"max_count":3}` |
| `audios` | `music` | no |  | `{"max_count":3}` |

## Exact capabilities.params

```json
[
  {
    "default": "15",
    "description": "固定15秒一口价",
    "key": "duration",
    "label": "视频时长",
    "options": [
      {
        "label": "15秒（特价一口价）",
        "value": "15"
      }
    ],
    "required": false,
    "type": "select"
  },
  {
    "default": "9:16",
    "key": "aspect_ratio",
    "label": "视频比例",
    "options": [
      {
        "label": "竖屏 9:16",
        "value": "9:16"
      },
      {
        "label": "横屏 16:9",
        "value": "16:9"
      },
      {
        "label": "宽幅 21:9",
        "value": "21:9"
      },
      {
        "label": "方形 1:1",
        "value": "1:1"
      },
      {
        "label": "横屏 4:3",
        "value": "4:3"
      },
      {
        "label": "竖屏 3:4",
        "value": "3:4"
      }
    ],
    "required": false,
    "type": "aspect_ratio"
  },
  {
    "default": "720p",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "720P 高清",
        "value": "720p"
      },
      {
        "label": "480P 省费",
        "value": "480p"
      },
      {
        "label": "1080P 超清（需选官方满血档）",
        "value": "1080p"
      },
      {
        "label": "4K 极清（需选官方满血档）",
        "value": "4k"
      }
    ],
    "required": false,
    "type": "select"
  },
  {
    "default": "标准",
    "description": "标准=Mini性价比最高，快速=Fast出片更快，高清=官方满血真人脸直接过",
    "key": "quality",
    "label": "版本档位",
    "options": [
      {
        "label": "Mini（性价比最高）",
        "value": "标准"
      },
      {
        "label": "Fast（出片更快）",
        "value": "快速"
      },
      {
        "label": "官方满血（真人短剧首选）",
        "value": "高清"
      }
    ],
    "required": false,
    "type": "radio_group"
  },
  {
    "default": "text-to-video",
    "key": "mode",
    "label": "生成模式",
    "options": [
      {
        "label": "文生视频",
        "value": "text-to-video"
      },
      {
        "label": "首帧生视频",
        "value": "first-frame"
      },
      {
        "label": "首尾帧",
        "value": "first-last"
      },
      {
        "label": "参考生（多模态）",
        "value": "reference"
      }
    ],
    "required": false,
    "type": "radio_group"
  },
  {
    "description": "最多9张，用于首帧/首尾帧/多模态参考",
    "key": "images",
    "label": "参考图片",
    "max_count": 9,
    "required": false,
    "type": "image"
  },
  {
    "description": "最多3段，用于动作复刻/运镜/节奏",
    "key": "videos",
    "label": "参考视频",
    "max_count": 3,
    "required": false,
    "type": "video"
  },
  {
    "description": "最多3段，用于BGM/节拍/配音",
    "key": "audios",
    "label": "参考音频",
    "max_count": 3,
    "required": false,
    "type": "music"
  }
]
```
