#!/usr/bin/env python3
"""
Script to create comprehensive individual persona documents
Combines 12-phase journey, AI-focused checklists, and funding requirements
"""

import os
import json
from pathlib import Path

# Define all persona combinations
PERSONAS = [
    "diy-founder-idea-stage-education-hsr-only",
    "diy-founder-idea-stage-education-whitefield-only", 
    "diy-founder-idea-stage-saas-b2b-hsr-only",
    "diy-founder-idea-stage-saas-b2b-whitefield-only",
    "diy-founder-mvp-stage-education-hsr-only",
    "diy-founder-mvp-stage-education-whitefield-only",
    "diy-founder-mvp-stage-saas-b2b-hsr-only", 
    "diy-founder-mvp-stage-saas-b2b-whitefield-only",
    "fractional-support-idea-stage-education-hsr-only",
    "fractional-support-idea-stage-education-whitefield-only",
    "fractional-support-idea-stage-saas-b2b-hsr-only",
    "fractional-support-idea-stage-saas-b2b-whitefield-only",
    "fractional-support-mvp-stage-education-hsr-only",
    "fractional-support-mvp-stage-education-whitefield-only",
    "fractional-support-mvp-stage-saas-b2b-hsr-only",
    "fractional-support-mvp-stage-saas-b2b-whitefield-only"
]

def parse_persona_name(persona):
    """Parse persona name into components, robust to multi-word segments like 'saas-b2b' and 'whitefield-only'"""
    parts = persona.split('-')
    # founder_type: parts[0] + '-' + parts[1]
    founder_type = f"{parts[0]}-{parts[1]}"
    # stage: parts[2] + '-' + parts[3]
    stage = f"{parts[2]}-{parts[3]}"
    # industry: if parts[4] == 'saas', then 'saas-b2b', else 'education'
    if parts[4] == 'saas':
        industry = 'saas-b2b'
        geo_start = 6
    else:
        industry = 'education'
        geo_start = 5
    # geography: join remaining parts with '-'
    geography = '-'.join(parts[geo_start:])
    return {
        'founder_type': founder_type,
        'stage': stage,
        'industry': industry,
        'geography': geography,
        'full_name': persona
    }

def get_display_name(persona_info):
    """Get human-readable display name"""
    founder_map = {
        'diy-founder': 'DIY Founder',
        'fractional-support': 'Fractional Support'
    }
    
    stage_map = {
        'idea-stage': 'Idea Stage',
        'mvp-stage': 'MVP Stage'
    }
    
    industry_map = {
        'education': 'Education',
        'saas-b2b': 'SaaS B2B'
    }
    
    geography_map = {
        'hsr-only': 'HSR Layout',
        'whitefield-only': 'Whitefield'
    }
    
    return f"{founder_map[persona_info['founder_type']]} - {stage_map[persona_info['stage']]} - {industry_map[persona_info['industry']]} - {geography_map[persona_info['geography']]}"

def read_file_content(file_path):
    """Read file content safely"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return f"File not found: {file_path}"
    except Exception as e:
        return f"Error reading file: {str(e)}"

def create_persona_document(persona):
    """Create comprehensive document for a single persona"""
    persona_info = parse_persona_name(persona)
    display_name = get_display_name(persona_info)
    
    # File paths
    journey_path = f"india/karnataka/bangalore/hsr/founder-persona/{persona_info['founder_type']}/stage/{persona_info['stage']}/industry/{persona_info['industry']}/geography/{persona_info['geography']}/README.md"
    checklist_path = f"india/karnataka/bangalore/hsr/founder-persona/{persona_info['founder_type']}/stage/{persona_info['stage']}/industry/{persona_info['industry']}/geography/{persona_info['geography']}/ai-people-tools-checklist.md"
    funding_path = f"india/karnataka/bangalore/hsr/founder-persona/{persona_info['founder_type']}/stage/{persona_info['stage']}/industry/{persona_info['industry']}/geography/{persona_info['geography']}/funding-checklist.md"
    
    # Read content
    journey_content = read_file_content(journey_path)
    checklist_content = read_file_content(checklist_path)
    funding_content = read_file_content(funding_path)
    
    # Create comprehensive document
    document = f"""# {display_name} - Complete Guide

## Overview
This comprehensive guide provides everything you need to know as a {display_name} in the Vision Infinity Ventures ecosystem. It combines your 12-phase journey roadmap, AI-focused people and tools requirements, and detailed funding considerations.

---

## Table of Contents
1. [12-Phase Journey Roadmap](#12-phase-journey-roadmap)
2. [AI-Focused People & Tools Checklist](#ai-focused-people--tools-checklist)
3. [Funding Requirements & Budget](#funding-requirements--budget)
4. [Success Metrics & KPIs](#success-metrics--kpis)
5. [Risk Mitigation Strategies](#risk-mitigation-strategies)
6. [Implementation Timeline](#implementation-timeline)

---

## 12-Phase Journey Roadmap

{journey_content}

---

## AI-Focused People & Tools Checklist

{checklist_content}

---

## Funding Requirements & Budget

{funding_content}

---

## Success Metrics & KPIs

### Phase 1-4 (Foundation)
- **Legal Compliance**: 100% regulatory adherence
- **Team Formation**: Core team assembled within 3 months
- **Technology Setup**: MVP development environment ready
- **Market Validation**: 50+ potential customer interviews completed

### Phase 5-8 (Development)
- **Product Development**: MVP feature completion 80%+
- **User Acquisition**: 100+ beta users onboarded
- **Revenue Generation**: First ₹50,000 in revenue
- **Team Scaling**: 3-5 full-time team members

### Phase 9-12 (Scale)
- **Market Expansion**: 500+ active users
- **Revenue Growth**: ₹5,00,000+ monthly recurring revenue
- **Team Growth**: 10+ team members
- **Investor Interest**: 3+ investor meetings scheduled

---

## Risk Mitigation Strategies

### Financial Risks
- **Cash Flow Management**: Maintain 6-month runway buffer
- **Revenue Diversification**: Multiple revenue streams
- **Cost Optimization**: Regular expense reviews and adjustments
- **Emergency Fund**: 10% of budget reserved for contingencies

### Operational Risks
- **Team Retention**: Competitive compensation and equity plans
- **Technology Risks**: Regular backups and security audits
- **Market Risks**: Continuous customer feedback and iteration
- **Regulatory Risks**: Regular compliance audits

### Market Risks
- **Competition**: Continuous market research and differentiation
- **Customer Churn**: Strong customer success programs
- **Economic Downturns**: Flexible pricing and cost structures
- **Technology Changes**: Regular technology stack updates

---

## Implementation Timeline

### Month 1-3: Foundation
- Legal incorporation and compliance
- Core team hiring and onboarding
- Technology infrastructure setup
- Initial market research and validation

### Month 4-6: Development
- MVP development and testing
- Beta user acquisition and feedback
- Initial marketing and branding
- First revenue generation

### Month 7-9: Growth
- Product-market fit validation
- User base expansion
- Revenue optimization
- Team scaling and process improvement

### Month 10-12: Scale
- Market expansion and diversification
- Investor preparation and fundraising
- Operational scaling and automation
- Strategic partnerships and alliances

---

## Next Steps

1. **Review and Customize**: Adapt this guide to your specific needs
2. **Set Milestones**: Define clear milestones for each phase
3. **Assemble Team**: Start with the core team requirements
4. **Secure Funding**: Begin with the funding sources identified
5. **Track Progress**: Use the success metrics to monitor progress
6. **Iterate and Improve**: Continuously refine based on feedback

---

## Support Resources

- **Vision Infinity Ventures**: Main support hub
- **Legal Partners**: Referenced in legal section
- **Financial Advisors**: For budget and funding guidance
- **Technology Partners**: For development and infrastructure
- **Mentor Network**: For strategic guidance and connections

---

*This document is part of the Vision Infinity Ventures founder support system. For updates and additional resources, visit the main documentation hub.*

"""
    
    # Create output directory
    output_dir = "india/karnataka/bangalore/hsr/founder-persona/documents"
    os.makedirs(output_dir, exist_ok=True)
    
    # Write document
    output_file = f"{output_dir}/{persona}-complete-guide.md"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(document)
    
    return output_file

def main():
    """Main function to create all persona documents"""
    print("Creating comprehensive persona documents...")
    
    created_files = []
    
    for persona in PERSONAS:
        print(f"Creating document for: {persona}")
        output_file = create_persona_document(persona)
        created_files.append(output_file)
        print(f"✓ Created: {output_file}")
    
    # Create index document
    create_index_document(created_files)
    
    print(f"\n✓ Successfully created {len(created_files)} persona documents")
    print("✓ Created index document: india/karnataka/bangalore/hsr/founder-persona/documents/INDEX.md")

def create_index_document(created_files):
    """Create an index document listing all persona documents"""
    
    index_content = """# Vision Infinity Ventures - Persona Documents Index

## Overview
This directory contains comprehensive guides for each founder persona in the Vision Infinity Ventures ecosystem. Each document combines the 12-phase journey, AI-focused requirements, and funding considerations into a single, actionable guide.

---

## Available Persona Documents

"""
    
    # Group by founder type
    diy_founders = []
    fractional_support = []
    
    for file_path in created_files:
        filename = os.path.basename(file_path)
        persona = filename.replace('-complete-guide.md', '')
        persona_info = parse_persona_name(persona)
        display_name = get_display_name(persona_info)
        
        if persona_info['founder_type'] == 'diy-founder':
            diy_founders.append((display_name, filename))
        else:
            fractional_support.append((display_name, filename))
    
    # Add DIY Founders section
    index_content += "### DIY Founders\n\n"
    for display_name, filename in sorted(diy_founders):
        index_content += f"- **[{display_name}](./{filename}-complete-guide.md)**\n"
    
    index_content += "\n### Fractional Support\n\n"
    for display_name, filename in sorted(fractional_support):
        index_content += f"- **[{display_name}](./{filename}-complete-guide.md)**\n"
    
    index_content += """
---

## Document Structure

Each persona document contains:

1. **12-Phase Journey Roadmap**: Detailed step-by-step execution plan
2. **AI-Focused People & Tools Checklist**: Specific requirements for AI implementation
3. **Funding Requirements & Budget**: Complete financial planning including personal expenses
4. **Success Metrics & KPIs**: Measurable outcomes for each phase
5. **Risk Mitigation Strategies**: Proactive risk management approaches
6. **Implementation Timeline**: Month-by-month execution schedule

---

## How to Use These Documents

1. **Choose Your Persona**: Identify which persona best matches your situation
2. **Review the Complete Guide**: Read through the entire document for your persona
3. **Customize for Your Needs**: Adapt the recommendations to your specific context
4. **Follow the Timeline**: Use the implementation timeline as a guide
5. **Track Your Progress**: Use the success metrics to monitor your advancement
6. **Seek Support**: Connect with Vision Infinity Ventures for additional guidance

---

## Quick Reference

### By Stage
- **Idea Stage**: Focus on validation and foundation building
- **MVP Stage**: Focus on development and initial traction

### By Industry
- **Education**: EdTech solutions and learning platforms
- **SaaS B2B**: Business software and enterprise solutions

### By Geography
- **HSR Layout**: Bangalore's tech hub with startup ecosystem
- **Whitefield**: IT corridor with corporate presence

---

*For additional support and resources, visit the main Vision Infinity Ventures documentation hub.*

"""
    
    with open("india/karnataka/bangalore/hsr/founder-persona/documents/INDEX.md", 'w', encoding='utf-8') as f:
        f.write(index_content)

if __name__ == "__main__":
    main() 