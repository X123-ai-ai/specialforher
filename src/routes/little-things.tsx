import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  LITTLE_THINGS,
  LITTLE_THINGS_TARGET,
  LITTLE_THING_CATEGORIES,
  type LittleThing,
} from "@/data/littleThings";
import { RoomShell, Eyebrow, Dahlia, Rule } from "@/components/universe/RoomShell";
import { Reveal } from "@/components/universe/Reveal";

export const Route = createFileRoute("/little-things")({
  head: () => ({
    meta: [
      { title: "365 Little Things — I Notice You | Anju × Shree" },
      {
        name: "description",
        content: "A collection of tiny observations: habits, words, moments, and small joys.",
      },
      { property: "og:title", content: "365 Little Things" },
      { property: "og:description", content: "The small things that make you you." },
    ],
  }),
  component: LittleThingsRoom,
});

const FAV_KEY = "anju-shree:favourite-little-things";

function LittleThingsRoom() {
  const [current, setCurrent] = useState<LittleThing | null>(null);
  const [mode, setMode] = useState<"reveal" | "browse">("reveal");
  const [category, setCategory] = useState<string>("all");
  const [favs, setFavs] = useState<number[]>([]);
  const [onlyFavs, setOnlyFavs] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAV_KEY);
      if (raw) setFavs(JSON.parse(raw) as number[]);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleFav = useCallback((id: number) => {
    setFavs((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        window.localStorage.setItem(FAV_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const pool = useMemo(
    () =>
      LITTLE_THINGS.filter(
        (t) =>
          (category === "all" || t.category === category) && (!onlyFavs || favs.includes(t.id)),
      ),
    [category, onlyFavs, favs],
  );

  const pick = useCallback(() => {
    const source = pool.length ? pool : LITTLE_THINGS;
    const next = source[Math.floor(Math.random() * source.length)] ?? null;
    setCurrent(next);
  }, [pool]);

  return (
    <RoomShell
      label="III · little things"
      className="bg-[oklch(0.22_0.05_300)]"
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 20% 10%, oklch(0.7 0.11 320 / 0.16), transparent 70%), radial-gradient(60% 60% at 85% 80%, oklch(0.78 0.1 60 / 0.12), transparent 70%)",
        }}
      />

      <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-28 text-center">
        <Reveal>
          <Eyebrow>i notice you</Eyebrow>
          <h1 className="text-display mt-4 text-5xl leading-none text-foreground md:text-7xl">
            365 little things
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {LITTLE_THINGS.length} of {LITTLE_THINGS_TARGET} written so far.
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-12 w-full max-w-xl">
          <div className="relative min-h-[190px] rounded-sm border border-lavender/20 bg-card/50 p-8 backdrop-blur">
            {current ? (
              <div key={current.id} className="u-reveal" data-shown="true">
                <p className="text-[10px] tracking-room text-lavender/80">{current.category}</p>
                <p className="text-display mt-4 text-2xl leading-snug text-foreground md:text-3xl">
                  {current.text}
                </p>
                <div className="mt-6 flex items-center justify-center gap-6">
                  <span className="text-[10px] tracking-room text-muted-foreground">
                    no. {String(current.id).padStart(3, "0")}
                  </span>
                  <FavButton
                    on={favs.includes(current.id)}
                    onClick={() => toggleFav(current.id)}
                  />
                </div>
              </div>
            ) : (
              <p className="text-display pt-10 text-xl text-muted-foreground italic">
                Ask, and I'll tell you something.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={pick}
            className="mt-8 rounded-full border border-lavender/40 px-8 py-3 text-[10px] tracking-room text-foreground transition-all duration-500 hover:border-lavender hover:shadow-[var(--shadow-glow)]"
          >
            tell me something
          </button>
        </Reveal>

        <Reveal delay={400}>
          <button
            type="button"
            onClick={() => setMode(mode === "reveal" ? "browse" : "reveal")}
            className="mt-10 text-[10px] tracking-room text-muted-foreground underline-offset-8 transition-colors hover:text-lavender"
          >
            {mode === "reveal" ? "browse all" : "back to reveal"}
          </button>
        </Reveal>
      </section>

      {mode === "browse" ? (
        <section className="relative mx-auto max-w-5xl px-6 pb-32">
          <Rule className="mb-10" />
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {["all", ...LITTLE_THING_CATEGORIES].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={[
                  "rounded-full border px-4 py-2 text-[10px] tracking-room transition-colors",
                  category === c
                    ? "border-lavender/70 text-lavender"
                    : "border-lavender/15 text-muted-foreground hover:border-lavender/40",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setOnlyFavs((v) => !v)}
              aria-pressed={onlyFavs}
              className={[
                "ml-auto rounded-full border px-4 py-2 text-[10px] tracking-room transition-colors",
                onlyFavs
                  ? "border-gold/70 text-gold"
                  : "border-lavender/15 text-muted-foreground hover:border-lavender/40",
              ].join(" ")}
            >
              saved ({favs.length})
            </button>
          </div>

          {pool.length === 0 ? (
            <p className="py-16 text-center text-sm text-muted-foreground">
              Nothing here yet.
            </p>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pool.map((t, i) => (
                <li key={t.id}>
                  <Reveal delay={i * 45}>
                    <article className="group h-full rounded-sm border border-lavender/15 bg-card/45 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lavender/45">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] tracking-room text-lavender/70">
                          {t.category}
                        </span>
                        <FavButton on={favs.includes(t.id)} onClick={() => toggleFav(t.id)} />
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-foreground">{t.text}</p>
                      <p className="mt-5 text-[10px] tracking-room text-muted-foreground">
                        no. {String(t.id).padStart(3, "0")}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-16 flex justify-center">
            <Dahlia size={30} className="u-float opacity-60" />
          </div>
        </section>
      ) : null}
    </RoomShell>
  );
}

function FavButton({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      aria-label={on ? "Remove from saved" : "Save this one"}
      className={[
        "text-[10px] tracking-room transition-colors",
        on ? "text-gold" : "text-muted-foreground hover:text-lavender",
      ].join(" ")}
    >
      {on ? "saved" : "save"}
    </button>
  );
}