import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    services: [
      { label: t("nav.workshops"), href: "/workshops" },
      { label: "Neurodiversity Training", href: "/neurodiversity-training" },
      { label: "Neurodiversity Consultancy", href: "/neurodiversity-consultancy" },
      { label: t("nav.whatWeDo"), href: "/what-we-do" },
      { label: t("nav.whoWeWorkWith"), href: "/who-we-work-with" },
      { label: t("nav.industries"), href: "/industries" },
      { label: "Blog", href: "/blog" },
      { label: "Community Voices", href: "/community-questions" },
      { label: "Data and Sources", href: "/sources" },
      { label: "Feedback", href: "/feedback" },
    ],
    company: [
      { label: t("nav.about"), href: "/#values" },
      { label: t("nav.evidence"), href: "/#evidence" },
      { label: t("nav.contact"), href: "/#contact" },
    ],
    legal: [
      { label: t("footer.privacyPolicy"), href: "#" },
      { label: t("footer.accessibilityStatement"), href: "#" },
      { label: t("footer.termsOfService"), href: "#" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      {/* Contact form section */}
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-16 pb-12 border-b border-primary-foreground/10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <p className="font-display font-bold text-sm uppercase tracking-[0.15em] text-accent mb-3">
              Get in touch
            </p>
            <h2 className="font-display font-bold text-xl md:text-2xl leading-tight text-primary-foreground mb-3">
              Start a conversation
            </h2>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-[44ch]">
              Whether you're an employer, school, or family, we'd love to hear from you. No obligation, no sales pressure.
            </p>
          </div>
          <div className="rounded-xl bg-primary-foreground/[0.06] border border-primary-foreground/10 p-6">
            <ContactForm pageSource="footer" variant="compact" dark />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-wide px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src={ndgLogo}
              alt="Neurodiversity Global"
              className="h-10 md:h-12 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-xs text-primary-foreground/70 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">{t("footer.services")}</p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">{t("footer.company")}</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                     <a href={l.href} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">{t("footer.legal")}</p>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Manifesto line */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/70 leading-relaxed max-w-2xl italic">
            "{t("footer.manifesto")}"
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <p className="text-xs text-primary-foreground/50">{t("footer.designedWith")}</p>
        </div>

        {/* i18n notice */}
        <div className="mt-4 text-center">
          <p className="text-xs text-primary-foreground/40 italic">{t("i18nNotice")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
