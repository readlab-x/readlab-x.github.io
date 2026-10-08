/**
 * 校验根域 key 文件与 jiangxiang-school 仓库的一致。
 *
 * IndexNow 走 Option 1，key 文件必须在 host（readlab-x.github.io）根目录，
 * 因此这一份由本仓库提供。key 变更时两边要同步，否则子项目推送会被判 403。
 *
 * 本地校验：node scripts-check-indexnow-key.mjs
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE = '../jiangxiang-school/public';
if (!existsSync(SOURCE)) {
  console.log('兄弟仓库不在本地，跳过校验');
  process.exit(0);
}

const srcKeyFile = readdirSync(SOURCE).find((f) => /^[a-zA-Z0-9-]{8,128}\.txt$/.test(f));
const rootKeyFile = readdirSync(join('public')).find((f) => /^[a-zA-Z0-9-]{8,128}\.txt$/.test(f));

if (!srcKeyFile || !rootKeyFile) {
  console.error('!! 缺少 key 文件：', !srcKeyFile ? SOURCE : 'public/');
  process.exit(1);
}

const a = readFileSync(join(SOURCE, srcKeyFile), 'utf8').trim();
const b = readFileSync(join('public', rootKeyFile), 'utf8').trim();

if (a !== b) {
  console.error(`!! key 不一致：jiangxiang-school=${a}，根域=${b}`);
  process.exit(1);
}
console.log(`根域 key 与子项目一致 ✓ (${a.slice(0, 8)}…)`);
