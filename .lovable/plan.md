

## Plan: Distribute NEURO Framework Colours as Subtle Accents Across the Site

### The 5 NEURO Colours
- **N (Navigate):** `hsl(220,70%,55%)` — Blue
- **E (Engage):** `hsl(0,70%,55%)` — Red
- **U (Upskill):** `hsl(155,60%,42%)` — Green
- **R (Redesign):** `hsl(270,55%,55%)` — Purple
- **O (Optimise):** `hsl(40,90%,50%)` — Amber/Gold

### Where to Apply Them

**1. Services Section — Coloured left-border accents on cards**
Each of the 4 service cards gets a thin `border-l-4` in a different NEURO colour, creating a rainbow effect down the grid without overwhelming the light background.

**2. The Challenge Section — Coloured icon backgrounds**
The 3 problem cards currently use `bg-accent/10` for icon containers. Assign each card a unique NEURO colour at low opacity (e.g. `bg-[hsl(220,70%,55%)]/20`) for the icon background and icon colour.

**3. Stats Bar — Coloured top border on each card**
Each of the 4 stats cards gets a `border-t-3` in a different NEURO colour, giving the stats strip a subtle colour rhythm.

**4. Values/Accessibility Section — Coloured icon dots**
The 3 value cards (Accessible by design, Transparent, Led by lived experience) each get a different coloured icon circle.

**5. Industry Solutions — Coloured left borders on industry cards**
Each of the 5 industry cards maps 1:1 to a NEURO colour via a left border accent.

**6. Impact Section — Coloured ring/progress accents**
The existing `Ring` component and metric cards already use teal. Assign different NEURO colours to different metrics (e.g. productivity = blue, turnover = red, speed = green).

### Implementation Details
- Define the 5 colours as a shared constant array imported across files
- Apply via inline Tailwind arbitrary values (already used in the NEURO section)
- Keep usage very light: thin borders (2-4px), icon container backgrounds at 15-20% opacity, no large colour fills
- Dark background sections (Challenge, Impact, Industry) use the colours at slightly higher opacity; light sections use them more muted

### Files to Edit
- `src/components/ServicesSection.tsx` — left-border accents
- `src/components/ProblemSection.tsx` — coloured icon containers
- `src/components/StatsBar.tsx` — top-border accents
- `src/components/AccessibilitySection.tsx` — coloured icon circles
- `src/components/EvidenceSection.tsx` — left-border on industry cards
- `src/components/ImpactSection.tsx` — coloured metric accents

