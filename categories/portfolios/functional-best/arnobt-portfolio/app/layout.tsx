import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

/** Google Inter font, latin subset only for smaller bundle. */
const inter = Inter({ subsets: ["latin"] });

/** Production base URL for canonical links, Open Graph, and absolute asset URLs. */
const siteUrl = "https://portfolio-ui-1.vercel.app";

/** SEO and social sharing: title, description, Open Graph, Twitter cards, icons, robots. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "John Doe's Portfolio",
    template: "%s | John Doe",
  },
  description:
    "Modern & Stylish Portfolio — Next.js developer. Projects, experience, and contact. Transforming concepts into seamless user experiences.",
  keywords: [
    "John Doe",
    "portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "frontend developer",
    "web developer",
    "UI/UX",
    "developer portfolio",
    "demo portfolio",
  ],
  authors: [
    {
      name: "Arnob Mahmud",
      url: "https://www.arnobmahmud.com",
    },
  ],
  creator: "John Doe",
  publisher: "John Doe",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "John Doe's Portfolio",
    title: "John Doe's Portfolio",
    description:
      "Modern & Stylish Portfolio — Next.js developer. Projects, experience, and contact.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe's Portfolio",
    description:
      "Modern & Stylish Portfolio — Next.js developer. Projects, experience, and contact.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
