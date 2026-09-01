import { Download, FileText, Lock } from "lucide-react";
import type { Documento } from "@/lib/content";

export default function DocumentCard({ doc }: { doc: Documento }) {
  return (
    <div className="flex flex-col justify-between border border-graphite-700 bg-graphite-850 p-6 transition-colors hover:border-ejmr-green-end/40">
      <div>
        <div className="flex items-start justify-between">
          <FileText size={26} strokeWidth={1.4} className="text-ejmr-green-end" />
          <span className="border border-graphite-600 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-metal-400">
            {doc.tipo}
          </span>
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold uppercase tracking-tight leading-snug text-offwhite">
          {doc.nome}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-metal-500">{doc.categoria}</p>
      </div>

      {doc.disponivel && doc.href ? (
        <a
          href={doc.href}
          download
          className="mt-6 flex items-center justify-center gap-2 bg-gradient-green px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
        >
          <Download size={15} />
          Baixar Documento
        </a>
      ) : (
        <div className="mt-6 flex items-center justify-center gap-2 border border-graphite-700 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-metal-500">
          <Lock size={14} />
          Disponível sob consulta
        </div>
      )}
    </div>
  );
}
