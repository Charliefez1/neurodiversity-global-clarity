import { TrendingUp, DollarSign, Building2, ThumbsUp } from "lucide-react";
import { NEURO_COLOURS } from "@/data/neuroColours";

const stats = [
  {
    icon: TrendingUp,
    value: "30%",
    label: "Better Risk Spotting",
    description: "Cognitively diverse teams (Deloitte)",
    source: "https://www.deloitte.com/us/en/insights/topics/diversity-equity-inclusion/unleashing-innovation-with-neuroinclusion.html",
  },
  {
    icon: DollarSign,
    value: "28%",
    label: "Higher Revenue",
    description: "Inclusive organisations vs peers",
    source: "https://www.natwestmentor.co.uk/news/neurodiversity-in-the-workplace",
  },
  {
    icon: Building2,
    value: "600+",
    label: "Companies Trained",
    description: "Across industries globally (NDG)",
    source: null,
  },
  {
    icon: ThumbsUp,
    value: "96%",
    label: "Would Recommend Us",
    description: "Client satisfaction (NDG)",
    source: null,
  },
];

const StatsBar = () => {
  return (
    <section className="relative pt-0 pb-10 lg:pb-14">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow border-t-[3px]"
              style={{ borderTopColor: NEURO_COLOURS[idx % NEURO_COLOURS.length] }}
            >
              <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon size={20} className="text-accent" aria-hidden="true" />
              </div>
              <p className="font-display font-bold text-xl text-primary-foreground">{stat.value}</p>
              <p className="font-display font-semibold text-sm text-primary-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-white/70 mt-1.5 leading-relaxed">{stat.description}</p>
              {stat.source && (
                <a
                  href={stat.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs text-accent hover:underline"
                >
                  View source
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
