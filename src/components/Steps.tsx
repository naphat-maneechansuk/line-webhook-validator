import { useMemo } from "react";
import type { Strings } from "@/lib/strings";
import type { ValidationResult } from "@/lib/validate";

export function Steps({
  L,
  result,
  body,
}: {
  L: Strings;
  result: ValidationResult;
  body: string;
}) {
  const bodyHex = useMemo(() => {
    const bytes = new TextEncoder().encode(body);
    const slice = bytes.slice(0, 24);
    const hex = [...slice].map((b) => b.toString(16).padStart(2, "0")).join(" ");
    return hex + (bytes.length > 24 ? " …" : "");
  }, [body]);

  const items = [
    {
      n: 1,
      title: L.step1,
      sub: L.step1Sub,
      out: (
        <div className="font-mono text-[11.5px] text-ink-200 break-all leading-relaxed">
          {bodyHex}
        </div>
      ),
      meta: `${result.bodyBytes} ${L.bytes}`,
    },
    {
      n: 2,
      title: L.step2,
      sub: L.step2Sub,
      out: (
        <div className="font-mono text-[11.5px] text-amber-200 break-all leading-relaxed">
          {result.hex}
        </div>
      ),
      meta: `${result.digestBytes} ${L.bytes} (256-bit digest, hex)`,
    },
    {
      n: 3,
      title: L.step3,
      sub: L.step3Sub,
      out: (
        <div className="font-mono text-[11.5px] text-line break-all leading-relaxed">
          {result.computed}
        </div>
      ),
      meta: `${result.computed.length} chars (base64)`,
    },
  ];

  return (
    <div className="p-4 grid gap-3">
      {items.map((it) => (
        <div
          key={it.n}
          className="rounded-lg border border-ink-750 bg-ink-900/60 p-3.5 flex gap-3"
        >
          <div className="flex-none w-7 h-7 rounded-md bg-ink-800 border border-ink-700 flex items-center justify-center font-mono text-[12px] text-ink-200">
            {it.n}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-3">
              <div className="text-[13px] font-medium text-ink-100">
                {it.title}
              </div>
              <div className="text-[10.5px] font-mono text-ink-400">
                {it.meta}
              </div>
            </div>
            <div className="text-[12px] text-ink-400 mt-0.5">{it.sub}</div>
            <div className="mt-2 rounded-md bg-ink-950 border border-ink-800 px-3 py-2">
              {it.out}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
