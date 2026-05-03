import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SiteFooter, SiteHeader } from "@/components/site-sections";
import { profile } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt stranica za upite, saradnju i dogovor oko web, mobile i custom softver projekata.",
  alternates: {
    canonical: "/kontakt",
  },
};

const inquiryTypes = [
  {
    title: "Web stranica ili landing page",
    text: "Za firme kojima treba jasna prezentacija, moderniji izgled ili bolji prvi utisak online.",
  },
  {
    title: "Aplikacija ili interni sistem",
    text: "Za booking sisteme, dashboarde, interne alate, mobilne aplikacije i custom workflow rješenja.",
  },
  {
    title: "Dugoročna podrška",
    text: "Za dorade, održavanje, nove module i postepeno širenje postojećeg digitalnog proizvoda.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contact-page">
        <Reveal className="contact-hero">
          <section className="contact-hero-grid">
            <div className="contact-copy">
              <span className="eyebrow">Kontakt</span>
              <h1 className="display-font">
                Pošalji upit za web, mobilnu aplikaciju ili custom software.
              </h1>
              <p>
                Ukratko opiši šta želiš napraviti, koji problem rješavaš i u kojoj
                si fazi. Javit ću se sa prijedlogom smjera, opsega i prvih koraka.
              </p>
            </div>

            <aside className="contact-direct-panel">
              <p className="contact-panel-kicker">Direktan kontakt</p>
              <div className="contact-direct-list">
                <ContactRow label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <ContactRow
                  label="Telefon"
                  value={profile.phone}
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                />
                <ContactRow label="Lokacija" value={profile.location} />
                <ContactRow label="Dostupnost" value={profile.availability} />
              </div>
            </aside>
          </section>
        </Reveal>

        <Reveal className="contact-form-section" delay={70}>
          <section className="contact-form-shell">
            <div className="contact-form-heading">
              <p className="contact-panel-kicker">Kontakt forma</p>
              <h2 className="display-font">Kreni od kratkog opisa projekta</h2>
              <p>
                Nije potrebno imati savršen brief. Dovoljno je poslati cilj,
                okvirni opseg i najvažnije funkcije koje proizvod treba imati.
              </p>
            </div>

            <ContactForm />
          </section>
        </Reveal>

        <Reveal className="contact-intent-strip" delay={100}>
          <section>
            {inquiryTypes.map((item) => (
              <div key={item.title}>
                <h2 className="display-font">{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal className="contact-social-section" delay={130}>
          <section>
            <div className="contact-social-heading">
              <span className="eyebrow">Dodatni kontakt</span>
              <h2 className="display-font">Dostupan sam i za brzu poruku</h2>
            </div>

            <div className="contact-social-grid">
              <SocialCard label="Facebook" icon={<FacebookIcon />} />
              <SocialCard label="Instagram" icon={<InstagramIcon />} />
              <SocialCard label="Viber" icon={<ViberIcon />} />
            </div>
          </section>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span>{label}</span>
      <strong>{value}</strong>
    </>
  );

  return href ? (
    <a href={href} className="contact-row">
      {content}
    </a>
  ) : (
    <div className="contact-row">{content}</div>
  );
}

function SocialCard({ label, icon }: { label: string; icon: ReactNode }) {
  return (
    <div className="contact-social-card">
      <div>{icon}</div>
      <h3 className="display-font">{label}</h3>
      <p>Praktičan kanal za kratka pitanja, dogovor termina i brzu komunikaciju.</p>
    </div>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-current"
    >
      <path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.7-1.6H16V4.8c-.3 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.4V11H9v3h2.3v7h2.2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" className="fill-current stroke-none" />
    </svg>
  );
}

function ViberIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20c-1.4 0-2.8-.2-4.1-.7L4 20l.8-3.6C3.7 15 3 13.4 3 11.7 3 7.4 7 4 12 4s9 3.4 9 7.7S17 19.4 12 19.4Z" />
      <path d="M9 9.2c.2 1.9 1.8 3.5 3.7 3.8" />
      <path d="M8.8 12.6c.8 1.5 2.1 2.7 3.6 3.4" />
      <path d="M14.4 8.4c.9.2 1.6.9 1.8 1.8" />
    </svg>
  );
}
