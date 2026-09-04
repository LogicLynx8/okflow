# 可灵3O-4k

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `bk-kling-v3-omni-4k`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `select` | no | `"3"` | `{"options":[{"label":"3 秒","value":"3"},{"label":"5 秒","value":"5"},{"label":"10 秒","value":"10"},{"label":"15 秒","value":"15"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"}]}` |
| `sound` | `radio_group` | no | `"on"` | `{"options":[{"label":"开","value":"on"},{"label":"关","value":"off"}]}` |
| `image_list` | `image` | no |  | `{"max_count":7}` |
| `video_list` | `video` | no |  | `{"max_count":3}` |
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
    "description": "Omni 专用；数组，每项可带 type=first_frame/end_frame",
    "item_fields": [
      {
        "default": "first_frame",
        "key": "select_type",
        "label": "图片角色",
        "options": [
          {
            "label": "首帧",
            "value": "first_frame"
          },
          {
            "label": "尾帧",
            "value": "end_frame"
          }
        ],
        "type": "select"
      }
    ],
    "key": "image_list",
    "label": "参考图列表",
    "max_count": 7,
    "type": "image"
  },
  {
    "description": "Omni reference2video 模式；数组，每项含 video_url/refer_type/keep_original_sound",
    "item_fields": [
      {
        "default": "subject",
        "key": "refer_type",
        "label": "参考类型",
        "options": [
          {
            "label": "主体参考",
            "value": "subject"
          },
          {
            "label": "风格参考",
            "value": "style"
          }
        ],
        "type": "select"
      },
      {
        "default": false,
        "key": "keep_original_sound",
        "label": "保留原声",
        "type": "boolean"
      }
    ],
    "key": "video_list",
    "label": "参考视频列表",
    "max_count": 3,
    "type": "video"
  },
  {
    "default": false,
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
    "key": "multi_prompt",
    "label": "多镜头分段",
    "placeholder": "JSON 数组",
    "type": "shot_list"
  }
]
```
