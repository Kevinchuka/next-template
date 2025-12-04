import Image from "next/image";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholders";
import { InteractiveCard } from "./InteractiveCard";
import { MagneticButton } from "./MagneticButton";

const features = [
  {
    title: "Fast Delivery",
    description: "Automated dispatch systems deliver your activation key in seconds after payment.",
    accent: "from-teal-400/40 to-emerald-400/30",
    badge: "Instant Delivery. Global Activation.",
    image: PLACEHOLDER_IMAGES.featureFast,
  },
  {
    title: "Global Keys",
    description: "Worldwide coverage for Steam, Epic, Origin, and Uplay with intelligent region checks.",
    accent: "from-purple-500/40 to-indigo-500/30",
    badge: "Verified Sellers. Secure Purchases.",
    image: PLACEHOLDER_IMAGES.featureGlobal,
  },
  {
    title: "Trusted Sellers",
    description: "Curated partners, fraud detection, and 24/7 monitoring keep every purchase protected.",
    accent: "from-cyan-500/40 to-sky-500/30",
    badge: "Thousands of Happy Gamers.",
    image: PLACEHOLDER_IMAGES.featureTrusted,
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Why Choose Us</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Premium marketplace benefits designed for gamers</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          KeyForge Market blends lightning-fast delivery, transparent pricing, and verified sellers so you never have to second-guess your next game drop.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <InteractiveCard
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(45,212,191,0.25)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent}`} />
            <div className="absolute inset-0">
              <Image
                src={feature.image}
                alt={`${feature.title} illustration`}
                fill
                className="object-cover opacity-30 mix-blend-screen"
              />
            </div>
            <div className="relative z-10 flex h-full flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-teal-100 shadow-[0_0_30px_rgba(0,0,0,0.4)]">
                {feature.badge}
              </span>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200">{feature.description}</p>
              <div className="mt-auto">
                <MagneticButton variant="ghost" className="underline-animate">
                  Get the Best Deals
                </MagneticButton>
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
