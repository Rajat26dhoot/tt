import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simulon.example"),
  title: {
    default: "Simulon Tech | Premium IT Solutions",
    template: "%s | Simulon Tech"
  },
  description:
    "Custom software, web, mobile, cloud, DevOps, AI/ML, API integration and blockchain development for ambitious teams.",
  keywords: [
    "IT solutions",
    "custom software development",
    "web development",
    "mobile app development",
    "cloud integration",
    "DevOps",
    "AI ML solutions"
  ],
  openGraph: {
    title: "Simulon Tech | Premium IT Solutions",
    description:
      "High-performance digital products, cloud platforms and AI-ready systems built for growth.",
    type: "website",
    locale: "en_US",
    url: "https://simulon.example"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#070914" }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
