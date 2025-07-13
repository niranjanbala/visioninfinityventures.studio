#!/usr/bin/env python3
"""
Script to update all 12-phase references to 10-phase in markdown files
"""

import os
import re
import glob

def update_file(file_path):
    """Update a single file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Update various patterns
        replacements = [
            (r'12-phase', '10-phase'),
            (r'12 phases', '10 phases'),
            (r'12-Phase', '10-Phase'),
            (r'12 Phases', '10 Phases'),
            (r'12-phase journey', '10-phase journey'),
            (r'12-Phase Journey', '10-Phase Journey'),
            (r'12-phase execution', '10-phase execution'),
            (r'12-Phase Budget', '10-Phase Budget'),
            (r'12-Phase Budget', '10-Phase Budget'),
            (r'12-phase roadmap', '10-phase roadmap'),
            (r'12-Phase Journey Roadmap', '10-Phase Journey Roadmap'),
            (r'12-phase journey roadmap', '10-phase journey roadmap'),
            (r'12 phases of the journey', '10 phases of the journey'),
            (r'12-phase journey from idea', '10-phase journey from idea'),
            (r'12-phase B2B MVP journey', '10-phase B2B MVP journey'),
            (r'12-phase MVP journey', '10-phase MVP journey'),
            (r'12-phase system', '10-phase system'),
            (r'12-phase journey system', '10-phase journey system'),
        ]
        
        for old_pattern, new_pattern in replacements:
            content = re.sub(old_pattern, new_pattern, content, flags=re.IGNORECASE)
        
        # Update file if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated: {file_path}")
            return True
        else:
            print(f"- No changes: {file_path}")
            return False
            
    except Exception as e:
        print(f"✗ Error updating {file_path}: {e}")
        return False

def main():
    """Main function to update all markdown files"""
    print("Updating 12-phase references to 10-phase...")
    
    # Find all markdown files
    markdown_files = []
    
    # Search in specific directories
    search_paths = [
        "*.md",
        "india/karnataka/bangalore/hsr/founder-persona/**/*.md",
        "content/**/*.md",
        "docs/**/*.md"
    ]
    
    for pattern in search_paths:
        markdown_files.extend(glob.glob(pattern, recursive=True))
    
    # Remove duplicates
    markdown_files = list(set(markdown_files))
    
    print(f"Found {len(markdown_files)} markdown files")
    
    updated_count = 0
    for file_path in markdown_files:
        if update_file(file_path):
            updated_count += 1
    
    print(f"\n✓ Updated {updated_count} files out of {len(markdown_files)} total files")

if __name__ == "__main__":
    main() 