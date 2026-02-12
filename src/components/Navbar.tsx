import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Who We Work With", href: "/who-we-work-with" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Workshops", href: "/workshops" },
  {
    label: "About",
    href: "/#values",
    children: [
      { label: "Industries", href: "/industries/financial-services" },
      { label: "Evidence", href: "/#evidence" },
      { label: "Knowledge Base", href: "/knowledge-base" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

const NavLinkItem = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) => {
  const cls = "font-body font-bold text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded";
  if (href.startsWith("/") && !href.includes("#")) {
    return <Link to={href} className={cls} onClick={onClick}>{children}</Link>;
  }
  return <a href={href} className={cls} onClick={onClick}>{children}</a>;
};

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 font-body font-bold text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-accent/50 backdrop-blur-md border border-accent/20 rounded-lg shadow-lg py-2 z-50">
          {item.children!.map((child) => (
            <div key={child.label}>
              {child.href.startsWith("/") && !child.href.includes("#") ? (
                <Link
                  to={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors"
                >
                  {child.label}
                </Link>
              ) : (
                <a
                  href={child.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 text-sm font-bold text-white hover:bg-white/15 transition-colors"
                >
                  {child.label}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-wide px-6 lg:px-10 flex items-center justify-between h-16" aria-label="Main navigation">
        <Link to="/" className="font-display font-extrabold text-lg tracking-tight text-foreground">
          Neurodiversity<span className="text-accent"> Global</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <DesktopDropdown key={link.label} item={link} />
            ) : (
              <li key={link.label}>
                <NavLinkItem href={link.href}>{link.label}</NavLinkItem>
              </li>
            )
          )}
        </ul>

        <Link
          to="/#contact"
          className="hidden lg:inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/35 hover:scale-[1.02] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Book a call
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground focus-visible:outline-2 focus-visible:outline-accent rounded"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="font-body text-base text-foreground hover:text-accent transition-colors flex items-center gap-1"
                    aria-expanded={mobileAboutOpen}
                  >
                    {link.label}
                    <ChevronDown size={16} className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileAboutOpen && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {link.children!.map((child) => (
                        <li key={child.label}>
                          {child.href.startsWith("/") && !child.href.includes("#") ? (
                            <Link
                              to={child.href}
                              onClick={() => setOpen(false)}
                              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              {child.label}
                            </Link>
                          ) : (
                            <a
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                              {child.label}
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="font-body text-base text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-body text-base text-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              )
            )}
          </ul>
          <Link
            to="/#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-display font-semibold text-sm"
          >
            Book a call
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
