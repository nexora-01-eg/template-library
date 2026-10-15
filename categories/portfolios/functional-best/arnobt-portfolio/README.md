# Portfolio Landing Page 1 – Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Three.js, 3D Globe, Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF69B4)](https://www.framer.com/motion/)

A modern, single-page portfolio template built with **Next.js 14**, **React 18**, and **TypeScript**. It showcases a full landing experience with a hero, bento grid, projects, testimonials, experience, approach, and contact—with smooth animations, a 3D globe, and reusable UI components. Ideal for learning Next.js App Router, Framer Motion, Three.js/React Three Fiber, and Tailwind CSS.

**Live Demo:** [https://portfolio-ui-1.vercel.app/](https://portfolio-ui-1.vercel.app/)

![Screenshot 2026-03-07 at 11 13 18](https://github.com/user-attachments/assets/afee8403-1f15-4d76-b2f9-62b650c35732)
![Screenshot 2026-03-07 at 11 13 41](https://github.com/user-attachments/assets/7d8063d4-59ce-466a-ad29-5c093cf440a2)
![Screenshot 2026-03-07 at 11 13 59](https://github.com/user-attachments/assets/4c90e0f7-eb2f-447b-8f48-ab6207a4a6a5)
![Screenshot 2026-03-07 at 11 14 29](https://github.com/user-attachments/assets/e5b33c4b-96e1-4a91-a365-150b07aca9b6)
![Screenshot 2026-03-07 at 11 14 58](https://github.com/user-attachments/assets/b250193b-38f8-415b-aef9-dde7a3d23e69)
![Screenshot 2026-03-07 at 11 15 14](https://github.com/user-attachments/assets/2d681947-e476-428a-b929-17f5e0c7a792)

## Table of Contents

- [Project Overview](#project-overview)
- [Features & Functionalities](#features--functionalities)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Routes & Pages](#routes--pages)
- [Components Overview](#components-overview)
- [Data & Content](#data--content)
- [API & Backend](#api--backend)
- [Reusing Components](#reusing-components)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Overview

This repository is a **frontend-only** portfolio template. It has no custom backend or API—all content is driven by static data in `data/index.ts`. The app is a single scrollable page with section IDs for in-page navigation (#about, #projects, #testimonials, #contact). It uses the **Next.js App Router** (`app/`), **client components** where interactivity is needed, and **server-rendered** layout and metadata for SEO. The UI is built from modular components (Hero, Bento Grid, Projects, Testimonials, Experience, Approach, Footer) that you can reuse or remove in your own projects.

---

## Features & Functionalities

| Feature                | Description                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**               | Spotlight backgrounds, grid overlay, animated headline (word-by-word), tagline, and CTA button linking to #about.                           |
| **Floating Nav**       | Fixed top navigation that hides on scroll-down and reappears on scroll-up or near top; links to #about, #projects, #testimonials, #contact. |
| **Bento Grid (About)** | Responsive grid of cards: images, 3D globe (Three.js), tech stack labels, and a “Copy email” cell with Lottie confetti.                     |
| **Recent Projects**    | Project cards with 3D tilt on hover (Pin component), cover image, title, description, tech icons, and “Check Live Site” link.               |
| **Testimonials**       | Horizontally scrolling infinite carousel of client quotes plus a row of company logos.                                                      |
| **Experience**         | Grid of work experience cards with animated gradient borders (MovingBorders).                                                               |
| **Approach**           | Three phase cards; on hover, a canvas dot-matrix effect (WebGL shader) reveals and shows phase title + description.                         |
| **Footer**             | CTA heading, email button, copyright, and social icons.                                                                                     |
| **Theme**              | Dark/light/system via `next-themes` (ThemeProvider in `app/provider.tsx`).                                                                  |
| **SEO**                | Metadata (title, description, Open Graph, Twitter, keywords, favicon) in `app/layout.tsx`.                                                  |

---

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18, TypeScript 5.x
- **Styling:** Tailwind CSS 3.x, custom theme (e.g. `black-100`, `purple`, `white-100`)
- **Animation:** Framer Motion 11
- **3D / Globe:** Three.js, three-globe, @react-three/fiber, @react-three/drei
- **Effects:** Custom GLSL shader (CanvasRevealEffect), Lottie (react-lottie), SVG spotlights
- **Utilities:** clsx, tailwind-merge (`lib/utils.ts` – `cn()`), next-themes
- **Icons:** react-icons, lucide-react, @tabler/icons-react
- **Deployment:** Vercel (optional; `npm run deploy`)

---

## Project Structure

```bash
portfolio-ui-1/
├── app/
│   ├── layout.tsx          # Root layout: font, metadata, ThemeProvider, favicon
│   ├── page.tsx             # Home page: composes all sections (client)
│   ├── globals.css          # Tailwind + base styles, :root/.dark vars, .heading
│   ├── provider.tsx         # next-themes ThemeProvider (client)
│   └── global-error.jsx     # Root error boundary (own <html>/<body>)
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Grid.tsx             # About / bento grid section
│   ├── RecentProjects.tsx   # Projects section
│   ├── Clients.tsx          # Testimonials + company logos
│   ├── Experience.tsx       # Work experience cards
│   ├── Approach.tsx         # Three phase cards + canvas reveal
│   ├── Footer.tsx           # Contact + CTA + social
│   ├── MagicButton.tsx      # Button with conic-gradient border
│   └── ui/
│       ├── FloatingNavbar.tsx   # Scroll-aware fixed nav
│       ├── BentoGrid.tsx        # Bento layout + BentoGridItem (globe, copy-email, etc.)
│       ├── Spotlight.tsx        # SVG spotlight for hero
│       ├── TextGenerateEffect.tsx # Staggered word animation
│       ├── InfiniteCards.tsx     # Infinite horizontal testimonial scroll
│       ├── MovingBorders.tsx     # Animated border wrapper (Button + MovingBorder)
│       ├── Pin.tsx               # 3D tilt card (PinContainer, PinPerspective)
│       ├── GridGlobe.tsx         # Wrapper for Globe (dynamic import, no SSR)
│       ├── Globe.tsx             # Three-globe: arcs, points, rings
│       ├── GradientBg.tsx        # Animated gradient background
│       ├── CanvasRevealEffect.tsx # WebGL dot-matrix reveal
│       ├── HoverBorder.tsx       # Gradient border on hover/rotate
│       └── LayoutGrid.tsx        # Optional grid with expandable cards
├── data/
│   ├── index.ts             # navItems, gridItems, projects, testimonials, companies, workExperience, socialMedia
│   ├── globe.json           # GeoJSON for globe countries
│   └── confetti.json        # Lottie animation for copy-email
├── lib/
│   └── utils.ts             # cn() – class name merger (clsx + tailwind-merge)
├── public/                  # Static assets (images, SVGs, favicon)
├── .env.example             # Sentry and optional env vars
├── next.config.mjs          # Images, webpack (canvas external, .mjs)
├── tailwind.config.ts       # Theme, keyframes, bg-grid/bg-dot plugins
├── tsconfig.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or 20.x (LTS recommended)
- **npm** (or yarn/pnpm)

### Clone & Install

```bash
git clone https://github.com/your-username/portfolio-ui-1.git
cd portfolio-ui-1
npm install
```

### Environment setup

1. Copy the example env file:

   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add any required values (see [Environment Variables](#environment-variables)). The app runs without env vars; Sentry is optional.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The single page loads with all sections; use the top nav to jump to #about, #projects, #testimonials, #contact.

### Build for production

```bash
npm run build
npm run start
```

---

## Environment Variables

The project can run with **no environment variables**. All content is static. The following are **optional** and mainly for error monitoring (Sentry).

| Variable                 | Required | Description                                                                                                                             |
| ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `SENTRY_AUTH_TOKEN`      | No       | Sentry auth token for uploading source maps. Get it from [Sentry API Auth Tokens](https://sentry.io/settings/account/api/auth-tokens/). |
| `SENTRY_ORG`             | No       | Your Sentry organization slug (from dashboard URL).                                                                                     |
| `SENTRY_PROJECT`         | No       | Your Sentry project slug.                                                                                                               |
| `NEXT_PUBLIC_SENTRY_DSN` | No       | Sentry DSN for client-side error reporting. From [Project Keys](https://sentry.io/settings/[your-org]/projects/[your-project]/keys/).   |
| `NODE_ENV`               | No       | Usually set by Next.js (`development` / `production`).                                                                                  |

**How to get Sentry variables (optional):**

1. Create an account at [sentry.io](https://sentry.io).
2. Create a project (e.g. Next.js).
3. **Auth token:** Settings → Account → API → Auth Tokens → Create. Use for `SENTRY_AUTH_TOKEN`.
4. **Org & project:** From the URL `https://sentry.io/organizations/[org]/projects/[project]/` copy `org` and `project` into `SENTRY_ORG` and `SENTRY_PROJECT`.
5. **DSN:** Project → Settings → Client Keys (DSN). Copy into `NEXT_PUBLIC_SENTRY_DSN` if you want client-side reporting.

**Example `.env.local` (minimal – app works without these):**

```env
# Optional: Sentry (only if you integrate Sentry in the app)
# SENTRY_AUTH_TOKEN=your-token
# SENTRY_ORG=your-org
# SENTRY_PROJECT=your-project
# NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx
```

---

## Available Scripts

| Script     | Command          | Purpose                                        |
| ---------- | ---------------- | ---------------------------------------------- |
| **dev**    | `npm run dev`    | Start Next.js dev server (default port 3000).  |
| **build**  | `npm run build`  | Production build.                              |
| **start**  | `npm run start`  | Run production server (after `build`).         |
| **lint**   | `npm run lint`   | Run ESLint.                                    |
| **deploy** | `npm run deploy` | Deploy to Vercel production (`vercel --prod`). |

---

## Routes & Pages

This app has **one route**: the root `/` (home). There are no `/api/*` or other route segments.

- **`/`** – Renders `app/page.tsx`, which is a client component that stacks:
  - `FloatingNav` (fixed)
  - `Hero`
  - `Grid` (id="about")
  - `RecentProjects`
  - `Clients` (id="testimonials")
  - `Experience`
  - `Approach`
  - `Footer` (id="contact")

Navigation is in-page via hash links (`#about`, `#projects`, `#testimonials`, `#contact`). The layout and metadata are in `app/layout.tsx` (server); the single page is client-rendered for interactivity.

---

## Components Overview

| Component              | Role                                                                                                 | Key deps                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| **Hero**               | Tagline, spotlight SVGs, grid bg, TextGenerateEffect headline, CTA.                                  | Spotlight, TextGenerateEffect, MagicButton       |
| **Grid**               | Bento section; maps `gridItems` to BentoGridItem.                                                    | BentoGrid, BentoGridItem, data/gridItems         |
| **BentoGridItem**      | Single cell: optional images, globe (id=2), tech list (id=3), gradient + copy-email + Lottie (id=6). | GridGlobe, GradientBg, Lottie, MagicButton       |
| **RecentProjects**     | Project cards with PinContainer (3D tilt), image, title, description, tech icons.                    | Pin, data/projects                               |
| **Clients**            | Heading + InfiniteMovingCards (testimonials) + company logos.                                        | InfiniteCards, data/testimonials, data/companies |
| **Experience**         | Work cards with MovingBorders and thumbnail.                                                         | MovingBorders/Button, data/workExperience        |
| **Approach**           | Three cards; hover shows CanvasRevealEffect and phase text.                                          | CanvasRevealEffect, Framer Motion                |
| **Footer**             | CTA, email button, copyright, social icons.                                                          | MagicButton, data/socialMedia                    |
| **FloatingNav**        | Fixed nav; visibility from scroll direction (useScroll, useMotionValueEvent).                        | Framer Motion, Link                              |
| **MagicButton**        | Conic-gradient border button; optional icon left/right.                                              | —                                                |
| **Spotlight**          | SVG ellipse + blur for hero background.                                                              | cn                                               |
| **TextGenerateEffect** | Splits text into words; stagger animation; optional purple for words after 4th.                      | Framer Motion useAnimate                         |
| **InfiniteCards**      | Duplicates list for seamless horizontal scroll; direction/speed via CSS vars.                        | —                                                |
| **MovingBorders**      | Button + MovingBorder: gradient blob along path (useAnimationFrame).                                 | Framer Motion                                    |
| **Pin**                | PinContainer: 3D tilt on hover; PinPerspective: link + glow.                                         | Framer Motion                                    |
| **GridGlobe**          | Client-only Globe wrapper; sample arcs + config.                                                     | Globe (dynamic), Framer Motion                   |
| **Globe**              | Three-globe: hex polygons, arcs, points, rings.                                                      | Three, three-globe, R3F                          |
| **GradientBg**         | Animated radial blobs; optional pointer-follow.                                                      | —                                                |
| **CanvasRevealEffect** | Full-screen dot matrix via custom GLSL (R3F + ShaderMaterial).                                       | @react-three/fiber, Three                        |
| **HoverBorder**        | Wrapper with rotating gradient border when not hovered.                                              | Framer Motion                                    |
| **LayoutGrid**         | Grid of cards with expand-on-click overlay (optional reuse).                                         | MovingBorders, Framer Motion                     |

---

## Data & Content

All content is in **`data/index.ts`** (no CMS or backend):

- **navItems** – `{ name, link }[]` for FloatingNav.
- **gridItems** – Bento cells: `id`, `title`, `description`, `className`, `img`, `imgClassName`, `titleClassName`, `spareImg`.
- **projects** – `id`, `title`, `des`, `img`, `iconLists[]`, `link`.
- **testimonials** – `quote`, `name`, `title`.
- **companies** – `id`, `name`, `img`, `nameImg`.
- **workExperience** – `id`, `title`, `desc`, `className`, `thumbnail`.
- **socialMedia** – `id`, `img` (footer icons).

To customize the site, edit these arrays. For images/SVGs, place files in `public/` and reference as `/filename.svg`.

---

## API & Backend

This project has **no custom API or backend**. It is a static frontend:

- No `app/api/` routes.
- No server-side data fetching from external APIs (beyond what Next.js does for its own features).
- No database; content is in `data/index.ts` and static assets in `public/`.

To add a backend later, you could create Route Handlers under `app/api/` and call them from client components with `fetch` or a data library.

---

## Reusing Components

You can copy individual components into another Next.js (or React) project and wire them to your own data and styles.

### 1. MagicButton (conic border button)

Use anywhere you need a primary CTA with optional icon.

```tsx
import MagicButton from "@/components/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

<MagicButton
  title="Show my work"
  icon={<FaLocationArrow />}
  position="right"
  handleClick={() => console.log("clicked")}
  otherClasses="custom-class"
/>;
```

Ensure `lib/utils.ts` with `cn()` exists and Tailwind is set up (including any custom classes like `bg-slate-950`).

---

### 2. FloatingNav (scroll-aware nav)

Requires Framer Motion and nav items in the shape `{ name: string; link: string }[]`.

```tsx
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Link from "next/link";

const items = [
  { name: "About", link: "#about" },
  { name: "Contact", link: "#contact" },
];
<FloatingNav navItems={items} />;
```

---

### 3. InfiniteMovingCards (testimonials)

Pass an array of `{ quote, name, title }` and optional `direction` / `speed` / `pauseOnHover`.

```tsx
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";

const testimonials = [{ quote: "Great work!", name: "Jane", title: "CEO" }];
<InfiniteMovingCards
  items={testimonials}
  direction="right"
  speed="slow"
  pauseOnHover={true}
/>;
```

Include the `scroll` keyframe and `--animation-duration` / `--animation-direction` in your CSS (see `tailwind.config.ts`).

---

### 4. BentoGrid + BentoGridItem

Use for a responsive bento layout. Each item can have `id`, `title`, `description`, `className`, `img`, `imgClassName`, `titleClassName`, `spareImg`. Special behavior is keyed by `id` (e.g. 2 = globe, 3 = tech list, 6 = gradient + copy-email). For a new project, you can simplify BentoGridItem and remove globe/Lottie or adapt to your data.

```tsx
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";

<BentoGrid className="w-full py-20">
  {gridItems.map((item, i) => (
    <BentoGridItem key={i} {...item} />
  ))}
</BentoGrid>;
```

---

### 5. PinContainer (3D tilt card)

Wrap any card content for a 3D tilt and optional bottom link.

```tsx
import { PinContainer } from "@/components/ui/Pin";

<PinContainer title="Visit" href="https://example.com">
  <div className="p-4">
    <h2>Card title</h2>
    <p>Card body</p>
  </div>
</PinContainer>;
```

---

### 6. MovingBorders (animated border cards)

Use the exported `Button` as a wrapper for cards that should have the moving gradient border.

```tsx
import { Button } from "@/components/ui/MovingBorders";

<Button duration={10000} borderRadius="1.75rem" className="...">
  <div>Card content</div>
</Button>;
```

---

### 7. TextGenerateEffect (staggered words)

For a headline that reveals word-by-word.

```tsx
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

<TextGenerateEffect
  words="Your headline here"
  className="text-center text-4xl"
/>;
```

---

### 8. Theme (next-themes)

Wrap the app so dark/light/system works:

```tsx
import { ThemeProvider } from "@/app/provider";

<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>;
```

---

## Keywords

Portfolio, Next.js, React, TypeScript, App Router, Tailwind CSS, Framer Motion, Three.js, three-globe, React Three Fiber, bento grid, 3D globe, testimonials carousel, single-page application, landing page, SEO metadata, next-themes, dark mode, Vercel, frontend template, reusable components, educational project.

---

## Conclusion

This repo is a **frontend-only** portfolio template with a single page, static data, and no backend or API. It demonstrates the Next.js 14 App Router, client/server components, Framer Motion, Three.js-based globe, custom WebGL effects, and Tailwind-based layout and theming. You can run it with zero environment variables, customize content via `data/index.ts`, and reuse individual components (MagicButton, FloatingNav, InfiniteCards, BentoGrid, Pin, MovingBorders, TextGenerateEffect, etc.) in other projects by copying the component files and their dependencies (Framer Motion, R3F, Tailwind, `cn` utility). Use the structure and comments in the codebase as a learning reference for building similar landing pages.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). You may use, modify, and distribute the code in accordance with the license terms.

---

## Happy Coding! 🎉

This is an **open-source project** — you are welcome to use, extend, and improve it.

If you have questions or want to share what you’ve built, you can open an issue or reach out via my portfolio: [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
