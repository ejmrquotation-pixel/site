import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductFilter from "@/components/ProductFilter";
import ValveFamilyCard from "@/components/ValveFamilyCard";
import CTASection from "@/components/CTASection";
import { valveFamilies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Válvulas Industriais",
  description:
    "Famílias completas de válvulas industriais EJMR: esfera, gaveta, globo, retenção, borboleta, forjadas, bronze, controle, API 6A e acessórios.",
};

export default function ValvulasPage() {
  return (
    <>
      <Hero
        image="/images/cat-esfera.jpg"
        imageAlt="Válvulas de esfera EJMR rosqueadas e flangeadas"
        tall={false}
        eyebrowTags={["Produtos", "Válvulas"]}
        title="Válvulas Industriais"
        subtitle="Portfólio técnico completo, organizado por família, com características, materiais e normas quando informados pelo fabricante."
      />

      <section className="bg-graphite-900 py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ProductFilter />
          </div>

          <div>
            <SectionTitle
              eyebrow="13 famílias"
              title="Famílias de Válvulas EJMR"
              light
            />
            <div className="mt-12 space-y-6">
              {valveFamilies.map((family, i) => (
                <ValveFamilyCard key={family.slug} family={family} delay={(i % 3) * 0.05} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
