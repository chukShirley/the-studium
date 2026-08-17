# The Studium: Product and Intellectual Foundation

**Status:** first architectural proposal  
**Decision horizon:** enough structure to build one honest vertical slice; not a claim to have settled a complete curriculum  
**Working rule:** every consequential decision is examined philosophically, pedagogically, as a product, and technically.

## 1. Educational mission

The Studium helps learners grow from wonder toward wisdom through disciplined encounters with reality, excellent works, and ordered fields of knowledge. It cultivates the senses, memory, imagination, intellect, will, language, and practical judgment so that learners can know truth, love the good, delight in beauty, act with increasing virtue, and use leisure well. It offers genuine instruction and practice while placing each skill within wider questions of cause, order, nature, and human happiness.

It is explicitly Catholic without confusing education with sanctification. Natural and intellectual formation can dispose a person well; supernatural beatitude is God's gift of grace and belongs to the life of faith, charity, and the sacraments—not to a software product.

### Product constitution

These are constraints, not marketing language:

1. **Reality precedes the interface.** Lessons regularly begin in observation, speech, movement, objects, places, or primary texts. The screen sometimes sends the learner away.
2. **Skills serve understanding; understanding strengthens skills.** Accurate calculation, translation, recitation, argument, and writing are indispensable, but never isolated from principles and causes.
3. **The curriculum has an objective order.** Personalization changes pace, examples, support, and route—not the nature of truth or the ends of a discipline.
4. **Mastery is evidence, not a score.** The system stores what a learner recalled, made, explained, demonstrated, or judged, with uncertainty and human review where appropriate.
5. **Attention is protected.** No infinite feeds, loot mechanics, artificial urgency, or engagement notifications. A session has a fitting end.
6. **Teachers and parents govern formation.** Recommendations assist their judgment; they do not silently displace it.
7. **Sources retain authority.** The application distinguishes primary texts, magisterial teaching, scholarly interpretation, curricular commentary, and generated tutoring.
8. **AI preserves intellectual agency.** It asks, hints, diagnoses, and explains according to a declared tutoring policy. It does not counterfeit certainty or magisterial authority.

## 2. An ordered map of knowledge

The primary navigation should be intelligible to an ordinary family. The deeper ontology can represent the richer hierarchy below. This avoids forcing users to navigate a scholastic classification while still preventing a flat collection of “subjects.”

```text
Wisdom and the order of the whole
├── Sacred doctrine (from revelation; architectonic in the supernatural order)
└── Philosophy (from natural reason)
    ├── Speculative: truth sought principally for its own sake
    │   ├── Natural philosophy: mobile being and nature
    │   │   ├── living things / biology
    │   │   └── the soul and its powers
    │   ├── Mathematics: quantity abstracted from sensible matter
    │   │   ├── arithmetic — discrete quantity
    │   │   ├── geometry — continuous magnitude
    │   │   ├── music — number in harmonic relation
    │   │   └── astronomy — magnitude and motion in the heavens
    │   └── Metaphysics: being as being and first causes
    ├── Practical: truth ordered to action
    │   ├── ethics — the good of the person
    │   ├── household order — the good of domestic community
    │   └── politics — the common good of civil community
    └── Productive arts: reason ordered to making
        ├── fine and useful arts
        └── crafts and technologies

Instruments and modes that serve the whole
├── Trivium: grammar, logic, rhetoric
├── Poetic knowledge: story, image, imitation, poetry, literature
├── History: remembered particulars of human action, serving prudence and judgment
├── Languages: native language, Latin, Greek, and others
└── Liberal and mechanical arts: practices ordered respectively to freedom and useful making
```

### Important qualifications

- This is an **order of objects and ends**, not simply a sequence of courses. Children encounter nature, number, story, music, worship, making, and moral action long before they can name the sciences.
- Logic is an instrument of the sciences, but it is also a real field of disciplined study.
- History concerns contingent particulars and should not be forced into the demonstrative model of a theoretical science. Its curricular role includes memory, narrative, judgment, cultural inheritance, and prudence.
- Poetry gives a mode of knowing through image and imitation; it is not merely decoration before “serious” abstraction.
- Sacred doctrine is not a synthetic capstone generated from the natural sciences. Its principles are received from revelation. Philosophy retains its own integrity while serving theology and being corrected where faith rules out error.

### A graph, not a filing cabinet

Every curricular item may participate in several relations:

- `prerequisite_for`: counting → addition; grammar → dialectic
- `instance_of`: three apples → multitude; a triangle → rectilinear figure
- `deepens`: repeated encounters with justice from fable through Aquinas
- `analogous_to`: numerical ratio ↔ musical consonance ↔ philosophical analogy, without collapsing their meanings
- `appears_in`: concept ↔ work, passage, event, author, or lesson
- `contrasts_with`: competing accounts of happiness or nature
- `ordered_to`: an exercise → lesson end → disciplinary end → liberal end
- `supported_by`: a doctrinal claim → authoritative edition and exact citation

The graph reveals real connections only when curriculum editors assert and explain them. It must not manufacture superficial links merely because words coincide.

## 3. Formation and curriculum

Formation is modeled in three interlocking dimensions rather than a single grade level.

### Powers being formed

| Human power or capacity | Typical acts | Product implications |
|---|---|---|
| External and internal senses | observe, discriminate, listen, handle | real-world prompts; images and audio used soberly |
| Memory | recite, retrieve, narrate, retain | spaced cumulative review; oral and written recall |
| Imagination | picture, imitate, narrate, construct | excellent stories, diagrams, drawing, models |
| Cogitative judgment | recognize the salient particular, compare, anticipate | classification, estimation, concrete cases |
| Intellect | define, distinguish, infer, demonstrate, contemplate | questions before explanations; proofs and causes |
| Will and appetite | attend, persist, choose, restrain, delight fittingly | bounded sessions; honest self-report; no compulsion loops |
| Language and social reason | read, speak, converse, persuade | read-aloud, recitation, seminar prompts, teacher review |
| Practical and productive reason | deliberate, act, make | household work, craft, experiments, projects |

### Three ends attached to every course and lesson

Each item states:

- **Immediate end:** the particular knowledge or performance sought.
- **Liberal end:** the principle, relation, habit, or power perfected through it.
- **Final orientation:** how the study contributes, according to its proper nature, to human flourishing and openness to wisdom. This is metadata for curriculum governance, not a forced devotional paragraph in every lesson.

### Five recurring movements of a lesson

Not every lesson must display all five as UI steps, but authors account for them:

1. **Attend:** encounter a thing, passage, problem, demonstration, or remembered fact.
2. **Wonder:** notice a difficulty, pattern, contrast, or question before premature explanation.
3. **Receive and reason:** imitate a model, learn terms or principles, discuss, infer, or demonstrate.
4. **Practice and make:** calculate, recite, translate, write, draw, construct, classify, or act away from the screen.
5. **Recollect and contemplate:** retrieve prior learning, explain what was learned, connect carefully, and stop.

### Evidence of learning

Assessment records distinct kinds of evidence: recall, fluency, conceptual understanding, reasoning, synthesis, expression, and judgment. A mastery judgment names the claim being made, the evidence supporting it, the assessor (system, tutor, parent, teacher), and confidence. One opaque percentage must never stand in for all of these.

## 4. Learner journey

Age bands are guides, not rigid grades. Placement depends on maturity, prior formation, and demonstrated mastery.

| Stage | Dominant mode | Representative studies | Role of the application |
|---|---|---|---|
| Early childhood (about 5–7) | imitation, sense, memory, speech, play | stories, songs, counting, form, nature, prayer, beautiful language | brief parent-led cards; mostly off-screen; never independent screen retention |
| Foundations (about 7–10) | naming, narration, memorization, concrete practice | arithmetic, grammar, handwriting, nature observation, sacred and historical stories, poetry | prepare and recollect real activity; fluent practice; read-aloud support |
| Grammar years (about 10–13) | ordered memory and rule-governed skill | Latin foundations, arithmetic, geometry by construction, chronology, music, literature | structured courses, recitation, commonplace book, cumulative review |
| Dialectical years (about 13–16) | causes, distinctions, argument | formal logic, Euclid, advanced grammar, natural philosophy, primary-source history | Socratic tutoring, proofs, comparisons, teacher-reviewed writing |
| Rhetorical years (about 16–18) | synthesis, expression, judgment | rhetoric, literature, ethics, politics, sciences, theology | seminars, essays, disputations, substantial projects and reading plans |
| Adult and advanced | self-direction and contemplation | Great Books cycles, philosophy, theology, languages, advanced arts/sciences | guided pathways, discussion cohorts, annotations, durable portfolio |

The recurring pattern is a **spiral of deepening encounters**, not annual disposal: number returns as ratio and proportion; justice returns in story, law, Plato, Aristotle, Scripture, Augustine, and Aquinas; nature returns in observation, biology, natural philosophy, and metaphysics.

## 5. The MVP

### Thesis to test

A learner and guiding adult will return to a calm, cumulative course because it produces visible growth in both competent performance and understanding—without extrinsic reward machinery.

### Audience and scope

- One learner profile, approximately ages 10–14, with an adult guide.
- One authored course: **Arithmetic I: Number and Unity**.
- 12–16 lessons in four small units: multitude and unity; counting and numeration; equality and operations; ratio as a bridge forward.
- Responsive web only. No native app, social feed, cohort marketplace, or general-purpose AI chat.

### Complete vertical slice

1. Adult creates an account and learner profile.
2. Learner enters the Study and sees exactly one recommended next act plus current book/course context.
3. A lesson combines an encounter, question, concise instruction, deliberate practice, an oral or written explanation, and an off-screen activity.
4. Responses create typed evidence, not just “completed” events.
5. Later Study sessions interleave cumulative retrieval based on that evidence.
6. Adult sees a narrative formation report: what the learner can do, appears to understand, should revisit, and should discuss.
7. Curriculum editors author and publish versioned lessons through a minimal protected interface.

### Deliberately excluded

- Billing, coupons, social login, multiple children, cohorts, broad Great Books library, full knowledge-graph explorer, native apps, public API, automated essay grading, and open-ended tutor chat.
- A temporary invitation-only pilot is preferable to implementing subscription machinery before learning whether the educational core is sound.

### Success evidence

- Learners improve on delayed recall and transfer questions, not merely same-session accuracy.
- Adults can accurately describe what was learned and find the report useful for conversation.
- Learners complete off-screen acts and return with evidence.
- Curriculum authors can revise a lesson without engineering help and without corrupting historical learner records.
- Qualitative interviews show that the experience feels like study rather than task completion.

Time-on-site, streak length, and lesson volume are diagnostic at most; they are not governing outcomes.

## 6. Initial technical architecture

### Recommendation: a modular monolith

Begin with one TypeScript application and one PostgreSQL database, with strict domain boundaries inside the codebase. This minimizes operational complexity while preserving seams that can later become services if scale or organizational ownership requires it.

```text
Responsive web client
        │
Next.js application (server-rendered UI + typed application services)
        │
Domain modules
├── identity & households
├── curriculum & publishing
├── study sessions
├── learner evidence & mastery
├── recommendations
├── source authority
└── administration & audit
        │
PostgreSQL ── object storage
        │
Background jobs/outbox ── email, later billing and AI providers
```

### Stack

- **Web:** Next.js with React and TypeScript; server components by default, client components only for genuine interaction.
- **UI:** semantic HTML, accessible headless primitives, CSS variables and a restrained design system. Avoid adopting a dashboard visual vocabulary by default.
- **Data:** PostgreSQL with Drizzle ORM and SQL migrations. Use relational tables for curricular truth; use JSON only for bounded, schema-validated content blocks.
- **Identity:** a maintained authentication library/provider supporting verified email, password reset, secure sessions, and later OAuth. Keep application roles and household relationships in our database rather than provider-specific metadata.
- **Files:** S3-compatible object storage for licensed media and learner uploads; immutable keys plus database metadata.
- **Jobs:** a durable PostgreSQL-backed job/outbox mechanism at first; add dedicated queue infrastructure only when needed.
- **Email:** transactional provider behind an adapter.
- **Billing (post-pilot):** Stripe Checkout and Customer Portal plus verified, idempotent webhooks. Store provider identifiers and ledger-like events, never card data.
- **AI (post-core):** provider-neutral tutor service using versioned prompt/policy records, constrained tools, retrieval only from approved sources, complete provenance, cost limits, and safety/audit logs.
- **Testing:** unit tests for domain rules, integration tests against PostgreSQL, browser tests for the critical study path, accessibility checks, and curriculum fixtures.
- **Operations:** managed PostgreSQL and object storage, preview deployments, structured logs, error reporting, encrypted secrets, database backups with restore drills.

Choose exact vendors during implementation based on team expertise, data-processing terms, accessibility, and total operating burden. Stable boundaries matter more than prematurely naming every vendor.

### Security and privacy from the first migration

- Household-scoped authorization is enforced in application services and tested against cross-household access; hiding UI is not authorization.
- Separate guardian identity from learner profiles. A child need not have an email address.
- Collect the least child data possible; define deletion, export, retention, consent, and incident procedures before a child pilot.
- Encrypt transport and managed storage, use secure/http-only/same-site cookies, rate-limit sensitive actions, and require re-authentication for guardian/security changes.
- Every content publication, role change, assessment override, and doctrinal-source change creates an audit event.
- Treat lesson content and AI outputs as untrusted input at render boundaries; sanitize rich text and restrict uploads.

## 7. First-pass domain model

Identifiers are UUIDs; records carry timestamps. Published curricular records are immutable versions.

### Identity, household, and access

- `User`: authenticating adult or mature learner; email, status, identity-provider link.
- `Household`: billing/guardianship boundary.
- `HouseholdMembership`: user, household, role (`owner`, `guardian`, `learner`, `viewer`).
- `LearnerProfile`: household, display name, birth-year band, accessibility preferences; optionally linked to a user.
- `ConsentRecord`: guardian, learner, policy/version, jurisdiction, decision, time.
- `RoleAssignment`: administrative roles with explicit scope.

### Curriculum and sources

- `Discipline`: hierarchical taxonomy node with kind and ordering rationale.
- `Course`, `Unit`, `Lesson`: stable identities independent of revisions.
- `CourseVersion`, `UnitVersion`, `LessonVersion`: draft/review/published/retired content snapshots.
- `LessonBlock`: typed sequence (`observation`, `reading`, `instruction`, `question`, `practice`, `recitation`, `off_screen`, `reflection`).
- `LearningEnd`: immediate, liberal, or final-orientation statement.
- `Concept`: stable idea with carefully scoped definitions.
- `ConceptRelation`: typed, directed relation with editorial explanation and provenance.
- `Prerequisite`: required concept/skill and threshold.
- `Author`, `Work`, `Edition`, `Passage`: bibliographic chain; rights status and citation live on edition/passage.
- `SourceAssertion`: claim, authority class (`primary`, `magisterial`, `scholarly`, `editorial`), source location, reviewer.
- `Exercise`, `ExerciseVersion`, `Rubric`, `RubricVersion`: prompts and evaluation criteria separate from lesson layout.

### Learning state

- `Enrollment`: learner, course version, state, guide.
- `StudySession`: bounded visit with intention, start/end, and recommendation context.
- `LessonAttempt`: learner, immutable lesson version, status, timing.
- `Response`: prompt/exercise version, modality, learner answer or artifact reference.
- `Evidence`: response/observation, evidence kind, proposition or skill assessed, assessor, confidence.
- `MasteryState`: learner + assessable target; current level, confidence, last review; derived from evidence and recalculable.
- `ReviewSchedule`: target, due window, reason, scheduling-policy version.
- `ActivityReport`: declaration or artifact from an off-screen act, optionally guardian-attested.
- `Annotation`, `CommonplaceEntry`, `RecitationRecord`: durable learner-owned intellectual artifacts.
- `Recommendation`: candidate act, reason code, policy version, accepted/dismissed/expired state.

### Platform governance and later commerce

- `Publication`: content version, approvers, effective time.
- `AuditEvent`: actor, action, subject, before/after references, request metadata.
- `TutorConversation`, `TutorTurn`: policy version, sources, model/provider, tool use, safety flags; retention can differ from ordinary progress data.
- `Subscription`, `BillingCustomer`, `BillingEvent`, `Entitlement`: added when charging begins; webhooks are append-only and idempotent.

### Modeling rules

1. Do not overwrite content a learner encountered; publish a new version.
2. Store raw evidence separately from derived mastery so evaluation policies can improve.
3. Separate completion, correctness, understanding, and formation observations.
4. The graph never grants access; authorization follows households, roles, licenses, and entitlements.
5. Recommendations are explainable records, not invisible mutations of a learner's path.

## 8. Major application areas and screens

### Learner

- **The Study:** current reading/course, one next recommendation, quiet return points, recent commonplace entries.
- **Lesson:** focused sequence with explicit off-screen transitions and a clear stopping point.
- **Review:** cumulative retrieval, recitation, and corrections.
- **Library:** owned/assigned works, reading plans, rights-aware excerpts, “continue in your book” directions.
- **Commonplace Book:** annotations, copied passages, reflections, and cross-links owned by the learner.
- **Course Map:** the ordered path and meaningful connections, not a field of locked reward tiles.
- **Portfolio:** selected proofs, essays, translations, recitations, constructions, and projects.

### Parent or guide

- **Household:** learner profiles, invitations, consent, accessibility.
- **Plan:** assign/adapt course pace and approve recommendations.
- **Formation Report:** narrative evidence by ability and understanding; questions for conversation.
- **Review Queue:** oral checks, artifacts, writing, and rubric decisions requiring a person.
- **Settings:** security, privacy/export/deletion, notifications, and later subscription.

### Curriculum administration

- **Curriculum Map:** disciplines, courses, concepts, prerequisites, and ends.
- **Authoring Studio:** structured lesson blocks with preview at learner age/role.
- **Exercise and Rubric Editor:** versioned answer keys and evidence mappings.
- **Library Catalog:** authors, works, editions, passages, permissions, and citations.
- **Editorial Workflow:** draft, doctrinal/academic review where needed, publish, retire, compare versions.
- **Audit and Quality:** change history, broken links, accessibility, missing provenance, outcome review.

The first release implements only The Study, Lesson, Review, a small Formation Report, profile/settings essentials, and the minimum authoring workflow.

## 9. Roadmap

### Phase 0 — constitution and research

- Ratify mission, product constraints, knowledge taxonomy, source-authority policy, and child-safety posture.
- Interview families, tutors, and curriculum designers; observe real study sessions.
- Write the complete Arithmetic I course brief and sample lessons on paper.

**Exit:** an academic advisor and target families can identify what the pilot is and what it refuses to become.

### Phase 1 — prototype the learning loop

- Build a low-fidelity clickable lesson, off-screen act, return, review, and adult report.
- Conduct supervised usability sessions without accounts, AI, or billing.

**Exit:** learners understand the flow and adults find the evidence meaningful.

### Phase 2 — pilot-quality vertical slice

- Implement accounts, one learner per household, curriculum versioning, Study, lesson engine, typed responses, evidence, review scheduling, report, minimal admin, audit, export/deletion.
- Author and academically review Arithmetic I; run an invitation-only pilot.

**Exit:** real learners use the course over multiple weeks; restore, privacy, and authorization tests pass.

### Phase 3 — deepen before broadening

- Improve lesson and mastery policies from pilot evidence.
- Add guide review, portfolios/commonplace entries, multiple learner profiles, accessibility refinements, and restrained email reminders controlled by guardians.
- Add a second course chosen to test cross-disciplinary architecture—likely Geometry by Construction or Grammar and Thought.

**Exit:** connections and shared primitives work across two genuinely different disciplines.

### Phase 4 — sustainable paid product

- Establish price/value hypothesis, terms, support, and refund processes.
- Add Stripe-hosted checkout/portal, entitlements, trials if justified, failed-payment grace, and webhook reconciliation.
- Add curriculum operations, analytics governed by a written measurement policy, and support tooling.

### Phase 5 — guided reading and bounded AI

- Add works/editions/rights workflows, reading plans, passages, annotations, and discussion.
- Pilot a Socratic tutor only in a narrow domain with authoritative retrieval, hint ladders, guardian controls, citations, audit, escalation, and evaluation against both learning and doctrinal safety criteria.

### Phase 6 — institution-scale capabilities

- Cohorts and seminars, tutor/teacher organizations, richer assessment, mobile companions where physical-world use warrants them, public API, and broader curriculum.
- Extract services only where load, security isolation, or team ownership proves the need.

## 10. Questions to resolve before expansion

### Philosophical and theological

- What precise account of liberal education governs the product, and which claims are foundational versus prudential?
- How will we describe the relation among natural happiness, supernatural beatitude, acquired virtue, infused virtue, education, and grace without implying that the product confers sanctity?
- Who has final responsibility for doctrinal review, and what requires a nihil obstat/imprimatur or other ecclesial consultation?
- How will non-Catholic learners encounter explicitly Catholic material without concealing the institution's commitments or coercing participation?
- What is the proper place of manual, technical, and professional arts within a liberal whole?

### Curricular and pedagogical

- Who is the exact first learner, and what adult involvement can realistically be assumed?
- Which arithmetic tradition, terminology, sequence, and manipulatives will the first course use?
- What counts as mastery for fluency, explanation, transfer, recitation, and judgment?
- Which activities require a human assessor, and what training/calibration do guides receive?
- How much screen time is fitting at each stage, and how are off-screen activities verified without surveillance or dishonesty incentives?
- How do we accommodate dyslexia, disability, and neurodiversity while preserving common educational ends?
- What editorial board and review process govern historical claims, contested questions, and age suitability?

### Technical and AI

- Build-versus-buy decisions for identity, content editing, analytics, and search.
- Data residency, backup objectives, retention periods, encryption/key management, and breach response.
- Can the content block model express mathematics, music notation, interlinear language, diagrams, citations, and accessibility without becoming an untyped page builder?
- What evidence model and spaced-review policy are both intelligible and empirically defensible?
- Which AI uses have demonstrated educational benefit, what sources may they use, and what actions are categorically prohibited?
- How will model changes be evaluated and tutoring conversations be retained, inspected, corrected, and deleted?

### Legal and safeguarding

- Initial jurisdictions and obligations under COPPA, FERPA where applicable, state privacy laws, GDPR/UK GDPR if served, and rules concerning profiling or automated decisions involving minors.
- Verifiable parental consent, age assurance, child accounts, guardian access, data deletion/export, and mandated-reporting/safety escalation policies.
- Copyright status by work, edition, translation, image, recording, and user upload; licensing and takedown process.
- Terms allocating responsibility for home activities and clear boundaries around theological, medical, mental-health, and safeguarding advice.
- Accessibility target (at least WCAG 2.2 AA as a product requirement) and applicable consumer/subscription law.

These require qualified legal and ecclesial counsel; this document is product architecture, not legal or doctrinal approval.

### Product and business

- Who buys, who guides, who learns, and whose dissatisfaction causes cancellation?
- Is the first value proposition a complete course, a daily study practice, a parent aid, or access to a broader institution?
- What price supports excellent authorship and human review without manipulating learner attention?
- Is a free trial educationally adequate for judging cumulative formation, or would a sample unit, scholarship, or refundable pilot be more honest?
- How will authors, translators, tutors, and reviewers be compensated and credited?
- Which metrics are forbidden from driving optimization, even if they correlate with revenue?

## 11. Decision ledger: known tensions

| Proposal | Philosophical | Pedagogical | Product | Technical decision |
|---|---|---|---|---|
| One “next act” in The Study | supports attention and ordered guidance | reduces choice overload | may feel less explorable | recommendation is explainable and dismissible; course map remains visible |
| Off-screen work | gives priority to embodied reality | excellent for observation and making | creates return/drop-off friction | use explicit pause/return state and simple evidence, never invasive verification |
| Adaptive review | supports habit and memory | useful if evidence-specific | can feel opaque or punitive | show why an item returned; allow guide override; version policy |
| Parent formation report | respects household authority | enables conversation and human judgment | adults want concise clarity | narrative first, drill-down evidence second; avoid composite child scores |
| No billing in pilot | keeps focus on educational good | allows iteration | delays revenue validation | use invitations; test willingness-to-pay interviews in parallel |
| AI after the core loop | protects learner agency while policy is immature | avoids answer-dependence | postpones a marketable feature | design clean tutor boundary now; implement only after benchmark/evaluation exists |

## 12. The first component to implement

Implement the **versioned lesson-and-evidence vertical slice** before a broad dashboard, knowledge-graph visualization, billing system, or chat tutor.

The first walking skeleton should contain:

1. A seed-authored lesson, “One and Many,” expressed through the real curriculum schema.
2. A Study page that begins a bounded session.
3. Lesson blocks for object observation, spoken response, concise text, practice, and an off-screen act.
4. A stored response that yields separate fluency and understanding evidence.
5. A return visit where one review is recommended for an explicit reason.
6. A parent-facing narrative summary.
7. A minimal admin preview and publish action proving content is data, versioned, and auditable.

This is the smallest component that tests the philosophical, pedagogical, product, and technical architecture together. A login shell or generic dashboard would prove almost nothing distinctive.

## 13. Governing sources for the next design pass

- Wyoming Catholic College, [*Born in Wonder, Brought to Wisdom: Philosophical Vision Statement*](https://wyomingcatholic.edu/academics/philosophical-vision/philosophical-vision-statement/).
- Aristotle, *Nicomachean Ethics*, *Politics*, *Metaphysics*, *Physics*, *Posterior Analytics*, and *De Anima* (using identified critical translations in curriculum records).
- St. Augustine, especially *De Magistro*, *De Doctrina Christiana*, and *Confessions*.
- St. Thomas Aquinas, especially *Summa Theologiae* I q.1, I qq.75–89, I–II qq.1–5 and 49–70; *Commentary on the De Trinitate of Boethius* qq.5–6; and relevant Aristotelian commentaries.
- Catechism of the Catholic Church, especially [human dignity and beatitude](https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_one.html), [the human virtues](https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_one/article_7/i_the_human_virtues.html), and [grace](https://www.vatican.va/content/catechism/en/part_three/section_one/chapter_three/article_2/ii_grace.html).
- Second Vatican Council, *Gravissimum Educationis*; John Paul II, *Fides et Ratio* and *Ex Corde Ecclesiae*.

Before encoding contested interpretations, the curriculum team should adopt editions, a citation standard, an authority taxonomy, and a review process. The source list guides work; it is not itself a substitute for argument or judgment.
