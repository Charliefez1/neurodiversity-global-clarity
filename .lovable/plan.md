

# Design Consistency Plan: Apply ForParents Visual Language Across the Site

## What the ForParents Page Does Well

The `/for-parents` page uses a distinct set of design patterns that the rest of the site should adopt:

- **Image + text split sections** with `motion` fade-in animations and asymmetric grid layouts
- **Floating stat/callout cards** anchored to images (absolute positioned overlays)
- **Coloured card grids** with top border accents, icon backgrounds, and per-card colour coding
- **Dark navy full-width sections** with translucent cards (`bg-primary-foreground/[0.06]`)
- **Accent-highlighted headings** using `<span className="text-accent">` for key phrases
- **PullQuote blocks** between sections for visual rhythm
- **Rounded-2xl cards** with shadow-md/xl and hover states
- **Warm Stone background alternation** (not plain `PageSection variant="sand"`)
- **Custom inline sections** rather than relying on the generic `PageSection` template

## Pages That Need Redesigning

### Tier 1: Major overhaul needed (currently use plain PageSection/PageHero templates)

1. **`/what-we-do`** (WhatWeDo.tsx) — Currently uses flat `PageSection` blocks with simple text lists and basic bordered cards. Needs the full treatment: image+text splits, animated cards, dark navy sections, floating callouts, PullQuotes.

2. **`/about`** (About.tsx) — Currently plain text paragraphs inside `PageSection`. Needs image splits, motion animations, a dramatic manifesto section, and richer card layouts for sectors.

3. **`/about/team`** (AboutTeam.tsx) — Currently just text paragraphs per person. Needs side-by-side image+bio layouts with floating callout cards, accent-coloured quote blocks, and motion animations.

### Tier 2: Moderate refresh (already partly match but inconsistent)

4. **`/neurodiversity-training`** (NeurodiversityTraining.tsx) — Uses PageSection template. Needs image splits, animated cards, dark sections.

5. **`/neurodiversity-consultancy`** (NeurodiversityConsultancy.tsx) — Same pattern as training. Needs the same upgrade.

6. **`/testimonials`** (Testimonials.tsx) — Has its own layout but could benefit from motion animations and the rounded-2xl card style.

### Tier 3: Already close (ForEmployers, ForPublicSector use PathwayLanding)

7. **`/for-employers`** — Already uses image splits, motion, PullQuotes, dark sections. Minor consistency tweaks only.

8. **`/for-public-sector`** — Same as employers. Already close.

### Not in scope
- Homepage (`Index.tsx`) — has its own bespoke design with interactive components
- Portal pages — separate design system
- Blog/BlogPost — content-driven, different pattern is appropriate
- Legal pages — plain text is appropriate

## Design System Patterns to Standardise

Every redesigned page will use these building blocks consistently:

**Section types:**
- `image-text-split`: 2-col grid, image on one side (rounded-2xl, shadow-xl), text + cards on the other, motion fade-in from left/right
- `dark-navy-section`: bg-primary with translucent feature cards
- `warm-stone-section`: bg-warm-stone with bordered cards
- `card-grid`: 2-3 col grid of rounded-2xl cards with icon, coloured top border, hover shadow

**Recurring elements:**
- Floating stat cards on images (absolute positioned)
- Accent-span headings: `"Key phrase in <span class='text-accent'>teal</span>"`
- PullQuote between major sections
- fadeUp motion variants (staggered by index)
- Teal CTA buttons with shadow-accent/25

## Implementation Order

Given size, this should be done in stages:

**Phase 1: Core pages** (biggest impact)
1. Redesign `/what-we-do` with image splits, dark section for training programmes, animated card grid for advisory areas, floating stats, PullQuotes
2. Redesign `/about` with image+text storytelling sections, dramatic manifesto, motion-animated sector cards
3. Redesign `/about/team` with side-by-side bio layouts, floating credential cards, accent quote blocks

**Phase 2: Service pages**
4. Redesign `/neurodiversity-training` with image splits, animated workshop cards, dark section
5. Redesign `/neurodiversity-consultancy` with the same treatment

**Phase 3: Supporting pages**
6. Refresh `/testimonials` with motion animations and consistent card styling
7. Minor consistency pass on `/for-employers` and `/for-public-sector`

Each page redesign preserves all existing content and SEO metadata. The changes are purely visual/structural, applying the ForParents design language.

