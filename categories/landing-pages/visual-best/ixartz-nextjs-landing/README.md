# ixartz-nextjs-landing

**Category:** landing-pages
**Selection:** visual_best
**Technology:** Next.js 14, TypeScript, Tailwind CSS 3, ESLint, Prettier, Husky
**License:** MIT
**Repository:** https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template
**Demo:** https://next-js-landing-page-starter-template.vercel.app

## Why Selected

Excellent visual design with modern Tailwind CSS components, comprehensive developer experience setup (ESLint, Prettier, Husky, TypeScript), 2000+ stars, actively maintained, MIT license.

## Visual Characteristics

- Modern, clean landing page design
- Hero section with strong visual hierarchy
- Feature sections with icon grids
- Testimonials carousel
- Pricing tables
- Footer with newsletter signup
- Smooth animations and transitions
- Fully responsive (mobile-first)
- Dark/light mode support
- Optimized typography and spacing

## Technical Characteristics

- Next.js 14 App Router
- TypeScript strict mode
- Tailwind CSS 3 with custom config
- ESLint (Airbnb + Next.js + Core Web Vitals)
- Prettier code formatting
- Husky + lint-staged for git hooks
- VSCode configuration included
- Netlify deployment config
- SEO metadata with Next SEO
- JSON-LD structured data
- Open Graph tags
- Bundle analyzer
- Image optimization

## Best Use Cases

- Product landing pages
- SaaS marketing sites
- Startup launch pages
- Personal project showcases
- Agency portfolio pages

## Important Components

- `src/components/hero` - Hero section with CTA
- `src/components/features` - Feature grid
- `src/components/testimonials` - Carousel
- `src/components/pricing` - Pricing tables
- `src/components/footer` - Footer with newsletter
- `src/templates` - Page templates
- `src/utils` - Utility functions

## Animation / Interaction

- CSS transitions on hover states
- Framer Motion for section animations
- Smooth scroll navigation
- Mobile menu animations
- Loading states

## Setup

```bash
# Clone
git clone https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git my-project
cd my-project

# Install dependencies
npm install
# or
pnpm install

# Development
npm run dev

# Build
npm run build

# Production
npm run start
```

## License Notes

MIT License - free for personal and commercial use. Attribution appreciated but not required.

## Limitations

- SWC binary issues on Windows (works on Vercel/Linux/macOS/WSL2)
- Requires Node.js 18+
- Tailwind CSS 3 (not v4)
- No backend/auth/database included (frontend only)