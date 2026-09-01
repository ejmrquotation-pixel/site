import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import RFQForm from "@/components/RFQForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Solicite uma cotação de válvulas, atuadores, bombas e equipamentos industriais junto à EJMR Associate.",
};

export default function ContatoPage() {
  return (
    <>
      <Hero
        image="/images/cat-globo.jpg"
        imageAlt="Válvulas globo EJMR suspensas em galpão industrial"
        tall={false}
        eyebrowTags={["Contato"]}
        title="Solicite uma Cotação"
        subtitle="Preencha o formulário com os dados do seu projeto — nossa equipe técnica irá analisar a demanda e retornar o contato."
      />

      <section className="bg-graphite-900 py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionTitle eyebrow="RFQ" title="Fale com a EJMR" light />
            <p className="mt-5 text-sm leading-relaxed text-metal-400 md:text-base">
              Quanto mais completa for a especificação técnica enviada, mais
              precisa será a análise da nossa equipe. Anexe datasheets,
              desenhos ou requisitos técnicos sempre que possível.
            </p>
            <div className="mt-8 space-y-4 border-t border-graphite-700 pt-6 text-sm text-metal-400">
              <a
                href="tel:+5527996591287"
                className="flex items-center gap-3 transition-colors hover:text-offwhite"
              >
                <Phone size={18} className="text-ejmr-green-end" />
                (27) 99659-1287
              </a>
              <a
                href="mailto:comercial@ejmrassociate.com"
                className="flex items-center gap-3 transition-colors hover:text-offwhite"
              >
                <Mail size={18} className="text-ejmr-green-end" />
                comercial@ejmrassociate.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="border border-graphite-700 bg-graphite-850 p-7 md:p-10">
            <RFQForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
