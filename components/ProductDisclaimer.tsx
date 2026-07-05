"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProductDisclaimer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="px-6 lg:px-8 py-14 bg-white border-t border-black/6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-5">Product Information</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Type", value: "Dietary supplement — 60 capsules per bottle." },
            { label: "Dosage", value: "Take as directed on the product label. Do not exceed the recommended serving." },
            { label: "Age", value: "Intended for use by healthy adults 18 years of age or older. Not intended for persons under 18." },
            { label: "Safety", value: "Keep out of reach of children. Store in a cool, dry place away from direct sunlight." },
            {
              label: "Consult your doctor",
              value: "If you are pregnant, nursing, taking prescription medication, or have a medical condition, consult a healthcare professional before use.",
            },
            { label: "Disclaimer", value: "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease." },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-[#F8F8F8] border border-black/6 px-5 py-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#A0A0A0] mb-1">{item.label}</p>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
