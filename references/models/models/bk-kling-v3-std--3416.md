# 可灵3.0-标准

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `bk-kling-v3-std`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `select` | no | `"3"` | `{"options":[{"label":"3 秒","value":"3"},{"label":"5 秒","value":"5"},{"label":"10 秒","value":"10"},{"label":"15 秒","value":"15"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"}]}` |
| `sound` | `radio_group` | no | `"on"` | `{"options":[{"label":"开","value":"on"},{"label":"关","value":"off"}]}` |
| `image` | `image` | no |  | `{"max_count":1}` |
| `image_tail` | `image` | no |  | `{"max_count":1}` |
| `multi_shot` | `switch` | no | `false` |  |
| `shot_type` | `select` | no | `"intelligence"` | `{"options":[{"label":"智能","value":"intelligence"},{"label":"自定义","value":"customize"}]}` |
| `multi_prompt` | `shot_list` | no |  |  |

## Exact capabilities.params

```json
[
  {
    "default": "3",
    "key": "duration",
    "label": "时长（秒）",
    "options": [
      {
        "label": "3 秒",
        "value": "3"
      },
      {
        "label": "5 秒",
        "value": "5"
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
    "key": "aspect_ratio",
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
    "default": "on",
    "key": "sound",
    "label": "声音",
    "options": [
      {
        "label": "开",
        "value": "on"
      },
      {
        "label": "关",
        "value": "off"
      }
    ],
    "type": "radio_group"
  },
  {
    "description": "V3 标准版/Pro 图生视频的首帧",
    "key": "image",
    "label": "首帧图（img2video）",
    "max_count": 1,
    "type": "image"
  },
  {
    "description": "首尾帧模式必填",
    "key": "image_tail",
    "label": "尾帧图（start_end2video）",
    "max_count": 1,
    "type": "image"
  },
  {
    "default": false,
    "description": "启用后需配合 shot_type + multi_prompt",
    "key": "multi_shot",
    "label": "多镜头模式",
    "type": "switch"
  },
  {
    "default": "intelligence",
    "key": "shot_type",
    "label": "镜头类型",
    "options": [
      {
        "label": "智能",
        "value": "intelligence"
      },
      {
        "label": "自定义",
        "value": "customize"
      }
    ],
    "type": "select"
  },
  {
    "description": "JSON 数组，详见 Kling 多镜头文档",
    "key": "multi_prompt",
    "label": "多镜头分段",
    "placeholder": "JSON 数组，每项 {index, prompt, duration, element_list?}",
    "type": "shot_list"
  }
]
```
