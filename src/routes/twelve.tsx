import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { LETTERS, isUnlocked, type Letter } from "@/data/letters";
import { StarField } from "@/components/universe/StarField";
import { Reveal, StaggerText } from "@/components/universe/Reveal";
import { RoomShell, Eyebrow, Dahlia, Rule } from "@/components/universe/RoomShell";
import { AudioNote } from "@/components/universe/Media";

export const Route = createFileRoute("/twelve")({
  head: () => ({
    meta: [
      { title: "12 — Twelve Letters, Twelve Days | Anju × Shree" },
      {
        name: "description",
        content:
          "Twelve letters, one for each day leading to 21 August 2026. One opens each morning.",
      },
      { property: "og:title", content: "12 — Twelve Letters, Twelve Days" },
      { property: "og:description", content: "One letter a day, until a year of us." },
    ],
  }),
  component: TwelveRoom,
});

function TwelveRoom() {
  const [now, setNow] = useState<Date | null>(null);
  const [openLetter, setOpenLetter] = useState<Letter | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(id);
  }, []);

  const states = useMemo(
    () => LETTERS.map((l) => (now ? isUnlocked(l, now) : false)),
    [now],
  );
  const todayIndex = states.lastIndexOf(true);

  return (
    <RoomShell label="I · twelve" className="room-night">
      <StarField count={60} seed={3} opacity={0.4} className="fixed" />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <Reveal>
          <span className="text-display block text-[7rem] leading-none text-lavender/80 md:text-[12rem]">
            12
          </span>
        </Reveal>
        <StaggerText
          as="p"
          text="Twelve letters. Twelve days."
          className="text-display mt-4 text-2xl text-foreground md:text-3xl"
        />
        <Reveal delay={700}>
          <p className="text-display mt-1 text-2xl text-lavender italic md:text-3xl">
            One year of us.
          </p>
        </Reveal>
        <Reveal delay={1000}>
          <Rule className="mx-auto mt-10" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            One opens each morning from 9 August. Nothing opens early — not even for me.
          </p>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-5xl px-6 pb-32">
        <Eyebrow className="mb-8">
          {todayIndex >= 0
            ? `${todayIndex + 1} of 12 opened`
            : "the first letter opens 9 august 2026"}
        </Eyebrow>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {LETTERS.map((letter, i) => {
            const unlocked = states[i] === true;
            const isToday = i === todayIndex;
            return (
              <li key={letter.n}>
                <Reveal delay={i * 55}>
                  <button
                    type="button"
                    disabled={!unlocked}
                    onClick={() => unlocked && setOpenLetter(letter)}
                    aria-label={
                      unlocked
                        ? `Open letter ${letter.n}: ${letter.title}`
                        : `Letter ${letter.n} opens ${letter.dateLabel}`
                    }
                    className={[
                      "group relative flex h-44 w-full flex-col justify-between rounded-sm border p-4 text-left transition-all duration-500",
                      unlocked
                        ? "border-lavender/25 bg-card/40 hover:-translate-y-1 hover:border-lavender/60 hover:shadow-[var(--shadow-glow)]"
                        : "cursor-not-allowed border-lavender/10 bg-card/15 opacity-55",
                      isToday ? "border-lavender/70 shadow-[var(--shadow-glow)]" : "",
                      letter.milestone && unlocked ? "bg-violet-deep/25" : "",
                    ].join(" ")}
                  >
                    <span className="flex items-start justify-between">
                      <span className="text-display text-4xl text-lavender/80">
                        {String(letter.n).padStart(2, "0")}
                      </span>
                      {letter.milestone ? <Dahlia size={18} className="opacity-70" /> : null}
                    </span>
                    <span>
                      <span className="text-display block text-lg leading-tight text-foreground">
                        {unlocked ? letter.title : "—"}
                      </span>
                      <span className="mt-2 block text-[10px] tracking-room text-muted-foreground">
                        {unlocked ? letter.dateLabel : `opens ${letter.dateLabel}`}
                      </span>
                    </span>
                    {isToday ? (
                      <span className="text-hand absolute -top-3 right-3 rounded-full bg-background px-2 text-base text-lavender">
                        today
                      </span>
                    ) : null}
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-16">
          <AudioNote title="optional — a recording for these days" />
        </Reveal>

        <Reveal className="mt-20 text-center">
          <Rule className="mx-auto" />
          <p className="text-display mt-8 text-2xl text-foreground md:text-3xl">
            And then, 21 August 2026.
          </p>
          <Link
            to="/365"
            className="mt-6 inline-block text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
          >
            continue to 365
          </Link>
        </Reveal>
      </section>

      {openLetter ? (
        <LetterReader letter={openLetter} onClose={() => setOpenLetter(null)} />
      ) : null}
    </RoomShell>
  );
}

function LetterReader({ letter, onClose }: { letter: Letter; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Letter ${letter.n}: ${letter.title}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-violet-night/90 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close letter"
        className="fixed top-5 right-5 z-10 text-[10px] tracking-room text-cream/70 transition-colors hover:text-cream"
      >
        close
      </button>
      <div className="mx-auto min-h-screen w-full max-w-2xl px-4 py-14 md:py-20">
        <article
          className="paper u-reveal rounded-sm px-7 py-12 shadow-[var(--shadow-soft)] md:px-16 md:py-20"
          data-shown="true"
        >
          <header className="flex items-baseline justify-between border-b border-ink/10 pb-6">
            <span className="text-display text-5xl text-ink/40">
              {String(letter.n).padStart(2, "0")}
            </span>
            <span className="text-[10px] tracking-room text-ink/50">{letter.dateLabel}</span>
          </header>

          <h1 className="text-display mt-10 text-4xl leading-tight text-ink md:text-5xl">
            {letter.title}
          </h1>
          {letter.milestone ? (
            <p className="text-hand mt-3 text-xl text-ink/60">7 august 2025</p>
          ) : null}

          <div className="mt-8 space-y-6">
            {letter.body.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="text-[1.05rem] leading-[1.9] text-ink/85">{p}</p>
              </Reveal>
            ))}
          </div>

          <footer className="mt-14 flex items-end justify-between border-t border-ink/10 pt-6">
            <p className="text-hand text-2xl text-ink/70">{letter.signoff ?? "— Shree"}</p>
            <Dahlia size={26} className="text-ink/25" />
          </footer>
          {letter.isPlaceholder ? (
            <p className="mt-8 text-[10px] tracking-room text-ink/35">
              editable placeholder content
            </p>
          ) : null}
        </article>
      </div>
    </div>
  );
}