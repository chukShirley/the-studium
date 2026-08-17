# The Studium

The Studium is a long-horizon project for liberal education and human formation in the Aristotelian-Thomistic and Catholic classical tradition.

The project is currently in its foundation phase. Before implementing product code, the intellectual, curricular, product, and technical architecture is defined in [The Studium Foundation](docs/FOUNDATION.md).

## First build

The first vertical slice will be **Arithmetic I: Number and Unity**: one learner can enter a quiet study, complete a short lesson that joins concrete observation to fluent practice and explanation, perform one off-screen exercise, and return later to a cumulative review selected from durable mastery evidence.

This slice is intentionally narrow. It tests the product's central claim: practical skill, understanding, memory, and contemplation can reinforce one another without gamification.

## Status

- [x] Educational mission and governing principles
- [x] Map of knowledge and stages of formation
- [x] Learner journey and MVP boundary
- [x] Initial system architecture and domain model
- [x] Screen map, phased roadmap, and open decisions
- [x] Curriculum schema and first lesson prototype
- [x] Application scaffold

## Run the vertical slice

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Prototype learner evidence is kept in local browser storage so the lesson, delayed recollection, and guide report can be exercised without premature account infrastructure.

If `pnpm` is not installed globally, Node's bundled Corepack can invoke the pinned version:

```bash
corepack pnpm install
corepack pnpm dev
```

After dependencies are installed, `npm run dev` also starts the application without requiring a global pnpm command.

Useful checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```
