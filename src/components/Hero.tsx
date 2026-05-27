import { Icon } from "./Icon";
import { Pill } from "./atoms";
import type { Strings } from "@/lib/strings";

export function Hero({ L }: { L: Strings }) {
  return (
    <section className="max-w-[1180px] mx-auto px-6 md:px-8 pt-12 pb-8">
      <div className="flex items-center gap-2 mb-4">
        <Pill tone="line">v1.2</Pill>
        <Pill tone="slate">
          <Icon.Lock /> client-side only
        </Pill>
        <Pill tone="slate" className="font-mono">
          HMAC-SHA256
        </Pill>
      </div>
      <h1 className="text-[34px] md:text-[42px] leading-[1.08] font-semibold tracking-[-0.02em] text-ink-100 max-w-[860px]">
        {L.tag1}
      </h1>
      <p className="mt-4 text-[16px] md:text-[17px] text-ink-300 max-w-[760px] leading-relaxed">
        {L.tag2}
      </p>
    </section>
  );
}
