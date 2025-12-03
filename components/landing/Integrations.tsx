import { Reveal } from "./Reveal";

const integrations = ["Shopify", "WooCommerce", "Stripe", "Klaviyo", "Meta Ads", "Google Ads"];

export function Integrations() {
  return (
    <section className="space-y-8 text-slate-100" id="integrations">
      <div className="space-y-3 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-cyan-200/80">Integrations</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Connect in minutes</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base text-slate-300 sm:text-lg">
            PulseStack pairs your storefront, payments, and marketing tools to keep analytics always in sync.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {integrations.map((tool, idx) => (
          <Reveal key={tool} delay={idx * 60}>
            <div className="flex h-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500/30 via-indigo-500/25 to-blue-500/30" />
                <span>{tool}</span>
              </div>
              <span className="text-xs text-cyan-200">Connected</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
