"use client";

import Link from "next/link";
import { useStudy } from "@/components/study-provider";
import { Ornament } from "@/components/ornament";

export default function ReviewPage() {
  const { state, update } = useStudy();
  const enough = state.reviewResponse.trim().length >= 20;
  return (
    <main className="shell narrow review-page">
      <p className="kicker">Recollection · due now</p>
      <h1>Call it back to mind.</h1>
      <Ornament />
      <p className="lead">Do not reopen the lesson. Say your answer aloud, then write it simply.</p>
      <label className="response-field review-field">
        <span>What is a unit, and why is the written figure “5” not itself the number five?</span>
        <textarea value={state.reviewResponse} onChange={(event) => update({ reviewResponse: event.target.value, reviewComplete: false })} rows={6} placeholder="First remember; then write…" />
      </label>
      <details>
        <summary>Ask for a small hint</summary>
        <p>Think of the five objects you gathered. What did you count? What did the mark on the screen merely signify?</p>
      </details>
      <button className="button primary" disabled={!enough} onClick={() => update({ reviewComplete: true })}>Keep this recollection</button>
      {state.reviewComplete && (
        <div className="saved-note" role="status">
          <p>Your recollection has been kept as evidence for your guide.</p>
          <Link className="text-link" href="/">Return to the Study →</Link>
        </div>
      )}
    </main>
  );
}
