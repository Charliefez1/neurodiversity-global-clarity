import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEOHead from "@/components/SEOHead";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";
import PageHero from "@/components/templates/PageHero";
import PageSection from "@/components/templates/PageSection";
import PageCTA from "@/components/templates/PageCTA";
import { clientCategories, trustSignals } from "@/data/clients";
import { Award, CheckCircle2, ExternalLink } from "lucide-react";

const Clients = () => {
  return (
    <>
      <SEOHead
        title="Our Clients — Neurodiversity Global"
        description="750+ organisations trust Neurodiversity Global for neurodiversity training, strategy, and workforce development. See who we work with across public, private, and third sectors."
        path="/clients"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://www.neurodiversityglobal.com/" },
          { name: "Clients", url: "https://www.neurodiversityglobal.com/clients" },
        ])}
      />
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Clients" }]} />
      <main>
        <PageHero
          badge="Our clients"
          title="750+ organisations. Every sector. One shared ambition."
          description="From FTSE 250 boardrooms to NHS trusts, government departments to high-growth startups — these are the organisations building neuroinclusive workplaces with us."
        />

        {/* Trust signals */}
        <PageSection id="trust" badge="Performance" title="Why organisations choose us">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustSignals.map((signal, i) => (
              <div
                key={i}
                className="flex gap-3 items-start p-5 rounded-lg border border-border bg-card"
              >
                <Award size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{signal}</p>
              </div>
            ))}
          </div>
        </PageSection>

        {/* Client categories */}
        {clientCategories.map((cat, catIdx) => (
          <PageSection
            key={cat.title}
            id={`clients-${catIdx}`}
            badge={`${cat.clients.length} organisations`}
            title={cat.title}
            description={cat.description}
            variant={catIdx % 2 === 1 ? "secondary" : "default"}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {cat.clients.map((client) => (
                <a
                  key={client.name}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-5 hover:border-accent/40 hover:shadow-sm transition-all text-center"
                >
                  <div className="h-10 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-8 w-auto max-w-[100px] object-contain grayscale group-hover:grayscale-0 transition-all"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="font-display font-semibold text-xs text-card-foreground">{client.name}</p>
                    <ExternalLink size={10} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </div>
                </a>
              ))}
            </div>
          </PageSection>
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
