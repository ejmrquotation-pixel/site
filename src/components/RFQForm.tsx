"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle2, Loader2, Paperclip, TriangleAlert, UploadCloud, X } from "lucide-react";
import { equipamentoOptions } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const ACCEPTED = ".pdf,.xlsx,.docx,.jpg,.jpeg,.png";

export default function RFQForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list)]);
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Envio simulado (sem backend integrado). Estrutura pronta para futura
    // integração com CMS/API — ver seção 20 do briefing.
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.12) {
            resolve(true);
          } else {
            reject(new Error("Falha simulada"));
          }
        }, 1400);
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center border border-ejmr-green-end/40 bg-graphite-850 px-8 py-16 text-center">
        <CheckCircle2 size={44} strokeWidth={1.3} className="text-ejmr-green-end" />
        <h3 className="mt-5 font-heading text-2xl font-semibold uppercase tracking-tight text-offwhite">
          Solicitação enviada
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-metal-400">
          Recebemos sua solicitação de cotação. Nossa equipe técnica irá
          analisar a demanda e retornar em breve.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFiles([]);
          }}
          className="mt-8 border border-graphite-600 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-offwhite hover:border-ejmr-green-end"
        >
          Enviar nova solicitação
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Nome" name="nome" required />
        <Field label="Empresa" name="empresa" required />
        <Field label="E-mail" name="email" type="email" required />
        <Field label="Telefone / WhatsApp" name="telefone" required />
        <Field label="Cidade / Estado" name="cidade" />
        <SelectField label="Equipamento" name="equipamento" options={equipamentoOptions} />
        <Field label="Quantidade" name="quantidade" type="number" min={1} />
        <Field label="Prazo Desejado" name="prazo" placeholder="Ex.: 30 dias, 90 dias..." />
      </div>

      <TextAreaField
        label="Descrição Técnica"
        name="descricao"
        placeholder="Descreva a especificação técnica do equipamento (diâmetro, classe de pressão, material, conexão, aplicação...)"
      />

      <TextAreaField label="Mensagem" name="mensagem" rows={4} />

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-metal-400">
          Anexar Especificação Técnica
        </label>
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFiles(e.dataTransfer.files);
          }}
          onClick={() => fileInputRef.current?.click()}
          className="flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-graphite-600 bg-graphite-850 px-6 py-10 text-center transition-colors hover:border-ejmr-green-end/60"
        >
          <UploadCloud size={26} strokeWidth={1.3} className="text-ejmr-green-end" />
          <p className="text-sm text-offwhite/90">
            Arraste arquivos aqui ou clique para selecionar
          </p>
          <p className="text-xs text-metal-500">PDF, XLSX, DOCX, JPG, PNG</p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={ACCEPTED}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <ul className="mt-4 space-y-2">
            {files.map((file) => (
              <li
                key={file.name}
                className="flex items-center justify-between border border-graphite-700 bg-graphite-850 px-4 py-2.5 text-sm text-offwhite/90"
              >
                <span className="flex items-center gap-2 truncate">
                  <Paperclip size={14} className="shrink-0 text-ejmr-green-end" />
                  <span className="truncate">{file.name}</span>
                </span>
                <button
                  type="button"
                  aria-label={`Remover ${file.name}`}
                  onClick={() => removeFile(file.name)}
                  className="shrink-0 text-metal-500 hover:text-offwhite"
                >
                  <X size={15} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 border border-red-900/60 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          <TriangleAlert size={18} className="shrink-0" />
          Não foi possível enviar sua solicitação agora. Tente novamente em instantes.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex w-full items-center justify-center gap-2 bg-gradient-green px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-graphite-950 transition-opacity hover:opacity-90 disabled:opacity-60 md:w-auto"
      >
        {status === "sending" && <Loader2 size={16} className="animate-spin" />}
        {status === "sending" ? "Enviando..." : "Enviar Solicitação"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-metal-400">
        {label} {required && <span className="text-ejmr-green-end">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="w-full border border-graphite-600 bg-graphite-900 px-4 py-3 text-sm text-offwhite outline-none transition-colors placeholder:text-metal-500 focus:border-ejmr-green-end"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-metal-400">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full border border-graphite-600 bg-graphite-900 px-4 py-3 text-sm text-offwhite outline-none transition-colors focus:border-ejmr-green-end"
      >
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  rows = 5,
  placeholder,
}: {
  label: string;
  name: string;
  rows?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-metal-400">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-y border border-graphite-600 bg-graphite-900 px-4 py-3 text-sm text-offwhite outline-none transition-colors placeholder:text-metal-500 focus:border-ejmr-green-end"
      />
    </div>
  );
}
