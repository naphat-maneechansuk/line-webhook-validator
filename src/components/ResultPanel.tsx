import { Icon } from "./Icon";
import type { Strings } from "@/lib/strings";

export function EmptyResultPanel({ L }: { L: Strings }) {
  return (
    <div className="rounded-xl border border-dashed border-ink-700 bg-ink-900/40 p-6 md:p-7 h-full min-h-[400px] flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-full bg-ink-800 border border-ink-700 flex items-center justify-center text-ink-400 mb-4">
        <Icon.Play />
      </div>
      <div className="text-ink-200 font-medium">
        Click {L.validate}{" "}
        <span className="font-mono text-ink-400">▶</span>
      </div>
      <div className="text-[12.5px] text-ink-400 mt-1 max-w-[260px]">
        We&apos;ll compute HMAC-SHA256 over the body, base64-encode it, and
        compare against the header value.
      </div>
      <div className="mt-6 flex flex-wrap gap-1.5 justify-center text-[10.5px] font-mono text-ink-400">
        <span className="px-2 py-1 rounded-md border border-ink-750 bg-ink-900/60">
          crypto.subtle.importKey
        </span>
        <span className="px-2 py-1 rounded-md border border-ink-750 bg-ink-900/60">
          → HMAC
        </span>
        <span className="px-2 py-1 rounded-md border border-ink-750 bg-ink-900/60">
          → base64
        </span>
      </div>
    </div>
  );
}
