/**
 * FAQ items for each blog post, keyed by slug.
 * Rendered as "Questions leaders often ask" sections and FAQ JSON-LD schema.
 */
export const blogFaqs: Record<string, { question: string; answer: string }[]> = {
  "adhd-at-work-system-problem": [
    { question: "Do managers need to know if someone has ADHD?", answer: "No. Managers do not need a diagnosis to provide good support. Understanding how someone works best and removing unnecessary friction benefits everyone, whether or not ADHD is involved." },
    { question: "Are workplace adjustments for ADHD expensive?", answer: "Most adjustments cost nothing. Clearer instructions, flexible scheduling, and reducing unnecessary interruptions are free changes that often improve performance across the whole team." },
    { question: "What if an employee has not disclosed a diagnosis?", answer: "Many neurodivergent employees choose not to disclose. The best approach is to design work environments that support different thinking styles by default, rather than waiting for someone to ask." },
  ],
  "hidden-cost-of-masking-adhd": [
    { question: "How do I know if someone on my team is masking?", answer: "Masking is often invisible by design. Signs can include inconsistent performance, sudden burnout, or an employee who appears capable but regularly struggles with tasks that seem straightforward. Creating a safe environment for honest conversations is more effective than trying to spot it." },
    { question: "Is masking always a conscious choice?", answer: "Not always. Many neurodivergent people have learned to mask from a very young age. It becomes automatic, which makes it harder to recognise and harder to stop." },
    { question: "What can managers do to reduce the need for masking?", answer: "Focus on outcomes rather than how work gets done. Create space for different communication styles. Make it clear that asking for support is a sign of self-awareness, not weakness." },
  ],
  "adhd-not-motivation-problem": [
    { question: "Is ADHD really about attention?", answer: "ADHD is more accurately described as a condition affecting executive function. This includes working memory, task initiation, time perception, and emotional regulation. Attention is one part of a much larger picture." },
    { question: "Can someone with ADHD focus on things they enjoy but not on routine tasks?", answer: "Yes. This is a hallmark of ADHD and relates to how the dopamine system works. Interest-driven attention is not a choice. Understanding this helps managers design tasks that work with the brain rather than against it." },
    { question: "Should performance management be different for someone with ADHD?", answer: "The standards can remain the same. What often needs to change is how work is structured, how instructions are delivered, and how progress is measured. The goal is to remove unnecessary barriers, not lower expectations." },
  ],
  "factor-n-neurodivergent-profile": [
    { question: "What if someone shows neurodivergent traits but has no diagnosis?", answer: "Many people experience significant neurodivergent traits without meeting formal diagnostic criteria. Supporting people based on how they work, rather than whether they have a label, is both more practical and more inclusive." },
    { question: "Is Factor N a clinical term?", answer: "No. Factor N is a concept used to describe the shared underlying characteristics that appear across different neurodivergent profiles. It helps organisations move beyond labels towards practical understanding." },
    { question: "How does this change how organisations should approach neurodiversity?", answer: "It shifts the focus from specific diagnoses to understanding cognitive differences more broadly. This means organisations can support a much wider group of employees more effectively." },
  ],
  "dyslexia-dyscalculia-workplace": [
    { question: "Can someone with dyslexia succeed in a text-heavy role?", answer: "Absolutely. Many people with dyslexia thrive in roles that require reading and writing, particularly when information is presented clearly and they have access to assistive tools. The key is removing unnecessary barriers, not limiting opportunity." },
    { question: "Are employers legally required to support dyslexic employees?", answer: "Under the Equality Act 2010, employers have a duty to make reasonable adjustments for employees with disabilities, which can include dyslexia and dyscalculia. Early, proactive support reduces legal risk and improves retention." },
    { question: "What are simple adjustments for dyscalculia?", answer: "Providing calculators, using visual representations of numerical data, allowing extra time for number-heavy tasks, and breaking complex calculations into smaller steps. These are low-cost changes that make a significant difference." },
  ],
  "dyspraxia-in-the-workplace": [
    { question: "Is dyspraxia just about clumsiness?", answer: "No. Dyspraxia, also known as Developmental Coordination Disorder, affects motor planning, spatial awareness, and often working memory and organisation. Many people with dyspraxia are highly capable but struggle with tasks that require fine motor skills or physical coordination." },
    { question: "What adjustments help employees with dyspraxia?", answer: "Allow extra time for tasks requiring fine motor skills, provide digital alternatives to handwriting, reduce hot-desking so the environment stays predictable, and focus on outcomes rather than how physically neat the work looks." },
  ],
  "co-occurring-neurodivergent-conditions": [
    { question: "Is it common to have more than one neurodivergent condition?", answer: "Very common. Research suggests that co-occurrence is the norm rather than the exception. Someone with ADHD, for example, is significantly more likely to also have dyslexia, autism, or anxiety than the general population." },
    { question: "How should organisations support someone with multiple conditions?", answer: "Focus on the individual rather than the label. A conversation about how someone works best will always be more useful than trying to address each diagnosis separately. Flexibility and clarity matter more than clinical knowledge." },
  ],
  "is-dei-dead": [
    { question: "Has DE&I failed?", answer: "The principles behind DE&I remain important. What has often failed is the implementation. When inclusion feels like compliance rather than genuine understanding, it creates resistance rather than progress." },
    { question: "What is Difference Intelligence?", answer: "It is a practical approach that focuses on understanding and leveraging cognitive differences within teams. Rather than treating diversity as a box to tick, it treats it as a strategic advantage that improves performance when properly supported." },
  ],
  "grit-wont-save-children": [
    { question: "Is resilience bad for neurodivergent children?", answer: "Resilience itself is not the problem. The problem is expecting children to be resilient in environments that were never designed for how their brains work. True resilience comes from support, understanding, and removing unnecessary barriers." },
    { question: "What should schools focus on instead of grit?", answer: "Understanding how each child learns best, creating environments that reduce unnecessary cognitive load, and building relationships where children feel safe to ask for help. These foundations make genuine resilience possible." },
  ],
  "real-diagnosis-outdated-systems": [
    { question: "Are diagnostic systems outdated?", answer: "Many were designed decades ago and do not fully reflect current understanding of neurodevelopmental differences. They can be a helpful starting point, but organisations should not wait for a diagnosis before offering practical support." },
    { question: "What can organisations do while systems catch up?", answer: "Focus on how people work rather than waiting for clinical labels. Build environments that support different thinking styles by default. Train managers to have practical, supportive conversations about working preferences." },
  ],
  "screens-dopamine-neurodivergent-children": [
    { question: "Is screen time worse for neurodivergent children?", answer: "It is not necessarily worse, but the dopamine response can be more intense for neurodivergent children, making the transition away from screens significantly harder. Understanding this helps parents respond with empathy rather than frustration." },
    { question: "Should parents ban screens entirely?", answer: "Complete bans rarely work and can create more conflict. A more effective approach is managing transitions, offering alternative dopamine sources through physical activity or creative play, and reducing the abruptness of screen removal." },
  ],
  "after-school-meltdown-neurodivergent-children": [
    { question: "Why does my child fall apart after school but not during it?", answer: "Many neurodivergent children spend the school day masking, regulating, and holding themselves together. Home is where they feel safe enough to release that pressure. The meltdown is not about home. It is about the accumulated demand of the day." },
    { question: "Is the after-school meltdown a sign of bad parenting?", answer: "No. It is a sign that your child trusts you enough to show you how they really feel. It means home is the safe space. That is something to protect, not something to feel guilty about." },
  ],
  "system-failing-neurodivergent-children": [
    { question: "Is the SEND system getting better?", answer: "Reform is underway, but progress is slow and inconsistent. Many families still face long waiting times, unclear processes, and inadequate support. Understanding your rights and building practical strategies at home remains essential." },
    { question: "What can parents do while waiting for support?", answer: "Learn about how your child's brain works. Build routines that reduce unnecessary friction. Connect with other parents in similar situations. And remember that understanding your child is the most powerful tool you have." },
  ],
  "why-modern-workplaces-break-neurodivergent-people": [
    { question: "Are open-plan offices bad for neurodivergent employees?", answer: "For many, yes. Open-plan environments create sensory overload, constant interruptions, and unpredictable noise levels. Providing quiet spaces, allowing noise-cancelling headphones, and offering flexible working arrangements can make a significant difference." },
    { question: "What is the biggest barrier to neuroinclusion at work?", answer: "The assumption that everyone processes information, communicates, and manages energy in the same way. Once organisations challenge that assumption, practical improvements follow quickly." },
  ],
  "neurodiversity-explained-for-organisations": [
    { question: "What percentage of the workforce is neurodivergent?", answer: "Current estimates suggest between 15 and 20 percent of the population is neurodivergent. In practical terms, every organisation already employs neurodivergent people, whether they know it or not." },
    { question: "Where should organisations start with neurodiversity?", answer: "Start with understanding. Build awareness among leaders and managers, then move quickly to practical tools that change how work is designed, communicated, and managed. Awareness without action has limited value." },
  ],
  "adhd-in-the-workplace-what-leaders-need-to-understand": [
    { question: "Should leaders disclose their own neurodivergence?", answer: "That is a personal decision. However, leaders who share their experiences often create safer environments for others to do the same. It can be a powerful signal that neurodivergent thinking is valued, not just tolerated." },
    { question: "What is the business case for supporting ADHD at work?", answer: "ADHD employees often bring exceptional creativity, problem solving, and energy. When properly supported, they can outperform in roles that leverage these strengths. The cost of not supporting them is higher turnover, more sick days, and lost talent." },
  ],
  "neurodivergent-children-cognitive-battery-classroom": [
    { question: "Why is my child exhausted after school even though they seem fine there?", answer: "Neurodivergent children often use far more cognitive energy than their peers to navigate the school environment. By the end of the day, their cognitive battery is depleted, even if they appeared to cope during school hours." },
    { question: "How can teachers help preserve cognitive energy?", answer: "Build in regular breaks, reduce unnecessary transitions, allow movement, and present information in multiple formats. Small changes in how the day is structured can significantly reduce the cognitive load on neurodivergent pupils." },
  ],
  "neurodivergent-children-masking-mental-health": [
    { question: "How do I know if my child is masking at school?", answer: "If your child appears to cope well at school but struggles significantly at home, masking is likely. Other signs include emotional exhaustion after social situations, sudden behaviour changes between settings, and anxiety about fitting in." },
    { question: "Is masking harmful long-term?", answer: "Yes. Sustained masking is associated with anxiety, depression, identity confusion, and burnout. The earlier children can access environments where they feel safe to be themselves, the better their long-term mental health outcomes." },
  ],
  "adhd-dopamine-risk-adolescence-neurodivergent": [
    { question: "Why do teenagers with ADHD take more risks?", answer: "The ADHD brain seeks dopamine more actively than a neurotypical brain. During adolescence, when risk-taking naturally increases, this can lead to more intense thrill-seeking behaviour. Understanding this as neurological rather than defiant changes how parents and teachers respond." },
    { question: "How can parents help manage risk-taking?", answer: "Provide healthy sources of dopamine through sport, creative activities, and structured challenges. Avoid moralising risk-taking behaviour and instead help your teenager understand their own brain and what drives their impulses." },
  ],
  "parent-carer-burnout-neurodivergent-children-support": [
    { question: "Is it normal to feel burnt out as a parent of a neurodivergent child?", answer: "Completely normal. Parenting a neurodivergent child often involves navigating complex systems, managing daily challenges that others do not face, and carrying emotional weight that is rarely acknowledged. Recognising burnout is the first step towards managing it." },
    { question: "Where can parents find support?", answer: "Connecting with other parents in similar situations can be transformative. Our parent workshops and community resources are designed to provide practical support and reduce the isolation that many families experience." },
  ],
  "late-diagnosis-neurodivergence-children-adults-impact": [
    { question: "Is it too late for my child to benefit from a diagnosis?", answer: "It is never too late. Understanding how someone's brain works, at any age, creates opportunities for better support, self-understanding, and practical strategies that improve daily life." },
    { question: "Why are so many people diagnosed late?", answer: "Many neurodivergent people, particularly women and those who mask effectively, are overlooked by systems that rely on outdated stereotypes. Greater awareness and more nuanced assessment approaches are slowly improving this, but significant gaps remain." },
  ],
  "dark-side-of-parent-workshops": [
    { question: "Are parent workshops useful for neurodivergent families?", answer: "Standard parenting workshops can be helpful, but they often assume a neurotypical child. When strategies do not account for neurodivergent differences, they can leave parents feeling more frustrated and isolated. Workshops designed specifically for neurodivergent families are far more effective." },
  ],
  // Industry blogs
  "neurodiversity-in-engineering": [
    { question: "Do neurodivergent engineers need different management?", answer: "Not different management, but clearer management. Many neurodivergent engineers thrive with well-defined expectations, structured communication, and environments that allow deep focus without unnecessary interruption." },
    { question: "What strengths do neurodivergent people bring to engineering?", answer: "Pattern recognition, systems thinking, attention to detail, and the ability to hold complex models in working memory. These are precisely the capabilities that engineering demands." },
  ],
  "neurodiversity-in-corporate-environments": [
    { question: "Is neuroinclusion just another HR initiative?", answer: "It should not be. Neuroinclusion, when done properly, is a performance strategy. It improves how teams communicate, how work is designed, and how organisations retain talent. It belongs in operations, not just HR." },
  ],
  "neurodiversity-in-charity-sector": [
    { question: "Can charities afford to invest in neuroinclusion?", answer: "The question is whether they can afford not to. High staff turnover, volunteer disengagement, and burnout are costly. Simple adjustments to how work is structured and communicated can reduce these costs significantly." },
  ],
  "neurodiversity-in-legal-sector": [
    { question: "Is neurodiversity relevant to the legal profession?", answer: "Highly relevant. The legal profession demands skills where many neurodivergent people excel, including analytical thinking, pattern recognition, and meticulous attention to detail. The barrier is often the working environment, not the capability." },
  ],
  "neurodiversity-in-emergency-services": [
    { question: "Can neurodivergent people work in emergency services?", answer: "Many already do, often very successfully. The ability to stay calm under pressure, process complex information rapidly, and spot details others miss are common neurodivergent strengths that align well with emergency service demands." },
  ],
  "neurodiversity-in-rail": [
    { question: "Why should rail operators focus on neuroinclusion?", answer: "Rail operations require precision, reliability, and safety awareness. These are areas where many neurodivergent employees naturally excel. Supporting them properly improves operational performance and reduces avoidable errors." },
  ],
  "neurodiversity-in-sales": [
    { question: "Can neurodivergent people succeed in sales?", answer: "Many neurodivergent people are outstanding in sales roles. Hyperfocus, creative problem solving, and genuine passion for building relationships are common strengths. The key is structuring targets and workflows in ways that support these qualities." },
  ],
  "neurodiversity-in-contact-centres": [
    { question: "Is contact centre work suitable for neurodivergent people?", answer: "With the right support, absolutely. Clear scripts, predictable workflows, and structured breaks can help neurodivergent employees thrive. Many bring exceptional attention to detail and genuine empathy to customer interactions." },
  ],
  "neurodiversity-in-defence": [
    { question: "How relevant is neurodiversity to defence organisations?", answer: "Extremely relevant. Strategic thinking, pattern recognition, and the ability to process complex information under pressure are critical in defence contexts. Many neurodivergent people bring exactly these capabilities." },
  ],
  "neurodiversity-in-retail-hospitality": [
    { question: "Why is turnover so high among neurodivergent retail staff?", answer: "Often because onboarding and management practices do not account for different processing styles. Simple changes to how training is delivered and how managers communicate can significantly improve retention in the first few months." },
  ],
  // New practical tools blogs
  "strengths-and-challenges-mapping": [
    { question: "Is strengths mapping the same as a psychometric test?", answer: "No. It is a structured conversation, not a test. The purpose is to understand how someone works best in practice, not to score them against a standard. It is practical, collaborative, and designed to improve how work is designed." },
    { question: "Do employees need a diagnosis for this to work?", answer: "Not at all. Strengths and challenges mapping works for everyone. It is about understanding working preferences and cognitive patterns, regardless of whether someone has a formal diagnosis." },
    { question: "How long does the mapping process take?", answer: "The initial conversation typically takes around an hour. The value, however, is ongoing. It creates a shared understanding that improves communication, task design, and team performance over time." },
  ],
  "communication-tools-for-managers": [
    { question: "Will clearer communication slow things down?", answer: "Quite the opposite. Unclear communication creates confusion, rework, and unnecessary follow-up. Investing a few extra minutes in clarity at the start saves significant time later." },
    { question: "What is the single most effective communication change a manager can make?", answer: "Confirming key instructions in writing. A brief follow-up message after a verbal discussion removes ambiguity and gives people a clear reference point. It takes seconds and prevents hours of confusion." },
  ],
  "inclusive-meeting-frameworks": [
    { question: "Will inclusive meetings take longer?", answer: "Well-structured inclusive meetings are often shorter than traditional ones. Clear agendas, defined outcomes, and structured discussion reduce the tangents and repetition that make many meetings unnecessarily long." },
    { question: "What if some team members prefer the current format?", answer: "Inclusive meeting practices benefit everyone, not just neurodivergent employees. Most people appreciate clearer agendas, better preparation, and more focused discussions. The changes are universally positive." },
  ],
  "workplace-adjustment-guidance": [
    { question: "Are workplace adjustments expensive?", answer: "The vast majority cost nothing. Clearer instructions, quieter spaces, flexible working arrangements, and structured check-ins are all free. The cost of not making adjustments, through lost productivity and higher turnover, is far greater." },
    { question: "What if other employees think adjustments are unfair?", answer: "Good management means giving people what they need to perform, which is different for everyone. When this is framed as standard good practice rather than special treatment, resistance is rare." },
  ],
  "benchmarking-and-psychological-safety": [
    { question: "How do you measure psychological safety?", answer: "Through structured surveys, team conversations, and analysis of communication patterns. The goal is to understand how safe people feel to speak openly, raise concerns, and contribute ideas without fear of negative consequences." },
    { question: "What does a good benchmarking score look like?", answer: "There is no single target. The value is in understanding where your organisation is now, where the gaps are, and where focused effort will have the greatest impact. Progress matters more than a perfect score." },
  ],
  "role-design-and-manager-conversation-guides": [
    { question: "How do I know if a role needs redesigning?", answer: "If capable employees are consistently struggling, if the role has expanded significantly over time, or if performance issues keep recurring despite good people being in the job, the role itself may be the problem rather than the person." },
    { question: "What is the best way to start a difficult conversation with an employee?", answer: "Begin with curiosity rather than assumptions. A question like 'help me understand how this is working for you' opens the door to insight without putting the employee on the defensive." },
  ],
};
