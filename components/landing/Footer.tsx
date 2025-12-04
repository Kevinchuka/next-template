const navigation = [
  { label: "Hero", href: "#hero" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Deals", href: "#deals" },
  { label: "How It Works", href: "#how" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Discord", href: "https://discord.com" },
  { label: "Twitch", href: "https://twitch.tv" },
];

export function Footer() {
  return (
    <footer className="mt-20 rounded-3xl border border-white/10 bg-black/50 p-8 text-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-purple-500 to-indigo-600 text-base font-bold text-slate-900 shadow-[0_0_25px_rgba(45,212,191,0.45)]">
              KF
            </span>
            <div>
              <p className="text-lg font-semibold text-white">KeyForge Market</p>
              <p className="text-sm text-slate-300">Instant Delivery. Global Activation.</p>
            </div>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            A trusted, fast, automated marketplace for Steam, Epic, Origin and Uplay keys. Verified sellers. Secure purchases.
          </p>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} KeyForge Market. All rights reserved.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-white">Navigate</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a className="underline-animate text-slate-200" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <a className="underline-animate text-slate-200" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
