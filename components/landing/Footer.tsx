export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/5 pt-10 text-sm text-slate-300">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">PulseStack</p>
          <p className="max-w-md text-slate-400">Real-time analytics for e-commerce brands that need clarity without complexity.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-slate-300">
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#features">
            Features
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#dashboards">
            Dashboard
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#integrations">
            Integrations
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#pricing">
            Pricing
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#testimonials">
            Testimonials
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} PulseStack. All rights reserved.</p>
        <div className="flex gap-3 text-slate-400">
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#">
            Privacy
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#">
            Terms
          </a>
          <a className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
