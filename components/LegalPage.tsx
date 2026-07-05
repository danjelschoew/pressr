import Link from "next/link";

interface Props {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <header className="border-b border-black/6 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between h-16">
          <Link href="/" className="text-[#0A0A0A] font-black text-xl tracking-[0.15em] hover:text-[#0A0A0A]/60 transition-colors">
            PRESSR
          </Link>
          <Link href="/" className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors">
            ← Back to site
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-3">{title}</h1>
          <p className="text-[#A0A0A0] text-sm mb-12">Last updated: {lastUpdated}</p>

          <div className="prose-legal">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/6 px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#A0A0A0]">
          <Link href="/privacy" className="hover:text-[#0A0A0A] transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#0A0A0A] transition-colors">Terms &amp; Conditions</Link>
          <Link href="/shipping" className="hover:text-[#0A0A0A] transition-colors">Shipping Policy</Link>
          <Link href="/refund" className="hover:text-[#0A0A0A] transition-colors">Refund Policy</Link>
          <Link href="/contact" className="hover:text-[#0A0A0A] transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
