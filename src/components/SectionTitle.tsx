import Reveal from "./Reveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ejmr-green-end">
          <span className="h-px w-6 bg-gradient-green" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl font-semibold uppercase tracking-tight leading-[1.05] ${
          light ? "text-offwhite" : "text-graphite-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-metal-300" : "text-graphite-700"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
