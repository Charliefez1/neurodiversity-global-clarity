

# Complete Homepage Polish Pass

After reviewing every component on the homepage, here are the issues found and the fixes proposed:

## Issues Identified

### 1. Smartest Energy logo in Recommended By is absurdly tall
- Currently `h-40` (160px) vs `h-10` (40px) for other logos. This breaks the visual line entirely.
- **Fix**: Set it to `h-16` (64px) — noticeably larger than others but not dominating the row.

### 2. Recommended By logos not vertically centred as a row
- `flex-wrap` with `items-center` works, but the massive Smartest logo makes the row look broken.
- **Fix**: Once logo sizing is fixed, the row will naturally centre. Also reduce gap from `gap-10 lg:gap-14` to `gap-8 lg:gap-12`.

### 3. StatsBar cards still have excessive padding
- Cards use `p-7 lg:p-8` and `pb-20 lg:pb-28` — not touched in the last pass.
- **Fix**: Cards to `p-5 lg:p-6`, section bottom padding to `pb-10 lg:pb-14`.

### 4. ProblemSection cards still have excessive padding
- Cards use `p-7 lg:p-8`.
- **Fix**: `p-5 lg:p-6`.

### 5. EvidenceSection industry cards still have excessive padding
- Cards use `p-7 lg:p-8`, gap is `gap-8`.
- **Fix**: Cards to `p-5 lg:p-6`, gap to `gap-5`, divider margins reduced.

### 6. Inclusive Performance section heading is oversized
- Title uses `text-2xl md:text-3xl` — larger than every other section heading which uses `text-lg md:text-xl`.
- **Fix**: Standardise to `text-lg md:text-xl` to match all other sections.

### 7. Inclusive Performance text panel + callout takes too much vertical space
- `min-h-[140px]` on text panel, plus `mt-8` gaps throughout.
- **Fix**: Reduce `min-h` to `[100px]`, reduce `mt-8` to `mt-6` for text panel and nav.

### 8. Pathway cards in hero still use `p-7`
- **Fix**: `p-5`.

### 9. Hero "Tell us why you're here" section gap and concierge team image
- The concierge team image takes up space; the section padding is fine but the left column width `lg:w-[340px]` constrains text.
- **Fix**: Reduce concierge image max-width from `280px` to `200px`.

### 10. Hero collage images are small (`h-40`)
- At 160px height on a 500px wide column, these are tiny thumbnails.
- **Fix**: Increase to `h-48` for better visual presence.

### 11. Coaching platform teaser in ServicesSection has large padding
- Uses `p-6 lg:p-8` and `mt-14`.
- **Fix**: `p-5 lg:p-6` and `mt-10`.

### 12. Footer padding is generous at `py-16`
- **Fix**: `py-12`.

### 13. "Ask Rich Anything" heading is oversized
- Uses `text-xl md:text-2xl` while other section headings use `text-lg md:text-xl`.
- **Fix**: Standardise to `text-lg md:text-xl`.

## Files to edit

| File | Changes |
|------|---------|
| `RecommendedBy.tsx` | Logo height `h-16`, row gap `gap-8 lg:gap-12` |
| `StatsBar.tsx` | Card padding `p-5 lg:p-6`, section `pb-10 lg:pb-14` |
| `ProblemSection.tsx` | Card padding `p-5 lg:p-6` |
| `EvidenceSection.tsx` | Card padding `p-5 lg:p-6`, gap `gap-5`, divider margins reduced |
| `InclusivePerformanceSection.tsx` | Heading size standardised, text panel spacing reduced |
| `HeroSection.tsx` | Pathway cards `p-5`, collage `h-48`, concierge image smaller |
| `ServicesSection.tsx` | Coaching teaser `p-5 lg:p-6`, `mt-10` |
| `Footer.tsx` | `py-12` |
| `Index.tsx` | Ask Rich heading standardised |

All changes are Tailwind class string updates only.

