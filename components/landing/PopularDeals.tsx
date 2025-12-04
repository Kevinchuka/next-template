"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { PLACEHOLDER_IMAGES } from "@/lib/placeholders";
import { InteractiveCard } from "./InteractiveCard";
import { MagneticButton } from "./MagneticButton";

type InventoryItem = {
  id: string;
  title: string;
  discount: string;
  price: string;
  platform: string;
  stock: number;
  image: string;
  description: string;
};

const inventory: InventoryItem[] = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    discount: "67% OFF",
    price: "$59.99 → $19.99",
    platform: "Steam Global",
    stock: 8,
    image: PLACEHOLDER_IMAGES.game1,
    description: "Night City awaits with ray-traced visuals and the Phantom Liberty expansion included.",
  },
  {
    id: "elden-ring",
    title: "Elden Ring",
    discount: "40% OFF",
    price: "$59.99 → $35.99",
    platform: "Steam Worldwide",
    stock: 5,
    image: PLACEHOLDER_IMAGES.game2,
    description: "FromSoftware's open-world epic with seamless co-op and brutal boss encounters.",
  },
  {
    id: "assassins-creed-mirage",
    title: "Assassin's Creed Mirage",
    discount: "55% OFF",
    price: "$49.99 → $22.49",
    platform: "Epic Global",
    stock: 6,
    image: PLACEHOLDER_IMAGES.game3,
    description: "Return to stealth-first parkour across Baghdad with next-gen visuals.",
  },
  {
    id: "forza-horizon-5",
    title: "Forza Horizon 5",
    discount: "60% OFF",
    price: "$69.99 → $27.99",
    platform: "Xbox / PC Key",
    stock: 10,
    image: PLACEHOLDER_IMAGES.game4,
    description: "Race the ultimate open-world Mexico with hundreds of cars and seasonal events.",
  },
];

export function PopularDeals() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const remainingStock = (id: string) => {
    const item = inventory.find((deal) => deal.id === id);
    if (!item) return 0;
    return item.stock - (cart[id] ?? 0);
  };

  const adjustCart = (id: string, delta: number) => {
    const item = inventory.find((deal) => deal.id === id);
    if (!item) return;
    setCart((prev) => {
      const current = prev[id] ?? 0;
      const next = Math.min(item.stock, Math.max(0, current + delta));
      const updated = { ...prev };
      if (next === 0) {
        delete updated[id];
        return updated;
      }
      return { ...updated, [id]: next };
    });
  };

  const cartSummary = useMemo(() => {
    const entries = Object.entries(cart);
    const list = entries
      .map(([id, qty]) => {
        const item = inventory.find((deal) => deal.id === id);
        return item ? `${qty} × ${item.title}` : null;
      })
      .filter(Boolean);
    return list.length > 0 ? list.join(" • ") : "Aún no agregas nada al carrito";
  }, [cart]);

  return (
    <section id="deals" className="space-y-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">Popular Deals</p>
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Flash sales on the games everyone is talking about</h2>
        <p className="max-w-2xl text-lg text-slate-300">
          Locked-in pricing backed by instant delivery and dynamic validation so your key works the moment you redeem it.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-teal-100">
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Base de datos simulada
          </span>
          <span className="text-slate-300">Gestión visual de stock y carrito en tiempo real.</span>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-start">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {inventory.map((deal) => {
            const remaining = remainingStock(deal.id);
            const inCart = cart[deal.id] ?? 0;

            return (
              <InteractiveCard
                key={deal.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-black/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_95px_rgba(94,234,212,0.25)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={`${deal.title} cover art placeholder`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    {deal.discount}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 backdrop-blur">
                    Stock {remaining}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-teal-200">{deal.platform}</p>
                    <h3 className="text-xl font-semibold text-white">{deal.title}</h3>
                    <p className="text-sm text-slate-300">{deal.description}</p>
                  </div>
                  <p className="text-lg font-bold text-teal-100">{deal.price}</p>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Instant Delivery</span>
                    <span className="text-purple-200">Trusted seller</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">
                    <button
                      type="button"
                      onClick={() => adjustCart(deal.id, -1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-lg transition hover:border-teal-400/50 hover:text-teal-200"
                      aria-label={`Quitar ${deal.title} del carrito`}
                      disabled={inCart === 0}
                    >
                      –
                    </button>
                    <div className="flex flex-1 flex-col">
                      <span className="text-xs uppercase tracking-wide text-slate-400">Carrito</span>
                      <span className="text-base font-semibold text-white">{inCart} unidades</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => adjustCart(deal.id, 1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-teal-400/40 bg-teal-500/20 text-lg text-teal-100 transition hover:shadow-[0_0_25px_rgba(45,212,191,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
                      aria-label={`Agregar ${deal.title} al carrito`}
                      disabled={remaining === 0}
                    >
                      +
                    </button>
                  </div>
                  <MagneticButton
                    className="w-full justify-center text-center"
                    aria-label={`Browse deal for ${deal.title}`}
                    onClick={() => adjustCart(deal.id, 1)}
                    disabled={remaining === 0}
                  >
                    {remaining === 0 ? "Sin stock" : "Agregar al carrito"}
                  </MagneticButton>
                </div>
              </InteractiveCard>
            );
          })}
        </div>
        <aside className="space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-black/80 p-6 shadow-[0_15px_60px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Carrito</p>
              <h3 className="text-xl font-semibold text-white">Resumen en tiempo real</h3>
            </div>
            <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-100">
              {Object.keys(cart).length} ítems
            </span>
          </div>
          <p className="text-sm text-slate-300">{cartSummary}</p>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Entrega</span>
              <span className="text-teal-100">Instantánea</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Verificación</span>
              <span className="text-teal-100">Automática</span>
            </div>
          </div>
          <MagneticButton className="w-full justify-center text-center" aria-label="Ir a pagar">
            Checkout visual
          </MagneticButton>
        </aside>
      </div>
    </section>
  );
}
