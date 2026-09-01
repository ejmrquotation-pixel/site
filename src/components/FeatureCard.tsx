import { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

export default function FeatureCard({
  titulo,
  Icon,
  delay = 0,
}: {
  titulo: string;
  Icon?: LucideIcon;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="flex h-full items-center gap-4 border border-graphite-700 bg-graphite-850/60 px-5 py-4 transition-colors hover:border-ejmr-green-end/40">
        {Icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-graphite-600 text-ejmr-green-end">
            <Icon size={18} strokeWidth={1.5} />
          </span>
        )}
        <span className="text-sm font-medium uppercase tracking-wide text-offwhite/90">
          {titulo}
        </span>
      </div>
    </Reveal>
  );
}
