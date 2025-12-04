"use client";

import { MagneticButton } from "./MagneticButton";
import { useReveal } from "./useReveal";

export function FinalCTA() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""}`}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/40 via-teal-500/30 to-cyan-500/30 px-8 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.1),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.1),transparent_30%)]" />
        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Ready to play</p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl">Unlock your next adventure today</h3>
            <p className="text-lg text-slate-100">
              Secure your deal, redeem instantly, and jump straight into the action with KeyForge Market’s optimized delivery.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 lg:justify-end">
            <MagneticButton onClick={() => document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" })}>
              Start Saving Now
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            >
              Browse Game Keys
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
