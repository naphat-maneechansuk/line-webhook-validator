"use client";

import { useState, type ReactNode } from "react";
import { Icon } from "./Icon";

export function Collapse({
  title,
  defaultOpen = false,
  children,
  right,
}: {
  title: ReactNode;
  defaultOpen?: boolean;
  children: ReactNode;
  right?: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border border-ink-750 hover:border-ink-700 bg-ink-900/60 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 h-11 text-left hover:bg-ink-850/60 transition"
      >
        <div className="flex items-center gap-2.5">
          <span
            className={`inline-flex items-center justify-center w-4 h-4 text-ink-300 transition-transform ${
              open ? "rotate-90" : ""
            }`}
          >
            <Icon.ChevronRight />
          </span>
          <span className="text-[13px] font-medium text-ink-100">{title}</span>
        </div>
        {right}
      </button>
      {open && <div className="border-t border-ink-750">{children}</div>}
    </div>
  );
}
