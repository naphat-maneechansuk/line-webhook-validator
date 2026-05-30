import { useMemo } from "react";
import { Icon } from "./Icon";
import { FieldLabel, Textarea, TextInput } from "./atoms";
import type { Strings } from "@/lib/strings";

export function Validator({
  L,
  body,
  setBody,
  sig,
  setSig,
  secret,
  setSecret,
  showSecret,
  setShowSecret,
  useSample,
  breakIt,
  randomSecret,
  onValidate,
  canValidate,
}: {
  L: Strings;
  body: string;
  setBody: (v: string) => void;
  sig: string;
  setSig: (v: string) => void;
  secret: string;
  setSecret: (v: string) => void;
  showSecret: boolean;
  setShowSecret: (v: boolean) => void;
  useSample: () => void;
  breakIt: () => void;
  randomSecret: () => void;
  onValidate?: () => void;
  canValidate: boolean;
}) {
  const bodyBytes = useMemo(
    () => new TextEncoder().encode(body).length,
    [body],
  );

  return (
    <div className="rounded-xl border border-ink-750 bg-ink-900/80 p-6 md:p-7">
      <div className="flex items-start justify-between mb-5">
        <div>
          <div className="text-[15px] font-semibold text-ink-100">
            {L.inputsTitle}
          </div>
          <div className="text-[12.5px] text-ink-400 mt-0.5">{L.inputsSub}</div>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={useSample}
            className="text-[11.5px] px-2.5 h-7 rounded-md bg-ink-800 hover:bg-ink-750 text-ink-200 border border-ink-700"
          >
            {L.useSample}
          </button>
          <button
            type="button"
            onClick={breakIt}
            className="text-[11.5px] px-2.5 h-7 rounded-md bg-ink-800 hover:bg-ink-750 text-ink-200 border border-ink-700"
          >
            {L.breakIt}
          </button>
          <button
            type="button"
            onClick={randomSecret}
            className="text-[11.5px] px-2.5 h-7 rounded-md bg-ink-800 hover:bg-ink-750 text-ink-200 border border-ink-700 inline-flex items-center gap-1.5"
          >
            <Icon.Shuffle />
            {L.resetSecret}
          </button>
        </div>
      </div>

      <div>
        <FieldLabel
          hint={L.bodyHint}
          tip={L.bodyTip}
          right={
            <span className="font-mono">
              {bodyBytes} {L.bytes}
            </span>
          }
        >
          {L.body}
        </FieldLabel>
        <Textarea value={body} onChange={setBody} rows={11} />
      </div>

      <div className="mt-5">
        <FieldLabel
          hint={L.sigHint}
          tip={L.sigTip}
          right={<span className="font-mono">{sig.length} chars</span>}
        >
          {L.sig}
        </FieldLabel>
        <TextInput
          value={sig}
          onChange={setSig}
          placeholder="aGFzaC1nb2VzLWhlcmU="
        />
      </div>

      <div className="mt-5">
        <FieldLabel
          hint={L.secretHint}
          tip={L.secretTip}
          right={<span className="font-mono">{secret.length} chars</span>}
        >
          {L.secret}
        </FieldLabel>
        <TextInput
          value={secret}
          onChange={setSecret}
          type={showSecret ? "text" : "password"}
          placeholder="••••••••••••••••••••••••••••••••"
          rightSlot={
            <button
              type="button"
              onClick={() => setShowSecret(!showSecret)}
              className="h-7 px-2 rounded-md bg-ink-800 hover:bg-ink-750 text-ink-200 border border-ink-700 text-[11px] font-medium inline-flex items-center gap-1"
            >
              {showSecret ? (
                <>
                  <Icon.EyeOff /> {L.hideSecret}
                </>
              ) : (
                <>
                  <Icon.Eye /> {L.showSecret}
                </>
              )}
            </button>
          }
        />
        <div className="mt-2 flex items-start gap-2 rounded-md border border-line/30 bg-line-soft px-2.5 py-2 text-[11.5px] leading-relaxed">
          <span
            className="flex-none inline-flex items-center justify-center w-4 h-4 mt-[1px] rounded-full"
            style={{ background: "rgba(6,199,85,0.18)", color: "#06C755" }}
          >
            <Icon.Lock width="10" height="10" />
          </span>
          <span className="text-ink-200">
            <span className="font-semibold text-line">Client-side only.</span>{" "}
            <span className="text-ink-300">
              Your channel secret is processed entirely in your browser via{" "}
            </span>
            <code className="font-mono text-[11px] text-ink-100 bg-ink-900/70 border border-ink-750 rounded px-1 py-[1px]">
              window.crypto.subtle
            </code>
            <span className="text-ink-300">
              . Nothing is ever sent to any server.
            </span>
          </span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={onValidate}
          disabled={!canValidate}
          className="inline-flex items-center gap-2 h-11 px-5 rounded-lg font-semibold text-ink-950 bg-line hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <Icon.Play />
          <span>{L.validate}</span>
        </button>
        <div className="text-[12px] text-ink-400 font-mono">
          <span className="text-ink-500">$</span> hmac-sha256(secret, body) |
          base64
        </div>
      </div>
    </div>
  );
}
