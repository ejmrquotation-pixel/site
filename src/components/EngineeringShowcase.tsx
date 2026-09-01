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
          <div className="relative overflow-hidden border border-graphite-700 bg-offwhite p-6 md:p-12">
            <div className="relative aspect-[4/3] w-full md:aspect-[16/8]">
              <Image
                src="/images/engenharia-valvula-esfera.png"
                alt="Vista explodida de válvula de esfera EJMR — haste, sede, esfera e corpo bi-partido"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
              />
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-metal-300 pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-700 md:text-xs">
                EJMR — Ref. Técnica / Válvula de Esfera
              </span>
              <span className="hidden h-px flex-1 mx-6 bg-metal-300 md:block" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-700 md:text-xs">
                Vista Explodida
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
