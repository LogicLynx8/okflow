# Seedance2（轻量版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `sparkvideo-2.0-mini`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `request_type` | `radio_group` | no | `"text2video"` | `{"options":[{"label":"文生视频","value":"text2video"},{"label":"多模态参考 / 视频编辑","value":"multimodal"}]}` |
| `resolution` | `select` | yes | `"720p"` | `{"options":[{"label":"480p","value":"480p"},{"label":"720p","value":"720p"},{"label":"1080p（超分）","value":"1080p"},{"label":"2K（超分）","value":"2k"},{"label":"4K（超分）","value":"4k"}]}` |
| `duration` | `select` | yes | `"5"` | `{"options":[{"label":"自动","value":"-1"},{"label":"4 秒","value":"4"},{"label":"5 秒","value":"5"},{"label":"6 秒","value":"6"},{"label":"7 秒","value":"7"},{"label":"8 秒","value":"8"},{"label":"9 秒","value":"9"},{"label":"10 秒","value":"10"},{"label":"11 秒","value":"11"},{"label":"12 秒","value":"12"},{"label":"13 秒","value":"13"},{"label":"14 秒","value":"14"},{"label":"15 秒","value":"15"}]}` |
| `ratio` | `aspect_ratio` | no | `"adaptive"` | `{"options":[{"label":"自适应","value":"adaptive"},{"label":"21:9","value":"21:9"},{"label":"16:9","value":"16:9"},{"label":"4:3","value":"4:3"},{"label":"1:1","value":"1:1"},{"label":"3:4","value":"3:4"},{"label":"9:16","value":"9:16"}]}` |
| `generateAudio` | `switch` | no | `true` |  |
| `realPersonMode` | `switch` | no | `true` |  |
| `conversionSlots` | `hidden` | no | `["all"]` |  |
| `returnLastFrame` | `switch` | no | `false` |  |
| `seed` | `number` | no | `-1` | `{"min":-1,"max":2147483647,"step":1}` |
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
        "label": "多模态参考 / 视频编辑",
        "value": "multimodal"
      }
    ],
    "type": "radio_group"
  },
  {
    "default": "720p",
    "description": "480p/720p 为原生输出；1080p/2k/4k 会先生成 720p，再进行超分补帧。",
    "key": "resolution",
    "label": "输出分辨率",
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
        "label": "1080p（超分）",
        "value": "1080p"
      },
      {
        "label": "2K（超分）",
        "value": "2k"
      },
      {
        "label": "4K（超分）",
        "value": "4k"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "default": "5",
    "key": "duration",
    "label": "输出时长",
    "options": [
      {
        "label": "自动",
        "value": "-1"
      },
      {
        "label": "4 秒",
        "value": "4"
      },
      {
        "label": "5 秒",
        "value": "5"
      },
      {
        "label": "6 秒",
        "value": "6"
      },
      {
        "label": "7 秒",
        "value": "7"
      },
      {
        "label": "8 秒",
        "value": "8"
      },
      {
        "label": "9 秒",
        "value": "9"
      },
      {
        "label": "10 秒",
        "value": "10"
      },
      {
        "label": "11 秒",
        "value": "11"
      },
      {
        "label": "12 秒",
        "value": "12"
      },
      {
        "label": "13 秒",
        "value": "13"
      },
      {
        "label": "14 秒",
        "value": "14"
      },
      {
        "label": "15 秒",
        "value": "15"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "default": "adaptive",
    "key": "ratio",
    "label": "输出比例",
    "options": [
      {
        "label": "自适应",
        "value": "adaptive"
      },
      {
        "label": "21:9",
        "value": "21:9"
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
        "label": "1:1",
        "value": "1:1"
      },
      {
        "label": "3:4",
        "value": "3:4"
      },
      {
        "label": "9:16",
        "value": "9:16"
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
    "description": "开启后会将选中的图片/视频素材转换为真人资产。",
    "key": "realPersonMode",
    "label": "真人模式",
    "type": "switch"
  },
  {
    "default": [
      "all"
    ],
    "description": "light_app /seedancefast 使用专属多选组件提交；动态表单默认资产化全部图片和视频槽位。",
    "key": "conversionSlots",
    "label": "真人素材资产化槽位",
    "type": "hidden"
  },
  {
    "default": false,
    "key": "returnLastFrame",
    "label": "返回视频尾帧",
    "type": "switch"
  },
  {
    "default": -1,
    "description": "-1 表示随机种子。",
    "key": "seed",
    "label": "随机种子",
    "max": 2147483647,
    "min": -1,
    "step": 1,
    "type": "number"
  },
  {
    "description": "最多 9 张，每张不超过 30 MB。",
    "key": "imageUrls",
    "label": "参考图片",
    "max_count": 9,
    "type": "image"
  },
  {
    "description": "最多 3 个，每个 2-15 秒、50 MB，所有视频总时长不超过 15 秒。",
    "key": "videoUrls",
    "label": "参考视频 / 编辑素材",
    "max_count": 3,
    "type": "video"
  },
  {
    "description": "最多 3 段，每段 2-15 秒、50 MB，所有音频总时长不超过 15 秒；使用音频时至少还需一张图片或一个视频。",
    "key": "audioUrls",
    "label": "参考音频",
    "max_count": 3,
    "type": "music"
  }
]
```
