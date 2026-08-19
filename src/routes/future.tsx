import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FUTURE_ITEMS, FUTURE_SECTIONS } from "@/data/future";
import { RoomShell, Eyebrow, Rule, Dahlia } from "@/components/universe/RoomShell";
import { Reveal, StaggerText } from "@/components/universe/Reveal";
import { StarField } from "@/components/universe/StarField";
import { Secret } from "@/components/universe/Secret";

export const Route = createFileRoute("/future")({
  head: () => ({
    meta: [
      { title: "The Future — Everything Still Ahead | Anju × Shree" },
      {
        name: "description",
        content:
          "Places we'll go, things we'll do, a home we'll build, and the pages we haven't written yet.",
      },
      { property: "og:title", content: "The Future" },
      { property: "og:description", content: "365 looks back. This looks ahead." },
    ],
  }),
  component: FutureRoom,
});

function FutureRoom() {
  return (
    <RoomShell label="VI · the future" className="bg-violet-night">
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
        <StarField count={70} seed={41} opacity={0.5} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent, oklch(0.45 0.13 320 / 0.35) 55%, oklch(0.78 0.1 65 / 0.35))",
          }}
        />
        <Reveal>
          <Eyebrow className="relative">what comes next</Eyebrow>
        </Reveal>
        <StaggerText
          as="h1"
          text="The Future"
          step={140}
          className="text-display relative mt-4 text-6xl leading-none text-foreground md:text-8xl"
        />
        <Reveal delay={700}>
          <p className="relative mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            365 was the looking back. This is the part that hasn't happened yet.
          </p>
        </Reveal>
      </section>

      <section className="room-dawn relative">
        <div className="mx-auto max-w-5xl px-6 py-28">
          {FUTURE_SECTIONS.map((section, si) => {
            const items = FUTURE_ITEMS.filter((i) => i.section === section.id);
            return (
              <Reveal key={section.id} delay={si * 60} className="mb-16">
                <div className="flex items-baseline gap-4">
                  <span className="text-[10px] tracking-widest text-cream/60">
                    {String(si + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-display text-3xl text-cream md:text-4xl">{section.title}</h2>
                </div>
                <p className="mt-1 pl-10 text-xs text-cream/60">{section.hint}</p>
                <div className="mt-6 grid gap-3 pl-10 sm:grid-cols-2">
                  {items.length === 0 ? (
                    <p className="text-sm text-cream/50">[Nothing written here yet.]</p>
                  ) : (
                    items.map((item) => <FutureCard key={item.id} {...item} />)
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <StarField count={40} seed={57} opacity={0.35} />
        <Reveal>
          <Dahlia size={40} className="u-float" />
          <Rule className="mx-auto mt-10" />
          <p className="text-display mt-10 text-3xl text-foreground md:text-5xl">
            To be continued.
          </p>
          <p className="text-hand mt-4 text-2xl text-lavender">still choosing you</p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
            >
              back to the universe
            </Link>
            <Secret id="future-horizon" />
          </div>
        </Reveal>
      </section>
    </RoomShell>
  );
}

function FutureCard({
  title,
  body,
  isPlaceholder,
}: {
  title: string;
  body: string;
  isPlaceholder: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      aria-expanded={open}
      className="rounded-sm border border-cream/20 bg-cream/5 p-5 text-left backdrop-blur-sm transition-all duration-500 hover:border-cream/45"
    >
      <span className="text-display block text-xl text-cream">{title}</span>
      <span
        className="grid transition-all duration-500"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <span className="overflow-hidden">
          <span className="mt-3 block text-sm leading-relaxed text-cream/75">{body}</span>
          {isPlaceholder ? (
            <span className="mt-3 block text-[10px] tracking-room text-cream/40">
              editable placeholder
            </span>
          ) : null}
        </span>
      </span>
      <span className="mt-3 block text-[10px] tracking-room text-cream/50">
        {open ? "close" : "open"}
      </span>
    </button>
  );
}