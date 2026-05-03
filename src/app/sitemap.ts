import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio-data";
import { absoluteUrl, siteUrl } from "@/lib/site-config";

const lastSignificantUpdate = new Date("2026-05-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/projekti",
    "/usluge",
    "/kontakt",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: lastSignificantUpdate,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
    images: path === "" ? [absoluteUrl("/opengraph-image")] : undefined,
  }));

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projekti/${project.slug}`,
    lastModified: lastSignificantUpdate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    images: (project.images ?? (project.image ? [project.image] : [])).map((image) =>
      absoluteUrl(image),
    ),
  }));

  return [...staticPages, ...projectPages];
}
