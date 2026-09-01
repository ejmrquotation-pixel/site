"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProductCard({
  imagem,
  imagemAlt,
  categoria,
  descricao,
  href,
  delay = 0,
}: {
  imagem: string;
  imagemAlt: string;
  categoria: string;
  descricao: string;
  href: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay }}
      className="group relative overflow-hidden border border-graphite-700 bg-graphite-850 transition-colors duration-300 hover:border-ejmr-green-end/50"
    >
      <Link href={href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-graphite-800">
          <Image
            src={imagem}
            alt={imagemAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-graphite-950/10 to-transparent" />
        </div>
        <div className="p-6">
          <h3 className="font-heading text-xl font-semibold uppercase tracking-tight text-offwhite">
            {categoria}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-metal-400">
            {descricao}
          </p>
          <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-ejmr-green-end">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Ver produtos
            </span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
