import { Factory } from "lucide-react";

/**
 * EDITABLE CONTENT — The Future.
 */
export type FutureItem = {
  id: string;
  section: string;
  title: string;
  body: string;
  isPlaceholder: boolean;
};

export const FUTURE_SECTIONS = [
  { id: "places", title: "Places We'll Go", hint: "Somewhere, eventually, in person." },
  { id: "things", title: "Things We'll Do", hint: "Small plans count." },
  { id: "dreams", title: "Dreams We'll Chase", hint: "Yours first." },
  { id: "home", title: "A Home We'll Build", hint: "Not a building. A feeling." },
  { id: "learn", title: "Things We'll Learn", hint: "About the world, and each other." },
  { id: "through", title: "Things We'll Get Through Together", hint: "There will be some." },
  { id: "memories", title: "Future Memories", hint: "Written before they happen." },
  { id: "unwritten", title: "Things We Haven't Written Yet", hint: "Deliberately blank." },
];

export const FUTURE_ITEMS: FutureItem[] = [
  {
    id: "f-vrindavan",
    section: "places",
    title: "Vrindavan",
    body: "A place we've dreamed of going together. Our HOME. I don't just want to visit Vrindavan with you; I want to make our own little memories there, walk through its streets together, pray together, and one day look back and remember that we finally made it there.",
    isPlaceholder: false,
  },
  {
    id: "f-place-2",
    section: "places",
    title: "Basically The Whole Country",
    body: "There are so many places I want to see with you: not just the famous ones, but the random little corners we haven't even heard of yet. Someday, we'll pick a direction, pack our bags, and go",
    isPlaceholder: false,
  },
  {
    id: "f-thing-1",
    section: "things",
    title: "The Little Things",
    body: "Not every memory has to be a grand adventure. I want the tiny things too — random walks, late-night conversations, cooking together, laughing over nothing, and simply having a day together.",
    isPlaceholder: false,
  },
  {
    id: "f-thing-2",
    section: "things",
    title: "Our Bucket List",
    body: "There are so many things we haven't done yet. I want us to keep adding to the list until we run out of pages before we run out of things to do.",
    isPlaceholder: false,
  },
  {
    id: "f-thing-3",
    section: "things",
    title: "Calisthenics",
    body: "Watching you slowly build the strength, discipline and skills you've always wanted. And obviously, I'll be cheering for every tiny milestone.",
    isPlaceholder: false,
  },
  {
    id: "f-thing-4",
    section: "things",
    title: "Shuffle Dance",
    body: "One day I'll watch you go from trying to figure out the steps to casually dancing like you've been doing it forever.",
    isPlaceholder: false,
  },
  {
    id: "f-thing-5",
    section: "things",
    title: "The Things We Haven't Thought Of Yet",
    body: "Not everything we do together has to be planned today. Some of my favourite future memories might be things neither of us has even imagined yet.",
    isPlaceholder: false,
  },
  {
    id: "f-dream-1",
    section: "dreams",
    title: "Her IAS Dream",
    body: "I want to watch you chase the dream you've carried for so long: to crack UPSC, become an IAS officer, and finally see yourself standing where you always wanted to be. And when that day comes, I want to be somewhere beside you, cheering louder than anyone.",
    isPlaceholder: false,
  },
  {
    id: "f-dream-3",
    section: "dreams",
    title: "A Life We're Proud Of",
    body: "Not just one achievement or one house, but a life we've built together: one where we're both doing what we love, growing together, and looking around one day knowing we made it.",
    isPlaceholder: false,
  },
  {
    id: "f-home-1",
    section: "home",
    title: "Our Courtyard Home",
    body: "One day, I want us to have our own little courtyard home — a place that feels completely ours. A home filled with books, flowers, laughter, peaceful evenings, and all the little things we've imagined building together.",
    isPlaceholder: false,
  },
  {
    id: "f-learn-1",
    section: "learn",
    title: "Learning Each Other",
    body: "We'll keep learning each other: how we reform, what we need, what makes us happy, what scares us, and all the little things we haven't discovered yet. Because even after years together, I don't think we'll ever completely stop discovering each other",
    isPlaceholder: false,
  },
  {
    id: "f-learn-2",
    section: "learn",
    title: "Things We Teach Each Other",
    body: "You teach me things without even realizing it, and I hope I'll keep doing the same for you. Maybe we'll learn things together, maybe separately, but I want us to keep growing without ever growing apart",
    isPlaceholder: false,
  },
  {
    id: "f-through-1",
    section: "through",
    title: "Whatever Comes",
    body: "I don't know what difficult days are waiting somewhere ahead. Maybe there will be distance, failures, uncertainty, or days when everything feels too heavy. I don't need to know what they are. I just want to know that when they come, we'll face them together.",
    isPlaceholder: false,
  },
  {
    id: "f-memory-1",
    section: "memories",
    title: "The Day We Finally Reached Vrindavan",
    body: "I still remember how happy we were when we finally reached Vrindavan together. After talking about it for so long, we were finally there, walking beside each other, you holding my hand and just taking me around the places you wished for us to go and realizing that this was something we once only imagined",
    isPlaceholder: false,
  },
  {
    id: "f-memory-1",
    section: "memories",
    title: "The Day We Finally Reached Vrindavan",
    body: "I still remember how happy we were when we finally reached Vrindavan together. After talking about it for so long, we were finally there, walking beside each other, you holding my hand and just taking me around the places you wished for us to go and realizing that this was something we once only imagined",
    isPlaceholder: false,
  },
  {
    id: "f-memory-2",
    section: "memories",
    title: "The First Evening In Our Home",
    body: "I remember our first evening in our own home. Nothing extraordinary happened. We were just sitting in our courtyard, talking about our day, and I remember thinking that this was exactly the kind of ordinary life I always wanted with you",
    isPlaceholder: false,
  },
  {
    id: "f-memory-3",
    section: "memories",
    title: "The Day You Become Mrs IAS Anjali Gupta",
    body: "I remember looking at you that day and thinking about everything it took to get here. I don't think I was happier because of the title. I was happier because I knew how much this moment meant to you, and I got to watch you finally live it",
    isPlaceholder: false,
  },
  {
    id: "f-unwritten-1",
    section: "unwritten",
    title: "The Pages We Haven't Lived Yet (Blank on Purpose)",
    body: "Some parts of our story shouldn't be written yet. We haven't lived them. We'll leave these pages empty for now and come back when the future finally gives us something worth writing here.",
    isPlaceholder: false,
  },
];