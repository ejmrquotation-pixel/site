import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import type { AtuadorConfig } from "@/lib/content";

export default function ActuatorConfigCard({
  config,
  delay = 0,
}: {
  config: AtuadorConfig;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col border border-graphite-700 bg-graphite-850 p-7">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ejmr-green-end">
          Configuração
        </span>
        <h3 className="mt-2 font-heading text-3xl font-semibold uppercase tracking-tight text-offwhite">
          {config.nome}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-metal-400">{config.descricao}</p>
        <ul className="mt-6 space-y-3">
          {config.recursos.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-sm text-offwhite/85">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-ejmr-green-end" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
