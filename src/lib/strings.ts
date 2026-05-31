export type Lang = "en" | "th";

export const STRINGS = {
  en: {
    title: "LINE Webhook Signature Validator",
    tag1: "Validate that a LINE webhook request really came from LINE.",
    tag2: "Paste your payload, signature, and secret — everything stays in your browser.",
    inputsTitle: "Inputs",
    inputsSub: "Paste from your server logs. Nothing is sent anywhere.",
    body: "Request body",
    bodyHint:
      "The raw JSON LINE POSTed to your webhook — paste the exact bytes from your request log, not a re-stringified copy.",
    bodyTip:
      "LINE computes the signature over the byte-for-byte body before any framework deserializes it. If your logger pretty-prints the JSON, strips whitespace, or your HTTP client adds a trailing \\n, you'll see a mismatch even when the secret is correct. Read req.rawBody in Express, request.body() in FastAPI, or context.Request.Body in Go — never JSON.stringify(parsed).",
    sig: "X-Line-Signature header",
    sigHint:
      'The Base64-encoded HMAC LINE sent in the request headers — usually 44 characters ending in "=".',
    sigTip:
      "Find it in req.headers['x-line-signature'] (Node) or request.headers.get(\"X-Line-Signature\") (Python). Header names are case-insensitive but the value is case-sensitive. Don't URL-decode it, don't hex-decode it — paste it exactly as it arrives.",
    secret: "Channel Secret",
    secretHint:
      "The 32-character hex string under your Messaging API channel's Basic settings — NOT the access token.",
    secretTip:
      'In LINE Developers Console: pick your Provider → your Messaging API channel → "Basic settings" tab → "Channel secret". Looks like 0123456789abcdef0123456789abcdef. The Channel Access Token (a much longer string under the Messaging API tab) is used for sending replies, not for verifying signatures. Confusing the two is the #2 cause of validation failures.',
    validate: "Validate",
    revalidate: "Re-validate",
    showSecret: "Show",
    hideSecret: "Hide",
    useSample: "Use sample",
    breakIt: "Break signature",
    resetSecret: "Random secret",
    matches: "Signature MATCHES",
    mismatch: "Signature mismatch",
    matchSub: "This request was signed with the channel secret you provided.",
    mismatchSub: "The signature does not match. Inspect the values below.",
    computed: "Computed",
    received: "Received",
    showSteps: "Show HMAC computation steps",
    hideSteps: "Hide HMAC computation steps",
    showPayload: "Parsed payload",
    hidePayload: "Hide parsed payload",
    diagTitle: "Why did validation fail?",
    diagSub: "The three most common causes of a signature mismatch:",
    diag1Title: "Trailing newline in the body",
    diag1Body:
      "Some HTTP clients append \\n. The signature is computed over the exact bytes — even one extra byte invalidates it.",
    diag2Title: "Wrong secret format",
    diag2Body:
      "Use the Channel Secret (32 hex chars), not the Channel Access Token. They look similar but are not the same value.",
    diag3Title: "Base64 vs hex confusion",
    diag3Body:
      "LINE sends the signature base64-encoded. If you're comparing hex, you're comparing the wrong representation.",
    trust:
      "Your channel secret never leaves your browser. Computation runs through window.crypto.subtle.",
    viewSource: "View source",
    footStruggle: "Struggling with InvalidSignatureError?",
    footStruggleCta: "7 common causes →",
    footStuck: "Stuck on a LINE OA project?",
    footStuckCta: "Free 30-min consult →",
    step1: "UTF-8 encode body",
    step1Sub: "Convert the raw request body to a byte array.",
    step2: "HMAC-SHA256",
    step2Sub: "Hash the body, keyed by the channel secret.",
    step3: "Base64-encode digest",
    step3Sub: "The result is what LINE sends in the X-Line-Signature header.",
    bytes: "bytes",
    eventTypes: "Event types",
  },
  th: {
    title: "ตัวตรวจสอบลายเซ็น LINE Webhook",
    tag1: "ตรวจสอบว่าคำขอ webhook นั้นมาจาก LINE จริง",
    tag2: "วาง payload, signature และ channel secret — ทุกอย่างประมวลผลในเบราว์เซอร์ของคุณเท่านั้น",
    inputsTitle: "อินพุต",
    inputsSub: "วางจาก server log ของคุณ ข้อมูลไม่ถูกส่งออกไปไหน",
    body: "Request body",
    bodyHint:
      "JSON ดิบที่ LINE POST มาที่ webhook ของคุณ — วางไบต์เป๊ะๆ จาก log ของ request ห้ามใช้ตัวที่ผ่าน JSON.stringify ใหม่",
    bodyTip:
      "LINE คำนวณลายเซ็นจากไบต์ของ body ก่อนที่ framework จะ deserialize ดังนั้นถ้า logger ของคุณ pretty-print, ตัดช่องว่าง หรือ HTTP client เติม \\n ท้าย body จะเจอ mismatch แม้ secret จะถูก ให้อ่านจาก req.rawBody (Express), request.body() (FastAPI), หรือ context.Request.Body (Go) — อย่าใช้ JSON.stringify(parsed) เด็ดขาด",
    sig: "X-Line-Signature header",
    sigHint:
      'ค่า HMAC ที่เข้ารหัส Base64 ซึ่ง LINE ส่งมาใน header ปกติยาว 44 ตัวอักษรและลงท้ายด้วย "="',
    sigTip:
      "หาได้จาก req.headers['x-line-signature'] (Node) หรือ request.headers.get(\"X-Line-Signature\") (Python) ชื่อ header ไม่สนตัวพิมพ์แต่ค่าด้านในสนตัวพิมพ์ใหญ่-เล็ก อย่า URL-decode อย่า hex-decode ก่อน วางตามที่ได้รับมาเป๊ะๆ",
    secret: "Channel Secret",
    secretHint:
      "string hex 32 ตัวอักษร อยู่ใน Basic settings ของ Messaging API channel — ไม่ใช่ access token",
    secretTip:
      'ใน LINE Developers Console: เลือก Provider → Messaging API channel ของคุณ → แท็บ "Basic settings" → "Channel secret" หน้าตาจะเป็น 0123456789abcdef0123456789abcdef ส่วน Channel Access Token (string ยาวกว่ามาก อยู่ในแท็บ Messaging API) ใช้สำหรับส่งข้อความตอบ ไม่ใช่ใช้ verify ลายเซ็น สับสนสองตัวนี้คือสาเหตุอันดับ 2 ที่ทำให้ validation fail',
    validate: "ตรวจสอบ",
    revalidate: "ตรวจสอบอีกครั้ง",
    showSecret: "แสดง",
    hideSecret: "ซ่อน",
    useSample: "ใช้ตัวอย่าง",
    breakIt: "ทำให้ผิด",
    resetSecret: "สุ่ม secret",
    matches: "ลายเซ็นถูกต้อง",
    mismatch: "ลายเซ็นไม่ตรง",
    matchSub: "คำขอนี้ถูกเซ็นด้วย channel secret ที่คุณระบุ",
    mismatchSub: "ลายเซ็นไม่ตรงกัน ตรวจสอบค่าต่างๆ ด้านล่าง",
    computed: "ค่าที่คำนวณ",
    received: "ค่าที่ได้รับ",
    showSteps: "แสดงขั้นตอนการคำนวณ HMAC",
    hideSteps: "ซ่อนขั้นตอนการคำนวณ HMAC",
    showPayload: "Payload ที่แปลงแล้ว",
    hidePayload: "ซ่อน payload",
    diagTitle: "ทำไมการตรวจสอบจึงล้มเหลว?",
    diagSub: "สามสาเหตุที่พบบ่อยที่สุดของ signature mismatch:",
    diag1Title: "มี newline ท้าย body",
    diag1Body:
      "HTTP client บางตัวเติม \\n ลงท้าย ลายเซ็นคำนวณจากไบต์ที่ตรงเป๊ะ — เกินไป 1 ไบต์ก็ใช้ไม่ได้",
    diag2Title: "ใช้ secret ผิดประเภท",
    diag2Body:
      "ใช้ Channel Secret (32 hex chars) ไม่ใช่ Channel Access Token ทั้งคู่หน้าตาคล้ายกันแต่ไม่ใช่ค่าเดียวกัน",
    diag3Title: "สับสน Base64 กับ hex",
    diag3Body:
      "LINE ส่ง signature ที่เข้ารหัส base64 ถ้าคุณเทียบกับ hex อยู่ แสดงว่ากำลังเทียบคนละรูปแบบ",
    trust:
      "Channel secret ของคุณไม่เคยออกจากเบราว์เซอร์ คำนวณผ่าน window.crypto.subtle",
    viewSource: "ดู source",
    footStruggle: "เจอ InvalidSignatureError แก้ไม่ออก?",
    footStruggleCta: "7 สาเหตุยอดฮิต →",
    footStuck: "ติดปัญหากับโปรเจกต์ LINE OA?",
    footStuckCta: "ปรึกษาฟรี 30 นาที →",
    step1: "เข้ารหัส body เป็น UTF-8",
    step1Sub: "แปลง raw body เป็น byte array",
    step2: "HMAC-SHA256",
    step2Sub: "แฮช body โดยใช้ channel secret เป็น key",
    step3: "เข้ารหัส digest เป็น Base64",
    step3Sub: "ผลลัพธ์คือสิ่งที่ LINE ส่งใน X-Line-Signature header",
    bytes: "ไบต์",
    eventTypes: "ประเภท event",
  },
};

export type Strings = (typeof STRINGS)["en"];
