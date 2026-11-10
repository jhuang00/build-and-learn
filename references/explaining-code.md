# Explaining code in layers

Explain from the outside in, in plain language, getting to the point in each paragraph's first sentence. People need the big picture and the purpose before any detail feels like it belongs somewhere. Words a non-developer wouldn't know go in a short "Words on the side" note after the section where they first appear.

## The layers

0. **Where it sits.** The layer (content, presentation, behavior, state and data, network and backend, build and deploy), where it runs (browser, server, build time), and what it connects to. For a whole project, a small diagram.
1. **Purpose, in one sentence.** What does this do for the person using the page? No jargon.
2. **The flow.** What starts it, what it does each time, what it changes. A short numbered list or a tiny diagram. Name inputs and outputs.
3. **Map cards for what matters.** Pick the two or three parts worth knowing and give each a card (category, tier, what it is, used for, complexity, the idea underneath; see `concept-map.md` and `software-landscape.md`). Call out anything that's trivia so they can stop worrying about it.
4. **Why it's built this way.** The choices and their tradeoffs (performance, accessibility, simplicity), and the alternatives in a sentence.
5. **You could ask next.** Two or three follow-up questions they might be curious about, as offers.

Layers 0 to 4 make one complete high-level explanation. Line-by-line detail waits until they ask for it. Don't end with a quiz question.

## Bridges to the learner's field

Pick the table that matches the learner's background, or build a similar one for theirs.

**Designers**

| Code idea | Design idea it resembles |
|---|---|
| CSS transition / easing function | Easing curves in Smart Animate or After Effects |
| `requestAnimationFrame` loop | A timeline that redraws once per screen refresh |
| Flexbox / grid | Auto layout / layout grids |
| Component with props | Component with variants and properties |
| Design tokens as CSS custom properties | Figma variables |
| Event listener | A prototype interaction ("on click, navigate to") |
| State | Which variant is currently showing |
| Architecture diagram | A user flow, but for the system's parts |

**Spreadsheet users (analysts, finance, ops)**

| Code idea | Spreadsheet idea it resembles |
|---|---|
| Variable | A named cell |
| Function | A formula you can reuse with different inputs |
| Array / list | A column of values |
| Object / record | One row with named columns |
| Database table | A sheet, with stricter rules |
| Loop | Dragging a formula down a column |

**Product managers**

| Code idea | Product idea it resembles |
|---|---|
| API | A contract between two teams about what one will provide |
| Architecture diagram | A system map of who depends on whom |
| Feature flag | A rollout switch for a subset of users |
| Tech debt | Deferred work that slows every future sprint |

Use a bridge once, briefly, then move on. Analogies that are stretched too far confuse more than they help.

## Worked example (scroll parallax with requestAnimationFrame)

> **Where it sits:** behavior layer (JavaScript), runs in the browser, changes the presentation (each orb's `transform`).
>
> **Purpose:** Each orb with a `data-speed` attribute moves a little as you scroll, faster or slower than the page, which gives a sense of depth.
>
> **Flow:**
> 1. On load, it collects every element with `data-speed` and reads its speed.
> 2. When you scroll, it asks the browser to run `rafParallax` before the next repaint, but only if one isn't already queued.
> 3. `rafParallax` measures each orb, works out how far its middle is from the middle of the screen, and shifts it by that distance times its speed.
>
> **Words on the side**
> *attribute*: an extra setting written on an HTML tag, like `data-speed="0.08"`.
> *repaint*: the browser redrawing what's on screen.
>
> **The two parts worth knowing:**
>
> **`requestAnimationFrame`** · Category: browser built-in · **Core** · Complexity 2/5
> **What it is:** a browser feature that says "run this right before you next redraw the screen".
> **Used for:** anything that animates or reacts to scrolling frame by frame. Very common.
> **The idea underneath:** the screen redraws about 60 times a second, and work should line up with those redraws instead of running whenever something happens.
>
> **The `ticking` flag** · Category: pattern (called throttling) · **Know it when you see it** · Complexity 2/5
> **What it is:** a true/false switch that remembers "I've already asked for an update this frame".
> **Used for:** stopping events that fire very often (scrolling, resizing, moving the mouse) from doing the same work many times per frame.
> **The idea underneath:** events can fire far more often than the screen can show; batching the work keeps animation smooth.
>
> The `parseFloat` and `forEach` details are trivia; the agent handles those.
>
> **Why it's built this way:** it moves the orbs with `transform`, which the browser can animate without recalculating the page layout, so scrolling stays smooth.
>
> **You could ask next:**
> - "Why is `transform` smoother than changing `top`?"
> - "What's `data-speed`, and where is it set?"
> - "Would a library like GSAP do this differently?"
