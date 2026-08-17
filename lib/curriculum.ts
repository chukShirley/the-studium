export type LessonBlock =
  | { id: string; kind: "attend" | "wonder" | "instruction" | "reflection"; eyebrow: string; title: string; body: string }
  | { id: string; kind: "response"; eyebrow: string; title: string; body: string; prompt: string }
  | { id: string; kind: "practice"; eyebrow: string; title: string; body: string; problems: { expression: string; answer: string }[] }
  | { id: string; kind: "offscreen"; eyebrow: string; title: string; body: string; prompt: string };

export type PresentationRegister = "concrete" | "discursive" | "sapiential";

export const presentationRegisters: Record<PresentationRegister, { label: string; shortLabel: string; description: string }> = {
  concrete: {
    label: "Begin concretely",
    shortLabel: "Concrete",
    description: "Shorter sentences, familiar words, and visible examples lead to the same principle.",
  },
  discursive: {
    label: "Use the standard presentation",
    shortLabel: "Discursive",
    description: "Full explanations introduce the terms needed for careful reasoning.",
  },
  sapiential: {
    label: "Enter the deeper treatment",
    shortLabel: "Sapiential",
    description: "Philosophical language and wider distinctions invite sustained reflection.",
  },
};

export const lesson = {
  id: "lesson-one-and-many",
  version: 2,
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

type BlockPresentation = { title: string; body: string; prompt?: string };

const concretePresentations: Record<string, BlockPresentation> = {
  "attend-stones": {
    title: "Look before you count.",
    body: "Put five small objects in front of you. You might use stones, beans, buttons, or coins. Look at each object by itself. Each object is one thing. Now look at them together. Together they are many.",
  },
  "wonder-whole": {
    title: "How can different things be counted together?",
    body: "The objects do not have to look exactly alike. Five coins may have different dates, but each one is still a coin. We count them by treating each coin as one. The one thing we count each time is called a unit.",
  },
  "explain-unit": {
    title: "Tell what you noticed.",
    body: "Answer aloud first. Then write one or two sentences in your own words. You do not need to use special vocabulary yet.",
    prompt: "How can each object be one while the whole group is many?",
  },
  "receive-number": {
    title: "Number tells us how many.",
    body: "When we count, we take each object as one until every object has been included. The word “five” and the written mark 5 tell us how many objects there are. The mark helps us name the number, but the mark is not the objects we counted.",
  },
  "practice-count": {
    title: "Count each group carefully.",
    body: "Take one object at a time. It is better to be careful than to be fast.",
  },
  "leave-screen": {
    title: "Find a group in the world around you.",
    body: "Go to another room or step outside. Find several things that are different from one another but can honestly be called by one name: books, leaves, chairs, birds, or something else. Count them and return when you are ready.",
    prompt: "What did you find? What one name allowed you to count the things together?",
  },
  recollect: {
    title: "Remember the three things.",
    body: "The group is what you counted. The unit is the one thing you counted each time. The written figure is a sign that tells the number. Tomorrow you will try to remember this without looking back.",
  },
};

const discursivePresentations: Record<string, BlockPresentation> = {
  "attend-stones": {
    title: "Number begins with countable things.",
    body: "Place five small objects before you, but do not count immediately. Attend first to each object as a single thing and then to the collection as a whole. Each member is one; the collection contains many members.",
  },
  "wonder-whole": {
    title: "What allows unlike things to be counted together?",
    body: "Things can be counted together when the mind considers each according to one shared description. Coins may differ in color and year, but each can be taken as one coin. The thing taken as one for the purpose of counting is the unit.",
  },
  "explain-unit": {
    title: "State the distinction.",
    body: "Answer aloud before writing. Distinguish each member, considered as one unit, from the collection composed of those members.",
    prompt: "In what sense is each member one, while the collection is many?",
  },
  "receive-number": {
    title: "Number answers the question “how many?”",
    body: "Counting measures a collection by taking one chosen unit repeatedly until every member has been included. The word “five” and the written figure 5 signify the resulting number. The signs are not identical with the quantity they signify.",
  },
  "practice-count": {
    title: "Measure each collection by its unit.",
    body: "Work deliberately, keeping track of what is being treated as one. Accuracy matters more than speed.",
  },
  "leave-screen": {
    title: "Recognize a common unit among different things.",
    body: "Go to another room or step outside. Find a collection whose members differ but can truthfully be counted under one description. Count it, then return with a brief account.",
    prompt: "What collection did you find, and what common description allowed each member to serve as one unit?",
  },
  recollect: {
    title: "Retain the distinction.",
    body: "The figure is a sign of number; the collection is what is numbered; the unit is what is taken as one in numbering it. You will be asked to recall this distinction after it has had time to rest.",
  },
};

export function getLessonBlocks(register: PresentationRegister): LessonBlock[] {
  const presentations = register === "concrete" ? concretePresentations : register === "discursive" ? discursivePresentations : {};
  return lesson.blocks.map((block) => {
    const presentation = presentations[block.id];
    if (!presentation) return { ...block } as LessonBlock;
    return {
      ...block,
      title: presentation.title,
      body: presentation.body,
      ...("prompt" in block && presentation.prompt ? { prompt: presentation.prompt } : {}),
    } as LessonBlock;
  });
}

export const courseLessons = [
  { number: "01", title: "One and Many", state: "current" },
  { number: "02", title: "The Unit We Choose", state: "next" },
  { number: "03", title: "Counting Without Losing One", state: "locked" },
  { number: "04", title: "The Names and Signs of Number", state: "locked" },
];
