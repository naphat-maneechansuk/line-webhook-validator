import { Icon } from "./Icon";
import { DiffLine } from "./DiffLine";
import { PrettyJson } from "./PrettyJson";
import { Collapse } from "./Collapse";
import { Steps } from "./Steps";
import { DiagnosticBanner } from "./DiagnosticBanner";
import { Pill } from "./atoms";
import { eventTone, type ValidationResult } from "@/lib/validate";
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

export function ResultPanel({
  L,
  result,
  parsed,
  eventTypeCounts,
  body,
}: {
  L: Strings;
  result: ValidationResult;
  parsed: unknown | null;
  eventTypeCounts: [string, number][];
  body: string;
}) {
  const match = result.match;
  return (
    <div className="flex flex-col gap-4 slide-up">
      <div
        className={`rounded-xl border p-6 md:p-7 ${
          match
            ? "border-line/40 bg-line-soft"
            : "border-rose-500/40 bg-rose-500/5"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`flex-none w-10 h-10 rounded-full flex items-center justify-center ${
              match
                ? "bg-line text-ink-950 pulse-ring"
                : "bg-rose-500 text-white"
            }`}
          >
            {match ? <Icon.Check /> : <Icon.X />}
          </div>
          <div className="flex-1 min-w-0">
            <div
              className={`text-[18px] font-semibold tracking-tight ${
                match ? "text-line" : "text-rose-300"
              }`}
            >
              {match ? L.matches : L.mismatch}
            </div>
            <div className="text-[12.5px] text-ink-300 mt-0.5">
              {match ? L.matchSub : L.mismatchSub}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-ink-750 bg-ink-950/80 overflow-hidden">
          <div className="grid grid-cols-[100px_1fr] items-stretch">
            <div className="px-3 py-2.5 text-[10.5px] font-mono uppercase tracking-wider text-ink-400 bg-ink-850/80 border-r border-ink-750 flex items-center">
              {L.computed}
            </div>
            <div className="px-3 py-2.5 min-w-0">
              <DiffLine value={result.computed} against={result.received} />
            </div>
          </div>
          <div className="grid grid-cols-[100px_1fr] items-stretch border-t border-ink-750">
            <div className="px-3 py-2.5 text-[10.5px] font-mono uppercase tracking-wider text-ink-400 bg-ink-850/80 border-r border-ink-750 flex items-center">
              {L.received}
            </div>
            <div className="px-3 py-2.5 min-w-0">
              <DiffLine value={result.received} against={result.computed} />
            </div>
          </div>
        </div>

        {!match && <DiagnosticBanner L={L} />}
      </div>

      <Collapse title={L.showSteps} defaultOpen={!match}>
        <Steps L={L} result={result} body={body} />
      </Collapse>

      <Collapse
        title={L.showPayload}
        defaultOpen={true}
        right={
          <div className="flex items-center gap-1.5">
            {eventTypeCounts.map(([type, count]) => (
              <Pill key={type} tone={eventTone(type)}>
                {count}× {type}
              </Pill>
            ))}
          </div>
        }
      >
        <div className="bg-ink-950/60 p-4 max-h-[420px] overflow-auto">
          {parsed ? (
            <PrettyJson
              data={parsed as Parameters<typeof PrettyJson>[0]["data"]}
              highlight={["replyToken", "userId", "text"]}
            />
          ) : (
            <div className="text-rose-300 text-sm font-mono">
              Cannot parse JSON
            </div>
          )}
        </div>
      </Collapse>
    </div>
  );
}
