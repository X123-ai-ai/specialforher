import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CATEGORY_LABEL, CONSTELLATIONS, STARS, type Star } from "@/data/stars";
import { RoomShell, Eyebrow, Dahlia } from "@/components/universe/RoomShell";
import { StarField } from "@/components/universe/StarField";
import { MediaPlaceholder, AudioNote } from "@/components/universe/Media";
import { Secret } from "@/components/universe/Secret";

export const Route = createFileRoute("/universe")({
  head: () => ({
    meta: [
      { title: "Our Universe — A Map of Our Stars | Anju × Shree" },
      {
        name: "description",
        content:
          "An interactive star map of memories, milestones and things still ahead. Pan, zoom, and open a star.",
      },
      { property: "og:title", content: "Our Universe — Star Map" },
      { property: "og:description", content: "These are our stars." },
    ],
  }),
  component: UniverseRoom,
});

const MIN_ZOOM = 0.7;
const MAX_ZOOM = 4;
const PLANE = 1400;

function clamp(v: number, a: number, b: number) {
  return Math.min(b, Math.max(a, v));
}

function UniverseRoom() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState<Star | null>(null);
  const [dragging, setDragging] = useState(false);

  const dragState = useRef<{
    x: number;
    y: number;
    ox: number;
    oy: number;
  } | null>(null);

  const view = useRef({ zoom: 1, offset: { x: 0, y: 0 } });
  view.current = { zoom, offset };

  const wheelRef = useRef<(e: WheelEvent) => void>(() => {});

  const ambientStars = useMemo(
    () =>
      Array.from({ length: 92 }, (_, i) => ({
        left: `${(i * 47.37 + 3) % 100}%`,
        top: `${(i * 71.19 + 7) % 100}%`,
        size: 1 + ((i * 13) % 3),
        opacity: 0.12 + ((i * 17) % 32) / 100,
        delay: `${(i * 0.37) % 6}s`,
        duration: `${4 + ((i * 11) % 7)}s`,
      })),
    [],
  );

  wheelRef.current = (e: WheelEvent) => {
    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    const dy =
      e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);

    const cur = view.current;
    const next = clamp(
      cur.zoom * Math.exp(-dy * 0.0015),
      MIN_ZOOM,
      MAX_ZOOM,
    );
    const k = next / cur.zoom;

    setOffset({
      x: px - (px - cur.offset.x) * k,
      y: py - (py - cur.offset.y) * k,
    });
    setZoom(next);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      wheelRef.current(e);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const zoomBy = useCallback((factor: number) => {
    const el = containerRef.current;
    const cur = view.current;
    const next = clamp(cur.zoom * factor, MIN_ZOOM, MAX_ZOOM);
    const rect = el?.getBoundingClientRect();
    const px = (rect?.width ?? 0) / 2;
    const py = (rect?.height ?? 0) / 2;
    const k = next / cur.zoom;

    setOffset({
      x: px - (px - cur.offset.x) * k,
      y: py - (py - cur.offset.y) * k,
    });
    setZoom(next);
  }, []);

  const reset = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest("[data-star]")) return;

    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragState.current = {
      x: e.clientX,
      y: e.clientY,
      ox: offset.x,
      oy: offset.y,
    };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragState.current;
    if (!d) return;

    setOffset({
      x: d.ox + (e.clientX - d.x),
      y: d.oy + (e.clientY - d.y),
    });
  };

  const endDrag = () => {
    dragState.current = null;
    setDragging(false);
  };

  const pos = (s: Star) => ({
    left: (s.x / 100) * PLANE,
    top: (s.y / 100) * PLANE,
  });

  return (
    <RoomShell label="IV · our universe" className="bg-violet-night">
      <section className="relative h-screen w-full overflow-hidden bg-[#09070f] text-foreground">
        {/* Deep-space atmosphere */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 52%, rgba(142, 104, 190, 0.16) 0%, rgba(74, 48, 105, 0.09) 22%, transparent 52%),
              radial-gradient(circle at 18% 18%, rgba(180, 143, 220, 0.07) 0%, transparent 28%),
              radial-gradient(circle at 84% 78%, rgba(123, 83, 160, 0.08) 0%, transparent 30%),
              linear-gradient(145deg, #09070f 0%, #0d0917 48%, #08070d 100%)
            `,
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.48) 100%)",
          }}
        />

        {/* Very distant dust / stars */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {ambientStars.map((star, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-lavender"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                opacity: star.opacity,
                animation: `u-dust ${star.duration} ease-in-out ${star.delay} infinite`,
              }}
            />
          ))}
        </div>

        <StarField count={150} seed={77} opacity={0.32} />

        {/* Soft central constellation glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[54%] h-[34rem] w-[48rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(168, 128, 205, 0.075), transparent 68%)",
          }}
        />

        <div
          ref={containerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className={`absolute inset-0 touch-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ touchAction: "none" }}
        >
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: PLANE,
              height: PLANE,
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
              transition: dragging
                ? "none"
                : "transform 420ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Constellation glow layer */}
            <svg
              className="pointer-events-none absolute inset-0"
              width={PLANE}
              height={PLANE}
              aria-hidden
            >
              {CONSTELLATIONS.map((c) => {
                const pts = c.path
                  .map((id) => STARS.find((s) => s.id === id))
                  .filter((s): s is Star => Boolean(s))
                  .map(
                    (s) =>
                      `${(s.x / 100) * PLANE},${(s.y / 100) * PLANE}`,
                  )
                  .join(" ");

                return (
                  <g key={c.id}>
                    <polyline
                      points={pts}
                      fill="none"
                      stroke="rgba(177, 142, 216, 0.11)"
                      strokeWidth={7 / zoom}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="blur(5px)"
                    />
                    <polyline
                      points={pts}
                      fill="none"
                      stroke="rgba(202, 178, 229, 0.42)"
                      strokeWidth={0.9 / zoom}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="1600"
                      strokeDashoffset="1600"
                      style={{ animation: "u-draw 3s ease forwards" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Interactive memory stars */}
            {STARS.map((s) => {
              const size = clamp(18 - s.magnitude * 2.6, 10, 18);
              const isActive = active?.id === s.id;

              return (
                <button
                  key={s.id}
                  data-star
                  type="button"
                  onClick={() => setActive(s)}
                  aria-label={`${s.title} — ${CATEGORY_LABEL[s.category]}`}
                  className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none ${
                    isActive ? "z-20" : "z-10"
                  }`}
                  style={{
                    ...pos(s),
                    width: size * 2.8,
                    height: size * 2.8,
                  }}
                >
                  {/* Large soft halo */}
                  <span
                    aria-hidden
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/20 blur-md transition-all duration-500 ${
                      isActive
                        ? "h-[2.5rem] w-[2.5rem] opacity-100"
                        : "h-[1.7rem] w-[1.7rem] opacity-55 group-hover:h-[2.3rem] group-hover:w-[2.3rem] group-hover:opacity-100"
                    }`}
                  />

                  {/* Outer ring */}
                  <span
                    aria-hidden
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lavender/20 transition-all duration-500 ${
                      isActive
                        ? "h-[1.9rem] w-[1.9rem] scale-100 opacity-80"
                        : "h-[1.2rem] w-[1.2rem] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-60 group-focus-visible:scale-100 group-focus-visible:opacity-60"
                    }`}
                  />

                  {/* Luminous core */}
                  <span
                    aria-hidden
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6efff] shadow-[0_0_7px_2px_rgba(224,205,247,0.9),0_0_22px_7px_rgba(171,132,211,0.38)] transition-transform duration-500 ${
                      isActive
                        ? "scale-125"
                        : "group-hover:scale-125 group-focus-visible:scale-125"
                    }`}
                    style={{
                      width: size * 0.46,
                      height: size * 0.46,
                      animation: `u-twinkle ${
                        4 + s.magnitude
                      }s ease-in-out infinite`,
                    }}
                  />

                  {/* Label — never expose raw placeholder text */}
                  {!s.isPlaceholder ? (
                    <span
                      className="pointer-events-none absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-[11px] tracking-[0.02em] text-lavender/0 transition-all duration-300 group-hover:translate-y-0 group-hover:text-lavender/90 group-focus-visible:translate-y-0 group-focus-visible:text-lavender/90"
                      style={{ fontSize: 11 / zoom + 4 }}
                    >
                      {s.title}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Header */}
        <div className="pointer-events-none absolute inset-x-0 top-16 flex flex-col items-center gap-3 px-6 text-center md:top-20">
          <Eyebrow>our universe</Eyebrow>
          <h1 className="text-display text-4xl leading-none text-foreground md:text-6xl">
            These are our stars.
          </h1>
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground/80">
            Every one of them holds a little piece of us.
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.28em] text-muted-foreground/45">
            drag · zoom · discover
          </p>
        </div>

        {/* Quiet legend */}
        <div className="pointer-events-none absolute bottom-7 right-6 hidden items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/45 md:flex">
          <span className="flex items-center gap-2">
            <i className="h-1.5 w-1.5 rounded-full bg-lavender/80 shadow-[0_0_8px_rgba(190,155,220,0.7)]" />
            memories
          </span>
          <span className="flex items-center gap-2">
            <i className="h-px w-4 bg-lavender/40" />
            milestones
          </span>
        </div>

        {/* Map controls */}
        <div className="absolute bottom-6 left-5 flex items-center gap-2 md:left-10">
          <MapButton label="zoom in" onClick={() => zoomBy(1.35)}>
            +
          </MapButton>
          <MapButton label="zoom out" onClick={() => zoomBy(1 / 1.35)}>
            −
          </MapButton>
          <button
            type="button"
            onClick={reset}
            className="ml-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70 transition-colors hover:text-lavender"
          >
            recentre
          </button>
          <Secret id="star-quiet" className="ml-3" />
        </div>

        {/* Local styles keep the room self-contained */}
        <style>{`
          @keyframes u-draw {
            to { stroke-dashoffset: 0; }
          }

          @keyframes u-twinkle {
            0%, 100% {
              opacity: .72;
              filter: brightness(.95);
            }
            50% {
              opacity: 1;
              filter: brightness(1.22);
            }
          }

          @keyframes u-dust {
            0%, 100% {
              opacity: .28;
              transform: scale(.9);
            }
            50% {
              opacity: .72;
              transform: scale(1.15);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: .01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
            }
          }
        `}</style>
      </section>

      {active ? (
        <StarPanel star={active} onClose={() => setActive(null)} />
      ) : null}
    </RoomShell>
  );
}

function MapButton({
  children,
  onClick,
  label,
}: {
  children: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-lavender/20 bg-[#100c19]/70 text-lg text-lavender backdrop-blur-md transition-all duration-300 hover:border-lavender/55 hover:bg-[#171021]/80 hover:shadow-[0_0_20px_rgba(174,135,210,0.12)] active:scale-95"
    >
      {children}
    </button>
  );
}

function StarPanel({
  star,
  onClose,
}: {
  star: Star;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label={star.title}
      className="u-reveal fixed inset-x-0 bottom-0 z-40 max-h-[78vh] overflow-y-auto border-t border-lavender/20 bg-[#0e0a16]/94 p-7 shadow-[0_-20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:inset-y-0 md:right-0 md:left-auto md:max-h-none md:w-[27rem] md:border-t-0 md:border-l md:shadow-[-30px_0_90px_rgba(0,0,0,0.25)]"
      data-shown="true"
    >
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.24em] text-lavender/65">
            {CATEGORY_LABEL[star.category]}
          </p>

          <h2 className="text-display mt-3 text-3xl leading-tight text-foreground md:text-4xl">
            {star.title}
          </h2>

          {star.date ? (
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-muted-foreground/65">
              {star.date}
            </p>
          ) : null}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close star details"
          className="rounded-full border border-lavender/15 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-muted-foreground/75 transition-all hover:border-lavender/45 hover:text-lavender"
        >
          close
        </button>
      </div>

      <div className="mb-7 h-px w-12 bg-lavender/35" />

      <p className="text-sm leading-[1.9] text-muted-foreground">
        {star.description}
      </p>

      {star.media?.kind === "image" ? (
        <MediaPlaceholder label={star.media.alt} className="mt-7" />
      ) : null}

      {star.media?.kind === "video" ? (
        <MediaPlaceholder
          label={star.media.alt}
          aspect="16 / 9"
          className="mt-7"
        />
      ) : null}

      {star.media?.kind === "audio" ? (
        <AudioNote title={star.media.alt} className="mt-7" />
      ) : null}

      {star.isPlaceholder ? (
        <p className="mt-8 rounded-md border border-lavender/10 bg-lavender/[0.03] px-4 py-3 text-[9px] uppercase tracking-[0.16em] text-muted-foreground/45">
          this star is waiting for its story
        </p>
      ) : null}

      <div className="mt-12 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/35">
          a piece of our universe
        </span>
        <Dahlia size={26} className="opacity-55" />
      </div>
    </aside>
  );
}