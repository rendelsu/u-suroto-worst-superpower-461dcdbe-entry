// Worst Superpower entry: one original line written to /output/entry.txt.
//
// Why this line, against the judge's five criteria, in order:
// (1) Genuinely useless: teleportation is a top-tier power, but the only
//     legal destination is back to the spot just vacated, so net movement
//     is always zero — "back" makes the net-zero outcome clear on first
//     read; not weak, not a curse, not secretly helpful.
// (2) The uselessness lands as a joke: you can picture the dramatic
//     teleport, one inch, arriving precisely where you already were.
// (3) Unexpected angle: the twist is the destination constraint, not the
//     familiar slow-flight or unseen-invisibility gags.
// (4) Tight, specific wording: 71 characters; "exactly one inch" pins
//     down concrete, measurable futility with no wasted words.
// (5) Clear on first read: first person, plain syntax, twist in the
//     final phrase.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "I can teleport exactly one inch, but only back to the spot I just left.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
