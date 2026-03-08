

## Background Image for "The Challenge" Section

### Changes

1. **Save uploaded image** to `src/assets/challenge-bg.png`

2. **Update `src/components/ProblemSection.tsx`**:
   - Import `challenge-bg.png`
   - Replace `bg-warm-stone` with `relative bg-cover bg-top bg-no-repeat` using inline `style={{ backgroundImage }}`
   - Add dark overlay div: `absolute inset-0 bg-black/60`
   - Wrap content in `relative z-10`
   - Change text colors to white/light for contrast (headings → white, muted text → white/70)
   - Update card styling with semi-transparent dark backgrounds (`bg-card/90 backdrop-blur-sm`)
   - Keep the existing challenge-stats image in the two-column layout

