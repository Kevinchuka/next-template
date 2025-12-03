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
  title: "PulseStack — Real-Time Analytics for E-Commerce Brands",
  description:
    "PulseStack helps Shopify and WooCommerce brands track revenue, customers, and marketing performance in one real-time dashboard.",
  openGraph: {
    title: "PulseStack — Real-Time Analytics for E-Commerce Brands",
    description:
      "PulseStack helps Shopify and WooCommerce brands track revenue, customers, and marketing performance in one real-time dashboard.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
