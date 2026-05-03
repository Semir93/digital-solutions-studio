import type { Metadata } from "next";
import {
  PageIntro,
  ProjectCard,
  SiteFooter,
  SiteHeader,
} from "@/components/site-sections";
import { projects } from "@/lib/portfolio-data";
import { seoImage, siteName, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Projekti web i mobilnih aplikacija",
  description:
    "Portfolio Digital Solutions Studio: web aplikacije, mobilne aplikacije, booking sistemi, interne platforme i custom software projekti.",
  alternates: {
    canonical: "/projekti",
  },
  openGraph: {
    title: `Projekti web i mobilnih aplikacija | ${siteName}`,
    description:
      "Pregled case study projekata za web aplikacije, mobilne aplikacije, booking sisteme i interne poslovne platforme.",
    url: `${siteUrl}/projekti`,
    images: [seoImage],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <section className="page-shell py-10 md:py-14">
          <div className="tech-panel section-glow mb-8 rounded-[2rem] px-6 py-8 md:px-8">
            <PageIntro
              eyebrow="Portfolio"
              title="Odabrani projekti i digitalna rješenja"
              description="Pregled aplikacija, platformi i sistema sa opisom problema, rješenja, tehnologija i rezultata isporuke."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
