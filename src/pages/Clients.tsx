import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import PageCTA from "@/components/templates/PageCTA";
import { clientCategories, trustSignals } from "@/data/clients";
import { Award, ExternalLink } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";
import mixedImg from "@/assets/industries/mixed-professions.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Clients = () => {
  return (
    <>
      <SEOHead
        title="Our Clients. Neurodiversity Global"
        description="750+ organisations trust Neurodiversity Global for neurodiversity training, strategy, and workforce development. See who we work with across public, private, and third sectors."
        path="/clients"
      />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.neurodiversityglobal.com/" },
        { name: "Clients", url: "https://www.neurodiversityglobal.com/clients" },
      ])} />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Clients" }]} />
      <main>
        {/* Hero — split with image */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-4">Our clients</p>
                <h1 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight leading-[1.1]">
                  750+ organisations. Every sector. One shared ambition.
                </h1>
                <p className="mt-5 text-sm md:text-base leading-relaxed opacity-80 max-w-[58ch]">
                  From FTSE 250 boardrooms to NHS trusts, government departments to high-growth startups: these are the organisations building neuroinclusive workplaces with us.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={mixedImg} alt="Diverse professionals from multiple sectors" className="w-full h-[340px] lg:h-[400px] object-cover" loading="lazy" />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl bg-card border border-border shadow-lg p-5 max-w-[200px]">
                  <p className="font-display font-bold text-2xl text-accent">750+</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">Organisations across every sector</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust signals */}
        <section className="bg-warm-stone py-16 lg:py-20">
          <div className="mx-auto max-w-wide px-6 lg:px-10">
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">Performance</p>
            <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-8">Why organisations choose us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustSignals.map((signal, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  className="flex gap-3 items-start p-5 rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
                >
                  <div className="h-1 absolute top-0 left-0 right-0" style={{ backgroundColor: NEURO_COLOURS[i % NEURO_COLOURS.length] }} />
                  <Award size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{signal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client categories */}
        {clientCategories.map((cat, catIdx) => (
          <section
            key={cat.title}
            id={`clients-${catIdx}`}
            className={`${catIdx % 2 === 0 ? "bg-primary" : "bg-warm-stone"} py-20 lg:py-28`}
          >
            <div className="mx-auto max-w-wide px-6 lg:px-10">
              <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
                {cat.clients.length} organisations
              </p>
              <h2 className={`font-display font-bold text-xl md:text-2xl leading-tight mb-3 ${catIdx % 2 === 0 ? "text-primary-foreground" : "text-foreground"}`}>
                {cat.title}
              </h2>
              <p className={`text-sm leading-relaxed mb-10 max-w-[55ch] ${catIdx % 2 === 0 ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {cat.description}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.clients.map((client, ci) => (
                  <motion.a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={ci}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20px" }}
                    variants={fadeUp}
                    className={`group flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-all overflow-hidden ${
                      catIdx % 2 === 0
                        ? "border border-primary-foreground/10 bg-primary-foreground/[0.06] hover:bg-primary-foreground/[0.12]"
                        : "border border-border bg-card hover:border-accent/40 hover:shadow-md"
                    }`}
                  >
                    <div className="h-10 flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className={`h-8 w-auto max-w-[100px] object-contain transition-all ${
                          catIdx % 2 === 0 ? "brightness-200 opacity-60 group-hover:opacity-100" : "grayscale group-hover:grayscale-0"
                        }`}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <p className={`font-display font-semibold text-xs ${catIdx % 2 === 0 ? "text-primary-foreground" : "text-card-foreground"}`}>{client.name}</p>
                      <ExternalLink size={10} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <PageCTA
          title="Join 750+ organisations building neuroinclusive workplaces"
          description="A 30-minute discovery call to understand your context, identify priorities, and outline what training or support would look like. No obligation."
        />
      </main>
      <Footer />
    </>
  );
};

export default Clients;
