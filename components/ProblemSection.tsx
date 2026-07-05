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
          Every footballer trains their touch, speed, passing and finishing. But
          matchday asks for more. The pressure before kickoff. The mistake that
          stays in your head. The moment the coach is watching. The difference
          between playing free in training and playing tight in the match.{" "}
          <span className="text-[#0A0A0A] font-semibold">
            PRESSR was built for those moments.
          </span>
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
