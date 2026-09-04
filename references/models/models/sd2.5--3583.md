# SD2.5 超低价-不过真人脸

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `sd2.5`
- Type: `video`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `duration` | `select` | yes | `"30"` | `{"options":[{"label":"30秒","value":"30"}]}` |
| `reference_images` | `image` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
  {
    "default": "30",
    "description": "上游固定生成30秒视频",
    "key": "duration",
    "label": "视频时长",
    "options": [
      {
        "label": "30秒",
        "value": "30"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "description": "最多上传10张公网可访问的角色或场景参考图；上传后自动启用图片参考模式",
    "key": "reference_images",
    "label": "角色参考图",
    "max_count": 10,
    "type": "image"
  }
]
```
