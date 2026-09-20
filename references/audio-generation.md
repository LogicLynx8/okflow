# OKFlow 音频生成

用于语音合成、音效/环境声、多角色对白和带参考素材的音频生成。生产服务默认是 `https://okflow.cn`，鉴权使用 `OKFLOW_API_KEY`；不得把真实 Key 写进请求文件、日志或 Git。

## 选择调用方式

优先使用 CLI 的实时模型契约流程：

```bash
node bin/okflow.mjs models --json
node bin/okflow.mjs request init --model <音频模型名> --output ./audio-request.json
node bin/okflow.mjs request validate ./audio-request.json
node bin/okflow.mjs request submit ./audio-request.json --wait --timeout 1200
```

这条链路调用统一媒体生成接口，并自动使用通用状态查询：

```text
POST /openapi/v1/image/generate
GET  /openapi/v1/image/{task_id}/status
```

不要直接拼供应商请求。普通音效、多角色对白和参考媒体生成仍走统一媒体契约。标准文本转语音使用专用 CLI：

```bash
node bin/okflow.mjs tts \
  --model runninghub-speech-2.8-turbo \
  --voice Elegant_Man \
  --text "你好，这是语音合成测试。" \
  --wait --json
```

这条链路调用：

```text
POST /openapi/v1/audio/speech
GET  /openapi/v1/audio/tasks/{task_id}
```

不要用 `generate` 调 TTS，也不要用 `tts` 调 Seed-Audio、音效或参考媒体生成。

## 标准 TTS

路由方式必须二选一：

- `--model <模型> [--voice <供应商音色>]`：明确指定模型和可选的供应商音色。
- `--speaker-id <平台音色资产ID>`：不传模型，由音色资产绑定关系解析模型、供应商音色和计费配置。

模型 `is_public=false` 只表示不在模型列表展示；精确模型名或音色资产绑定仍可调用已启用模型。不要为了调用私有模型而修改公开状态。

基础参数：合成文本、输出格式和语速。业务调用者可选的高级参数包括：

- `volume`：音量倍率，`0.1-10`。
- `pitch`：音调，`-12` 至 `12`。
- `emotion`：情绪，例如 `happy`、`calm`、`sad`。
- `pronunciation_dict`：发音词典，最多 20 项；CLI 通过 `--pronunciation-file` 逐行读取。
- `english_normalization`：英文文本规范化，布尔值。

示例：

```bash
node bin/okflow.mjs tts \
  --model runninghub-speech-2.8-hd \
  --voice Elegant_Man \
  --text-file ./speech.txt \
  --volume 1.2 \
  --pitch -2 \
  --emotion calm \
  --english-normalization true \
  --pronunciation-file ./pronunciation.txt \
  --wait --timeout 600 --json
```

不向调用者暴露 `enable_base64_output`、Webhook、供应商端点、认证、上游任务 ID、`request_type`、计费公式、成本倍率、用户/租户/钱包和审计字段。

## 请求参数边界

请求文件只编辑 `request init` 生成模板中已有的字段。常见的用户参数如下，但必须以目标模型实时 `capabilities.params` 为准：

- 基础参数：`prompt`，以及模型明确公开的输出格式。
- 可选音色：`speaker` 或模型声明的其他音色字段。
- 可选参考音频：通常为音频 URL 数组，数量受 `max_count` 限制。
- 可选参考图片：通常为单张或受 `max_count` 限制的图片 URL。
- 可选音频控制：采样率、语速、音量、音调等，必须遵守枚举或数值范围。

如果契约声明音色、参考音频和参考图片互斥，只能提交一种。空的可选字段应从请求中移除，不要发送空字符串、空数组或猜测默认值。

以下字段属于平台或供应商实现细节，不向调用者暴露，也不手工加入请求：

- `request_type`
- `provider_config`
- 创建/查询端点和任务 ID 映射
- Webhook 地址
- `billing_policy`、计费公式和实际用量路径
- 用户、租户、钱包、冻结或结算标识

## Doubao Seed-Audio 示例

先从实时契约初始化，不要直接复制固定模板：

```bash
node bin/okflow.mjs request init \
  --model doubao-seed-audio-1.0 \
  --output ./doubao-audio.json
```

若线上契约包含对应字段，可形成类似请求：

```json
{
  "model": "doubao-seed-audio-1.0",
  "config": {
    "prompt": "清晨海边的轻柔海浪中，一位成年女声说：我们出发吧。随后以温暖的钢琴和弦收尾。",
    "format": "wav",
    "sample_rate": "24000",
    "speech_rate": 0,
    "loudness_rate": 0,
    "pitch_rate": 0
  }
}
```

参考素材字段留空时应删除。不要同时提交 `speaker`、参考音频和参考图片，除非目标模型实时契约明确允许组合使用。

## 状态、恢复与下载

提交后拿到 `task_id`。等待中断或超时不代表任务失败，先恢复查询，禁止直接重提：

```bash
node bin/okflow.mjs status <task_id> --wait --timeout 1200
node bin/okflow.mjs history --model <音频模型名> --status processing --size 100 --json
```

成功结果可能出现在顶层 `audio_url`，也可能在 `images[].audio_url` 或 `images[].url`。CLI 的 `download` 已覆盖这些字段：

```bash
node bin/okflow.mjs download <task_id> --output ./result.wav
```

下载后不要只信 URL 扩展名。聚合存储可能保留错误后缀；需要验收时检查文件 MIME、魔数或使用 `ffprobe` 确认音频格式和时长。

## 计费与安全

媒体生成可能付费。提交前必须经过 `request validate` 的实时契约校验，不自动重试付费 POST。后置实际用量结算、预占和差额释放由服务端模型配置负责；客户端只展示提交结果和最终任务状态，不自行计算或覆盖最终费用。
