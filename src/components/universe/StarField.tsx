import { useMemo } from "react";
import { cn } from "@/lib/utils";

/** Deterministic pseudo-random so SSR and client agree. */
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

export function StarField({
  count = 70,
  seed = 7,
  className,
  opacity = 0.7,
}: {
  count?: number;
  seed?: number;
  className?: string;
  opacity?: number;
}) {
  const stars = useMemo(() => {
    const r = rng(seed);
    return Array.from({ length: count }, (_, i) => ({
      i,
      x: r() * 100,
      y: r() * 100,
      s: 0.6 + r() * 1.6,
      d: 3 + r() * 6,
      delay: r() * 6,
    }));
  }, [count, seed]);

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ opacity }}
    >
      {stars.map((st) => (
        <span
          key={st.i}
          className="absolute rounded-full bg-silver"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: st.s,
            height: st.s,
            animation: `u-twinkle ${st.d}s ease-in-out ${st.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}