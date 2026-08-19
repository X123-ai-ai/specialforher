import { CHAPTERS, type Chapter } from "@/data/chapters";
import { ANNIVERSARY_VIDEO } from "@/data/media";
import { Reveal, StaggerText } from "@/components/universe/Reveal";
import {
  AnniversaryVideo,
  MediaPlaceholder,
} from "@/components/universe/Media";
import { Dahlia, Eyebrow, Rule } from "@/components/universe/RoomShell";
import { StarField } from "@/components/universe/StarField";

export function ChapterSection({ chapter }: { chapter: Chapter }) {
  const dark = ["immersive", "constellation", "opening", "closing"].includes(
    chapter.layout,
  );

  return (
    <section
      id={chapter.id}
      aria-labelledby={`${chapter.id}-title`}
      className={[
        "relative flex min-h-screen scroll-mt-0 items-center px-6 py-24 md:px-12",
        dark ? "bg-violet-night" : "bg-background",
      ].join(" ")}
    >
      {dark ? (
        <StarField
          count={40}
          seed={chapter.n.charCodeAt(1) * 3}
          opacity={0.35}
        />
      ) : null}

      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal>
          <Eyebrow>chapter {chapter.n}</Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h2
            id={`${chapter.id}-title`}
            className="text-display mt-4 text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl"
          >
            {chapter.title}
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="text-display mt-3 max-w-xl text-lg text-lavender italic md:text-xl">
            {chapter.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <Rule className="mt-8" />
        </Reveal>

        <div className="mt-10">
          <ChapterBody chapter={chapter} />
        </div>

        {chapter.isPlaceholder ? (
          <p className="mt-12 text-[10px] tracking-room text-muted-foreground/70">
            editable placeholder content
          </p>
        ) : null}
      </div>
    </section>
  );
}

function Paragraphs({
  body,
  className,
}: {
  body: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      {body.map((p, i) => (
        <Reveal key={i} delay={i * 110}>
          <p className="mb-5 text-base leading-[1.95] text-muted-foreground md:text-lg">
            {p}
          </p>
        </Reveal>
      ))}
    </div>
  );
}

function ChapterBody({ chapter }: { chapter: Chapter }) {
  switch (chapter.layout) {
    case "opening":
      return (
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <Paragraphs body={chapter.body} />

          <div className="space-y-4 self-center">
            {chapter.items?.map((it, i) => (
              <Reveal key={it.label} delay={i * 140}>
                <div className="flex items-baseline justify-between border-b border-lavender/15 pb-3">
                  <span className="text-[10px] tracking-room text-muted-foreground">
                    {it.label}
                  </span>

                  <span className="text-display text-2xl text-lavender">
                    {it.text}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "split":
      return (
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Paragraphs body={chapter.body} />

          <Reveal delay={200}>
            <MediaPlaceholder
              label={chapter.media?.alt ?? "media placeholder"}
            />
          </Reveal>
        </div>
      );

    case "quote":
      return (
        <div className="max-w-3xl">
          <StaggerText
            as="blockquote"
            text={chapter.quote ?? ""}
            step={70}
            className="text-display text-2xl leading-snug text-foreground italic sm:text-4xl"
          />

          <Paragraphs body={chapter.body} className="mt-10" />
        </div>
      );

    case "cards":
      return (
        <div>
          <Paragraphs body={chapter.body} className="max-w-2xl" />

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {chapter.items?.map((it, i) => (
              <Reveal key={it.label} delay={i * 100}>
                <div className="group rounded-sm border border-lavender/15 bg-card/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lavender/45">
                  <span className="text-display text-3xl text-lavender/60">
                    {it.label}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {it.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "timeline":
      return (
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Paragraphs body={chapter.body} />

          <ol className="relative border-l border-lavender/20 pl-8">
            {chapter.items?.map((it, i) => (
              <Reveal key={it.label} delay={i * 120}>
                <li className="relative pb-9">
                  <span className="absolute top-2 -left-[2.15rem] h-2 w-2 rounded-full bg-lavender" />

                  <p className="text-[10px] tracking-room text-muted-foreground">
                    {it.label}
                  </p>

                  <p className="text-display mt-1 text-xl text-foreground">
                    {it.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      );

    case "constellation":
      return (
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Paragraphs body={chapter.body} />

          <Reveal delay={200}>
            <svg
              viewBox="0 0 200 140"
              className="w-full text-lavender"
              aria-hidden
            >
              <polyline
                points="20,100 60,70 100,90 140,40 180,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                strokeDasharray="240"
                strokeDashoffset="240"
                style={{ animation: "u-draw 2.4s ease forwards" }}
              />

              {[
                [20, 100],
                [60, 70],
                [100, 90],
                [140, 40],
                [180, 60],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.4" fill="currentColor">
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur={`${3 + i}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}
            </svg>
          </Reveal>
        </div>
      );

    case "immersive":
      return (
        <div className="max-w-2xl">
          <Paragraphs body={chapter.body} />
        </div>
      );

    case "closing":
      return (
        <div className="max-w-3xl">
          <Paragraphs body={chapter.body} />

          <Reveal delay={300}>
            <Dahlia size={40} className="mt-10 u-float" />
          </Reveal>

          {/* The video she made for you */}
          <Reveal delay={500}>
            <div className="mt-20">
              <div className="mb-7 max-w-xl">
                <p className="text-[10px] uppercase tracking-[0.3em] text-lavender/60">
                  A little something you left with me
                </p>

                <h3 className="text-display mt-3 text-2xl text-foreground sm:text-3xl">
                  The Video You Made For Me
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Some things become memories simply because someone cared
                  enough to make them for you.
                </p>
              </div>

              <AnniversaryVideo
                src={ANNIVERSARY_VIDEO.src}
                title={ANNIVERSARY_VIDEO.title}
                subtitle={ANNIVERSARY_VIDEO.subtitle}
              />
            </div>
          </Reveal>
        </div>
      );

    case "fullscreen":
    default:
      return (
        <Paragraphs
          body={chapter.body}
          className="max-w-2xl"
        />
      );
  }
}

export function ChapterProgress({ activeId }: { activeId: string }) {
  return (
    <nav
      aria-label="Chapters"
      className="fixed top-1/2 left-3 z-30 hidden -translate-y-1/2 md:block"
    >
      <ul className="space-y-2">
        {CHAPTERS.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              title={`${c.n} — ${c.title}`}
              className="group flex items-center gap-2"
            >
              <span
                className={[
                  "block h-px transition-all duration-500",
                  activeId === c.id
                    ? "w-7 bg-lavender"
                    : "w-3 bg-lavender/30 group-hover:w-5",
                ].join(" ")}
              />

              <span className="sr-only">{c.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}