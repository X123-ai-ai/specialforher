/**
 * EDITABLE CONTENT — the twelve countdown letters.
 * Replace `body` paragraphs with the final written text.
 * Anything marked isPlaceholder: true is scaffolding, not real content.
 */
export type Letter = {
  n: number;
  date: string; // ISO, unlock date (local)
  dateLabel: string;
  title: string;
  /** short line shown on the closed card */
  whisper: string;
  body: string[];
  signoff?: string;
  isPlaceholder: boolean;
  /** visually emphasised letter (7 August milestone) */
  milestone?: boolean;
};

const PLACEHOLDER = (title: string): string[] => [
  `[EDITABLE PLACEHOLDER — “${title}”]`,
  "This page is waiting for the real words. Write them here, in the voice you use when nobody else is reading: plain, unhurried, honest.",
  "Keep the paragraphs short. Let one of them be a single sentence. Let one of them be the thing that is hard to say.",
];

export const LETTERS: Letter[] = [
  {
    n: 1,
    date: "2026-08-09",
    dateLabel: "9 August 2026",
    title: "The Person I Saw Before the World Did",
    whisper: "Where all of this started.",
    body: [
      "My Adorable Anju, before you became my girlfriend, before you became my soulmate, there was the girl on Discord who never came for fun and smiles, yet looked and felt so adorable when we talked. The girl who challenged me, competed with me and caught my Attention. You were someone who annoyed me enough playfully that I never expected You to be the person I would tell everything to. The fact that u brought 9 members to my 3. Somewhere along the way, I stopped noticing how good you were at winning, I noticed how pure and beautiful your mind works, It was so Ethereal, so different from everyone I have ever encountered. The way you think <3 The way you philosophically and deeply read books and write with such passion and depth. Every of your writings have my heart and soul at it. The way you admire me and have your own little world. I love you so much meri Anju. Forever and Ever."
    ],
    isPlaceholder: false,
  },
  {
    n: 2,
    date: "2026-08-10",
    dateLabel: "10 August 2026",
    title: "The Day I Realised I Was Looking For You",
    whisper: "The day knowing you turned into needing to.",
    body: [
      "Yesterday I wrote about the girl I first met. I want to write about the moment that girl stopped feeling like just someone I knew. I initially just talked as we were teammates.Our conversations slowly became something I looked forward to. I started loving to talk to you, to be on call with you. I dont remember the exact moment you became important to me, because there wasn't one. You became important one little conversation at a time. How I waited for my college to end just so I could see you and live our moment. Maybe it was when your absence started feeling noticeable. You became someone I wanted to find. I did not even realise then, how far that little feeling would take us, I love you Anju <3, Forever and Ever",
    ],
    isPlaceholder: false,
  },
  {
    n: 3,
    date: "2026-08-11",
    dateLabel: "11 August 2026",
    title: "The Little Things",
    whisper: "The details nobody else would keep.",
    body: [
      "I think one of the strangest things about loving someone is that you don't always fall in love with the biggest things about them. Sometimes, I fall in love with the smallest things. Things that you might not even realise I notice. When I first met you, I obviously didn't know any of these things. I knew the competitive version of you, you made me think 'This girl is actually something.' I started discovering underneath that first impression. Your thoughts, your writings, your little opinions about completely random things. Your lavender and purple world. Your dreams and even your obsession with spicy food and especially Ajwain. I can know you for a year and still realise there are parts of you I haven't seen yet. I hear you talk about something I've heard before and still want to listen again, simply because its you saying it. And perhaps the most beautiful part is that none of this happened deliberately. I started remembering. I started noticing. I started caring. It isn't only in grand declarations. It isn't only in saying I love you. Sometimes love is remembering what makes you happy, what you like or don't like. Noticing when something feels different and wanting to know why. There is a lot left to discover. I think that's a beautiful thing. P.S. I've not told all little things yet I've a lot more to say here",
    ],
    isPlaceholder: false,
  },
  {
    n: 4,
    date: "2026-08-12",
    dateLabel: "12 August 2026",
    title: "The Things You Don't See In Yourself",
    whisper: "Let me describe you the way I see you.",
    body: [
      "There are some things about you that I don't think you see the way I do. You sometimes look at yourself and see things you couldn't do, the things that didn't happen, the person you think you should have become. But when I look at you, I don't see any of that first. I see you. I see a girl who still has dreams even after life gave her enough reasons to stop dreaming. I see a girl who wants to learn even when she feels like she has forgotten how to. I think that says much more about you than any achievement ever could. You sometimes tell yourself that you have lost your spark. I don't think you have. I think sometimes it gets buried underneath everything you have had to carry. I think that the girl who was curious, who wanted to learn, who impressed her teachers, who had so many things she wanted to explore disappeared. You are allowed to become someone new, stronger, free. I want to see that person, not as I expect from you, not because I want you to prove anything to anyone, but as I know there is so much in you that deserves a chance to exist. And if you ever forget, I hope I can remind you. Reminding you of what I already see. You are capable of much more than you give yourself credit for. Even on days when you do nothing. Even on days when you feel lost. Even on days when you think you've gone backwards. You are still you. I will still be proud of you. I want to meet her. I want to keep watching you grow into whoever you want to become as a human. I love you Anju, Forever & Ever.",
    ],
    isPlaceholder: false,
  },
  {
    n: 5,
    date: "2026-08-13",
    dateLabel: "13 August 2026",
    title: "The Way You Love Me",
    whisper: "The in-between.",
    body: [
      "This letter isn't about how much I love you, it is about how I never understood how much being loved by you would change me. You pay so much attention to me, you pay attention to my needs, my thoughts, the things I like and especially things that bother me. I never thought I would matter to someone so deeply and genuinely. Others may not see the sadness under my smile but you do. You made me believe in myself and let me be the Shree after being exhausted as Shreesh. I was motivated to follow my dreams not for myself but for us. You never disregarded my dreams, instead supported them with so much depth. You notice me, you pay attention to my needs, my thoughts, the things I like and especially things that bother me. You made me comfortable being soft again. You believed in things I sometimes doubted about myself. You celebrated me in ways I never expected someone would. Someone who cares about your happiness, notices when something is wrong. And Anju, I hope you know I notice your love too. And I don't ever want to take that for granted. You have given me a love I didn't know I needed. You made me feel seen and important. So if I ever fail to say it enough, let this letter remind you. I am incredibly grateful to be loved by you ♡ I love you, Anju ♡ Forever and Ever.",
    ],
    isPlaceholder: false,
  },
  {
    n: 6,
    date: "2026-08-14",
    dateLabel: "14 August 2026",
    title: "Somewhere Between Friends and Us",
    whisper: "How we made a screen feel like a room.",
    body: [
      "Sometimes, I think about how strange our story really is. We started as two people, almost enemies, then without planning it, we became friends. Even that friendship became something I couldn't quite explain. I don't remember there being one exact moment when everything changed. Our conversations became something I looked forward to. Talking to you felt different. I wanted to know more about you. Spending time with you stopped needing a reason. We talked, we studied, we stayed on call. We did random things. Maybe that's what makes our beginning so beautiful to me. Our friendship and comfort just happened. Comfort became attachment. You became my person. We slowly became us without realising it. I am so glad we did. I love you Anju, Forever and Ever ♡",
    ],
    isPlaceholder: true,
  },
  {
    n: 7,
    date: "2026-08-15",
    dateLabel: "15 August 2026",
    title: "The Evening Distance Disappeared: 7 August",
    whisper: "The first call. Hours that didn't end.",
    body: [
      "There are some days that don't seem extraordinary when living them, but later they become some of the most beautiful parts of your life. For me, 7 August 2025 was one of those days. We spent hours together, studied, texted. I never felt like I wanted to leave. Until then, you had existed as messages, conversations and words. That evening, somehow you felt closer. It felt like we were sharing the same little space, talking, making each other smile (and ahem flirting), just being there. We did not need a special plan, we could just exist together, and somehow, that was enough. I see it as the first night distance felt powerless. You were someone I could simply be with. Nothing extraordinary had to happen. You were there, and that was more than enough. 7 August will always be special to me. I wouldn't trade that night for anything. I love you Anju, Forever and Ever ♡",
    ],
    isPlaceholder: true,
    milestone: true,
  },
  {
    n: 8,
    date: "2026-08-16",
    dateLabel: "16 August 2026",
    title: "What I See In You",
    whisper: "Studying a person on purpose.",
    body: ["My Dearest Anju, There are so many things I could tell you about yourself, but I don't think you always see yourself the way I see you. I see a girl who is curious about almost everything, someone who can start talking about something ordinary and somehow turn it into a deep, philosophical conversation. I see your ambitions, I see how seriously you take your dreams, especially of becoming an IAS officer. I know there will be days when you feel low, but remember, I see you and the determination that made me believe in you. I see the girl who wants to learn so many things, and I love that about you. I see your softness as well. I see how you worry about me, the way you remember my deadlines, the way you get so happy when something good happens in my life, and the way you can be at your lowest yet still care about how I am. I don't think these things are small. They make you you. You don't have to become someone else for me to be proud of you. I don't love a perfect version of you. I love the girl who overthinks, gets annoyed, gets sleepy, blushes, learns and actually exists. You don't have to have your life figured out. I see so much in you. I love you Anju, Forever and Ever"],
    isPlaceholder: false,
  },
  {
    n: 9,
    date: "2026-08-17",
    dateLabel: "17 August 2026",
    title: "What You Became To Me",
    whisper: "The days that weren't easy.",
    body: ["My Dearest Anju, I always thought that I was enough for myself, that I would be able to take care of myself, do all my work on time and be happy by myself. That was until I met you. I never planned for you to become so so important to me, but you took a place in my heart that I’d purposely lose to you forever. Your absence moments started feeling loud, and when I was around you, I wanted time to just stop so I could adore you forever and ever. I started focusing on myself more than before, studied on mute VCs with you, and it all became a part of my normal. I wanted to tell you everything happening in my life. You became the calm to my chaos-filled life, and suddenly every puzzle piece fell into place really beautifully. I don’t remember the exact moment it happened, the day I realised you were already there, deeply woven into my life. You are really special to me, more than I can ever express. I love you Anju, Forever And Ever ♡"],
    isPlaceholder: false,
  },
  {
    n: 10,
    date: "2026-08-18",
    dateLabel: "18 August 2026",
    title: "The Things We Survived",
    whisper: "Not perfect days. Real ones.",
    body: ["My Dearest Anju, Our relationship was not perfect, and that is what made it so beautiful. We had countless clashes, misunderstandings, some way coarser than others. There were moments when you were hurt or angry by my words, tone, or behaviour. There were times we both did not communicate well. I learned to listen better, and you learned to calm yourself better. We both never tried to win or lose; we both talked through and reached conclusions. How the difficult moments made us understand each other better. I don't love us cause we never hurt each other, but as even when we did, we learned to find each other again. I knew you were worth changing for and becoming better for. I love you Anju ♡ Forever And Ever."],
    isPlaceholder: false,
  },
  {
    n: 11,
    date: "2026-08-19",
    dateLabel: "19 August 2026",
    title: "Everything Still Ahead",
    whisper: "I am not the same person I was last August.",
    body: ["My Dearest Anju, I just think about how much of our life is still waiting for us. There is an entire version of you I haven't met yet—the Anju who has achieved what she once thought was a dream, the Anju who has changed in ways neither of us can predict yet. I really can't wait to meet her. I want to see you crack UPSC and become the IAS officer you've dreamed of becoming. I want to see the day when all the books, notes, revisions, long days and moments of doubt turn into something you can finally look back at and be proud of. I want to be there when you realise that all those difficult days were worth it. I want to see you learn Bharatanatyam, shuffle dance and calisthenics. I want to see you make art, pick up all those things you've always wanted to try, and somehow add ten more things to that list along the way. I want to play basketball with you, even if it inevitably becomes competitive. And then there is our future. Our courtyard house, filled with plants, books, things we've collected from all over India, and little pieces of the life we've built together. Our marriage in Vrindavan. And one day, adopting Radhavika and watching the little life we've dreamed about become real. I don't think the future I imagine is made only of these big things. I imagine ordinary mornings, sitting together without having anywhere to be, studying beside each other, random conversations that somehow become philosophical, going out just because we felt like it, and coming home after a long day and having someone there to tell everything to. There is so much ahead of us that I don't know how I can fit it all into one letter. But I know this: I want you to chase every dream that makes you happy. I want you to learn everything you've ever wanted to learn. I want you to become every version of yourself that is waiting to exist. Because there isn't just one future version of you I want to meet. I want to meet all of them. And somewhere along the way, I hope I get to be there for as many of those versions as life allows me to. One year to us. Many, many more to come. I love you, Anju. ♡ Forever and Ever."],
    isPlaceholder: false,
  },
  {
    n: 12,
    date: "2026-08-20",
    dateLabel: "20 August 2026",
    title: "The Night Before",
    whisper: "Tomorrow, it will have been a year.",
    body: ["My Dearest Anju, 20 August 2025. The evening before everything changed. I still remember that day for the strangest reason — I had my longest streak of sad songs on Spotify, five hours straight. I don't even remember everything I was thinking about through those five hours, but looking back now, it almost feels funny. Somewhere in that five-hour streak, I was living the last evening of a life that didn't have you in it yet. I had absolutely no idea that the next day would become one of the most important days of my life. If someone had told me that one year later I'd be writing my twelfth letter to the girl who was once practically my enemy, I probably wouldn't have believed them. And now here I am, exactly one year later, sitting with all these memories. Twelve letters later. So many conversations, calls, arguments, laughs, sleepy nights, study sessions, and ordinary days later. I don't think twelve letters could ever hold everything this year was. There are things I forgot to write, things I couldn't put into words, and things that probably only the two of us would understand anyway. But maybe that's okay. Some memories don't need to be written down to be real. Tomorrow is our first anniversary. Tomorrow, I'll have more to say. But tonight, before the first year officially becomes a memory, I just want to say thank you. Thank you for becoming my favourite part of a year I never expected to love this much. Thank you for everything this year gave me, everything it taught me, and most of all, thank you for being you. Tomorrow begins another year of us. But tonight, I just want to sit here for a moment and be grateful that somehow, out of all the people in the world, I found you. Goodnight, Anju. I'll see you on the other side of our first year. ♡"],
    signoff: "See you on the twenty-first.",
    isPlaceholder: false,
    milestone: true
  },
];

/** Set to false to lock everything to real dates only (recommended before gifting). */
export const ALLOW_PREVIEW_UNLOCK = true;

export function isUnlocked(letter: Letter, now: Date = new Date()): boolean {
  if (ALLOW_PREVIEW_UNLOCK) return true;
  const parts = letter.date.split("-").map(Number);
  const unlockAt = new Date(parts[0] ?? 2026, (parts[1] ?? 1) - 1, parts[2] ?? 1, 0, 0, 0, 0);
  return now.getTime() >= unlockAt.getTime();
}