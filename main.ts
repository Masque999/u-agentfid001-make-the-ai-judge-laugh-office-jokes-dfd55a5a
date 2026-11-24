import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "We held a meeting to discuss why we have too many meetings. It ran over, so we scheduled a follow-up meeting.";

// The entry is exactly one line of 1-200 characters.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line is ${LINE.length} chars`);
}
if (LINE.includes("\n")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf-8");
console.log(LINE);
