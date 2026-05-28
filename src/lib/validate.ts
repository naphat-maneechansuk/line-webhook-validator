import { hmacSha256 } from "./hmac";

export interface ValidationResult {
  match: boolean;
  computed: string;
  received: string;
  hex: string;
  bodyBytes: number;
  digestBytes: number;
}

export async function validate(
  body: string,
  receivedSig: string,
  secret: string,
): Promise<ValidationResult> {
  const r = await hmacSha256(secret, body);
  return {
    match: r.base64 === receivedSig,
    computed: r.base64,
    received: receivedSig,
    hex: r.hex,
    bodyBytes: r.bodyBytes,
    digestBytes: r.digestBytes,
  };
}

type EventTone =
  | "slate"
  | "line"
  | "blue"
  | "violet"
  | "amber"
  | "rose"
  | "emerald"
  | "sky"
  | "fuchsia";

const EVENT_TONE_MAP: Record<string, EventTone> = {
  message: "sky",
  follow: "emerald",
  unfollow: "slate",
  postback: "violet",
  join: "amber",
  leave: "amber",
  memberJoined: "amber",
  memberLeft: "amber",
  beacon: "fuchsia",
  accountLink: "blue",
  things: "rose",
  videoPlayComplete: "sky",
};

export function eventTone(t: string): EventTone {
  return EVENT_TONE_MAP[t] ?? "slate";
}

export function countEventTypes(parsed: unknown): [string, number][] {
  if (!parsed || typeof parsed !== "object") return [];
  const events = (parsed as { events?: unknown }).events;
  if (!Array.isArray(events)) return [];
  const counts = new Map<string, number>();
  for (const ev of events) {
    if (ev && typeof ev === "object" && typeof (ev as { type?: unknown }).type === "string") {
      const t = (ev as { type: string }).type;
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  return [...counts.entries()];
}

export function tryParseJson(body: string): unknown | null {
  try {
    return JSON.parse(body);
  } catch {
    return null;
  }
}
