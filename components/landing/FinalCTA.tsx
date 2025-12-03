import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-blue-600/15 p-10 text-center text-slate-100" id="cta">
      <Reveal className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">Get started</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to see PulseStack live?</h2>
        <p className="mx-auto max-w-2xl text-base text-slate-200">
          Launch a free 14-day trial and connect your store, ads, and payments. No engineers required.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            href="#pricing"
          >
            Start free trial
          </a>
          <a
            className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            href="#dashboards"
          >
            View live demo
          </a>
        </div>
      </Reveal>
    </section>
  );
}
