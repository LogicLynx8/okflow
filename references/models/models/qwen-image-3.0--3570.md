# 千问图像生成与编辑 3.0

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `qwen-image-3.0`
- Type: `image`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `n` | `number` | no | `1` | `{"min":1,"max":6,"step":1}` |
| `size` | `input` | no |  |  |
| `prompt_extend` | `switch` | no | `true` |  |
| `prompt_extend_mode` | `select` | no | `"direct"` | `{"options":[{"label":"直接增强","value":"direct"},{"label":"智能体增强（仅文生图）","value":"agent"}]}` |
| `negative_prompt` | `textarea` | no |  |  |
| `seed` | `number` | no |  | `{"min":0,"max":2147483647,"step":1}` |
| `watermark` | `switch` | no | `false` |  |
| `images` | `image` | no |  | `{"max_count":3}` |

## Exact capabilities.params

```json
[
  {
    "default": 1,
    "key": "n",
    "label": "生成数量",
    "max": 6,
    "min": 1,
    "step": 1,
    "type": "number"
  },
  {
    "description": "可选；不填则由模型自动推荐。像素范围 512*512 至 2048*2048。",
    "key": "size",
    "label": "图片尺寸",
    "placeholder": "例如 1024*1024",
    "type": "input"
  },
  {
    "default": true,
    "key": "prompt_extend",
    "label": "智能改写提示词",
    "type": "switch"
  },
  {
    "default": "direct",
    "key": "prompt_extend_mode",
    "label": "改写方式",
    "options": [
      {
        "label": "直接增强",
        "value": "direct"
      },
      {
        "label": "智能体增强（仅文生图）",
        "value": "agent"
      }
    ],
    "type": "select"
  },
  {
    "key": "negative_prompt",
    "label": "反向提示词",
    "type": "textarea"
  },
  {
    "key": "seed",
    "label": "随机种子",
    "max": 2147483647,
    "min": 0,
    "step": 1,
    "type": "number"
  },
  {
    "default": false,
    "key": "watermark",
    "label": "添加水印",
    "type": "switch"
  },
  {
    "description": "图生图可传 1-3 张参考图。",
    "key": "images",
    "label": "参考图",
    "max_count": 3,
    "type": "image"
  }
]
```
