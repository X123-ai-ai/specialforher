import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { RoomShell, Dahlia, Eyebrow, Rule } from "@/components/universe/RoomShell";
import { Reveal } from "@/components/universe/Reveal";
import { AudioNote } from "@/components/universe/Media";
import { Secret } from "@/components/universe/Secret";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter From Me | Anju × Shree" },
      {
        name: "description",
        content: "The quietest room: one long letter, written by hand and meant only for you.",
      },
      { property: "og:title", content: "A Letter From Me" },
      { property: "og:description", content: "Open when you have time to read slowly." },
    ],
  }),
  component: LetterRoom,
});

/** EDITABLE — the long-form letter. Replace every paragraph. */
const LETTER_BODY: string[] = [
  "My Dearest Anju,",
  "My Dearest Anju, This has been the greatest ever year in my entire life and more to come. I really really love you so much, more than I can ever express. All the cries at 2 AM, all the sorrows before I met you, all the hardships I've had to go through, it all proved worth it. RadhaMadhav ji blessed me with you. This year wasn't just a year of being together. It was a year of knowing you, understanding you, growing with you and slowly building an us. From the two people who started as almost enemies to the two people who now can't imagine their lives without each other, I still find our story so beautiful. There were so many ordinary days too. Days where we simply talked, studied, stayed on call, made each other smile and laugh, or even just existed together. Days when you were at your high, days when we both were at our lows, what mattered was that we stayed. Those ordinary moments became some of my favourite parts of this year. It wasn't always easy. We had our clashes, the biggest of misunderstandings, difficult days, and moments where things hurt more than either of us wanted them to. But somehow, through all of that, we stayed. I think that means more to me than having a perfect year ever could. We didn't have a perfect relationship. We had a real one. And every time things became difficult, we still found our way back to each other. I don't want to forget those difficult parts either, because they taught me that loving you isn't only about loving the easy version of us. I see so much more in you than you sometimes see in yourself. I see your mind, your curiosity, your dreams, your writing, your kindness, your little worlds and the person you're still becoming. I see the girl who wants to learn, who wants to build a life she can be proud of, who still dreams even when things get difficult. I don't need you to be perfect. I don't need you to have everything figured out. I just want you to always know that I see you, and I am proud of you for being here, for continuing, and for becoming more of yourself every day. I saw the Anju who woke up to help me prepare for MY first presentation when I was nervous and she could have slept in. The Anju who was even more happy than me when I even just participated well or did well on a test. The Anju who was even more happy about what I did, and WITH me in my lowest. I saw the Anju who celebrated my smallest victories as if they were her own, who stood beside me when I doubted myself, and who made me feel that my happiness was something worth celebrating. This year changed me in ways I don't think I could have imagined before meeting you. You became someone I could share my happiness with, but more importantly, someone I could come to when things weren't okay. You gave me a place where I could be completely myself, where I could be silly, vulnerable, annoying, emotional, ambitious, all of it, and still know that I was loved. You made me understand how beautiful it is to have someone who doesn't just celebrate your best moments, but genuinely wants to stand beside you through everything else too. And I hope I've given you even a fraction of what you've given me. I can't promise that every day ahead of us will be perfect. I can't promise that we'll never disagree, never misunderstand each other or never have difficult days again. But I can promise that I will keep trying. I promise to keep listening. I promise to keep learning you. I promise to keep choosing you. I promise to celebrate your happiness, stand beside you when things are difficult, and remind you of yourself when you forget how much you're capable of. I promise that I won't treat our love like something that can simply be taken for granted. And more than anything, I promise that I want to keep building this with you. One day at a time. One memory at a time. One ordinary day at a time. Because this year wasn't the end of something. It was our first year. There are still so many places we haven't been, things we haven't done, dreams we haven't chased, ordinary days we haven't lived, and memories we haven't made yet. And Anju, if this is what our first year looked like, I can't wait to see what the rest of our story becomes. I love you, Anju. Forever & Ever.",
];
const LETTER_SIGNOFF = "— Your Dearest Shree";
/** Provide a path here (e.g. "/audio/letter.mp3") to enable the recording. */
const LETTER_AUDIO_SRC: string | undefined = undefined;

function LetterRoom() {
  const [opened, setOpened] = useState(false);

  return (
    <RoomShell label="V · a letter" className="bg-[oklch(0.13_0.035_290)]">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 30%, oklch(0.8 0.06 80 / 0.12), transparent 75%)",
        }}
      />

      {!opened ? (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <div className="u-float relative mx-auto h-44 w-72 max-w-full">
              <div className="absolute inset-0 rounded-sm border border-cream/25 bg-[linear-gradient(180deg,oklch(0.94_0.02_85),oklch(0.88_0.03_85))] shadow-[var(--shadow-soft)]" />
              <svg viewBox="0 0 288 176" className="absolute inset-0 h-full w-full" aria-hidden>
                <path d="M0 0 L144 96 L288 0" fill="none" stroke="oklch(0.6 0.03 85)" strokeWidth="1" />
              </svg>
              <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-violet-deep/90">
                <Dahlia size={22} className="text-cream/80" />
              </span>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <Eyebrow className="mt-12">for anju</Eyebrow>
            <h1 className="text-display mt-4 text-4xl text-foreground md:text-5xl">
              A letter from me
            </h1>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Read it when you have time to read slowly.
            </p>
          </Reveal>

          <Reveal delay={550}>
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="mt-10 rounded-full border border-cream/30 px-9 py-3 text-[10px] tracking-room text-cream transition-all duration-500 hover:border-cream/70 hover:shadow-[var(--shadow-glow)]"
            >
              open letter
            </button>
          </Reveal>
        </section>
      ) : (
        <section className="relative mx-auto w-full max-w-2xl px-4 py-24 md:py-32">
          <article
            className="paper u-reveal rounded-sm px-7 py-14 shadow-[var(--shadow-soft)] md:px-16 md:py-24"
            data-shown="true"
          >
            <header className="flex items-center justify-between">
              <span className="text-[10px] tracking-room text-ink/50">21 august 2026</span>
              <Dahlia size={22} className="text-ink/25" />
            </header>

            <div className="mt-12 space-y-7">
              {LETTER_BODY.map((p, i) => (
                <Reveal key={i} delay={i * 130}>
                  <p
                    className={
                      i === 0
                        ? "text-display text-3xl text-ink"
                        : "text-[1.05rem] leading-[2] text-ink/85"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <footer className="mt-14 border-t border-ink/10 pt-8">
              <p className="text-hand text-3xl text-ink/75">{LETTER_SIGNOFF}</p>
              
              <span className="mt-6 flex justify-end">
                <Secret id="letter-seal" />
              </span>
            </footer>
          </article>

          <div className="mt-10">
            <AudioNote title="listen to shree" src={LETTER_AUDIO_SRC} />
          </div>

          <Rule className="mx-auto mt-14" />
          <button
            type="button"
            onClick={() => setOpened(false)}
            className="mx-auto mt-8 block text-[10px] tracking-room text-muted-foreground transition-colors hover:text-lavender"
          >
            fold it back
          </button>
        </section>
      )}
    </RoomShell>
  );
}