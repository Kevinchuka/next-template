"use client";

import { ButtonHTMLAttributes, ReactNode, useMemo, useState } from "react";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const styles = useMemo(() => {
    const base =
      variant === "primary"
        ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white shadow-[0_10px_40px_rgba(45,212,191,0.25)]"
        : variant === "secondary"
          ? "border border-teal-400/40 text-teal-100 bg-white/5"
          : "text-slate-200 hover:text-white";
    return `${base} ${className}`;
  }, [variant, className]);

  return (
    <button
      {...props}
      type={type}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const moveX = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const moveY = ((event.clientY - rect.top) / rect.height - 0.5) * 8;
        setOffset({ x: moveX, y: moveY });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      className={`group relative overflow-hidden rounded-full px-6 py-3 font-semibold transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_12px_35px_rgba(99,102,241,0.35)] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${styles}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
    </button>
  );
}
