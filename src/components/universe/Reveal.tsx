import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  once?: boolean;
};

export function Reveal({ children, as, delay = 0, className, once = true }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-shown={shown ? "true" : "false"}
      className={cn("u-reveal", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Staggered words/lines reveal for emotional headings. */
export function StaggerText({
  text,
  className,
  step = 90,
  as,
}: {
  text: string;
  className?: string;
  step?: number;
  as?: ElementType;
}) {
  const Tag = (as ?? "p") as ElementType;
  const words = text.split(" ");
  return (
    <Tag className={className}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom">
          <Reveal as="span" delay={i * step} className="inline-block">
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </Reveal>
        </span>
      ))}
    </Tag>
  );
}