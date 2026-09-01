import type { Metadata } from "next";
import { ArrowDown, Cpu, Router, ServerCog } from "lucide-react";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ActuatorConfigCard from "@/components/ActuatorConfigCard";
import FeatureCard from "@/components/FeatureCard";
import ProtocolBadge from "@/components/ProtocolBadge";
import TechnicalTable from "@/components/TechnicalTable";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import {
  atuadorConfigs,
  atuadorEspecificacoes,
  atuadorModelos,
  atuadorRecursos,
  atuadorSeries,
  protocolosIndustriais,
} from "@/lib/content";
import {
  ShieldCheck,
  Droplet,
  HandMetal,
  Radio,
  Binary,
  Cog,
  Gauge,
  Settings2,
  MonitorCog,
  ShieldAlert,
  ToggleLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Atuadores Elétricos EMT / EMD",
  description:
    "Atuadores elétricos multivoltas EMT e EMD, em configurações Basic, Integration e Intelligent, para automação de válvulas industriais.",
};

const recursoIcones = [
  ShieldCheck,
  Droplet,
  HandMetal,
  Radio,
  Binary,
  Cog,
  Gauge,
  Settings2,
  MonitorCog,
  ShieldAlert,
  ToggleLeft,
];

export default function AtuadoresPage() {
  return (
    <>
      <Hero
        image="/images/hero-atuadores.jpg"
        imageAlt="Atuadores elétricos EMT / EMD EJMR — série multivoltas"
        imagePosition="center 40%"
        tall={false}
        eyebrowTags={["Produtos", "EMT / EMD Series"]}
        title="Automação e Controle com Precisão"
        subtitle="Atuadores elétricos multivoltas para válvulas de curso linear e, combinados a redutor de 90°, para válvulas de um quarto de volta."
      />

      {/* Séries */}
      <section className="bg-graphite-900 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Séries" title="EMT e EMD" light />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {atuadorSeries.map((serie, i) => (
              <Reveal key={serie.nome} delay={i * 0.1}>
                <div className="h-full border border-graphite-700 bg-graphite-850 p-8">
                  <h3 className="font-heading text-4xl font-semibold uppercase tracking-tight text-gradient-green">
                    {serie.nome}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-metal-300 md:text-base">
                    {serie.descricao}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Configurações */}
      <section className="border-y border-graphite-700 bg-graphite-850 py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Configurações"
            title="Basic, Integration e Intelligent"
            description="Cada série EMT / EMD está disponível nas três configurações a seguir, com recursos progressivos de automação e integração."
            light
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {atuadorConfigs.map((config, i) => (
              <ActuatorConfigCard key={config.nome} config={config} delay={i * 0.1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Recursos */}
      <section className="bg-graphite-900 py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Recursos" title="Recursos do Catálogo" light />
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {atuadorRecursos.map((recurso, i) => (
              <FeatureCard
                key={recurso}
                titulo={recurso}
                Icon={recursoIcones[i % recursoIcones.length]}
                delay={(i % 6) * 0.05}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Comunicação industrial */}
      <section className="border-y border-graphite-700 bg-graphite-850 py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Comunicação Industrial"
            title="Integração com Redes de Automação"
            description="A série EMT suporta os protocolos de comunicação industrial identificados no catálogo técnico."
            light
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {protocolosIndustriais.map((p) => (
              <ProtocolBadge key={p} label={p} />
            ))}
          </div>

          <Reveal delay={0.15} className="mt-14">
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 border border-graphite-700 bg-graphite-900 p-10">
              <div className="flex flex-col items-center gap-2">
                <ServerCog size={30} strokeWidth={1.3} className="text-ejmr-green-end" />
                <span className="font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
                  PLC / DCS
                </span>
              </div>
              <ArrowDown size={20} className="text-metal-500" />
              <div className="flex flex-col items-center gap-2">
                <Router size={30} strokeWidth={1.3} className="text-ejmr-green-end" />
                <span className="font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
                  Rede Industrial
                </span>
                <span className="text-xs uppercase tracking-wide text-metal-500">
                  Modbus · Profibus-DP · HART
                </span>
              </div>
              <ArrowDown size={20} className="text-metal-500" />
              <div className="flex flex-col items-center gap-2">
                <Cpu size={30} strokeWidth={1.3} className="text-ejmr-green-end" />
                <span className="font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
                  Atuadores em Campo
                </span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Especificações técnicas */}
      <section className="bg-graphite-900 py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionTitle eyebrow="Ficha Técnica" title="Especificações Gerais" light />
            <div className="mt-8">
              <TechnicalTable rows={atuadorEspecificacoes} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionTitle eyebrow="Modelos" title="Série EMT — Trifásica On-Off" light />
            <div className="mt-8 table-scroll overflow-x-auto border border-graphite-700 scrollbar-thin">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-graphite-850">
                    <th className="border-b border-graphite-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-metal-400">
                      Modelo
                    </th>
                    <th className="border-b border-graphite-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-metal-400">
                      Torque
                    </th>
                    <th className="border-b border-graphite-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-metal-400">
                      Diâmetro máx. de haste
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {atuadorModelos.map((m, i) => (
                    <tr key={m.modelo} className={i % 2 === 0 ? "bg-graphite-900" : "bg-graphite-850"}>
                      <td className="border-t border-graphite-700 px-5 py-3 font-medium text-offwhite">
                        {m.modelo}
                      </td>
                      <td className="border-t border-graphite-700 px-5 py-3 text-offwhite/90">
                        {m.torque}
                      </td>
                      <td className="border-t border-graphite-700 px-5 py-3 text-offwhite/90">
                        {m.haste}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-metal-500">
              Modelos exemplificativos do catálogo técnico (série EMT trifásica, operação
              On-Off). Torque e velocidade variam conforme modelo e frequência (50/60Hz).
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
