"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SolutionCard({
  numero,
  titulo,
  descricao,
  href,
  cta,
  icon,
  delay = 0,
}: {
  numero: string;
  titulo: string;
  descricao: string;
  href: string;
  cta: string;
  icon: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
    >
      <Link
        href={href}
        className="group relative flex h-full flex-col justify-between overflow-hidden border border-graphite-700 bg-graphite-850 p-8 transition-colors duration-300 hover:border-ejmr-green-end/60"
      >
        <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-green transition-transform duration-500 group-hover:scale-x-100" />
        <div>
          <div className="flex items-center justify-end">
            <span className="text-ejmr-green-end">{icon}</span>
          </div>
          <h3 className="mt-6 font-heading text-2xl font-semibold uppercase tracking-tight text-offwhite">
            {titulo}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-metal-400">{descricao}</p>
        </div>
        <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite/80">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {cta}
          </span>
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
          />
        </div>
      </Link>
    </motion.div>
  );
}
