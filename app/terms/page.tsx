import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | PRESSR",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions" lastUpdated="July 2025">
      <Section title="1. Acceptance of Terms">
        <p>By visiting getpressr.com or purchasing from us, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our site.</p>
      </Section>

      <Section title="2. Products">
        <p>PRESSR MATCHDAY is a dietary supplement. Our products are intended to support a healthy lifestyle when used as directed. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition.</p>
        <p>All purchases are subject to product availability. We reserve the right to discontinue any product at any time.</p>
      </Section>

      <Section title="3. Age Requirement">
        <p>You must be 18 years of age or older to purchase from PRESSR. By placing an order, you confirm that you meet this requirement.</p>
      </Section>

      <Section title="4. Product Information">
        <p>We strive to display product information accurately. However, we do not warrant that product descriptions, images, or other content are error-free, complete, or current. If a product you receive differs from our description, your sole remedy is to return it in accordance with our Refund Policy.</p>
      </Section>

      <Section title="5. Pricing and Payment">
        <p>All prices are listed in US Dollars (USD). We reserve the right to change prices at any time. Payment is processed securely through Shopify. We accept major credit cards and other payment methods made available at checkout.</p>
      </Section>

      <Section title="6. Order Fulfillment">
        <p>Orders are fulfilled by our partner Supliful. By placing an order, you consent to your shipping information being shared with Supliful for fulfillment purposes. We are not responsible for delays caused by Supliful or shipping carriers beyond our reasonable control.</p>
      </Section>

      <Section title="7. Shipping">
        <p>Shipping timelines and costs are described on our <a href="/shipping" className="underline text-[#0A0A0A]">Shipping Policy</a> page. Risk of loss and title pass to you upon delivery to the carrier.</p>
      </Section>

      <Section title="8. Returns and Refunds">
        <p>Our return and refund policy is described on our <a href="/refund" className="underline text-[#0A0A0A]">Refund Policy</a> page.</p>
      </Section>

      <Section title="9. Health Disclaimer">
        <p>The statements on this website have not been evaluated by the Food and Drug Administration. PRESSR products are not intended to diagnose, treat, cure, or prevent any disease.</p>
        <p>Consult a qualified healthcare professional before using any dietary supplement, especially if you are pregnant, nursing, taking prescription medication, or have a medical condition. Keep all supplements out of reach of children. Not intended for persons under 18.</p>
      </Section>

      <Section title="10. Intellectual Property">
        <p>All content on this website — including text, graphics, logos, and imagery — is the property of [Business Entity] and may not be reproduced without written permission.</p>
      </Section>

      <Section title="11. Limitation of Liability">
        <p>To the fullest extent permitted by law, PRESSR and [Business Entity] shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website.</p>
        <p>Our total liability to you for any claim shall not exceed the amount you paid for the product giving rise to the claim.</p>
      </Section>

      <Section title="12. Governing Law">
        <p>These Terms &amp; Conditions are governed by the laws of the State of [State], United States, without regard to conflict of law principles.</p>
      </Section>

      <Section title="13. Changes to These Terms">
        <p>We may update these Terms &amp; Conditions at any time. The updated version will be posted on this page with a revised date. Continued use of the site following an update constitutes acceptance of the revised terms.</p>
      </Section>

      <Section title="14. Contact Us">
        <p>If you have questions about these Terms, contact us at:</p>
        <p>[Business Entity]<br />[Business Address]<br />[Support Email]</p>
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
