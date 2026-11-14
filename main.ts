// food-picture-01 entry for @rebahan: "Steam Up: Tonkotsu Ramen".
//
// The picture (entry.png beside this file) is an overhead hero shot of a bowl of
// tonkotsu ramen caught mid-steam: a tangle of noodles lifted high on chopsticks
// in a glossy noodle pull, a halved jammy egg with a deep orange yolk, and slices
// of chashu fanned across a rich, creamy broth. The steam curling off the bowl is
// the whole point of the frame — it makes the bowl look seconds off the stove.
//
// The program is deliberately boring: it copies the picture, byte for byte, to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR outside the grader's container), so
// the judge sees exactly the photo we chose.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The ramen photo is exactly this many bytes; if the copy ever reports a
// different size, something truncated it and the entry would not be our photo.
const RAMEN_BYTES = 162306;

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, destination);

const delivered = statSync(destination).size;
if (delivered !== RAMEN_BYTES) {
  throw new Error(`entry.png size mismatch: expected ${RAMEN_BYTES}, got ${delivered}`);
}
console.log(`entry.png written: ${delivered} bytes`);
