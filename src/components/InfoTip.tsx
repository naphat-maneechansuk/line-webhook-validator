"use client";

import { useEffect, useRef, useState } from "react";

export function InfoTip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span
      ref={ref}
      className="relative inline-flex group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="More info"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-ink-600 text-ink-300 hover:text-ink-100 hover:border-ink-400 transition font-mono text-[10px] leading-none"
      >
        i
      </button>
      {open && (
        <span className="absolute z-40 left-0 top-[120%] w-[300px] rounded-lg border border-ink-700 bg-ink-850 shadow-xl p-3 text-[11.5px] leading-relaxed text-ink-200 font-normal normal-case tracking-normal slide-up">
          <span className="absolute -top-1.5 left-2 w-2.5 h-2.5 rotate-45 border-l border-t border-ink-700 bg-ink-850"></span>
          {text}
        </span>
      )}
    </span>
  );
}
