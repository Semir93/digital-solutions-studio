import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { HeroLivePreview } from "@/components/hero-live-preview";
import {
  PageIntro,
  ServiceCard,
  SiteFooter,
  SiteHeader,
} from "@/components/site-sections";
import { Reveal } from "@/components/reveal";
import { projects, services } from "@/lib/portfolio-data";
import { seoImage, siteDescription, siteName, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: `${siteName} | Web aplikacije, mobile app i custom software`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Web aplikacije, mobile app i custom software`,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: seoImage,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Web aplikacije, mobile app i custom software`,
    description: siteDescription,
    images: [seoImage],
  },
};

const featuredProjects = projects.filter((project) => project.featured);
const featuredServices = services.slice(0, 4);
const heroFeaturedProject =
  projects.find((project) => project.slug === "em-electronics-interna-platforma") ??
  featuredProjects[0];

const proofItems = [
  {
    value: `${projects.length}+`,
    label: "projekta u portfoliju",
  },
  {
    value: `${services.length}+`,
    label: "digitalnih usluga",
  },
  {
    value: "Web + App",
    label: "jedan proizvodni fokus",
  },
];

const processSteps = [
  {
    title: "Analiza",
    description:
      "Prvo definišemo cilj, korisnike i procese koje aplikacija treba pojednostaviti.",
  },
  {
    title: "Struktura",
    description:
      "Postavljamo tok korištenja, glavne ekrane i logiku prije prve linije koda.",
  },
  {
    title: "Izrada",
    description:
      "Razvijamo brz interfejs, povezujemo podatke i provjeravamo ponašanje u praksi.",
  },
  {
    title: "Rast",
    description:
      "Nakon lansiranja sistem se može širiti novim modulima, doradama i podrškom.",
  },
];

const technologies = [
  {
    name: "Next.js",
    description:
      "Stabilna osnova za brze web aplikacije, landing stranice i poslovne platforme.",
    icon: <NextIcon />,
  },
  {
    name: "React",
    description:
      "Komponentni interfejs koji ostaje pregledan i kada proizvod dobija nove funkcije.",
    icon: <ReactIcon />,
  },
  {
    name: "TypeScript",
    description:
      "Sigurnija logika, manje grešaka i lakše održavanje ozbiljnijih aplikacija.",
    icon: <TypeScriptIcon />,
  },
  {
    name: "Firebase",
    description:
      "Baza, autentikacija i backend servisi za brzu isporuku aplikacija po mjeri.",
    icon: <FirebaseIcon />,
  },
  {
    name: "React Native",
    description:
      "Mobilne aplikacije za telefone uz poznatu React logiku i nativniji osjećaj korištenja.",
    icon: <ReactNativeIcon />,
  },
  {
    name: "Tailwind CSS",
    description:
      "Precizan responsive dizajn za uredne ekrane koji dobro rade na svim uređajima.",
    icon: <TailwindIcon />,
  },
  {
    name: "Progressive Web App",
    description:
      "Web aplikacije koje se mogu koristiti kao app iskustvo, posebno na mobilnim uređajima.",
    icon: <PwaIcon />,
  },
  {
    name: "Vercel",
    description:
      "Pouzdan deployment, preview verzije i brža isporuka promjena na produkciju.",
    icon: <VercelIcon />,
  },
];

const faqs = [
  {
    question: "Kakve projekte radiš?",
    answer:
      "Radim booking sisteme, interne aplikacije, e-commerce rješenja, web stranice i custom web ili mobilne proizvode.",
  },
  {
    question: "Da li radiš i web i mobilne aplikacije?",
    answer:
      "Da. Ovisno o projektu mogu napraviti web iskustvo, mobilnu aplikaciju ili kombinaciju oba u jednom sistemu.",
  },
  {
    question: "Da li možeš preraditi postojeći sistem?",
    answer:
      "Mogu. Ako već postoji proizvod, mogu uraditi redesign, poboljšati UX i doraditi funkcionalnosti bez izrade svega ispočetka.",
  },
  {
    question: "Da li nudiš održavanje nakon isporuke?",
    answer:
      "Da. Nakon prve verzije mogu nastaviti sa doradama, novim modulima i tehničkom podrškom.",
  },
];

export default function Home() {
  const heroProject = heroFeaturedProject;
  const primaryFeaturedProject = featuredProjects[0];
  const secondaryFeaturedProjects = featuredProjects.slice(1);

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <Reveal className="w-full">
          <section className="tesla-hero">
            <div className="tesla-hero-copy">
              <p>Web, mobile i interni sistemi</p>
              <h1>Digital Solutions Studio</h1>
              <span>
                Gradim ozbiljne digitalne proizvode za firme koje žele jasniji
                rad, brže procese i aplikacije koje izgledaju profesionalno.
              </span>

              <div className="tesla-actions">
                <Link href="/projekti" className="button-primary">
                  Pogledaj projekte
                </Link>
                <Link href="/kontakt" className="button-secondary">
                  Pošalji upit
                </Link>
              </div>

              <div className="tesla-metrics" aria-label="Kratak pregled studija">
                {proofItems.map((item) => (
                  <div key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tesla-hero-stage">
              {heroProject ? <HeroLivePreview project={heroProject} /> : null}
            </div>
          </section>
        </Reveal>

        <Reveal className="home-section home-section-services" delay={90}>
          <section className="home-section-inner">
            <div className="section-heading-row">
              <PageIntro
                eyebrow="Šta nudim"
                title="Digitalna rješenja za jasnije procese i bolji rad"
                description="Svaka usluga je predstavljena kroz konkretan poslovni problem, očekivani rezultat i način na koji digitalni proizvod može pomoći firmi."
                as="h2"
              />
              <Link href="/usluge" className="button-link text-sm">
                Pogledaj sve usluge
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredServices.map((service, index) => (
                <Reveal key={service.slug} delay={index * 80}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="home-section home-section-projects" delay={120}>
          <section className="home-section-inner">
            <div className="section-heading-row section-heading-row-wide">
              <PageIntro
                eyebrow="Izdvojeni radovi"
                title="Projekti koji pokazuju pristup, kvalitet i način isporuke"
                description="Svaki rad prikazuje problem, rješenje, tehnologije i rezultat koji klijent može očekivati kroz saradnju."
                as="h2"
              />
              <Link href="/projekti" className="button-link text-sm">
                Otvori sve projekte
              </Link>
            </div>

            <div className="featured-work-shell">
              {primaryFeaturedProject ? (
                <Reveal delay={0}>
                  <article className="featured-work-primary">
                    <div
                      className="featured-work-visual"
                      style={{ background: primaryFeaturedProject.gradient }}
                    >
                      <div className="featured-work-visual-overlay" />
                      <div className="featured-work-visual-top">
                        <span className="featured-work-chip">
                          {primaryFeaturedProject.category}
                        </span>
                        <span className="featured-work-chip">01</span>
                      </div>

                      <div className="featured-work-frame">
                        {(primaryFeaturedProject.image ??
                          primaryFeaturedProject.images?.[0]) ? (
                          <Image
                            src={
                              primaryFeaturedProject.image ??
                              primaryFeaturedProject.images?.[0] ??
                              ""
                            }
                            alt={primaryFeaturedProject.title}
                            fill
                            className="object-contain object-center"
                            sizes="(min-width: 1280px) 44vw, (min-width: 768px) 50vw, 100vw"
                          />
                        ) : null}
                      </div>
                    </div>

                    <div className="featured-work-content">
                      <div className="featured-work-copy">
                        <div className="featured-work-meta">
                          <p className="featured-work-label">Glavni case study</p>
                          <span className="featured-work-meta-text">
                            {primaryFeaturedProject.role}
                          </span>
                        </div>

                        <h2 className="display-font text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                          {primaryFeaturedProject.title}
                        </h2>
                        <p className="featured-work-summary">
                          {primaryFeaturedProject.summary}
                        </p>
                      </div>

                      <dl className="featured-work-facts">
                        <div>
                          <dt>Problem</dt>
                          <dd>{primaryFeaturedProject.challenge}</dd>
                        </div>
                        <div>
                          <dt>Rješenje</dt>
                          <dd>
                            {primaryFeaturedProject.deliverables[0] ??
                              primaryFeaturedProject.role}
                          </dd>
                        </div>
                        <div>
                          <dt>Rezultat</dt>
                          <dd>{primaryFeaturedProject.outcomes[0]}</dd>
                        </div>
                      </dl>

                      <div className="featured-work-footer">
                        <div className="featured-work-stack">
                          {primaryFeaturedProject.stack.slice(0, 5).map((item) => (
                            <span key={item}>{item}</span>
                          ))}
                        </div>
                        <Link
                          href={`/projekti/${primaryFeaturedProject.slug}`}
                          className="button-primary featured-work-link"
                        >
                          Pogledaj detalje
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ) : null}

              {secondaryFeaturedProjects.length ? (
                <div className="featured-work-secondary-grid">
                  {secondaryFeaturedProjects.map((project, index) => {
                    const image = project.image ?? project.images?.[0];

                    return (
                      <Reveal key={project.slug} delay={(index + 1) * 90}>
                        <Link
                          href={`/projekti/${project.slug}`}
                          className="featured-work-card"
                        >
                          <div
                            className="featured-work-card-media"
                            style={{ background: project.gradient }}
                          >
                            <div className="featured-work-card-overlay" />
                            <span className="featured-work-card-chip">
                              {project.category}
                            </span>
                            <div className="featured-work-card-frame">
                              {image ? (
                                <Image
                                  src={image}
                                  alt={project.title}
                                  fill
                                  className="object-contain object-center"
                                  sizes="(min-width: 1024px) 24vw, 100vw"
                                />
                              ) : null}
                            </div>
                          </div>

                          <div className="featured-work-card-body">
                            <div>
                              <p className="featured-work-label">
                                Projekt {String(index + 2).padStart(2, "0")}
                              </p>
                              <h3 className="display-font text-2xl font-semibold text-slate-950">
                                {project.title}
                              </h3>
                              <p className="featured-work-card-summary">
                                {project.summary}
                              </p>
                            </div>

                            <div className="featured-work-card-footer">
                              <div className="featured-work-stack">
                                {project.stack.slice(0, 3).map((item) => (
                                  <span key={item}>{item}</span>
                                ))}
                              </div>
                              <span className="featured-work-card-cta">
                                Pogledaj detalje
                              </span>
                            </div>
                          </div>
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {false && <div className="grid gap-8">
              {featuredProjects.map((project, index) => {
                const image = project.image ?? project.images?.[0];
                const reverse = index % 2 === 1;

                return (
                  <Reveal key={project.slug} delay={index * 90}>
                    <article className="case-study">
                      <div
                        className={`case-study-grid ${reverse ? "case-study-grid-reverse" : ""}`}
                      >
                        <div className="case-study-media">
                          <div className="case-study-kicker">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <span>{project.category}</span>
                          </div>

                          <div className="case-study-screen">
                            {image ? (
                              <Image
                                src={image}
                                alt={project.title}
                                fill
                                className="object-contain"
                                sizes="(min-width: 1024px) 42vw, 100vw"
                              />
                            ) : null}
                          </div>
                        </div>

                        <div className="case-study-content">
                          <div className="space-y-4">
                            <div>
                              <p className="case-study-label">Case study</p>
                              <h2 className="display-font text-3xl font-semibold leading-tight text-slate-950 md:text-5xl">
                                {project.title}
                              </h2>
                              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                                {project.summary}
                              </p>
                            </div>

                            <dl className="case-study-points">
                              <div>
                                <dt>Problem</dt>
                                <dd>{project.challenge}</dd>
                              </div>
                              <div>
                                <dt>Rješenje</dt>
                                <dd>{project.deliverables[0] ?? project.role}</dd>
                              </div>
                              <div>
                                <dt>Rezultat</dt>
                                <dd>{project.outcomes[0]}</dd>
                              </div>
                            </dl>
                          </div>

                          <div className="case-study-footer">
                            <div className="case-study-stack">
                              {project.stack.slice(0, 5).map((item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </div>
                            <Link
                              href={`/projekti/${project.slug}`}
                              className="button-primary case-study-link"
                            >
                              Otvori case study
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>}
          </section>
        </Reveal>

        <Reveal className="home-section home-section-tech" delay={150}>
          <section className="home-section-inner">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
              <div className="space-y-4">
                <span className="eyebrow">Tehnologije</span>
                <h2 className="display-font text-3xl font-semibold text-slate-950 md:text-4xl">
                  Tehnologije birane prema brzini, stabilnosti i dugoročnom održavanju.
                </h2>
                <p className="max-w-xl text-base leading-8 text-slate-600">
                  Stack je fokusiran na moderne web i mobilne proizvode: brz razvoj,
                  pregledan kod, pouzdan backend i lakše širenje sistema nakon prve verzije.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {technologies.map((tech, index) => (
                  <Reveal
                    key={tech.name}
                    className="h-full"
                    delay={index * 70}
                    direction={index % 2 === 0 ? "left" : "right"}
                    initiallyVisible={false}
                  >
                    <div className="tech-icon-grid h-full rounded-[1.6rem] border border-black/8 bg-white/70 px-5 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(17,24,39,0.08)]">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        {tech.icon}
                      </div>
                      <p className="display-font text-2xl font-semibold text-slate-950">
                        {tech.name}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {tech.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal className="home-section home-section-process" delay={180}>
          <section className="home-section-inner">
            <div className="section-heading-row">
              <PageIntro
                eyebrow="Kako radim"
                title="Jasan proces od ideje do isporuke"
                description="Saradnja je vođena kroz konkretne korake, jasne odluke i redovnu komunikaciju, od prve ideje do upotrebljive verzije."
                as="h2"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 80}>
                  <div className="tech-panel section-glow rounded-[1.8rem] px-5 py-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                      0{index + 1}
                    </p>
                    <h3 className="display-font mt-4 text-2xl font-semibold text-slate-950">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="home-section home-section-faq" delay={210}>
          <section className="home-section-inner">
            <div className="section-heading-row section-heading-row-compact">
              <PageIntro
                eyebrow="FAQ"
                title="Najčešća pitanja prije početka saradnje"
                description="Kratki odgovori na stvari koje je dobro znati prije prvog razgovora o projektu."
                as="h2"
              />
            </div>

            <div className="faq-grid">
              {faqs.map((item, index) => (
                <Reveal key={item.question} delay={index * 70}>
                  <details className="faq-item surface-card">
                    <summary className="faq-question">
                      <span className="display-font">{item.question}</span>
                      <span className="faq-toggle" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="faq-answer">
                      {item.answer}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="home-section home-section-closing" delay={240}>
          <section className="home-section-inner closing-cta">
            <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
              <div className="space-y-3">
                <span className="eyebrow">
                  Saradnja
                </span>
                <h2 className="display-font text-3xl font-semibold text-slate-950 md:text-4xl">
                  Ako želiš moderan sistem, booking platformu ili custom app,
                  ovdje možemo krenuti u razgovor.
                </h2>
                <p className="max-w-2xl text-sm leading-7 text-slate-600">
                  Pošalji osnovne informacije o ideji, procesu ili problemu koji želiš riješiti,
                  pa zajedno možemo procijeniti najbolji smjer i prve korake.
                </p>
              </div>

              <Link href="/kontakt" className="button-primary">
                Otvori kontakt stranicu
              </Link>
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}

function NextIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm3.9 14.8-6.4-8.5v7.4H8V6.2h1.7l6.4 8.5V8.3h1.5v9.7Z" />
    </svg>
  );
}

function ReactIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.6"
    >
      <circle cx="12" cy="12" r="1.7" className="fill-current stroke-none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.3" transform="rotate(120 12 12)" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M4 4h16v16H4V4Zm4.1 5.1v1.4h2V17h1.7V10.5h2V9.1H8.1Zm8.4-.1c-1.8 0-2.9.9-2.9 2.3 0 1.3.8 1.9 2.5 2.4 1.1.3 1.4.6 1.4 1.1s-.4.8-1.1.8c-.7 0-1.4-.3-2-.9l-1 1.1c.8.8 1.9 1.2 3 1.2 1.9 0 3.1-1 3.1-2.5 0-1.2-.6-1.9-2.4-2.4-1.2-.3-1.5-.5-1.5-1s.4-.7 1-.7c.6 0 1 .2 1.6.7l.9-1.1c-.7-.6-1.5-1-2.6-1Z" />
    </svg>
  );
}

function FirebaseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="m7.3 16.8 2.1-13.1c.1-.6.9-.8 1.2-.2l2.2 4.2-5.5 9.1Zm-.2 1.3 10.2-10-3-5.8c-.3-.5-1-.4-1.2.2L7.1 18.1Zm5.7 1.7 4.1-2.3c.4-.2.6-.7.5-1.2l-1.9-11.5c-.1-.6-.9-.7-1.2-.2L9.4 13l3.4 6.8Z" />
    </svg>
  );
}

function ReactNativeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.6"
    >
      <rect x="7" y="3" width="10" height="18" rx="2.4" />
      <path d="M10 18h4" />
      <circle cx="12" cy="11.5" r="1.35" className="fill-current stroke-none" />
      <ellipse cx="12" cy="11.5" rx="4.8" ry="1.85" />
      <ellipse cx="12" cy="11.5" rx="4.8" ry="1.85" transform="rotate(60 12 11.5)" />
      <ellipse cx="12" cy="11.5" rx="4.8" ry="1.85" transform="rotate(120 12 11.5)" />
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M12 6.3c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.9-1.7 3-1.4.6.1 1.1.5 1.6.9.9.7 1.9 1.5 3.9 1.5 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.9 1.7-3 1.4-.6-.1-1.1-.5-1.6-.9-.9-.7-1.9-1.5-3.9-1.5ZM7.5 13.1c-2.4 0-3.9 1.2-4.5 3.6.9-1.2 1.9-1.7 3-1.4.6.1 1.1.5 1.6.9.9.7 1.9 1.5 3.9 1.5 2.4 0 3.9-1.2 4.5-3.6-.9 1.2-1.9 1.7-3 1.4-.6-.1-1.1-.5-1.6-.9-.9-.7-1.9-1.5-3.9-1.5Z" />
    </svg>
  );
}

function PwaIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.7"
    >
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <path d="M9 17h6M9 7h2.3c1.1 0 1.8.7 1.8 1.7s-.7 1.7-1.8 1.7H9V7Zm6.2 0 1.3 3.4L18 7" />
      <path d="M9 10.4V13" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
      <path d="M12 4.5 21 20H3L12 4.5Z" />
    </svg>
  );
}
