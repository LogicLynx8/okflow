# Kling Image O3

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `kling-image-o3`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `size` | `select` | yes | `"1K"` | `{"options":[{"label":"1K 标清","value":"1K"},{"label":"2K 高清","value":"2K"},{"label":"4K 超清","value":"4K"}]}` |
| `aspect_ratio` | `aspect_ratio` | yes | `"1:1"` | `{"options":[{"label":"1:1 正方形","value":"1:1"},{"label":"9:16 竖屏","value":"9:16"},{"label":"16:9 横屏","value":"16:9"},{"label":"4:3 横版","value":"4:3"},{"label":"3:4 竖版","value":"3:4"},{"label":"3:2 横版","value":"3:2"},{"label":"2:3 竖版","value":"2:3"},{"label":"21:9 超宽屏","value":"21:9"}]}` |
| `images` | `image` | no |  | `{"max_count":8}` |

## Exact capabilities.params

```json
[
  {
    "default": "1K",
    "description": "选择输出图片的清晰度",
    "key": "size",
    "label": "分辨率",
    "options": [
      {
        "label": "1K 标清",
        "value": "1K"
      },
      {
        "label": "2K 高清",
        "value": "2K"
      },
      {
        "label": "4K 超清",
        "value": "4K"
      }
    ],
    "required": true,
    "type": "select"
  },
  {
    "default": "1:1",
    "key": "aspect_ratio",
    "label": "画面比例",
    "options": [
      {
        "label": "1:1 正方形",
        "value": "1:1"
      },
      {
        "label": "9:16 竖屏",
        "value": "9:16"
      },
      {
        "label": "16:9 横屏",
        "value": "16:9"
      },
      {
        "label": "4:3 横版",
        "value": "4:3"
      },
      {
        "label": "3:4 竖版",
        "value": "3:4"
      },
      {
        "label": "3:2 横版",
        "value": "3:2"
      },
      {
        "label": "2:3 竖版",
        "value": "2:3"
      },
      {
        "label": "21:9 超宽屏",
        "value": "21:9"
      }
    ],
    "required": true,
    "type": "aspect_ratio"
  },
  {
    "description": "最多上传 8 张参考图，单张不超过 10MB；上传后自动启用多图参考模式",
    "key": "images",
    "label": "参考图片",
    "max_count": 8,
    "type": "image"
  }
]
```
