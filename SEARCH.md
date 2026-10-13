# Template Library Search System

This document explains how to programmatically search and query the template library.

## Machine-Readable Index

The primary machine-readable index is:

**F:\templ\template-library\library.json**

Contains all 53 templates with structured metadata for programmatic queries.

## Schema

```json
{
  "id": "category/type/name",
  "name": "template-name",
  "category": "landing-pages",
  "selection_type": "visual_best | functional_best",
  "source_path": "F:\\templ\\template-library\\categories\\...",
  "repository_url": "https://github.com/...",
  "demo_url": "https://...",
  "license": "MIT",
  "framework": "Next.js 15",
  "technologies": ["TypeScript", "Tailwind CSS", "..."],
  "visual_score": 9,
  "functional_score": 8,
  "verification_status": "VERIFIED_FULL | VERIFIED_CORE | PARTIAL | FAILED | NOT_TESTED",
  "verification_environment": "Windows",
  "verified": true,
  "screenshots": [],
  "best_use_cases": [...],
  "known_issues": [...]
}
```

## Common Query Patterns

### Find best animated landing page
```javascript
// High visual_score + Framer Motion/GSAP in technologies
templates.filter(t => 
  t.category === 'landing-pages' && 
  t.selection_type === 'visual_best' &&
  t.technologies.some(tech => tech.includes('Framer') || tech.includes('GSAP'))
).sort((a,b) => b.visual_score - a.visual_score)[0]
```

### Find production SaaS foundation
```javascript
// High functional_score + Stripe + Auth + Database
templates.filter(t => 
  t.category === 'saas' && 
  t.selection_type === 'functional_best' &&
  t.technologies.some(t => t.includes('Stripe')) &&
  t.technologies.some(t => t.includes('PostgreSQL') || t.includes('Prisma') || t.includes('Drizzle')) &&
  t.verification_status === 'VERIFIED_FULL'
).sort((a,b) => b.functional_score - a.functional_score)[0]
```

### Find 3D portfolio
```javascript
templates.filter(t => 
  t.category === '3d-animations' || 
  t.category === 'portfolios' &&
  t.technologies.some(t => t.includes('Three.js') || t.includes('R3F') || t.includes('React Three Fiber'))
)
```

### Find dashboard
```javascript
templates.filter(t => t.category === 'dashboards')
```

### Find ecommerce foundation
```javascript
templates.filter(t => 
  t.category === 'ecommerce' && 
  t.verification_status === 'VERIFIED_FULL'
)
```

### Find strongest React template
```javascript
templates.filter(t => 
  t.framework.includes('React') && 
  t.verification_status === 'VERIFIED_FULL'
).sort((a,b) => (b.visual_score + b.functional_score) - (a.visual_score + a.functional_score))[0]
```

### Find strongest Next.js template
```javascript
templates.filter(t => 
  t.framework.includes('Next.js') && 
  t.verification_status === 'VERIFIED_FULL'
).sort((a,b) => (b.visual_score + b.functional_score) - (a.visual_score + a.functional_score))[0]
```

### Find templates with GSAP
```javascript
templates.filter(t => 
  t.technologies.some(t => t.includes('GSAP'))
)
```

### Find templates with Three.js
```javascript
templates.filter(t => 
  t.technologies.some(t => t.includes('Three.js') || t.includes('R3F') || t.includes('React Three Fiber'))
)
```

### Find by license
```javascript
// MIT only (commercial-friendly)
templates.filter(t => t.license === 'MIT')

// Avoid GPL
templates.filter(t => t.license !== 'GPL-3.0')
```

### Find by verification status
```javascript
// Only fully verified
templates.filter(t => t.verification_status === 'VERIFIED_FULL')

// Core + Full
templates.filter(t => ['VERIFIED_FULL', 'VERIFIED_CORE'].includes(t.verification_status))
```

## Category Quick Reference

| Category | Visual Best | Functional Best | Total |
|----------|-------------|-----------------|-------|
| landing-pages | 2 | 1 | 3 |
| saas | 2 | 2 | 4 |
| ai-saas | 1 | 1 | 2 |
| portfolios | 4 | 2 | 6 |
| ecommerce | 2 | 1 | 3 |
| marketplace | 3 | 3 | 6 |
| dashboards | 2 | 2 | 4 |
| admin | 1 | 1 | 2 |
| 3d-animations | 2 | 1 | 3 |
| blogs-cms | 3 | 2 | 5 |
| documentation | 1 | 1 | 2 |
| agency-corporate | 2 | 1 | 3 |
| lms-education | 2 | 2 | 4 |
| job-board | 2 | 2 | 4 |
| developer-tools | 1 | 1 | 2 |

## Verification Status Distribution

| Status | Count |
|--------|-------|
| VERIFIED_FULL | 18 |
| VERIFIED_CORE | 4 |
| PARTIAL | 3 |
| FAILED | 1 |
| NOT_TESTED | 18 |

## Example: Load in JavaScript/TypeScript

```typescript
import fs from 'fs';

const library = JSON.parse(fs.readFileSync('F:\\templ\\template-library\\library.json', 'utf-8'));

// Find production-ready SaaS starter
const saasStarter = library.templates.find(t => 
  t.category === 'saas' && 
  t.selection_type === 'functional_best' &&
  t.verification_status === 'VERIFIED_FULL'
);

console.log(saasStarter);
// Result: nextjs-saas-starter (official Vercel template)
```

## Example: Load in Python

```python
import json

with open('F:\\templ\\template-library\\library.json', 'r') as f:
    library = json.load(f)

# Find 3D portfolio templates
portfolios_3d = [t for t in library['templates'] 
                 if 'Three.js' in t.get('technologies', []) 
                 or 'R3F' in t.get('technologies', [])]

for t in portfolios_3d:
    print(f"{t['name']} - {t['category']}/{t['selection_type']} - {t['verification_status']}")
```

## Path Mapping

Each template's source code is at:
```
F:\templ\template-library\categories\{category}\{selection_type}\{name}\
├── SOURCE/          # Original project source (use this for new projects)
├── metadata.json    # Full metadata
├── README.md        # Documentation
└── screenshots/     # Screenshots (when available)
```

## Usage Workflow

1. Query `library.json` for matching templates
2. Review `metadata.json` for details
3. Read `README.md` for setup instructions
4. Copy `SOURCE/` to start your project
5. Check `verification_status` before committing