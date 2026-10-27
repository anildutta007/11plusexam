import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "11+ Compass | UK Grammar School Guide, Postcode & Catchment Explorer",
  description: "Comprehensive guide for UK parents navigating 11+ grammar school entrance exams, catchment radius calculations, cut-off scores, housing benchmarks, and preparation strategies.",
  keywords: ["11 plus", "grammar schools", "11+ exam", "catchment area", "GL assessment", "CSSE", "Sutton SET", "Kent test", "grammar school cut-off scores"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
