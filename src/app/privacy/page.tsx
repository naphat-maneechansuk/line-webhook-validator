import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice — LINE Webhook Signature Validator",
  description:
    "What this tool does with your data: form inputs stay in your browser; only Cloudflare Web Analytics processes basic page-view data.",
};

export default function PrivacyPage() {
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
        <h1>Privacy Notice</h1>
        <p>
          <em>Last updated: June 2026</em>
        </p>

        <h2>What this tool does with your data</h2>
        <p>
          <strong>Form inputs (Channel Secret, webhook body, signature):</strong>{" "}
          All computation runs entirely in your browser using{" "}
          <code>window.crypto.subtle</code>. None of these values are
          transmitted to any server, logged, or stored anywhere outside your
          device.
        </p>
        <p>
          <strong>Analytics:</strong> This site uses Cloudflare Web Analytics to
          count page views and measure page-load performance. Cloudflare may
          process your IP address and browser information on their servers. No
          cookies or persistent fingerprinting are used. See{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudflare&apos;s Privacy Policy
          </a>
          .
        </p>
        <p>
          <strong>Data controller:</strong> Naphat Maneechansuk (Thailand).
          Contact: naphat12345670@gmail.com
        </p>
        <p>
          <strong>Your rights under the PDPA:</strong> You have the right to
          access, correct, delete, or object to the processing of your personal
          data. Contact us at the email above.
        </p>
        <p>
          This tool is not affiliated with, endorsed by, or associated with LY
          Corporation. &ldquo;LINE&rdquo; is a trademark of LY Corporation.
        </p>

        <hr />

        <h1>นโยบายความเป็นส่วนตัว</h1>
        <p>
          <em>อัปเดตล่าสุด: มิถุนายน 2569</em>
        </p>

        <h2>เครื่องมือนี้ทำอะไรกับข้อมูลของคุณ</h2>
        <p>
          <strong>ข้อมูลที่กรอกในฟอร์ม (Channel Secret, webhook body, signature):</strong>{" "}
          ทุกอย่างประมวลผลในเบราว์เซอร์ของคุณเท่านั้นผ่าน{" "}
          <code>window.crypto.subtle</code>{" "}
          ข้อมูลเหล่านี้ไม่ถูกส่งออกไปยังเซิร์ฟเวอร์ใด ไม่มีการบันทึก
          และไม่ถูกจัดเก็บนอกอุปกรณ์ของคุณ
        </p>
        <p>
          <strong>Analytics:</strong> เว็บไซต์นี้ใช้ Cloudflare Web Analytics
          เพื่อนับจำนวนผู้เข้าชมและวัดประสิทธิภาพการโหลดหน้า Cloudflare
          อาจประมวลผล IP address และข้อมูลเบราว์เซอร์ของคุณบนเซิร์ฟเวอร์ของตน
          โดยไม่มีการใช้ cookie หรือ fingerprinting ดูเพิ่มเติมที่{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            นโยบายความเป็นส่วนตัวของ Cloudflare
          </a>
        </p>
        <p>
          <strong>ผู้ควบคุมข้อมูล:</strong> นภัท มณีจันทร์สุข (ประเทศไทย) ติดต่อ:
          naphat12345670@gmail.com
        </p>
        <p>
          <strong>สิทธิ์ของคุณตาม PDPA:</strong> คุณมีสิทธิ์ขอเข้าถึง แก้ไข ลบ
          หรือคัดค้านการประมวลผลข้อมูลส่วนบุคคลของคุณ ติดต่อได้ที่อีเมลข้างต้น
        </p>
        <p>
          เครื่องมือนี้ไม่มีความเกี่ยวข้อง ไม่ได้รับการรับรอง
          และไม่เป็นส่วนหนึ่งของ LY Corporation &ldquo;LINE&rdquo;
          เป็นเครื่องหมายการค้าของ LY Corporation
        </p>
      </article>
    </div>
  );
}
