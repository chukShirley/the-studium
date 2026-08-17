import type { PresentationRegister } from "@/lib/curriculum";

export type StudyState = {
  onboarded: boolean;
  learnerName: string;
  completed: boolean;
  response: string;
  practiceAnswers: string[];
  practiceCorrect: boolean[];
  offscreenResponse: string;
  reviewResponse: string;
  reviewComplete: boolean;
  presentationRegister: PresentationRegister;
  registersEncountered: PresentationRegister[];
  feedback: {
    clarity: "" | "unclear" | "mixed" | "clear";
    registerFit: "" | "too-simple" | "fitting" | "too-demanding";
    reflection: string;
  };
  completedAt?: string;
};

export const initialStudyState: StudyState = {
  onboarded: false,
  learnerName: "",
  completed: false,
  response: "",
  practiceAnswers: ["", "", ""],
  practiceCorrect: [false, false, false],
  offscreenResponse: "",
  reviewResponse: "",
  reviewComplete: false,
  presentationRegister: "discursive",
  registersEncountered: ["discursive"],
  feedback: { clarity: "", registerFit: "", reflection: "" },
};

export const storageKey = "studium:arithmetic-one:v1";

export function evidenceSummary(state: StudyState) {
  const correct = state.practiceCorrect.filter(Boolean).length;
  return {
    fluency: correct === 3 ? "Secure in this lesson" : correct > 0 ? "Developing" : "Not yet observed",
    understanding: state.response.trim().length >= 40 ? "Promising explanation" : state.response ? "Needs conversation" : "Not yet observed",
    attention: state.offscreenResponse.trim().length >= 15 ? "Completed a real-world observation" : "Not yet observed",
    next: state.reviewComplete ? "Ready to continue to The Unit We Choose" : state.completed ? "Recall the meaning of unit before continuing" : "Complete One and Many",
  };
}
