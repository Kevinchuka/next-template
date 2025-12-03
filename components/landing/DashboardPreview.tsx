import { Reveal } from "./Reveal";

const metrics = [
  { label: "Store revenue", value: "$482,400", change: "+18%" },
  { label: "Conversion rate", value: "4.3%", change: "+0.4pp" },
  { label: "Paid ROAS", value: "4.8x", change: "+0.9" },
  { label: "Email contribution", value: "22%", change: "+5%" },
];

const performance = [
  { channel: "Meta Ads", spend: "$64k", revenue: "$182k", roas: "2.8x" },
  { channel: "Google Ads", spend: "$42k", revenue: "$133k", roas: "3.1x" },
  { channel: "Email", spend: "$9k", revenue: "$98k", roas: "10.8x" },
  { channel: "Affiliates", spend: "$6k", revenue: "$52k", roas: "8.6x" },
];

export function DashboardPreview() {
  return (
    <section className="space-y-8" id="dashboards">
      <div className="space-y-3 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-cyan-200/80">Live dashboard</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Decisions without digging</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base text-slate-300 sm:text-lg">
            A realistic snapshot of how PulseStack brings your store, payments, and marketing together.
          </p>
        </Reveal>
      </div>
      <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-xl shadow-cyan-500/10">
        <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-100">
              <div>
                <p className="text-sm text-slate-400">Realtime revenue</p>
                <p className="text-2xl font-semibold text-white">$42,180 today</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-200">+12% vs yesterday</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-100 transition hover:-translate-y-1 hover:border-cyan-400/40"
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="text-xl font-semibold text-white">{metric.value}</p>
                  <p className={`text-xs ${idx === 0 ? "text-emerald-200" : "text-cyan-200"}`}>{metric.change} vs last week</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 rounded-2xl border border-white/5 bg-black/40 p-4">
              <div className="flex items-center justify-between text-slate-100">
                <p className="text-sm text-slate-300">Attribution by channel</p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">Last 30 days</span>
              </div>
              <div className="space-y-2 text-sm text-slate-100">
                {performance.map((item) => (
                  <div
                    key={item.channel}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div>
                      <p className="font-semibold text-white">{item.channel}</p>
                      <p className="text-xs text-slate-400">Spend {item.spend} · Revenue {item.revenue}</p>
                    </div>
                    <span className="text-sm font-semibold text-cyan-200">{item.roas}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/15 via-indigo-500/10 to-slate-950 p-6 text-slate-100">
            <div className="mb-4 flex items-center justify-between text-sm">
              <p className="text-slate-200">Forecasted revenue</p>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">AI assisted</span>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm text-white">
                  <span>Next 30 days</span>
                  <span className="font-semibold">$1.2M</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400" />
                </div>
                <p className="text-xs text-cyan-100/80">Projected with cohort retention and paid efficiency.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm text-slate-200">
                {[
                  { label: "New customers", value: "+4.1k" },
                  { label: "Repeat orders", value: "+2.3k" },
                  { label: "Subscriptions", value: "+980" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 p-3 transition hover:-translate-y-1 hover:border-cyan-400/40">
                    <p className="text-xs text-slate-300">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Decision feed</p>
                <ul className="mt-2 space-y-2">
                  {["Pause low-ROAS Meta set", "Shift $8k to Google PMax", "Trigger winback flow for churn risk"].map((item) => (
                    <li key={item} className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 transition hover:-translate-y-1 hover:bg-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
