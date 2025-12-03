import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "PulseStack replaced four spreadsheets and two dashboards. Now our team debates strategy instead of fighting over numbers.",
    name: "Maya Flores",
    role: "Founder, Northwind Supply",
  },
  {
    quote: "The cohort view finally shows which campaigns actually lead to repeat revenue. We reallocated budget in a week and saw a 14% lift.",
    name: "Khalil Romero",
    role: "Head of Growth, Lumos Home",
  },
  {
    quote: "Setup took less than an hour. The live revenue tile in our morning standups keeps everyone aligned on what’s working right now.",
    name: "Jessie Park",
    role: "Ecommerce Manager, Harbor & Co",
  },
];

export function Testimonials() {
  return (
    <section className="space-y-8 text-slate-100" id="testimonials">
      <div className="space-y-3 text-center">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-cyan-200/80">Testimonials</p>
        </Reveal>
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by operators</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-base text-slate-300 sm:text-lg">
            Teams across Shopify and WooCommerce rely on PulseStack for reliable, real-time analytics.
          </p>
        </Reveal>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, idx) => (
          <Reveal key={testimonial.name} delay={idx * 80}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/5 bg-white/5 p-6 text-left shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <p className="text-base text-slate-100">“{testimonial.quote}”</p>
              <div className="mt-4 space-y-1 text-sm">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-slate-300">{testimonial.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
