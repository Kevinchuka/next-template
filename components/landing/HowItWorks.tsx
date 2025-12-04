import { InteractiveCard } from "./InteractiveCard";

const steps = [
  {
    title: "Choose",
    description: "Pick your game edition, region, and platform with real-time availability checks.",
    accent: "bg-gradient-to-r from-teal-400/30 to-cyan-400/30",
  },
  {
    title: "Pay",
    description: "Secure checkout with fraud protection and instant verification of your purchase.",
    accent: "bg-gradient-to-r from-purple-500/30 to-pink-500/30",
  },
  {
    title: "Receive Instantly",
    description: "Your activation key drops into your inbox and dashboard within seconds, ready to redeem.",
    accent: "bg-gradient-to-r from-blue-500/30 to-emerald-400/30",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">How It Works</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Three steps to unlock your next adventure</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          From cart to activation in moments—every step is optimized for speed, clarity, and confidence.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <InteractiveCard
            key={step.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(168,85,247,0.25)]"
          >
            <div className={`absolute inset-0 ${step.accent}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 text-teal-100">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-lg font-bold text-white shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {index + 1}
                </span>
                <p className="text-sm uppercase tracking-widest">{step.title}</p>
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-200">{step.description}</p>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
