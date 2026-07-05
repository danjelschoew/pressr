"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function BrandStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="story" className="px-6 lg:px-8 py-24 lg:py-36 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className="relative rounded-3xl border border-black/7 bg-white shadow-sm overflow-hidden p-10 lg:p-16"
        >
          {/* Lime accent corner */}
          <div aria-hidden className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C8FF3D] opacity-20 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-4"
              >
                Why We Exist
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-black text-[#0A0A0A] leading-tight tracking-tight"
              >
                Built for the
                <br />
                players who
                <br />
                <span className="relative inline-block">
                  care.
                  <span className="absolute -bottom-1 left-0 right-0 h-2 bg-[#C8FF3D] -z-10 rounded" />
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <p className="text-[#6B6B6B] text-lg leading-relaxed">
                PRESSR was inspired by players who had the talent, but let
                pressure decide the outcome. Not because they didn&apos;t care.
                Because they cared too much.
              </p>
              <p className="text-[#0A0A0A] text-lg leading-relaxed font-medium">
                We believe footballers should prepare their mind with the same
                intent they bring to training. Talent gets you noticed.
                Preparation keeps you ready.
              </p>

              <div className="pt-4 border-t border-black/6 flex items-center gap-4">
                <div className="w-8 h-px bg-[#0A0A0A]" />
                <span className="text-[#A0A0A0] text-sm italic">
                  Founded by a player who learned the hard way.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
