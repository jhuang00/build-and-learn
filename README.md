# build-and-learn

A skill for Claude that teaches you to understand code while you build with an AI agent. It's for designers, PMs, founders and anyone else who ships software with AI but doesn't have a coding background.

The idea is simple. Agents now write most of the code, so the thing worth learning is no longer how to type it. It's what a CS education gives you at a high level: what kind of thing a piece of code is, how much it matters, how the parts of a system fit together, and the vocabulary developers use for all of it. This skill teaches that, in plain language, on your own project.

## What it does

When you ask Claude to explain something or to build something with you, the skill shapes the answer in a few ways.

**It starts with the answer.** "What's wrong" starts with the cause and the fix. "What does this do" starts with what it does for the person using it.

**It places code on a map before going into detail.** Every piece gets a layer (content, presentation, behavior, state and data, network and backend, build and deploy) and a place where it runs (browser, server, build time). For a whole project, it draws a small architecture diagram first.

**It separates what matters from what's trivia, using map cards:**

> **`<dialog>`** · Category: browser built-in · **Core** · Complexity 2/5
> **What it is:** the browser's own pop-up box, ready to use with no installing.
> **Used for:** any modal, lightbox or confirm box.
> **The idea underneath:** "modal" means the rest of the page is switched off while it's open; the browser handles keyboard focus and the Escape key for you.

The **Category** line is the part developers take for granted and newcomers miss most. When a developer hears "Vite", "Supabase" or "Radix", they know straight away whether it's a build tool, a backend service or a component library. That tells them what it does and what it would cost to replace. The skill includes a plain-language map of those categories.

**It keeps jargon but explains it on the side:**

> **Words on the side**
> *focus*: the one element the keyboard is currently aimed at.
> *modal*: a box that switches off the rest of the page until it's closed.

**It explains instead of quizzing.** Your own questions drive how deep it goes. Each explanation ends with a few "You could ask next" suggestions, which you can ignore.

**It can keep a learning doc.** If your project has one (for example `learning/*.md`), the skill adds a short log entry and records the concepts covered at the end of each session. There's a template if you want to start one.

## Modes

| Mode | Who writes the code | When |
|---|---|---|
| Explain | Nobody, the code exists | "Explain this so I actually understand it" (the default) |
| Pair | Claude | "Build this with me and explain as you go" |
| You drive | You | "I want to write this myself", as practice. It explains what's wrong when you're stuck, or gives hints if you ask for them. |

## Install

**Claude Code**: copy the `build-and-learn` folder into `~/.claude/skills/` (for all your projects) or into `.claude/skills/` inside one project.

```bash
git clone https://github.com/<owner>/build-and-learn ~/.claude/skills/build-and-learn
```

**Claude apps**: zip the folder (or use a packaged `.skill` file from the releases) and upload it in your skills settings.

## Use

You don't need to call it by name. It's meant to kick in when you say things like:

- "Let's do a learning session on the checkout page"
- "Explain this code so I actually get it"
- "How is my site put together? What actually matters?"
- "What's Vite? Is that a library or something else?"
- "I wrote this myself as practice and it doesn't work"

In Claude Code you can also run `/build-and-learn`. It stays out of the way for ordinary requests where you just want something built or fixed.

## What's inside

```
build-and-learn/
├── SKILL.md                         the instructions Claude follows
├── references/
│   ├── software-landscape.md        the categories every developer knows, in plain language
│   ├── concept-map.md               tiers, complexity scale, layers, ~60 core concepts by area
│   ├── explaining-code.md           the layered explanation method, with bridges for designers, analysts and PMs
│   └── hint-ladder.md               for "give me a hint, don't tell me" moments
├── assets/
│   ├── learning-doc-template.md
│   └── log-entry.md
└── evals/                           four test cases in the `claude plugin eval` format
```

## How it differs from Claude Code's built-in styles

Claude Code's Explanatory and Learning output styles add teaching notes or ask you to write parts of the code. This skill aims somewhere else: it assumes you won't write much code, and it focuses on placing things in the bigger picture, labelling them by category and importance, and building the vocabulary to talk with engineers.

## Limits

- It leans toward web projects. The layer map and many examples assume HTML, CSS and JavaScript, though it adapts the layers for other kinds of project.
- It was shaped with one learner's feedback over four rounds of testing on four cases. More feedback from different backgrounds would make it better, and issues are welcome.
- It's written in English.

## Tests

The `evals/` folder has four cases: explaining an AI-written carousel, a bug in a learner's practice code, starting a learning session from a learning doc, and mapping a small site's architecture. Each holds a prompt, input files and a description of a good answer. With Claude Code you can run them from this folder:

```bash
claude plugin eval . --allow-tools Write,Edit,Bash --scaffold
```

## License

MIT. See [LICENSE](LICENSE).
