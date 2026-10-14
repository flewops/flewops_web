import { useEffect } from "react";
import { BASE_URL } from "../lib/structuredData";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: string;
  jsonLd?: object | object[];
};

const SITE_NAME = "FlewOps Global";
const DEFAULT_IMAGE = "/logo.png";

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setJsonLd(id: string, json: string) {
  const scriptId = `jsonld-${id}`;
  let el = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = scriptId;
    el.setAttribute("type", "application/ld+json");
    document.head.appendChild(el);
  }
  el.textContent = json;
}

export default function SEO({
  title,
  description,
  keywords,
  path = "",
  image = DEFAULT_IMAGE,
  type = "website",
  jsonLd,
}: SEOProps) {
  // Pages pass jsonLd as an inline literal, so depend on its serialized form
  // rather than its identity to avoid re-running on every render.
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;
    const img = image.startsWith("http") ? image : `${BASE_URL}${image}`;

    document.title = fullTitle;

    // Core meta
    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("name", "author", SITE_NAME);

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:image:alt", title);
    setMeta("property", "og:locale", "en_US");

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    // Canonical
    setLink("canonical", url);

    // JSON-LD structured data
    if (jsonLdText) {
      setJsonLd("page", jsonLdText);
    }
  }, [title, description, keywords, path, image, type, jsonLdText]);

  return null;
}
