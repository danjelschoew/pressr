"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Method", href: "#philosophy" },
  { label: "Product", href: "#product" },
  { label: "Routine", href: "#routine" },
  { label: "Story", href: "#story" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/6 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="text-[#0A0A0A] font-black text-xl tracking-[0.15em] hover:text-[#0A0A0A]/60 transition-colors duration-200"
          >
            PRESSR
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#product"
              className="px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white text-sm font-bold tracking-wide hover:bg-[#C8FF3D] hover:text-black transition-colors duration-200"
            >
              Add to Routine
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#0A0A0A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-black/6"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#product"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-bold tracking-wide text-center"
              >
                Add to Routine
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
