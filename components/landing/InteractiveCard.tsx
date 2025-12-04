"use client";

import { ReactNode, useMemo, useState } from "react";
import { useReveal } from "./useReveal";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export function InteractiveCard({ children, className = "" }: InteractiveCardProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const transform = useMemo(
    () =>
      `translateY(${isVisible ? "0" : "20px"}) scale(${isVisible ? 1 : 0.98}) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
    [isVisible, tilt]
  );

  return (
    <div
      ref={ref}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
        const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
        setTilt({ x: offsetX, y: -offsetY });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{
        transform,
        transition: "transform 0.7s ease, box-shadow 0.4s ease, opacity 0.7s ease",
      }}
    >
      {children}
    </div>
  );
}
