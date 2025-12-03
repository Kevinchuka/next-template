import { Reveal } from "./Reveal";

const features = [
  {
    title: "Unified revenue analytics",
    description:
      "All orders, refunds, and subscriptions stitched together with marketing spend to show true net revenue.",
  },
  {
    title: "Customer cohorts that make sense",
    description:
      "Understand who buys again, which channels create loyal customers, and where lifetime value really comes from.",
  },
  {
    title: "See what every campaign is really worth",
    description:
      "Multi-touch attribution across ads, email, and affiliates so you can reinvest in the channels that convert.",
  },
  {
    title: "Email + ads performance in one place",
    description:
      "Monitor Klaviyo, Meta, and Google together with revenue to keep teams aligned around the same targets.",
  },
];

export function Features() {
  return (
    <section className="space-y-10 text-slate-100" id="features">
      <div className="space-y-3 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-cyan-200/80">Features</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for e-commerce operators</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base text-slate-300 sm:text-lg">
            Track every signal from your store to your ad spend with a single, trustworthy view of performance.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <Reveal key={feature.title} delay={idx * 80}>
            <div className="h-full rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-200">
                <span className="text-lg font-semibold">0{idx + 1}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
              <p className="mt-3 text-sm text-slate-300">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
