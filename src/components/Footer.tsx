import Link from "next/link";
import Image from "next/image";
import { footerMenu, footerProdutos } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-graphite-700 bg-graphite-950">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/images/logo-ejmr.png"
              alt="EJMR Associate"
              width={168}
              height={44}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-metal-400">
              Empresa especializada em soluções industriais, fornecimento de
              equipamentos e consultoria técnica para aquisição e importação
              de equipamentos industriais.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
              Menu
            </h3>
            <ul className="mt-5 space-y-3">
              {footerMenu.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-metal-300 hover:text-offwhite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
              Produtos
            </h3>
            <ul className="mt-5 space-y-3">
              {footerProdutos.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-sm text-metal-300 hover:text-offwhite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-metal-500">
              Contato
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:+5527996591287"
                  className="link-underline text-sm text-metal-300 hover:text-offwhite transition-colors"
                >
                  (27) 99659-1287
                </a>
              </li>
              <li>
                <a
                  href="mailto:comercial@ejmrassociate.com"
                  className="link-underline text-sm text-metal-300 hover:text-offwhite transition-colors"
                >
                  comercial@ejmrassociate.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-graphite-700 pt-8 text-xs text-metal-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} EJMR Associate. Todos os direitos reservados.</p>
          <p className="uppercase tracking-[0.2em]">Engenharia · Fornecimento · Importação · Suporte Técnico</p>
        </div>
      </div>
    </footer>
  );
}
