## State Management

### state.md — project memory file

Before every `git push`, update `state.md` in the project root. This is mandatory — no push without a state update.

**state.md must follow this exact structure:**

```
## Current work
[What is actively being built or fixed right now — 1-3 bullets]

## Recently completed
[What was finished in the last 1-2 sessions — 2-4 bullets]

## Known issues
[Anything broken, unstable, or incomplete — bullets only if they exist]

## Next entry point
[Exactly where the next session should pick up — be specific enough that no file-reading is needed to orient]

## Open decisions
[Unresolved architecture or design questions — bullets only if they exist]
```

**Rules:**
- Maximum 300 words. Count before writing.
- If the update would exceed 300 words, rewrite the entire file from scratch — do not append. Keep only what is still true and relevant.
- Do not update state.md mid-task. Only update at push time.
- Write in plain, direct language. No filler, no summaries of what Claude did — only current project state.
