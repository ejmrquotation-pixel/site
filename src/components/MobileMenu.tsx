"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { nav } from "@/lib/content";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-graphite-950/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-graphite-900 border-l border-graphite-700 px-7 py-7 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Image
                src="/images/logo-ejmr.png"
                alt="EJMR Associate"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={onClose}
                className="rounded-sm border border-graphite-600 p-2 text-offwhite"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-1">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between border-b border-graphite-700 py-4 font-heading text-2xl uppercase tracking-tight text-offwhite/90 hover:text-ejmr-green-end transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8">
              <Link
                href="/contato"
                onClick={onClose}
                className="flex w-full items-center justify-center bg-gradient-green px-5 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-graphite-950"
              >
                Solicitar Cotação
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
