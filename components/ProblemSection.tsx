"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="px-6 lg:px-8 py-24 lg:py-36 bg-[#F6F6F6]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-6"
        >
          The Reality
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-10"
        >
          Talent is only
          <br />
          part of the game.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#6B6B6B] text-lg lg:text-xl leading-relaxed max-w-2xl"
        >
          You trained all week. You know what you&apos;re capable of.
          <br />
          But the pressure before kickoff doesn&apos;t care about training.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#0A0A0A] text-lg lg:text-xl leading-relaxed max-w-2xl font-semibold mt-4"
        >
          PRESSR is part of the preparation that closes the gap.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ originX: 0 }}
          className="mt-16 h-px bg-gradient-to-r from-[#C8FF3D] via-[#C8FF3D]/20 to-transparent"
        />
      </div>
    </section>
  );
}
