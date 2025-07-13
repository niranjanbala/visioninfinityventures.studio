#!/usr/bin/env python3
"""
Script to break down track documents into individual phase documents
Creates 11 documents per track: 1 Introduction + 10 Phase documents
"""

import os
import re
from pathlib import Path

# Track documents to process
TRACK_DOCUMENTS = [
    "content/diy-founder-track.md",
    "content/fractional-support-track.md", 
    "content/education-industry-guide.md",
    "content/saas-b2b-guide.md",
    "content/hsr-layout-guide.md",
    "content/whitefield-guide.md"
]

def extract_phases_from_markdown(content):
    """Extract introduction and 10 phases from markdown content, matching any heading that starts with 'Phase X' (X=1-10)"""
    lines = content.split('\n')
    phases = []
    
    # Find introduction (content before first phase heading)
    intro_content = []
    phase_heading_pattern = re.compile(r"^#+\s*Phase\s+1[\s:.-]", re.IGNORECASE)
    phase1_found = False
    for line in lines:
        if phase_heading_pattern.match(line):
            phase1_found = True
            break
        intro_content.append(line)
    if intro_content and any(line.strip() for line in intro_content):
        phases.append({
            'title': 'Introduction',
            'content': '\n'.join(intro_content).strip(),
            'phase_number': 0
        })
    
    # Find all phase headings (Phase 1 to Phase 10)
    phase_heading_regex = re.compile(r"^(#+)\s*Phase\s+([1-9]|10)\b.*", re.IGNORECASE)
    phase_indices = []
    phase_titles = []
    for idx, line in enumerate(lines):
        m = phase_heading_regex.match(line)
        if m:
            phase_num = int(m.group(2))
            if 1 <= phase_num <= 10:
                phase_indices.append(idx)
                phase_titles.append(line.lstrip('#').strip())
    
    # Only process the first 10 phases
    phase_indices = phase_indices[:10]
    phase_titles = phase_titles[:10]
    
    # Extract content for each phase
    for i, (start_idx, title) in enumerate(zip(phase_indices, phase_titles)):
        end_idx = phase_indices[i+1] if i+1 < len(phase_indices) else len(lines)
        phase_content = '\n'.join(lines[start_idx:end_idx]).strip()
        phases.append({
            'title': title,
            'content': phase_content,
            'phase_number': i+1
        })
    return phases

def create_phase_document(track_name, phase_data, output_dir):
    """Create individual phase document"""
    phase_num = phase_data['phase_number']
    title = phase_data['title']
    
    if phase_num == 0:
        # Introduction document
        filename = f"{track_name}-introduction.md"
        document_title = f"{track_name.replace('-', ' ').title()} - Introduction"
    else:
        # Phase document
        filename = f"{track_name}-phase-{phase_num}.md"
        document_title = f"{track_name.replace('-', ' ').title()} - {title}"
    
    # Create document content
    document = f"""# {document_title}

## Overview
This document covers {title.lower()} for the {track_name.replace('-', ' ').title()} track.

---

{phase_data['content']}

---

## Navigation
- **Previous:** {'[Introduction](./' + track_name + '-introduction.md)' if phase_num > 1 else 'N/A'}
- **Next:** {'[Phase {phase_num + 1}](./' + track_name + f'-phase-{phase_num + 1}.md)' if phase_num < 10 else 'N/A'}
- **Back to Track:** [Complete {track_name.replace('-', ' ').title()}](./{track_name}.md)

---

*Part of the Vision Infinity Ventures {track_name.replace('-', ' ').title()} track. For the complete journey, visit the main track document.*
"""
    
    # Write document
    output_path = os.path.join(output_dir, filename)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(document)
    
    return output_path

def create_track_index(track_name, phases, output_dir):
    """Create index document for the track"""
    index_content = f"""# {track_name.replace('-', ' ').title()} - Phase Documents

## Overview
This directory contains individual phase documents for the {track_name.replace('-', ' ').title()} track. Each document focuses on a specific phase of the journey.

---

## Available Documents

### Introduction
- **[Introduction](./{track_name}-introduction.md)** - Overview and getting started

### Phase Documents
"""
    
    for i, phase in enumerate(phases[1:], 1):  # Skip introduction
        index_content += f"- **[Phase {i}: {phase['title']}](./{track_name}-phase-{i}.md)**\n"
    
    index_content += f"""
---

## Complete Track
- **[Complete {track_name.replace('-', ' ').title()}](./{track_name}.md)** - Full track document

---

## How to Use
1. Start with the **Introduction** document
2. Follow the phases in order (1-10)
3. Use the navigation links at the bottom of each document
4. Return to the complete track document for the full overview

---

*These documents are part of the Vision Infinity Ventures {track_name.replace('-', ' ').title()} track.*
"""
    
    # Write index
    index_path = os.path.join(output_dir, f"{track_name}-phases-index.md")
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    return index_path

def main():
    """Main function to create phase documents for all tracks"""
    print("Creating individual phase documents for all tracks...")
    
    # Create output directory
    output_dir = "content/phases"
    os.makedirs(output_dir, exist_ok=True)
    
    created_files = []
    
    for track_file in TRACK_DOCUMENTS:
        if not os.path.exists(track_file):
            print(f"⚠️  Track file not found: {track_file}")
            continue
            
        print(f"\nProcessing: {track_file}")
        
        # Read track content
        with open(track_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract track name
        track_name = os.path.splitext(os.path.basename(track_file))[0]
        
        # Extract phases
        phases = extract_phases_from_markdown(content)
        
        if not phases:
            print(f"⚠️  No phases found in {track_file}")
            continue
        
        print(f"  Found {len(phases)} phases")
        
        # Create individual phase documents
        track_files = []
        for phase in phases:
            output_file = create_phase_document(track_name, phase, output_dir)
            track_files.append(output_file)
            print(f"  ✓ Created: {os.path.basename(output_file)}")
        
        # Create track index
        index_file = create_track_index(track_name, phases, output_dir)
        track_files.append(index_file)
        print(f"  ✓ Created: {os.path.basename(index_file)}")
        
        created_files.extend(track_files)
    
    # Create main index
    create_main_index(created_files, output_dir)
    
    print(f"\n✓ Successfully created {len(created_files)} phase documents")
    print(f"✓ Documents saved to: {output_dir}")

def create_main_index(created_files, output_dir):
    """Create main index document"""
    index_content = """# Vision Infinity Ventures - Phase Documents

## Overview
This directory contains individual phase documents for all tracks in the Vision Infinity Ventures ecosystem. Each track is broken down into 11 documents: 1 Introduction + 10 Phase documents.

---

## Available Tracks

"""
    
    # Group files by track
    tracks = {}
    for file_path in created_files:
        filename = os.path.basename(file_path)
        if filename.endswith('-phases-index.md'):
            track_name = filename.replace('-phases-index.md', '')
            tracks[track_name] = file_path
    
    for track_name, index_file in sorted(tracks.items()):
        display_name = track_name.replace('-', ' ').title()
        index_content += f"### {display_name}\n"
        index_content += f"- **[Phase Documents](./{os.path.basename(index_file)})**\n"
        index_content += f"- **[Complete Track](./{track_name}.md)**\n\n"
    
    index_content += """---

## How to Use
1. Choose your track from the list above
2. Start with the Introduction document
3. Follow the phases in order (1-10)
4. Use navigation links to move between phases
5. Return to the complete track for the full overview

---

## Track Structure
Each track follows this structure:
- **Introduction** - Overview and getting started
- **Phase 1** - Market Discovery & Problem Identification
- **Phase 2** - Deep Problem Validation & Solution Ideation
- **Phase 3** - Solution Validation & Market Testing
- **Phase 4** - Business Model Development
- **Phase 5** - Team & Resource Planning
- **Phase 6** - Financial Planning & Funding Strategy
- **Phase 7** - MVP Planning & Development Strategy
- **Phase 8** - MVP Development & Testing
- **Phase 9** - MVP Launch & Market Entry
- **Phase 10** - Performance Analysis & Growth Planning

---

*These documents are part of the Vision Infinity Ventures founder support system.*
"""
    
    # Write main index
    main_index_path = os.path.join(output_dir, "README.md")
    with open(main_index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"✓ Created main index: {main_index_path}")

if __name__ == "__main__":
    main() 