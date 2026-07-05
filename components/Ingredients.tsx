"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ingredients = [
  {
    name: "Ashwagandha (KSM-66)",
    role: "Adaptogen",
    description:
      "An adaptogenic herb used for centuries to help the body manage stress. KSM-66 is one of the most researched forms, with clinical studies supporting its use for mental resilience and recovery.",
  },
  {
    name: "Vitamin D",
    role: "Muscle & Immune support",
    description:
      "Supports muscle function, bone strength and immune health. Especially important for athletes training and competing in low-sunlight conditions — a deficiency is extremely common across northern Europe.",
  },
  {
    name: "Vitamin B12",
    role: "Energy metabolism",
    description:
      "Essential for energy metabolism and nervous system function. Helps reduce tiredness and fatigue — keeping you sharp from warm-up to the final whistle.",
  },
  {
    name: "Black Pepper Extract",
    role: "Absorption",
    description:
      "Included to improve the bioavailability of the other ingredients. Piperine — the active compound in black pepper — helps your body absorb more of what it takes in.",
  },
];

export default function Ingredients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ingredients" className="px-6 lg:px-8 py-24 lg:py-36 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-6"
        >
          What&apos;s Inside
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-4"
        >
          Nothing hidden.
          <br />
          Everything intentional.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[#6B6B6B] text-lg max-w-xl mb-16"
        >
          Four ingredients. Each one chosen for a reason. No fillers, no proprietary blends, no mystery.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredients.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              className="bg-white rounded-2xl border border-black/7 p-7 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-[#C8FF3D] flex items-center justify-center flex-shrink-0">
                <span className="text-black font-black text-sm">{i + 1}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#A0A0A0]">{ing.role}</span>
                <h3 className="text-[#0A0A0A] font-bold text-base leading-snug">{ing.name}</h3>
              </div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{ing.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-[#A0A0A0] text-xs leading-relaxed max-w-2xl"
        >
          These statements have not been evaluated by the Food and Drug Administration. PRESSR MATCHDAY is not intended to diagnose, treat, cure or prevent any disease. If you have a medical condition or take medication, consult your doctor before use.
        </motion.p>
      </div>
    </section>
  );
}
