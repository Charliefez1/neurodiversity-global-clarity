import { ArrowRight, GraduationCap, BookOpen, Shield, Briefcase, Users, Building2, Heart, Mic } from "lucide-react";
import { useTranslation } from "react-i18next";
import TrustIndicators from "@/components/TrustIndicators";

const categories = [
  { labelKey: "training.coreAwareness", icon: BookOpen, href: "/workshops#core" },
  { labelKey: "training.champions", icon: Shield, href: "/workshops#core" },
  { labelKey: "training.managers", icon: Briefcase, href: "/workshops#core" },
  { labelKey: "training.leaders", icon: Users, href: "/workshops#core" },
  { labelKey: "training.executive", icon: Building2, href: "/workshops#core" },
  { labelKey: "training.hr", icon: Heart, href: "/workshops#role-function" },
  { labelKey: "training.ld", icon: GraduationCap, href: "/workshops#role-function" },
  { labelKey: "training.industry", icon: Building2, href: "/workshops#industry" },
  { labelKey: "training.strategyLeadership", icon: Shield, href: "/workshops#strategy" },
  { labelKey: "training.keynotes", icon: Mic, href: "/workshops#keynotes" },
];

const TrainingCatalogueBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-warm-stone py-14 lg:py-20">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="rounded-xl border border-border bg-card p-7 lg:p-10 shadow-sm">
          <div className="lg:flex lg:gap-10">
            {/* Left column */}
            <div className="lg:w-[280px] shrink-0 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                  <GraduationCap size={20} className="text-accent" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-extrabold text-xl text-accent leading-none">50+</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">Neurodiversity In Work Training Sessions</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("hero.trainingCardDesc")}
              </p>
            </div>

            {/* Right column */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((cat) => (
                  <a
                    key={cat.labelKey}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border bg-background text-xs text-foreground hover:bg-muted transition-colors"
                  >
                    <cat.icon size={12} className="text-accent shrink-0" aria-hidden="true" />
                    {t(cat.labelKey)}
                  </a>
                ))}
              </div>

              <a
                href="/workshops"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/45 hover:scale-[1.02] transition-all"
              >
                {t("hero.browseCatalogue")}
                <ArrowRight size={16} aria-hidden="true" />
              </a>

              <p className="mt-4 text-xs text-muted-foreground">
                {t("hero.peopleTrained")}
              </p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-6 pt-6 border-t border-border">
            <TrustIndicators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCatalogueBanner;
