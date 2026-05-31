import { Fragment, type ReactNode } from "react";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [k: string]: JsonValue };

export function PrettyJson({
  data,
  highlight = [],
}: {
  data: JsonValue;
  highlight?: string[];
}) {
  const render = (v: JsonValue, indent = 0, key: string | null = null): ReactNode => {
    const pad = " ".repeat(indent);
    const padIn = " ".repeat(indent + 2);
    if (v === null) return <span className="j-null">null</span>;
    if (typeof v === "boolean") return <span className="j-bool">{String(v)}</span>;
    if (typeof v === "number") return <span className="j-num">{v}</span>;
    if (typeof v === "string") {
      const isHL = key !== null && highlight.includes(key);
      return <span className={`j-str ${isHL ? "j-hl" : ""}`}>&quot;{v}&quot;</span>;
    }
    if (Array.isArray(v)) {
      if (v.length === 0) return <span className="j-punct">[]</span>;
      return (
        <>
          <span className="j-punct">[</span>
          {"\n"}
          {v.map((item, i) => (
            <Fragment key={i}>
              {padIn}
              {render(item, indent + 2)}
              {i < v.length - 1 && <span className="j-punct">,</span>}
              {"\n"}
            </Fragment>
          ))}
          {pad}
          <span className="j-punct">]</span>
        </>
      );
    }
    if (typeof v === "object") {
      const keys = Object.keys(v);
      if (keys.length === 0) return <span className="j-punct">{"{}"}</span>;
      return (
        <>
          <span className="j-punct">{"{"}</span>
          {"\n"}
          {keys.map((k, i) => (
            <Fragment key={k}>
              {padIn}
              <span className={`j-key ${highlight.includes(k) ? "j-hl" : ""}`}>
                &quot;{k}&quot;
              </span>
              <span className="j-punct">: </span>
              {render(v[k], indent + 2, k)}
              {i < keys.length - 1 && <span className="j-punct">,</span>}
              {"\n"}
            </Fragment>
          ))}
          {pad}
          <span className="j-punct">{"}"}</span>
        </>
      );
    }
    return null;
  };
  return (
    <pre className="font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap break-all m-0">
      {render(data)}
    </pre>
  );
}
