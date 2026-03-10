

## Performance and Visibility Plan for Search Engines and AI Crawlers

### The core concern — and the truth about Lovable/SPA sites

Your site is a client-side rendered Single Page Application (SPA). When Google, Bing, ChatGPT, Perplexity, or any AI crawler visits a URL, they receive an empty `<div id="root"></div>` and must execute JavaScript to see content. Google can do this (with delays), but most AI crawlers (GPTBot, PerplexityBot, ClaudeBot) **cannot execute JavaScript** and see a blank page. This is the real risk.

The fix is **prerendering** — generating static HTML snapshots of every page at build time so crawlers get real content without JavaScript.

---

### What is already done (good foundations)

- Lazy-loaded routes and below-fold sections
- `SEOHead` component setting title/description/canonical per page
- `JsonLd` structured data (Organisation, Service, FAQ, Course, Breadcrumb)
- `sitemap.xml` and `robots.txt` in place
- Hero image preloaded, font preconnected
- `overflow-x: hidden` for mobile scroll fix

### What needs to change

#### 1. Add Prerendering (Critical — biggest single impact)

Install `vite-plugin-prerender` (or `vite-ssg`) to generate static HTML for every route at build time. This gives crawlers — including AI bots — full HTML content on first load.

- Add the plugin to `vite.config.ts`
- Configure it with all ~50 routes from `App.tsx` plus blog post slugs from `blogPosts.ts`
- Each prerendered page will contain the full rendered HTML, meta tags, JSON-LD, and text content
- The SPA still hydrates normally for users — no UX change

#### 2. Add AI Crawler Directives

Update `robots.txt` to explicitly welcome AI crawlers:

```text
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ChatGPT-User
Allow: /
```

Add a `llms.txt` file (emerging standard) to the `public/` folder — a plain-text summary of the site for LLMs, listing key pages, services, and contact info.

#### 3. Fix OG Image

The current OG image points to `lovable.dev/opengraph-image-p98pqg.png` — a generic Lovable placeholder. Replace with a branded Neurodiversity Global image hosted on your own domain.

#### 4. Performance — Image Optimisation

Add `vite-imagetools` to the build pipeline to auto-convert `.jpg`/`.png` imports to WebP with width/height metadata. This reduces payload by ~40-60% and eliminates manual conversion. Update image imports to request optimised formats:

```ts
import heroWorkshop from "@/assets/hero/team-workshop.jpg?w=800&format=webp";
```

#### 5. Performance — Font Loading

The current setup preloads a font CSS file (not the font file itself) and loads two full font families with many weights. Reduce to:
- Self-host only the weights actually used (Plus Jakarta Sans 600/700, Roboto 400/500)
- Use `font-display: swap` (already set by Google Fonts)
- Remove the duplicate preload/stylesheet pattern

#### 6. Add `<noscript>` Fallback

In `index.html`, add a `<noscript>` tag with core content summary so non-JS crawlers that miss prerendering still get something meaningful.

#### 7. Structured Data Enhancements

- Add `Article` schema to each blog post (author, datePublished, image)
- Add `WebSite` schema with `SearchAction` to enable sitelinks search box in Google
- Ensure every industry page has both `Service` and `FAQPage` schemas (audit — some may be missing)

#### 8. Sitemap — Add Blog Posts

The current sitemap only covers static pages. Dynamically include all blog post URLs by generating the sitemap at build time from `blogPosts.ts` data, or add them manually.

---

### Implementation order (by impact)

| Priority | Task | Impact |
|----------|------|--------|
| 1 | Prerendering via vite plugin | Unlocks AI crawler visibility, fixes the core SPA problem |
| 2 | Fix OG image to branded asset | Social sharing, link previews |
| 3 | Update robots.txt + add llms.txt | AI crawler access |
| 4 | Add blog posts to sitemap | Crawl coverage |
| 5 | Image optimisation pipeline | Performance score |
| 6 | Font self-hosting/trimming | LCP improvement |
| 7 | Structured data enhancements | Rich results |
| 8 | Noscript fallback | Belt-and-braces |

### Limitations

- **No SSR available**: Lovable runs Vite with client-side React only. True server-side rendering (Next.js-style) is not possible. Prerendering at build time is the closest equivalent and is effective for content that does not change per-request.
- **Dynamic blog content**: If blog posts move to the database in future, prerendering would need a build-time fetch step or a separate static generation pipeline.
- **Core Web Vitals**: The biggest remaining LCP bottleneck will be hero images. WebP conversion and proper `srcset` will help but large images over slow connections remain a factor.

