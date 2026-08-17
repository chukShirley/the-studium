"use client";

import Link from "next/link";
import { Ornament } from "@/components/ornament";
import { useStudy } from "@/components/study-provider";
import { courseLessons, lesson } from "@/lib/curriculum";

export default function StudyPage() {
  const { state, ready } = useStudy();
  const destination = state.completed && !state.reviewComplete ? "/review" : "/lesson/one-and-many";
  const action = state.reviewComplete ? "Revisit the lesson" : state.completed ? "Begin recollection" : "Enter the lesson";

  return (
    <main>
      <section className="hero shell">
        <p className="kicker">Monday · The feast of St. Hyacinth</p>
        <h1>Good morning, Anna.</h1>
        <p className="hero-copy">Let us begin with attention. One worthy thing, done well, is enough for today.</p>
        <Ornament />
      </section>

      <section className="shell study-grid" aria-label="Today’s study">
        <article className="next-card paper-card">
          <div className="card-topline">
            <span className="folio">Your next act</span>
            <span className="duration">{state.completed && !state.reviewComplete ? "8 minutes" : lesson.duration}</span>
          </div>
          <p className="course-label">{lesson.course}</p>
          <h2>{state.completed && !state.reviewComplete ? "Recollect: One and Many" : lesson.title}</h2>
          <p className="latin">{state.completed && !state.reviewComplete ? "Memoria" : lesson.latinTitle}</p>
          <p className="card-description">
            {state.completed && !state.reviewComplete
              ? "Return without looking at yesterday’s words. Tell what a unit is and why a written figure is not itself the number."
              : "Look closely at ordinary things and begin to see number not merely as a mark, but as a multitude measured by one."}
          </p>
          <div className="ends-note">
            <span>Why this now</span>
            <p>{state.completed ? "A short delay helps memory become your own." : "Arithmetic begins by seeing what number is before learning what to do with it."}</p>
          </div>
          <Link className="button primary" href={destination}>{action}<span aria-hidden="true">→</span></Link>
        </article>

        <aside className="side-column">
          <section className="quiet-card">
            <p className="folio">Current course</p>
            <div className="course-seal" aria-hidden="true"><span>I</span></div>
            <h3>Number & Unity</h3>
            <p>Unit I · Multitude and Unity</p>
            <div className="fine-progress" aria-label="1 of 12 lessons encountered"><i style={{ width: state.completed ? "16%" : "8%" }} /></div>
            <span className="small">{state.completed ? "1 lesson encountered" : "The first lesson awaits"}</span>
            <Link className="text-link" href="/course">See the ordered course <span>→</span></Link>
          </section>
          <blockquote>
            <span className="opening-quote">“</span>
            The soul never thinks without an image.
            <cite>Aristotle · On the Soul</cite>
          </blockquote>
        </aside>
      </section>

      <section className="shell beneath">
        <div>
          <p className="folio">The path just ahead</p>
          <h2 className="section-title">First encounters with number</h2>
        </div>
        <div className="path-row">
          {courseLessons.slice(0, 3).map((item) => (
            <div className={`path-item ${item.state}`} key={item.number}>
              <span>{item.number}</span><p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      {!ready && <span className="sr-only" role="status">Restoring your study</span>}
    </main>
  );
}
