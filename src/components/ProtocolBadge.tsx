import { Radio } from "lucide-react";

export default function ProtocolBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 border border-graphite-600 bg-graphite-900 px-4 py-2 text-sm font-medium uppercase tracking-wide text-offwhite/90">
      <Radio size={15} className="text-ejmr-green-end" />
      {label}
    </span>
  );
}
