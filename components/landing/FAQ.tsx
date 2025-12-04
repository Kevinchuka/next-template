"use client";

import { useReveal } from "./useReveal";

const faqs = [
  {
    question: "How fast will I receive my key?",
    answer: "Delivery is automated and typically arrives within seconds of payment confirmation. You can also view it instantly in your KeyForge dashboard.",
  },
  {
    question: "Are the activation keys region locked?",
    answer: "We highlight region and platform compatibility on every card. Smart filters help you avoid mismatched keys for Steam, Epic, Origin, and Uplay.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support major cards and secure processors with anti-fraud screening to protect every transaction.",
  },
  {
    question: "How are sellers verified?",
    answer: "We run ongoing compliance checks, rating audits, and transaction monitoring. Only vetted partners list on KeyForge Market.",
  },
  {
    question: "Can I get help if a key doesn’t work?",
    answer: "Absolutely. Our support team can re-validate or replace invalid keys quickly after reviewing your activation attempt.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="space-y-8">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">FAQ</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to know</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          Answers to the most common questions about secure purchases, delivery times, and activation confidence.
        </p>
      </div>
      <div ref={ref} className={`reveal ${isVisible ? "reveal-visible" : ""} divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]`}>
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group cursor-pointer px-6 py-5 transition duration-300 hover:bg-white/5"
          >
            <summary className="flex items-center justify-between text-lg font-semibold text-white">
              {faq.question}
              <span className="text-teal-300 transition duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-slate-200">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
