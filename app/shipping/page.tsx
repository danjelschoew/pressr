import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Policy | PRESSR",
};

export default function ShippingPage() {
  return (
    <LegalPage title="Shipping Policy" lastUpdated="July 2025">
      <Section title="Fulfillment Partner">
        <p>PRESSR orders are fulfilled by our partner <strong>Supliful</strong>, a US-based fulfillment provider. All products ship from within the United States.</p>
      </Section>

      <Section title="Processing Time">
        <p>Orders are typically processed within <strong>2–5 business days</strong> after your order is confirmed. You will receive a shipping confirmation with tracking information once your order has been dispatched.</p>
        <p>Processing times may be longer during peak periods or holidays.</p>
      </Section>

      <Section title="Shipping Rates & Delivery Times">
        <p>Shipping rates and estimated delivery times are calculated at checkout based on your location and selected shipping method.</p>
        <ul>
          <li><strong>Standard Shipping:</strong> Estimated 5–10 business days after dispatch</li>
          <li><strong>Expedited Shipping:</strong> Estimated 2–5 business days after dispatch (where available)</li>
        </ul>
        <p>Delivery timelines are estimates only and are not guaranteed. Actual delivery times may vary based on carrier conditions.</p>
      </Section>

      <Section title="Shipping Area">
        <p>We currently ship to addresses within the <strong>United States</strong>. We do not ship to P.O. boxes or military APO/FPO addresses at this time. International shipping availability may vary — please contact us for more information.</p>
      </Section>

      <Section title="Order Tracking">
        <p>Once your order ships, you will receive an email with a tracking number. You can use this to track your order through the carrier&apos;s website.</p>
      </Section>

      <Section title="Lost or Delayed Shipments">
        <p>If your order has not arrived within 15 business days of your shipping confirmation, please contact us at [Support Email] and we will investigate with the carrier on your behalf.</p>
        <p>PRESSR is not responsible for delays caused by the shipping carrier, natural disasters, or other events outside our control.</p>
      </Section>

      <Section title="Incorrect Address">
        <p>Please ensure your shipping address is correct at the time of ordering. We are unable to redirect shipments once they are dispatched. If an order is returned to us due to an incorrect address, we will contact you to arrange re-shipment at your cost.</p>
      </Section>

      <Section title="Questions">
        <p>If you have questions about your shipment, contact us at [Support Email] or visit our <a href="/contact" className="underline text-[#0A0A0A]">Contact page</a>.</p>
      </Section>
    </LegalPage>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">{title}</h2>
      <div className="text-[#6B6B6B] text-base leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1.5 [&_a]:underline">
        {children}
      </div>
    </div>
  );
}
