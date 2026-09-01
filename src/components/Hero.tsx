"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeroCta = { label: string; href: string; variant?: "solid" | "outline" };

export default function Hero({
  image,
  imageAlt,
  imagePosition = "center",
  eyebrowTags,
  title,
  subtitle,
  ctas,
  tall = true,
  children,
}: {
  image: string;
  imageAlt: string;
  imagePosition?: string;
  eyebrowTags?: string[];
  title: ReactNode;
  subtitle?: string;
  ctas?: HeroCta[];
  tall?: boolean;
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative flex w-full items-end overflow-hidden bg-graphite-950 ${
        tall ? "min-h-[100svh]" : "min-h-[62vh] md:min-h-[68vh]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: imagePosition }}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/70 to-graphite-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/80 via-graphite-950/20 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 pb-16 pt-40 md:pb-24 md:pt-48">
        {eyebrowTags && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {eyebrowTags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-ejmr-green-end">
                  {tag}
                </span>
                {i < eyebrowTags.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-metal-500" />
                )}
              </span>
            ))}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-heading text-[2.6rem] leading-[1.02] font-semibold uppercase tracking-tight text-offwhite md:text-7xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-metal-300 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}

        {ctas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {ctas.map((cta) =>
              cta.variant === "outline" ? (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center border border-offwhite/40 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite transition-colors hover:border-offwhite hover:bg-offwhite/10"
                >
                  {cta.label}
                </Link>
              ) : (
                <Link
                  key={cta.label}
                  href={cta.href}
                  className="inline-flex items-center bg-gradient-green px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
                >
                  {cta.label}
                </Link>
              )
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
