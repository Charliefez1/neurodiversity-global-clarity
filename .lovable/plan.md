

## Plan: Remove Footer contact form, keep FinalCTA only

### What changes

**1. Strip the contact form from the Footer (`src/components/Footer.tsx`)**
- Remove the entire "Get in touch" contact form section (lines 36-54) — the `ContactForm` import and the grid with badge/heading/form card.
- Keep the footer as-is below that: logo, link columns, manifesto, copyright.
- Remove the `ContactForm` import since it's no longer used.

**2. Rename the FinalCTA badge from "Contact us" to "Get in touch" (`src/components/FinalCTA.tsx`)**
- Line 11: change `"Contact us"` to `"Get in touch"` so the single remaining contact section uses the preferred label consistently.

### What stays the same
- `FinalCTA` remains on the homepage (and can be used on other pages via `PageCTA`).
- Footer still renders on every page with navigation links, branding, and legal links — just without a duplicate form.

