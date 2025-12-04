import { InteractiveCard } from "./InteractiveCard";
import { MagneticButton } from "./MagneticButton";

const deals = [
  {
    title: "Cyber Odyssey Deluxe",
    discount: "68% OFF",
    price: "$39.99 → $12.99",
    platform: "Steam Global",
    gradient:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.4),transparent_35%),radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.35),transparent_35%),linear-gradient(135deg,rgba(10,14,35,0.95),rgba(45,212,191,0.25))]",
  },
  {
    title: "Legends of Orion",
    discount: "55% OFF",
    price: "$59.99 → $26.99",
    platform: "Epic Worldwide",
    gradient:
      "bg-[radial-gradient(circle_at_25%_40%,rgba(56,189,248,0.4),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.35),transparent_35%),linear-gradient(145deg,rgba(17,24,39,0.95),rgba(56,189,248,0.25))]",
  },
  {
    title: "Eclipse Vanguard",
    discount: "62% OFF",
    price: "$44.99 → $16.99",
    platform: "Origin Global",
    gradient:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.35),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(45,212,191,0.35),transparent_35%),linear-gradient(155deg,rgba(15,23,42,0.95),rgba(244,114,182,0.22))]",
  },
  {
    title: "Neon Drift Horizon",
    discount: "70% OFF",
    price: "$49.99 → $14.99",
    platform: "Uplay Worldwide",
    gradient:
      "bg-[radial-gradient(circle_at_20%_60%,rgba(34,211,238,0.35),transparent_35%),radial-gradient(circle_at_75%_30%,rgba(168,85,247,0.35),transparent_35%),linear-gradient(130deg,rgba(12,14,35,0.95),rgba(34,211,238,0.25))]",
  },
];

export function PopularDeals() {
  return (
    <section id="deals" className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Popular Deals</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Flash sales on the games everyone is talking about</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          Locked-in pricing backed by instant delivery and dynamic validation so your key works the moment you redeem it.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {deals.map((deal) => (
          <InteractiveCard
            key={deal.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_95px_rgba(94,234,212,0.25)]"
          >
            <div className={`relative h-48 overflow-hidden ${deal.gradient}`} aria-hidden>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                {deal.discount}
              </span>
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div>
                <p className="text-sm uppercase tracking-wide text-teal-200">{deal.platform}</p>
                <h3 className="text-xl font-semibold text-white">{deal.title}</h3>
              </div>
              <p className="text-lg font-bold text-teal-100">{deal.price}</p>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Instant Delivery</span>
                <span className="text-purple-200">Trusted seller</span>
              </div>
              <MagneticButton className="w-full justify-center text-center" aria-label={`Browse deal for ${deal.title}`}>
                Browse Game Keys
              </MagneticButton>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
