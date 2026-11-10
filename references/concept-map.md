# Concept map: a CS-level picture, without the CS degree

This is the backbone of what to teach. A CS graduate carries a mental map of how computers, the web and software systems fit together. Most of that map can be learned at a high level by reading and discussing real code, without writing code from scratch. Use this file to decide what deserves depth, what gets a one-line mention, and what to skip.

## Contents
1. Importance tiers
2. Categories
3. Complexity scale
4. The layers (the big-picture map)
5. Concepts by area, with tiers
6. Trivia: safe to skip

---

## 1. Importance tiers

| Tier | Meaning | What the learner should be able to do |
|---|---|---|
| **Core** | Shows up in almost every project, shapes architecture or user experience, and misunderstanding it causes real bugs or bad decisions | Understand what it is and why it matters, recognize it anywhere, follow a conversation about its tradeoffs, notice when AI gets it wrong |
| **Know it when you see it** | Common, but you can rely on the agent for the details | Recognize it, say roughly what it does and why it's there, know when to ask about it |
| **Trivia** | Syntax, exact names, config formats, things AI writes reliably and a lookup answers | Nothing. Nothing. Say "this is trivia, you can skip it" so the learner stops worrying about it |

How to judge the tier of something not listed here:
- How often does it appear across projects? Everywhere → leans Core.
- Does it shape how the system is built, or how the product feels? Yes → Core.
- If someone misunderstands it, does something break or get slow or inaccessible? Yes → Core.
- Is it something AI gets wrong often? Yes → at least Know it when you see it, because the learner has to catch it.
- Is it just how this language spells an idea they already know? → Trivia.

## 2. Categories

The **Category** line of a map card says what kind of thing something is in the software world: browser built-in, language feature, library, framework, component library, styling tool, package, build tool, developer tool, backend service, database, hosting, third-party service, file format or config, pattern, or custom code (written just for this project). The full map, with plain descriptions and examples, is in `software-landscape.md`.

Two that newcomers often miss:
- **Pattern**: a known recipe many people use, not tied to any library ("clone the items to fake an endless loop", "debounce").
- **Custom code**: written only for this project, so the reason for it lives in this codebase and nowhere else.

## 3. Complexity scale

| Level | Feels like | Example |
|---|---|---|
| 1 | One idea, reads like a sentence | Adding a class on click |
| 2 | A few ideas working together | A `<dialog>` that opens on click and returns focus |
| 3 | Timing, state or several moving parts | A scroll-driven animation loop with pause conditions |
| 4 | Several systems interacting; easy to get subtly wrong | A drag gesture with momentum, zoom and pull to dismiss |
| 5 | Specialist territory | A WebGL renderer, a sync engine, a compiler |

Mention what makes something hard, not just the number: "3/5, because three different things can pause it and they interact."

## 4. The layers (the big-picture map)

Use the same names every session so the learner's map builds up.

| Layer | Question it answers | Web examples |
|---|---|---|
| **Content** | What's on the page? | HTML, text, images, semantic elements |
| **Presentation** | How does it look and move? | CSS, layout, tokens, animation |
| **Behavior** | What happens when someone does something? | JavaScript, events, interaction logic |
| **State and data** | What does the app remember, and where? | variables, React state, localStorage, a database |
| **Network and backend** | What happens on other computers? | servers, APIs, auth, databases |
| **Build and deploy** | How does code become a live site? | bundlers, package managers, Git, Vercel, CI |

Also say **where code runs**: in the browser, on a server, or at build time. Mixing these up is one of the most common confusions for people without a CS background.

## 5. Concepts by area

**C** = Core, **K** = Know it when you see it. Explain these when they come up in real work, not as a syllabus.

### How computers and the web work
- C: Client and server; a browser asks, a server answers (HTTP request and response)
- C: Static vs dynamic sites; what "no build step" means
- C: URLs, paths and what a domain points to
- K: DNS, CDNs and caching
- K: HTTP status codes (200, 404, 500) and headers

### The browser
- C: The DOM is a tree the page is built from; JavaScript reads and changes it
- C: The rendering pipeline: layout, paint, composite. Why `transform` and `opacity` animate smoothly and `width` or `top` don't
- C: The frame budget: about 16ms per frame at 60fps
- C: Events and the event loop at a high level (things happen in response to input or timers, one at a time)
- C: Focus and keyboard navigation
- K: Storage options (cookies, localStorage)

### Programming ideas
- C: Variables and state; "the app's memory"
- C: Functions as reusable steps; abstraction
- C: Conditions and loops
- C: Async: some work finishes later (network, timers); promises and `await` as "wait for this"
- C: Data shapes: lists (arrays), key-value records (objects, maps), trees
- K: Scope and closures
- K: Types and why TypeScript exists (catching mistakes before running)
- K: Recursion
- K: Big-O intuition: "this does work for every item, every frame" vs "once"

### Architecture
- C: Separation of concerns; each piece has one job
- C: Components and composition; props as a component's inputs
- C: Interfaces and contracts between parts (APIs, props, function signatures)
- C: Where state lives and who's allowed to change it
- C: Multi-page site vs single-page app vs server-rendered; static hosting vs a server
- C: Frontend, backend and database as separate parts
- K: State machines for UI (open, opening, closed)
- K: Monolith vs services; monorepos
- K: Caching and what goes stale

### Data
- C: Where data lives and how it gets to the screen
- K: SQL vs NoSQL databases at a high level
- K: Auth: who you are (authentication) vs what you can do (authorization)

### Tooling and delivery
- C: Version control: commits, branches, pull requests, merging
- C: Dependencies and package managers; the cost of adding one
- C: Environments: local, preview, production
- K: Bundlers and build steps (why Vite or Next.js exist)
- K: CI checks and automated deploys
- K: Linters and formatters

### Quality
- C: Accessibility: semantic HTML, focus, labels, reduced motion
- C: Performance: network weight, frame budget, layout thrash
- C: Security basics: never trust the browser, keep secrets off the client, escape user input
- K: Testing: unit vs end-to-end, what each catches
- K: Debugging method: reproduce, read the error, form a guess, test it

### Frontend and UI specifics
- C: Design tokens to CSS custom properties to components
- C: Component API design: which props exist and why
- C: Motion: easing, duration, springs, interruptibility
- C: Responsive layout systems (flexbox, grid, container queries)
- K: GPU vs CPU work; what a shader is (code that runs per pixel)
- K: View Transitions, scroll-driven animations

## 6. Trivia: safe to skip

Say so when these appear:
- Exact syntax: semicolons, `var` vs `let` minutiae, arrow vs regular function syntax (unless `this` matters)
- Exact method and property names; look them up or let AI write them
- Config file formats and option names
- Regular expression syntax
- Vendor prefixes and old browser workarounds
- Lint rule names and formatter settings
- Most of the `package.json` file beyond `dependencies` and `scripts`
