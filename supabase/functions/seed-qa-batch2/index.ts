import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-admin-pin",
};

function generateSlug(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80)
    .replace(/-$/, "");
}

const qaItems = [
  // ── From SUEZ Q&A: Medication & Identity ──
  {
    question: "What does ADHD medication actually do?",
    tags: ["ADHD", "medication"],
    answer: `ADHD meds like methylphenidate or lisdexamfetamine are stimulants. I know that sounds backwards. But they work by helping your brain regulate dopamine and norepinephrine, the chemicals that affect attention, motivation, reward, and impulse control.

They do not make you smarter. They do not make you better at your job. What they do is help your brain tune in to the right thing at the right time, rather than chasing ten things at once or nothing at all. They give you a bit more control over the dial.

**What people often report:**
- Easier to start tasks, less procrastination
- Fewer emotional spikes or spirals
- Calmer transitions between activities
- Less background noise in the brain
- Clearer memory and focus
- The ability to pause and choose how to respond

**But there can be downsides:**
- Some people feel emotionally flat at first
- Appetite and sleep can be affected
- If the dose is not right, it can increase anxiety or irritability
- You might grieve the old version of you who got by in their own chaotic but creative way

That is all normal. The first few weeks or months are often about finding the right balance. If you do not feel like yourself on medication, say so. You deserve to be heard. This process is not about numbing or erasing parts of you. It is about helping your brain rest from the constant sprint.`
  },
  {
    question: "What does getting diagnosed with ADHD feel like?",
    tags: ["ADHD", "diagnosis"],
    answer: `It is not just a label. It is a shift in your whole internal landscape. For many people, especially those diagnosed later in life, it can make you question everything. I felt grief, frustration, different, and quite worried everyone would find out. It is amazing how many people just say "oh I know, I have known for years." You suddenly see your whole life through a different lens.

Why school felt so hard when you cared so much. Why your desk is a mess but your brain never stops. Why relationships have been intense, exhausting, or misunderstood. Why you spent years calling yourself lazy, disorganised, emotional, unreliable, when actually your brain was working overtime just to get through the day.

For a lot of people, the first feeling is relief. "It is not just me." That realisation can be a lifeline. Finally, there is a name for what you have been battling. Finally, you can start building systems around your needs instead of trying to fix yourself.

But then comes the grief. The kind that creeps up on you. Grief for the childhood support you did not get. Grief for the years spent masking or self-blaming. Grief for the relationships that cracked under pressure you did not understand at the time.

**What changes after diagnosis:**
- You can start adapting your environment instead of adapting yourself
- You can apply for reasonable adjustments at work or in education
- You can access medication if that is the route you want to explore
- You can stop justifying your brain to people who do not get it
- You can begin the slow, strong work of unlearning shame

And just as importantly, you start finding your people. The ones who say "me too" without needing an explanation.`
  },
  {
    question: "How do people get diagnosed with ADHD in the UK?",
    tags: ["ADHD", "diagnosis"],
    answer: `It can be difficult. I am not going to pretend otherwise. In the UK right now, getting diagnosed through the NHS is often a long, frustrating process. Some people are waiting two, three, even four years just for an assessment. That is not because you are not trying hard enough. It is because the system is overwhelmed and under-resourced.

**Option 1: NHS referral (free, but slow)**

Start by going to your GP and asking for a referral to an ADHD assessment service. You can also request to be referred through Right to Choose, which allows you to access a private provider like Psychiatry UK but still funded by the NHS. This route is legal and legitimate and sometimes quicker.

Ask your GP: "Can you refer me under Right to Choose to Psychiatry UK for an ADHD assessment?" They may not know about it. Bring printed information if needed.

**Option 2: Private assessment (faster, but costs money)**

If you can afford to go private, look for someone GMC-registered or on the Specialist Register. Many GPs will support shared-care prescribing after a private diagnosis. Some universities and workplaces may reimburse part of the cost.

**But here is something important:** You do not have to be diagnosed to start making changes. Self-recognition is valid. Self-reflection is powerful. If you know in your gut that something is different about how your brain works, that is enough to start adapting. Start noticing what drains you, what helps, and what rhythms feel right for you. That insight alone can help shape a life that fits.`
  },

  // ── From SUEZ Q&A: Women & ADHD ──
  {
    question: "Why is ADHD missed in women and girls?",
    tags: ["ADHD", "parenting", "families"],
    answer: `Because the diagnostic criteria were built around how ADHD shows up in boys. Hyperactive boys in classrooms. That is what the research studied for decades. Girls were missed because they present differently.

ADHD in women and girls often looks like this:
- Appearing shy, anxious, or perfectionistic
- Working very hard to compensate
- Masking difficulties by over-preparing or staying quiet
- Inattention rather than hyperactivity: daydreaming, zoning out, difficulty finishing tasks
- Emotional sensitivity: mood swings, easily overwhelmed, prone to burnout

Professionals notice the anxiety or low mood but miss the root cause: a brain wired differently when it comes to attention, processing, and regulation.

**The numbers tell the story.** Boys are usually diagnosed around age 8. Girls, on average, not until around 17. That is a nine-year gap during which most girls internalise, mask, and blame themselves.

The ADHD Foundation estimates that 1 million UK women likely have ADHD, but only 75,000 are currently receiving care through the NHS. That means the majority are still struggling, often alone.

One UK study found 13 percent of women with recurrent depression had high levels of ADHD symptoms, but none had been diagnosed. They were on antidepressants that did not really help. Their symptoms were more severe, long-lasting, and difficult to treat. Why? Because the core issue, ADHD, was never identified.

If antidepressants work on serotonin but the real issue is dopamine, you are wallpapering over a leaking pipe. The wall might look better for a while but the real problem is still there.`
  },

  // ── From SUEZ Q&A: Bouncing back from feedback ──
  {
    question: "How do I bounce back after negative feedback at work?",
    tags: ["ADHD", "workplace", "employers"],
    answer: `For many of us with ADHD, feedback does not land softly. It crashes. You hear a comment about your work, and instead of processing it as information, it hits you in the chest. The heart races, your brain spins, your stomach drops. You might feel ashamed, defensive, exposed, or suddenly very small.

That is not because you are too sensitive. It is because your brain processes emotion differently. More intensely, more immediately, and sometimes more painfully. This is connected to Rejection Sensitive Dysphoria.

**Step one: let yourself feel but do not act yet.** Pause. Do not respond straight away. Go for a short walk. Listen to music that grounds you. Breathe slowly, longer out-breath than in.

**Step two: separate the feedback from your identity.** Feedback is data. Not a verdict. Not a definition of who you are. Your brain might rush to turn "this could be improved" into "you are not capable." But that is not the truth. That is a reflex.

**Step three: ask yourself what is actually true.** Not all feedback is fair. Some is unclear. Some is delivered badly. Get curious. Not defensive, not dismissive. Just curious. What part is about your work? What part might be about the other person's expectations or timing?

**The 24-hour rule:** Do not quit until the next day. Do not send that email until the next day. Walk away from the conversation that is going to make you explode. And remember, it may not be them, it may just be the way you have interpreted something. If you can, ask questions. If not, just walk away and wait until tomorrow.

You are not fragile. You are just wired for deeper emotional impact. And you can learn to respond, not just react.`
  },

  // ── From SUEZ Q&A: Teenagers & socialising ──
  {
    question: "How can I help my neurodivergent teenager socialise?",
    tags: ["parenting", "families", "ADHD"],
    answer: `Socialising when you are a young person with ADHD can feel like walking into a room full of mirrors. Everything you have ever said or done that felt too much, too loud, too impulsive, suddenly flashes back at you.

This is not just about confidence. It is about memory. ADHD brains do not forget embarrassment easily. They remember the joke that landed badly. The friendship that drifted because they did not text back. Shame sticks. And once it sticks, it becomes a filter. Even if they want to connect, that internal voice starts whispering, "You will mess this up too."

**Start with safety, not performance.** The goal is not to make them more sociable. It is to help them feel safe enough to try:
- One-to-one meetups instead of big group settings
- Shared activities that take the focus off constant conversation: dog walking, creative projects, gaming, sport, Lego, volunteering
- Knowing they are allowed to leave early or step outside without being judged
- Hearing someone say, "It is completely okay if you go quiet sometimes"

We also quite like our own time. In a world full of stimuli, being on our own is okay. We regulate, we are able to think, to feel, to not be overwhelmed.

**After social situations,** they may ruminate for hours or even days. Encourage them to talk through what happened. Not just the awkward bits, but everything. What felt okay? What surprised them?

And maybe the biggest shift? Redefining social success. It is not about being liked by everyone or being chatty all the time. It is about feeling regulated in your own skin and connecting with people who see and value you as you are.

Social confidence is not about changing who you are. It is about learning that you are safe enough to be seen. That takes time. And it is okay to go slow.`
  },

  // ── From SUEZ Q&A: GCSEs ──
  {
    question: "How can my child with ADHD prepare for exams without being overwhelmed?",
    tags: ["parenting", "families", "ADHD"],
    answer: `GCSEs can feel like a mountain for neurodivergent young people. Not because they are not capable, but because the way they are expected to prepare often does not work for how their brain functions. Time blindness, motivation crashes, emotional overload, sleep disruption, perfectionism. These things all get louder in exam season.

**What is actually happening:**
- **Time blindness:** The brain struggles to feel how long something will take. GCSEs feel far away until suddenly they are tomorrow.
- **Motivation crashes:** Dopamine levels fluctuate constantly. What feels doable at 11am can feel impossible by 2pm.
- **Perfectionism:** Many children with ADHD develop this as a survival strategy. If they get it perfect, maybe they will not get in trouble. But when perfection feels unreachable, they freeze.

**What actually helps:**
- **Make time visible.** Use visual timers, calendars, post-it timelines. Show deadlines in colour.
- **Break tasks into micro steps.** Instead of "revise history," try "open the book, read two bullet points, close the book." This builds momentum.
- **Focus on starting, not finishing.** The first step is the hardest. Celebrate it.
- **Body doubling.** Working in the presence of another person. Pair them with a friend who is also revising. Check in every two hours.
- **Timed breaks every 45 minutes.** Stretch, pace, bounce, dance. Movement helps the brain reset.
- **Brown noise for sleep.** It gives the brain something constant to focus on so it does not chase a thousand thoughts.
- **Use films and documentaries.** Their learning style might be visual or auditory, not just reading and writing.

Speak to the school about exam access arrangements. Extra time, a smaller room, breaks between papers. These are not about giving an advantage. They are about levelling the field.

And remind them that exams do not define their worth. Their identity is built on resilience, creativity, humour, passion, and how they treat people when nobody is watching.`
  },

  // ── From SUEZ Q&A: Disclosing at work ──
  {
    question: "How do I raise my neurodivergence at work without being seen as a problem?",
    tags: ["workplace", "employers", "ADHD"],
    answer: `This is such a common fear. And it is completely valid. Most people who are late-diagnosed or self-identified have already spent years masking at work. Trying to keep up. Trying not to make waves. Trying to fit into systems that were never designed with them in mind.

Here is the reality: you can be honest about your needs without putting a target on your back. The key is to shift the framing from "this is a problem" to "this is how I work best."

You might say something like:
- "I have noticed I do my best work when I have written instructions rather than verbal ones. Could we try that?"
- "I find open-plan offices quite draining. Would it be possible to use a quiet space for focused work?"
- "Agendas sent in advance really help me prepare for meetings."

You do not have to use the word ADHD, autism, or any diagnosis if you do not want to. You can frame it entirely around preferences and productivity.

**If you do want to disclose formally:**
- You are protected under the Equality Act 2010. Your employer has a legal duty to consider reasonable adjustments.
- Start with your line manager or HR. You can request confidentiality.
- You do not need a formal diagnosis to ask for support. Many adjustments can be made without one.

**Research shows that 65 percent of neurodivergent employees fear discrimination from management upon disclosure.** That fear is not irrational. Neurodivergent employees are statistically more likely to be disciplined or dismissed. But the solution is not silence. It is finding safe ways to communicate your needs while protecting yourself.

The best employers do not wait for disclosure. They ask everyone: "What helps you do your best work?" If your employer does not ask, you are allowed to answer anyway.`
  },

  // ── From SUEZ Q&A: NHS waiting lists ──
  {
    question: "My child has been on the NHS waiting list for years. Who can help?",
    tags: ["parenting", "families", "diagnosis"],
    answer: `You are not imagining how long this takes. In some parts of the UK, families wait three, four, even five years for a child's neurodevelopmental assessment. A 2023 ADHD UK survey found average waits of five weeks in some areas and five years in others. One in four families waited over a year just for a first appointment.

That is not acceptable. But it is the reality right now.

**What you can do:**

**1. Push the NHS pathway.** Make sure the referral is active. Chase it. Ask your GP to escalate if the wait is excessive. If your local area claims not to offer ADHD assessments, request funding for an out-of-area referral. NHS guidance via NICE says they must provide access to assessment and treatment.

**2. Right to Choose.** In England, you can ask your GP to refer you under Right to Choose to an approved private provider like Psychiatry UK, funded by the NHS. This is legal and legitimate. Some GPs do not know about it, so bring printed information.

**3. Go private if you can.** Private assessments are faster but cost money. Ensure the provider is GMC-registered or HCPC-registered and follows NICE guidelines. A private diagnosis can be accepted by the NHS under shared care, but it might not guarantee NHS medication funding.

**4. Do not wait for diagnosis to start support.** Ask the school to trial reasonable adjustments now: movement breaks, checklists, visual timetables, quiet space access, emotional coaching. Diagnosis helps, but support can and should start now.

**5. Document everything.** Keep a diary of struggles, incidents, and dates. This is your evidence. When you do get the appointment, having this ready makes the assessment more accurate and the conversation clearer.

**6. Find your people.** Local SEND forums, Facebook groups, ADHD charities. Other parents who have been through this can offer practical advice about which GPs, schools, and pathways actually work in your area.

The system was not built to see children like yours quickly enough. But you see them. And that is what matters most right now.`
  },

  // ── From Keller Q&A: Disclosure ──
  {
    question: "Why don't neurodivergent people talk about it at work?",
    tags: ["workplace", "employers"],
    answer: `Several factors. And none of them are irrational.

**Stigma.** 61 percent of neurodivergent employees report experiencing stigma or feeling misunderstood at some point in their careers. Misconceptions about neurodivergence, like the belief that neurodivergent employees are less capable or require special treatment, lead to bias and exclusion.

**Fear of discrimination.** Research shows neurodivergent employees are 18 times more likely to be disciplined and 30 times more likely to be dismissed than neurotypical employees. Those numbers are not subtle. They explain why people stay quiet.

**Career progression.** 65 percent of neurodivergent employees fear that revealing their status could limit their opportunities for advancement. They worry about biased evaluations or being passed over for promotions.

**Masking.** In response to all of this, many neurodivergent employees suppress their natural behaviours to fit in with neurotypical expectations. That masking leads to exhaustion, reduced authenticity, and burnout. It directly impacts work performance and personal wellbeing.

**What employers should do instead of waiting for disclosure:**
- Create an environment where everyone feels valued without needing to disclose personal information
- Provide universal accommodations: flexible work hours, quiet workspaces, clear communication, visual aids
- Ask open-ended questions about preferences: "Is there anything we can adjust to help you work at your best?"
- Educate staff through neurodiversity awareness training to reduce stigma and build empathy

The best way to support neurodivergent colleagues is to make adjustments available to everyone. That way, nobody has to risk their career just to get the support they need to do their job.`
  },

  // ── From Neuroinclusion business case ──
  {
    question: "Is neuroinclusion good for business?",
    tags: ["workplace", "employers"],
    answer: `Yes. And the evidence is not subtle.

**Productivity:** JPMorgan Chase found that autistic employees in their Autism at Work programme were completing tasks 48 percent faster and up to 92 percent more productively than neurotypical colleagues. Hewlett Packard tracked teams that included autistic individuals and found they were about 30 percent more productive. These are not marginal gains.

**Retention:** Neurodiversity hiring programmes at SAP, JPMorgan, Microsoft, and EY show retention rates exceeding 90 percent, far above industry averages. EY reports an ROI exceeding one billion dollars and 3.5 million work hours saved through its neurodivergent Centres of Excellence.

**Innovation:** Inclusive organisations are 75 percent more likely to bring ideas to market and six times more likely to be agile and responsive to change. At SAP, an autistic software engineer created an automation tool that cut a process from 48 hours down to 20 minutes and won the company's top innovation award.

**Bottom line:** Companies leading in disability and neurodiversity inclusion consistently outperform peers with 28 percent higher revenues, 30 percent higher profit margins, and 6.8 percent stronger stock performance.

**The risk of not acting:** Employees who see a lack of commitment to diversity are 3.3 times more likely to leave within a year. Only 20 percent are engaged compared to 84 percent when diversity is valued.

This is not charity. It is strategy. The organisations that build truly neuroinclusive environments, where psychological safety, flexibility, and human understanding underpin everyday operations, are those best positioned to attract exceptional talent, unlock innovation, and deliver long-term success.

As Microsoft's Autism Hiring Programme lead puts it: "Neurodiversity is the future of competitive advantage. It is not charity. It is strategy."`
  },

  // ── From SUEZ Q&A: "I think I'm neurodivergent" ──
  {
    question: "I think I might be neurodivergent. Where do I start?",
    tags: ["foundations", "ADHD", "diagnosis"],
    answer: `That realisation does not come out of nowhere. It usually comes after months, sometimes years, of watching yourself struggle and wondering why other people seem to manage life with less effort. You might have held it together outwardly, good job, responsibilities, kids, but inwardly? Chaos. Missed deadlines, forgotten birthdays, anxiety spikes, everything taking longer than it should.

You have probably blamed yourself for a long time.

Thinking you might be neurodivergent is often the moment where the shame starts to lift. Where the lens shifts from "what is wrong with me?" to "what is going on underneath?" That shift matters. Because the moment you say maybe it is not just me, you open the door to self-compassion.

**You do not need a diagnosis to begin.** You just need a starting point.

- Start noticing patterns. What drains you? What helps? What rhythms feel right?
- Try brown noise to help your brain settle while working or sleeping
- Try body doubling, working alongside someone else, even silently
- Break tasks into tiny steps. Start with "open the laptop," not "finish the spreadsheet"
- Put things on the walls. Post-its, whiteboards, colour-coded notes. If it is not visible, it might as well not exist
- Give yourself permission to rest. Proper rest. Not screen scrolling.

**It might be ADHD.** It might be the inattentive type that looks quieter. It might be autism. It might be a combination. It might be something else entirely. The uncertainty is valid. You are not doing it wrong. The goal is not to land the perfect label. The goal is to understand yourself more clearly so you can stop working against your own wiring.

If a formal diagnosis feels helpful, look into Right to Choose through your GP or private assessment. The system is slow. But you do not have to wait to take care of yourself.

You are not broken. You are not making this up. Whatever path you take from here, it begins with one simple truth: you are allowed to build a life that works for your brain.`
  },

  // ── From Keller Q&A: What managers should do ──
  {
    question: "What should a line manager do to support neurodivergent staff?",
    tags: ["workplace", "employers"],
    answer: `Your role as a manager is not to become an expert in neurodiversity. It is to be a good manager who treats people as individuals. Here is what that looks like in practice.

**1. Educate yourself.** You do not need a psychology degree. Just understand the basics. Neurodivergent conditions like ADHD, autism, and dyslexia bring unique strengths, challenges, and work preferences. 61 percent of neurodivergent employees feel misunderstood or stigmatised at some point. Addressing that starts with knowledge.

**2. Ask, do not assume.** Make conversations about work preferences routine for everyone. Open-ended questions like "Is there anything that helps you work best?" or "Do you have any preferences for how you receive feedback?" create safety without pressuring anyone to disclose.

**3. Offer flexible support.** Flexible hours, remote work options, noise-cancelling headphones, written instructions, agendas sent before meetings. None of these are expensive. Most cost nothing. But they can transform someone's ability to do their job.

**4. Focus on output, not style.** If the work is excellent but it was done at midnight in a hoodie, does the hoodie matter? If the presentation was brilliant but they did not make enough eye contact, does the eye contact matter? Stop measuring people against a neurotypical template.

**5. Give clear, structured feedback.** Be specific and constructive. Highlight strengths while providing actionable steps for improvement. Neurodivergent employees often benefit from written feedback they can process in their own time.

**6. Respect privacy absolutely.** If someone discloses, maintain strict confidentiality. 65 percent of neurodivergent employees fear discrimination from management upon disclosure. Handle that trust carefully.

**7. Lead by example.** When you openly discuss your own work preferences and adjustments, you set a tone of openness. That simple act can help neurodivergent employees feel safe without needing to disclose.

The adjustments that help neurodivergent employees almost always help everyone. Clearer communication, better feedback, more flexibility. That is not special treatment. That is good management.`
  },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const pin = req.headers.get("x-admin-pin");
  if (pin !== Deno.env.get("ADMIN_PIN")) {
    return new Response(JSON.stringify({ error: "Invalid PIN" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  try {
    const rows = qaItems.map((item) => ({
      question: item.question,
      answer: item.answer,
      tags: item.tags,
      published: true,
      slug: generateSlug(item.question),
    }));

    const { data, error } = await supabase
      .from("qa_items")
      .upsert(rows, { onConflict: "slug" })
      .select("id, slug");

    if (error) throw error;

    return new Response(
      JSON.stringify({ success: true, inserted: data?.length ?? 0, items: data }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("seed-qa-batch2 error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
