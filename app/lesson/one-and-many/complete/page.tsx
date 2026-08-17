import Link from "next/link";
import { Ornament } from "@/components/ornament";

export default function LessonCompletePage() {
  return (
    <main className="completion-page shell narrow">
      <p className="kicker">The lesson is complete</p>
      <div className="completion-seal" aria-hidden="true">I</div>
      <h1>Let the lesson rest.</h1>
      <Ornament />
      <p>You attended to one thing and the many, practiced counting, and carried the question into the world beyond the screen. Memory grows when we allow what we have learned to become quiet.</p>
      <div className="completion-note">
        <span>When you return</span>
        <p>You will be asked to say what a unit is without looking back at the lesson.</p>
      </div>
      <Link className="button primary" href="/">Return to the Study <span>→</span></Link>
    </main>
  );
}
