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
  // ── From NiB/Birkbeck 2023 & 2024 Research ──
  {
    question: "What does the research actually say about neurodivergent people at work?",
    tags: ["workplace", "research", "employers"],
    answer: `The Birkbeck University and Neurodiversity in Business studies are the most comprehensive we have. Over 1,100 people responded in 2023, and more than 1,400 neurodivergent workers in 2024. Here is what the data tells us.

Employers and neurodivergent employees agree on the strengths: creativity, innovation, focus, authenticity. That is good news. It means your neurodivergent staff are already being valued for what they bring.

But here is where it gets uncomfortable. **Wellbeing levels among neurodivergent workers are very low.** And they got worse between 2023 and 2024. Not because people suddenly became less resilient, but because workplaces have not kept up with what is needed.

The research found that **career progression and psychological safety were more important for retention than adjustments alone.** That is a big finding. It means you can offer all the noise-cancelling headphones you want, but if someone does not feel safe to be themselves, or cannot see a future in your organisation, they will leave.

Two-thirds of neurodivergent respondents had more than one condition. That is the norm, not the exception. So condition-specific approaches miss the point. You need to design for the whole person.`
  },
  {
    question: "What is the real business case for neuroinclusion?",
    tags: ["workplace", "employers", "business-case"],
    answer: `I have been doing this work for over 20 years, and I have watched the business case go from "nice to have" to "competitive advantage." The numbers now back up what I have always seen on the ground.

**Productivity:** JPMorgan Chase found that autistic employees in their Autism at Work programme were completing tasks 48% faster and up to 92% more productively within six months. Hewlett Packard measured teams with neurodivergent members as 30% more productive. These are not small margins.

**Retention:** Neurodiversity hiring programmes at SAP, JPMorgan, Microsoft and EY all report retention rates above 90%. That is well above industry averages. And EY reports an ROI exceeding $1 billion and 3.5 million work hours saved through their neurodivergent Centres of Excellence.

**Innovation:** Inclusive organisations are 6 times more likely to be innovative and agile. At SAP, an autistic software engineer created an automation tool that cut a process from 2 days to 20 minutes and won the company's top innovation award.

**Bottom line:** Companies leading in inclusion consistently outperform peers, with studies showing 28% higher revenues and 30% higher profit margins.

This is not charity. It is strategy. And the organisations that understand that are pulling ahead.`
  },
  {
    question: "Why is wellbeing so low among neurodivergent employees?",
    tags: ["workplace", "wellbeing", "masking"],
    answer: `The Birkbeck research found wellbeing levels among neurodivergent workers are alarmingly low and actually declining. There are several reasons.

**Masking is the big one.** 81% of neurodivergent employees report masking at work, often daily. That means spending your entire working day monitoring and adjusting how you speak, sit, react, make eye contact, and respond, just to appear "normal." It is exhausting. It is unsustainable. And it is linked to a 3 times higher risk of burnout.

**Sensory overload** contributes to a constant sense of overwhelm. Open-plan offices, fluorescent lighting, unpredictable noise, all of it accumulates across the day.

**Sleep and mental health conditions** were flagged as significant factors. Many neurodivergent people have co-occurring conditions that affect sleep quality, and poor sleep makes everything harder.

**Psychological safety dropped** between 2023 and 2024. When people do not feel safe to be themselves, their wellbeing takes a direct hit. And when wellbeing drops, so does innovation, creativity, and the very strengths employers say they value.

The fix is not a wellbeing app. It is designing work environments that do not exhaust people before lunch.`
  },
  {
    question: "Why do so many neurodivergent people hide who they are at work?",
    tags: ["workplace", "disclosure", "masking"],
    answer: `Because the cost of being honest often feels higher than the cost of pretending.

76% of neurodivergent employees in the UK have not disclosed at work. In construction, 36% of neurodivergent workers have not told anyone. The reasons are consistent across every sector I have worked with:

- **Fear of stigma or judgement.** 31% worry about the stigma attached to their condition.
- **Fear of being viewed differently.** 26% worry colleagues will treat them differently.
- **Fear of career impact.** Many believe disclosure will affect their chances of promotion.
- **Embarrassment.** 24% of construction workers said they feel embarrassed about their condition.

And here is the thing. These fears are not irrational. They are based on experience. Many neurodivergent people have spent their lives being told to try harder, calm down, pay attention, stop being awkward. Asking them to suddenly trust a workplace system that has never been designed for them is a big ask.

Only 14% of neurodivergent employees say their workplace is psychologically safe, compared to 41% of neurotypical peers. That gap tells you everything. The answer is not to push for disclosure. It is to build workplaces where disclosure is not necessary for someone to get the support they need.`
  },
  {
    question: "Most neurodivergent people have more than one condition. What does that mean for employers?",
    tags: ["workplace", "employers", "conditions"],
    answer: `Two-thirds of neurodivergent people in the Birkbeck research identified with more than one condition. That is the norm, not the exception. I am AuDHD and dyslexic myself. My kids have overlapping conditions. This is how it works.

What this means for employers is simple: **stop thinking in single labels.** If you build your adjustments around "what autistic people need" or "what ADHD looks like," you will miss the majority of your neurodivergent staff who sit across multiple categories.

Someone might have the sensory sensitivity of autism combined with the time-blindness of ADHD and the processing differences of dyslexia. Their experience at work is not any one of those things in isolation. It is all of them, all the time.

The practical response is to **design for the person, not the diagnosis.** Ask what they need. Listen to what is working and what is not. Use a strengths and challenges approach rather than a condition-specific checklist.

The Birkbeck research was clear: a piecemeal, condition-by-condition approach does not work. Neuroinclusion needs to be holistic. That means flexible, adaptive, and built around real people rather than textbook profiles.`
  },
  // ── From Construction Report ──
  {
    question: "How common is neurodiversity in the construction industry?",
    tags: ["workplace", "construction", "research"],
    answer: `More common than most people think. The National Federation of Builders commissioned research across 1,000 UK construction workers in 2023, and the results were striking.

**1 in 4 construction workers consider themselves to have a neurodivergent condition.** 17% have a formal diagnosis, which is higher than the estimated general population figure. And 16% did not know whether or not they were neurodivergent, which suggests the real figure could be higher still.

ADHD was the most common condition, accounting for 54% of neurodivergent construction workers. 32% were autistic, 31% dyslexic, and many had more than one condition.

Here is the positive side: 34% of neurodivergent workers said their condition actually made them want to work in construction more, compared to only 5% who said less. Construction suits certain neurodivergent profiles. Hands-on work. Problem solving. Visible progress. Less sitting at a desk.

But 36% have not told anyone at work. And 75% were never asked about neurodiversity during hiring or onboarding. That is a massive missed opportunity to offer early support.

The industry has good instincts. 76% of neurodivergent workers said their colleagues dealt well with any issues. But instinct without structure is not enough.`
  },
  // ── From HR Guide ──
  {
    question: "What should HR professionals know about neurodiversity?",
    tags: ["workplace", "employers", "HR"],
    answer: `This is not a specialist issue. It is part of your remit whether you know it or not. You are already managing neurodivergent staff. You are already dealing with the impact of masking, adjusting roles informally, and supporting managers who feel unsure. The question is whether you are doing it intentionally.

**Only 23% of HR professionals feel confident supporting neurodivergent staff.** That is despite over 90% wanting to improve. The gap between intention and capability is where the risk sits.

Here is what you need to know:

1. **Do not wait for diagnosis.** 76% of neurodivergent employees are undiagnosed or self-identified only. If your support systems depend on a medical label, you are missing the majority of the people who need help.

2. **Neurodivergent staff are over-represented in grievance and disciplinary processes.** Often because communication differences are misread as attitude problems.

3. **Masking is real and it is costly.** 81% mask daily. It leads to burnout, absence, and exit. If someone appears to be coping, that does not mean they are.

4. **Adjust your language.** Terms like "fit," "tone," or "attitude" often mask discomfort with difference. Challenge those defaults in your policies and conversations.

5. **Design for silent needs.** Many people will never speak up. Build clarity, predictability, and flexibility into everyday working practice.

A neuroinclusive workplace does not rely on diagnosis. It relies on design.`
  },
  {
    question: "What are the most common myths about neurodivergent people at work?",
    tags: ["workplace", "myths", "employers"],
    answer: `I hear these constantly. And they cause real damage.

**"They just need to try harder."** If effort were the issue, every neurodivergent person I have ever met would be running the world. The challenges are neurological, not motivational. You need to target the barrier, not the outcome.

**"You can tell by looking."** No, you cannot. Neurodivergence is mostly invisible. And many people are actively masking to appear "normal," which takes enormous energy.

**"It only matters if they are diagnosed."** Under the Equality Act, legal and ethical support should be based on need, not label. Long-term cognitive traits are protected whether or not someone has been through a clinical process.

**"People with autism can't work in teams."** This is outdated and incorrect. Many autistic individuals thrive in collaborative settings when communication is structured and expectations are clear.

**"We'll treat everyone the same."** Equality and equity are different. Treating everyone identically means ignoring the fact that some people need different things to do their best work. That is not special treatment. It is sensible management.

Over 70% of neurodivergent employees say myths and misinformation affect how they are treated at work. Only 28% of managers feel confident separating fact from myth. That gap is where problems start.`
  },
  {
    question: "What is the link between masking and burnout?",
    tags: ["masking", "wellbeing", "workplace"],
    answer: `Masking is the act of hiding or suppressing your natural behaviours to meet social or workplace expectations. Copying how other people talk, sit, make eye contact, respond to jokes, handle sensory input. It starts young for most neurodivergent people and it becomes automatic.

The problem is it never stops costing energy. Every interaction where you are performing rather than being yourself drains your battery. And eventually the battery runs flat.

**The data is clear.** 81% of neurodivergent employees mask at work, often daily. Masking is linked to a 3 times higher risk of burnout. Only 14% of HR professionals say they feel confident recognising the signs. And masking is more common among women and ethnic minority employees, which means the intersectional risk is even higher.

What makes this tricky for employers is that the people who mask best are the ones who look like they are coping best. The employee who never complains, never asks for help, always delivers on time. They might be the one closest to breaking point.

The answer is not to demand people unmask. That is not safe or fair. The answer is to create environments where masking is not required to succeed. Where people can communicate in the way that works for them, take breaks when they need to, and be valued for their output rather than their performance of normality.`
  },
  {
    question: "Should we rethink how we do reasonable adjustments?",
    tags: ["workplace", "adjustments", "employers", "HR"],
    answer: `Yes. The traditional "reasonable adjustments" model has limitations that most HR teams already feel but struggle to articulate.

The problem is that "reasonable adjustments" implies both parties already know what is needed and that support is a one-off fix. In reality, many neurodivergent employees are still working out how their environment affects them. Some may not even realise their experiences relate to neurodivergence at all.

This means the people most in need of support may not use the term "reasonable adjustment," may not have a formal diagnosis, and may not know what to ask for. But their challenges are still real.

**What works better is a collaborative process.** Instead of a formal adjustment request, use a strengths and challenges conversation. What is working well? What is getting in the way? What small changes might help? This is lighter, less clinical, and more likely to be used by people who would never go through a formal process.

The Birkbeck research found that **50% of employees with tailored adjustments said they would stay**, compared to only 33% without any adjustments who said they would definitely leave. But adjustments alone were not enough. Psychological safety and career progression mattered more.

So yes, keep making adjustments. But rethink the process. Make it conversational, ongoing, and available to everyone, not just people with a diagnosis and the confidence to ask.`
  },
  // ── From Strategic Economic Case ──
  {
    question: "What happens when companies pull back on diversity and inclusion?",
    tags: ["workplace", "employers", "DEI", "business-case"],
    answer: `They lose. The data is unambiguous on this.

There has been a backlash against diversity efforts, particularly in the US. Some companies have scaled back or dropped their DEI programmes under political pressure. But here is what the evidence actually shows:

**Employees notice.** Culture Amp found a 64-point engagement gap between employees who believe their company values diversity and those who do not. Workers who see a lack of commitment to diversity are 3.3 times more likely to leave within a year.

**Innovation drops.** When psychological safety declines, neurodivergent employees stop contributing their most creative thinking. The Birkbeck 2024 research showed exactly this: a drop in perceived safety correlated with reduced reports of innovation, creativity, and entrepreneurialism.

**The financial case stands.** McKinsey found companies in the top quartile for diversity were 25-36% more likely to financially outperform their peers. Companies perceived to value diversity enjoy 6.8% higher stock prices on average.

**Legal risk increases.** Under the UK Equality Act, employers have obligations to ensure equality and make reasonable adjustments. Pulling back on inclusion increases exposure to discrimination claims.

The narrative that DEI has "failed" conflates poor implementation with a failure of the concept. The solution to ineffective inclusion is to do it better, not to abandon it. The organisations that hold their nerve on this are the ones building long-term competitive advantage.`
  },
  {
    question: "Why do neurodivergent people struggle to get hired?",
    tags: ["workplace", "recruitment", "employers"],
    answer: `Because hiring processes are built around neurotypical social norms, not job performance.

The Buckland Review of Autism Employment found that **only 3 in 10 autistic adults in the UK are employed**, the lowest employment rate of any disability group. Many autistic graduates are underemployed in jobs far below their qualifications.

The interview is the biggest barrier. Traditional interviews reward confidence, eye contact, small talk, rapid verbal responses, and the ability to perform under social pressure. None of these things predict job performance. But they are exactly the areas where many neurodivergent people struggle.

70% of autistic adults are unemployed. Not because they cannot do the work, but because they cannot get past the gatekeeper.

**What works instead:**
- Working interviews or practical assessments that test actual skills
- Written questions provided in advance
- Clear, specific job descriptions that focus on real requirements
- Removing unnecessary social components from the process
- Offering alternative interview formats

Microsoft redesigned their hiring process to suit neurodivergent candidates and found it led to better role fit and performance for all hires. When you focus on skills over social style, everyone benefits.

The talent is there. The barrier is the process.`
  },
  {
    question: "What role do line managers play in neuroinclusion?",
    tags: ["workplace", "employers", "managers"],
    answer: `They are the single most important factor. The research is consistent on this.

In both the 2023 and 2024 Birkbeck studies, **line managers were the number one source of support** for neurodivergent employees. Not HR. Not occupational health. Not employee assistance programmes. The line manager.

That is both the opportunity and the problem. Because only 1 in 5 UK managers feels confident giving feedback to someone they believe is neurodivergent. Only 15% say they are confident recognising neurodivergent traits. And most have received no specific training.

So we have a situation where the person who matters most has the least support. That needs to change.

What good line management for neurodivergent staff looks like:

1. **Clear expectations.** Say what you need, when you need it, and what "good" looks like. Do not leave things implied.
2. **Consistent check-ins.** Regular, predictable conversations rather than sporadic feedback.
3. **Flexibility in how work gets done.** Focus on output, not on how someone sits, speaks, or organises their day.
4. **Psychological safety.** Make it safe to say "I did not understand that" or "I need this done differently."
5. **Not taking things personally.** Direct communication is not rudeness. Different body language is not disengagement.

The 2024 research found that while line manager support was rated positively, broader organisational support was worsening. That increases pressure on individual managers as the system around them weakens. They need training, they need tools, and they need backing from senior leadership.`
  },
  {
    question: "Is neurodiversity just a trend that will pass?",
    tags: ["foundations", "workplace"],
    answer: `No. And I understand why people ask this, because the speed of change can feel sudden.

But neurodivergent people have always existed. What has changed is our willingness to talk about it. The same thing happened with left-handedness. In the 1920s, only about 3% of people were recorded as left-handed because it was actively suppressed. By the 1960s, when they stopped forcing children to switch, the figure rose to around 12%, where it has stayed. The left-handed people were always there. Society just stopped hiding them.

The same is happening with neurodiversity. Diagnosis rates for ADHD in UK adults have risen by more than 400% in the last two decades, especially among women and professionals. That is not an epidemic. It is recognition.

53% of Gen Z self-identify as neurodivergent or having some neurocognitive condition. By 2029, Millennials and Gen Z will make up about 72% of the workforce. Whether or not every one of those self-identifications leads to a formal diagnosis, the direction of travel is clear: neurodiversity awareness is entering the mainstream.

Companies that treat this as a passing fad will find themselves unable to recruit or retain the next generation of talent. Companies that build neuroinclusive cultures now are investing in their future workforce.

This is not a trend. It is a correction. And it is not going away.`
  },
  {
    question: "What is a neuroinclusive workplace and how do you build one?",
    tags: ["workplace", "employers", "neuroinclusion"],
    answer: `A neuroinclusive workplace is one where people with different cognitive styles can do their best work without having to fight the environment to get there. It does not depend on diagnosis, disclosure, or special programmes. It depends on design.

Here is what that looks like in practice:

**1. Start with systems, not slogans.** Inclusion does not happen through values statements. It happens through how jobs are designed, feedback is given, meetings are run, and support is accessed.

**2. Design for flexibility.** Not everyone works best in the same environment, at the same hours, or in the same way. Build in options for where, when, and how work gets done.

**3. Make expectations clear.** Ambiguity is the enemy. Say what you mean, define what "good" looks like, and do not rely on implied social rules that some people will not pick up.

**4. Invest in line managers.** They are your front line. Give them training, tools, and confidence to support people without needing a clinical background.

**5. Measure psychological safety.** If people do not feel safe to be themselves, nothing else matters. Anonymous check-ins and feedback loops can surface where safety is low.

**6. Review your processes.** Recruitment, onboarding, performance reviews, disciplinary procedures. Ask what assumptions each one makes about how people behave or communicate.

The Birkbeck research recommended "holistic neuroinclusion which is comprehensive, not condition-specific" and "thinking about neurodiversity in design, rather than as a response when problems have surfaced."

That is the goal. Prevention over reaction. Design over diagnosis. Everyone benefits.`
  },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const adminPin = req.headers.get("x-admin-pin");
    if (adminPin !== Deno.env.get("ADMIN_PIN")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

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

    if (error) {
      console.error("Upsert error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ inserted: data?.length ?? 0, slugs: data?.map((d: any) => d.slug) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("seed-qa-batch3 error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
