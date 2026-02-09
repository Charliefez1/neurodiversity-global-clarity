const footerLinks = {
  services: [
    { label: "Training", href: "#services" },
    { label: "Coaching & Support", href: "#services" },
    { label: "Strategy", href: "#services" },
    { label: "Customer Capability", href: "#services" },
  ],
  company: [
    { label: "About", href: "#values" },
    { label: "Evidence", href: "#evidence" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display font-extrabold text-lg mb-3">
              Neurodiversity<span className="text-accent"> Global</span>
            </p>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              UK-based global consultancy specialising in neurodiversity in work, leadership, systems design and performance.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">Services</p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">Company</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-display font-semibold text-sm uppercase tracking-widest opacity-50 mb-4">Legal</p>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Neurodiversity Global. All rights reserved.</p>
          <p className="text-xs opacity-50">Designed with accessibility at the centre.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
