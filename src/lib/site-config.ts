export const siteName = "Digital Solutions Studio";

export const siteDefaultTitle =
  "Digital Solutions Studio | Web aplikacije i custom software";

export const siteDescription =
  "Digital Solutions Studio izrađuje web aplikacije, mobilne aplikacije, booking sisteme, interne alate i custom software rješenja za firme.";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://dsstudio.dev";

export const siteKeywords = [
  "Digital Solutions Studio",
  "web aplikacije",
  "mobilne aplikacije",
  "custom software",
  "booking sistem",
  "interni sistemi za firme",
  "web stranice za firme",
  "e-commerce rješenja",
  "React developer",
  "Next.js developer",
  "Firebase aplikacije",
  "software studio Bosna i Hercegovina",
  "izrada web aplikacija",
  "izrada mobilnih aplikacija",
];

export const seoImage = `${siteUrl}/opengraph-image`;

export function absoluteUrl(path = "") {
  if (!path) {
    return siteUrl;
  }

  if (path.startsWith("http")) {
    return path;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
