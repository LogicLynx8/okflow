# 即梦-5.0 pro

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `doubao-seedream-5-0-pro-260628`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `size` | `select` | no | `"1024x1024"` | `{"options":[{"label":"方形 1024×1024","value":"1024x1024"},{"label":"横屏 1280×720","value":"1280x720"},{"label":"竖屏 720×1280","value":"720x1280"},{"label":"横向 4:3 · 1152×864","value":"1152x864"},{"label":"竖向 3:4 · 864×1152","value":"864x1152"},{"label":"超宽 21:9 · 1680×720","value":"1680x720"}]}` |
| `img_count` | `number` | no | `1` | `{"min":1,"max":4,"step":1}` |
| `image_size` | `select` | no | `"2K"` | `{"options":[{"label":"1K","value":"1K"},{"label":"2K","value":"2K"},{"label":"4K","value":"4K"}]}` |
| `aspect_ratio` | `aspect_ratio` | no | `"1:1"` | `{"options":[{"label":"1:1","value":"1:1"},{"label":"16:9","value":"16:9"},{"label":"9:16","value":"9:16"},{"label":"4:3","value":"4:3"},{"label":"3:4","value":"3:4"},{"label":"21:9","value":"21:9"}]}` |
| `images` | `image` | no |  | `{"max_count":14}` |

## Exact capabilities.params

```json
[
  {
    "default": "1024x1024",
    "description": "推荐 1024x1024 / 960x960 及以上",
    "key": "size",
    "label": "图片尺寸",
    "options": [
      {
        "label": "方形 1024×1024",
        "value": "1024x1024"
      },
      {
        "label": "横屏 1280×720",
        "value": "1280x720"
      },
      {
        "label": "竖屏 720×1280",
        "value": "720x1280"
      },
      {
        "label": "横向 4:3 · 1152×864",
        "value": "1152x864"
      },
      {
        "label": "竖向 3:4 · 864×1152",
        "value": "864x1152"
      },
      {
        "label": "超宽 21:9 · 1680×720",
        "value": "1680x720"
      }
    ],
    "type": "select",
    "ui_hidden": true
  },
  {
    "default": 1,
    "key": "img_count",
    "label": "生成数量",
    "locked_value": 1,
    "max": 4,
    "min": 1,
    "provider_passthrough": false,
    "step": 1,
    "type": "number",
    "ui_hidden": true
  },
  {
    "default": "2K",
    "key": "image_size",
    "label": "尺寸档位",
    "options": [
      {
        "label": "1K",
        "value": "1K"
      },
      {
        "label": "2K",
        "value": "2K"
      },
      {
        "label": "4K",
        "value": "4K"
      }
    ],
    "type": "select"
  },
  {
    "default": "1:1",
    "key": "aspect_ratio",
    "label": "画面比例",
    "options": [
      {
        "label": "1:1",
        "value": "1:1"
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
    "description": "可选，最多 14 张；上传后走图生图模式",
    "key": "images",
    "label": "参考图（图生图）",
    "max_count": 14,
    "type": "image"
  }
]
```
