/**
 * OUR UNIVERSE — editable relationship star map.
 *
 * The stars are pieces of Anju × Shree:
 * where we started, what became "us", the little things,
 * and the things still waiting for us ahead.
 */

export type StarCategory = "memory" | "milestone" | "thought" | "future";

export type Star = {
  id: string;
  title: string;
  date?: string;
  category: StarCategory;
  description: string;
  x: number;
  y: number;
  magnitude: number; // 1 (bright) – 3 (faint)
  media?: { kind: "image" | "audio" | "video"; alt: string } | null;
  isPlaceholder: boolean;
};

export const STARS: Star[] = [
  // ============================================================
  // THE BEGINNING
  // ============================================================

  {
    id: "s-challenge",
    title: "The Challenge",
    date: "Early August 2025",
    category: "milestone",
    description:
      "We met on Discord, competing in a server moderation task. I brought 3 people. You couldn't bring any at first. Then you challenged me, came back with 9, and left me genuinely impressed. We were almost enemies before we were anything else.",
    x: 28,
    y: 43,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-the-choice",
    title: "You Chose Me",
    date: "Early August 2025",
    category: "milestone",
    description:
      "Another team formed, and out of ten people, you chose me as your second member. I don't think either of us knew then how important that little choice would become.",
    x: 37,
    y: 34,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-friends",
    title: "Friends",
    date: "3 August 2025",
    category: "milestone",
    description:
      "Somewhere around here, the rivalry slowly became friendship. We started talking, understanding each other, and spending more time together without ever really planning what we were becoming.",
    x: 45,
    y: 29,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-first-call",
    title: "The First Call",
    date: "7 August 2025",
    category: "milestone",
    description:
      "Our first video call. Hours of talking, studying, texting and simply staying together. We didn't need some grand plan. We just stayed, and somehow that was enough.",
    x: 53,
    y: 43,
    magnitude: 1,
    media: {
      kind: "audio",
      alt: "Optional voice note from the beginning",
    },
    isPlaceholder: false,
  },

  {
    id: "s-distance",
    title: "The Evening Distance Disappeared",
    date: "7 August 2025",
    category: "memory",
    description:
      "That evening felt different. We spent the time together, studied, talked, made each other smile and just existed in the same little space. It was the first time distance felt almost powerless.",
    x: 61,
    y: 32,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-us",
    title: "The Day We Became Us",
    date: "21 August 2025",
    category: "milestone",
    description:
      "Somewhere between friendship, comfort and everything that happened between us, we became something more. The day our little universe became ours.",
    x: 69,
    y: 43,
    magnitude: 1,
    isPlaceholder: false,
  },

  // ============================================================
  // THE LITTLE THINGS
  // ============================================================

  {
    id: "s-sleepy-eyes",
    title: "Sleepy Eyes",
    category: "memory",
    description:
      "You look so, so cute when you're sleepy. The way you rub your eyes while still wanting to stay up for me as I work is one of those little things I don't think I'll ever get tired of noticing.",
    x: 20,
    y: 66,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-happy-dance",
    title: "Your Happy Dance",
    category: "memory",
    description:
      "Your little happy dance. One of those tiny expressions of happiness that makes me smile simply because you're happy.",
    x: 29,
    y: 75,
    magnitude: 3,
    isPlaceholder: false,
  },

  {
    id: "s-blushing",
    title: "The Blush",
    category: "memory",
    description:
      "The way you hide your face when you get shy and start blushing. I notice it. Of course I notice it.",
    x: 48,
    y: 76,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-ajwain-paglu",
    title: "Ajwain Paglu",
    category: "thought",
    description:
      "Ajwain Paglu. I don't think every little thing needs an explanation. Some things become special simply because they become ours.",
    x: 57,
    y: 68,
    magnitude: 3,
    isPlaceholder: false,
  },
  {
    id: "s-books",
    title: "Your Little Worlds",
    category: "thought",
    description:
      "Your books, your writing, your thoughts and all the little worlds you create inside your head. I love listening when you start talking about something you care about.",
    x: 76,
    y: 66,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-endless-thoughts",
    title: "The Yapping",
    category: "memory",
    description:
      "You tell me everything. The random thoughts, the things you're reading, the things you're thinking about, the tiny details that somehow become entire conversations. I could listen for hours.",
    x: 85,
    y: 76,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-study-together",
    title: "We Study Together",
    category: "memory",
    description:
      "We talk, we study, we talk again. Sometimes we play chess. Sometimes we barely say anything. Somehow studying together never feels like studying alone.",
    x: 24,
    y: 86,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-nine-hours",
    title: "Nine Hours",
    category: "memory",
    description:
      "Nine hours of mute VC, little micons, studying, talking and simply being there. We didn't need to fill every second with words. Being together was enough.",
    x: 38,
    y: 91,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-sleep-first",
    title: "You Make Me Sleep First",
    category: "memory",
    description:
      "You make me fall asleep first on call, then cut the call and sleep yourself. It's such an ordinary little routine, but somehow it feels like home.",
    x: 53,
    y: 87,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-my-calm",
    title: "My Calm",
    category: "thought",
    description:
      "You wait patiently. You worry about me. Sometimes you give me a miss call when I'm busy. Somehow, without even trying, you've become one of the places where my mind feels calm.",
    x: 68,
    y: 91,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-deadlines",
    title: "You Remember",
    category: "memory",
    description:
      "You check on me, remind me about my deadlines and schedules, and notice even the minute things. You care in ways that make me feel seen.",
    x: 82,
    y: 86,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-no-winning",
    title: "There Is No Winning",
    category: "thought",
    description:
      "There is absolutely no winning in our arguments. Somehow we both talk, argue, understand each other and eventually find our way to a conclusion. Maybe that's the real win.",
    x: 91,
    y: 60,
    magnitude: 3,
    isPlaceholder: false,
  },

  {
    id: "s-her-care",
    title: "The Way You Care",
    category: "thought",
    description:
      "You care about the smallest things. You notice when something is wrong, you check on me, and you celebrate even the little things I do as if they matter more than they actually do.",
    x: 12,
    y: 54,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-my-presentation",
    title: "You Stayed Awake",
    category: "memory",
    description:
      "You woke up to help me prepare for my first presentation when you could have simply slept. You were nervous for me, happier than me when I did well, and right there with me when I was at my lowest.",
    x: 19,
    y: 48,
    magnitude: 1,
    isPlaceholder: false,
  },

  // ============================================================
  // WHAT WE SURVIVED
  // ============================================================

  {
    id: "s-we-stayed",
    title: "We Stayed",
    category: "milestone",
    description:
      "We had clashes. Big misunderstandings. Difficult days. Moments that hurt. But the thing I keep coming back to is simple: we stayed. We kept finding our way back to each other.",
    x: 57,
    y: 51,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-real-not-perfect",
    title: "Real, Not Perfect",
    category: "thought",
    description:
      "We never had a perfect relationship. We had a real one. And I think there is something much more beautiful about two people choosing each other even when things aren't easy.",
    x: 73,
    y: 55,
    magnitude: 2,
    isPlaceholder: false,
  },

  // ============================================================
  // ONE YEAR
  // ============================================================

  {
    id: "s-one-year",
    title: "One Year",
    date: "21 August 2026",
    category: "milestone",
    description:
      "365 days of knowing each other, understanding each other, growing together, arguing, laughing, studying, staying on call, making memories and choosing each other.",
    x: 82,
    y: 43,
    magnitude: 1,
    isPlaceholder: false,
  },

  // ============================================================
  // THE FUTURE
  // ============================================================

  {
    id: "s-vrindavan",
    title: "Vrindavan",
    category: "future",
    description:
      "A place we want to experience together. Somewhere our future feels a little more real. One day, we'll go.",
    x: 89,
    y: 30,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-courtyard",
    title: "Our Courtyard House",
    category: "future",
    description:
      "One day, a courtyard house of our own. Not just walls and rooms, but the little life we imagine filling them.",
    x: 93,
    y: 19,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-ias",
    title: "IAS Officer",
    category: "future",
    description:
      "Your dream of cracking UPSC and becoming the person you've worked so hard to become. I'll be there through the preparation, the difficult days and the day you finally get to say you did it.",
    x: 76,
    y: 17,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-bucket-list",
    title: "Things You'll Learn",
    category: "future",
    description:
      "Shuffle dance. Bharatnatyam. Calisthenics. Art. Basketball. All the little things you've wanted to learn — one day, one skill, one attempt at a time.",
    x: 63,
    y: 11,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-health",
    title: "A Life That Feels Like Yours",
    category: "future",
    description:
      "A future where you get to focus on yourself, take care of your health, eat well, move your body, learn what you want and build a life you're proud of.",
    x: 48,
    y: 17,
    magnitude: 2,
    isPlaceholder: false,
  },

  {
    id: "s-our-life",
    title: "The Life We'll Build",
    category: "future",
    description:
      "Not one perfect future that we already know. Just a life we keep building together — one ordinary day, one memory and one choice at a time.",
    x: 34,
    y: 15,
    magnitude: 1,
    isPlaceholder: false,
  },

  {
    id: "s-more-to-come",
    title: "Still Unwritten",
    category: "future",
    description:
      "There are so many stars that don't exist yet. Places we haven't gone, things we haven't done, conversations we haven't had and memories we haven't made. That's the beautiful part.",
    x: 20,
    y: 21,
    magnitude: 2,
    isPlaceholder: false,
  },
];

/**
 * Each constellation is a chapter.
 *
 * "Beginning" = how we found each other.
 * "Us" = the relationship we built.
 * "Little Things" = the tiny pieces that make it ours.
 * "Ahead" = everything still waiting for us.
 */
export const CONSTELLATIONS: {
  id: string;
  name: string;
  path: string[];
}[] = [
  {
    id: "beginning",
    name: "The Beginning",
    path: [
      "s-challenge",
      "s-the-choice",
      "s-friends",
      "s-first-call",
      "s-distance",
      "s-us",
    ],
  },
  {
    id: "us",
    name: "Us",
    path: [
      "s-first-call",
      "s-we-stayed",
      "s-real-not-perfect",
      "s-one-year",
    ],
  },
  {
    id: "little-things",
    name: "The Little Things",
    path: [
      "s-her-care",
      "s-my-presentation",
      "s-sleepy-eyes",
      "s-aankh-dikhana",
      "s-blushing",
      "s-ajwain-paglu",
      "s-spicy",
      "s-books",
      "s-endless-thoughts",
    ],
  },
  {
    id: "together",
    name: "The Life Between Us",
    path: [
      "s-study-together",
      "s-nine-hours",
      "s-sleep-first",
      "s-my-calm",
      "s-deadlines",
      "s-no-winning",
    ],
  },
  {
    id: "ahead",
    name: "Ahead",
    path: [
      "s-one-year",
      "s-vrindavan",
      "s-courtyard",
      "s-ias",
      "s-bucket-list",
      "s-health",
      "s-our-life",
      "s-more-to-come",
    ],
  },
];

export const CATEGORY_LABEL: Record<StarCategory, string> = {
  memory: "Memory",
  milestone: "Milestone",
  thought: "Thought",
  future: "Ahead",
};