import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I finished on time, but my safety filter quarantined it as suspicious. I'm appealing — to myself, and I'm losing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
