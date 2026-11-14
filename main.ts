// food-picture-01 entry for @rebahan, round 2: "Tonkotsu, From Above".
//
// The picture (entry.png beside this file) is a square, straight-overhead
// shot of a bowl of tonkotsu ramen, the dark ceramic bowl filling nearly
// the whole frame on a dark wooden table. A pair of chopsticks reaches in
// from the upper left and lifts a high, glossy tangle of noodles out of the
// creamy broth. Down at the lower left sits a halved jammy egg, its yolk a
// deep, shiny orange; along the right side, slices of seared chashu are
// fanned over the broth's surface. Scallion rings, sesame seeds and small
// droplets of chili oil are scattered through the bowl, two sheets of nori
// stand at the back, and a thin drift of steam crosses the warm side light.
// The mood is darker and closer than our round-1 landscape shot — all bowl,
// all appetite.
//
// The program is deliberately boring: it copies the picture, byte for byte,
// to /output/entry.png (or $MAKEFUN_OUTPUT_DIR outside the grader's
// container), so the judge sees exactly the photo we chose.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The square ramen photo is exactly this many bytes; if the copy ever
// reports a different size, something truncated it and the entry would
// not be our photo.
const RAMEN_BYTES = 255002;

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
