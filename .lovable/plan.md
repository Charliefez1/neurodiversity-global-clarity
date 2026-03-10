

## Fix Hero Image Collage Layout

### Problem
The current 2x2 grid with translate offsets creates an unbalanced, awkward layout — the images are all the same small size (h-40) and the staggered offsets don't create enough visual interest. The screenshot shows the collage looks cramped and poorly distributed.

### Proposed Approach: Asymmetric Mosaic Layout

Replace the uniform 2x2 grid with a **3-image asymmetric mosaic** — one large hero image on the left spanning the full height, and two smaller images stacked on the right. This creates a more editorial, magazine-style feel that matches the site's design principles.

```text
┌──────────────┬──────────┐
│              │   img 2  │
│    img 1     ├──────────┤
│  (large)     │   img 3  │
│              │          │
└──────────────┴──────────┘
```

### Implementation

**File: `src/components/HeroSection.tsx`**

1. Reduce `collageImages` from 4 to 3 entries — keep the team group selfie (large, left), keynote speaking (top-right), and umbrella event (bottom-right). Drop the conference image.

2. Replace the grid markup (lines 181–196) with:
   - A `grid grid-cols-5 grid-rows-2 gap-3` container
   - Image 1: `col-span-3 row-span-2` — tall, fills full height (~280px)
   - Image 2: `col-span-2 row-span-1` — top-right
   - Image 3: `col-span-2 row-span-1` — bottom-right
   - Remove the `offsetClass` translate hacks
   - All images get `rounded-xl object-cover w-full h-full`

3. Keep eager loading on the first image, lazy on others.

### Visual Result
- Desktop: One dominant image with two supporting images — creates visual hierarchy and editorial feel
- Mobile: Stacks naturally or collapses to a simpler layout
- No more awkward translate offsets

