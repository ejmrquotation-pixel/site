import { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export default function ServiceCard({
  titulo,
  descricao,
  Icon,
  delay = 0,
}: {
  titulo: string;
  descricao: string;
  Icon?: LucideIcon;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="h-full border border-graphite-700 bg-graphite-850 p-7 transition-colors hover:border-ejmr-green-end/40">
        {Icon && <Icon size={22} strokeWidth={1.4} className="text-ejmr-green-end" />}
        <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
          {titulo}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-metal-400">{descricao}</p>
      </div>
    </Reveal>
  );
}
