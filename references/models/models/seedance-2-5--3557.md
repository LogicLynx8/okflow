# Sd 2.5 （官方8折真人按秒）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `seedance-2-5`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `select` | no | `"4"` | `{"options":[{"label":"4秒","value":"4"},{"label":"5秒","value":"5"},{"label":"6秒","value":"6"},{"label":"8秒","value":"8"},{"label":"10秒","value":"10"},{"label":"12秒","value":"12"},{"label":"15秒","value":"15"},{"label":"20秒","value":"20"},{"label":"25秒","value":"25"},{"label":"30秒","value":"30"},{"label":"29秒","value":"29"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"横屏 16:9","value":"16:9"},{"label":"竖屏 9:16","value":"9:16"}]}` |
| `resolution` | `select` | no | `"480p"` | `{"options":[{"label":"480P 经济（半价）","value":"480p"},{"label":"720P 高清","value":"720p"}]}` |
| `mode` | `radio_group` | no | `"text-to-video"` | `{"options":[{"label":"文生视频","value":"text-to-video"},{"label":"首帧生视频","value":"first-frame"},{"label":"参考生（多模态）","value":"reference"}]}` |
| `images` | `image` | no |  | `{"max_count":30}` |
| `audios` | `music` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
  {
    "default": "4",
    "key": "duration",
    "label": "视频时长",
    "options": [
      {
        "label": "4秒",
        "value": "4"
      },
      {
        "label": "5秒",
        "value": "5"
      },
      {
        "label": "6秒",
        "value": "6"
      },
      {
        "label": "8秒",
        "value": "8"
      },
      {
        "label": "10秒",
        "value": "10"
      },
      {
        "label": "12秒",
        "value": "12"
      },
      {
        "label": "15秒",
        "value": "15"
      },
      {
        "label": "20秒",
        "value": "20"
      },
      {
        "label": "25秒",
        "value": "25"
      },
      {
        "label": "30秒",
        "value": "30"
      },
      {
        "label": "29秒",
        "value": "29"
      }
    ],
    "required": false,
    "type": "select"
  },
  {
    "default": "16:9",
    "key": "aspect_ratio",
    "label": "视频比例",
    "options": [
      {
        "label": "横屏 16:9",
        "value": "16:9"
      },
      {
        "label": "竖屏 9:16",
        "value": "9:16"
      }
    ],
    "required": false,
    "type": "aspect_ratio"
  },
  {
    "default": "480p",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "480P 经济（半价）",
        "value": "480p"
      },
      {
        "label": "720P 高清",
        "value": "720p"
      }
    ],
    "required": false,
    "type": "select"
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
    "max_count": 30,
    "required": false,
    "type": "image"
  },
  {
    "description": "最多10段，单段2~30秒",
    "key": "audios",
    "label": "参考音频",
    "max_count": 10,
    "required": false,
    "type": "music"
  }
]
```
