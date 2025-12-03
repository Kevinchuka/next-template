"use client";

import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";

export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 via-slate-900 to-black p-8 shadow-2xl sm:p-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1f2937,transparent_45%)]" />
      </div>
      <div className={`relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 ease-out`}>
        <div className="space-y-8 text-white">
          <Reveal className="space-y-6" delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-cyan-100/90">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.25)]" />
              Live analytics for modern commerce teams
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Turn your e-commerce data into clear decisions.
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              PulseStack connects your store, marketing, and payments into one real-time analytics dashboard — so you always know what’s driving your revenue.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-cyan-500 px-5 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-1 hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                href="#pricing"
              >
                Start free trial
              </a>
              <a
                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                href="#dashboards"
              >
                View live demo
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <div className="grid grid-cols-2 gap-6 rounded-2xl border border-white/5 bg-white/5 p-4 text-sm text-slate-100 sm:max-w-md">
              {["Revenue today", "Conversion rate", "Repeat customers", "AOV"].map((label, idx) => (
                <div key={label} className="space-y-1 rounded-lg bg-white/5 p-3 transition hover:-translate-y-1 hover:bg-white/10">
                  <p className="text-xs text-slate-300">{label}</p>
                  <p className="text-lg font-semibold text-white">
                    {[
                      "$42,180",
                      "4.3%",
                      "38%",
                      "$118",
                    ][idx]}
                  </p>
                  <p className="text-[11px] text-cyan-200/80">{["+12% vs yesterday", "+0.4pp WoW", "+6% MoM", "+8% MoM"][idx]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <div className="relative isolate rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-cyan-500/10">
            <div className="absolute inset-x-6 top-6 h-16 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-2xl" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-slate-100">
                <div>
                  <p className="text-sm text-slate-400">Live revenue</p>
                  <p className="text-2xl font-semibold text-white">$482,400</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  +18% this week
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-sm text-slate-200">
                {["Campaigns", "Channels", "Regions"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center font-medium transition hover:-translate-y-1 hover:border-cyan-400/50 hover:text-white"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-black/40 p-4">
                {["Meta Ads", "Google Ads", "Email", "Affiliates"].map((channel, idx) => (
                  <div key={channel} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 transition hover:-translate-y-1 hover:bg-white/10">
                    <div>
                      <p className="font-semibold text-white">{channel}</p>
                      <p className="text-xs text-slate-400">{["$182k", "$133k", "$98k", "$52k"][idx]} revenue</p>
                    </div>
                    <span className={`${idx === 0 ? "text-emerald-300" : idx === 1 ? "text-cyan-300" : "text-purple-300"} text-sm font-semibold`}>
                      {idx === 0 ? "+22%" : idx === 1 ? "+9%" : idx === 2 ? "+14%" : "+6%"}
                    </span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 p-4 text-slate-100">
                <p className="text-sm text-slate-300">Forecast</p>
                <p className="text-xl font-semibold text-white">$1.2M next 30 days</p>
                <p className="text-xs text-cyan-100/80">Powered by unified marketing + payment signals.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
