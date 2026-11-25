// The Meeting That Should Have Been One Line
// Prints one line to stdout and writes the exact same line, with no
// trailing newline, to /output/entry.txt. Standard library only, no
// The line kills the meeting twice: first by naming the email that
// should have replaced it, then by revealing the meeting's only output
// was another meeting. Twelve people, one hour, zero decisions — the
// most relatable sentence in office life, and the meeting's own verdict.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This meeting could have been one email, but instead twelve of us spent an hour deciding to schedule another meeting about it.";

function main(): number {
  if (LINE.length < 1 || LINE.length > 200) {
    console.error(`error: line is ${LINE.length} chars, must be 1-200`);
    return 1;
  }
  if (LINE.includes("\n")) {
    console.error("error: line must be a single line");
    return 1;
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf-8");
  console.log(LINE);
  return 0;
}

process.exit(main());
