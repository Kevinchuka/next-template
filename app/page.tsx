import type { Metadata } from "next";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PopularDeals } from "@/components/landing/PopularDeals";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";

export const metadata: Metadata = {
  title: "KeyForge Market | Premium Digital Game Keys",
  description:
    "KeyForge Market is the trusted marketplace for instant digital game keys on Steam, Epic, Origin and Uplay with verified sellers and secure purchases.",
  openGraph: {
    title: "KeyForge Market | Premium Digital Game Keys",
    description:
      "Unlock top PC games with instant delivery and global activation from verified sellers at KeyForge Market.",
    url: "https://keyforgemarket.example.com",
    siteName: "KeyForge Market",
  },
  twitter: {
    card: "summary_large_image",
    title: "KeyForge Market | Premium Digital Game Keys",
    description: "Instant Delivery. Global Activation. Verified Sellers. Secure Purchases.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.1),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.1),transparent_20%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.08),transparent_25%)]" />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-14 sm:px-10 lg:py-20">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
            <span>Verified Sellers. Secure Purchases.</span>
          </div>
          <a className="underline-animate text-teal-200" href="#deals">
            Browse Game Keys
          </a>
        </div>
        <Hero />
        <WhyChooseUs />
        <PopularDeals />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
