# LINE Webhook Signature Validator

A browser-based tool to verify that incoming LINE webhook requests really came
from the LINE Platform. Paste your raw request body, the `X-Line-Signature`
header, and your Channel Secret — see immediately whether the computed HMAC
matches.

→ Live: https://line.sekaihost.com *(coming soon)*

## Why this exists

Most LINE bot developers hit `InvalidSignatureError` at least once. Common culprits:

- Wrong credential (Channel Secret vs Channel Access Token)
- Body altered before signature check (Express `body-parser`, FastAPI auto-parse)
- Encoding mistakes (base64 vs hex)
- Proxy / CDN modifying the request body

This tool helps you diagnose the failure in seconds: paste exact values from
your server logs and see step-by-step where your signature diverges from the
expected one.

## Features

- Real-time HMAC-SHA256 verification, fully client-side
- Side-by-side computed vs received signature with char-by-char diff
- Step-by-step HMAC computation breakdown
- Pretty-printed payload with event-type pills
- Built-in diagnostic for the 3 most common failure modes
- Bilingual UI: English / ไทย

## Privacy

Your channel secret never leaves your browser. All computation uses
`window.crypto.subtle.importKey` and `crypto.subtle.sign('HMAC')` —
no network calls, no analytics on form values.

## Tech

Next.js 16 · React 19 · Tailwind v4 · TypeScript. Static export, deployed on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## License

MIT
