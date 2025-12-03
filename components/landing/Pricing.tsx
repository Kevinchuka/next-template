import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Starter",
    price: "$69",
    period: "/mo",
    popular: false,
    features: ["Up to $50k monthly revenue", "Core dashboards", "Email + ads reporting", "Slack alerts"],
  },
  {
    name: "Growth",
    price: "$149",
    period: "/mo",
    popular: true,
    features: ["Up to $250k monthly revenue", "Attribution + cohorts", "Forecasting", "Priority support"],
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    popular: false,
    features: ["Unlimited revenue", "Advanced roles + SSO", "Whiteglove onboarding", "Dedicated CSM"],
  },
];

export function Pricing() {
  return (
    <section className="space-y-8 text-slate-100" id="pricing">
      <div className="space-y-3 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-cyan-200/80">Pricing</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Plans that scale with you</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base text-slate-300 sm:text-lg">No setup fees. Cancel anytime.</p>
        </Reveal>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier, idx) => (
          <Reveal key={tier.name} delay={idx * 80}>
            <div
              className={`flex h-full flex-col rounded-2xl border ${
                tier.popular ? "border-cyan-400/50" : "border-white/5"
              } bg-white/5 p-6 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-1 hover:border-cyan-400/60`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  {tier.popular && (
                    <span className="mt-2 inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-100">
                      Most popular
                    </span>
                  )}
                </div>
                <div className="text-right text-white">
                  <p className="text-3xl font-semibold">{tier.price}</p>
                  <p className="text-sm text-slate-300">{tier.period}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-200">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                className={`mt-6 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 ${
                  tier.popular
                    ? "bg-cyan-500 text-slate-900 hover:-translate-y-1 hover:bg-cyan-400"
                    : "border border-white/10 text-white hover:-translate-y-1 hover:border-cyan-400/60"
                }`}
                href="#cta"
              >
                Choose {tier.name}
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
