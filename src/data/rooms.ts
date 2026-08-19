export type Room = {
  id: string;
  index: string;
  name: string;
  path: string;
  tagline: string;
  mood: string;
};

export const ROOMS: Room[] = [
  {
    id: "twelve",
    index: "I",
    name: "12",
    path: "/twelve",
    tagline: "Twelve letters. Twelve days.",
    mood: "A private countdown",
  },
  {
    id: "story",
    index: "II",
    name: "365",
    path: "/365",
    tagline: "Our story, in fifteen chapters.",
    mood: "The centerpiece",
  },
  {
    id: "little-things",
    index: "III",
    name: "365 Little Things",
    path: "/little-things",
    tagline: "The things I notice.",
    mood: "Warm and playful",
  },
  {
    id: "universe",
    index: "IV",
    name: "Our Universe",
    path: "/universe",
    tagline: "A map of our stars.",
    mood: "Night sky",
  },
  {
    id: "letter",
    index: "V",
    name: "A Letter From Me",
    path: "/letter",
    tagline: "Quiet. Just for you.",
    mood: "The most intimate room",
  },
  {
    id: "future",
    index: "VI",
    name: "The Future",
    path: "/future",
    tagline: "Everything still ahead.",
    mood: "Sunrise",
  },
];

export const ANNIVERSARY = new Date("2026-08-21T00:00:00");
export const TOGETHER_SINCE = new Date("2025-08-21T00:00:00");