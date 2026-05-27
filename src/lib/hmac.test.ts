import { createHmac } from "node:crypto";
import { describe, expect, it } from "vitest";
import { hmacSha256 } from "./hmac";

function nodeReference(secret: string, body: string) {
  const h = createHmac("sha256", secret);
  h.update(body, "utf8");
  const digest = h.digest();
  return {
    hex: digest.toString("hex"),
    base64: digest.toString("base64"),
  };
}

describe("hmacSha256", () => {
  it("matches Node's crypto.createHmac for a LINE-shaped payload", async () => {
    const secret = "abcdef0123456789abcdef0123456789";
    const body = JSON.stringify({
      destination: "Uxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      events: [
        {
          type: "message",
          replyToken: "0f3779fba3b349968c5d07db31eabf65",
          message: { type: "text", id: "1", text: "Hello" },
        },
      ],
    });
    const ours = await hmacSha256(secret, body);
    const ref = nodeReference(secret, body);
    expect(ours.hex).toBe(ref.hex);
    expect(ours.base64).toBe(ref.base64);
    expect(ours.digestBytes).toBe(32);
    expect(ours.keyBytes).toBe(secret.length);
  });

  it("handles empty body with a non-empty secret", async () => {
    const r = await hmacSha256("secret", "");
    expect(r.hex).toHaveLength(64);
    expect(r.base64).toMatch(/^[A-Za-z0-9+/]+=*$/);
    expect(r.bodyBytes).toBe(0);
  });

  it("rejects an empty secret (WebCrypto disallows zero-length HMAC keys)", async () => {
    await expect(hmacSha256("", "{}")).rejects.toThrow();
  });

  it("produces a different signature for a different secret", async () => {
    const body = '{"events":[]}';
    const a = await hmacSha256("secret-a", body);
    const b = await hmacSha256("secret-b", body);
    expect(a.base64).not.toBe(b.base64);
  });

  it("is deterministic for the same input", async () => {
    const secret = "deterministic-secret";
    const body = '{"k":"v"}';
    const a = await hmacSha256(secret, body);
    const b = await hmacSha256(secret, body);
    expect(a.base64).toBe(b.base64);
    expect(a.hex).toBe(b.hex);
  });

  it("encodes UTF-8 body bytes correctly (Thai characters)", async () => {
    const secret = "key";
    const body = "สวัสดี LINE";
    const ours = await hmacSha256(secret, body);
    const ref = nodeReference(secret, body);
    expect(ours.base64).toBe(ref.base64);
    expect(ours.bodyBytes).toBe(new TextEncoder().encode(body).length);
  });
});
