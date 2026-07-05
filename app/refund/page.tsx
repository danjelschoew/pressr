import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | PRESSR",
};

export default function RefundPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="July 2025">
      <Section title="Our Policy">
        <p>All PRESSR sales are final. Because our products are made-to-order dietary supplements, we do not accept returns or exchanges once an order has been placed.</p>
        <p>The exception is damaged or defective items — see below.</p>
      </Section>

      <Section title="Damaged or Defective Items">
        <p>If your order arrives damaged, tampered with, or with a manufacturing defect, contact us at [Support Email] within <strong>7 days of delivery</strong> with:</p>
        <ul>
          <li>Your order number</li>
          <li>A description of the issue</li>
          <li>Photos of the damaged or defective product</li>
        </ul>
        <p>We will arrange a replacement or full refund at no cost to you.</p>
      </Section>

      <Section title="Wrong Item Received">
        <p>If you received the wrong product, contact us at [Support Email] within 7 days of delivery with your order number and a photo. We will resolve this at no cost to you.</p>
      </Section>

      <Section title="Order Cancellations">
        <p>Orders are sent to our fulfillment partner (Supliful) immediately after placement. Cancellations are only possible before the order enters production. Contact us at [Support Email] as soon as possible if you need to cancel — we cannot guarantee cancellation once processing has begun.</p>
      </Section>

      <Section title="Non-Refundable Situations">
        <ul>
          <li>Change of mind or no longer wanting the product</li>
          <li>Incorrect address entered at checkout</li>
          <li>Delays caused by the shipping carrier</li>
          <li>Products purchased outside of getpressr.com</li>
        </ul>
      </Section>

      <Section title="Contact Us">
        <p>For all refund inquiries, contact us at:</p>
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
