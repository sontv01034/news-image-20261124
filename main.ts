import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entrypoint for the 24 November 2026 news image: copy the image this
// entry ships (entry.png, drawn by gen_image.py) into the output
// directory the grader provides. No network; the same bytes are
// written on every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src) || statSync(src).size === 0) {
  throw new Error("entry.png is missing or empty");
}
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
console.log(`wrote ${dest} (${statSync(src).size} bytes)`);
