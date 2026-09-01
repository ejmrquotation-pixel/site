import Link from "next/link";
import Reveal from "./Reveal";
import Container from "./Container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-graphite-950 py-24">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ejmr-green-end/10 blur-3xl" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-semibold uppercase tracking-tight text-offwhite md:text-5xl">
            Precisa de um Equipamento Industrial?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-metal-300 md:text-lg">
            Envie sua especificação técnica e nossa equipe poderá analisar a
            demanda e buscar a solução mais adequada ao seu projeto.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center bg-gradient-green px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90"
            >
              Solicitar Cotação
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center border border-offwhite/40 px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite transition-colors hover:border-offwhite hover:bg-offwhite/10"
            >
              Falar com a EJMR
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
