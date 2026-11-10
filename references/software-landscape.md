# The software landscape: categories every developer knows

A working software or full-stack developer carries this map around without thinking about it. When they see a name like "Vite", "Supabase" or "Radix", they instantly know what *kind* of thing it is, and that tells them what it does, where it runs and what it would mean to swap it out. This file is that map, in plain language. Use it to fill in the **Category** line of map cards, and teach it whenever a new name comes up.

Every entry has a plain description, real examples and the questions a developer automatically asks about it.

## Contents
1. The big split: frontend, backend, full stack
2. Languages
3. Where code runs (runtimes and platforms)
4. Built-ins (web platform APIs)
5. Libraries
6. Frameworks
7. Component libraries and UI kits
8. Styling tools
9. Packages and package managers
10. Build tools
11. Developer tools
12. Testing tools
13. Backend and APIs
14. Databases
15. Auth (sign-in)
16. Hosting, cloud and deployment
17. Third-party services
18. File formats and config
19. Design and no-code tools
20. Words developers use about all of these

---

## 1. The big split: frontend, backend, full stack

- **Frontend** is everything that runs on the visitor's device: what they see and touch. HTML, CSS, JavaScript, React.
- **Backend** is everything that runs on a server somewhere else: saving data, checking passwords, sending emails.
- **Full stack** means working on both.
- **The stack** is the list of technologies a project uses, from top to bottom. "Our stack is Next.js, Supabase and Vercel."

## 2. Languages

A language is how you write instructions for a computer. Each one has a job it's best at.

| Language | Plain description | Notes |
|---|---|---|
| HTML | Describes what's on a page: headings, images, buttons | A markup language; it labels content rather than giving instructions |
| CSS | Describes how it looks: colors, layout, animation | A styling language |
| JavaScript (JS) | The programming language of the browser; makes pages respond | Also runs on servers through Node.js |
| TypeScript (TS) | JavaScript plus labels for what kind of data things are, so mistakes get caught early | Turned back into JavaScript before it runs |
| SQL | Asks a database for data ("give me all users who signed up this week") | |
| Python | General-purpose; common for data, AI and backends | |
| Swift / Kotlin | Native iPhone / Android apps | |
| GLSL | Small programs that run on the graphics card, for WebGL effects | Called shaders |

## 3. Where code runs (runtimes and platforms)

The same language can run in different places, and the place decides what the code can do.

- **The browser** (Chrome, Safari, Firefox) runs HTML, CSS and JavaScript on the visitor's device. It can show things and react to clicks. It can't safely hold secrets, because anyone can read what's sent to their browser.
- **Node.js** runs JavaScript outside the browser, on a server or your own computer. It's used for backends and for build tools.
- **Servers** are computers that wait for requests and answer them.
- **Serverless / edge functions** are small pieces of backend code that a host like Vercel runs only when someone asks, so you don't manage a server yourself.
- **Build time** is not a place but a moment: code that runs once, on your computer or the host, to prepare the site before anyone visits.

Developer's reflex: "does this run in the browser, on a server, or at build time?"

## 4. Built-ins (web platform APIs)

Features that come with every modern browser. Nothing to install, documented on MDN, maintained by the browser makers through standards groups (WHATWG and W3C). Examples: `<dialog>`, `<video>`, `fetch` (getting data from a server), `requestAnimationFrame`, `localStorage`, View Transitions, scroll-snap.

Developer's reflex: prefer a built-in when one does the job; it's free, fast and won't go out of date.

## 5. Libraries

Someone else's code that you install and **call** when you need it, like a toolbox. You stay in charge of how your app is structured.

Examples: Motion (animation), GSAP (animation), Three.js (3D), Lodash (utilities), date-fns (dates), ramka (lightbox), Zod (checking data).

Developer's reflex: how big is it, is it maintained, how many people use it, and could a few lines of our own code do the same?

## 6. Frameworks

A larger structure that **calls your code**. You fill in the pieces it asks for, and it decides how they fit together: pages, routing (which URL shows what), data loading. The usual saying: you call a library, a framework calls you.

- **UI frameworks**: React, Vue, Svelte, Angular, SolidJS. They organize an interface into components. (React calls itself a library, but most people treat it as a framework.)
- **Meta-frameworks** sit on top of those and add routing, server rendering and deployment: Next.js (React), Nuxt (Vue), SvelteKit (Svelte), Remix, Astro.
- **Native app frameworks**: SwiftUI, React Native, Flutter.

Developer's reflex: choosing a framework is an architecture decision, and expensive to change later.

## 7. Component libraries and UI kits

Ready-made interface pieces (buttons, dialogs, menus) built for one framework, usually React.

- **Styled kits** come with a look: Material UI (MUI), Chakra, Ant Design.
- **Headless primitives** handle behavior and accessibility but no styling, so you design them: Radix UI, Base UI, React Aria, ramka.
- **Copy-paste kits** give you the source to own and edit: shadcn/ui.

Developer's reflex: headless when the design is custom, styled when speed matters more than look.

## 8. Styling tools

- **Plain CSS** files, often with **custom properties** (CSS variables) for design tokens.
- **Tailwind CSS**: small utility class names written straight in the HTML (`p-4 text-lg`).
- **Sass / SCSS**: CSS with extra features, turned into plain CSS at build time.
- **CSS Modules, CSS-in-JS** (styled-components, Emotion): ways to keep a component's styles from leaking to others.

## 9. Packages and package managers

- A **package** is a library or tool published for others to install.
- **npm** is the main public registry of JavaScript packages, and also the tool that installs them. **pnpm** and **Yarn** are alternative installers.
- `package.json` lists the packages a project depends on and its commands (`npm run dev`).
- `node_modules/` is the folder where installed packages live. Huge, never edited, never committed.
- A **lockfile** (`package-lock.json`, `pnpm-lock.yaml`) records exact versions so every machine installs the same thing.
- **Dependencies** ship with the app. **Dev dependencies** are only used while building or testing.

Developer's reflex: every dependency is code you didn't write but are responsible for.

## 10. Build tools

Programs that turn the code you write into the files a browser actually loads.

- **Bundlers** combine many files into a few and shrink them: Vite, webpack, Turbopack, esbuild, Rollup.
- **Compilers / transpilers** translate code: TypeScript to JavaScript, JSX to JavaScript, newer JavaScript to older.
- **Dev servers** run the site on your computer and refresh it as you edit (`npm run dev`, `localhost:3000`).
- **Monorepo tools** manage several projects in one repository: Turborepo, Nx.

A site with **no build step** (plain HTML and CSS) skips all of this: the files you write are the files that get served.

## 11. Developer tools

- **Editors**: VS Code, Cursor, Zed.
- **The terminal / command line (CLI)**: typing commands instead of clicking.
- **Git**: tracks every change to the code (commits), lets work happen in parallel (branches) and be merged back. **GitHub** hosts Git repositories and adds pull requests (proposed changes for review) and issues.
- **Browser DevTools**: inspect the page, see errors (Console), check network requests and performance.
- **Linters** spot likely mistakes (ESLint). **Formatters** fix spacing and style automatically (Prettier).
- **AI coding agents**: Claude Code, Cursor, Copilot.

## 12. Testing tools

- **Unit tests** check one small piece at a time: Vitest, Jest.
- **End-to-end (E2E) tests** drive a real browser through a whole flow: Playwright, Cypress.
- **Storybook** shows each component on its own, in every state, like a living component sheet.

## 13. Backend and APIs

- An **API** (application programming interface) is a defined way for one program to ask another for something. "The weather API returns today's forecast."
- **REST** and **GraphQL** are two common styles of web API. **JSON** is the usual data format they send.
- **Backend frameworks** for writing servers: Express, Fastify, Hono (JavaScript); Django, FastAPI (Python); Rails (Ruby).
- **Backend-as-a-service** gives you a database, sign-in and storage without writing a server: Supabase, Firebase, Convex.

## 14. Databases

Where an app keeps data permanently.

- **Relational (SQL)** databases store data in tables with rows and columns: PostgreSQL (Postgres), MySQL, SQLite.
- **Document / NoSQL** databases store flexible records: MongoDB, Firestore.
- **Key-value stores / caches** keep fast, simple lookups: Redis.
- **ORMs** let you talk to a database in your programming language instead of SQL: Prisma, Drizzle.

## 15. Auth (sign-in)

- **Authentication** is proving who you are. **Authorization** is what you're allowed to do.
- **Auth providers** handle sign-in for you: Clerk, Auth0, Supabase Auth, Firebase Auth.
- **OAuth** is the standard behind "Sign in with Google".

## 16. Hosting, cloud and deployment

- **Frontend hosting** serves websites and runs small serverless functions: Vercel, Netlify, Cloudflare Pages, GitHub Pages.
- **Cloud providers** rent out servers, storage and everything else: AWS, Google Cloud, Azure.
- A **CDN** keeps copies of files on servers around the world so they load fast everywhere.
- A **domain** is the name; **DNS** is the system that points the name at the server.
- **Deploying** means publishing a new version. **Environments**: local (your computer), preview (a test link per change), production (the real site).
- **CI/CD** (continuous integration / delivery) automatically checks and deploys code when it's pushed: GitHub Actions, Vercel's Git integration.

## 17. Third-party services

Other companies' products that an app plugs into, usually through a script tag or an API.

- Analytics: Google Analytics, Vercel Analytics, PostHog
- Payments: Stripe
- Error monitoring: Sentry
- Content management (CMS): Sanity, Contentful, WordPress
- Email: Resend, SendGrid
- AI models: Anthropic (Claude), OpenAI

Developer's reflex: what data are we sending them, and what happens to the app if they go down?

## 18. File formats and config

- **JSON**: structured data with braces and quotes. Used for config and APIs.
- **YAML**: config written with indentation instead of braces.
- **Markdown (.md)**: formatted text for docs and READMEs.
- **.env files**: secret keys and settings, kept out of Git.
- **Config files** tell tools how to behave: `vercel.json`, `vite.config.js`, `tsconfig.json`, `.eslintrc`. Usually written once and rarely read; mostly trivia.

## 19. Design and no-code tools

- **Design tools**: Figma, Sketch. **Design tokens**: named design values (colors, spacing) shared between design and code.
- **No-code / low-code site builders**: Framer, Webflow, Squarespace. They generate the code for you, with less control.
- **Prototyping in code**: CodePen, CodeSandbox, StackBlitz.

## 20. Words developers use about all of these

| Word | Plain meaning |
|---|---|
| Dependency | A package your project needs in order to work |
| Vendor / third party | Code or services from outside your team |
| Open source | Code anyone can read and use, under a license (MIT is the most permissive common one) |
| Version / semver | Release numbers like 2.4.1: major (can break things) . minor (new features) . patch (fixes). Below 1.0 means still unstable |
| Breaking change | An update that makes existing code stop working |
| Boilerplate | Standard setup code that's the same in every project |
| Abstraction | Hiding details behind a simpler interface |
| Legacy | Older code that still has to keep working |
| Tech debt | Shortcuts that will cost time later |
| Spec | The official definition of how something should behave |
