/**
 * HIDDEN DISCOVERIES — configuration only.
 * Add entries here; the <Secret /> component renders an unadvertised trigger
 * wherever you place it, keyed by id. Nothing about these is announced in the UI.
 *
 * kind:
 *   "message" — reveals `text`
 *   "image"   — reveals `src` (add the file yourself)
 *   "audio"   — reveals an audio player for `src`
 *   "link"    — reveals a destination (e.g. a QR target, or a page in the notebook)
 */
export type Secret = {
  id: string;
  kind: "message" | "image" | "audio" | "link";
  text?: string;
  src?: string;
  href?: string;
  /** optional pointer to the physical 200-page notebook */
  bookPage?: number;
  enabled: boolean;
};

export const SECRETS: Secret[] = [
  {
    id: "hub-dahlia",
    kind: "message",
    text: "Oh you saw this hehe, I love you Anjuu!",
    enabled: true,
  },
  {
    id: "letter-seal",
    kind: "message",
    text: "[Editable hidden message behind the wax seal.]",
    enabled: true,
  },
  {
    id: "star-quiet",
    kind: "message",
    text: "I love you to the universe and back!!",
    enabled: true,
  },
  {
    id: "future-horizon",
    kind: "message",
    text: "Forever with You, Forever and ever Close",
    enabled: true,
  },
];

export function getSecret(id: string): Secret | undefined {
  return SECRETS.find((s) => s.id === id && s.enabled);
}