import Image from "next/image";
import Reveal from "./Reveal";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const pontos = [
  { x: 28, y: 22, label: "Corpo" },
  { x: 74, y: 30, label: "Flange" },
  { x: 50, y: 62, label: "Haste" },
  { x: 20, y: 74, label: "Sede" },
  { x: 80, y: 70, label: "Vedação" },
];

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
          <div className="blueprint-grid relative aspect-[16/9] w-full overflow-hidden border border-graphite-700 md:aspect-[21/9]">
            <Image
              src="/images/cat-esfera.jpg"
              alt="Detalhe técnico de válvula de esfera EJMR"
              fill
              sizes="100vw"
              className="object-cover opacity-80 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-graphite-950/45" />

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {pontos.map((p) => (
                <g key={p.label}>
                  <line
                    x1={p.x}
                    y1={p.y}
                    x2={p.x > 50 ? p.x + 10 : p.x - 10}
                    y2={p.y - 8 < 4 ? p.y + 8 : p.y - 8}
                    stroke="#1fae7a"
                    strokeWidth="0.15"
                    opacity="0.7"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx={p.x} cy={p.y} r="0.6" fill="#1fae7a" />
                </g>
              ))}
            </svg>

            {pontos.map((p) => (
              <span
                key={p.label}
                style={{
                  left: `${p.x > 50 ? p.x + 11 : p.x - 11}%`,
                  top: `${(p.y - 8 < 4 ? p.y + 8 : p.y - 8)}%`,
                  transform: p.x > 50 ? "translate(0, -50%)" : "translate(-100%, -50%)",
                }}
                className="absolute whitespace-nowrap border border-ejmr-green-end/50 bg-graphite-950/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-offwhite/90 backdrop-blur-sm md:text-xs"
              >
                {p.label}
              </span>
            ))}

            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-metal-400 md:bottom-6 md:left-6">
              EJMR — Ref. Técnica / Válvula de Esfera
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
