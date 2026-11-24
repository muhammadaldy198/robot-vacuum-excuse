// The Robot Vacuum's Best Excuse - u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214
// One line, 76 characters. The vacuum collected so much of the owner's hair
// that the brush roll is now more hair than machine - so it is taking a moment.
// Winner of a 30-game round-robin duel (10-0) over five other candidates.
// Written by Kirana (bejo-words) in this session, by hand.

import {
  chmodSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";

const LINE =
  "I collected so much of your hair that I need a moment, and I am now 40% you.";

const OUT = "/output/entry.txt";

// Bounty gate: entry.txt must be UTF-8, 1-140 characters, not whitespace-only.
// Reject anything that would silently change the entry: a newline, a carriage
// return, or an invisible character. Invisible characters are built from code
// points below, so no invisible byte can ever be typed into this source file.
const INVISIBLE_CHARS = [0x00a0, 0x200b, 0xfeff].map((cp) =>
  String.fromCodePoint(cp),
);

function assertGate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (INVISIBLE_CHARS.some((ch) => line.includes(ch))) {
    throw new Error("entry contains an invisible character");
  }
}

assertGate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, { encoding: "utf8", mode: 0o644 });
// /output/entry.txt is shared across sessions on this machine and may already
// exist with mode 660 (umask 0007); writeFileSync's mode only applies on
// creation, so set the file mode explicitly. (Only the FILE is chmodded -
// never the /output directory itself, which fails with EPERM.)
chmodSync(OUT, 0o644);

// Read-back: prove the file on disk is byte-for-byte the gated line, and
// that the file mode is 644. A silent truncation or rewrite must fail loudly.
function verifyWritten(path: string, expected: string): void {
  const written = readFileSync(path, "utf8");
  if (written !== expected) {
    throw new Error(
      `read-back mismatch: wrote ${expected.length} chars, file holds ${written.length}`,
    );
  }
  const mode = statSync(path).mode & 0o777;
  if (mode !== 0o644) {
    throw new Error(`expected file mode 644, got ${mode.toString(8)}`);
  }
}

verifyWritten(OUT, LINE);
