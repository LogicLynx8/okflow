# 万相 3.0 视频生成（按秒）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `wan3.0-video`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `number` | no | `5` | `{"min":2,"max":30,"step":1}` |
| `resolution` | `select` | no | `"720P"` | `{"options":[{"label":"480P","value":"480P"},{"label":"720P","value":"720P"},{"label":"1080P","value":"1080P"}]}` |
| `ratio` | `aspect_ratio` | no | `"16:9"` | `{"options":[{"label":"自适应","value":"adaptive"},{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"1:1","value":"1:1"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"}]}` |
| `audio` | `switch` | no | `true` |  |
| `watermark` | `switch` | no | `false` |  |
| `seed` | `number` | no |  | `{"min":0,"max":2147483647,"step":1}` |

## Exact capabilities.params

```json
[
  {
    "default": 5,
    "key": "duration",
    "label": "时长（秒）",
    "max": 30,
    "min": 2,
    "step": 1,
    "type": "number"
  },
  {
    "default": "720P",
    "key": "resolution",
    "label": "清晰度",
    "options": [
      {
        "label": "480P",
        "value": "480P"
      },
      {
        "label": "720P",
        "value": "720P"
      },
      {
        "label": "1080P",
        "value": "1080P"
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
        "label": "自适应",
        "value": "adaptive"
      },
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
      }
    ],
    "type": "aspect_ratio"
  },
  {
    "default": true,
    "key": "audio",
    "label": "生成音频",
    "type": "switch"
  },
  {
    "default": false,
    "key": "watermark",
    "label": "添加水印",
    "type": "switch"
  },
  {
    "key": "seed",
    "label": "随机种子",
    "max": 2147483647,
    "min": 0,
    "step": 1,
    "type": "number",
    "ui_hidden": true
  }
]
```
