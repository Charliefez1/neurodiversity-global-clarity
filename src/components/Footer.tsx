import { Link } from "react-router-dom";

const footerLinks = {
  services: [
    { label: "Workshops", href: "/workshops" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Who We Work With", href: "/who-we-work-with" },
    { label: "Industries", href: "/industries/financial-services" },
  ],
  company: [
    { label: "About", href: "/#values" },
    { label: "Evidence", href: "/#evidence" },
    { label: "Contact", href: "/#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-warm-stone text-foreground border-t border-border">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
             <p className="font-display font-extrabold text-base mb-3">
              Neurodiversity<span className="text-accent"> Global</span>
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              UK-based, neurodivergent-led consultancy redefining neuroinclusion as business-critical infrastructure. We do not deliver tick-box inclusion. We redesign systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-4">Services</p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-4">Company</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Manifesto line */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl italic">
            "We do not do performative inclusion. We do the hard, human work of making it real. We are here to take the pain out of inclusion for everyone."
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Neurodiversity Global. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Designed with accessibility at the centre.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
