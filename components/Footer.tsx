const footerLinks = {
  social: [
    { label: "Instagram", href: "#instagram" },
    { label: "TikTok", href: "#tiktok" },
  ],
  legal: [
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#" className="text-white font-black text-base tracking-[0.15em] hover:text-[#C8FF3D] transition-colors">
          PRESSR
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.social.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[#555] hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
          <a href="mailto:hello@pressr.co" className="text-sm text-[#555] hover:text-white transition-colors">
            Contact
          </a>
          {footerLinks.legal.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-[#555] hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-[#333] text-xs">&copy; {new Date().getFullYear()} PRESSR. All rights reserved.</p>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5">
        <p className="text-[#2a2a2a] text-xs leading-relaxed text-center max-w-2xl mx-auto">
          PRESSR is not a medical product. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </footer>
  );
}
