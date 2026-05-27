import { Icon } from "./Icon";
import type { Strings } from "@/lib/strings";

export function TrustBanner({ L }: { L: Strings }) {
  return (
    <section className="max-w-[1180px] mx-auto px-6 md:px-8 mt-2 mb-10">
      <div className="rounded-xl border border-ink-800 bg-ink-900/40 px-4 py-3 flex flex-wrap items-center gap-3 justify-between text-[12.5px]">
        <div className="flex items-center gap-2.5 text-ink-300">
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-md text-line"
            style={{ background: "rgba(6,199,85,0.10)" }}
          >
            <Icon.Lock />
          </span>
          <span>{L.trust}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-ink-200 hover:text-ink-100 font-medium"
        >
          <Icon.Github /> {L.viewSource} <Icon.Arrow />
        </a>
      </div>
    </section>
  );
}
