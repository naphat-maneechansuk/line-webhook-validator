import { Pill } from "./atoms";
import type { Strings } from "@/lib/strings";

function FunnelCard({
  label,
  title,
  sub,
  cta,
  tone = "line",
}: {
  label: string;
  title: string;
  sub: string;
  cta: string;
  tone?: "line" | "amber";
}) {
  const ring =
    tone === "amber"
      ? "group-hover:border-amber-500/40"
      : "group-hover:border-line/40";
  return (
    <a
      href="#"
      className="group block rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition hover:bg-ink-900/70 hover:-translate-y-[1px]"
    >
      <div
        className={`transition border ${ring} rounded-xl -m-5 p-5 border-transparent`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Pill tone={tone}>{label}</Pill>
        </div>
        <div className="text-[16px] font-semibold text-ink-100 tracking-tight">
          {title}
        </div>
        <div className="text-[13px] text-ink-300 mt-1.5 leading-relaxed">
          {sub}
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-line">
          {cta}
        </div>
      </div>
    </a>
  );
}

function Logo() {
  return (
    <div className="w-7 h-7 rounded-md flex items-center justify-center font-mono text-[12px] font-bold text-ink-950 bg-line">
      LN
    </div>
  );
}

export function FooterFunnel({ L }: { L: Strings }) {
  return (
    <footer className="border-t border-ink-800 mt-4">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-10">
        <div className="grid md:grid-cols-1 gap-4">
          <FunnelCard
            label="docs"
            title={L.footStruggle}
            cta={L.footStruggleCta}
            sub="Trailing newlines, base64-vs-hex, wrong access tokens — the usual suspects, with copy-paste fixes."
            tone="amber"
          />
        </div>
        <div className="mt-8 pt-6 border-t border-ink-800 flex flex-wrap items-center justify-between gap-3 text-[12px] text-ink-400">
          <div className="flex items-center gap-3">
            <Logo />
            <span>MIT licensed</span>
            <span>·</span>
            <a
              href="https://github.com/naphat-maneechansuk/line-webhook-validator/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink-200"
            >
              Report an issue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
