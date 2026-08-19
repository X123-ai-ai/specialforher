import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CHAPTERS } from "@/data/chapters";
import { ChapterSection, ChapterProgress } from "@/components/universe/Chapter";
import { RoomShell, Eyebrow, Rule, Dahlia } from "@/components/universe/RoomShell";
import { Reveal, StaggerText } from "@/components/universe/Reveal";
import { StarField } from "@/components/universe/StarField";

export const Route = createFileRoute("/365")({
  head: () => ({
    meta: [
      { title: "365 — Our Story in Fifteen Chapters | Anju × Shree" },
      {
        name: "description",
        content:
          "A cinematic book of one year: the beginning, 7 August, 21 August, the storms, and staying.",
      },
      { property: "og:title", content: "365 — Our Story" },
      { property: "og:description", content: "Not 365 perfect days. 365 real ones." },
    ],
  }),
  component: StoryRoom,
});

function StoryRoom() {
  const [activeId, setActiveId] = useState(CHAPTERS[0]?.id ?? "");

  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActiveId(e.target.id);
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <RoomShell label="II · 365" className="bg-background">
      <ChapterProgress activeId={activeId} />

      <section className="relative flex min-h-screen flex-col items-center justify-center bg-violet-night px-6 text-center">
        <StarField count={80} seed={21} opacity={0.5} />
        <Reveal>
          <span className="text-display relative block text-[6rem] leading-none text-lavender/80 md:text-[11rem]">
            365
          </span>
        </Reveal>
        <StaggerText
          as="p"
          text="Days of choosing each other."
          className="text-display relative mt-4 text-2xl text-foreground md:text-3xl"
        />
        <Reveal delay={900}>
          <p className="relative mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Fifteen chapters. Scroll slowly — it was a long year.
          </p>
          <Rule className="relative mx-auto mt-8" />
        </Reveal>
      </section>

      {CHAPTERS.map((c) => (
        <ChapterSection key={c.id} chapter={c} />
      ))}

      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-violet-night px-6 text-center">
        <StarField count={50} seed={9} opacity={0.4} />
        <Reveal>
          <Dahlia size={36} className="u-float" />
          <Eyebrow className="mt-8">the story keeps going</Eyebrow>
          <p className="text-display mt-4 text-3xl text-foreground md:text-4xl">
            Some of it is being written by hand.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <Link
              to="/little-things"
              className="text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
            >
              365 little things
            </Link>
            <Link
              to="/future"
              className="text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
            >
              the future
            </Link>
          </div>
        </Reveal>
      </section>
    </RoomShell>
  );
}