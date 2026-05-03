import type { Metadata } from "next";
import {
  PageIntro,
  ServiceCard,
  SiteFooter,
  SiteHeader,
} from "@/components/site-sections";
import { services } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Usluge za web aplikacije, mobilne aplikacije, booking sisteme, interne alate, e-commerce i custom software rješenja.",
  alternates: {
    canonical: "/usluge",
  },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <section className="page-shell py-10 md:py-14">
          <div className="tech-panel section-glow mb-8 rounded-[2rem] px-6 py-8 md:px-8">
            <PageIntro
              eyebrow="Usluge"
              title="Digitalna rješenja za firme koje žele raditi brže i preglednije"
              description="Od modernih web stranica do internih sistema i mobilnih aplikacija. Svaka usluga je fokusirana na konkretan problem, jasnu strukturu i upotrebljiv proizvod."
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
