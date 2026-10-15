import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Three.js + Next.js',
  description: 'A 3D web app with Three.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body className="bg-gray-900 text-white">
              {/* Header */}
              <header className="fixed top-0 left-0 w-full p-4 bg-gray-800 z-50">
                  <nav className="flex justify-between items-center max-w-7xl mx-auto">
                      <a href="/" className="text-lg font-bold hover:underline">
                          Home
                      </a>
                      <a href="/about" className="text-lg font-bold hover:underline">
                          About
                      </a>
                  </nav>
              </header>

              {/* Main Content */}
              <main className="mt-16">{children}</main>

              {/* Footer */}
              <footer className="py-4 bg-gray-800 text-center mt-auto">
                  <p>© 2025 Three.js + Next.js Project</p>
              </footer>
          </body>
      </html>
  );
}