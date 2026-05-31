"use client";

import { useCallback, useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Validator } from "@/components/Validator";
import { EmptyResultPanel, ResultPanel } from "@/components/ResultPanel";
import { TrustBanner } from "@/components/TrustBanner";
import { FooterFunnel } from "@/components/FooterFunnel";
import { STRINGS, type Lang } from "@/lib/strings";
import { SAMPLE_BODY, SAMPLE_SECRET } from "@/lib/sample";
import { hmacSha256 } from "@/lib/hmac";
import {
  countEventTypes,
  tryParseJson,
  validate as runValidate,
  type ValidationResult,
} from "@/lib/validate";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [body, setBody] = useState(SAMPLE_BODY);
  const [sig, setSig] = useState("");
  const [secret, setSecret] = useState(SAMPLE_SECRET);
  const [showSecret, setShowSecret] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);

  const L = STRINGS[lang];

  const useSample = async () => {
    setBody(SAMPLE_BODY);
    setSecret(SAMPLE_SECRET);
    const { base64 } = await hmacSha256(SAMPLE_SECRET, SAMPLE_BODY);
    setSig(base64);
    setResult(null);
  };
  const breakIt = () => {
    if (!sig) return;
    const arr = sig.split("");
    const i = Math.floor(arr.length / 2);
    arr[i] = arr[i] === "A" ? "B" : "A";
    setSig(arr.join(""));
    setResult(null);
  };
  const randomSecret = () => {
    const hex = "0123456789abcdef";
    let s = "";
    for (let i = 0; i < 32; i++) s += hex[Math.floor(Math.random() * 16)];
    setSecret(s);
    setSig("");
    setResult(null);
  };

  const onValidate = useCallback(async () => {
    if (!sig || !secret) return;
    const r = await runValidate(body, sig, secret);
    setResult(r);
  }, [body, sig, secret]);

  const parsed = useMemo(() => tryParseJson(body), [body]);
  const eventTypeCounts = useMemo(() => countEventTypes(parsed), [parsed]);

  return (
    <div className="min-h-screen w-full">
      <Header L={L} lang={lang} setLang={setLang} />
      <Hero L={L} />

      <main className="max-w-[1180px] mx-auto px-6 md:px-8 pb-10 grid grid-cols-1 lg:grid-cols-5 gap-7">
        <section className="lg:col-span-3">
          <Validator
            L={L}
            body={body}
            setBody={setBody}
            sig={sig}
            setSig={setSig}
            secret={secret}
            setSecret={setSecret}
            showSecret={showSecret}
            setShowSecret={setShowSecret}
            useSample={() => {
              void useSample();
            }}
            breakIt={breakIt}
            randomSecret={randomSecret}
            onValidate={onValidate}
            canValidate={!!sig && !!secret}
            canBreak={!!sig}
            hasResult={!!result}
          />
        </section>
        <section className="lg:col-span-2">
          {result ? (
            <ResultPanel
              L={L}
              result={result}
              parsed={parsed}
              eventTypeCounts={eventTypeCounts}
              body={body}
            />
          ) : (
            <EmptyResultPanel L={L} />
          )}
        </section>
      </main>

      <TrustBanner L={L} />
      <FooterFunnel L={L} />
    </div>
  );
}
