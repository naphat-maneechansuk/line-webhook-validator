function diff(a: string, b: string) {
  const max = Math.max(a.length, b.length);
  const out: { ch: string; same: boolean }[] = [];
  for (let i = 0; i < max; i++) {
    const ca = a[i] ?? "";
    const cb = b[i] ?? "";
    const same = ca === cb && ca !== "";
    out.push({ ch: ca || " ", same });
  }
  return out;
}

export function DiffLine({
  value,
  against,
  mono = true,
}: {
  value: string;
  against: string;
  mono?: boolean;
}) {
  const cells = diff(value, against);
  return (
    <div
      className={`whitespace-pre-wrap break-all ${
        mono ? "font-mono" : ""
      } text-[13px] leading-relaxed`}
    >
      {cells.map((c, i) => (
        <span key={i} className={c.same ? "diff-ok" : "diff-bad"}>
          {c.ch}
        </span>
      ))}
    </div>
  );
}
