"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Validator } from "@/components/Validator";
import { EmptyResultPanel } from "@/components/ResultPanel";
import { TrustBanner } from "@/components/TrustBanner";
import { FooterFunnel } from "@/components/FooterFunnel";
import { STRINGS, type Lang } from "@/lib/strings";
import { SAMPLE_BODY, SAMPLE_SECRET } from "@/lib/sample";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [body, setBody] = useState(SAMPLE_BODY);
  const [sig, setSig] = useState("");
  const [secret, setSecret] = useState(SAMPLE_SECRET);
  const [showSecret, setShowSecret] = useState(false);

  const L = STRINGS[lang];

  const useSample = () => {
    setBody(SAMPLE_BODY);
    setSecret(SAMPLE_SECRET);
    setSig("");
  };
  const breakIt = () => {
    if (!sig) return;
    const arr = sig.split("");
    const i = Math.floor(arr.length / 2);
    arr[i] = arr[i] === "A" ? "B" : "A";
    setSig(arr.join(""));
  };
  const randomSecret = () => {
    const hex = "0123456789abcdef";
    let s = "";
    for (let i = 0; i < 32; i++) s += hex[Math.floor(Math.random() * 16)];
    setSecret(s);
  };

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
            useSample={useSample}
            breakIt={breakIt}
            randomSecret={randomSecret}
            canValidate={!!sig && !!secret}
          />
        </section>
        <section className="lg:col-span-2">
          <EmptyResultPanel L={L} />
        </section>
      </main>

      <TrustBanner L={L} />
      <FooterFunnel L={L} />
    </div>
  );
}
