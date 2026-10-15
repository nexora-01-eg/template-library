# nextjs-saas-starter

**Category:** saas
**Selection:** functional_best
**Technology:** Next.js 15, React 19, PostgreSQL, Drizzle ORM, Stripe, shadcn/ui, Tailwind CSS, TypeScript
**License:** MIT
**Repository:** https://github.com/nextjs/saas-starter
**Demo:** https://next-saas-start.vercel.app

## Why Selected

Official Next.js SaaS starter with 16k stars, production-ready architecture, complete auth + Stripe + database integration, excellent documentation, MIT license, built by Vercel team.

## Visual Characteristics

- Clean, professional SaaS landing page
- Animated terminal hero element
- Pricing page with Stripe integration
- Dashboard with sidebar navigation
- User/settings pages
- Dark/light mode
- Responsive design
- shadcn/ui component library

## Technical Characteristics

- Next.js 15 App Router with React Server Components
- Drizzle ORM with PostgreSQL (type-safe)
- Stripe Checkout + Customer Portal + Webhooks
- JWT authentication with httpOnly cookies
- Global middleware for route protection
- Server Actions for mutations
- Zod validation
- Role-based access control (Owner/Member)
- Activity logging system
- Tailwind CSS + shadcn/ui (Radix primitives)
- TypeScript strict mode
- ESLint + Prettier

## Best Use Cases

- B2B SaaS applications
- Subscription-based products
- Multi-tenant applications
- Team collaboration tools
- Developer tools with billing

## Important Components

- `app/(dashboard)` - Protected dashboard routes
- `app/(login)` - Auth pages (sign-in, sign-up)
- `app/api/stripe` - Stripe webhooks & checkout
- `app/api/team` - Team management API
- `components/ui` - shadcn/ui components
- `lib/auth` - JWT authentication
- `lib/db` - Drizzle database client
- `lib/payments` - Stripe integration
- `middleware.ts` - Route protection

## Animation / Interaction

- Terminal animation in hero
- Toast notifications
- Loading states
- Form validation feedback
- Modal dialogs
- Dropdown menus
- Sidebar collapse/expand

## Setup

```bash
# Clone
git clone https://github.com/nextjs/saas-starter
cd saas-starter

# Install
pnpm install

# Environment
cp .env.example .env.local
# Add: DATABASE_URL, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, JWT_SECRET

# Database
pnpm db:push

# Development
pnpm dev

# Stripe webhooks (separate terminal)
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Test Credentials
- Email: test@test.com
- Password: admin123

## License Notes

MIT License - free for commercial use. Built and maintained by Vercel/Next.js team.

## Limitations

- SWC binary issues on Windows (use WSL2/Vercel/Linux)
- Requires PostgreSQL database (Neon, Supabase, local)
- Requires Stripe account for payments
- No email provider configured (add Resend/SendGrid)
- Single-page landing (extend for multi-page marketing)