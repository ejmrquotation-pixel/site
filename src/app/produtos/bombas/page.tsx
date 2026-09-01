import type { Metadata } from "next";
import Link from "next/link";
import { Cog, Droplets, Factory, Wrench } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { bombasCategorias } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bombas e Equipamentos Industriais",
  description:
    "A EJMR auxilia empresas na identificação e fornecimento de equipamentos industriais de acordo com os requisitos técnicos de cada projeto.",
};

const icones = [Droplets, Cog, Factory, Wrench];

export default function BombasPage() {
  return (
    <>
      <Hero
        image="/images/cat-controle.jpg"
        imageAlt="Equipamentos industriais em linha de produção"
        tall={false}
        eyebrowTags={["Produtos"]}
        title="Bombas e Equipamentos Industriais"
        subtitle="A EJMR auxilia empresas na identificação e fornecimento de equipamentos industriais de acordo com os requisitos técnicos de cada projeto."
      />

      <section className="bg-graphite-900 py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Como atuamos"
            title="Prospecção, especificação e fornecimento"
            description="A EJMR não representa oficialmente fabricantes específicos nesta linha — o trabalho consiste em identificar e viabilizar o fornecimento do equipamento correto para cada demanda."
            light
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bombasCategorias.map((cat, i) => (
              <ServiceCard
                key={cat.nome}
                titulo={cat.nome}
                descricao={cat.descricao}
                Icon={icones[i]}
                delay={i * 0.08}
              />
            ))}
          </div>

          <Reveal delay={0.2} className="mt-16">
            <div className="flex flex-col items-center gap-6 border border-graphite-700 bg-graphite-850 px-8 py-14 text-center">
              <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight text-offwhite md:text-3xl">
                Não encontrou o equipamento que precisa?
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-metal-400 md:text-base">
                Envie sua especificação técnica e nossa equipe irá avaliar a
                demanda para identificar a solução mais adequada ao seu
                projeto.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center bg-gradient-green px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
              >
                Envie sua Especificação
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
