import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ndgLogo from "@/assets/logos/neurodiversity-global.png";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    services: [
      { label: t("nav.whatWeDo"), href: "/what-we-do" },
      { label: t("nav.workshops"), href: "/workshops" },
      { label: t("nav.industries"), href: "/industries" },
      { label: "Neurodiversity Training", href: "/neurodiversity-training" },
      { label: "Neurodiversity Consultancy", href: "/neurodiversity-consultancy" },
      { label: "For Employers", href: "/for-employers" },
      { label: "For Public Sector", href: "/for-public-sector" },
      { label: "For Parents", href: "/for-parents" },
    ],
    company: [
      { label: t("nav.about"), href: "/about" },
      { label: "Team", href: "/about/team" },
      { label: "Blog", href: "/blog" },
      { label: "Community Voices", href: "/community-questions" },
      { label: "Data and Sources", href: "/sources" },
      { label: "Feedback", href: "/feedback" },
      { label: t("nav.contact"), href: "/#contact" },
    ],
    legal: [
      { label: t("footer.privacyPolicy"), href: "/privacy-policy" },
      { label: t("footer.accessibilityStatement"), href: "/accessibility-statement" },
      { label: t("footer.termsOfService"), href: "/terms-of-service" },
      { label: t("footer.cookiePolicy"), href: "/cookie-policy" },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-12">
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
                  <Link to={l.href} className="text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {l.label}
                  </Link>
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
