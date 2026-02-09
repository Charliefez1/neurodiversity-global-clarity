import { useEffect } from "react";

/**
 * JSON-LD structured data component.
 * Renders a <script type="application/ld+json"> in the document head.
 *
 * Supports: Organisation, Service, FAQPage, Article, BreadcrumbList
 */
interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export default JsonLd;

// ============================
// Pre-built structured data factories
// ============================

export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Neurodiversity Global",
  url: "https://www.neurodiversityglobal.com",
  description:
    "UK-based global consultancy specialising in neurodiversity in work, leadership, systems design and performance.",
  foundingDate: "2010",
  areaServed: "Worldwide",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@neurodiversityglobal.com",
    contactType: "sales",
    availableLanguage: "English",
  },
};

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Neurodiversity Global",
    },
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
