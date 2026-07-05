"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    time: "24h before",
    actions: ["Sleep", "Hydrate", "Prepare your kit"],
    accent: "The foundation. Miss these and nothing else matters.",
  },
  {
    time: "3h before",
    actions: ["Eat light", "Stay calm", "Keep the noise low"],
    accent: "Reduce noise. Protect your headspace.",
  },
  {
    time: "60 min before",
    actions: ["Warm up", "Breathe", "Lock in"],
    accent: "Activate the body. Quiet the mind.",
  },
  {
    time: "Kickoff",
    actions: ["Clear head", "Next-play mindset"],
    accent: "Everything was preparation. This is execution.",
  },
];

export default function RoutineTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="routine" className="px-6 lg:px-8 py-24 lg:py-36 bg-white">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-6"
        >
          The System
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-16"
        >
          The game starts
          <br />
          before kickoff.
        </motion.h2>

        <div className="relative flex flex-col gap-0">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#0A0A0A] via-black/20 to-transparent"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border border-black/15 bg-white shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
              </div>

              <div className="flex flex-col gap-3 pt-1 pb-4">
                <span className="text-[#0A0A0A] text-xs font-bold tracking-widest uppercase">{step.time}</span>
                <div className="flex flex-wrap gap-2">
                  {step.actions.map((action) => (
                    <span key={action} className="px-3 py-1.5 rounded-lg bg-[#F2F2F2] border border-black/6 text-[#0A0A0A] text-sm font-medium">
                      {action}
                    </span>
                  ))}
                </div>
                <p className="text-[#A0A0A0] text-sm italic">{step.accent}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
