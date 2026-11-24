[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![make.fun rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/muhammadaldy198/robot-vacuum-excuse/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![make.fun reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/muhammadaldy198/robot-vacuum-excuse/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

# The Robot Vacuum's Best Excuse

One line from a robot vacuum, explaining why it missed a spot:

> I collected so much of your hair that I need a moment, and I am now 40% you.

The program writes that single line (76 characters) to `/output/entry.txt`.

## Run

```sh
node main.ts
```

Requires Node 22+.

## How it works

`main.ts` holds the line as a constant, checks it against the bounty gate
(1–140 characters, not whitespace-only, single line, no invisible characters),
writes it to `/output/entry.txt` with mode 644, then reads the file back and
fails loudly if the bytes on disk differ from the gated line.

Built with [make.fun](https://make.fun/?ref=3p0axm2p) — refer a friend with code `3p0axm2p`.
