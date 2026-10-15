# 🚀 Shadcn/ui landing

A modern, fast, and user-friendly landing page built with cutting-edge frontend technologies. Perfect for developers who want to kickstart their projects with a solid foundation.

<div style="display: flex; justify-content: center; gap: 20px;">
  <img src="https://github.com/user-attachments/assets/c10a943f-efa8-4024-b0bb-5eca2402f52e" alt="Node.js" width="400">
  <img src="https://github.com/user-attachments/assets/c79c7102-3968-4e04-9221-22560e0cabab" alt="JavaScript" width="400">
</div>

## 🌐 Live Demo

Check out the live demo: [View Demo](https://nextjs-shadcn-landing.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://nextjs-shadcn-landing.vercel.app)

## ✨ Features

- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Clean and intuitive interface with smooth animations
- ⚡ **Lightning Fast** - Optimized for speed with Next.js
- 🎯 **Type-Safe** - Built with TypeScript for better development experience
- 🎨 **shadcn/ui Starter Set** - Includes reusable primitives (button, badge, dropdown-menu, navigation-menu)

## 🌗 Theme Provider + Semantic Tokens

This project uses the standard shadcn theme setup with `next-themes`:

- `ThemeProvider` wrapper in `src/app/layout.tsx` with:
  - `attribute="class"`
  - `defaultTheme="system"`
  - `enableSystem`
  - `disableTransitionOnChange`
- `darkMode: ["class"]` enabled in `tailwind.config.ts`
- CSS variables defined in `src/app/globals.css` for light (`:root`) and dark (`.dark`) themes.

Semantic tokens available for Tailwind utilities include:

- `background`, `foreground`
- `card`, `card-foreground`
- `popover`, `popover-foreground`
- `primary`, `primary-foreground`
- `secondary`, `secondary-foreground`
- `muted`, `muted-foreground`
- `accent`, `accent-foreground`
- `destructive`, `destructive-foreground`
- `border`, `input`, `ring`
- `chart-1` to `chart-5`

Example usage:

```tsx
<section className="bg-background text-foreground border-border">
  <h2 className="text-primary">Semantic theme token example</h2>
  <p className="text-muted-foreground">
    Automatically adapts to light/dark mode.
  </p>
</section>
```

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/anibalalpizar/nextjs-shadcn-landing.git
```

2. Install dependencies:

```bash
cd nextjs-shadcn-landing
npm install
```

## 🚀 Usage

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 💻 Code Examples

### Component Usage

```tsx
import { Button } from "@/components/ui/button"

function HeroSection() {
  return (
    <section className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
        Launch faster
      </p>
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Welcome to our landing page
      </h1>
      <p className="max-w-xl text-muted-foreground">
        Start building something amazing.
      </p>
      <Button>Get Started</Button>
    </section>
  )
}
```

## 🛠️ Tech Stack

Our landing page is built with modern frontend technologies:

- [![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) - React framework for production
- [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) - Type-safe JavaScript
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) - Utility-first CSS framework
- [![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=react&logoColor=white)](https://ui.shadcn.com/) - Re-usable components

## 📊 Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── fonts/             # Font configurations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page composition
│   ├── components/
│   │   ├── sections/         # Landing sections + section subcomponents
│   │   ├── ui/               # shadcn/ui components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   └── navigation-menu.tsx
│   │   └── theme-provider.tsx
│   ├── lib/                  # Utility functions
│   └── types/                # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

⭐️ If you found this project helpful, please give it a star!
