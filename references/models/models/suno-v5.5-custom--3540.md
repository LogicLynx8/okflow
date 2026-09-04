# Suno V5.5 自定义模式

> AUTO-GENERATED from the public model API. Do not edit manually.

- Model: `suno-v5.5-custom`
- Type: `audio`
- Parameter status: **available**

| Key | Type | Required | Default | Options / bounds |
| --- | --- | --- | --- | --- |
| `title` | `input` | yes |  |  |
| `tags` | `select` | yes | `"pop, female vocal"` | `{"options":[{"label":"流行女声","value":"pop, female vocal"},{"label":"流行男声","value":"pop, male vocal"},{"label":"抒情原声","value":"acoustic, emotional, ballad"},{"label":"摇滚","value":"rock, electric guitar, energetic"},{"label":"电子舞曲","value":"electronic, EDM, energetic"},{"label":"嘻哈说唱","value":"hip-hop, rap, trap"},{"label":"爵士","value":"jazz, soulful, saxophone"},{"label":"R&B","value":"R&B, soulful, smooth"},{"label":"民谣","value":"folk, acoustic, warm"},{"label":"国风","value":"traditional Chinese, guzheng, erhu"},{"label":"古典交响","value":"classical, orchestral, cinematic"},{"label":"Lo-fi","value":"lo-fi, chill, mellow"}]}` |
| `make_instrumental` | `select` | no | `"false"` | `{"options":[{"label":"含人声","value":"false"},{"label":"纯伴奏（无人声）","value":"true"}]}` |

## Exact capabilities.params

```json
[
  {
    "description": "歌曲标题，建议不超过 80 字符",
    "key": "title",
    "label": "歌曲标题",
    "placeholder": "例如：夏日海风",
    "required": true,
    "type": "input"
  },
  {
    "default": "pop, female vocal",
    "description": "选择一个风格预设，将以英文标签组合提交",
    "key": "tags",
    "label": "风格标签",
    "options": [
      {
        "label": "流行女声",
        "value": "pop, female vocal"
      },
      {
        "label": "流行男声",
        "value": "pop, male vocal"
      },
      {
        "label": "抒情原声",
        "value": "acoustic, emotional, ballad"
      },
      {
        "label": "摇滚",
        "value": "rock, electric guitar, energetic"
      },
      {
        "label": "电子舞曲",
        "value": "electronic, EDM, energetic"
      },
      {
        "label": "嘻哈说唱",
        "value": "hip-hop, rap, trap"
      },
      {
        "label": "爵士",
        "value": "jazz, soulful, saxophone"
      },
      {
        "label": "R&B",
        "value": "R&B, soulful, smooth"
      },
      {
        "label": "民谣",
        "value": "folk, acoustic, warm"
      },
      {
        "label": "国风",
        "value": "traditional Chinese, guzheng, erhu"
      },
      {
        "label": "古典交响",
        "value": "classical, orchestral, cinematic"
      },
      {
        "label": "Lo-fi",
        "value": "lo-fi, chill, mellow"
      }
    ],
    "placeholder": "pop, acoustic, female vocal",
    "required": true,
    "type": "select"
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
