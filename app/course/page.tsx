import Link from "next/link";
import { courseLessons, lesson } from "@/lib/curriculum";

export default function CoursePage() {
  return (
    <main className="shell course-page">
      <header className="course-hero">
        <p className="kicker">Arithmetic I</p>
        <h1>Number & Unity</h1>
        <p>To calculate truly, we must first learn to see what number is.</p>
      </header>
      <div className="course-layout">
        <section>
          <p className="folio">Unit I · Multitude and Unity</p>
          <div className="lesson-list">
            {courseLessons.map((item, index) => (
              <article className={item.state} key={item.number}>
                <span>{item.number}</span>
                <div><h2>{item.title}</h2><p>{index === 0 ? "Attend · Wonder · Practice · Recollect" : "The course opens in order."}</p></div>
                {index === 0 ? <Link href="/lesson/one-and-many">Open →</Link> : <i aria-label="Not yet available">—</i>}
              </article>
            ))}
          </div>
        </section>
        <aside className="course-ends paper-card">
          <p className="folio">The ends of this lesson</p>
          <dl>
            <dt>Immediate</dt><dd>{lesson.ends.immediate}</dd>
            <dt>Liberal</dt><dd>{lesson.ends.liberal}</dd>
            <dt>Final orientation</dt><dd>{lesson.ends.orientation}</dd>
          </dl>
        </aside>
      </div>
    </main>
  );
}
