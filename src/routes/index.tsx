import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ROOMS, ANNIVERSARY } from "@/data/rooms";
import { StarField } from "@/components/universe/StarField";
import { Reveal, StaggerText } from "@/components/universe/Reveal";
import { Dahlia, Eyebrow } from "@/components/universe/RoomShell";
import { Secret } from "@/components/universe/Secret";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anju × Shree — One Universe, Six Rooms" },
      {
        name: "description",
        content:
          "One universe. Six rooms. One year of us. A first-anniversary experience for Anju, from Shree.",
      },
      { property: "og:title", content: "One Universe. Six Rooms. One Year Of Us." },
      { property: "og:description", content: "365 days of choosing each other." },
    ],
  }),
  component: Index,
});

function useCountdown(target: Date) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setLeft(target.getTime() - Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);
  return left;
}

function Index() {
  const left = useCountdown(ANNIVERSARY);
  const days = left === null ? null : Math.max(0, Math.floor(left / 86400000));
  const hours = left === null ? null : Math.max(0, Math.floor((left / 3600000) % 24));
  const mins = left === null ? null : Math.max(0, Math.floor((left / 60000) % 60));

  return (
    <div className="room-night relative min-h-screen overflow-x-hidden">
      <StarField count={90} seed={11} opacity={0.55} className="fixed" />

      <main id="main" className="relative">
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <Reveal className="u-float">
            <Dahlia size={44} className="text-lavender/50" />
          </Reveal>
          <Reveal delay={200}>
            <Eyebrow className="mt-8">Anju × Shree</Eyebrow>
          </Reveal>

          <StaggerText
            as="h1"
            text="One universe. Six rooms."
            step={110}
            className="text-display mt-6 max-w-4xl text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl"
          />
          <StaggerText
            as="p"
            text="One year of us."
            step={110}
            className="text-display mt-2 text-3xl text-lavender italic sm:text-5xl md:text-6xl"
          />

          <Reveal delay={900}>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground">
              Not 365 perfect days. 365 real ones — and every one of them chosen.
            </p>
          </Reveal>

          <Reveal delay={1100} className="mt-12">
            <div className="flex items-end justify-center gap-8">
              {[
                { v: days, l: "days" },
                { v: hours, l: "hours" },
                { v: mins, l: "minutes" },
              ].map((u) => (
                <div key={u.l} className="text-center">
                  <div className="text-display text-3xl text-foreground tabular-nums md:text-4xl">
                    {u.v === null ? "—" : String(u.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[9px] tracking-room text-muted-foreground">{u.l}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[10px] tracking-room text-muted-foreground">
              until 21 august 2026
            </p>
          </Reveal>

          <Reveal delay={1400} className="mt-16">
            <a
              href="#rooms"
              className="text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
            >
              enter
            </a>
          </Reveal>
        </section>

        <section id="rooms" className="mx-auto max-w-5xl px-6 pb-32">
          <Reveal>
            <Eyebrow className="mb-10">The rooms</Eyebrow>
          </Reveal>

          <div className="divide-y divide-lavender/10 border-y border-lavender/10">
            {ROOMS.map((room, i) => (
              <Reveal key={room.id} delay={i * 90}>
                <Link
                  to={room.path}
                  className="group flex items-center gap-5 py-7 transition-colors md:gap-10"
                >
                  <span className="w-8 text-[10px] tracking-widest text-muted-foreground">
                    {room.index}
                  </span>
                  <span className="flex-1">
                    <span className="text-display block text-3xl text-foreground transition-all duration-500 group-hover:translate-x-2 group-hover:text-lavender md:text-5xl">
                      {room.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{room.tagline}</span>
                  </span>
                  <span className="hidden text-[10px] tracking-room text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:block">
                    {room.mood}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-20 flex items-center justify-center gap-3 text-center text-xs text-muted-foreground">
              made by hand, for you
              <Secret id="hub-dahlia" />
            </p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
