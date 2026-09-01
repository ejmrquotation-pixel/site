"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import TechnicalTable from "./TechnicalTable";
import type { ValveFamily } from "@/lib/content";

export default function ValveFamilyCard({
  family,
  delay = 0,
}: {
  family: ValveFamily;
  delay?: number;
}) {
  const [open, setOpen] = useState(false);

  const rows = [
    family.tamanho && { label: "Tamanho", valor: family.tamanho },
    family.corpo && { label: "Corpo", valor: family.corpo },
    family.internos && { label: "Internos", valor: family.internos },
    family.sede && { label: "Sede", valor: family.sede },
    family.temperatura && { label: "Temperatura", valor: family.temperatura },
  ].filter(Boolean) as { label: string; valor: string }[];

  return (
    <Reveal id={family.slug} delay={delay}>
      <div
        id={family.slug}
        className="scroll-mt-28 grid grid-cols-1 gap-0 overflow-hidden border border-graphite-700 bg-graphite-850 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={family.imagem}
            alt={family.imagemAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight text-offwhite md:text-3xl">
              {family.nome}
            </h3>
            {family.serie && (
              <span className="border border-graphite-600 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-metal-400">
                {family.serie}
              </span>
            )}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-metal-300 md:text-base">
            {family.descricao}
          </p>

          {family.tipos && (
            <div className="mt-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
                Tipos disponíveis
              </h4>
              <ul className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                {family.tipos.map((tipo) => (
                  <li key={tipo} className="flex items-start gap-2 text-sm text-offwhite/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ejmr-green-end" />
                    {tipo}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-6 flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.15em] text-ejmr-green-end"
          >
            {open ? "Ocultar ficha técnica" : "Ver ficha técnica"}
            <ChevronDown
              size={15}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="mt-5 space-y-5">
              {rows.length > 0 && <TechnicalTable rows={rows} caption="Características" />}
              {family.normas && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
                    Normas
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {family.normas.map((n) => (
                      <li key={n} className="text-sm text-offwhite/85">
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="mt-auto pt-7">
            <Link
              href={`/contato?equipamento=${encodeURIComponent(family.nome)}`}
              className="inline-flex items-center bg-gradient-green px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
            >
              Solicitar Cotação
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
