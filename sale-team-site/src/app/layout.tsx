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
  title: "Sale Team · Revenue Acceleration Studio",
  description:
    "Sale Team partners with B2B founders to design repeatable revenue engines, optimize deal cycles, and scale resilient go-to-market teams.",
  metadataBase: new URL("https://agentic-9ea34ee6.vercel.app"),
  openGraph: {
    title: "Sale Team · Revenue Acceleration Studio",
    description:
      "Strategic sales playbooks, RevOps intelligence, and enablement to help B2B teams win their next stage of growth.",
    url: "https://agentic-9ea34ee6.vercel.app",
    siteName: "Sale Team",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sale Team · Revenue Acceleration Studio",
    description:
      "Strategic sales playbooks, RevOps intelligence, and enablement to help B2B teams win their next stage of growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}>{children}</body>
    </html>
  );
}
