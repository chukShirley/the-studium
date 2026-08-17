import Link from "next/link";
import { lesson } from "@/lib/curriculum";

export default function AdminPage() {
  return (
    <main className="shell admin-page">
      <header><div><p className="kicker">Curriculum studio</p><h1>Published lesson record</h1></div><span className="published">Published · v{lesson.version}</span></header>
      <div className="admin-grid">
        <section className="paper-card">
          <p className="folio">Immutable publication</p><h2>{lesson.title}</h2><p>{lesson.course}</p>
          <dl className="metadata"><dt>Stable ID</dt><dd>{lesson.id}</dd><dt>Version</dt><dd>{lesson.version}</dd><dt>Blocks</dt><dd>{lesson.blocks.length}</dd><dt>Status</dt><dd>Published</dd></dl>
          <Link className="button primary" href="/lesson/one-and-many">Preview learner view</Link>
        </section>
        <section className="block-ledger">
          <p className="folio">Structured lesson blocks</p>
          {lesson.blocks.map((block, index) => <div key={block.id}><span>{String(index + 1).padStart(2, "0")}</span><p><strong>{block.eyebrow}</strong>{block.title}</p><code>{block.kind}</code></div>)}
        </section>
      </div>
      <p className="admin-note">This prototype reads a versioned TypeScript curriculum record. Database-backed draft, review, publish, and audit actions belong to the pilot-quality phase.</p>
    </main>
  );
}
