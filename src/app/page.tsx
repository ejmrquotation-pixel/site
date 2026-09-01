import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes, Droplets, Globe2, Settings2 } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import SolutionCard from "@/components/SolutionCard";
import ProductCard from "@/components/ProductCard";
import EngineeringShowcase from "@/components/EngineeringShowcase";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { areasAtuacao, areasTrabalho, valveFamilies } from "@/lib/content";

const icones = [Boxes, Settings2, Droplets, Globe2] as const;

export default function HomePage() {
  return (
    <>
      <Hero
        image="/images/hero-valvulas.png"
        imageAlt="Conjunto de válvulas industriais EJMR — esfera, gaveta, globo e retenção"
        imagePosition="center 35%"
        eyebrowTags={["Engenharia", "Fornecimento", "Importação", "Suporte Técnico"]}
        title="Soluções Industriais sem Fronteiras"
        subtitle="Fornecimento de válvulas, atuadores, bombas e equipamentos industriais, aliado à consultoria técnica para aquisição e importação no mercado internacional."
        ctas={[
          { label: "Conheça Nossas Soluções", href: "/solucoes" },
          { label: "Solicite uma Cotação", href: "/contato", variant: "outline" },
        ]}
      />

      {/* Áreas de atuação */}
      <section className="bg-graphite-900 py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="O que fazemos"
            title="Soluções para a Indústria"
            description="Da identificação da necessidade ao fornecimento do equipamento — apoio técnico completo em cada etapa."
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

      {/* Posicionamento */}
      <section className="border-y border-graphite-700 bg-graphite-850 py-24">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ejmr-green-end">
              <span className="h-px w-6 bg-gradient-green" />
              A EJMR Associate
            </span>
            <h2 className="font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-tight text-offwhite md:text-4xl">
              Muito mais do que fornecimento de válvulas
            </h2>
            <p className="mt-5 text-base leading-relaxed text-metal-300">
              Empresa especializada em soluções industriais, fornecimento de
              equipamentos e consultoria técnica para aquisição e importação
              de equipamentos industriais. A EJMR apoia o cliente desde a
              identificação da necessidade até o fornecimento do equipamento.
            </p>
            <Link
              href="/empresa"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-offwhite link-underline"
            >
              Conheça a empresa
              <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {areasTrabalho.map((item) => (
                <div
                  key={item}
                  className="border border-graphite-700 bg-graphite-900 px-4 py-3.5 text-sm text-offwhite/85"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Portfólio */}
      <section className="bg-graphite-900 py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle
              eyebrow="Portfólio"
              title="Portfólio de Equipamentos"
              description="Famílias completas de válvulas industriais, atuadores elétricos e equipamentos complementares."
              light
            />
            <Link
              href="/produtos"
              className="hidden shrink-0 items-center gap-2 border border-graphite-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite transition-colors hover:border-ejmr-green-end md:inline-flex"
            >
              Ver todos os produtos
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valveFamilies.slice(0, 6).map((family, i) => (
              <ProductCard
                key={family.slug}
                imagem={family.imagem}
                imagemAlt={family.imagemAlt}
                categoria={family.nome}
                descricao={family.descricao}
                href={`/produtos/valvulas#${family.slug}`}
                delay={(i % 3) * 0.08}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 border border-graphite-600 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite"
            >
              Ver todos os produtos
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Atuadores destaque */}
      <section className="relative overflow-hidden bg-graphite-950 py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 aspect-[4/3] overflow-hidden border border-graphite-700 lg:order-1">
            <Image
              src="/images/hero-atuadores.jpg"
              alt="Atuadores elétricos EMT / EMD EJMR"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ejmr-green-end">
              <span className="h-px w-6 bg-gradient-green" />
              EMT / EMD Series
            </span>
            <h2 className="font-heading text-3xl font-semibold uppercase leading-[1.1] tracking-tight text-offwhite md:text-4xl">
              Automação e Controle com Precisão
            </h2>
            <p className="mt-5 text-base leading-relaxed text-metal-300">
              Atuadores elétricos multivoltas para válvulas de curso linear e,
              combinados a redutor de 90°, para válvulas de um quarto de
              volta — em configurações Basic, Integration e Intelligent.
            </p>
            <Link
              href="/produtos/atuadores"
              className="mt-7 inline-flex items-center bg-gradient-green px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
            >
              Ver atuadores elétricos
            </Link>
          </Reveal>
        </Container>
      </section>

      <EngineeringShowcase />

      <CTASection />
    </>
  );
}
