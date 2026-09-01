import type { Metadata } from "next";
import { Boxes, Droplets, Globe2, Settings2 } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import SolutionCard from "@/components/SolutionCard";
import CTASection from "@/components/CTASection";
import { areasAtuacao } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluções",
  description:
    "Soluções da EJMR Associate: fornecimento de equipamentos, válvulas e atuadores, bombas industriais e consultoria para importação.",
};

const icones = [Boxes, Settings2, Droplets, Globe2] as const;

export default function SolucoesPage() {
  return (
    <>
      <Hero
        image="/images/cat-borboleta.jpg"
        imageAlt="Corpos de válvulas borboleta EJMR em galpão industrial"
        tall={false}
        eyebrowTags={["Soluções"]}
        title="Soluções para a Indústria"
        subtitle="Quatro frentes de atuação integradas para apoiar o cliente do início ao fim do processo de fornecimento."
      />

      <section className="bg-graphite-900 py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="O que fazemos"
            title="Apoio técnico completo, do projeto ao fornecimento"
            light
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areasAtuacao.map((area, i) => {
              const Icon = icones[i];
              return (
                <SolutionCard
                  key={area.titulo}
                  numero={area.numero}
                  titulo={area.titulo}
                  descricao={area.descricao}
                  href={area.href}
                  cta={area.cta}
                  icon={<Icon size={26} strokeWidth={1.4} />}
                  delay={i * 0.08}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
