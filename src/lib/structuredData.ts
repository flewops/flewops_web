import { services, faqs, type FAQ, type Service } from "./data";

export const BASE_URL = "https://flewops.com";

// Organization schema — appears on every page via index.html
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FlewOps Global",
  alternateName: "FlewOps",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    "FlewOps Global is a forward-thinking technology company founded in 2025 that delivers innovative, secure, and scalable digital solutions for modern enterprises. The company specializes in data security, ERP solutions, e-commerce, real-time chat, and network solutions.",
  foundingDate: "2025",
  email: "business@flewops.com",
  telephone: "+91-88255-72114",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/company/flewops-global/",
  ],
  knowsAbout: [
    "Data Security",
    "ERP Systems",
    "E-Commerce Solutions",
    "Real-Time Chat Applications",
    "Network Solutions",
    "Digital Transformation",
    "Cloud Infrastructure",
    "Zero-Trust Architecture",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise Digital Solutions",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.shortDesc,
        url: `${BASE_URL}/services/${s.slug}`,
      },
    })),
  },
};

// WebSite schema for sitelinks search box
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FlewOps Global",
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    name: "FlewOps Global",
    url: BASE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// Speakable schema — tells AI/voice assistants which content is best for TTS/summaries
export function speakableSchema(path: string, cssSelectors: string[] = ["h1", ".ai-summary"]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `${BASE_URL}${path}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

// Service schema for individual service pages
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "FlewOps Global",
      url: BASE_URL,
    },
    serviceType: service.name,
    areaServed: "Global",
    url: `${BASE_URL}/services/${service.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: f,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: "Custom enterprise solution — contact for pricing",
    },
  };
}

// BreadcrumbList schema
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

// WebPage schema for about/contact pages
export function webPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${BASE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "FlewOps Global",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "FlewOps Global",
    },
  };
}

// AboutPage schema — specifically for AI engines to understand the entity
export function aboutPageSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${BASE_URL}/about/company`,
    mainEntity: {
      "@type": "Organization",
      name: "FlewOps Global",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      foundingDate: "2025",
      description,
      email: "business@flewops.com",
      telephone: "+91-88255-72114",
      address: { "@type": "PostalAddress", addressCountry: "IN" },
      sameAs: ["https://www.linkedin.com/company/flewops-global/"],
    },
  };
}

// CollectionPage for careers
export function collectionPageSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${BASE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: "FlewOps Global",
      url: BASE_URL,
    },
  };
}

// Blog / Article schema
export function blogPostSchema(title: string, description: string, slug: string, author: string, date: string, image: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    author: { "@type": "Organization", name: author },
    datePublished: date,
    dateModified: date,
    image: image.startsWith("http") ? image : `${BASE_URL}${image}`,
    url: `${BASE_URL}/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "FlewOps Global",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
  };
}

// Blog collection schema
export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "FlewOps Global Blog",
    description: "Insights on data security, ERP, e-commerce, and enterprise digital transformation.",
    url: `${BASE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: "FlewOps Global",
      url: BASE_URL,
    },
  };
}

// FAQPage schema for rich results and AI answer engines
export function faqSchema(faqList: FAQ[] = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

// ProfilePage schema for team page
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Our Team — FlewOps Global",
    description: "Meet the passionate engineers, designers, and innovators shaping the future of FlewOps Global every day.",
    url: `${BASE_URL}/about/team`,
    isPartOf: {
      "@type": "WebSite",
      name: "FlewOps Global",
      url: BASE_URL,
    },
  };
}

// ContactPage schema
export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE_URL}/contact`,
    name: "Contact FlewOps Global",
    description: "Get in touch with FlewOps Global for enterprise digital solutions.",
    mainEntity: {
      "@type": "Organization",
      name: "FlewOps Global",
      email: "hello@flewops.com",
      telephone: "+91-88255-72114",
      url: BASE_URL,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "business@flewops.com",
        telephone: "+91-88255-72114",
        areaServed: "Global",
        availableLanguage: "English",
      },
    },
  };
}
