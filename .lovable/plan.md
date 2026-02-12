

# Ask Rich Knowledge Base -- Assessment and Upgrade Plan

## Current State

The feature infrastructure is complete but the knowledge base is **empty** (0 Q&A items, 0 submissions). The AI assistant works but has no curated content to draw from -- it relies entirely on generative output.

### What works today
- Ask Rich page with AI streaming responses in Rich's voice
- Tag-based browse/filter for Q&A items
- Confidential question submission form
- PIN-protected admin panel (CRUD for items, review submissions)
- Database tables with proper security policies

### What needs attention
The feature has five gaps between where it is and world-class.

---

## Phase 1: Content Foundation (no code changes needed)

The single biggest improvement is **populating the knowledge base**. The AI's quality improves dramatically once it has curated Q&A to reference.

**Action:** Use the existing admin panel at `/admin` (PIN: 838567) to add Q&A items. Priority topics:
- What is neurodiversity / ADHD / autism / dyslexia (foundational)
- Reasonable adjustments at work
- Legal rights under the Equality Act 2010
- How to disclose at work
- Manager guidance for supporting neurodivergent staff
- Common myths and misconceptions

**Target:** 30-50 well-written Q&A items with consistent tagging to make the feature immediately useful.

---

## Phase 2: Smarter Search and Retrieval

Currently, every published Q&A item is injected into the AI system prompt as raw text. This works for small knowledge bases but will break at scale.

### Changes
- Add a **text search** input to the browse section so users can filter Q&A by keyword (not just tags)
- Add a `search_rank` column or use Postgres full-text search (`tsvector`) on `qa_items` for fast matching
- In the `ask-rich` edge function, replace "send everything" with a relevance-filtered subset (top 10 matches by keyword overlap) to keep prompt size manageable

---

## Phase 3: Better User Experience

### Individual Q&A pages with shareable URLs
- Give each Q&A item a URL-friendly slug (new `slug` column)
- Create a `/ask-rich/:slug` route that shows a single Q&A item
- Add FAQ JSON-LD schema markup for SEO

### Related questions
- After the AI answers, show 3-5 related Q&A items from the knowledge base (matched by tags or keywords)
- This keeps users exploring and builds trust in the depth of content

### Answer quality signals
- Add a simple "Was this helpful?" (thumbs up/down) on AI answers
- Store feedback in a new `qa_feedback` table for Rich to review

### Improved browse experience
- Add a keyword search box above the tag filter
- Show Q&A count per tag
- Add pagination or infinite scroll for large knowledge bases

---

## Phase 4: Admin Workflow Improvements

### Submission-to-Q&A pipeline
- Add a "Convert to Q&A" button on submissions that pre-fills the new Q&A form with the submitted question
- This turns user submissions into knowledge base content with one click

### Markdown preview
- Show a live preview panel alongside the answer editor in admin

### Analytics dashboard
- Track most-asked AI questions (log queries to a new table)
- Show popular tags, unanswered topics, and submission trends
- Help Rich identify content gaps

---

## Phase 5: Scale and Intelligence

### Vector/semantic search (longer term)
- Generate embeddings for each Q&A item using the AI gateway
- Store embeddings using Postgres `pgvector`
- Replace keyword matching with semantic similarity search in the edge function
- This allows the AI to find relevant content even when the user's wording doesn't match the stored question exactly

### Multi-language Q&A
- Connect to the i18n system so Q&A items can have translations
- AI can respond in the user's selected language while drawing from the English knowledge base

---

## Recommended Priority Order

| Priority | Phase | Effort | Impact |
|----------|-------|--------|--------|
| 1 | Phase 1: Add content | Manual (Rich) | Transformative |
| 2 | Phase 3: Shareable URLs + related questions | Medium | High |
| 3 | Phase 2: Text search + smarter retrieval | Medium | High |
| 4 | Phase 4: Admin workflow | Low-Medium | Medium |
| 5 | Phase 5: Vectors + multi-language | High | Long-term |

---

## Technical Details

### Database changes needed (Phases 2-5)
- `qa_items`: add `slug` (text, unique), `view_count` (integer, default 0)
- New table `qa_feedback`: id, qa_item_id (nullable), ai_query (text), helpful (boolean), created_at
- New table `qa_query_log`: id, query (text), created_at -- for analytics
- Full-text search index on `qa_items(question, answer)`
- Later: `embedding` column (vector type) on `qa_items` for semantic search

### Edge function changes
- `ask-rich`: Replace full-dump approach with filtered retrieval (top N relevant items)
- Add query logging to track what users ask

### Frontend changes
- New route `/ask-rich/:slug` for individual Q&A items
- Search input component for the browse section
- Related questions component
- Feedback thumbs component
- Admin: "Convert to Q&A" button, markdown preview, analytics tab

