import type { Metadata } from "next";
import {
  PageIntro,
  ServiceCard,
  SiteFooter,
  SiteHeader,
} from "@/components/site-sections";
import { services } from "@/lib/portfolio-data";
import { seoImage, siteName, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Usluge izrade web aplikacija i custom softvera",
  description:
    "Izrada web aplikacija, mobilnih aplikacija, booking sistema, internih alata, e-commerce rješenja i custom softvera za firme.",
  alternates: {
    canonical: "/usluge",
  },
  openGraph: {
    title: `Usluge izrade web aplikacija i custom softvera | ${siteName}`,
    description:
      "Digitalna rješenja za firme: web aplikacije, mobile app, booking sistemi, interni sistemi, e-commerce i redesign postojećih proizvoda.",
    url: `${siteUrl}/usluge`,
    images: [seoImage],
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
