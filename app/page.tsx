import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Features } from "@/components/landing/Features";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Integrations } from "@/components/landing/Integrations";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-5 pb-16 pt-12 sm:px-8 lg:px-12">
        <Hero />
        <Features />
        <DashboardPreview />
        <Integrations />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-8 lg:px-12">
        <Footer />
      </div>
    </div>
  );
}
