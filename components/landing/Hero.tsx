"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholders";
import { MagneticButton } from "./MagneticButton";
import { useReveal } from "./useReveal";

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className={`reveal relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-950 to-black px-6 py-16 shadow-2xl sm:px-12 lg:px-16 ${isVisible ? "reveal-visible" : ""}`}
      style={{
        transform: loaded ? "translateY(0)" : "translateY(20px)",
        opacity: loaded ? 1 : 0,
      }}
    >
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_30%)]" />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-teal-400/20 bg-white/5 px-4 py-2 text-sm font-medium text-teal-100 shadow-[0_10px_50px_rgba(45,212,191,0.2)]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-purple-500 to-indigo-600 text-sm font-bold text-slate-900 shadow-[0_0_20px_rgba(45,212,191,0.4)]">
              KF
            </span>
            <span>Instant Delivery. Global Activation.</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Unlock top PC games with lightning-fast digital keys.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
              KeyForge Market is the cyberpunk marketplace built for gamers who demand trusted deals, verified sellers, and secure purchases across Steam, Epic, Origin, and Uplay.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton onClick={() => document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" })}>
              Browse Game Keys
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}
            >
              Why Choose Us?
            </MagneticButton>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
              Verified Sellers. Secure Purchases.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              Thousands of Happy Gamers.
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-16 w-16 rounded-full bg-teal-400/30 blur-xl" />
          <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-purple-400/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/80 via-slate-900 to-black shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <Image
              src={PLACEHOLDER_IMAGES.hero}
              alt="Futuristic gamer workspace illuminated with neon lights"
              width={1200}
              height={720}
              className="h-full w-full min-h-[360px] object-cover opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,0.25),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.22),transparent_35%),linear-gradient(120deg,rgba(45,212,191,0.35),transparent_45%,rgba(168,85,247,0.3))]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
              <div className="text-sm text-slate-200">
                <p className="font-semibold text-white">Live Drop Rates</p>
                <p className="text-xs text-slate-300">Surge pricing detected — grab the best deals now.</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Up to 72% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
