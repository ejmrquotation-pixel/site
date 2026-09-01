import Reveal from "./Reveal";

export default function Timeline({
  steps,
}: {
  steps: { numero: string; titulo: string }[];
}) {
  return (
    <div className="mt-14">
      {/* Desktop: timeline horizontal */}
      <div className="hidden md:block">
        <div className="relative grid grid-cols-6 gap-4">
          <div className="absolute left-0 right-0 top-6 h-px bg-graphite-700" />
          {steps.map((step, i) => (
            <Reveal key={step.numero} delay={i * 0.08} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-ejmr-green-end/60 bg-graphite-900 font-heading text-lg text-ejmr-green-end">
                {step.numero}
              </div>
              <h4 className="mt-5 font-heading text-base font-semibold uppercase leading-snug tracking-tight text-offwhite">
                {step.titulo}
              </h4>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Mobile: timeline vertical */}
      <div className="md:hidden">
        <div className="relative ml-6 border-l border-graphite-700 pl-8">
          {steps.map((step, i) => (
            <Reveal key={step.numero} delay={i * 0.06} className="relative pb-9 last:pb-0">
              <div className="absolute -left-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full border border-ejmr-green-end/60 bg-graphite-900 font-heading text-sm text-ejmr-green-end">
                {step.numero}
              </div>
              <h4 className="font-heading text-base font-semibold uppercase leading-snug tracking-tight text-offwhite">
                {step.titulo}
              </h4>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
