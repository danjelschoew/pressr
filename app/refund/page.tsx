import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | PRESSR",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="July 2025">
      <Section title="Our Policy">
        <p>We want you to be satisfied with your PRESSR purchase. If you are not happy with your order for any reason, please contact us within <strong>30 days of delivery</strong> and we will work to make it right.</p>
      </Section>

      <Section title="Eligibility for Returns">
        <p>To be eligible for a return or refund:</p>
        <ul>
          <li>You must contact us within 30 days of the delivery date</li>
          <li>The product must be unused and in its original, sealed packaging</li>
          <li>You must provide proof of purchase (order number or confirmation email)</li>
        </ul>
        <p>We cannot accept returns on opened or partially used products due to the nature of dietary supplements, except in cases of a defective or damaged product.</p>
      </Section>

      <Section title="Damaged or Defective Items">
        <p>If your order arrives damaged or with a manufacturing defect, contact us at [Support Email] within 7 days of delivery with your order number and photos of the issue. We will arrange a replacement or full refund at no cost to you.</p>
      </Section>

      <Section title="How to Request a Refund">
        <ol>
          <li>Email [Support Email] with your order number and reason for return</li>
          <li>We will respond within 2–3 business days with instructions</li>
          <li>If a return is approved, ship the item back to the address we provide</li>
          <li>Refunds are issued to the original payment method within 5–10 business days of receiving the return</li>
        </ol>
        <p>Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product.</p>
      </Section>

      <Section title="Non-Refundable Items">
        <ul>
          <li>Opened or used products (unless defective)</li>
          <li>Products returned after 30 days of delivery</li>
          <li>Products not purchased directly from getpressr.com</li>
        </ul>
      </Section>

      <Section title="Order Cancellations">
        <p>Orders can be cancelled before they are dispatched. Once an order has been fulfilled and shipped by Supliful, it cannot be cancelled. Please contact us at [Support Email] as soon as possible if you need to cancel.</p>
      </Section>

      <Section title="Contact Us">
        <p>For all refund and return inquiries, contact us at:</p>
        <p>[Support Email]<br />[Business Entity]<br />[Business Address]</p>
        <p>Or visit our <a href="/contact" className="underline text-[#0A0A0A]">Contact page</a>.</p>
      </Section>
    </LegalPage>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">{title}</h2>
      <div className="text-[#6B6B6B] text-base leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:space-y-1.5 [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
