import type { MetadataRoute } from "next";
import { projects } from "@/lib/portfolio-data";
import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/projekti",
    "/usluge",
    "/kontakt",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projekti/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}
