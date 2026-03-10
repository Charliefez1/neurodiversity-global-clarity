import { ArrowRight } from "lucide-react";
import sendNavigatorImg from "@/assets/resources/send-navigator.png";
import badParentsImg from "@/assets/resources/are-we-bad-parents.png";
import dopamineImg from "@/assets/resources/dopamine-on-demand.png";
import performanceImg from "@/assets/resources/neuroinclusive-performance.png";

const resources = [
  {
    title: "The SEND Navigator",
    description: "Plain English answers about SEND reform. What we know, what is being discussed, and what remains uncertain.",
    href: "#send-navigator",
    badge: "Interactive Tool",
    image: sendNavigatorImg,
  },
  {
    title: "Are We Bad Parents?",
    description: "One tired accusation. And the reality of parenting a neurodivergent child. An open letter that resonated with thousands.",
    href: "https://awbp.neuro.support/",
    badge: "Open Letter",
    image: badParentsImg,
    external: true,
  },
  {
    title: "The Day We Gave Our Children Dopamine",
    description: "Then wondered why they couldn't cope. Smartphones, dopamine, and what it means for neurodivergent young people.",
    href: "https://smartphonefree.neurodiversityglobal.com/",
    badge: "Long Read",
    image: dopamineImg,
    external: true,
  },
  {
    title: "Neuroinclusive Performance",
    description: "Understanding the performance curve, from growth to burnout, and where neuroinclusion makes the difference.",
    href: "https://understand-magic.lovable.app/",
    badge: "Interactive",
    image: performanceImg,
    external: true,
  },
];

const ResourcesSection = () => (
  <section id="resources" className="bg-primary text-primary-foreground py-16 lg:py-20">
    <div className="mx-auto max-w-wide px-6 lg:px-10">
      <p className="font-display font-bold text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
        Resources
      </p>
      <h2 className="font-display font-bold text-lg md:text-xl leading-tight mb-8">
        Key resources from our team
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {resources.map((resource) => (
          <a
            key={resource.title}
            href={resource.href}
            {...(resource.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex flex-col rounded-xl border border-border bg-background/60 overflow-hidden hover:bg-background hover:border-border transition-all shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={resource.image}
                alt={resource.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="inline-block self-start px-2.5 py-1 rounded-md bg-accent/15 text-accent text-[11px] font-display font-bold uppercase tracking-wider mb-3">
                {resource.badge}
              </span>
              <h3 className="font-display font-bold text-sm leading-tight mb-2">{resource.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1">{resource.description}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-accent text-xs font-semibold group-hover:gap-2.5 transition-all">
                {resource.external ? "Visit" : "Explore"} <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ResourcesSection;
