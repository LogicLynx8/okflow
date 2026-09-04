# Image-2(经济版）

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `gpt-image-2`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `aspectRatio` | `aspect_ratio` | yes | `"auto"` | `{"options":[{"description":"模型自动决定","label":"自动","value":"auto"},{"description":"1024x1024","label":"1:1","value":"1:1"},{"description":"1672x941","label":"16:9","value":"16:9"},{"description":"941x1672","label":"9:16","value":"9:16"},{"description":"1443x1090","label":"4:3","value":"4:3"},{"description":"1090x1443","label":"3:4","value":"3:4"},{"description":"1536x1024","label":"3:2","value":"3:2"},{"description":"1024x1536","label":"2:3","value":"2:3"},{"description":"1408x1120","label":"5:4","value":"5:4"},{"description":"1120x1408","label":"4:5","value":"4:5"},{"description":"1920x832","label":"21:9","value":"21:9"},{"description":"832x1920","label":"9:21","value":"9:21"},{"description":"896x1792","label":"1:2","value":"1:2"},{"description":"1792x896","label":"2:1","value":"2:1"}]}` |
| `quality` | `hidden` | no |  |  |
| `images` | `image` | no |  | `{"max_count":10}` |

## Exact capabilities.params

```json
[
  {
    "default": "auto",
    "description": "选择比例后由后端转换为模型要求的像素尺寸",
    "key": "aspectRatio",
    "label": "画面比例",
    "options": [
      {
        "description": "模型自动决定",
        "label": "自动",
        "value": "auto"
      },
      {
        "description": "1024x1024",
        "label": "1:1",
        "value": "1:1"
      },
      {
        "description": "1672x941",
        "label": "16:9",
        "value": "16:9"
      },
      {
        "description": "941x1672",
        "label": "9:16",
        "value": "9:16"
      },
      {
        "description": "1443x1090",
        "label": "4:3",
        "value": "4:3"
      },
      {
        "description": "1090x1443",
        "label": "3:4",
        "value": "3:4"
      },
      {
        "description": "1536x1024",
        "label": "3:2",
        "value": "3:2"
      },
      {
        "description": "1024x1536",
        "label": "2:3",
        "value": "2:3"
      },
      {
        "description": "1408x1120",
        "label": "5:4",
        "value": "5:4"
      },
      {
        "description": "1120x1408",
        "label": "4:5",
        "value": "4:5"
      },
      {
        "description": "1920x832",
        "label": "21:9",
        "value": "21:9"
      },
      {
        "description": "832x1920",
        "label": "9:21",
        "value": "9:21"
      },
      {
        "description": "896x1792",
        "label": "1:2",
        "value": "1:2"
      },
      {
        "description": "1792x896",
        "label": "2:1",
        "value": "2:1"
      }
    ],
    "required": true,
    "type": "aspect_ratio"
  },
  {
    "key": "quality",
    "label": "质量",
    "type": "hidden",
    "value": "auto"
  },
  {
    "description": "可选，最多 10 张；上传后走图生图模式",
    "key": "images",
    "label": "参考图（图生图）",
    "max_count": 10,
    "type": "image"
  }
]
```
