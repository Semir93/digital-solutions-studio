import { profile, services } from "@/lib/portfolio-data";
import { absoluteUrl, siteDescription, siteName, siteUrl } from "@/lib/site-config";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "bs-BA",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: absoluteUrl("/logo.png"),
      image: absoluteUrl("/opengraph-image"),
      description: siteDescription,
      email: profile.email,
      telephone: profile.phone,
      areaServed: [
        {
          "@type": "Country",
          name: "Bosnia and Herzegovina",
        },
        {
          "@type": "Place",
          name: "Balkan",
        },
        {
          "@type": "Place",
          name: "Remote",
        },
      ],
      knowsAbout: [
        "Web aplikacije",
        "Mobilne aplikacije",
        "Custom software",
        "Booking sistemi",
        "Interni sistemi",
        "E-commerce",
        "React",
        "Next.js",
        "Firebase",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: profile.email,
        telephone: profile.phone,
        availableLanguage: ["bs", "hr", "sr", "en"],
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: {
            "@id": `${siteUrl}/#organization`,
          },
          areaServed: "Bosnia and Herzegovina",
        },
      })),
    },
  ],
};

export function SeoJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
