import { Icon } from "./Icon";
import type { Strings } from "@/lib/strings";

export function DiagnosticBanner({ L }: { L: Strings }) {
  const items = [
    { t: L.diag1Title, b: L.diag1Body },
    { t: L.diag2Title, b: L.diag2Body },
    { t: L.diag3Title, b: L.diag3Body },
  ];
  return (
    <div className="mt-5 rounded-lg border border-amber-500/30 bg-amber-500/[0.04] p-4 slide-up">
      <div className="flex items-center gap-2 text-amber-300">
        <Icon.Alert width="16" height="16" />
        <div className="text-[13px] font-semibold">{L.diagTitle}</div>
      </div>
      <div className="text-[12px] text-amber-200/70 mt-0.5">{L.diagSub}</div>
      <ul className="mt-3 grid gap-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2.5">
            <span className="flex-none w-4 h-4 rounded-[4px] mt-0.5 bg-amber-500/15 border border-amber-500/40 text-amber-300 flex items-center justify-center">
              <Icon.Check width="11" height="11" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[12.5px] font-medium text-ink-100">{it.t}</div>
              <div className="text-[12px] text-ink-300 mt-0.5 leading-relaxed">
                {it.b}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
