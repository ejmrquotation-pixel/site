import Image from "next/image";
import Reveal from "./Reveal";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function EngineeringShowcase() {
  return (
    <section className="bg-graphite-950 py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Engenharia"
          title="Engenharia por Trás de Cada Solução"
          description="Precisão técnica em cada componente — da concepção do projeto à especificação final do equipamento."
          light
        />

        <Reveal delay={0.15} className="relative mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-graphite-700 bg-offwhite md:aspect-[21/9]">
            <Image
              src="/images/engenharia-valvula-esfera.png"
              alt="Vista explodida de válvula de esfera EJMR — haste, sede, esfera e corpo bi-partido"
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-700 md:bottom-6 md:left-6">
              EJMR — Ref. Técnica / Válvula de Esfera
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
