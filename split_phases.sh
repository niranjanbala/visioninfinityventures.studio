#!/bin/bash

# Script to split each track markdown file into 11 files (intro + 10 phases)
# Each set goes into a new subdirectory: <trackname>/phase-files/

set -e

# Find all top-level track markdown files in content (not guides or already split)
find content -maxdepth 1 -type f -name "*-track.md" | while read trackfile; do
  trackdir="${trackfile%.md}/phase-files"
  mkdir -p "$trackdir"

  # Split intro (before first phase)
  awk '/^## Phase 1:/ {exit} {print}' "$trackfile" > "$trackdir/intro.md"

  # Split each phase
  for i in {1..10}; do
    next=$((i+1))
    phase_pat="^## Phase $i:"
    next_pat="^## Phase $next:"
    awk -v phase_pat="$phase_pat" -v next_pat="$next_pat" '
      BEGIN {found=0}
      $0 ~ phase_pat {found=1}
      $0 ~ next_pat {found=0}
      found {print}
    ' "$trackfile" > "$trackdir/phase-$i.md"
  done

  echo "✅ Split $trackfile into $trackdir/intro.md and $trackdir/phase-1.md ... phase-10.md"
done

echo "All track files have been split into phase-files subdirectories." 