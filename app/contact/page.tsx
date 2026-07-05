import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Contact | PRESSR",
};

export default function ContactPage() {
  return (
    <LegalPage title="Contact" lastUpdated="July 2025">
      <div className="mb-12">
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Have a question about your order, our product, or anything else? We&apos;re here to help. Reach out using the details below and we will get back to you within 1–2 business days.
        </p>
      </div>

      <ContactBlock title="General Inquiries & Order Support">
        <p>Email: <a href="mailto:[Support Email]" className="underline text-[#0A0A0A]">[Support Email]</a></p>
        <p>Response time: 1–2 business days</p>
      </ContactBlock>

      <ContactBlock title="Business Address">
        <p>[Business Entity]<br />[Business Address]</p>
      </ContactBlock>

      <ContactBlock title="Order Issues">
        <p>For questions about a specific order, please include your <strong>order number</strong> and the <strong>email address</strong> used at checkout in your message. This helps us locate your order quickly.</p>
      </ContactBlock>

      <ContactBlock title="Returns & Refunds">
        <p>Please review our <a href="/refund" className="underline text-[#0A0A0A]">Refund Policy</a> before reaching out. For return requests, email us with your order number and we will respond with instructions.</p>
      </ContactBlock>

      <ContactBlock title="Shipping Questions">
        <p>For shipping status or delivery questions, please check the tracking link in your confirmation email first. If you still need help, contact us with your order number.</p>
        <p>For full details, see our <a href="/shipping" className="underline text-[#0A0A0A]">Shipping Policy</a>.</p>
      </ContactBlock>

      <div className="mt-12 p-6 rounded-2xl bg-[#F6F6F6] border border-black/6">
        <p className="text-[#A0A0A0] text-xs leading-relaxed">
          <strong className="text-[#6B6B6B]">Health & Medical Questions:</strong> PRESSR is a football performance brand, not a medical company. For questions about whether any supplement is appropriate for your health situation, please consult a qualified healthcare professional.
        </p>
      </div>
    </LegalPage>
  );
}

function ContactBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 pb-8 border-b border-black/6 last:border-0">
      <h2 className="text-base font-bold text-[#0A0A0A] mb-3">{title}</h2>
      <div className="text-[#6B6B6B] text-base leading-relaxed space-y-2 [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
