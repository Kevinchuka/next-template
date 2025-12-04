import { InteractiveCard } from "./InteractiveCard";

const testimonials = [
  {
    name: "Arianna K.",
    role: "Esports Analyst",
    quote: "Keys arrived before I even closed my tab. The automated checks mean my squad never waits for codes to activate.",
  },
  {
    name: "Noah P.",
    role: "Streamer & Reviewer",
    quote: "I trust KeyForge Market for sponsored drops—pricing is transparent and every seller is verified.",
  },
  {
    name: "Jordan R.",
    role: "MMO Guild Leader",
    quote: "Their fraud protection saved my purchase once; support cleared it in minutes. It’s my go-to for every release.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Testimonials</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Thousands of Happy Gamers</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          Real stories from players who count on instant delivery, secure checkouts, and reliable activation worldwide.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <InteractiveCard
            key={testimonial.name}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-black/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_95px_rgba(56,189,248,0.22)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(45,212,191,0.08),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(168,85,247,0.1),transparent_30%)]" />
            <div className="relative z-10 flex h-full flex-col gap-4">
              <p className="text-lg leading-relaxed text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-auto">
                <p className="text-base font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-300">{testimonial.role}</p>
              </div>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
