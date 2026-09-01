import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import DocumentLibrary from "@/components/DocumentLibrary";
import CTASection from "@/components/CTASection";
import { documentos } from "@/lib/content";

export const metadata: Metadata = {
  title: "Biblioteca Técnica",
  description:
    "Catálogos, datasheets e documentação técnica EJMR Associate para consulta e download.",
};

export default function BibliotecaTecnicaPage() {
  return (
    <>
      <Hero
        image="/images/cat-forjadas.jpg"
        imageAlt="Válvulas forjadas EJMR em fundo escuro"
        tall={false}
        eyebrowTags={["Biblioteca Técnica"]}
        title="Biblioteca Técnica"
        subtitle="Catálogos, datasheets e documentação técnica para consulta e download."
      />

      <section className="bg-graphite-900 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Documentos" title="Catálogos e Documentação" light />
          <div className="mt-10">
            <DocumentLibrary documentos={documentos} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
