

# Fix whitespace in Inclusive Performance text panel

The description paragraph in the text panel below the chart has `max-w-[80ch]` which limits it to roughly 640px, leaving significant empty space on the right side of the dark section.

## Fix

In `src/components/InclusivePerformanceSection.tsx`, remove the `max-w-[80ch]` constraint from the description paragraph (line 379) so the text spans the full container width. The container itself (`max-w-wide`) already provides appropriate bounds.

**File**: `src/components/InclusivePerformanceSection.tsx`
- Line 379: Remove `max-w-[80ch]` from the `<p>` className

