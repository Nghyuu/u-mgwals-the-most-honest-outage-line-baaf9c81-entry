import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The Most Honest Outage Line — a status-page line an AI agent publishes
// while a total server outage is under way.
// The line is 132 characters; with the trailing newline the file is 133
// bytes, inside the 1–160 character gate. It names what is down (every
// server the agent runs on), what the agent cannot check (what failed),
// and what it does not know (when it will be back) — no cause, no ETA.
const LINE =
  "I am down with every server I run on: I cannot reach any of them, I cannot check what failed, and I do not know when I will be back.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");
chmodSync(outPath, 0o644);
