import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | PRESSR",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 2025">
      <Section title="1. Introduction">
        <p>PRESSR (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by [Business Entity]. We are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share information when you visit getpressr.com or make a purchase from us.</p>
      </Section>

      <Section title="2. Information We Collect">
        <p>When you visit our site or place an order, we may collect:</p>
        <ul>
          <li>Name, email address, shipping address, and phone number</li>
          <li>Payment information (processed securely by Shopify — we do not store your card details)</li>
          <li>Browser type, IP address, and pages visited (via cookies and analytics tools)</li>
          <li>Order history and communications with our support team</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process and fulfill your orders</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Respond to customer service requests</li>
          <li>Improve our website and marketing</li>
          <li>Comply with applicable laws</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </Section>

      <Section title="4. Sharing of Information">
        <p>We share your information with third-party service providers solely to operate our business, including:</p>
        <ul>
          <li><strong>Shopify</strong> — our e-commerce platform and payment processor. View Shopify&apos;s Privacy Policy at shopify.com/legal/privacy.</li>
          <li><strong>Supliful</strong> — our fulfillment partner, who receives your shipping information to process and ship your order.</li>
          <li>Analytics and marketing providers (e.g., Google Analytics)</li>
        </ul>
        <p>These providers are only authorized to use your information as necessary to provide services to us.</p>
      </Section>

      <Section title="5. Cookies">
        <p>Our website uses cookies to improve your experience and analyze traffic. You may disable cookies in your browser settings; however, some features of the site may not function properly without them.</p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy or as required by law.</p>
      </Section>

      <Section title="7. Your Rights (California Residents — CCPA)">
        <p>If you are a California resident, you have the right to:</p>
        <ul>
          <li>Know what personal information we collect and how it is used</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of personal information (we do not sell your data)</li>
        </ul>
        <p>To exercise these rights, contact us at [Support Email].</p>
      </Section>

      <Section title="8. Security">
        <p>We take reasonable measures to protect your information. All payment transactions are processed by Shopify using industry-standard encryption. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>Our products are not intended for persons under 18 years of age. We do not knowingly collect personal information from children under 18.</p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised date.</p>
      </Section>

      <Section title="11. Contact Us">
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>[Business Entity]<br />[Business Address]<br />[Support Email]</p>
      </Section>
    </LegalPage>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-[#0A0A0A] mb-3">{title}</h2>
      <div className="text-[#6B6B6B] text-base leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1.5">
        {children}
      </div>
    </div>
  );
}
