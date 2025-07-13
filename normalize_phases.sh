#!/bin/bash

# Script to normalize phase headings in markdown files
# Converts various phase heading formats to "## Phase X: ..."

echo "🔍 Finding markdown files in content directory..."
echo "📝 Normalizing phase headings..."

# Find all markdown files and normalize phase headings
find content -type f -name "*.md" -exec \
  perl -i.bak -pe '
    # Convert word numbers to digits
    s/\bone\b/1/gi;
    s/\btwo\b/2/gi;
    s/\bthree\b/3/gi;
    s/\bfour\b/4/gi;
    s/\bfive\b/5/gi;
    s/\bsix\b/6/gi;
    s/\bseven\b/7/gi;
    s/\beight\b/8/gi;
    s/\bnine\b/9/gi;
    s/\bten\b/10/gi;
    s/\beleven\b/11/gi;
    s/\btwelve\b/12/gi;
    
    # Normalize phase headings
    s/^##\s*(?:phase|phases?)?\s*([0-9]+)[\.\:\-\s]*([^\n]*)/## Phase $1: $2/ig;
  ' {} +

echo "✅ Phase headings normalized!"
echo "📁 Backup files created with .bak extension"
echo ""
echo "📊 Summary of changes:"
echo "Files processed:"
find content -type f -name "*.md" | wc -l | tr -d ' '
echo "Backup files created:"
find content -type f -name "*.md.bak" | wc -l | tr -d ' '
echo ""
echo "🔍 To review changes, run:"
echo "find content -name '*.md' -exec diff {} {}.bak \;"
echo ""
echo "🗑️  To remove backup files later, run:"
echo "find content -name '*.md.bak' -delete" 