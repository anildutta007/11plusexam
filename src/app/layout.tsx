import type { Metadata } from "next";
import { Fraunces, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
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
      className={`${fraunces.variable} ${nunitoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F8F3E8] text-[#1F2D28]">{children}</body>
    </html>
  );
}
