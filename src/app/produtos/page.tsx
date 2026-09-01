import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Válvulas industriais, atuadores elétricos e bombas e equipamentos industriais fornecidos pela EJMR Associate.",
};

const hub = [
  {
    imagem: "/images/cat-esfera.jpg",
    imagemAlt: "Válvulas de esfera EJMR",
    categoria: "Válvulas Industriais",
    descricao:
      "Treze famílias de válvulas industriais — esfera, gaveta, globo, retenção, borboleta, forjadas, bronze, controle, API 6A e acessórios.",
    href: "/produtos/valvulas",
  },
  {
    imagem: "/images/hero-atuadores.jpg",
    imagemAlt: "Atuadores elétricos EMT / EMD EJMR",
    categoria: "Atuadores Elétricos",
    descricao:
      "Atuadores elétricos multivoltas EMT e EMD, em configurações Basic, Integration e Intelligent, para automação de válvulas.",
    href: "/produtos/atuadores",
  },
  {
    imagem: "/images/cat-controle.jpg",
    imagemAlt: "Equipamentos industriais em linha de produção",
    categoria: "Bombas e Equipamentos Industriais",
    descricao:
      "Identificação e fornecimento de bombas e equipamentos industriais conforme a especificação técnica de cada projeto.",
    href: "/produtos/bombas",
  },
];

export default function ProdutosPage() {
  return (
    <>
      <Hero
        image="/images/cat-api6a.jpg"
        imageAlt="Conjuntos de válvulas de cabeça de poço API 6A"
        imagePosition="center 30%"
        tall={false}
        eyebrowTags={["Produtos"]}
        title="Portfólio de Equipamentos"
        subtitle="Famílias completas de válvulas industriais, atuadores elétricos e equipamentos complementares para a indústria."
      />

      <section className="bg-graphite-900 py-24 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="Explore o portfólio"
            title="Escolha uma linha de produto"
            light
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {hub.map((item, i) => (
              <ProductCard key={item.href} {...item} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
