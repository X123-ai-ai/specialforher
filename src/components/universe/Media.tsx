import { useState } from "react";
import { cn } from "@/lib/utils";

/** Elegant empty state used until the creator supplies real media. */
export function MediaPlaceholder({
  label,
  aspect = "4 / 3",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-sm border border-lavender/15 bg-card/40",
        className,
      )}
      style={{ aspectRatio: aspect }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, oklch(0.66 0.13 305 / 0.18), transparent 70%)",
        }}
      />
      <figcaption className="relative max-w-[70%] text-center text-[11px] leading-relaxed tracking-room text-muted-foreground">
        {label}
      </figcaption>
    </figure>
  );
}

/**
 * Optional audio. Disabled until `src` is provided by the creator —
 * nothing autoplays, ever.
 */
export function AudioNote({
  src,
  title,
  className,
}: {
  src?: string | undefined;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-sm border border-lavender/15 bg-card/40 px-5 py-4",
        !src && "opacity-60",
        className,
      )}
    >
      <p className="text-[11px] tracking-room text-muted-foreground">{title}</p>

      {src ? (
        <audio controls preload="none" src={src} className="mt-3 w-full">
          <track kind="captions" />
        </audio>
      ) : (
        <p className="mt-2 text-sm text-muted-foreground">
          No recording added yet — drop an audio file in and pass its path to
          enable this player.
        </p>
      )}
    </div>
  );
}

/**
 * The video she made for the anniversary website.
 * Opens into a cinematic fullscreen viewer when clicked.
 */
export function AnniversaryVideo({
  src,
  title = "The Video You Made For Me",
  subtitle = "For the days when I needed to rise again.",
  className,
}: {
  src: string;
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Video section / trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full overflow-hidden rounded-sm border border-lavender/15 bg-card/40 text-left",
          "transition-all duration-500 hover:border-lavender/35",
          "focus:outline-none focus:ring-1 focus:ring-lavender/40",
          className,
        )}
        aria-label={`Open ${title}`}
      >
        <div className="relative aspect-video overflow-hidden">
          <video
            src={src}
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-85"
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-black/45">
              <span className="ml-1 text-xl">▶</span>
            </span>
          </div>

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
              A little piece of us
            </p>

            <h3 className="mt-2 text-xl text-white md:text-2xl">
              {title}
            </h3>

            <p className="mt-1 text-sm text-white/65">
              {subtitle}
            </p>
          </div>
        </div>
      </button>

      {/* Fullscreen viewer */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setOpen(false)}
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white/70 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
            aria-label="Close video"
          >
            ×
          </button>

          {/* Video */}
          <div
            className="relative flex max-h-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              src={src}
              controls
              autoPlay
              playsInline
              className="max-h-[90vh] max-w-full rounded-sm object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}