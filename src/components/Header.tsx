import { Icon } from "./Icon";
import { Pill } from "./atoms";
import type { Lang, Strings } from "@/lib/strings";

function Logo() {
  return (
    <div
      className="w-7 h-7 rounded-md flex items-center justify-center font-mono text-[12px] font-bold text-ink-950 bg-line"
    >
      LN
    </div>
  );
}

export function Header({
  L,
  lang,
  setLang,
}: {
  L: Strings;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-ink-950/80 border-b border-ink-800">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="text-[14px] font-semibold tracking-tight text-ink-100">
            {L.title}
          </div>
          <Pill tone="slate" className="hidden md:inline-flex !text-[10px]">
            dev tools
          </Pill>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-ink-850 border border-ink-700 rounded-md p-0.5 text-[11px] font-mono">
            {(["en", "th"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setLang(opt)}
                className={`px-2.5 h-6 rounded-[5px] uppercase tracking-wider transition ${
                  lang === opt
                    ? "bg-ink-700 text-ink-100"
                    : "text-ink-300 hover:text-ink-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/naphat-maneechansuk/line-webhook-validator"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center justify-center w-8 h-8 rounded-md border border-ink-700 bg-ink-850 text-ink-200 hover:text-ink-100 hover:border-ink-600 transition"
            aria-label="GitHub"
          >
            <Icon.Github />
          </a>
        </div>
      </div>
    </header>
  );
}
