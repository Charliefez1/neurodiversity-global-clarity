import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Who We Work With", href: "#pathways" },
  { label: "What We Do", href: "#services" },
  { label: "Industries", href: "#" },
  { label: "Evidence", href: "#evidence" },
  { label: "About", href: "#values" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-wide px-6 lg:px-10 flex items-center justify-between h-16" aria-label="Main navigation">
        <a href="#" className="font-display font-800 text-lg tracking-tight text-foreground">
          Neurodiversity<span className="text-accent"> Global</span>
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-display font-600 text-sm hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Book a call
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground focus-visible:outline-2 focus-visible:outline-accent rounded"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center px-5 py-2.5 rounded-md bg-accent text-accent-foreground font-display font-semibold text-sm"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
