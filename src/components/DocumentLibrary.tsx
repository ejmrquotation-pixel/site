"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import DocumentCard from "./DocumentCard";
import type { Documento } from "@/lib/content";

export default function DocumentLibrary({ documentos }: { documentos: Documento[] }) {
  const [query, setQuery] = useState("");

  const filtrados = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return documentos;
    return documentos.filter(
      (doc) =>
        doc.nome.toLowerCase().includes(q) || doc.categoria.toLowerCase().includes(q)
    );
  }, [documentos, query]);

  return (
    <div>
      <div className="relative max-w-lg">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-metal-500"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nome ou categoria do documento..."
          className="w-full border border-graphite-600 bg-graphite-900 py-3.5 pl-11 pr-4 text-sm text-offwhite outline-none transition-colors placeholder:text-metal-500 focus:border-ejmr-green-end"
        />
      </div>

      {filtrados.length === 0 ? (
        <p className="mt-12 text-sm text-metal-400">
          Nenhum documento encontrado para “{query}”.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((doc) => (
            <DocumentCard key={doc.nome} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
