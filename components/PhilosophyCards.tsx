"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    label: "Body",
    headline: "Train the body.",
    body: "Speed, strength, touch and technique matter. They always will.",
    icon: "◎",
  },
  {
    label: "Mind",
    headline: "Prepare the mind.",
    body: "Because pressure changes how players think, move and decide.",
    icon: "⌁",
  },
  {
    label: "Next Play",
    headline: "Play the next ball.",
    body: "Mistake made? Reset. Stay in the game.",
    icon: "→",
  },
];

export default function PhilosophyCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="px-6 lg:px-8 py-24 lg:py-36 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-6"
          >
            The Method
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-16"
          >
            Three pillars.
            <br />
            One preparation.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-black/7 bg-[#F8F8F8] p-8 lg:p-10 flex flex-col gap-5 overflow-hidden cursor-default hover:shadow-lg hover:shadow-black/6 transition-shadow duration-300"
            >
              {/* Hover lime accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C8FF3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

              <span className="text-[#0A0A0A] text-3xl font-black leading-none">{pillar.icon}</span>

              <span className="text-[10px] font-bold tracking-widest uppercase text-[#A0A0A0]">{pillar.label}</span>

              <h3 className="text-[#0A0A0A] font-bold text-xl lg:text-2xl leading-snug">{pillar.headline}</h3>

              <p className="text-[#6B6B6B] text-sm leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
