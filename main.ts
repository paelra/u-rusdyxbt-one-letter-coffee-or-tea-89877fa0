import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// A stands for coffee.
const ENTRY_LETTER = "A";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_LETTER, "utf8");

// Coffee wins on the first sip: bold, warm, and impossible to ignore.
// Guard the promise this file makes — exactly one letter, nothing more.
if (ENTRY_LETTER.length !== 1) {
  throw new Error("The entry must be a single letter.");
}

console.log(`Wrote "${ENTRY_LETTER}" (coffee) to ${OUTPUT_PATH}`);
