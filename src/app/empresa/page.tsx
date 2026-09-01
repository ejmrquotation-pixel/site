import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { areasTrabalho } from "@/lib/content";

export const metadata: Metadata = {
  title: "Empresa",
  description:
    "A EJMR Associate é uma empresa especializada em soluções industriais, fornecimento de equipamentos e consultoria técnica para importação.",
};

export default function EmpresaPage() {
  return (
    <>
      <Hero
        image="/images/cat-gaveta.jpg"
        imageAlt="Válvulas industriais EJMR em galpão de armazenagem"
        tall={false}
        eyebrowTags={["Empresa"]}
        title="Engenharia, Fornecimento e Suporte Técnico"
        subtitle="Empresa especializada em soluções industriais, fornecimento de equipamentos e consultoria técnica para aquisição e importação de equipamentos industriais."
      />

      <section className="bg-graphite-900 py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Posicionamento"
              title="Muito mais do que uma empresa de válvulas"
              light
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-metal-300">
              <p>
                A EJMR não deve ser entendida apenas como uma empresa de
                válvulas. Seu posicionamento é o de uma empresa especializada
                em soluções industriais, fornecimento de equipamentos e
                consultoria técnica para aquisição e importação de
                equipamentos industriais.
              </p>
              <p>
                A EJMR apoia o cliente desde a identificação da necessidade
                até o fornecimento do equipamento — unindo engenharia,
                fornecimento, importação e suporte técnico em um único
                processo.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Engenharia", "Fornecimento", "Importação", "Suporte Técnico"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border border-graphite-700 bg-graphite-850 px-5 py-4"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-ejmr-green-end" />
                    <span className="font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="border border-graphite-700 bg-graphite-850 p-8">
              <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-offwhite">
                Áreas de Trabalho
              </h3>
              <ul className="mt-6 space-y-4">
                {areasTrabalho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 border-b border-graphite-700 pb-4 text-sm leading-relaxed text-metal-300 last:border-none last:pb-0"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
