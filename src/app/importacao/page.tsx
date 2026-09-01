import type { Metadata } from "next";
import {
  ClipboardCheck,
  FileSearch,
  FileText,
  Handshake,
  Scale,
  Search,
} from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import Timeline from "@/components/Timeline";
import CTASection from "@/components/CTASection";
import { consultoriaCards, processoTimeline } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consultoria para Importação",
  description:
    "A EJMR apoia empresas na identificação, análise e aquisição de equipamentos industriais no mercado internacional.",
};

const icones = [FileSearch, Search, Scale, ClipboardCheck, FileText, Handshake];

export default function ImportacaoPage() {
  return (
    <>
      <Hero
        image="/images/cat-api6a.jpg"
        imageAlt="Válvulas API 6A prontas para expedição"
        imagePosition="center 25%"
        tall={false}
        eyebrowTags={["Importação"]}
        title="Consultoria Técnica para Importação de Equipamentos"
        subtitle="A EJMR apoia empresas na identificação, análise e aquisição de equipamentos industriais no mercado internacional, oferecendo suporte técnico durante as etapas de especificação, avaliação e fornecimento."
      />

      <section className="bg-graphite-900 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Consultoria" title="Como Apoiamos Sua Importação" light />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {consultoriaCards.map((card, i) => (
              <ServiceCard
                key={card.titulo}
                titulo={card.titulo}
                descricao={card.descricao}
                Icon={icones[i]}
                delay={(i % 3) * 0.08}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-graphite-700 bg-graphite-850 py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Processo"
            title="Da Necessidade ao Fornecimento"
            description="Seis etapas que estruturam o acompanhamento técnico da EJMR durante o processo de importação."
            light
          />
          <Timeline steps={processoTimeline} />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
