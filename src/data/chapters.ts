/**
 * THE 365 CHAPTERS
 *
 * The main story of Anju × Shree.
 * These chapters tell the larger story;
 * the handwritten letters hold the smaller, more intimate details.
 */

export type ChapterLayout =
  | "opening"
  | "fullscreen"
  | "split"
  | "quote"
  | "timeline"
  | "cards"
  | "immersive"
  | "constellation"
  | "closing";

export type Chapter = {
  n: string;
  id: string;
  title: string;
  subtitle: string;
  layout: ChapterLayout;
  body: string[];
  items?: { label: string; text: string }[];
  quote?: string;
  media?: { kind: "image" | "video"; alt: string } | null;
  isPlaceholder: boolean;
};

export const CHAPTERS: Chapter[] = [
  // ============================================================
  // 01 — THE BEGINNING
  // ============================================================

  {
    n: "01",
    id: "the-beginning",
    title: "The Beginning",
    subtitle: "A server. A challenge. Two people who were not friends.",
    layout: "opening",
    body: [
      "It did not start softly. It started as a contest.",
      "We met on Discord, working together in a server moderation team. We were supposed to bring members in from other servers.",
      "I brought three.",
      "You couldn't bring any at first.",
      "Then you looked at what I had done, challenged me, came back with nine, and somehow made my three look very small.",
      "I was supposed to be annoyed.",
      "I was impressed instead.",
      "We were almost enemies before we were anything else.",
      "And somehow, that became the beginning of us.",
    ],
    items: [
      { label: "Shree", text: "brought 3" },
      { label: "Anju", text: "brought 9" },
      { label: "Then", text: "you chose me second" },
    ],
    media: null,
    isPlaceholder: false,
  },

  // ============================================================
  // 02 — LOOKING FOR YOU
  // ============================================================

  {
    n: "02",
    id: "looking-for-you",
    title: "When I Started Looking For You",
    subtitle: "From knowing someone to searching for them.",
    layout: "split",
    body: [
      "Around 3 August 2025, something quietly changed.",
      "We stopped being two people who happened to be on the same team and started becoming friends.",
      "I don't remember one exact second where everything changed.",
      "I remember the conversations becoming easier.",
      "I remember wanting to talk to you again.",
      "I remember your absence becoming noticeable.",
      "And somewhere in between all of that, without either of us planning it, I started looking for you.",
    ],
    media: {
      kind: "image",
      alt: "Optional screenshot or memory from early August 2025",
    },
    isPlaceholder: false,
  },

  // ============================================================
  // 03 — LITTLE THINGS
  // ============================================================

  {
    n: "03",
    id: "little-things",
    title: "The Little Things",
    subtitle: "The things you probably don't realise I notice.",
    layout: "cards",
    body: [
      "I think one of the strangest things about loving someone is that you don't always fall in love with the biggest things about them.",
      "Sometimes you fall in love with the smallest things.",
      "The way you rub your eyes when you're sleepy.",
      "Your happy dance.",
      "The way you hide your face when you blush.",
      "Aankh dikhakar ruth jaana, fir mai aapko manata hu hehe.",
      "Your endless yapping about whatever is currently living inside your head.",
      "Your obsession with spicy food.",
      "My Cutie Patootie Ajwain Paglu.",
      "The little things became some of the biggest reasons I love knowing you.",
    ],
    items: [
      { label: "01", text: "Your sleepy eyes" },
      { label: "02", text: "Your happy dance" },
      { label: "03", text: "Aankh dikhana & ruth jaana" },
      { label: "04", text: "The way you hide and blush" },
      { label: "05", text: "Your endless thoughts" },
      { label: "06", text: "SPICYYY FOOOOODD" },
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 04 — WHAT SHE DOESN'T SEE
  // ============================================================

  {
    n: "04",
    id: "dont-see",
    title: "The Things You Don't See In Yourself",
    subtitle: "A description from the outside.",
    layout: "quote",
    quote:
      "You are capable of much more than you give yourself credit for.",
    body: [
      "Sometimes you look at yourself and see everything that didn't happen.",
      "The opportunities you didn't get. The things you think you should have already become. The version of yourself you think you've lost.",
      "But when I look at you, I see something different.",
      "I see someone who still dreams even after being given reasons to stop.",
      "I see someone curious enough to keep learning.",
      "I see someone who wants to build a life she can be proud of.",
      "I see the girl who cares deeply, notices everything, writes, thinks, questions and keeps going.",
      "I don't need you to become someone I expect you to be.",
      "I want to meet every version of you that you choose to become.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 05 — BEFORE US
  // ============================================================

  {
    n: "05",
    id: "before-us",
    title: "Before We Became Us",
    subtitle: "The long, careful in-between.",
    layout: "fullscreen",
    body: [
      "There was a friendship before there was an us.",
      "And I think that matters.",
      "We talked.",
      "We studied.",
      "We stayed on call.",
      "We played chess sometimes.",
      "We made each other laugh.",
      "We learned how the other person thought.",
      "Comfort became attachment without either of us announcing it.",
      "We slowly became us without ever sitting down and deciding that we would.",
      "Looking back, I think that's one of the most beautiful parts of our story.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 06 — 7 AUGUST
  // ============================================================

  {
    n: "06",
    id: "seven-august",
    title: "7 August",
    subtitle: "The first video call.",
    layout: "immersive",
    body: [
      "7 August 2025.",
      "Our first video call.",
      "Hours on call. Studying. Texting. Staying.",
      "Sometimes we barely spoke because being on mute was safer. Sometimes we used little micons just to make each other smile.",
      "We didn't need some grand plan for the night.",
      "We just stayed.",
      "And somewhere in those hours, distance became smaller.",
      "That night didn't need anything extraordinary to happen.",
      "You were there.",
      "That was enough.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 07 — 21 AUGUST
  // ============================================================

  {
    n: "07",
    id: "twenty-one-august",
    title: "21 August",
    subtitle: "The day it became us.",
    layout: "constellation",
    body: [
      "21 August 2025.",
      "Somewhere between everything that had already happened and everything that was still to come, we became us.",
      "No audience.",
      "No grand ceremony.",
      "Just two people choosing each other.",
      "And somehow, that one decision became the beginning of an entire year.",
    ],
    quote:
      "A random conversation became a friendship. A friendship became love. And somehow, we became home to each other.",
    isPlaceholder: false,
  },

  // ============================================================
  // 08 — LEARNING YOU
  // ============================================================

  {
    n: "08",
    id: "learning-you",
    title: "Learning You",
    subtitle: "Because one lifetime probably isn't enough.",
    layout: "timeline",
    body: [
      "I don't think loving someone means knowing every corner of them.",
      "I think sometimes it means sitting beside them while they explore those corners.",
      "And I want to keep learning you.",
    ],
    items: [
      {
        label: "Your mind",
        text: "The way you think deeply about things most people overlook.",
      },
      {
        label: "Your worlds",
        text: "Your books, writing, ideas, dreams and all the things you keep inside your head.",
      },
      {
        label: "Your little things",
        text: "The habits, phrases, expressions and tiny details that somehow became familiar to me.",
      },
      {
        label: "Your heart",
        text: "The way you care, worry, remember and show up for ME",
      },
      {
        label: "Your future",
        text: "The person you're still becoming, and everything you want your life to be.",
      },
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 09 — THE DISTANCE
  // ============================================================

  {
    n: "09",
    id: "the-distance",
    title: "The Distance",
    subtitle: "Building closeness across it.",
    layout: "split",
    body: [
      "We haven't always been able to simply be beside each other.",
      "Sometimes the closest we could get was a screen, a call, a voice, a message, or a few hours spent quietly together from different places.",
      "So we made our own version of being together.",
      "Mute calls.",
      "Studying side by side.",
      "Talking between work.",
      "Falling asleep on call.",
      "Waiting patiently.",
      "Checking in.",
      "And somehow, a distance that should have felt enormous became part of the way we learned to love each other.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 10 — THE STORMS
  // ============================================================

  {
    n: "10",
    id: "the-storms",
    title: "The Storms",
    subtitle: "It was never supposed to be a perfect story.",
    layout: "immersive",
    body: [
      "There were difficult days.",
      "Clashes.",
      "Misunderstandings.",
      "Moments where we hurt each other more than we wanted to.",
      "There were times when loving each other felt harder than usual.",
      "I don't want to erase those parts from our story.",
      "Not because I love the pain, but because those moments showed us what we were willing to do when things weren't easy.",
      "We talked.",
      "We listened.",
      "We tried again.",
      "And eventually, we found our way back.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 11 — BUT WE STAYED
  // ============================================================

  {
    n: "11",
    id: "but-we-stayed",
    title: "But We Stayed",
    subtitle: "The part of the story that matters most.",
    layout: "quote",
    quote:
      "We did not have 365 perfect days. We had 365 real ones — and we kept choosing.",
    body: [
      "There aren't enough beautiful words to explain what that means to me.",
      "Because staying isn't one grand decision.",
      "It is a thousand tiny decisions.",
      "Answering the call.",
      "Having the difficult conversation.",
      "Saying sorry.",
      "Listening again.",
      "Trying again.",
      "Choosing to understand instead of simply being right.",
      "And through the biggest clashes, the difficult days and everything in between, we stayed.",
      "That means more to me than a perfect year ever could.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 12 — WHAT CHANGED IN ME
  // ============================================================

  {
    n: "12",
    id: "what-changed",
    title: "What Loving You Changed In Me",
    subtitle: "You became part of the person I am becoming.",
    layout: "fullscreen",
    body: [
      "You changed the way I look at love.",
      "You made me feel seen in ways I didn't know I needed.",
      "You made me want to become a better version of myself.",
      "You encouraged my dreams.",
      "You celebrated things that other people might have considered small.",
      "You reminded me that being cared for can exist in ordinary things.",
      "And somehow, loving you made me want to build a life that has room for both of us.",
      "Not because I want to lose myself inside us.",
      "But because I want to become someone worthy of the life we keep imagining.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 13 — TODAY
  // ============================================================

  {
    n: "13",
    id: "today",
    title: "Today",
    subtitle: "21 August 2026. One year.",
    layout: "immersive",
    body: [
      "One year.",
      "365 days.",
      "A year ago, you were someone I had only just begun talking to.",
      "Today, you are one of the most important people in my life.",
      "We started as competitors.",
      "We became friends.",
      "We became love.",
      "And somehow, along the way, you became home.",
      "I don't think I could have imagined this a year ago.",
      "And I wouldn't trade what we have for anything.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 14 — STILL CHOOSING
  // ============================================================

  {
    n: "14",
    id: "still-choosing",
    title: "Still Choosing",
    subtitle: "Again, today, on purpose.",
    layout: "quote",
    quote:
      "365 days of choosing you. And today I choose you again.",
    body: [
      "I can't promise that every day ahead of us will be perfect.",
      "I can't promise that we'll never disagree.",
      "I can't promise that we'll never misunderstand each other.",
      "But I can promise that I will keep trying.",
      "I promise to keep listening.",
      "I promise to keep learning you.",
      "I promise to keep choosing you.",
      "I promise to celebrate your happiness and stand beside you when things are difficult.",
      "I promise to never treat what we have like something that can simply be taken for granted.",
      "And more than anything, I want to keep building this with you.",
      "One day at a time.",
      "One memory at a time.",
      "One ordinary day at a time.",
    ],
    isPlaceholder: false,
  },

  // ============================================================
  // 15 — TO BE CONTINUED
  // ============================================================

  {
    n: "15",
    id: "to-be-continued",
    title: "To Be Continued",
    subtitle: "This is a prologue, not an ending.",
    layout: "closing",
    body: [
      "There is more of this story than fits on a screen.",
      "There are places we haven't gone.",
      "Things we haven't learned.",
      "Dreams we haven't chased yet.",
      "A courtyard house we haven't built.",
      "A Vrindavan trip we haven't taken.",
      "A thousand ordinary days we haven't lived.",
      "And 365 little things that haven't happened yet.",
      "Some of this story will be written here.",
      "Some of it will be written by hand.",
      "And some of it hasn't happened yet.",
      "That's the beautiful part.",
      "This isn't the end of our story.",
      "It's only the first chapter we know we have lived.",
      "Forever & ever.",
    ],
    isPlaceholder: false,
  },
];