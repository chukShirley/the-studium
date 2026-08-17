export type LessonBlock =
  | { id: string; kind: "attend" | "wonder" | "instruction" | "reflection"; eyebrow: string; title: string; body: string }
  | { id: string; kind: "response"; eyebrow: string; title: string; body: string; prompt: string }
  | { id: string; kind: "practice"; eyebrow: string; title: string; body: string; problems: { expression: string; answer: string }[] }
  | { id: string; kind: "offscreen"; eyebrow: string; title: string; body: string; prompt: string };

export const lesson = {
  id: "lesson-one-and-many",
  version: 1,
  slug: "one-and-many",
  title: "One and Many",
  latinTitle: "Unum et multa",
  course: "Arithmetic I · Number & Unity",
  unit: "I. Multitude and Unity",
  duration: "18–25 minutes",
  ends: {
    immediate: "Distinguish a unit from a multitude and count a collection accurately.",
    liberal: "Begin to see number as a multitude measured by one, not merely as a written symbol.",
    orientation: "Practice attentive judgment about quantity and the intelligible order present in ordinary things.",
  },
  blocks: [
    {
      id: "attend-stones",
      kind: "attend",
      eyebrow: "Attend",
      title: "Before number is written, it is seen.",
      body: "Place five small objects before you—stones, beans, buttons, or coins. Do not count them yet. Look at the whole collection, then at each thing within it. Each is one thing. Together they are many.",
    },
    {
      id: "wonder-whole",
      kind: "wonder",
      eyebrow: "Wonder",
      title: "What makes the many countable?",
      body: "You can count unlike things only after choosing what will be treated as one. Five coins may differ in year and color, yet each is taken as one coin. What we call a unit depends on what the mind attends to.",
    },
    {
      id: "explain-unit",
      kind: "response",
      eyebrow: "Speak & explain",
      title: "Say what you see.",
      body: "Answer aloud first. Then write one or two sentences. A guide should listen for the distinction between each single thing and the collection.",
      prompt: "How can a collection be many while each member of it is one?",
    },
    {
      id: "receive-number",
      kind: "instruction",
      eyebrow: "Receive",
      title: "Number answers: how many?",
      body: "To count is to take one chosen unit again and again until the multitude has been measured. The spoken name “five” and the figure 5 signify the number; neither mark is the number itself. Number belongs first to the countable multitude and is understood by the mind.",
    },
    {
      id: "practice-count",
      kind: "practice",
      eyebrow: "Practice",
      title: "Measure each multitude by one.",
      body: "Work deliberately. Accuracy matters more than speed.",
      problems: [
        { expression: "one group of 4 and one group of 3", answer: "7" },
        { expression: "12 objects with 5 taken away", answer: "7" },
        { expression: "three equal groups of 3", answer: "9" },
      ],
    },
    {
      id: "leave-screen",
      kind: "offscreen",
      eyebrow: "Leave the screen",
      title: "Find unity within difference.",
      body: "Go to another room or step outside. Find a multitude whose members differ from one another but can truly be counted under one name. Bring back a simple description. Take your time; the lesson will wait.",
      prompt: "What did you find, and under what one name did you count its members?",
    },
    {
      id: "recollect",
      kind: "reflection",
      eyebrow: "Recollect",
      title: "Keep the distinction.",
      body: "A figure is a sign; a multitude is what is numbered; a unit is that by which it is numbered. Tomorrow you will be asked to recall this without looking. Close the study when you are ready.",
    },
  ] satisfies LessonBlock[],
} as const;

export const courseLessons = [
  { number: "01", title: "One and Many", state: "current" },
  { number: "02", title: "The Unit We Choose", state: "next" },
  { number: "03", title: "Counting Without Losing One", state: "locked" },
  { number: "04", title: "The Names and Signs of Number", state: "locked" },
];
