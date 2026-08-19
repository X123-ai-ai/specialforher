import { useState } from "react";
import { getSecret } from "@/data/secrets";
import { cn } from "@/lib/utils";

/**
 * An unadvertised discovery trigger. Renders a nearly-invisible mark that
 * reveals whatever the creator configured in src/data/secrets.ts.
 */
export function Secret({ id, className, label }: { id: string; className?: string; label?: string }) {
  const secret = getSecret(id);
  const [open, setOpen] = useState(false);
  if (!secret) return null;

  return (
    <span className={cn("relative inline-flex", className)}>
      <button
        type="button"
        aria-label={label ?? "\u00A0"}
        onClick={() => setOpen((o) => !o)}
        className="h-3 w-3 rounded-full border border-lavender/25 opacity-25 transition-all duration-700 hover:scale-125 hover:opacity-90 focus-visible:opacity-90"
      />
      {open ? (
        <span
          role="note"
          className="u-reveal absolute bottom-6 left-1/2 z-50 w-64 -translate-x-1/2 rounded-sm border border-lavender/25 bg-popover/95 p-4 text-left text-sm leading-relaxed text-foreground shadow-[var(--shadow-soft)] backdrop-blur"
          data-shown="true"
        >
          {secret.kind === "message" ? <span className="text-hand text-lg">{secret.text}</span> : null}
          {secret.kind === "image" && secret.src ? (
            <img src={secret.src} alt="" loading="lazy" className="w-full rounded-sm" />
          ) : null}
          {secret.kind === "audio" && secret.src ? (
            <audio controls preload="none" src={secret.src} className="w-full" />
          ) : null}
          {secret.kind === "link" && secret.href ? (
            <a href={secret.href} className="underline underline-offset-4">
              {secret.text ?? "Somewhere else"}
            </a>
          ) : null}
          {secret.bookPage ? (
            <span className="mt-2 block text-[10px] tracking-room text-muted-foreground">
              page {secret.bookPage}
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}