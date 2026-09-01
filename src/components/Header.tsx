"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { nav } from "@/lib/content";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-graphite-900/85 backdrop-blur-md border-b border-graphite-700/80 py-3"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo-ejmr.png"
              alt="EJMR Associate"
              width={168}
              height={44}
              priority
              className="h-8 md:h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`link-underline text-sm font-medium uppercase tracking-wide text-offwhite/85 hover:text-offwhite transition-colors ${
                  pathname === item.href ? "text-offwhite" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contato"
              className="hidden md:inline-flex items-center border border-ejmr-green-end/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite transition-colors hover:bg-gradient-green hover:border-transparent"
            >
              Solicitar Cotação
            </Link>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center rounded-sm border border-graphite-600 p-2 text-offwhite"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
