import { useState } from "react";
import { Send, CheckCircle, Mail, Phone, MessageCircle, Calendar } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { NEURO_COLOURS } from "@/data/neuroColours";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  organisation: z.string().trim().max(200).optional(),
  contact_method: z.enum(["email", "phone", "whatsapp", "other"]),
  service_interest: z.enum(["workshops", "consultancy", "coaching", "keynotes", "other"]),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(3000),
});

const contactMethods = [
  { value: "email" as const, label: "Email", icon: Mail },
  { value: "phone" as const, label: "Phone / Video call", icon: Phone },
  { value: "whatsapp" as const, label: "WhatsApp", icon: MessageCircle },
] as const;

const serviceOptions = [
  { value: "workshops" as const, label: "Workshops" },
  { value: "consultancy" as const, label: "Consultancy" },
  { value: "coaching" as const, label: "Coaching" },
  { value: "keynotes" as const, label: "Keynotes" },
  { value: "other" as const, label: "Other" },
] as const;

interface ContactFormProps {
  pageSource?: string;
  variant?: "default" | "compact";
  dark?: boolean;
}

const ContactForm = ({ pageSource, variant = "default", dark = false }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "phone" | "whatsapp" | "other">("email");
  const [serviceInterest, setServiceInterest] = useState<"workshops" | "consultancy" | "coaching" | "keynotes" | "other">("workshops");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = contactSchema.safeParse({
      name,
      email,
      organisation: organisation || undefined,
      contact_method: contactMethod,
      service_interest: serviceInterest,
      message,
    });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setStatus("sending");

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: result.data.name,
      email: result.data.email,
      organisation: result.data.organisation || null,
      contact_method: result.data.contact_method,
      message: `[${result.data.service_interest}] ${result.data.message}`,
      page_source: pageSource || null,
    });

    if (dbError) {
      setStatus("error");
      setError("Something went wrong. Please try again.");
      return;
    }

    setStatus("sent");
    setName("");
    setEmail("");
    setOrganisation("");
    setMessage("");
    setContactMethod("email");
    setServiceInterest("workshops");
  };

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-accent/20 bg-accent/10 p-6 flex items-center gap-3">
        <CheckCircle size={20} className="text-accent shrink-0" />
        <div>
          <p className="text-sm font-display font-bold text-foreground">Message sent</p>
          <p className="text-xs text-muted-foreground mt-0.5">We'll be in touch soon. Thank you.</p>
        </div>
      </div>
    );
  }

  const isCompact = variant === "compact";

  const inputClass = dark
    ? "w-full rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground px-3.5 py-2.5 text-sm placeholder:text-primary-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors"
    : "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-colors";

  const labelClass = dark
    ? "text-xs font-display font-semibold text-primary-foreground/50 mb-1.5 block"
    : "text-xs font-display font-semibold text-muted-foreground mb-1.5 block";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name + Email */}
      <div className={`grid ${isCompact ? "grid-cols-1" : "sm:grid-cols-2"} gap-3`}>
        <div>
          <label className={labelClass}>Name *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={100}
            className={inputClass}
            disabled={status === "sending"}
            required
          />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            maxLength={255}
            className={inputClass}
            disabled={status === "sending"}
            required
          />
        </div>
      </div>

      {/* Organisation */}
      {!isCompact && (
        <div>
          <label className={labelClass}>Organisation (optional)</label>
          <input
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            placeholder="Your company or school"
            maxLength={200}
            className={inputClass}
            disabled={status === "sending"}
          />
        </div>
      )}

      {/* How can we help? */}
      <div>
        <label className={dark
          ? "text-xs font-display font-semibold text-primary-foreground/50 mb-2 block"
          : "text-xs font-display font-semibold text-muted-foreground mb-2 block"
        }>
          How can we help?
        </label>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((option, i) => {
            const isActive = serviceInterest === option.value;
            const accentColour = NEURO_COLOURS[i % NEURO_COLOURS.length];
            return (
              <label
                key={option.value}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-display font-semibold cursor-pointer transition-all ${
                  isActive
                    ? "shadow-sm scale-[1.02]"
                    : dark
                      ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/60 hover:border-accent/30"
                      : "border-border bg-card text-muted-foreground hover:border-accent/30"
                }`}
                style={
                  isActive
                    ? { borderColor: accentColour, backgroundColor: `${accentColour}15`, color: accentColour }
                    : undefined
                }
              >
                <input
                  type="radio"
                  name="service_interest"
                  value={option.value}
                  checked={isActive}
                  onChange={() => setServiceInterest(option.value)}
                  className="sr-only"
                />
                {option.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Preferred contact method */}
      <div>
        <label className={dark
          ? "text-xs font-display font-semibold text-primary-foreground/50 mb-2 block"
          : "text-xs font-display font-semibold text-muted-foreground mb-2 block"
        }>
          How would you like us to get in touch?
        </label>
        <div className="flex flex-wrap gap-2">
          {contactMethods.map((method, i) => {
            const isActive = contactMethod === method.value;
            const accentColour = NEURO_COLOURS[i % NEURO_COLOURS.length];
            return (
              <label
                key={method.value}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-display font-semibold cursor-pointer transition-all ${
                  isActive
                    ? "shadow-sm scale-[1.02]"
                    : dark
                      ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground/60 hover:border-accent/30"
                      : "border-border bg-card text-muted-foreground hover:border-accent/30"
                }`}
                style={
                  isActive
                    ? { borderColor: accentColour, backgroundColor: `${accentColour}15`, color: accentColour }
                    : undefined
                }
              >
                <input
                  type="radio"
                  name="contact_method"
                  value={method.value}
                  checked={isActive}
                  onChange={() => setContactMethod(method.value)}
                  className="sr-only"
                />
                <method.icon size={13} />
                {method.label}
              </label>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>Message *</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us how we can help..."
          rows={isCompact ? 2 : 3}
          maxLength={3000}
          className={inputClass}
          disabled={status === "sending"}
          required
        />
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground font-display font-bold text-sm shadow-md shadow-accent/25 hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50"
      >
        <Send size={14} />
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
