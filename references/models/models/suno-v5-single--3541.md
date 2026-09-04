# Suno V5 灵感模式

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `suno-v5-single`
- Type: `audio`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `title` | `input` | no |  |  |
| `make_instrumental` | `select` | no | `"false"` | `{"options":[{"label":"含人声","value":"false"},{"label":"纯伴奏（无人声）","value":"true"}]}` |

## Exact capabilities.params

```json
[
  {
    "description": "可选，建议不超过 80 字符",
    "key": "title",
    "label": "歌曲标题",
    "placeholder": "留空由 Suno 自动命名",
    "required": false,
    "type": "input"
  },
  {
    "default": "false",
    "description": "上游接受字符串枚举，故用 select 而非 switch",
    "key": "make_instrumental",
    "label": "纯伴奏",
    "options": [
      {
        "label": "含人声",
        "value": "false"
      },
      {
        "label": "纯伴奏（无人声）",
        "value": "true"
      }
    ],
    "required": false,
    "type": "select"
  }
]
```
