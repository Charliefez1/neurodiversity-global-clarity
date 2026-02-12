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
  // ── Foundations ──
  {
    question: "What is neurodiversity?",
    tags: ["foundations"],
    answer: `Neurodiversity is the natural variation in the human brain. That is it. Not a disease. Not a trend. Not something that needs fixing.

Every brain is wired differently. Some people process the world through a filter that society calls "normal" and some do not. Neither is better. Neither is worse. They are just different.

The word was coined by Judy Singer in the late 1990s. She is an autistic sociologist who pointed out something obvious: human brains are as varied as human faces. We would never try to make everyone's face look the same. So why do we keep trying to make everyone's brain work the same way?

Around 15 to 20 percent of the global population are neurodivergent. That is nearly two billion people. This is not a small group. This is not a niche. This is a fundamental part of who we are as a species.`
  },
  {
    question: "What is the difference between neurodivergent and neurotypical?",
    tags: ["foundations"],
    answer: `Think of a motorway. Most people are driving in the middle lanes. They process information, communicate, and navigate the world in roughly the same way. That is neurotypical. Not better. Just the majority pattern.

Neurodivergent people are in the outside lanes. They are still on the same motorway, going in the same direction, but their route looks different. Their brains process information differently. They might take in more sensory data, or less. They might think in pictures instead of words. They might need movement to concentrate.

The important thing is this: being in a different lane does not mean you are lost. It means you are taking a different route. And sometimes that route sees things the middle lanes completely miss.`
  },
  {
    question: "Is neurodivergence a disability?",
    tags: ["foundations"],
    answer: `It can be disabling. But the disability often sits in the environment, not in the person.

Put a dyslexic person in front of a timed written exam and they look disabled. Put them in a design studio and they might outperform everyone in the room. The brain did not change. The environment did.

Under the Equality Act 2010, many neurodivergent conditions are classed as disabilities because they have a substantial and long-term effect on day-to-day activities. That legal protection matters. It means employers and schools have a duty to make reasonable adjustments.

But here is what I always say: the word "disability" describes what happens when a system is not built for you. It does not describe who you are.`
  },
  {
    question: "How common is neurodivergence?",
    tags: ["foundations"],
    answer: `The research says around 15 to 20 percent of the population. That is roughly one in five people. In a team of ten, two of them are neurodivergent. In a school classroom, five or six children.

But here is where it gets interesting. Recent surveys show 53 percent of Gen Z self-identify as neurodivergent. That is not because there is an epidemic. It is because younger generations grew up with language for what they were experiencing. They had the words. Previous generations did not.

Think about left-handedness. In the 1970s, roughly 3 percent of people were left-handed. Today it is about 12 percent. The number of left-handed people did not change. We just stopped forcing them to use their right hand. The same thing is happening with neurodivergence. We are not creating it. We are just stopping the suppression.`
  },

  // ── ADHD ──
  {
    question: "What is ADHD?",
    tags: ["ADHD"],
    answer: `ADHD stands for Attention Deficit Hyperactivity Disorder. But that name is misleading. It is not a deficit of attention. It is a difficulty regulating attention.

At the core, ADHD is about dopamine. The ADHD brain does not produce enough of it, or does not use it efficiently. Dopamine is the chemical that helps you feel motivated, focused, and satisfied. When you do not have enough of it, your brain goes searching. That search can look like fidgeting, interrupting, losing things, or jumping from task to task.

But it can also look like brilliance. When an ADHD brain finds something genuinely interesting, it locks on with an intensity that neurotypical brains cannot match. That is hyperfocus. It is not a contradiction. It is the same mechanism working in the other direction.

ADHD affects roughly 5 to 7 percent of children and about 3 to 4 percent of adults. But adult diagnosis is rising fast because for decades it was seen as a childhood condition that people "grew out of." They did not grow out of it. They just learned to mask it.`
  },
  {
    question: "What is dopamine searching?",
    tags: ["ADHD", "dopamine"],
    answer: `When your brain does not produce enough dopamine, it goes looking for it. That is dopamine searching. It is not a choice. It is your nervous system trying to get to baseline.

It can look like scrolling your phone for hours. Picking arguments. Starting new projects and abandoning old ones. Eating sugar. Taking risks. Saying something impulsive in a meeting. All of these are dopamine-seeking behaviours.

But it can also look like starting a business at 2am. Writing an entire report in one sitting. Coming up with the idea that nobody else in the room could see. The creative leaps, the lateral thinking, the ability to connect dots that others cannot. That is also dopamine searching. The brain found something interesting enough to lock onto.

The behaviour looks very different depending on the context. In a boring meeting, it looks like a problem. In a creative sprint, it looks like a superpower. Same brain. Same mechanism. Different environment.`
  },
  {
    question: "Is everyone getting an ADHD diagnosis these days?",
    tags: ["ADHD", "foundations"],
    answer: `No. But more people are being identified, and that is a good thing.

Think about left-handedness again. In the 1970s, about 3 percent of the population was recorded as left-handed. Now it is 12 percent. The number of left-handed people did not suddenly quadruple. We just stopped punishing them for using their left hand.

The same thing is happening with ADHD. For decades, it was seen as a childhood behaviour problem that only affected hyperactive boys. Girls were missed because they presented differently. Adults were missed because "you cannot have ADHD as an adult." Quiet, inattentive types were missed because they were not bouncing off walls.

We are not in an ADHD epidemic. We are in an awareness correction. The people getting diagnosed now have always been ADHD. They just spent decades thinking they were lazy, stupid, or not trying hard enough. Getting a diagnosis is not a trend. For most people, it is the first time their experience has been properly understood.`
  },
  {
    question: "What is hyperfocus?",
    tags: ["ADHD"],
    answer: `Hyperfocus is what happens when an ADHD brain finds something genuinely stimulating. Everything else falls away. Time disappears. The outside world stops existing. The brain locks on and does not let go.

It is not a contradiction to ADHD. It is the same mechanism. The ADHD brain struggles to filter what to pay attention to. Most of the time that means everything competes for attention and nothing wins. But when something is genuinely interesting or urgent, the filter flips the other way. Everything irrelevant gets cut out completely and all the brain's resources go to one thing.

This is where some of the greatest work happens. The ability to go deep on a problem for hours without distraction. To see patterns that other people miss because they never stayed with the problem long enough. To produce in four hours what might take others two days.

The downside is that it is not controllable. You cannot choose when it happens. And it often fires on things that are interesting rather than important. That is the challenge. But the capacity itself is genuinely remarkable.`
  },

  // ── Autism ──
  {
    question: "What is autism?",
    tags: ["autism"],
    answer: `Autism is a different way of processing the world. The autistic brain takes in more sensory information, processes social cues differently, and often thinks in patterns and systems rather than social hierarchies.

Imagine your sensory system is turned up to full volume. The hum of the lights, the texture of your clothes, the conversations happening three tables away. Most brains filter that out automatically. The autistic brain does not. It takes it all in, all the time.

That is exhausting. But it also means autistic people notice things that others miss. Details. Patterns. Inconsistencies. The things that everyone else walks past.

Autism is a spectrum, but not in the way most people think. It is not a line from "a bit autistic" to "very autistic." It is more like a mixing desk with dozens of dials. Sensory processing, social communication, routine and flexibility, special interests, motor skills. Each one is set differently for each person.

One in 57 people in the UK are autistic. Many of them are undiagnosed, especially women and girls, because the diagnostic criteria were built around how autism presents in boys.`
  },
  {
    question: "Why do autistic people struggle in social situations?",
    tags: ["autism"],
    answer: `It is not that autistic people do not want to connect. Most do. It is that the social world runs on a set of unwritten rules that nobody ever explains.

Neurotypical communication is full of subtext. Saying "I'm fine" when you are not. Knowing when a pause means you should stop talking. Reading a facial expression from across the room. These things happen automatically for most people. For autistic people, each one requires conscious processing. It is like doing maths in your head while everyone else has a calculator.

The energy cost is enormous. Every social interaction involves translating. What did they mean by that? Was that sarcasm? Should I look at their eyes or is that too much? Am I talking too long about this? The answers do not come naturally, so they have to be worked out in real time.

Many autistic people become incredibly skilled at this translation. They study people. They learn scripts. They build a database of social responses. From the outside, they look fine. From the inside, they are running a full-time translation service that never switches off. That is masking. And it is one of the most exhausting things a human being can do.`
  },
  {
    question: "What is masking?",
    tags: ["autism", "ADHD", "foundations"],
    answer: `Masking is when a neurodivergent person copies neurotypical behaviour to fit in. It is learning to make eye contact even when it feels uncomfortable. Suppressing a stim because people stare. Forcing small talk when your brain wants to talk about the thing you actually care about. Hiding your struggles so nobody asks questions.

It starts young. A child notices they are different. They get told off for things that feel natural. They watch the other children and start copying. By the time they are a teenager, the mask is so well-practised that nobody can see behind it. Including, sometimes, the person wearing it.

Masking is a survival strategy. It works. But it comes at a cost. Anxiety. Depression. Burnout. A loss of identity so deep that some people reach adulthood not knowing who they actually are underneath all the performance.

Women and girls are particularly good at masking, which is one reason they are diagnosed later and less often. They do not look autistic or ADHD by traditional standards. But the effort of maintaining that appearance is destroying them quietly.

When someone unmasks, when they finally feel safe enough to stop performing, the relief is enormous. But so is the vulnerability. That is why psychological safety matters so much.`
  },

  // ── Other conditions ──
  {
    question: "What is dyslexia?",
    tags: ["conditions"],
    answer: `Dyslexia has nothing to do with intelligence. Let me say that again. Nothing.

Dyslexia is about the route the brain takes to process letters, sounds, and words. Most brains take a direct path. The dyslexic brain takes a different one. It might be longer. It might be less reliable for reading and spelling. But it often passes through areas of the brain that are brilliant at spatial reasoning, pattern recognition, and creative thinking.

About 10 percent of the population is dyslexic. That is roughly 700 million people worldwide. Many of the world's most successful entrepreneurs, designers, and problem-solvers are dyslexic. Not despite their dyslexia. Because of how their brain is wired.

The problem is that we test intelligence using reading and writing. If you cannot show what you know through text, the system assumes you do not know it. That is a system failure. Not a brain failure.`
  },
  {
    question: "What is dyspraxia?",
    tags: ["conditions"],
    answer: `Think of it like this. Most people's brains are on broadband. The signal between thinking and doing is fast and smooth. A dyspraxic brain is more like dial-up. The signal gets there, but it takes longer and sometimes it drops out along the way.

Dyspraxia affects coordination, spatial awareness, and motor planning. That can mean difficulty with handwriting, tying shoelaces, catching a ball, or judging distances. But it also affects things people do not expect: organising thoughts, following sequences, processing speed, and working memory.

People with dyspraxia are often told they are clumsy or not paying attention. The truth is their brain is working incredibly hard to do things that others take for granted. The effort is invisible. The mistakes are not. That gap is where the frustration lives.

Roughly 5 to 6 percent of the population has dyspraxia. Many of them are never diagnosed because it is less well-known than dyslexia or ADHD. But the impact on daily life can be just as significant.`
  },
  {
    question: "What is Tourette syndrome?",
    tags: ["conditions"],
    answer: `I want you to try something. Try not to blink for the next thirty seconds. Really try. Hold it.

You will notice a few things. First, you become hyper-aware of the urge to blink. It builds. It gets uncomfortable. Eventually, you cannot stop it. The blink happens whether you want it to or not.

That is what a tic feels like. An urge that builds until it has to be released. It might be a sound. A word. A movement. The person knows it is coming. They might be able to delay it briefly. But it is going to happen.

Tourette syndrome involves multiple motor tics and at least one vocal tic. Only about 10 percent of people with Tourette's have coprolalia, the swearing tic that everyone associates with the condition thanks to television. The other 90 percent have tics that are much less dramatic but still exhausting.

Tics are linked to dopamine. The brain is seeking regulation through movement and sound. Stress makes them worse. Relaxation can reduce them. Telling someone to stop their tics is like telling someone to stop blinking. You might manage it for a moment. But the pressure builds.`
  },
  {
    question: "What is RSD (Rejection Sensitive Dysphoria)?",
    tags: ["conditions", "ADHD"],
    answer: `By the age of 10, a neurodivergent child has received on average 20,000 more negative or corrective comments than their neurotypical peers. Twenty thousand. Think about what that does to a developing brain.

RSD is what happens when a nervous system has been trained by years of criticism and correction to expect rejection. It is not being a bit sensitive. It is a physical, visceral response to perceived criticism or exclusion. The emphasis is on perceived. It does not have to be real. The brain fires the same way whether the rejection is actual or imagined.

Someone with RSD might withdraw completely after a minor comment. They might overreact to feedback that was meant to be helpful. They might avoid putting themselves forward because the risk of rejection feels unbearable. Or they might become people-pleasers, working desperately to make sure nobody has a reason to criticise them.

It is not weakness. It is protection. The brain learned that social interactions are dangerous, and now it is trying to keep you safe. The problem is that the protection mechanism is firing too often and too hard.

RSD is most commonly associated with ADHD, but it can appear alongside other neurodivergent conditions. Understanding it changes everything, because once you know what is happening, you can start to separate the feeling from the fact.`
  },
  {
    question: "What is ODD (Oppositional Defiant Disorder)?",
    tags: ["conditions", "parenting"],
    answer: `ODD is one of those labels that makes me uncomfortable. Oppositional Defiant Disorder. The name itself is a judgement. It says the child is the problem.

But when you look underneath the behaviour, what you usually find is a child whose nervous system is overwhelmed. A child who has been corrected so many times that resistance is the only safe place left. A child who has learned that compliance leads to more demands, more failure, more shame. So they dig in. They refuse. They push back. Not because they want to cause trouble, but because saying "no" is the only control they have.

ODD is commonly diagnosed alongside ADHD, autism, and anxiety. That is not a coincidence. When a child is struggling with sensory overload, dopamine regulation, and emotional processing, and the adults around them respond with more rules and more consequences, the child does the only thing left. They fight.

The research increasingly suggests that ODD is not a separate condition. It is a stress response. A survival strategy. The defiance is not the problem. It is a symptom of the problem. And the problem is usually that the child's needs are not being met.`
  },
  {
    question: "What is PDA (Pathological Demand Avoidance)?",
    tags: ["conditions", "autism", "parenting"],
    answer: `PDA is part of the autism spectrum, though it looks very different from what most people expect autism to look like. The core feature is an extreme avoidance of everyday demands. Not just "I do not want to." More like "I physically cannot."

For someone with PDA, demands feel like threats. "Put your shoes on" triggers the same stress response as a genuine danger signal. The nervous system goes into fight, flight, or freeze. It does not matter that the demand is reasonable. It does not matter that the person knows they need to do it. The brain has flagged it as a threat and the survival response has taken over.

This is not defiance. This is fear. The refusal is not coming from a place of power. It is coming from a place of overwhelm.

Traditional parenting and teaching strategies often make PDA worse. Reward charts, consequences, firm boundaries. These all add more demands, which adds more threat, which adds more avoidance. What works is reducing demand, offering choices, using indirect language, and building a sense of safety and control.

PDA is still not well understood by many professionals. Parents often feel blamed, because from the outside it looks like the child is choosing to be difficult. They are not. Their nervous system is making the choice for them.`
  },
  {
    question: "What is sensory processing difference?",
    tags: ["conditions", "autism"],
    answer: `Imagine every sense you have is turned up to maximum. The label in your shirt feels like sandpaper. The lights in the supermarket buzz so loudly you cannot think. The smell of someone's perfume three rows away makes you feel sick. That is sensory hypersensitivity.

Now imagine the opposite. You cannot feel where your body is in space. You bump into things because your brain is not processing the physical feedback properly. You crave deep pressure, strong flavours, loud music, because your brain needs more input to register anything at all. That is sensory hyposensitivity.

Most neurodivergent people experience a mix of both. Oversensitive to some things, undersensitive to others, and it can change depending on stress, tiredness, and environment.

Sensory processing difference is not a separate condition. It runs through autism, ADHD, dyspraxia, and others. It affects what people can eat, wear, tolerate, and enjoy. It affects where they can work, how they learn, and whether they can cope with a trip to the shops.

The world is not designed for sensory difference. Open-plan offices, fluorescent lights, crowded trains, noisy restaurants. These are sensory environments built for the majority. For the 20 percent whose brains process sensory input differently, these spaces can be genuinely painful.`
  },

  // ── Parenting ──
  {
    question: "Are neurodivergent children just badly parented?",
    tags: ["parenting", "families"],
    answer: `No. And I need to be very direct about this because it is one of the most damaging myths out there.

Neurodivergence is biological. It is neurological diversity. It affects nearly two billion people globally. It runs in families. It is visible on brain scans. It is not caused by too much screen time, not enough discipline, or bad parenting.

But the myth persists because neurodivergent children can behave in ways that look like the result of poor parenting. Meltdowns in public. Refusal to follow instructions. Emotional outbursts that seem disproportionate. If you do not understand what is happening underneath, you might look at that and think the parents are failing.

The truth is the opposite. Parents of neurodivergent children are usually working harder than anyone else in the room. They are managing behaviours that other parents never have to deal with. They are fighting school systems, waiting for assessments, researching conditions at midnight, and trying to hold their own mental health together while the world judges them for their child's behaviour.

You are not a bad parent. You are parenting a child whose brain works differently in a world that was not designed for them. That is not the same thing.`
  },
  {
    question: "What is a meltdown and how is it different from a tantrum?",
    tags: ["parenting", "families", "autism"],
    answer: `A tantrum is behaviour. A meltdown is overwhelm. They look similar from the outside but they are completely different things.

A tantrum has a goal. The child wants something and is using behaviour to try to get it. They are still in control, even if it does not look like it. If you give them what they want, the tantrum stops. If they notice nobody is watching, they might dial it down.

A meltdown has no goal. The brain has taken in more than it can process and the system has crashed. The child is not trying to get something. They are in genuine distress. They might scream, cry, lash out, or go completely still. They are not choosing this. Their nervous system has been overwhelmed and it is doing the only thing it can to discharge the stress.

Think about the supermarket moment. The lights are bright, the music is playing, there are people everywhere, the trolley wheel squeaks, you said no to the cereal they wanted. Each thing on its own might be fine. But they stack. And at some point, the last thing lands and the system overloads. That is a meltdown.

You cannot reason with a meltdown. You cannot punish it away. You cannot reward it to stop. You can only keep the child safe, stay calm, and wait for the storm to pass.`
  },
  {
    question: "What should I do during a meltdown?",
    tags: ["parenting", "families"],
    answer: `First: stop harm. If the child is hitting, throwing things, or in danger of hurting themselves, gently and calmly create safety. Move objects. Block without grabbing. Reduce the risk.

Second: stop talking. I know this is hard. Every instinct tells you to reason, explain, comfort. But during a meltdown, the thinking brain is offline. Words become more input. More noise. More overwhelm. Less is more.

Third: do not shout. Raising your voice adds sensory input to a system that is already overloaded. It will make things worse. Every time.

Fourth: wait for the crash. A meltdown has a peak. It will come down. When it does, the child will often be exhausted, confused, and sometimes ashamed. That is the moment for connection. Not a lecture. Not a consequence. Just presence. "I am here. You are safe. That was hard."

And then, later, when everyone is calm and regulated, you can talk about what happened. Not to blame. To understand. What was building up? What sensory input was too much? What can you both do differently next time?

Meltdowns are not a parenting failure. They are information. They tell you the brain reached its limit. Your job is not to prevent them all. Your job is to make them safe and learn from them.`
  },
  {
    question: "My child seems fine at school but falls apart at home. Why?",
    tags: ["parenting", "families"],
    answer: `This is one of the most common things I hear from parents. And it is one of the most misunderstood by schools.

Your child is masking. All day, every day, they are holding it together. Following the rules. Suppressing their needs. Managing the sensory environment. Keeping the social performance running. It takes everything they have.

Then they walk through the front door. They are home. They are safe. And the mask comes off. Everything they held in all day comes out in one go. The tears, the rage, the shutdown, the meltdown. You are not getting the worst of your child. You are getting the download.

Think of it like holding a heavy box. You can do it for a while. You can even smile while you do it. But eventually your arms give out. You do not choose when to drop it. The box falls when the muscles cannot hold it any more. That is what happens at home.

The problem is that school sees a child who copes fine and assumes the parents are exaggerating. "They are no trouble here." That sentence does more damage than most teachers realise. It dismisses the reality of what the family is living with every evening.

If this is your experience, you are not imagining it. Your child is not choosing to be difficult at home. They are processing the cost of surviving a day in an environment that was not built for their brain.`
  },
  {
    question: "What can parents do when the school system is not helping?",
    tags: ["parenting", "families"],
    answer: `This is hard. And I will not pretend it is not. The school system was designed for the neurotypical majority and changing it is slow work.

But here is what you can do right now.

**At home:** reduce pressure. Your child has spent all day under pressure at school. Home needs to be the place where they can decompress. That might mean fewer demands in the evening. Fewer questions about what happened at school. More space to just be.

**Focus on regulation before solutions.** When your child is dysregulated, they cannot learn, problem-solve, or have a productive conversation. Help them get back to baseline first. Then talk.

**Protect the relationship.** When you are fighting the school, fighting the system, and fighting for your child, it is easy to become so focused on the battle that you forget to just be their parent. They need you to be their safe person more than they need you to be their advocate. Both matter, but the relationship comes first.

**Document everything.** When you do engage with school, have notes. Dates, incidents, emails. Not to be difficult, but because patterns matter and memories fade.

**Find your people.** Other parents who get it. Online communities. Local support groups. You cannot do this alone, and you should not have to.`
  },
  {
    question: "Is neurodivergence a superpower?",
    tags: ["parenting", "families", "foundations"],
    answer: `I get asked this a lot. And I understand why people want it to be true. After years of being told there is something wrong with your child, hearing "it is actually a superpower" feels like relief.

But it is not a superpower. And calling it one does not help.

A superpower implies something effortless. Something that always works in your favour. Neurodivergence is not that. It comes with real challenges. Real struggles. Real pain. Telling a child who just had a meltdown in the school corridor that their brain is a superpower does not land well.

It is also not a tragedy. It is not something to grieve. It is not a lesser version of normal.

What it is, is human. Fully, completely human. With strengths that come from adaptation, not from magic. The ADHD brain that hyperfocuses is not wielding a power. It is doing what brains do when dopamine finally arrives. The autistic brain that spots patterns is not superhuman. It is processing information in a different and valid way.

Your child is not a superhero. They are not broken. They are a person with a brain that works differently, living in a world that was mostly built for other people. They deserve support, understanding, and the chance to find their own strengths. Not a cape.`
  },
  {
    question: "How does trauma interact with neurodivergence?",
    tags: ["parenting", "families", "foundations"],
    answer: `They stack. That is the simplest way to put it.

A neurodivergent person already has a nervous system that processes the world more intensely. Add trauma on top and you have a system that is permanently on high alert. The baseline stress level goes up. The capacity to cope goes down. Behaviours that might have been manageable become overwhelming.

I think about a young person I worked with. Let us call him George. ADHD and autistic. Already processing more sensory input than most people can imagine. Then home life fell apart. The trauma did not cause a new condition. It amplified everything that was already there. The anxiety tripled. The meltdowns escalated. The masking collapsed. His nervous system had been running at 80 percent capacity and the trauma pushed it past 100.

The research is clear on this. Neurodivergent people are more likely to experience trauma, more likely to be bullied, more likely to experience adverse childhood events, and more likely to develop PTSD. Their brains are not more fragile. They are more exposed. And when trauma lands on a nervous system that is already working harder than average, the impact is amplified.

This is why understanding neurodivergence and trauma together matters. If you only treat the trauma, you miss the neurodivergence underneath. If you only address the neurodivergence, you miss the trauma responses on top. They are layered. They need to be understood together.`
  },

  // ── Smartphones and dopamine ──
  {
    question: "Why do children struggle when you take the phone away?",
    tags: ["dopamine", "screens", "parenting"],
    answer: `Because you are not just taking away a device. You are removing their primary source of dopamine. And the brain does not respond well to that.

Smartphones deliver dopamine on demand. Every notification, every like, every new video, every level completed. The brain gets a hit. Over time, it adjusts. The baseline level of dopamine shifts upward. The brain starts to expect that level of stimulation as normal.

When you remove the phone, the dopamine supply drops suddenly. The brain goes below its baseline. That is withdrawal. And it looks like this: restlessness, irritability, anxiety, low mood, inability to concentrate, emotional outbursts. Sound familiar? It should. It looks remarkably like ADHD.

The child is not being dramatic. They are not being defiant. Their nervous system is recalibrating. The brain is screaming for stimulation and the thing that provided it has been taken away.

This does not mean phones are evil or that you should never limit access. It means you need to understand what is happening neurologically when you do. A gradual reduction works better than a sudden removal. Replacing screen dopamine with real-world dopamine, movement, social connection, nature, creative activities, helps the brain adjust.`
  },
  {
    question: "Can smartphones cause ADHD?",
    tags: ["dopamine", "screens", "ADHD"],
    answer: `No. ADHD is a neurodevelopmental condition. You are born with it. A smartphone cannot create it.

But, and this is important, dopamine withdrawal from excessive screen use can look almost identical to ADHD. The restlessness, the inability to focus, the impulsivity, the emotional volatility. If you only looked at the behaviour, you might not be able to tell the difference.

That is why this matters. If a child's "ADHD symptoms" are actually dopamine withdrawal from screen overuse, the solution is different. You do not need medication. You need to regulate screen access and let the dopamine system recalibrate.

The distinction is between state and identity. ADHD is who you are. Dopamine withdrawal is a state you are in. One is permanent and neurological. The other is temporary and environmental. They can also exist at the same time. A child with ADHD who overuses screens will have their symptoms amplified by the withdrawal effect.

This is not about blaming parents for screen use. Screens are everywhere. They are designed to be addictive. But understanding the dopamine mechanism helps you make sense of what you are seeing and respond in the right way.`
  },
  {
    question: "What is dopamine withdrawal?",
    tags: ["dopamine", "screens"],
    answer: `Dopamine withdrawal is what happens when the brain's dopamine supply drops below the level it has come to expect as normal.

Every time your brain gets dopamine, it adapts. It raises the bar. What used to feel satisfying no longer does. You need more stimulation to feel the same effect. This is tolerance. The same mechanism that drives drug addiction drives screen addiction. Different intensity, same chemistry.

When the source of stimulation is removed, the brain drops below baseline. It is not back to neutral. It is below neutral. That gap between where the brain is and where it thinks it should be creates the withdrawal symptoms.

Restlessness. Irritability. Anxiety. Low mood. Difficulty concentrating. Boredom that feels physically painful. A desperate urge to get back to the thing that was taken away. This is not bad behaviour. It is neurochemistry.

The good news is that the brain recalibrates. Given time without the high-dopamine input, the baseline resets. But it takes time. Days to weeks, depending on the level of previous exposure. During that period, the child, or adult, will struggle. They need patience, not punishment.`
  },
  {
    question: "How do I manage screen time for a neurodivergent child?",
    tags: ["dopamine", "screens", "parenting"],
    answer: `Here are five practical steps that actually work.

**1. Protect sleep.** No screens in the hour before bed. Blue light suppresses melatonin, but more importantly, the dopamine stimulation keeps the brain wired. Neurodivergent brains already struggle with sleep. Screens before bed make it worse. This is the single most impactful change you can make.

**2. Predictable endings.** "Five more minutes" does not work because the brain cannot process a sudden stop. Instead, use natural break points. "Finish this level." "Watch to the end of this episode." Give the brain a chance to come to a natural stopping point rather than yanking the dopamine supply mid-flow.

**3. Reduce notifications.** Every notification is a dopamine hit. Turn off everything that is not essential. This reduces the constant pull back to the device and gives the brain space to engage with the real world.

**4. Real life before high reward.** Do not start the day with screens. Eat breakfast, get dressed, move your body, go outside. Let the brain wake up with natural dopamine first. If the first thing the brain gets is a high-dopamine screen hit, everything else that day will feel boring by comparison.

**5. Weekly reset conversation.** Sit down together and talk about how the week went. Not as a lecture. As a conversation. What felt good? What felt hard? Is the screen balance working? Give them agency in the process. Control without agency breeds resistance.`
  },
  {
    question: "Should we go smartphone-free?",
    tags: ["dopamine", "screens", "parenting"],
    answer: `This is not about banning technology. It is about protecting regulation.

A smartphone gives an immature brain unlimited access to the most powerful dopamine delivery system ever created. Social media, games, short-form video. All of it is engineered by some of the smartest people in the world to be as addictive as possible. Giving a child unrestricted access to that and expecting them to self-regulate is like putting a plate of biscuits in front of them and telling them to only eat one. The biscuits are designed to make you want more.

Limiting access is not deprivation. It is protection. The same way you would not let a child drive a car because their brain is not ready for the complexity, you can limit smartphone access because their dopamine system is not ready for the intensity.

That does not mean no technology. Computers for schoolwork, supervised tablet time, family movie nights. These are fine. The issue is the always-on, always-accessible, always-stimulating nature of a personal smartphone.

If your child already has a smartphone, going cold turkey is not the answer. Gradual reduction, clear boundaries, and honest conversation about why matter more than a dramatic ban. And if they do not have one yet, you have more power than you think. You do not have to give in to the pressure. You are allowed to say "not yet" and mean it.`
  },

  // ── Workplace ──
  {
    question: "What are reasonable adjustments?",
    tags: ["workplace", "employers"],
    answer: `Think about a left-handed person using a right-handed coffee mug. The one with the logo on one side, so when a left-handed person picks it up, the logo faces away from them. Nobody would call that person disabled. But the mug was not designed for them.

Reasonable adjustments are the equivalent of turning the mug around. Small changes to the environment or the way work is done so that a neurodivergent person can perform at their best.

Examples: noise-cancelling headphones in an open-plan office. Written instructions instead of verbal ones. Flexible start times for someone whose medication takes an hour to kick in. A quiet space for breaks. Being allowed to use a fidget tool in meetings. Having agendas sent in advance so the brain can prepare.

None of these are expensive. Most cost nothing. But they can transform someone's ability to do their job.

Under the Equality Act 2010, employers have a legal duty to make reasonable adjustments for disabled employees, and many neurodivergent conditions meet the legal definition of disability. This is not optional. It is not a favour. It is the law.

The best employers do not wait to be asked. They build inclusive environments from the start. They ask everyone what they need to do their best work, and they act on the answers. That is not special treatment. It is good management.`
  },
  {
    question: "Why should employers care about neurodiversity?",
    tags: ["workplace", "employers"],
    answer: `Because roughly 20 percent of your workforce is neurodivergent. Right now. Whether you know it or not.

Most of them have not told you. Research suggests only about 50 percent of neurodivergent employees disclose their condition at work. The rest are masking. They are spending energy every day performing neurotypicality instead of doing their best work. That is wasted potential. Yours and theirs.

The business case is overwhelming. Deloitte's research shows that neurodiverse teams can be up to 30 percent more productive than neurotypical ones. JPMorgan's Autism at Work programme found that autistic employees were 48 percent faster and 92 percent more productive than their peers in certain roles. GCHQ actively recruits neurodivergent people because they see patterns and threats that others miss.

But forget the statistics for a moment. Think about your best problem-solver. Your most creative thinker. The person who sees things nobody else sees. There is a reasonable chance they are neurodivergent. And there is also a reasonable chance they are struggling because the environment was not built for them.

Neurodiversity is not a diversity initiative. It is a competitive advantage. But only if you create the conditions for it to show up.`
  },
  {
    question: "What is psychological safety and why does it matter?",
    tags: ["workplace", "employers"],
    answer: `Psychological safety is the ability to say "I did not get that" without fear.

It is being able to ask a question in a meeting without worrying that people will think you are stupid. It is telling your manager you are struggling without being afraid it will affect your career. It is admitting a mistake without expecting punishment.

For neurodivergent people, psychological safety is not a nice-to-have. It is the difference between masking and thriving. If the environment feels unsafe, the mask goes on. If the mask is on, you get a performance. Not a person. And definitely not their best work.

Google's Project Aristotle studied hundreds of teams to find out what made the best ones work. The number one factor was not talent, experience, or resources. It was psychological safety. Teams where people felt safe to take risks, make mistakes, and be themselves outperformed teams of individually brilliant people who did not trust each other.

Creating psychological safety is not complicated. Listen without judgement. Respond to mistakes with curiosity instead of blame. Ask people what they need and believe them when they tell you. Model vulnerability by admitting your own struggles. Normalise difference instead of tolerating it.

It is not soft. It is strategic. And for neurodivergent employees, it is everything.`
  },
  {
    question: "How do I support a neurodivergent employee?",
    tags: ["workplace", "employers"],
    answer: `Four things. See them. Value them. Support them. Then watch them perform.

**See them.** Notice that they might be working differently, not worse. The person who needs headphones is not antisocial. The person who fidgets in meetings is not bored. The person who sends detailed emails instead of popping over for a chat is not cold. They are managing their environment so they can do good work.

**Value them.** Focus on output, not style. If the work is excellent but it was done at midnight in a hoodie, does the hoodie matter? If the presentation was brilliant but they did not make enough eye contact, does the eye contact matter? Stop measuring people against a neurotypical template and start measuring them against the actual work.

**Support them.** Ask what they need. Not in a big formal meeting. Just ask. "What helps you do your best work?" and then do what you can to provide it. Most adjustments are simple and cheap. The biggest barrier is not resources. It is managers who do not ask.

**Then watch them perform.** When neurodivergent people are in the right environment with the right support, they do not just perform. They excel. The creativity, the pattern recognition, the hyperfocus, the lateral thinking. All of it shows up when the barriers come down.

You do not need to be an expert in neurodiversity. You just need to be a good manager who treats people as individuals.`
  },
  {
    question: "Why do neurodivergent people struggle in interviews?",
    tags: ["workplace", "employers"],
    answer: `Because interviews are designed to test social performance, not competence.

Think about what a traditional interview rewards: eye contact, confident body language, small talk, quick verbal responses, the ability to sell yourself. These are all neurotypical social skills. They have almost nothing to do with whether someone can actually do the job.

An autistic person might avoid eye contact because it is physically uncomfortable, not because they lack confidence. An ADHD person might ramble because their brain is making connections faster than their mouth can organise them, not because they are unfocused. A dyslexic person might stumble over a written task but be the best problem-solver in the room.

The numbers tell the story. Around 70 percent of autistic adults are unemployed or underemployed. Not because they cannot work. Because the gateway to work, the interview, was designed to exclude them.

What can you do? Send questions in advance. Allow extra processing time. Offer alternatives to traditional interviews: work trials, portfolio reviews, practical tasks. Judge the answers, not the delivery. And train your interviewers to recognise that confidence and competence are not the same thing.

You are not lowering the bar. You are removing the barriers in front of it.`
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
    console.error("seed-qa error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
