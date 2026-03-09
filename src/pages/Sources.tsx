import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageCTA from "@/components/templates/PageCTA";
import SourceCard from "@/components/SourceCard";
import { NEURO_COLOURS } from "@/data/neuroColours";
import { Database, BookOpen, Scale, Microscope, Building2, Baby, Briefcase, FileText, Stethoscope, Globe, Wrench } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const } }),
};

const sources = [
  { category: "Core Evidence & Research Reports", items: [
    { title: "Neurodiversity at Work 2024 (NiB & Birkbeck)", domain: "neurodiversityinbusiness.org", url: "https://neurodiversityinbusiness.org/", description: "Large UK sample with rich data on strengths, wellbeing, co-occurrence, and employer practices." },
    { title: "Neurodiversity at Work 2023 (NiB)", domain: "neurodiversityinbusiness.org", url: "https://neurodiversityinbusiness.org/", description: "Benchmark survey of 990 neurodivergent workers and employers on workplace experience." },
    { title: "IES: Neurodiversity, Jobsearch and Work (2024)", domain: "employment-studies.co.uk", url: "https://www.employment-studies.co.uk/", description: "Evidence review on barriers, good practice, and employment programmes for neurodivergent people." },
    { title: "Alludo: Neurodiversity at Work Global Survey", domain: "alludo.com", url: "https://www.alludo.com/", description: "International data on strengths and challenges as experienced by neurodivergent employees." },
  ]},
  { category: "UK Guidance: Employers, HR & Policy", items: [
    { title: "ACAS: Making Your Organisation Neuroinclusive", domain: "acas.org.uk", url: "https://www.acas.org.uk/neurodiversity", description: "Practical UK guidance on recruitment, training, policies, and culture for neuroinclusion." },
    { title: "ACAS: Adjustments for Neurodiversity", domain: "acas.org.uk", url: "https://www.acas.org.uk/reasonable-adjustments", description: "Examples of reasonable adjustments. Clarifies that diagnosis is not always required." },
    { title: "Withers: ACAS Advice on Employing Neurodiverse Staff", domain: "withersworldwide.com", url: "https://www.withersworldwide.com/", description: "Overview of ACAS guidance with Equality Act framing and benefits of inclusion." },
    { title: "Menzies Law: ACAS Guidance Analysis", domain: "menzies.co.uk", url: "https://www.menzies.co.uk/", description: "Analysis of ACAS neurodiversity guidance, legal risk reduction, and key inclusion benefits." },
  ]},
  { category: "CIPD & Professional HR Bodies", items: [
    { title: "CIPD: Neuroinclusion at Work Report 2024", domain: "cipd.org", url: "https://www.cipd.org/uk/knowledge/reports/neurodiversity-work/", description: "Survey of employers covering culture, awareness, and recommended principles for neuroinclusion." },
    { title: "Morgan LaRoche: CIPD Neuroinclusion Summary", domain: "morganlaroche.com", url: "https://www.morganlaroche.com/", description: "Summary of CIPD's guide covering definitions, language, culture, recruitment, and manager capability." },
    { title: "CEFM: CIPD Seven Key Principles", domain: "cefm.co.uk", url: "https://www.cefm.co.uk/", description: "Clear outline of CIPD's seven key principles and what a neuroinclusive organisation looks like." },
    { title: "UK Employment Hub: From Awareness to Action", domain: "ukemploymenthub.com", url: "https://www.ukemploymenthub.com/", description: "Practical application of CIPD principles, especially flexible working and culture." },
  ]},
  { category: "Sector-Specific UK Examples", items: [
    { title: "NHS Employers: Embracing Neurodiversity", domain: "nhsemployers.org", url: "https://www.nhsemployers.org/", description: "Health passports, ongoing conversations, recruitment, and inclusive working practices in the NHS." },
    { title: "GMB Union: Thinking Differently at Work Toolkit", domain: "gmb.org.uk", url: "https://www.gmb.org.uk/", description: "Union-oriented toolkit with model policy, recruitment, and adjustment advice." },
  ]},
  { category: "International & Business Case", items: [
    { title: "Harvard Business Review: Neurodiversity as a Competitive Advantage", domain: "hbr.org", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage", description: "Case studies from SAP, HPE, and Microsoft. The landmark business case for neurodiversity programmes." },
    { title: "ILO Global Business and Disability Network", domain: "ilo.org", url: "https://www.ilo.org/global/topics/disability-and-work/lang--en/index.htm", description: "Global policy framing and reasonable adjustments for neurominorities." },
    { title: "RGA: Beyond Accommodation", domain: "rgare.com", url: "https://www.rgare.com/", description: "Advancing neurodiversity as a competitive advantage in insurance and financial services." },
    { title: "Deloitte: The Value of Diversity", domain: "deloitte.com", url: "https://www2.deloitte.com/", description: "Research on how diversity of thought drives innovation and business performance." },
    { title: "McKinsey: Diversity Wins", domain: "mckinsey.com", url: "https://www.mckinsey.com/featured-insights/diversity-and-inclusion", description: "Evidence that diverse teams outperform their peers across key business metrics." },
  ]},
  { category: "Practical Implementation & Adjustments", items: [
    { title: "ACAS: Understanding Neurodiversity at Work", domain: "acas.org.uk", url: "https://www.acas.org.uk/neurodiversity", description: "Disability status under the Equality Act, managing performance, conduct, and capability." },
    { title: "Backhouse Jones: Employer Briefing on Neurodiversity", domain: "backhouse-jones.co.uk", url: "https://www.backhouse-jones.co.uk/", description: "Plain-English employer briefing on legal duties and inclusive practice." },
    { title: "Alludo: Strengths, Challenges, and What Needs to Change", domain: "alludo.com", url: "https://www.alludo.com/", description: "What needs to change in workplace practice based on neurodivergent employee feedback." },
  ]},
  { category: "Children & Young People", items: [
    { title: "NHS Digital: Mental Health of Children and Young People", domain: "digital.nhs.uk", url: "https://digital.nhs.uk/data-and-information/publications/statistical/mental-health-of-children-and-young-people-in-england", description: "National survey data on the prevalence of mental health conditions in children and young people in England." },
    { title: "National Autistic Society: Autism and Mental Health", domain: "autism.org.uk", url: "https://www.autism.org.uk/advice-and-guidance/topics/mental-health", description: "Evidence and guidance on the mental health outcomes of autistic children and adults." },
    { title: "UCL: Masking and Camouflaging in Autism", domain: "ucl.ac.uk", url: "https://www.ucl.ac.uk/pals/research/clinical-educational-and-health-psychology", description: "Research on the costs of masking in autistic children and the association with mental health difficulties." },
    { title: "Children's Commissioner: Waiting Lists and SEND", domain: "childrenscommissioner.gov.uk", url: "https://www.childrenscommissioner.gov.uk/", description: "Reports on children waiting years for assessments, school nurses, and SEND support across England." },
    { title: "Contact: Counting the Costs (Parent Carer Research)", domain: "contact.org.uk", url: "https://contact.org.uk/about-us/research/", description: "Large-scale research on the financial, emotional, and health impact on parents raising disabled and neurodivergent children." },
    { title: "UK Government: Keeping Children Safe in Education", domain: "gov.uk", url: "https://www.gov.uk/government/publications/keeping-children-safe-in-education--2", description: "Statutory safeguarding guidance identifying neurodivergent children as at heightened risk." },
    { title: "Youth Justice Board: SEN in the Justice System", domain: "gov.uk", url: "https://www.gov.uk/government/organisations/youth-justice-board-for-england-and-wales", description: "Data showing eighty percent of children cautioned or sentenced have special educational needs." },
    { title: "LGSCO: SEND Tribunal Appeals Data", domain: "lgo.org.uk", url: "https://www.lgo.org.uk/", description: "Data on local authority SEND tribunal appeal outcomes." },
  ]},
  { category: "Legislation and Policy", items: [
    { title: "Equality Act 2010", domain: "legislation.gov.uk", url: "https://www.legislation.gov.uk/ukpga/2010/15/contents", description: "The primary legislation protecting disabled people, including neurodivergent individuals, from discrimination." },
    { title: "EHRC: Reasonable Adjustments for Disabled Workers", domain: "equalityhumanrights.com", url: "https://www.equalityhumanrights.com/guidance/reasonable-adjustments-practice", description: "Guidance on the duty to make reasonable adjustments under the Equality Act." },
    { title: "NHS England: Neurodiversity", domain: "england.nhs.uk", url: "https://www.england.nhs.uk/", description: "NHS guidance and resources on neurodevelopmental conditions." },
  ]},
  { category: "Organisations", items: [
    { title: "ADHD Foundation", domain: "adhdfoundation.org.uk", url: "https://www.adhdfoundation.org.uk/", description: "The UK's leading ADHD charity, providing training, resources, and advocacy." },
    { title: "British Dyslexia Association", domain: "bdadyslexia.org.uk", url: "https://www.bdadyslexia.org.uk/", description: "National charity offering guidance, accreditation, and employer support." },
    { title: "Autism Alliance UK", domain: "autism-alliance.org.uk", url: "https://www.autism-alliance.org.uk/", description: "Network of specialist autism charities across the UK." },
    { title: "Dyspraxia Foundation", domain: "dyspraxiafoundation.org.uk", url: "https://dyspraxiafoundation.org.uk/", description: "Charity raising awareness of dyspraxia/DCD and supporting affected individuals." },
  ]},
];

const categoryIcons: Record<string, typeof Database> = {
  "Core Evidence & Research Reports": Microscope,
  "UK Guidance: Employers, HR & Policy": FileText,
  "CIPD & Professional HR Bodies": Briefcase,
  "Sector-Specific UK Examples": Stethoscope,
  "International & Business Case": Globe,
  "Practical Implementation & Adjustments": Wrench,
  "Children & Young People": Baby,
  "Legislation and Policy": Scale,
  Organisations: Building2,
};

const Sources = () => {
  return (
    <main>
      <SEOHead title="Data and Sources | Neurodiversity Global" description="Curated sources, research, and references on neurodiversity in the workplace." path="/sources" />
      <Navbar />

      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-wide px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-4">
            <Database size={20} className="text-accent" />
            <span className="text-xs font-display font-bold uppercase tracking-widest text-primary-foreground/50">Evidence Base</span>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1] mb-4">Data and Sources</h1>
          <p className="text-sm md:text-base text-primary-foreground/70 max-w-[58ch] leading-relaxed">Curated research, legislation, and key organisations shaping neuroinclusion policy and practice in the UK.</p>
        </div>
      </section>

      {sources.map((group, gi) => {
        const Icon = categoryIcons[group.category] || Database;
        const isDark = gi % 2 === 1;
        return (
          <section key={group.category} className={`${isDark ? "bg-primary" : "bg-warm-stone"} py-16 lg:py-24`}>
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${NEURO_COLOURS[gi % NEURO_COLOURS.length]}20`, color: NEURO_COLOURS[gi % NEURO_COLOURS.length] }}>
                  <Icon size={16} />
                </div>
                <h2 className={`font-display font-bold text-lg ${isDark ? "text-primary-foreground" : "text-foreground"}`}>{group.category}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((s, si) => (
                  <motion.div key={s.url} custom={si} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} variants={fadeUp}>
                    <SourceCard title={s.title} domain={s.domain} url={s.url} description={s.description} category={group.category} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <PageCTA title="Need help interpreting the evidence?" description="We can walk you through any of these sources and what they mean for your organisation." />
      <Footer />
    </main>
  );
};

export default Sources;
