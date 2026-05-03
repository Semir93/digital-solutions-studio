import type { Metadata } from "next";
import {
  PageIntro,
  ProjectCard,
  SiteFooter,
  SiteHeader,
} from "@/components/site-sections";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projekti",
  description:
    "Pregled web i mobilnih aplikacija, internih platformi, booking sistema i custom software projekata.",
  alternates: {
    canonical: "/projekti",
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
