"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import type { Product } from "@/types/product";
import CheckoutButton from "@/components/CheckoutButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" },
  }),
};

interface Props {
  product: Product;
}

export default function Hero({ product }: Props) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-8 pt-24 pb-16 bg-white">
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C8FF3D] opacity-20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-[#F2F2F2] text-[#6B6B6B] text-xs font-semibold tracking-widest uppercase">
              Football Performance
            </span>
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight text-[#0A0A0A]"
          >
            Pressure changes
            <br />
            <span className="relative inline-block">
              players.
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#C8FF3D] -z-10 rounded" />
            </span>
            <br />
            Preparation changes
            <br />
            pressure.
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="show"
            className="text-[#6B6B6B] text-lg lg:text-xl leading-relaxed max-w-md"
          >
            Built for footballers who want to stay calm when the game gets loud.
          </motion.p>

          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="show"
            className="flex flex-col sm:flex-row gap-3"
          >
            <CheckoutButton
              className="px-7 py-4 rounded-full bg-[#0A0A0A] text-white font-bold text-sm tracking-wide hover:bg-[#C8FF3D] hover:text-black transition-colors duration-200 text-center"
              loadingClassName="px-7 py-4 rounded-full bg-[#0A0A0A]/60 text-white font-bold text-sm tracking-wide text-center cursor-wait"
            >
              Start Your Routine
            </CheckoutButton>
            <a
              href="#philosophy"
              className="px-7 py-4 rounded-full border border-black/12 text-[#0A0A0A] font-semibold text-sm tracking-wide hover:border-black/30 hover:bg-black/3 transition-colors duration-200 text-center"
            >
              Learn the Method
            </a>
          </motion.div>

          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show" className="text-[#A0A0A0] text-xs tracking-wide">
            Designed for matchday routines. No magic. Just preparation.
          </motion.p>
        </div>

        {/* Product card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div aria-hidden className="absolute inset-0 rounded-3xl bg-[#C8FF3D] opacity-30 blur-3xl scale-110" />

            <div className="relative w-64 sm:w-80 rounded-3xl border border-black/8 bg-white shadow-2xl shadow-black/8 p-8 flex flex-col items-center gap-6">
              {product.badge && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A0A] border border-black/15 bg-[#F4F4F4] rounded-full px-3 py-1">
                  {product.badge}
                </span>
              )}

              {product.imageUrl ? (
                <div className="w-36 h-48 rounded-2xl overflow-hidden border border-black/6 relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt ?? product.title}
                    fill
                    className="object-cover"
                    sizes="144px"
                    priority
                  />
                </div>
              ) : (
                <div className="w-36 h-48 rounded-2xl bg-gradient-to-b from-[#F0F0F0] to-[#E8E8E8] border border-black/6 flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C8FF3D]/20 to-transparent" />
                  <div className="w-12 h-12 rounded-full bg-[#C8FF3D] flex items-center justify-center">
                    <span className="text-black text-lg font-black">P</span>
                  </div>
                  <span className="text-[10px] text-[#A0A0A0] tracking-widest uppercase text-center leading-tight px-2">
                    Product Image
                  </span>
                </div>
              )}

              <div className="text-center flex flex-col gap-1">
                <p className="text-[#0A0A0A] font-bold text-sm tracking-wide">{product.title}</p>
                <p className="text-[#0A0A0A] font-black text-2xl">{product.price}</p>
              </div>

              <CheckoutButton
                className="w-full py-3 rounded-full bg-[#C8FF3D] text-black text-sm font-bold tracking-wide text-center hover:bg-[#0A0A0A] hover:text-white transition-colors duration-200"
                loadingClassName="w-full py-3 rounded-full bg-[#C8FF3D]/60 text-black text-sm font-bold tracking-wide text-center cursor-wait"
              >
                Add to Routine
              </CheckoutButton>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#C0C0C0] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#0A0A0A]/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
