

# Extract Q&A Items from Rich's Content

## What we are doing

Extracting 30+ structured Q&A items from three sources and bulk-loading them into the knowledge base via the admin edge function. Each item will be written in your voice: direct, plain-spoken, grounded in lived experience, no jargon, no corporate fluff.

## Sources reviewed

1. **"Are We Bad Parents?" article** (awbp.neuro.support) -- covers dopamine, meltdowns vs tantrums, RSD, ODD, SPD, PDA, masking, parenting reality, mental health, strengths
2. **"Dopamine on Demand" article** (smartphonefree.neurodiversityglobal.com) -- covers smartphones, dopamine withdrawal, screen regulation, sleep, neurodivergent children and tech
3. **Workshop transcript** (voice training doc) -- covers workplace neurodiversity, reasonable adjustments, masking, psychological safety, hidden talent, prevalence stats, conditions overview

## Proposed Q&A items (35 items across 7 categories)

### Category: Foundations (tag: foundations)
1. **What is neurodiversity?** -- Natural variation in the human brain. Not a disease, not a trend.
2. **What is the difference between neurodivergent and neurotypical?** -- Lane analogy from the workshop.
3. **Is neurodivergence a disability?** -- It can be disabling, but the disability often sits in the environment.
4. **How common is neurodivergence?** -- Around 20% globally, 53% of Gen Z self-identify.

### Category: ADHD (tag: ADHD)
5. **What is ADHD?** -- Dopamine deficit explanation, searching behaviour, both sides.
6. **What is dopamine searching?** -- The brain looking for stimulation to feel level. Can look wild or brilliant.
7. **Is everyone getting an ADHD diagnosis these days?** -- Left-handedness analogy. Not an epidemic, a reduction in suppression.
8. **What is hyperfocus?** -- Cutting out the fluff. A strength born from how ADHD brains filter.

### Category: Autism (tag: autism)
9. **What is autism?** -- Sensory system at full volume. They see what you miss. They feel what you cannot.
10. **Why do autistic people struggle in social situations?** -- Energy cost, processing, masking.
11. **What is masking?** -- Copying others to fit in. Exhausting. Starts young.

### Category: Other conditions (tag: conditions)
12. **What is dyslexia?** -- Nothing to do with intelligence. Different brain route for letters and sounds.
13. **What is dyspraxia?** -- The dial-up modem analogy. Spatial awareness, coordination.
14. **What is Tourette syndrome?** -- The blink exercise. Dopamine seeking through tics.
15. **What is RSD (Rejection Sensitive Dysphoria)?** -- 20,000 more negative comments by age 10. Protection, not weakness.
16. **What is ODD (Oppositional Defiant Disorder)?** -- Resistance as the only safe place. Not defiance for its own sake.
17. **What is PDA (Pathological Demand Avoidance)?** -- Demands feel like threat. Fear underneath the refusal.
18. **What is sensory processing difference?** -- The world at full volume. Both the difficulty and the gift.

### Category: Parenting (tags: parenting, families)
19. **Are neurodivergent children just badly parented?** -- No. Biology and neurological diversity affecting nearly two billion people.
20. **What is a meltdown and how is it different from a tantrum?** -- Sensory overload vs behaviour. The supermarket moment.
21. **What should I do during a meltdown?** -- Stop harm. Stay calm. Do not shout. Wait for the crash.
22. **My child seems fine at school but falls apart at home. Why?** -- The brain download. Masking all day, processing at bedtime.
23. **What can parents do when the school system is not helping?** -- Reduce pressure at home, focus on regulation before solutions, protect the relationship.
24. **Is neurodivergence a superpower?** -- Not a superpower. Not a tragedy. They are human. Strengths come from adaptation, not magic.
25. **How does trauma interact with neurodivergence?** -- They stack. George's story. The nervous system learns to stay alert.

### Category: Smartphones and dopamine (tags: dopamine, screens, parenting)
26. **Why do children struggle when you take the phone away?** -- Dopamine withdrawal. The brain drops below baseline.
27. **Can smartphones cause ADHD?** -- No. But dopamine withdrawal can look like ADHD. State vs identity.
28. **What is dopamine withdrawal?** -- Restlessness, irritability, low mood. The nervous system recalibrating.
29. **How do I manage screen time for a neurodivergent child?** -- Five practical steps: protect sleep, predictable endings, reduce notifications, real life before high reward, weekly reset conversation.
30. **Should we go smartphone-free?** -- Not about banning. About protecting regulation. Limiting access is protection, not deprivation.

### Category: Workplace (tags: workplace, employers)
31. **What are reasonable adjustments?** -- The coffee cup analogy. Just levelling the playing field.
32. **Why should employers care about neurodiversity?** -- Hidden 20%. Deloitte's 30% productivity increase. Competitive advantage.
33. **What is psychological safety and why does it matter?** -- Being able to say "I did not get that" without fear.
34. **How do I support a neurodivergent employee?** -- See them, value them, support them, watch them perform.
35. **Why do neurodivergent people struggle in interviews?** -- Eye contact, small talk, body language bias. 70% of autistic adults unemployed.

## How this will be built

1. **Create a seed data edge function** called `seed-qa` that bulk-inserts all 35 items into `qa_items` using the service role key, with proper slugs, tags, and published status.
2. **Run it once** to populate the database, then verify via the admin panel.
3. Each answer will be written in your voice: first person where appropriate, direct, no em dashes, no corporate language, grounded in real examples from the sources.
4. Answers will use markdown formatting (bold for emphasis, headers for structure) to render well on the Ask Rich page.

## Technical details

- New edge function: `supabase/functions/seed-qa/index.ts`
- Uses `SUPABASE_SERVICE_ROLE_KEY` (already available in edge functions)
- Protected by `ADMIN_PIN` check so it cannot be run by anyone
- Each item includes: question, answer (markdown), tags (array), published (true), slug (auto-generated)
- After seeding, the function can be removed or kept for future bulk imports

