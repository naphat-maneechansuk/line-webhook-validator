export interface HmacResult {
  hex: string;
  base64: string;
  bodyBytes: number;
  keyBytes: number;
  digestBytes: number;
}

export async function hmacSha256(
  secret: string,
  body: string,
): Promise<HmacResult> {
  const enc = new TextEncoder();
  const keyData = enc.encode(secret);
  const bodyData = enc.encode(body);
  const key = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sigBuf = await crypto.subtle.sign("HMAC", key, bodyData);
  const bytes = new Uint8Array(sigBuf);
  const hex = [...bytes]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  let bin = "";
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  const base64 = btoa(bin);
  return {
    hex,
    base64,
    bodyBytes: bodyData.length,
    keyBytes: keyData.length,
    digestBytes: bytes.length,
  };
}
