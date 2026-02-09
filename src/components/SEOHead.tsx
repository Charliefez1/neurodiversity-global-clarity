import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/**
 * SEO component that sets document title and meta tags.
 * Must be rendered on every page.
 *
 * Title format: "{Page Title} — Neurodiversity Global"
 * Titles should be under 60 characters.
 * Descriptions should be under 160 characters.
 */
const SEOHead = ({
  title,
  description,
  path,
  type = "website",
  noIndex = false,
}: SEOHeadProps) => {
  const fullTitle = `${title} — Neurodiversity Global`;
  const canonicalUrl = `https://www.neurodiversityglobal.com${path}`;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Standard meta
    setMeta("description", description);
    if (noIndex) {
      setMeta("robots", "noindex, nofollow");
    } else {
      setMeta("robots", "index, follow");
    }

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Open Graph
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:type", type, "property");
    setMeta("og:site_name", "Neurodiversity Global", "property");

    // Twitter
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
  }, [fullTitle, description, canonicalUrl, type, noIndex]);

  return null;
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.content = content;
}

export default SEOHead;
