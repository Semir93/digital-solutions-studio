import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/project-gallery";
import { SiteFooter, SiteHeader, VisualPanel } from "@/components/site-sections";
import { getProjectBySlug, projects } from "@/lib/portfolio-data";
import { absoluteUrl, seoImage, siteName, siteUrl } from "@/lib/site-config";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projekt nije pronađen",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projekti/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteName}`,
      description: project.summary,
      url: `${siteUrl}/projekti/${project.slug}`,
      type: "article",
      images: [
        {
          url: project.image ? absoluteUrl(project.image) : seoImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteName}`,
      description: project.summary,
      images: [project.image ? absoluteUrl(project.image) : seoImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectImages = project.images ?? (project.image ? [project.image] : []);
  const coverImage = project.image ?? projectImages[0];
  const projectUrl = `${siteUrl}/projekti/${project.slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#case-study`,
    name: project.title,
    description: project.summary,
    url: projectUrl,
    image: coverImage ? absoluteUrl(coverImage) : seoImage,
    about: project.challenge,
    creator: {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
    },
    keywords: project.stack.join(", "),
  };

  return (
    <>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main className="flex flex-1 flex-col items-center">
        <section className="page-shell py-10 md:py-14">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <Link href="/projekti" className="button-secondary px-4 py-2">
              Nazad na projekte
            </Link>
            <span>{project.category}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <span className="eyebrow">Case study</span>
              <h1 className="display-font text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                {project.summary}
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <DetailCard label="Tip projekta" value={project.category} />
                <DetailCard label="Uloga" value={project.role} />
                <DetailCard
                  label="Rezultat"
                  value={project.outcomes[0] ?? "Prikazano na portfolio sajtu"}
                />
              </div>
            </div>

            <VisualPanel
              title={project.title}
              subtitle={project.category}
              image={coverImage}
              gradient={project.gradient}
            />
          </div>

          {projectImages.length > 0 ? (
            <ProjectGallery images={projectImages} title={project.title} />
          ) : null}

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="tech-panel section-glow rounded-[2rem] px-6 py-7 md:px-8">
              <div className="rich-text space-y-6">
                <div className="space-y-3">
                  <h2 className="display-font text-2xl font-semibold text-slate-950">
                    Izazov
                  </h2>
                  <p>{project.challenge}</p>
                </div>

                <div className="space-y-3">
                  <h2 className="display-font text-2xl font-semibold text-slate-950">
                    Šta je isporučeno
                  </h2>
                  <ul>
                    {project.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="display-font text-2xl font-semibold text-slate-950">
                    Efekat
                  </h2>
                  <ul>
                    {project.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="grid gap-6">
              <div className="tech-panel section-glow rounded-[2rem] px-6 py-6">
                <h2 className="display-font text-2xl font-semibold text-slate-950">
                  Tehnologije
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="tech-panel section-glow rounded-[1.5rem] px-5 py-4">
      <p className="mb-1 text-sm text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-slate-950">{value}</p>
    </div>
  );
}
