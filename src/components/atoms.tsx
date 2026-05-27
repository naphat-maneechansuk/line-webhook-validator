import type { ReactNode } from "react";

type PillTone =
  | "slate"
  | "line"
  | "blue"
  | "violet"
  | "amber"
  | "rose"
  | "emerald"
  | "sky"
  | "fuchsia";

const PILL_TONES: Record<PillTone, string> = {
  slate: "bg-ink-800 text-ink-200 border-ink-700",
  line: "bg-line-soft text-line border-line/30",
  blue: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  rose: "bg-rose-500/10 text-rose-300 border-rose-500/30",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/30",
  fuchsia: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/30",
};

export function Pill({
  children,
  tone = "slate",
  className = "",
}: {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 h-5 rounded-[5px] text-[10.5px] font-mono font-medium border tracking-tight ${PILL_TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function FieldLabel({
  children,
  hint,
  right,
}: {
  children: ReactNode;
  hint?: ReactNode;
  right?: ReactNode;
}) {
  return (
    <div className="mb-1.5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 min-w-0">
          <div className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-ink-200 whitespace-nowrap">
            {children}
          </div>
        </div>
        <div className="text-[11px] text-ink-400 flex-none whitespace-nowrap">
          {right}
        </div>
      </div>
      {hint && (
        <div className="text-[12px] text-ink-400 mt-1.5 leading-relaxed max-w-[640px]">
          {hint}
        </div>
      )}
    </div>
  );
}

export function Textarea({
  value,
  onChange,
  rows = 10,
  mono = true,
}: {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  mono?: boolean;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      spellCheck={false}
      className={`focus-line w-full resize-y bg-ink-950 text-ink-100 border border-ink-700 rounded-lg px-3.5 py-3 ${
        mono ? "font-mono text-[12.5px] leading-relaxed" : "text-sm"
      } placeholder-ink-500`}
    />
  );
}

export function TextInput({
  value,
  onChange,
  placeholder,
  mono = true,
  type = "text",
  rightSlot,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  mono?: boolean;
  type?: string;
  rightSlot?: ReactNode;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
        autoComplete="off"
        className={`focus-line w-full bg-ink-950 text-ink-100 border border-ink-700 rounded-lg px-3.5 py-2.5 ${
          mono ? "font-mono text-[12.5px]" : "text-sm"
        } placeholder-ink-500 ${rightSlot ? "pr-20" : ""}`}
      />
      {rightSlot && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {rightSlot}
        </div>
      )}
    </div>
  );
}
