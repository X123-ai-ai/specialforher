import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function RoomShell({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div className={cn("relative min-h-screen overflow-x-hidden", className)}>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-30 flex items-center justify-between px-5 py-5 md:px-10">
        <Link
          to="/"
          className="pointer-events-auto text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
        >
          Anju × Shree
        </Link>
        <span className="text-[10px] tracking-room text-muted-foreground">{label}</span>
      </header>
      <main id="main">{children}</main>
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-[10px] tracking-room text-muted-foreground", className)}>{children}</p>
  );
}

export function Rule({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("block h-px w-16 bg-gradient-to-r from-lavender/70 to-transparent", className)}
    />
  );
}

/** Small dahlia-inspired mark used sparingly across rooms. */
export function Dahlia({ className, size = 28 }: { className?: string; size?: number }) {
  const petals = Array.from({ length: 12 });
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden
      className={cn("text-lavender/70", className)}
    >
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx="50"
          cy="26"
          rx="6"
          ry="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${i * 30} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}