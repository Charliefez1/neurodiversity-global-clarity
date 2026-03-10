

# Reduce padding and spacing across the homepage

The issue is consistent: sections use `py-20 lg:py-28` (80px/112px vertical padding), cards use `p-7 lg:p-8` or `p-7 lg:p-10`, and margins between header and content are `mb-12`/`mb-14`/`mb-16`. This creates an overly spacious, bloated feel.

## What changes

**Section-level padding** — reduce vertical rhythm across all homepage sections:

| Component | Current | Proposed |
|-----------|---------|----------|
| ServicesSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| ImpactSection | `py-20 lg:py-28` | `py-12 lg:py-16` |
| ProblemSection | `py-20 lg:py-28 pb-10 lg:pb-12` | `py-12 lg:py-16 pb-8 lg:pb-10` |
| EvidenceSection | (similar) | `py-12 lg:py-16` |
| InclusivePerformanceSection | (similar) | `py-12 lg:py-16` |
| TrainingCatalogueBanner | `py-14 lg:py-20` | `py-10 lg:py-14` |
| ResourcesSection | `py-16 lg:py-20` | `py-12 lg:py-16` |
| FinalCTA | (similar) | `py-12 lg:py-16` |
| HeroSection | `pt-16 lg:pt-24 pb-12 lg:pb-16` | `pt-12 lg:pt-16 pb-8 lg:pb-12` |
| PageSection template | `py-16 lg:py-24` | `py-12 lg:py-16` |

**Card-level padding** — tighten inner spacing:

| Component | Current | Proposed |
|-----------|---------|----------|
| TrainingCatalogueBanner card | `p-7 lg:p-10` | `p-5 lg:p-7` |
| Service cards | `p-7 lg:p-8` | `p-5 lg:p-6` |
| Impact top cards | `p-5 lg:p-6` | `p-4 lg:p-5` |
| Ask Rich CTA section | `py-14 lg:py-18` | `py-10 lg:py-12` |

**Header margins** — reduce gap between section headers and content:

| Location | Current | Proposed |
|----------|---------|----------|
| ServicesSection header | `mb-14` | `mb-8` |
| ImpactSection header | `mb-12` | `mb-8` |
| ProblemSection header | `mb-16` | `mb-10` |
| PageSection template | `mb-12` | `mb-8` |

## Files to edit

- `src/components/ServicesSection.tsx`
- `src/components/ImpactSection.tsx`
- `src/components/ProblemSection.tsx`
- `src/components/EvidenceSection.tsx`
- `src/components/InclusivePerformanceSection.tsx`
- `src/components/TrainingCatalogueBanner.tsx`
- `src/components/ResourcesSection.tsx`
- `src/components/FinalCTA.tsx`
- `src/components/HeroSection.tsx`
- `src/components/FeaturedClient.tsx`
- `src/components/templates/PageSection.tsx`
- `src/pages/Index.tsx` (Ask Rich CTA padding)

All changes are class string updates only — no structural or logic changes.

