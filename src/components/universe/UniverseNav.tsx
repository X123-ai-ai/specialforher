import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ROOMS } from "@/data/rooms";
import { cn } from "@/lib/utils";

export function UniverseNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close the universe menu" : "Open the universe menu"}
        className={cn(
          "fixed right-5 bottom-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-lavender/30 bg-background/70 backdrop-blur transition-all duration-500 hover:border-lavender/70 hover:shadow-[var(--shadow-glow)] md:right-8 md:bottom-8",
          open && "border-lavender/70",
        )}
      >
        <span aria-hidden className="relative block h-4 w-4">
          <span
            className={cn(
              "absolute inset-0 rounded-full border border-lavender/70 transition-transform duration-700",
              open ? "scale-50" : "scale-100",
            )}
          />
          <span className="absolute top-1/2 left-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender" />
        </span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 transition-opacity duration-500",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close the universe menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 h-full w-full bg-violet-night/80 backdrop-blur-md"
        />
        <nav
          aria-label="Rooms"
          className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-2xl px-6 pb-24 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:pb-0"
        >
          <p className="mb-6 text-[10px] tracking-room text-muted-foreground">
            One universe · six rooms
          </p>
          <ul className="space-y-1">
            <li>
              <RoomLink to="/" idx="—" name="The Universe" tagline="Back to the beginning" active={pathname === "/"} open={open} delay={0} />
            </li>
            {ROOMS.map((room, i) => (
              <li key={room.id}>
                <RoomLink
                  to={room.path}
                  idx={room.index}
                  name={room.name}
                  tagline={room.tagline}
                  active={pathname === room.path}
                  open={open}
                  delay={(i + 1) * 55}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

function RoomLink({
  to,
  idx,
  name,
  tagline,
  active,
  open,
  delay,
}: {
  to: string;
  idx: string;
  name: string;
  tagline: string;
  active: boolean;
  open: boolean;
  delay: number;
}) {
  return (
    <Link
      to={to}
      tabIndex={open ? 0 : -1}
      className={cn(
        "group flex items-baseline gap-4 border-b border-lavender/10 py-3 transition-all duration-500",
        open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="w-6 text-[10px] tracking-widest text-muted-foreground">{idx}</span>
      <span className="flex-1">
        <span
          className={cn(
            "text-display block text-2xl transition-colors duration-300 md:text-3xl",
            active ? "text-lavender" : "text-foreground group-hover:text-lavender",
          )}
        >
          {name}
        </span>
        <span className="block text-xs text-muted-foreground">{tagline}</span>
      </span>
    </Link>
  );
}