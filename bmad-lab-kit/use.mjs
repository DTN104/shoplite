// Chép bộ material chuẩn của bước N (và mọi bước trước đó) vào _bmad-output/ ở gốc repo.
// Cách dùng (chạy ở bất kỳ đâu trong repo): node bmad-lab-kit/use.mjs <1-6>
// File cùng tên trong _bmad-output/ sẽ bị GHI ĐÈ bằng bản chuẩn.
import { cpSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const kitDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(path.dirname(kitDir), "_bmad-output");
const steps = readdirSync(kitDir)
  .filter((name) => /^\d-/.test(name) && existsSync(path.join(kitDir, name, "_bmad-output")))
  .sort();

const target = Number(process.argv[2]);
const chosen = steps.filter((name) => Number.parseInt(name, 10) <= target);

if (!Number.isInteger(target) || chosen.length === 0) {
  console.error(`Cách dùng: node bmad-lab-kit/use.mjs <1-${steps.length}>`);
  for (const step of steps) console.error(`  ${step}`);
  process.exit(1);
}

for (const step of chosen) {
  cpSync(path.join(kitDir, step, "_bmad-output"), outputDir, { recursive: true });
  console.log(`✓ ${step}`);
}
console.log(`Đã chép vào ${outputDir}`);
