"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

// Class tracks displayed as cards in the "Classes" section
const classTracks = [
  {
    title: "Salsa Roots",
    subtitle: "NY & LA Style fundamentals",
    description:
      "From your first basic step to traveling turns, coached by Puerto Rican and Colombian pros who teach in plain American English.",
    schedule: "Tuesdays & Thursdays • 6:00 PM",
    focus: "Beginner friendly · Musicality · Partner work basics",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bachata Elevate",
    subtitle: "Modern, sensual & footwork drills",
    description:
      "Unlock smooth body movement, elegant patterns, and timing with mentors who dance on world stages across Mexico and the U.S.",
    schedule: "Wednesdays • 7:15 PM",
    focus: "Intermediate · Body movement · Social dance confidence",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Latin Fusion Performance",
    subtitle: "Show-ready choreography & stage craft",
    description:
      "Blend Afro-Caribbean rhythms with hip-hop lines. Perfect for corporate events, weddings, or simply owning the spotlight.",
    schedule: "Saturdays • 11:00 AM",
    focus: "Advanced · Team piece · Costuming guidance",
    image:
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=900&q=80",
  },
];

// Pricing tiers for membership options
const pricing = [
  {
    name: "Starter",
    price: "$79",
    cadence: "per month",
    features: [
      "4 classes / month in any style",
      "Friendly studio concierge to help you choose tracks",
      "U.S. holiday-friendly schedule",
    ],
    badge: "New to dance",
  },
  {
    name: "Signature",
    price: "$139",
    cadence: "per month",
    features: [
      "Unlimited group classes",
      "Monthly skill check-ins with Latin American coaches",
      "Guest passes for friends visiting from out of town",
    ],
    badge: "Most popular",
  },
  {
    name: "Spotlight Private",
    price: "$329",
    cadence: "per month",
    features: [
      "4 private sessions with a lead choreographer",
      "Custom playlists and practice videos",
      "Showcase filming & feedback for U.S.-based auditions",
    ],
    badge: "Performance ready",
  },
];

// Social proof quotes from U.S.-based dancers
const testimonials = [
  {
    name: "Taylor M.",
    quote:
      "I finally learned salsa counts without feeling lost. The instructors translate every move into clear steps—no confusion, just dancing.",
    location: "Austin, TX",
  },
  {
    name: "Jordan P.",
    quote:
      "Classes feel like a mini-vacation to the Caribbean, but the schedule fits my 9–5. The Latin coaches bring the energy every single time.",
    location: "Seattle, WA",
  },
  {
    name: "Avery R.",
    quote:
      "The Signature plan keeps me consistent, and the check-ins make a huge difference. I booked my first corporate performance with their help!",
    location: "Chicago, IL",
  },
];

// Visual gallery to make the academy feel real
const galleryShots = [
  {
    title: "Live social in Miami",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Footwork lab in Austin",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Partnering drills in Seattle",
    image:
      "https://images.unsplash.com/photo-1523419400524-2c5e5aa8c48b?auto=format&fit=crop&w=900&q=80",
  },
];

// FAQ entries rendered with semantic <details> for interactivity
const faqs = [
  {
    question: "How beginner-friendly are the classes?",
    answer:
      "We start with rhythm drills and clear English counts. Coaches demo from multiple angles and keep group sizes capped so you get individual attention.",
  },
  {
    question: "Do I need a partner?",
    answer:
      "No partner needed. We rotate often and always respect boundaries. You can also stick with one partner if you prefer.",
  },
  {
    question: "Is there live-stream access?",
    answer:
      "Yes. Every membership includes a live-stream option plus on-demand practice clips filmed by our Latin American instructors.",
  },
];

// Per-city timetables to show real-world logistics and provide interactivity
const citySchedule = {
  Miami: {
    studio: "Wynwood Arts District",
    sessions: ["Mon Salsa Foundations 6:00 PM", "Wed Bachata Elevate 7:15 PM", "Fri Social & Rueda 8:30 PM"],
  },
  Austin: {
    studio: "South Congress Loft",
    sessions: ["Tue Salsa On2 6:30 PM", "Thu Fusion Performance 7:30 PM", "Sat Beginner Lab 11:00 AM"],
  },
  Seattle: {
    studio: "Capitol Hill Studio",
    sessions: ["Mon Bachata Technique 7:00 PM", "Wed Salsa Spins 7:45 PM", "Sun Social Drills 5:00 PM"],
  },
};

export default function Home() {
  // Loading animation to simulate data fetch while assets settle
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState<keyof typeof citySchedule>("Miami");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const timetable = useMemo(() => citySchedule[selectedCity], [selectedCity]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6EFE7] via-white to-[#f1e6d9] text-[#132a3d]">
      {/* Loading overlay for initial entrance animation */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1B2C]/80 backdrop-blur">
          <div className="flex flex-col items-center gap-3 text-[#f6efe7]">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#FF7A6A]/40 border-t-[#FF7A6A]"></div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase">Loading Cadencia</p>
            <p className="text-xs text-[#e7d8c5]">Setting the rhythm…</p>
          </div>
        </div>
      )}

      <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#0F1B2C] via-[#132a3d] to-[#1a2d45] text-[#f6efe7]">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <Image
            src="/aurora-grid.svg"
            alt="Geometric background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 sm:px-10 lg:flex-row lg:items-center lg:py-20">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#e7d8c5]/30 bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#f1e6d9] backdrop-blur">
              Stateside Salsa & Latin Dance Academy
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/aurora-mark.svg"
                alt="Cadencia Dancemark"
                width={64}
                height={64}
                className="rounded-2xl border border-white/30 bg-white/10 p-3 shadow-lg"
              />
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[#e7d8c5]">
                  Presented by Cadencia Studios
                </p>
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  Dance like a local. Move like Latin America.
                </h1>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-[#f6efe7]/90">
              A U.S.-based academy designed for beginners and social dancers who want a true Latin groove. Classes are taught in English by award-winning instructors from Puerto Rico, Colombia, and Mexico—now calling the United States home.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#FF7A6A] px-6 py-3 text-base font-semibold text-[#0F1B2C] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                href="#pricing"
              >
                See memberships
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#e7d8c5]/60 px-6 py-3 text-base font-semibold text-[#f6efe7] transition hover:bg-white/10"
                href="#schedule"
              >
                View weekly flow
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-[#f6efe7]/80">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#ff8f81]"></span> Latin American coaches in-residence
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#F4C95D]"></span> U.S. friendly scheduling
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#3fc1b6]"></span> Downtown studios + live-stream
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-[#f1e6d9]/20 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#FF7A6A]/60 blur-3xl" aria-hidden></div>
            <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#3fc1b6]/60 blur-3xl" aria-hidden></div>
            <div className="relative space-y-6">
              <Image
                src="https://images.unsplash.com/photo-1523419400524-2c5e5aa8c48b?auto=format&fit=crop&w=1200&q=80"
                alt="Couples dancing in studio"
                width={720}
                height={520}
                className="w-full rounded-2xl border border-white/30 bg-white/10 shadow-lg"
                priority
              />
              <div className="rounded-2xl border border-white/25 bg-white/10 p-4 text-[#f6efe7] shadow">
                <div className="flex items-center justify-between text-sm font-medium uppercase tracking-[0.2em] text-[#f1e6d9]">
                  <span>Weekly Spotlight</span>
                  <span>Miami • Austin • Remote</span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-[#f6efe7]/90">
                  Salsa & Bachata open-level social on Fridays, hosted by our Latin American faculty. Bring your sneakers, not your nerves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 text-[#132a3d] sm:px-10 lg:py-24">
        {/* Value proposition and credibility */}
        <section id="about" className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Why this academy</p>
            <h2 className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">
              Built for U.S. dancers who crave authentic Latin rhythm without losing clarity.
            </h2>
            <p className="text-lg leading-relaxed text-[#243956]">
              Every class blends the directness Americans love with the musicality only Latin American coaches can deliver. We teach the counts, the history, and the vibe—so you feel confident at weddings, socials, and every rooftop party in between.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d9e1ed] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#243956]">Fast-track learning</p>
                <p className="mt-2 text-sm text-[#30496b]">Layered drills, video recaps, and American-friendly pacing for busy schedules.</p>
              </div>
              <div className="rounded-2xl border border-[#d9e1ed] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#243956]">Latin-led faculty</p>
                <p className="mt-2 text-sm text-[#30496b]">Coaches from Puerto Rico, Colombia, and Mexico leading every series and social.</p>
              </div>
              <div className="rounded-2xl border border-[#d9e1ed] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#243956]">Hybrid options</p>
                <p className="mt-2 text-sm text-[#30496b]">Studio experiences plus high-quality live streams so you never miss a beat.</p>
              </div>
              <div className="rounded-2xl border border-[#d9e1ed] bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-[#243956]">U.S. friendly extras</p>
                <p className="mt-2 text-sm text-[#30496b]">Holiday makeups, parking guides, and playlists formatted for any phone.</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#d9e1ed] bg-white shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80"
              alt="Students stretching before class"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Classes with imagery and logistics */}
        <section id="schedule" className="space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Classes</p>
              <h2 className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">Choose your groove</h2>
              <p className="mt-2 text-base text-[#243956]">
                Small groups capped at 16 dancers. Clear counts, English-first cues, and cultural notes woven into every drill.
              </p>
            </div>
            <div className="rounded-full bg-[#132a3d] px-5 py-3 text-sm font-semibold text-[#f6efe7] shadow-sm">
              Live + Live-stream
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {classTracks.map((track) => (
              <article
                key={track.title}
                className="flex flex-col gap-4 rounded-3xl border border-[#d9e1ed] bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Image
                  src={track.image}
                  alt={track.title}
                  width={380}
                  height={220}
                  className="h-52 w-full rounded-2xl border border-[#edf2f9] object-cover"
                />
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-[#f1e6d9] px-3 py-1 text-xs font-semibold text-[#243956]">
                      {track.subtitle}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0F1B2C]">{track.title}</h3>
                  <p className="text-sm leading-relaxed text-[#243956]">{track.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-[#243956]">
                  <div className="flex items-center gap-2 rounded-full bg-[#f1e6d9] px-3 py-1">
                    <span className="h-2 w-2 rounded-full bg-[#1FAFA3]" aria-hidden></span>
                    {track.schedule}
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[#fff2ef] px-3 py-1 text-[#f46250]">
                    <span className="h-2 w-2 rounded-full bg-[#ff8f81]" aria-hidden></span>
                    {track.focus}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Interactive city schedule selector */}
        <section aria-labelledby="city-schedule" className="grid gap-8 rounded-3xl border border-[#d9e1ed] bg-white/70 p-8 shadow-sm lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Where we teach</p>
            <h2 id="city-schedule" className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">
              Select a city to see the weekly flow
            </h2>
            <p className="text-base text-[#243956]">
              Latin American instructors are onsite in every city. Tap a location to preview what your week could look like.
            </p>
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="City schedule tabs">
              {(Object.keys(citySchedule) as Array<keyof typeof citySchedule>).map((city) => (
                <button
                  key={city}
                  role="tab"
                  aria-selected={selectedCity === city}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A6A] ${
                    selectedCity === city
                      ? "bg-[#FF7A6A] text-[#0F1B2C] shadow"
                      : "border border-[#d9e1ed] bg-white text-[#243956] hover:border-[#132a3d]"
                  }`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              ))}
            </div>
            <div className="rounded-2xl border border-[#d9e1ed] bg-[#f1e6d9] p-6 shadow-inner" role="tabpanel">
              <p className="text-sm font-semibold text-[#243956]">{timetable.studio}</p>
              <ul className="mt-3 space-y-3 text-sm text-[#132a3d]">
                {timetable.sessions.map((session) => (
                  <li key={session} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#1FAFA3]" aria-hidden></span>
                    {session}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/map-coverage.svg"
              alt="U.S. map coverage"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Membership pricing */}
        <section id="pricing" className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Memberships</p>
            <h2 className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">Pick the plan that meets your momentum</h2>
            <p className="text-base text-[#243956]">Transparent pricing in USD with perks that reward consistency.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((tier) => (
              <article
                key={tier.name}
                className="flex flex-col gap-4 rounded-3xl border border-[#d9e1ed] bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#30496b]">{tier.badge}</p>
                    <h3 className="text-2xl font-semibold text-[#0F1B2C]">{tier.name}</h3>
                  </div>
                  <div className="rounded-full bg-[#ffe1db] px-4 py-2 text-sm font-semibold text-[#d84d3b]">
                    {tier.price}
                  </div>
                </div>
                <p className="text-sm font-medium text-[#243956]">{tier.cadence}</p>
                <ul className="space-y-3 text-sm text-[#243956]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#1FAFA3]" aria-hidden></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-auto inline-flex items-center justify-center rounded-full bg-[#132a3d] px-5 py-2 text-sm font-semibold text-[#f6efe7] transition hover:-translate-y-0.5 hover:bg-[#1a2d45]">
                  Talk with a coach
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="space-y-8">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Reviews</p>
            <h2 className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">Dancers across the U.S. are already moving</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col gap-4 rounded-3xl border border-[#d9e1ed] bg-white p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-[#243956]">“{testimonial.quote}”</p>
                <div className="flex items-center justify-between text-sm font-semibold text-[#1a2d45]">
                  <span>{testimonial.name}</span>
                  <span className="rounded-full bg-[#f1e6d9] px-3 py-1 text-xs uppercase tracking-[0.15em] text-[#243956]">
                    {testimonial.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Lifestyle gallery with real imagery */}
        <section aria-labelledby="gallery" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Inside the studios</p>
            <h2 id="gallery" className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">
              See how classes feel in real life
            </h2>
            <p className="text-base text-[#243956]">
              All photos are from sessions led by our Latin American instructors in the U.S. Tap to expand captions.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {galleryShots.map((shot) => (
              <figure
                key={shot.title}
                className="group relative overflow-hidden rounded-3xl border border-[#d9e1ed] bg-white shadow-sm"
              >
                <Image
                  src={shot.image}
                  alt={shot.title}
                  width={420}
                  height={320}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <figcaption className="flex items-center justify-between px-4 py-3 text-sm text-[#243956]">
                  <span>{shot.title}</span>
                  <span className="text-xs uppercase tracking-[0.15em] text-[#30496b]">View</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ section for clarity */}
        <section aria-labelledby="faq" className="grid gap-6 rounded-3xl border border-[#d9e1ed] bg-white p-8 shadow-sm lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#30496b]">Questions</p>
            <h2 id="faq" className="text-3xl font-semibold text-[#0F1B2C] sm:text-4xl">How it works</h2>
            <p className="text-base text-[#243956]">
              Transparent policies, studio etiquette, and everything you need to feel prepared for day one.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-[#d9e1ed] bg-[#f7f2ea] p-4 transition">
                <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-[#132a3d]">
                  <span>{item.question}</span>
                  <span className="text-[#FF7A6A] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-[#30496b]">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Conversion-focused call-to-action */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0F1B2C] via-[#132a3d] to-[#0b4c46] p-10 text-[#f6efe7] shadow-xl">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <Image src="/aurora-grid.svg" alt="Grid" fill className="object-cover" />
          </div>
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e7d8c5]">Get started</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">Ready for your first class?</h2>
              <p className="text-base text-[#f6efe7]/90">
                Drop in for free, meet our Latin American instructors, and leave with a playlist to practice at home.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-[#FF7A6A] px-6 py-3 text-base font-semibold text-[#0F1B2C] shadow-md transition hover:-translate-y-0.5"
                href="#pricing"
              >
                Book a trial
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#e7d8c5]/70 px-6 py-3 text-base font-semibold text-[#f6efe7] transition hover:bg-white/10"
                href="mailto:hello@cadenciadance.com"
              >
                Email the team
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with quick links and contact */}
      <footer className="border-t border-[#d9e1ed] bg-[#f7f2ea] text-[#132a3d]">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:justify-between">
          <div className="space-y-3 max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/aurora-mark.svg" alt="Cadencia mark" width={48} height={48} className="rounded-xl border border-[#d9e1ed] bg-white p-2" />
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#30496b]">Cadencia Dance Academy</p>
                <p className="text-sm text-[#243956]">U.S.-based, Latin American-led salsa, bachata, and fusion classes.</p>
              </div>
            </div>
            <p className="text-sm text-[#30496b]">
              Call or text <a className="font-semibold text-[#0F1B2C] underline-offset-2 hover:underline" href="tel:+18332233623">(833) 223-3623</a> or email <a className="font-semibold text-[#0F1B2C] underline-offset-2 hover:underline" href="mailto:hello@cadenciadance.com">hello@cadenciadance.com</a>.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#30496b]">Quick links</p>
              <nav className="flex flex-col gap-2 text-sm text-[#243956]">
                <a className="hover:text-[#0F1B2C]" href="#about">About</a>
                <a className="hover:text-[#0F1B2C]" href="#schedule">Classes</a>
                <a className="hover:text-[#0F1B2C]" href="#pricing">Pricing</a>
                <a className="hover:text-[#0F1B2C]" href="#testimonials">Reviews</a>
              </nav>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#30496b]">Visit us</p>
              <ul className="space-y-2 text-sm text-[#243956]">
                <li>Miami • Wynwood Arts District</li>
                <li>Austin • South Congress Loft</li>
                <li>Seattle • Capitol Hill Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
