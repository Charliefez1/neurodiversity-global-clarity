

## Replace Hero Collage Images with Group Photos

Currently the 2×2 hero collage uses two individual portraits (`portrait-1.jpg`, `portrait-3.jpg`) alongside two group shots. The plan is to swap all four to group/team images from the existing `src/assets/industries/` and `src/assets/` folders.

### Image Selection

Available group images (excluding `diverse-professions-hero.png` which is reserved for other pages):

| Slot | Current | Replacement | Source |
|------|---------|-------------|--------|
| 1 | `hero/team-workshop.jpg` | `industries/diverse-workforce.png` | Diverse workforce group |
| 2 | `testimonials/portrait-1.jpg` | `industries/mixed-professions.png` | Mixed professions group |
| 3 | `hero/consultant-speaking.jpg` | `workshop-hero-team.png` | Workshop team photo |
| 4 | `testimonials/portrait-3.jpg` | `industries/community-workers.png` | Community workers group |

### Changes

**`src/components/HeroSection.tsx`** — single file edit:
- Replace the 4 image imports (lines 14-19) with the new group images
- Update the `collageImages` array alt text to match (lines 21-26)
- Remove unused `portrait2`, `portrait4` imports

