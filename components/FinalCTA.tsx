"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CheckoutButton from "@/components/CheckoutButton";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 lg:px-8 py-24 lg:py-36 bg-[#0A0A0A] relative overflow-hidden">
      {/* Lime glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[400px] rounded-full bg-[#C8FF3D] opacity-10 blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#C8FF3D] text-xs font-bold tracking-widest uppercase mb-6"
        >
          Start Today
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-10"
        >
          Train your body.
          <br />
          <span className="text-[#C8FF3D]">Prepare your mind.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <CheckoutButton
            className="px-8 py-4 rounded-full bg-[#C8FF3D] text-black font-bold text-sm tracking-wide hover:bg-white transition-colors duration-200 text-center"
            loadingClassName="px-8 py-4 rounded-full bg-[#C8FF3D]/60 text-black font-bold text-sm tracking-wide text-center cursor-wait"
          >
            Start Your Preparation
          </CheckoutButton>
          <a
            href="#philosophy"
            className="px-8 py-4 rounded-full border border-white/15 text-white font-semibold text-sm tracking-wide hover:border-white/40 transition-colors duration-200 text-center"
          >
            Learn the Method
          </a>
        </motion.div>
      </div>
    </section>
  );
}
