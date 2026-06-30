"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is PRESSR a cure for anxiety?",
    a: "No. PRESSR is not a medical product and does not treat anxiety or any condition. It is designed as part of a consistent matchday routine.",
  },
  {
    q: "Will this make me play better?",
    a: "No supplement can guarantee performance. PRESSR is about preparation, routine and consistency.",
  },
  {
    q: "Who is it for?",
    a: "Footballers who want to build a calmer, more intentional pre-match routine.",
  },
  {
    q: "Can I connect this to Shopify?",
    a: "Yes. The product section is structured so Shopify product data and checkout can be connected later.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-black/7">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="text-[#0A0A0A] font-semibold text-lg group-hover:text-[#6B6B6B] transition-colors duration-200">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-[#A0A0A0] text-2xl leading-none font-light"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-[#6B6B6B] text-base leading-relaxed pb-6 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="px-6 lg:px-8 py-24 lg:py-36 bg-white">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-6"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-14"
        >
          Questions, answered.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
