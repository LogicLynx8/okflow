# hailuo-h3-text-to-video（引擎代号 NEBULA-V3）

文生视频模型。只吃文字，不接受参考图。输出 2K 无声视频。

`--model` 传的值就是 `hailuo-h3-text-to-video`，逐字符照抄，不要改大小写或加前缀。

## 参数

`--prompt` / `--prompt-file` 之外的参数走 `--config`（JSON）。

| 参数 | 类型 | 必填 | 默认 | 取值 |
|------|------|------|------|------|
| `prompt` | string | 是 | — | 1 ~ 20480 字符，用 `--prompt` 或 `--prompt-file` 传，不要塞进 `--config` |
| `resolution` | string | 是 | `2K` | **只有 `2K`**，填别的会报错 |
| `duration` | string | 是 | `"5"` | `"5"` ~ `"15"`，整数秒 |
| `ratio` | string | 否 | `16:9` | `21:9` `16:9` `4:3` `1:1` `3:4` `9:16` |

三个容易踩的点：

- **`duration` 是字符串**，写 `"duration": 10` 而不是 `"duration": "10"` 会被拒。
- **`resolution` 只有 `2K` 一个值**，没有 720p / 1080p 选项。
- **输出没有音频轨**，这个模型不生成声音，也没有开关可打开。

## 用法

```bash
node bin/okflow.mjs generate \
  --model hailuo-h3-text-to-video \
  --prompt-file ./prompt.txt \
  --config '{"resolution":"2K","duration":"10","ratio":"16:9"}' \
  --wait --timeout 1200
```

2K 视频通常 5-15 分钟，`--timeout` 给到 1200 秒以上。

耗时任务建议把提交和等待拆开，轮询中断了不用重新花钱提交：

```bash
node bin/okflow.mjs generate --model hailuo-h3-text-to-video --prompt "..." --json
node bin/okflow.mjs status <taskId> --wait --timeout 1800
node bin/okflow.mjs download <taskId>
```

轮询超时不等于任务失败 —— 服务端还在跑，继续 `status` 查即可。

## 这个模型不在 models 列表里

`models` 命令拿不到它，`generate` 却能正常调用 —— 平台只把标记为公开的模型放进列表，
这个模型没被标记。所以用它的时候直接写 `--model hailuo-h3-text-to-video`，
不要因为列表里搜不到就以为模型名错了。

除它之外的模型仍然按 SKILL.md 的规则来：先跑 `models` 拿准确名字，不要凭记忆猜。

## 写 prompt

镜头语言给得越具体，结果越稳。按「主体动作 → 运镜 → 光线 → 材质/质感」写：

```
一位穿米白色风衣的年轻女子站在雨后的天台边缘，缓慢转身面向镜头。
镜头从低角度缓慢上升并轻微环绕，背景是黄昏城市天际线。
逆光，湿漉漉的地面反射霓虹光斑，风衣布料随风轻摆。
```

避开审核雷区（命中会导致任务失败，且**错误信息通常是空的**）：

- 人物用通用描述，不要具体人名、明星名、动漫角色名
- 不要听起来像已有小说/游戏/影视原创设定的专有名词（门派名、法宝名、组织名）
- 血腥、暴力细节换成抽象意象

失败特征：提交成功拿到了 taskId，但明显早于正常生成耗时就变 failed，且 `errorMessage`
为空。这种情况直接换 prompt 重试，不要怀疑参数配错。
