import { MessageCircle } from "lucide-react";

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm shadow-lg shadow-accent/30 hover:shadow-xl hover:scale-105 transition-all"
      aria-label="Get in touch"
    >
      <MessageCircle size={16} />
      Get in touch
    </button>
  );
};

export default FloatingContactButton;
