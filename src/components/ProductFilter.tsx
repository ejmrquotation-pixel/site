"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { filtroOpcoes } from "@/lib/content";

const grupos: { label: string; key: keyof typeof filtroOpcoes }[] = [
  { label: "Tipo", key: "tipo" },
  { label: "Diâmetro", key: "diametro" },
  { label: "Classe de Pressão", key: "classe" },
  { label: "Material", key: "material" },
  { label: "Conexão", key: "conexao" },
  { label: "Aplicação", key: "aplicacao" },
];

function FilterBody() {
  const [active, setActive] = useState<Record<string, string | null>>({});

  const toggle = (key: string, value: string) => {
    setActive((prev) => ({ ...prev, [key]: prev[key] === value ? null : value }));
  };

  return (
    <div className="space-y-6">
      {grupos.map((grupo) => (
        <div key={grupo.key}>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
            {grupo.label}
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {filtroOpcoes[grupo.key].map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggle(grupo.key, opt)}
                className={`border px-3 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                  active[grupo.key] === opt
                    ? "border-ejmr-green-end bg-ejmr-green-end/10 text-ejmr-green-end"
                    : "border-graphite-600 text-metal-400 hover:border-metal-400 hover:text-offwhite"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <p className="border-t border-graphite-700 pt-4 text-xs leading-relaxed text-metal-500">
        Os filtros indicam as possibilidades de especificação do portfólio EJMR. Para uma
        seleção técnica precisa, envie sua especificação através do formulário de cotação.
      </p>
    </div>
  );
}

export default function ProductFilter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop / tablet: painel lateral fixo */}
      <aside className="hidden lg:block border border-graphite-700 bg-graphite-850 p-6">
        <div className="mb-2 flex items-center gap-2 text-offwhite">
          <SlidersHorizontal size={18} className="text-ejmr-green-end" />
          <h3 className="font-heading text-lg font-semibold uppercase tracking-tight">
            Filtrar Portfólio
          </h3>
        </div>
        <FilterBody />
      </aside>

      {/* Mobile / tablet pequeno: bottom sheet */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-2 border border-graphite-600 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite"
        >
          <SlidersHorizontal size={16} className="text-ejmr-green-end" />
          Filtrar Portfólio
        </button>

        {open && (
          <div className="fixed inset-0 z-[80] flex items-end">
            <div
              className="absolute inset-0 bg-graphite-950/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <div className="relative z-10 max-h-[80vh] w-full overflow-y-auto rounded-t-2xl border-t border-graphite-700 bg-graphite-900 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-offwhite">
                  Filtrar Portfólio
                </h3>
                <button
                  type="button"
                  aria-label="Fechar filtros"
                  onClick={() => setOpen(false)}
                  className="rounded-sm border border-graphite-600 p-1.5 text-offwhite"
                >
                  <X size={16} />
                </button>
              </div>
              <FilterBody />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
