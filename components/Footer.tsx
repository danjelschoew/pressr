import Link from "next/link";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
  { label: "Shipping Policy", href: "/shipping" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 px-6 lg:px-8 pt-12 pb-8">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <a href="#" className="text-white font-black text-base tracking-[0.15em] hover:text-[#C8FF3D] transition-colors">
            PRESSR
          </a>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="mailto:[Support Email]" className="text-sm text-[#555] hover:text-white transition-colors">
              Contact
            </a>
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-[#555] hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* FDA disclaimer */}
        <div className="border-t border-white/5 pt-8 mb-6">
          <p className="text-[#2a2a2a] text-xs leading-relaxed max-w-2xl">
            These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. PRESSR MATCHDAY is a dietary supplement intended for use by healthy adults 18 years of age or older. Keep out of reach of children. Consult a healthcare professional before use if you are pregnant, nursing, taking medication, or have a medical condition.
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#2a2a2a] text-xs">© {new Date().getFullYear()} PRESSR. All rights reserved.</p>
          <p className="text-[#2a2a2a] text-xs">Performance starts before the whistle.</p>
        </div>
      </div>
    </footer>
  );
}
