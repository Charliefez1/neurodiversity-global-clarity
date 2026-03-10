
## Add Image Next to "The Challenge" Title

### What will change
The uploaded image (showing training stats and a Teams call) will be placed alongside the "The challenge" section header in the ProblemSection, creating a side-by-side layout on desktop.

### Implementation

1. **Copy the uploaded image** into `src/assets/challenge-stats.png`

2. **Update `src/components/ProblemSection.tsx`**:
   - Import the image as an ES6 module
   - Change the header area (currently `max-w-2xl mb-16`) from a single-column layout to a two-column grid on larger screens (`grid lg:grid-cols-2 gap-8 items-center mb-16`)
   - Left column: keep the existing badge, h2 title, description text, and audio player
   - Right column: display the image with `rounded-xl` styling, appropriate alt text, and responsive sizing
   - On mobile, the image will stack below the title text

### Visual result
- Desktop: title/text on the left, image on the right, side by side
- Mobile: title/text on top, image below
- The three problem cards underneath remain unchanged
