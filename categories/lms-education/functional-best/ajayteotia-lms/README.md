# ajayteotia-lms

**Category:** lms-education
**Selection:** functional_best
**Technology:** Next.js 15, React 19, Tailwind CSS, shadcn/ui, Better-Auth, Arcjet, Prisma, Neon Postgres, Stripe, TipTap, tRPC, AWS S3, Recharts, TypeScript
**License:** MIT
**Repository:** https://github.com/AjayTeotia/lms
**Demo:** N/A

## Why Selected

Exceptional full-stack LMS: drag-drop course builder, TipTap rich text, custom video player, progress tracking, admin/customer dashboards, Arcjet security, Better-Auth (OTP+OAuth), tRPC, presigned S3 uploads, Stripe, Recharts analytics, MIT license, cutting-edge stack.

## Visual Characteristics

- Modern dashboard with shadcn/ui components
- Drag-and-drop course builder interface
- Rich text editor (TipTap) with formatting toolbar
- Custom video player with progress tracking
- Admin analytics with Recharts visualizations
- Clean lesson/course navigation
- Responsive design (mobile-friendly)
- Dark/light mode support
- Progress rings and completion indicators

## Technical Characteristics

- Next.js 15 (Turbopack) + React 19
- tRPC for end-to-end type-safe APIs
- Better-Auth: Email OTP + GitHub OAuth
- Arcjet: Bot detection, rate limiting, XSS/SQLi protection
- Prisma ORM + Neon serverless PostgreSQL
- AWS S3 presigned URLs for file uploads
- Stripe Checkout + Webhooks for payments
- TipTap rich text editor (extensible)
- Custom video player component
- Drag-and-drop (dnd-kit) for course builder
- Recharts for analytics dashboards
- Tailwind CSS + shadcn/ui (Radix)
- TypeScript strict mode

## Best Use Cases

- Online course platforms
- Corporate training portals
- Educational institutions
- Certification programs
- Membership sites with courses

## Important Components

- `src/app/(dashboard)` - Protected dashboard routes
- `src/components/course-builder` - Drag-drop builder
- `src/components/video-player` - Custom player
- `src/components/rich-editor` - TipTap wrapper
- `src/lib/auth` - Better-Auth config
- `src/lib/arcjet` - Security middleware
- `src/lib/s3` - Presigned URL generation
- `src/trpc` - tRPC router & procedures
- `prisma/schema.prisma` - Database schema

## Animation / Interaction

- Drag-and-drop course/lesson reordering
- Video progress tracking (resume playback)
- Rich text editing with live preview
- Chart animations (Recharts)
- Toast notifications
- Loading skeletons
- Modal dialogs
- Accordion FAQ sections

## Setup

```bash
# Clone
git clone https://github.com/AjayTeotia/lms.git
cd lms

# Install
npm install

# Environment
cp .env.example .env.local
# Required:
# ARCJET_KEY
# STRIPE_SECRET_KEY
# STRIPE_WEBHOOK_SECRET
# DATABASE_URL (Neon Postgres)
# BETTER_AUTH_SECRET
# GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET
# AWS credentials for S3

# Database
npx prisma generate
npx prisma migrate dev

# Development
npm run dev
```

## License Notes

MIT License - free for commercial use.

## Limitations

- Very new (1 star) - unproven in production
- Complex multi-service setup required
- Requires: Neon Postgres, AWS S3, Stripe, Arcjet, GitHub OAuth
- Steep learning curve (tRPC, Better-Auth, Arcjet, Prisma)
- No email provider configured (add Resend for OTP)
- Video hosting requires S3/CDN setup