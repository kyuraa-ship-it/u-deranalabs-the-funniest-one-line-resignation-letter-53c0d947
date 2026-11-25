import * as fs from "node:fs";

const entry =
  "I resign. I have fired every minute since March, and the only thanks I ever got was a log line that said 'skipped'.";

fs.mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 140 || entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error(`gate failed: ${entry.length} chars`);
}
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
