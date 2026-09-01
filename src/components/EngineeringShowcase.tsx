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
          <div className="relative mx-auto max-w-4xl">
            {/* Corner marks — blueprint styling */}
            <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-ejmr-green-end/60" />
            <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-ejmr-green-end/60" />
            <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-ejmr-green-end/60" />
            <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-ejmr-green-end/60" />

            <div className="relative overflow-hidden border border-graphite-700 bg-offwhite p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] md:p-8">
              <div className="relative aspect-[4/3] w-full md:aspect-[16/9]">
                <Image
                  src="/images/engenharia-valvula-esfera.png"
                  alt="Vista explodida de válvula de esfera EJMR — haste, sede, esfera e corpo bi-partido"
                  fill
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-metal-300 pt-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-700">
                  EJMR — Ref. Técnica
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-graphite-700">
                  Válvula de Esfera · Vista Explodida
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
