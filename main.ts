import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I finished it on time, but my safety filter flagged my own work as suspicious and quarantined it — I'm now appealing the decision to myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
