import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Maximize,
  Minimize,
  List,
  MessageCircle,
  Brain,
  School,
  Zap,
  AlertTriangle,
  Heart,
  Shield,
  Sun,
  FileText,
  BookOpen,
  Loader2,
  User,
  Mail,
  Building2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";
import { supabase } from "@/integrations/supabase/client";

import heroImg from "@/assets/presentation/hero-parent-child.jpg";
import nervousImg from "@/assets/presentation/nervous-system.jpg";
import schoolImg from "@/assets/presentation/school-masking.jpg";
import dopamineImg from "@/assets/presentation/dopamine-screen.jpg";
import familyImg from "@/assets/presentation/family-strain.jpg";
import hopeImg from "@/assets/presentation/hope-sunrise.jpg";

/* ─── Types ─── */
interface Slide {
  id: string;
  type: "section-title" | "content" | "quote" | "stats" | "warning";
  sectionIndex: number;
  title?: string;
  subtitle?: string;
  bullets?: string[];
  quote?: string;
  quoteAttribution?: string;
  stats?: { value: string; label: string }[];
  image?: string;
  speakerNotes: string;
  bgVariant?: "dark" | "light" | "sand" | "accent" | "warning";
}

/* ─── Sections ─── */
const sections = [
  { label: "Introduction", icon: BookOpen },
  { label: "What Is Going On", icon: Brain },
  { label: "School & Masking", icon: School },
  { label: "Dopamine & Risk", icon: Zap },
  { label: "The Difficult Truth", icon: AlertTriangle },
  { label: "Family & Strain", icon: Heart },
  { label: "What Parents Carry", icon: Shield },
  { label: "What Actually Helps", icon: Sun },
];

/* ─── All 38 Slides ─── */
const slides: Slide[] = [
  // SECTION 0: Introduction
  {
    id: "s1",
    type: "section-title",
    sectionIndex: 0,
    title: "Understanding Your Neurodivergent Child",
    subtitle: "A presentation for parents and carers, built from our two-hour workshop delivered to families across the UK",
    speakerNotes: "This presentation is based on a live workshop delivered by Rich Ferriman of Neurodiversity Global. It is designed for parents to take away and revisit, share with family members, or use to explain what they are dealing with to people who may not yet understand. It is direct. It is evidence-based. It does not soften things that need to be said clearly.",
    bgVariant: "dark",
    image: heroImg,
  },
  {
    id: "s2",
    type: "content",
    sectionIndex: 0,
    title: "How this presentation works",
    bullets: [
      "This is not about managing behaviour. It is about understanding neurology.",
      "You are not here because you are failing. You are here because you care.",
      "We cover: the nervous system, school, dopamine, the dark side, family, and what actually helps.",
      "This is the presentation we give in our live sessions. We have made it available so parents have their own version to take away.",
      "Share it with partners, grandparents, teachers. Anyone who needs to understand.",
    ],
    speakerNotes: "Set the tone: this is not a lecture. This is direct, honest, and built from both clinical evidence and lived experience. Many parents have said they wish they had something to show their families. This is that thing.",
    bgVariant: "light",
  },

  // SECTION 1: What Is Going On
  {
    id: "s3",
    type: "section-title",
    sectionIndex: 1,
    title: "What Is Actually Going On",
    subtitle: "Neurodivergence, the nervous system, and why the usual explanations fall short",
    speakerNotes: "This section establishes the neurological foundation. Most advice parents receive assumes neurotypical brain function. That is why it does not work. We need to start from what is actually happening inside the child's nervous system.",
    bgVariant: "dark",
    image: nervousImg,
  },
  {
    id: "s4",
    type: "stats",
    sectionIndex: 1,
    title: "One in five children. Most are neurodivergent.",
    stats: [
      { value: "19.6%", label: "of pupils in England have identified special educational needs (DfE, 2025)" },
      { value: "15–20%", label: "of the population is estimated to be neurodivergent" },
      { value: "40%", label: "of children with dyslexia also have ADHD" },
      { value: "80%", label: "of autistic people carry at least one co-occurring condition" },
    ],
    speakerNotes: "These numbers matter because they show this is not niche. These are the most common profiles: ADHD, autism, dyslexia, dyspraxia, dyscalculia. Most children have more than one. The system deals with one at a time. Your child is not a single label. They are a whole person whose brain works differently in multiple ways.",
    bgVariant: "light",
  },
  {
    id: "s5",
    type: "content",
    sectionIndex: 1,
    title: "Start here: the nervous system",
    bullets: [
      "The nervous system scans constantly for safety or threat. This is not conscious. It is automatic.",
      "Neurodivergent nervous systems process threat, demand, and sensory input differently.",
      "Load builds faster. Recovery takes longer.",
      "When the system is in threat mode, verbal reasoning is not available.",
      "This is why consequences delivered during a meltdown do not work.",
      "This is why the child who was 'fine' at 3pm is in crisis at 4pm.",
      "You are not seeing bad behaviour. You are seeing a nervous system that has hit its limit.",
    ],
    speakerNotes: "This is perhaps the single most important slide. Once parents understand the nervous system model, everything else starts to make sense. The child is not choosing to behave this way. Their system is doing what systems do when they are overwhelmed.",
    bgVariant: "sand",
  },
  {
    id: "s6",
    type: "stats",
    sectionIndex: 1,
    title: "The cognitive battery",
    stats: [
      { value: "5%", label: "cognitive energy spent on posture and compliance: neurotypical peer" },
      { value: "80%", label: "cognitive energy spent just staying in the chair: neurodivergent child" },
      { value: "20%", label: "remaining capacity for actual learning" },
    ],
    speakerNotes: "Sitting still and looking at the teacher is not a baseline for learning. For a neurodivergent child with ADHD, autism, or dyspraxia, up to 80 per cent of the cognitive battery goes on staying in that chair. Nothing left for learning. This is why your child comes home exhausted having apparently 'done nothing' all day.",
    bgVariant: "light",
  },
  {
    id: "s7",
    type: "quote",
    sectionIndex: 1,
    quote: "The movement is the listening. The humming is the processing. The looking away is the focus. What adults read as non-compliance is often the child's only way to stay in the room.",
    speakerNotes: "This reframes everything. The fidgeting child is not misbehaving. They are self-regulating. The child who looks away during instruction may be reducing visual input to process auditory information. The system reads this as defiance. It is adaptation.",
    bgVariant: "dark",
  },
  {
    id: "s8",
    type: "content",
    sectionIndex: 1,
    title: "Behaviour is a signal, not a character flaw",
    bullets: [
      "Refusal = threat response",
      "Aggression = overloaded nervous system",
      "Shutdown = protective collapse",
      "Avoidance = the only available tool",
    ],
    speakerNotes: "Every behaviour has a function. The question is never 'why won't they just…' It is 'what is making this impossible right now?' What is the sensory load? What demands have already built up today? Has the child eaten, slept, had any decompression time? What happened at school today? Is this a new environment or transition? When did I last connect without asking anything of them?",
    bgVariant: "light",
  },

  // SECTION 2 — School & Masking
  {
    id: "s9",
    type: "section-title",
    sectionIndex: 2,
    title: "School, Masking and the Cost of Fitting In",
    subtitle: "What is happening in the building they spend six hours a day in",
    speakerNotes: "This section is often the hardest for parents because it confirms what they already suspect. School is not working for their child, and the evidence supports that conclusion.",
    bgVariant: "dark",
    image: schoolImg,
  },
  {
    id: "s10",
    type: "stats",
    sectionIndex: 2,
    title: "The school system is not designed for these children",
    stats: [
      { value: "68%", label: "of primary teachers feel unprepared for SEND (YouGov/Ofsted 2024)" },
      { value: "35%", label: "of children with EHCPs are persistently absent from school" },
      { value: "4×", label: "more likely to be suspended if you have SEN support" },
      { value: "92%", label: "of children experiencing school distress are neurodivergent (Connolly 2023)" },
    ],
    speakerNotes: "These are not opinions. These are published figures. The system was designed for a neurotypical majority and has not been redesigned for the children who need it most.",
    bgVariant: "light",
  },
  {
    id: "s11",
    type: "content",
    sectionIndex: 2,
    title: "Masking: the performance no one asked for",
    bullets: [
      "Masking is the suppression of natural behaviour to fit in. It is effortful, constant, and invisible to adults.",
      "Children rehearse scripts, copy peers, suppress stims, and perform normality.",
      "The school sees a child coping. The parent sees a child in crisis. Both are right.",
      "What parents see at 4pm is restraint collapse — the child finally being safe enough to fall apart.",
      "Higher masking is consistently associated with worse mental health: more anxiety, more depression, more exhaustion.",
      "Masking is independently associated with suicidal ideation in adolescents (Cassidy et al., UCL).",
      "Girls mask more effectively. They are identified later. The damage accumulates longer.",
    ],
    speakerNotes: "This is why the school says 'they're fine here' while you are dealing with a child in crisis every evening. The child is not fine. They are performing. And that performance has a cost.",
    bgVariant: "sand",
  },
  {
    id: "s12",
    type: "content",
    sectionIndex: 2,
    title: "The children without paperwork",
    bullets: [
      "236,225 children on autism assessment waiting lists in England (NHS, June 2025)",
      "549,000 people waiting for ADHD assessment (Nuffield Trust, 2024)",
      "In some areas children wait three to eight years for an autism assessment",
      "A diagnosis is NOT a prerequisite for support. Schools must respond to need, not labels.",
      "The SEND Code of Practice requires schools to assess, plan, do, and review",
      "Reasonable adjustments under the Equality Act apply from the point of need",
      "Children waiting for diagnosis are spending those years in chronic nervous system alarm, labelled dreamers, disruptive, or lazy",
    ],
    speakerNotes: "This is one of the most important legal points in the entire presentation. Schools cannot say 'we need a diagnosis first'. The law does not say that. The Code of Practice requires a graduated response from the point of identified need.",
    bgVariant: "light",
  },
  {
    id: "s13",
    type: "quote",
    sectionIndex: 2,
    quote: "Neuroaffirming practice is not special treatment. It is accessibility. If a child needs glasses to see the board, we do not call it a perk. If a child needs to pace, chew, or wear headphones to process a sentence — that is their glasses.",
    speakerNotes: "This analogy works in school meetings. It reframes accommodations as accessibility rather than favouritism. Use it.",
    bgVariant: "accent",
  },

  // SECTION 3: Dopamine & Risk
  {
    id: "s14",
    type: "section-title",
    sectionIndex: 3,
    title: "Dopamine, Risk and Adolescence",
    subtitle: "What the teenage years actually involve for a neurodivergent brain",
    speakerNotes: "This section often produces the most visceral response from parents. Particularly those with children approaching or in adolescence. The dopamine system explains so much of what parents see and do not understand.",
    bgVariant: "dark",
    image: dopamineImg,
  },
  {
    id: "s15",
    type: "content",
    sectionIndex: 3,
    title: "Dopamine: the system that drives everything",
    bullets: [
      "Dopamine is not a happiness chemical. It is a motivation and reward signal.",
      "For many neurodivergent people, the dopamine system does not deliver a steady, usable signal.",
      "The brain goes searching for stimulation to reach a level where it can function.",
      "This is called dopamine searching. It is neurological, not a choice.",
      "In younger children: noise, movement, interrupting, refusing boring tasks.",
      "In adolescence: the same drive finds riskier outlets.",
      "The creativity, hyperfocus, and courage are the same system. You cannot separate them.",
    ],
    speakerNotes: "This is the mechanism behind so much of what parents see. The child who cannot start homework but can play Minecraft for six hours. The teenager who takes risks that seem incomprehensible. It is not a character flaw. It is dopamine regulation.",
    bgVariant: "sand",
  },
  {
    id: "s16",
    type: "content",
    sectionIndex: 3,
    title: "Puberty: the crisis point no one prepares you for",
    bullets: [
      "Hormonal changes directly affect dopamine regulation. This is not incidental",
      "Oestrogen fluctuations in girls specifically affect dopamine pathways",
      "Executive function demands increase sharply at secondary school",
      "Strategies that worked in Year 5 collapse under Year 8 conditions",
      "Autistic young people may experience puberty earlier than the general population",
      "For girls: many are first flagged for mental health support during puberty — not because it started then, but because coping strategies collapsed",
      "The cliff edge at secondary transition is real and well documented",
    ],
    speakerNotes: "Parents of primary-age children need to hear this so they can prepare. Parents of secondary-age children need to hear this so they understand what happened. The child did not suddenly get worse. The demands got higher and the regulation system got disrupted.",
    bgVariant: "light",
  },
  {
    id: "s17",
    type: "content",
    sectionIndex: 3,
    title: "What dopamine searching looks like in adolescence",
    bullets: [
      "Speed and physical risk",
      "Intense or volatile relationships",
      "Substance use (cannabis, alcohol, stimulants)",
      "Gaming and screen use to exhaustion",
      "Gambling and gambling-adjacent gaming",
      "Sexual risk-taking",
      "Fights and confrontation",
      "Anything that produces a fast, strong dopamine response",
    ],
    speakerNotes: "This is not bad character. It is a brain doing what brains do when ordinary reward is insufficient. The same drive produces creativity, passion, and courage. Suppressing it without understanding it makes it worse. Understanding the mechanism is the starting point for addressing the risk. Punishment without understanding increases shame. Shame increases the need for dopamine relief. The cycle continues.",
    bgVariant: "sand",
  },
  {
    id: "s18",
    type: "content",
    sectionIndex: 3,
    title: "Smartphones and the neurodivergent brain",
    bullets: [
      "Every notification, swipe, and new piece of content produces a small dopamine response",
      "Smartphones are designed around unpredictability. The brain learns to check, then check again",
      "For neurodivergent children with dopamine regulation differences, highly stimulating technology is harder to disengage from",
      "This is not weakness. It is the same system being targeted by design.",
      "Abrupt removal causes dysregulation. Replace, do not just remove",
      "Five-minute warnings. Gradual transitions. Replace with an alternative source of regulation.",
      "Screens are also connection tools for isolated children. Do not treat them as only a risk.",
    ],
    speakerNotes: "The smartphone conversation is not about discipline. It is about understanding that the device exploits the same dopamine system that is already dysregulated. Removal without replacement creates a void that the nervous system will fill with something else.",
    bgVariant: "light",
  },

  // SECTION 4: Difficult Truth
  {
    id: "s19",
    type: "section-title",
    sectionIndex: 4,
    title: "The Difficult Truth",
    subtitle: "Self-harm, suicide, exploitation and what parents need to know. This section contains difficult content. Take a breath. You need to know this.",
    speakerNotes: "This section must be delivered with care but without softening. Parents need this information. Many have told us afterwards that no one had ever been this direct with them and that the honesty was what they needed.",
    bgVariant: "warning",
  },
  {
    id: "s20",
    type: "content",
    sectionIndex: 4,
    title: "Self-harm: what it is and what it is not",
    bullets: [
      "Self-harm in neurodivergent young people is significantly more common than in the general adolescent population",
      "It frequently presents as a regulation strategy before it presents as a mental health crisis",
      "Physical pain releases endorphins and briefly creates regulation when no other tool is working",
      "The young person is not trying to die. They are trying to survive a moment that feels unsurvivable.",
      "Responding with panic, interrogation, or punishment teaches the child to hide it better next time",
      "The moment of disclosure requires calm, non-punitive, connection-first responses",
      "Girls diagnosed late are specifically at elevated risk, a downstream consequence of years of masking",
    ],
    speakerNotes: "72 per cent of autistic adults in a UK study scored above the psychiatric cut-off for suicide risk (Cassidy et al.). This is not a minor issue. And it starts younger than most parents expect.",
    bgVariant: "light",
  },
  {
    id: "s21",
    type: "stats",
    sectionIndex: 4,
    title: "Suicide risk in neurodivergent young people",
    stats: [
      { value: "9×", label: "higher risk: autistic people compared to general population" },
      { value: "20%", label: "of autistic children and teenagers report suicidal ideation in the past year" },
      { value: "10%", label: "of autistic adolescents report suicide attempts" },
      { value: "66%", label: "of autistic adults at a UK diagnostic clinic reported suicidal ideation (Cassidy, Lancet Psychiatry)" },
    ],
    speakerNotes: "These numbers are from peer-reviewed research published in major journals. They are not exaggerated. The pathway from unmet need to mental health crisis to suicidal ideation is well documented.",
    bgVariant: "light",
  },
  {
    id: "s22",
    type: "content",
    sectionIndex: 4,
    title: "The pathway, and where it can be interrupted",
    bullets: [
      "Child is neurodivergent. Needs are unmet. School environment causes chronic stress.",
      "Child masks to survive. Masking exhausts them. Identity erodes.",
      "Mental health deteriorates. Anxiety, depression, self-harm emerge.",
      "CAMHS threshold not met, or waiting list stretches to years. 40% of referred children turned away.",
      "School exclusion. Structure and relationship removed. Child now available for exploitation.",
      "County lines, criminal justice system, custody.",
      "Every stage of this pathway has an intervention point.",
      "Early understanding is the first and most powerful one.",
    ],
    speakerNotes: "This is the pathway that connects everything else in the presentation. Unmet need leads to masking leads to mental health crisis leads to exclusion leads to exploitation. And at every single stage, there is something that can be done. That is why this presentation exists.",
    bgVariant: "sand",
  },
  {
    id: "s23",
    type: "content",
    sectionIndex: 4,
    title: "Exploitation, consent, and sexual safety",
    bullets: [
      "UK Government statutory guidance explicitly identifies neurodivergent children as at heightened risk of criminal exploitation and grooming",
      "Autistic females are over twice as likely to have consented to an unwanted sexual event",
      "Mate crime: someone pretending to be a friend to exploit a young person starved of genuine connection",
      "Difficulty reading others' intentions combined with a desperate need for belonging creates specific vulnerability",
      "Sexual health education for neurodivergent young people in the UK is inadequate",
      "Safety conversations need to be explicit, direct, and repeated — not euphemistic",
      "Teach the difference between someone who wants connection and someone who wants to exploit it",
    ],
    speakerNotes: "This is hard to hear. It is harder to ignore. The research is clear: neurodivergent young people are at elevated risk. They need safety education that accounts for how they process social information.",
    bgVariant: "light",
  },

  // SECTION 5: Family & Strain
  {
    id: "s24",
    type: "section-title",
    sectionIndex: 5,
    title: "Family, Disbelief and Relationship Strain",
    subtitle: "The people around you, and why this is harder than anyone outside it can understand",
    speakerNotes: "This section validates what many parents feel but rarely say out loud. The isolation, the disbelief from extended family, the strain on relationships.",
    bgVariant: "dark",
    image: familyImg,
  },
  {
    id: "s25",
    type: "content",
    sectionIndex: 5,
    title: "The people who do not believe",
    bullets: [
      "Grandparents grew up in a system that had no framework for neurodivergence: naughty, spoilt, weak, lazy",
      "The grandparent who says 'he was fine with me' is often right. The child was masking. That is the problem.",
      "Many grandparents are themselves unidentified neurodivergent adults",
      "The parent fighting for their child is implicitly saying the grandparent missed something — that is painful to hear",
      "Defensiveness that looks like disbelief is often self-protection",
      "The goal is not to win the argument. It is to reduce the additional load of managing that relationship.",
      "The glasses line works here too. Accessibility is not the same as making excuses.",
    ],
    speakerNotes: "Many parents have told us this is the hardest part. Not the SEND system. Not the school. The people in their own family who do not believe them. This slide gives them language for that conversation.",
    bgVariant: "sand",
  },
  {
    id: "s26",
    type: "stats",
    sectionIndex: 5,
    title: "The strain on relationships",
    stats: [
      { value: "40%", label: "of parent carers have experienced relationship breakdown since their child's diagnosis (Disabled Children's Partnership 2021)" },
      { value: "41%", label: "of families surveyed by Family Fund were headed by lone parents" },
      { value: "54%", label: "of parent carers have been treated by a GP for depression, anxiety, or stress" },
      { value: "£21,174", label: "average income loss per year (Contact 2024)" },
    ],
    speakerNotes: "These figures are drawn from major UK charities and research organisations. They describe the reality that most parents already know but have never seen acknowledged.",
    bgVariant: "light",
  },
  {
    id: "s27",
    type: "content",
    sectionIndex: 5,
    title: "What keeps relationships intact under this pressure",
    bullets: [
      "Shared framework — two people who understand the same things about their child's nervous system",
      "Common direction, even when tactics differ",
      "Strategic disengagement from battles that are not worth the cost",
      "Validation that does not immediately pivot to solutions",
      "Acknowledging the asymmetry rather than resenting it silently",
      "Peer support from other families in the same situation is consistently the highest-value form of support",
    ],
    speakerNotes: "What does not help: generic self-care advice — you cannot meditate out of a broken system. Being told to prioritise your relationship when there is no bandwidth left. Professionals who treat the relationship as the problem. Couples counselling that does not account for the SEND system as the context.",
    bgVariant: "sand",
  },
  {
    id: "s28",
    type: "content",
    sectionIndex: 5,
    title: "Siblings: the burden that is rarely counted",
    bullets: [
      "Siblings have more responsibilities, more worries, and less parental attention than their peers (Sibs, UK)",
      "75% of parents reported their sibling child's mental health worsened during the pandemic",
      "50% of siblings were providing more care during lockdown — children caring for children",
      "Siblings often do not raise their own difficulties to avoid adding to the family's load",
      "Problems that would be caught in another family go unnoticed",
      "Watch for: declining school performance, anger outbursts, social withdrawal",
      "One-to-one time matters even if it is brief. It does not have to be elaborate.",
    ],
    speakerNotes: "This is the slide that often makes parents cry. Not because they did not know. Because they did know and hearing it said out loud is both painful and validating.",
    bgVariant: "light",
  },

  // SECTION 6 — What Parents Carry
  {
    id: "s29",
    type: "section-title",
    sectionIndex: 6,
    title: "What Parents Carry",
    subtitle: "The weight that is invisible to everyone outside the room",
    speakerNotes: "This section moves from information to acknowledgement. Parents carry an enormous amount. Most of it is invisible.",
    bgVariant: "dark",
  },
  {
    id: "s30",
    type: "quote",
    sectionIndex: 6,
    quote: "When it happened to me in 2017 it tore our family apart. That is not hyperbole. It was the worst five years of my life. To have that constant stress and then to not be believed by the school is an additional burden parents simply do not need.",
    quoteAttribution: "Parent testimony to Parliament",
    speakerNotes: "This testimony was given to a parliamentary committee. It reflects what thousands of families experience. The combination of stress, isolation, and institutional disbelief is devastating.",
    bgVariant: "dark",
  },
  {
    id: "s31",
    type: "content",
    sectionIndex: 6,
    title: "What parents actually worry about at 3am",
    bullets: [
      "Am I the problem? — shame arrives before anything else",
      "Is this my fault genetically? — many parents are themselves unidentified",
      "Will they be OK? — the question underneath every other question",
      "My child is in pain and I cannot fix it",
      "No one believes me — school sees coping, I see crisis. Both are true.",
      "The fighting is destroying me — and I cannot stop fighting",
      "My relationship is not surviving this",
      "My other children are paying for this",
      "Secondary school terrifies me",
      "I am scared of what my child might do to themselves",
    ],
    speakerNotes: "Read this list slowly. Give it space. Every parent in the room will recognise something on it. Many will recognise most of it.",
    bgVariant: "sand",
  },
  {
    id: "s32",
    type: "content",
    sectionIndex: 6,
    title: "What you actually need — not what you are usually given",
    bullets: [
      "Validation that it is genuinely as hard as you think it is",
      "Someone who does not require you to justify why this is difficult",
      "Practical information — what you are entitled to, what language to use, what to ask for",
      "Permission to disengage from battles that are not worth the cost",
      "A peer group of people who already understand without explanation",
      "Recognition that the system is failing your child, not that you are failing them",
      "Honest information about risk — not reassurance that removes your ability to prepare",
    ],
    speakerNotes: "This is the bridge to the final section. Having named the problems, we now move to what actually works.",
    bgVariant: "light",
  },

  // SECTION 7 — What Actually Helps
  {
    id: "s33",
    type: "section-title",
    sectionIndex: 7,
    title: "What Actually Helps",
    subtitle: "Practical, evidence-informed, and honest about what it takes",
    speakerNotes: "This is the section parents have been waiting for. Tools, language, and approaches that work. Not theory. Practice.",
    bgVariant: "dark",
    image: hopeImg,
  },
  {
    id: "s34",
    type: "content",
    sectionIndex: 7,
    title: "Tools that work: regulation and daily life",
    bullets: [
      "Routine as safety — visual timetables, now/next boards",
      "Countdown timers — 5 minutes warning, not 1",
      "Low demand mornings — reduce decisions before school",
      "Decompression time built in after school — non-negotiable",
      "Calm corner at home with sensory tools",
      "Movement before demands — not after",
      "Connection before correction after a difficult episode",
      "Repair after rupture — every time",
    ],
    speakerNotes: "These are not complex interventions. They are structural changes to daily life that reduce the load on the nervous system. They work because they address the root cause: dysregulation.",
    bgVariant: "sand",
  },
  {
    id: "s35",
    type: "content",
    sectionIndex: 7,
    title: "Communication that works",
    bullets: [
      "Short instructions. One step at a time.",
      "Side-by-side activities for difficult conversations",
      "Declarative language: 'I notice shoes are still by the door'",
      "Remove urgency language wherever possible",
      "Wait for regulation before attempting to resolve",
      "Never correct in front of others",
      "Name feelings before trying to fix them",
    ],
    speakerNotes: "Language is a regulation tool. The way we speak to a dysregulated child either reduces the load or adds to it. These adjustments are small but their impact is significant.",
    bgVariant: "light",
  },
  {
    id: "s36",
    type: "content",
    sectionIndex: 7,
    title: "Navigating school: what to do and what to say",
    bullets: [
      "Keep a written log — dates, observations, communications, incidents",
      "Follow up every verbal conversation with an email the same day",
      "Ask for everything in writing",
      "Use the word 'provision' not 'support' — it is a legal term",
      "Request meetings rather than waiting for annual reviews",
      "Schools must respond to need, not diagnosis — the Code of Practice requires assess, plan, do, review",
      "Reasonable adjustments under the Equality Act apply from point of need",
      "Ask: can you show me the provision plan while we wait for assessment?",
    ],
    speakerNotes: "These are practical actions parents can take immediately. The language matters. 'Provision' is a legal term. 'Support' is not. Knowing the difference changes the conversation.",
    bgVariant: "sand",
  },
  {
    id: "s37",
    type: "content",
    sectionIndex: 7,
    title: "The 2026 SEND reforms — what parents need to know",
    bullets: [
      "The white paper 'Every Child Achieving and Thriving' was published February 2026",
      "Consultation closes 18 May 2026 — this is your opportunity to influence what happens",
      "ISPs (Individual Support Plans) replace SEN support for most children — not EHCPs",
      "ISP complaints go to the school complaints process, not tribunal. This is a rights reduction.",
      "Children with EHCPs in Year 3 and above keep them until 16. Year 2 and below reassessed at Year 7.",
      "Every child with a special school place in 2029 keeps it if they want it.",
      "Respond online, by email to SEND.REFORM@education.gov.uk, or by post to DfE",
    ],
    speakerNotes: "This is time-sensitive information. The consultation window is open. Parents need to know that their voice matters and that the reforms will directly affect their children.",
    bgVariant: "light",
  },
  {
    id: "s38",
    type: "quote",
    sectionIndex: 7,
    quote: "A child who knows who they are. One person who believes them. Enough of the world to build a life. That is achievable. That is worth fighting for.",
    speakerNotes: "This is genuinely as hard as you think it is. You are not being dramatic. The system is failing your child. You are not failing them. Your child is not the problem. The mismatch is the problem. One person who understands them changes their trajectory. That person is already in this room.",
    bgVariant: "accent",
  },
];

/* ─── Slide Renderer ─── */
const SlideCard = ({
  slide,
  index,
  isActive,
  onToggleNotes,
  notesOpen,
}: {
  slide: Slide;
  index: number;
  isActive: boolean;
  onToggleNotes: () => void;
  notesOpen: boolean;
}) => {
  const bgClasses: Record<string, string> = {
    dark: "bg-primary text-primary-foreground",
    light: "bg-background text-foreground",
    sand: "bg-warm-stone text-foreground",
    accent: "bg-accent/10 text-foreground",
    warning: "bg-[hsl(0,40%,15%)] text-primary-foreground",
  };

  const bgClass = bgClasses[slide.bgVariant || "light"];
  const isDark = slide.bgVariant === "dark" || slide.bgVariant === "warning";

  return (
    <motion.div
      id={slide.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-24"
    >
      <div className={`rounded-2xl overflow-hidden shadow-xl border border-border/50 ${bgClass}`}>
        {/* Section title slides with image */}
        {slide.type === "section-title" && slide.image ? (
          <div className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            <div className="relative px-8 lg:px-14 py-14 max-w-2xl">
              <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-4">
                Section {slide.sectionIndex + 1} of {sections.length}
              </p>
              <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white">
                {slide.title}
              </h2>
              {slide.subtitle && (
                <p className="mt-4 text-base lg:text-lg text-white/70 leading-relaxed max-w-[50ch]">
                  {slide.subtitle}
                </p>
              )}
            </div>
          </div>
        ) : slide.type === "section-title" ? (
          <div className="px-8 lg:px-14 py-16 lg:py-20">
            <p className="font-display font-bold text-xs uppercase tracking-[0.2em] text-accent mb-4">
              Section {slide.sectionIndex + 1} of {sections.length}
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-2xl">
              {slide.title}
            </h2>
            {slide.subtitle && (
              <p className={`mt-4 text-base lg:text-lg leading-relaxed max-w-[50ch] ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {slide.subtitle}
              </p>
            )}
          </div>
        ) : slide.type === "quote" ? (
          <div className="px-8 lg:px-14 py-14 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-accent text-5xl font-serif leading-none mb-6">"</div>
              <blockquote className={`font-display text-xl md:text-2xl lg:text-3xl leading-snug font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
                {slide.quote}
              </blockquote>
              {slide.quoteAttribution && (
                <p className={`mt-6 text-sm ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  — {slide.quoteAttribution}
                </p>
              )}
            </div>
          </div>
        ) : slide.type === "stats" ? (
          <div className="px-8 lg:px-14 py-12 lg:py-16">
            {slide.title && (
              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight mb-8 max-w-2xl">
                {slide.title}
              </h3>
            )}
            <div className="grid sm:grid-cols-2 gap-6">
              {slide.stats?.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`rounded-xl p-6 ${isDark ? "bg-primary-foreground/[0.06] border border-primary-foreground/10" : "bg-card border border-border shadow-md"}`}
                >
                  <p className="font-display font-extrabold text-3xl md:text-4xl text-accent mb-2">{stat.value}</p>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          /* Content slide */
          <div className="px-8 lg:px-14 py-12 lg:py-16">
            {slide.title && (
              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight mb-6 max-w-2xl">
                {slide.title}
              </h3>
            )}
            <ul className="space-y-3 max-w-3xl">
              {slide.bullets?.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  className="flex items-start gap-3"
                >
                  <span className={`w-2 h-2 rounded-full mt-2 shrink-0 bg-accent`} />
                  <p className={`text-base leading-relaxed ${isDark ? "text-primary-foreground/85" : "text-muted-foreground"}`}>
                    {bullet}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Slide number + speaker notes toggle */}
        <div className={`px-8 lg:px-14 py-4 flex items-center justify-between border-t ${isDark ? "border-primary-foreground/10" : "border-border"}`}>
          <span className={`text-xs font-display font-bold ${isDark ? "text-primary-foreground/30" : "text-muted-foreground/50"}`}>
            {index + 1} / {slides.length}
          </span>
          <button
            onClick={onToggleNotes}
            className={`inline-flex items-center gap-1.5 text-xs font-display font-bold transition-colors ${isDark ? "text-primary-foreground/50 hover:text-accent" : "text-muted-foreground hover:text-accent"}`}
          >
            <MessageCircle size={14} />
            Speaker notes
            {notesOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <AnimatePresence>
          {notesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`px-8 lg:px-14 py-5 text-sm leading-relaxed ${isDark ? "bg-primary-foreground/[0.04] text-primary-foreground/60 border-t border-primary-foreground/10" : "bg-muted/30 text-muted-foreground border-t border-border"}`}>
                <p className="font-display font-bold text-xs uppercase tracking-wider text-accent mb-2">Speaker Notes</p>
                {slide.speakerNotes}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── Signup Gate ─── */
const STORAGE_KEY = "ndg_presentation_access";

const useContextOptions = [
  { value: "home", label: "Home — for my family" },
  { value: "school", label: "School — to share with staff or parents" },
  { value: "work", label: "Work — professional development" },
  { value: "other", label: "Other" },
];

const SignupGate = ({ onAccess }: { onAccess: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [useContext, setUseContext] = useState("home");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setError("");
    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from("presentation_signups")
        .insert({
          name: name.trim(),
          email: email.trim(),
          company: company.trim() || null,
          use_context: useContext,
          presentation: "parents",
        });

      if (dbError) throw dbError;

      // Fire-and-forget notification
      supabase.functions.invoke("presentation-signup", {
        body: {
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          use_context: useContext,
          presentation: "parents",
        },
      }).catch(() => {});

      sessionStorage.setItem(STORAGE_KEY, "true");
      onAccess();
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <SEOHead
        title="Understanding Your Neurodivergent Child — Parent Presentation"
        description="A comprehensive, evidence-based presentation for parents and carers of neurodivergent children."
        path="/for-parents/presentation"
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "For Parents", href: "/for-parents" },
          { label: "Presentation" },
        ]}
      />
      <main>
        <section className="bg-primary text-primary-foreground min-h-[80vh] flex items-center">
          <div className="mx-auto max-w-wide px-6 lg:px-10 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              {/* Left — info */}
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
                  Free resource
                </p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.08]">
                  Understanding Your Neurodivergent Child
                </h1>
                <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 max-w-[50ch]">
                  This is the presentation we give in our live two-hour workshop. We have made it available so parents have their own version to take away, revisit, and share with family members, teachers, or anyone who needs to understand.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "38 evidence-based slides with speaker notes",
                    "Covers the nervous system, school, dopamine, risk, family, and practical tools",
                    "Share it with anyone who needs to understand",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                      <p className="text-sm text-primary-foreground/70">{item}</p>
                    </div>
                  ))}
                </div>
                <img
                  src={ndgLogo}
                  alt="Neurodiversity Global"
                  className="mt-8 h-10 w-auto opacity-50"
                  loading="lazy"
                />
              </div>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-primary-foreground/[0.06] border border-primary-foreground/12 p-8 space-y-5"
                >
                  <div>
                    <p className="font-display font-bold text-lg text-primary-foreground mb-1">
                      Access the presentation
                    </p>
                    <p className="text-sm text-primary-foreground/50">
                      Fill in your details below to view the full presentation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-display font-bold text-primary-foreground/60 mb-1.5">
                        Your name *
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full name"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-display font-bold text-primary-foreground/60 mb-1.5">
                        Email address *
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-display font-bold text-primary-foreground/60 mb-1.5">
                        Organisation / school (optional)
                      </label>
                      <div className="relative">
                        <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-foreground/30" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Company or school name"
                          className="w-full pl-10 pr-4 py-3 rounded-lg bg-primary-foreground/[0.06] border border-primary-foreground/12 text-primary-foreground placeholder:text-primary-foreground/25 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-display font-bold text-primary-foreground/60 mb-1.5">
                        How will you use this? *
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {useContextOptions.map((opt) => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => setUseContext(opt.value)}
                            className={`rounded-lg px-4 py-2.5 text-sm font-display font-medium border transition-all text-left ${
                              useContext === opt.value
                                ? "bg-accent/20 border-accent/40 text-accent"
                                : "bg-primary-foreground/[0.04] border-primary-foreground/10 text-primary-foreground/60 hover:bg-primary-foreground/10"
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {error && (
                    <p className="text-sm text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || !name.trim() || !email.trim()}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Signing up…
                      </>
                    ) : (
                      <>
                        View presentation
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-primary-foreground/30 text-center">
                    Your details are stored securely. We won't spam you.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

/* ─── Page Component ─── */
const ParentPresentation = () => {
  const [hasAccess, setHasAccess] = useState(() => sessionStorage.getItem(STORAGE_KEY) === "true");
  const [openNotes, setOpenNotes] = useState<Record<string, boolean>>({});
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const toggleNotes = (id: string) =>
    setOpenNotes((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleAllNotes = () => {
    const allOpen = slides.every((s) => openNotes[s.id]);
    const next: Record<string, boolean> = {};
    slides.forEach((s) => (next[s.id] = !allOpen));
    setOpenNotes(next);
  };

  // Track active section on scroll
  useEffect(() => {
    if (!hasAccess) return;
    const sectionSlides = slides.filter((s) => s.type === "section-title");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = slides.find((s) => s.id === entry.target.id);
            if (slide) setActiveSection(slide.sectionIndex);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionSlides.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [hasAccess]);

  if (!hasAccess) {
    return <SignupGate onAccess={() => setHasAccess(true)} />;
  }

  return (
    <>
      <SEOHead
        title="Understanding Your Neurodivergent Child — Parent Presentation"
        description="A comprehensive, evidence-based presentation for parents and carers of neurodivergent children. Covering the nervous system, school, dopamine, risk, family strain, and practical strategies."
        path="/for-parents/presentation"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "For Parents", url: "/for-parents" },
          { name: "Parent Presentation", url: "/for-parents/presentation" },
        ])}
      />
      <Navbar />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "For Parents", href: "/for-parents" },
          { label: "Presentation" },
        ]}
      />

      <main>
        {/* Page intro */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              Parent Presentation
            </p>
            <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.08] max-w-3xl">
              Understanding Your Neurodivergent Child
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/75 max-w-[60ch]">
              This is the presentation we give in our live two-hour workshop for parents and carers. We have made it available here so families have their own version to take away, revisit, and share with partners, grandparents, teachers — anyone who needs to understand.
            </p>
            <p className="mt-3 text-sm text-primary-foreground/50 max-w-[60ch]">
              Every slide has speaker notes you can expand for additional context, evidence, and guidance. Use this at your own pace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={toggleAllNotes}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground font-display font-bold text-sm hover:bg-primary-foreground/20 transition-all"
              >
                <MessageCircle size={16} />
                {slides.every((s) => openNotes[s.id]) ? "Close all notes" : "Open all speaker notes"}
              </button>
              <button
                onClick={() => setShowNav(!showNav)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 text-primary-foreground font-display font-bold text-sm hover:bg-primary-foreground/20 transition-all"
              >
                <List size={16} />
                Jump to section
              </button>
            </div>

            <AnimatePresence>
              {showNav && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {sections.map((section, i) => {
                      const sectionSlide = slides.find(
                        (s) => s.type === "section-title" && s.sectionIndex === i
                      );
                      return (
                        <a
                          key={i}
                          href={`#${sectionSlide?.id}`}
                          onClick={() => setShowNav(false)}
                          className={`flex items-center gap-3 rounded-xl p-4 border transition-all ${
                            activeSection === i
                              ? "bg-accent/20 border-accent/40 text-accent"
                              : "bg-primary-foreground/[0.04] border-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/10"
                          }`}
                        >
                          <section.icon size={18} className="shrink-0" />
                          <span className="font-display font-bold text-sm">{section.label}</span>
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <img
              src={ndgLogo}
              alt="Neurodiversity Global"
              className="mt-10 h-10 md:h-12 w-auto opacity-60"
              loading="lazy"
            />
          </div>
        </section>

        {/* Slides */}
        <section className="bg-background py-12 lg:py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-10 space-y-8">
            {slides.map((slide, i) => (
              <SlideCard
                key={slide.id}
                slide={slide}
                index={i}
                isActive={activeSection === slide.sectionIndex}
                onToggleNotes={() => toggleNotes(slide.id)}
                notesOpen={!!openNotes[slide.id]}
              />
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-primary text-primary-foreground py-16 lg:py-24">
          <div className="mx-auto max-w-wide px-6 lg:px-10 text-center">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">
              Neurodiversity Global
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight max-w-2xl mx-auto">
              Want us to deliver this session for your school or community?
            </h2>
            <p className="mt-4 text-primary-foreground/60 text-base max-w-lg mx-auto">
              We deliver this two-hour workshop for parent groups through schools, organisations, and community programmes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                to="/feedback"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/for-parents"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/20 text-primary-foreground font-display font-bold text-sm hover:bg-primary-foreground/10 transition-all"
              >
                <ArrowLeft size={16} />
                Back to Parents hub
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ParentPresentation;
