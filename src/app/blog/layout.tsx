import Link from "next/link";
import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full">
      <header className="border-b border-ink-800">
        <div className="max-w-[760px] mx-auto px-6 md:px-8 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-ink-300 hover:text-ink-100 transition"
          >
            <span aria-hidden>←</span>
            <span>Back to validator</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2"
            aria-label="LINE Webhook Validator"
          >
            <span className="w-6 h-6 rounded-md flex items-center justify-center font-mono text-[10px] font-bold text-ink-950 bg-line">
              LN
            </span>
            <span className="text-[13px] font-semibold text-ink-100 hidden sm:inline">
              LINE Webhook Validator
            </span>
          </Link>
        </div>
      </header>
      <article className="prose-blog max-w-[760px] mx-auto px-6 md:px-8 py-10 md:py-14 text-ink-200">
        {children}
      </article>
    </div>
  );
}
