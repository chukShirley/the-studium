"use client";

import { useState } from "react";
import { useStudy } from "@/components/study-provider";
import { presentationRegisters } from "@/lib/curriculum";

const clarityOptions = [
  { value: "unclear", label: "Often unclear" },
  { value: "mixed", label: "Clear in parts" },
  { value: "clear", label: "Clear throughout" },
] as const;
const fitOptions = [
  { value: "too-simple", label: "Too simple" },
  { value: "fitting", label: "Fitting" },
  { value: "too-demanding", label: "Too demanding" },
] as const;

export default function FeedbackPage() {
  const { state, update } = useStudy();
  const [copyStatus, setCopyStatus] = useState("");
  const feedback = state.feedback;

  function setFeedback(patch: Partial<typeof feedback>) {
    update({ feedback: { ...feedback, ...patch } });
    setCopyStatus("");
  }

  async function copyFeedback() {
    const summary = [
      "The Studium — One and Many prototype feedback",
      `Presentation used: ${presentationRegisters[state.presentationRegister].shortLabel}`,
      `Presentations encountered: ${state.registersEncountered.map((item) => presentationRegisters[item].shortLabel).join(", ")}`,
      `Clarity: ${feedback.clarity || "Not answered"}`,
      `Presentation fit: ${feedback.registerFit || "Not answered"}`,
      `Reflection: ${feedback.reflection || "No written reflection"}`,
    ].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus("Copied. You can now paste this into a message to the person who shared the prototype.");
    } catch {
      setCopyStatus("Your browser did not allow copying. Select and copy your written reflection manually.");
    }
  }

  return (
    <main className="shell feedback-page">
      <header><p className="kicker">Prototype reflection</p><h1>Help us attend to the learner.</h1><p>Your answers remain in this browser until you choose to copy and share them.</p></header>
      <section className="feedback-form paper-card">
        <fieldset><legend>How clear was the lesson’s presentation?</legend><div className="choice-row">{clarityOptions.map((option) => <label key={option.value}><input type="radio" name="clarity" checked={feedback.clarity === option.value} onChange={() => setFeedback({ clarity: option.value })} /><span>{option.label}</span></label>)}</div></fieldset>
        <fieldset><legend>How did the chosen presentation fit you today?</legend><div className="choice-row">{fitOptions.map((option) => <label key={option.value}><input type="radio" name="fit" checked={feedback.registerFit === option.value} onChange={() => setFeedback({ registerFit: option.value })} /><span>{option.label}</span></label>)}</div></fieldset>
        <label className="response-field"><span>Where did understanding deepen—or where did the lesson lose you?</span><textarea rows={7} value={feedback.reflection} onChange={(event) => setFeedback({ reflection: event.target.value })} placeholder="A brief, candid reflection is most useful…" /></label>
        <div className="feedback-share"><div><p className="folio">Nothing is sent automatically</p><p>Copy a plain-text summary and send it using the method requested by the person conducting the pilot.</p></div><button className="button primary" onClick={copyFeedback}>Copy feedback summary</button></div>
        {copyStatus && <p className="copy-status" role="status">{copyStatus}</p>}
      </section>
    </main>
  );
}
