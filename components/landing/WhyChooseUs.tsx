import { InteractiveCard } from "./InteractiveCard";
import { MagneticButton } from "./MagneticButton";

const features = [
  {
    title: "Fast Delivery",
    description: "Automated dispatch systems deliver your activation key in seconds after payment.",
    accent: "from-teal-400/40 to-emerald-400/30",
    badge: "Instant Delivery. Global Activation.",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.3),transparent_35%),linear-gradient(135deg,rgba(45,212,191,0.2),rgba(10,10,10,0.9))]",
  },
  {
    title: "Global Keys",
    description: "Worldwide coverage for Steam, Epic, Origin, and Uplay with intelligent region checks.",
    accent: "from-purple-500/40 to-indigo-500/30",
    badge: "Verified Sellers. Secure Purchases.",
    gradient:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.35),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.35),transparent_35%),linear-gradient(160deg,rgba(12,18,45,0.95),rgba(45,212,191,0.2))]",
  },
  {
    title: "Trusted Sellers",
    description: "Curated partners, fraud detection, and 24/7 monitoring keep every purchase protected.",
    accent: "from-cyan-500/40 to-sky-500/30",
    badge: "Thousands of Happy Gamers.",
    gradient:
      "bg-[radial-gradient(circle_at_20%_50%,rgba(244,114,182,0.35),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(45,212,191,0.3),transparent_35%),linear-gradient(150deg,rgba(30,41,59,0.95),rgba(168,85,247,0.22))]",
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
            <div className={`absolute inset-0 opacity-70 mix-blend-overlay ${feature.gradient}`} />
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
