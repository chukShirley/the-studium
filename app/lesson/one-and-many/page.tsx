"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Ornament } from "@/components/ornament";
import { useStudy } from "@/components/study-provider";
import { lesson, type LessonBlock } from "@/lib/curriculum";

export default function LessonPage() {
  const router = useRouter();
  const { state, update } = useStudy();
  const [step, setStep] = useState(0);
  const block = lesson.blocks[step] as LessonBlock;
  const isLast = step === lesson.blocks.length - 1;
  const canContinue = useMemo(() => {
    if (block.kind === "response") return state.response.trim().length >= 12;
    if (block.kind === "practice") return state.practiceCorrect.every(Boolean);
    if (block.kind === "offscreen") return state.offscreenResponse.trim().length >= 8;
    return true;
  }, [block.kind, state]);

  function next() {
    if (isLast) {
      update({ completed: true, completedAt: new Date().toISOString() });
      router.push("/lesson/one-and-many/complete");
      return;
    }
    setStep((current) => current + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="lesson-shell">
      <div className="lesson-progress" aria-label={`Part ${step + 1} of ${lesson.blocks.length}`}>
        <i style={{ width: `${((step + 1) / lesson.blocks.length) * 100}%` }} />
      </div>
      <header className="lesson-heading shell narrow">
        <Link href="/" className="back-link">← Leave quietly</Link>
        <p className="kicker">{lesson.unit} · Part {step + 1} of {lesson.blocks.length}</p>
      </header>

      <article className={`lesson-content shell narrow block-${block.kind}`}>
        <p className="lesson-eyebrow">{block.eyebrow}</p>
        <h1>{block.title}</h1>
        <Ornament />
        <p className="lesson-body">{block.body}</p>

        {block.kind === "attend" && <ObjectStudy />}
        {block.kind === "response" && (
          <label className="response-field">
            <span>{block.prompt}</span>
            <textarea value={state.response} onChange={(event) => update({ response: event.target.value })} rows={5} placeholder="Write after you have answered aloud…" />
          </label>
        )}
        {block.kind === "practice" && <Practice block={block} />}
        {block.kind === "offscreen" && (
          <div className="offscreen-box">
            <span className="door-symbol" aria-hidden="true">↟</span>
            <p>{block.prompt}</p>
            <textarea value={state.offscreenResponse} onChange={(event) => update({ offscreenResponse: event.target.value })} rows={3} placeholder="When you return, describe what you found…" />
          </div>
        )}

        <div className="lesson-actions">
          <button className="button ghost" onClick={() => setStep((current) => Math.max(0, current - 1))} disabled={step === 0}>Previous</button>
          <button className="button primary" onClick={next} disabled={!canContinue}>
            {isLast ? "Close the lesson" : "Continue"}<span aria-hidden="true">→</span>
          </button>
        </div>
        {!canContinue && <p className="gentle-prompt">Give this act its due before continuing.</p>}
      </article>
    </main>
  );
}

function ObjectStudy() {
  return (
    <div className="object-study" aria-label="Five individual stones arranged together">
      {["◒", "●", "◓", "●", "◑"].map((stone, index) => <span key={index}>{stone}</span>)}
      <p>one · one · one · one · one</p>
    </div>
  );
}

function Practice({ block }: { block: Extract<LessonBlock, { kind: "practice" }> }) {
  const { state, update } = useStudy();
  function setAnswer(index: number, answer: string) {
    const answers = [...state.practiceAnswers];
    const correct = [...state.practiceCorrect];
    answers[index] = answer;
    correct[index] = answer.trim() === block.problems[index].answer;
    update({ practiceAnswers: answers, practiceCorrect: correct });
  }
  return (
    <div className="practice-list">
      {block.problems.map((problem, index) => (
        <label key={problem.expression}>
          <span>{index + 1}</span>
          <p>{problem.expression}</p>
          <input aria-label={`Answer to ${problem.expression}`} inputMode="numeric" value={state.practiceAnswers[index]} onChange={(event) => setAnswer(index, event.target.value)} />
          <i className={state.practiceCorrect[index] ? "correct" : ""}>{state.practiceCorrect[index] ? "well seen" : ""}</i>
        </label>
      ))}
    </div>
  );
}
