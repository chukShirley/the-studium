"use client";

import Link from "next/link";
import { useStudy } from "@/components/study-provider";
import { evidenceSummary } from "@/lib/study-state";

export default function ReportPage() {
  const { state, reset } = useStudy();
  const evidence = evidenceSummary(state);
  return (
    <main className="shell report-page">
      <header className="report-header">
        <div><p className="kicker">For Anna’s guide</p><h1>A record for conversation</h1></div>
        <p>This report describes observed work. It does not reduce the learner to a score.</p>
      </header>
      <section className="report-summary paper-card">
        <div><span>Current study</span><h2>One and Many</h2><p>Arithmetic I · Lesson version 1</p></div>
        <div className={`status-seal ${state.completed ? "done" : ""}`}>{state.completed ? "Encountered" : "Awaiting study"}</div>
      </section>
      <section className="evidence-grid">
        <article><p className="folio">Procedural fluency</p><h3>{evidence.fluency}</h3><p>{state.practiceCorrect.filter(Boolean).length} of 3 deliberate counting exercises answered accurately.</p></article>
        <article><p className="folio">Conceptual understanding</p><h3>{evidence.understanding}</h3><p>{state.response || "No explanation has yet been offered."}</p></article>
        <article><p className="folio">Attention beyond the screen</p><h3>{evidence.attention}</h3><p>{state.offscreenResponse || "No real-world observation has yet been recorded."}</p></article>
        <article><p className="folio">Delayed recollection</p><h3>{state.reviewComplete ? "Recollection recorded" : "Still to be recalled"}</h3><p>{state.reviewResponse || "The learner has not yet returned for delayed recall."}</p></article>
      </section>
      <section className="guide-conversation">
        <div><p className="folio">A question for conversation</p><h2>Ask for a new example.</h2></div>
        <p>Invite Anna to name something that can be counted in two truthful ways—for example, twelve eggs or one dozen. Ask what was treated as the unit each time.</p>
      </section>
      <div className="report-footer"><p><strong>Recommended next act:</strong> {evidence.next}</p><Link className="text-link" href="/admin">See the published lesson record →</Link><button className="plain-button" onClick={reset}>Reset prototype evidence</button></div>
    </main>
  );
}
