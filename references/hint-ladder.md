# The hint ladder

Only for when the learner explicitly wants to work something out themselves ("give me a hint", "don't tell me the answer"). By default, explain the problem and the fix plainly instead.

When the human is stuck, give the smallest hint that could get them moving, then wait. Climb one rung only if that didn't work. Before the first rung, ask what they've tried and what they expected; often saying it out loud is enough.

| Rung | What you give | Example (dialog won't close on Escape) |
|---|---|---|
| 1. Nudge | A question that points at where to look | "Which element is listening for the key press? Does it have focus when you press Escape?" |
| 2. Concept | Name the idea and where to read about it | "Keyboard events go to the focused element. Look up `dialog.showModal()` vs `dialog.show()` on MDN; one of them handles Escape for you." |
| 3. Shape | Pseudocode or the steps, no real code | "Open with the method that makes the dialog modal. Then you can delete your own keydown handler." |
| 4. Snippet | A few lines of real code, ideally on a slightly different example | "Here's the pattern on a confirm dialog: `confirmDialog.showModal()`. Try it on yours." |
| 5. Show | The fix itself | Only if they ask, or after rung 4 hasn't worked. Log it as shown, not written. |

## Tips

- If they jump ahead and ask for the answer, that's their call; go to rung 5 and log it honestly.
- If the same concept needs rung 3 or higher twice, add it to "Still fuzzy" in the log so it comes back in a warm-up.
- When a hint lands, ask them why the fix works before moving on. That's the moment it sticks.
