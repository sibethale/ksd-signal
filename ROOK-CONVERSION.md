# KSD // Signal — "Rook" conversion plan

Total-conversion to Henry Rook's POV. Health mechanics stay 100% unchanged;
only narrative content changes. Built in-place, engine reads a swappable LORE pack.

## Canon (Rook edition)
- **Player = Henry Rook** — gruff 40s captain of the freighter *Peregrine*, bay twelve.
  Conceit: "a ship is only as sound as her captain" — goals = staying flightworthy.
- **Ship AI companion** = <NAME TBD> (replaces Sparky). She SPEAKS (prefix `NAME⟩`),
  dry/maternal/sardonic; also the sole horror-whisper source when the signal drops.
- **Koko** = vent-crawling teenage stowaway; paternal/found-family bond (NOT romance).
  From Rook's POV: unexplained thefts & kindnesses → he notices → leaves food out.
- **Katie Wagner** = station administrator, **regular human (no wings)**. Henry's
  slow-burn **romance** arc.
- **Gary** = young boastful bounty hunter; Rook sees through the swagger (wry, paternal-ish).

## Architecture
- Extract all narrative strings from index.html into a `LORE` object keyed by perspective
  (`koko` = original, `rook` = new). A single switch selects the active pack.
- Engine references (SPARKY_LINES, CHAPTERS, GARY_EVENTS, KATIE_DIRECTIVES, M_*/S_*/DL_*,
  ACH text, BOOT_LINES, FORECAST desc, STORY_BIBLE) read from the active pack.
- `id` fields and all game logic (`test` fns, triggers) stay in code, untouched.

## Phases
1. Refactor: introduce LORE pack + perspective switch (name-independent).
2. Write Rook pack: storyBible, companion tier lines, pools, chapters, koko-events, achievements, boot, forecast.
3. Wire toggle + parse-check + rebuild APK.
