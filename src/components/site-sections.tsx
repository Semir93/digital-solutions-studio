import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { Reveal } from "@/components/reveal";
import { SiteHeaderFrame } from "@/components/site-header-frame";
import { siteName } from "@/lib/site-config";
import type { Project, Service } from "@/lib/portfolio-data";
import { navigation, profile, services } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <SiteHeaderFrame>
      <div className="page-shell site-header-shell">
        <Link
          href="/"
          className="site-brand-link"
          aria-label={`${siteName} početna stranica`}
        >
          <BrandLogo showText={false} />
        </Link>

        <nav className="site-nav" aria-label="Glavna navigacija">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </SiteHeaderFrame>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Reveal className="site-footer-inner">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <h3>
              <BrandLogo className="brand-logo-footer" showText={false} />
            </h3>
            <p>
              Web, mobile i custom software rješenja za firme koje žele jasnije
              procese, bolju organizaciju i profesionalan digitalni proizvod.
            </p>
          </div>

          <div>
            <p className="site-footer-label">Navigacija</p>
            <div className="site-footer-links">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="site-footer-label">Usluge</p>
            <div className="site-footer-links">
              {services.slice(0, 4).map((service) => (
                <span key={service.slug}>{service.title}</span>
              ))}
            </div>
          </div>

          <div>
            <p className="site-footer-label">Kontakt</p>
            <div className="site-footer-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </div>
          </div>

          <div className="site-footer-actions">
            <Link href="/kontakt" className="button-primary">
              Zatraži ponudu
            </Link>
            <a href={`mailto:${profile.email}`} className="button-secondary">
              Email direktno
            </a>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>{siteName}</span>
          <span>{profile.location}</span>
          <span>{profile.availability}</span>
        </div>
      </Reveal>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  as: HeadingTag = "h1",
}: {
  eyebrow: string;
  title: string;
  description: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-8 space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <HeadingTag className="display-font max-w-4xl text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
        {title}
      </HeadingTag>
      <p className="max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const previewImage =
    project.images?.find(
      (item) => !item.includes("_app") && !item.includes("-app"),
    ) ??
    project.image ??
    project.images?.[0];

  return (
    <Link
      href={`/projekti/${project.slug}`}
      className="group block focus:outline-none"
      aria-label={`Otvori projekt ${project.title}`}
    >
      <article className="tech-panel section-glow overflow-hidden rounded-[2rem] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_26px_70px_rgba(17,24,39,0.12)]">
        <ProjectCardVisual
          title={project.title}
          subtitle={project.category}
          image={previewImage}
        />

        <div className="space-y-5 px-6 py-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h2 className="display-font text-2xl font-semibold text-slate-950">
                {project.title}
              </h2>
              {project.featured ? (
                <span className="chip bg-slate-950 text-slate-50">
                  Izdvojeno
                </span>
              ) : null}
            </div>
            <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

function ProjectCardVisual({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-black/8 bg-[linear-gradient(180deg,#fbfaf7_0%,#f3eee5_100%)]">
      <div className="relative h-64">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.18)_32%,rgba(17,24,39,0.24)_100%)]" />
        <div className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/80 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="tech-panel section-glow overflow-hidden rounded-[2rem]">
      <VisualPanel
        title={service.title}
        subtitle={service.badge}
        image={service.image}
        gradient={service.gradient}
        compact
      />

      <div className="space-y-5 px-6 py-6">
        <div className="space-y-3">
          <h2 className="display-font text-2xl font-semibold text-slate-950">
            {service.title}
          </h2>
          <p className="text-sm leading-7 text-slate-600">{service.description}</p>
        </div>

        <div className="grid gap-2">
          {service.highlights.map((item) => (
            <div
              key={item}
              className="surface-muted rounded-2xl px-4 py-3 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="tech-panel section-glow rounded-[1.5rem] px-4 py-5">
      <p className="display-font text-3xl font-semibold text-slate-950">{value}</p>
      <p className="mt-1 text-sm text-slate-600">{label}</p>
    </div>
  );
}

export function VisualPanel({
  title,
  subtitle,
  image,
  gradient,
  compact = false,
}: {
  title: string;
  subtitle: string;
  image?: string;
  gradient: string;
  compact?: boolean;
}) {
  const heightClass = compact ? "h-56" : "h-[320px]";

  return (
    <div
      className={`panel-grid relative overflow-hidden border-b border-black/8 ${heightClass}`}
      style={{ backgroundImage: gradient }}
    >
      {image ? (
        <Image
          src={image}
          alt={title}
          fill
          className={compact ? "object-cover" : "object-contain p-5"}
          sizes={
            compact
              ? "(min-width: 1024px) 33vw, 100vw"
              : "(min-width: 1024px) 50vw, 100vw"
          }
        />
      ) : null}

      <div
        className={
          compact
            ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02)_34%,rgba(17,24,39,0.36)_100%)]"
            : "absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04)_42%,rgba(17,24,39,0.08)_100%)]"
        }
      />
      <div className="absolute left-6 top-6 rounded-full border border-white/45 bg-white/78 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 backdrop-blur">
        {compact ? subtitle : "Studija slučaja"}
      </div>

      {compact ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-slate-50">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-200/90">
              {subtitle}
            </p>
            <p className="display-font text-2xl font-semibold">{title}</p>
          </div>
          <div className="rounded-full border border-white/28 bg-white/14 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            Spremno
          </div>
        </div>
      ) : null}
    </div>
  );
}
