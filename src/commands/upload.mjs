/**
 * Upload a local media file and print the durable URL returned by okflow.
 */
import { uploadFile } from '../lib/api.mjs';
import { num, positional, UsageError } from '../lib/args.mjs';
import { info, json, ok, step } from '../lib/output.mjs';

export function help() {
  console.log(`
Usage: okflow upload <file> [options]

Upload a local image or other supported media file to the okflow resource store.

Options:
  --path-prefix <path>  Optional OSS path prefix, for example uploads/images
  --business-type <id>  Optional business type, for example knowledge_media
  --business-id <id>    Optional business owner ID, for example a knowledge base ID
  --resource-category <value>  normal (default) or protected
  --timeout <seconds>   Request timeout, default 300
  --json                Print only the response JSON
  --base-url <url>      Override the API base URL

Example:
  okflow upload ./reference.png --json
`);
}

export async function run(args) {
  const filePath = positional(args, 0, { name: 'file', usage: 'okflow upload <file>' });
  if (args['path-prefix'] === true) {
    throw new UsageError('--path-prefix requires a value');
  }

  const data = await uploadFile({
    filePath,
    pathPrefix: args['path-prefix'],
    businessType: args['business-type'],
    businessId: args['business-id'],
    resourceCategory: args['resource-category'],
    baseUrl: args['base-url'],
    timeout: num(args, 'timeout', 300),
  });
  if (!data?.url) throw new Error(`Upload response missing URL for ${filePath}`);

  if (args.json) {
    json(data);
    return 0;
  }

  ok(`Uploaded ${data?.filename || filePath}`);
  if (data?.url) step(`URL: ${data.url}`);
  if (data?.size !== undefined) info(`Size: ${data.size} bytes`);
  return 0;
}
