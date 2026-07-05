"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import type { Product } from "@/types/product";
import CheckoutButton from "@/components/CheckoutButton";

interface Props {
  product: Product;
}

export default function ProductSection({ product }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="product" className="px-6 lg:px-8 py-24 lg:py-36 bg-[#F6F6F6]">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Product visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div aria-hidden className="absolute inset-0 rounded-full bg-[#C8FF3D] opacity-25 blur-[80px]" />

            <div className="relative w-72 sm:w-96 rounded-3xl border border-black/8 bg-white shadow-2xl shadow-black/10 p-10 flex flex-col items-center gap-8">
              {product.badge && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#0A0A0A] border border-black/12 bg-[#F2F2F2] rounded-full px-3 py-1">
                  {product.badge}
                </span>
              )}

              {product.imageUrl ? (
                <div className="w-44 h-56 rounded-2xl overflow-hidden border border-black/6 relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.imageAlt ?? product.title}
                    fill
                    className="object-cover"
                    sizes="176px"
                    priority
                  />
                </div>
              ) : (
                <div className="w-44 h-56 rounded-2xl bg-gradient-to-b from-[#EEEEEE] to-[#E4E4E4] border border-black/6 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C8FF3D]/25 to-transparent" />
                  <div className="w-16 h-16 rounded-full bg-[#C8FF3D] flex items-center justify-center">
                    <span className="text-black text-2xl font-black">P</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-[#0A0A0A] font-bold text-sm tracking-wider">PRESSR</span>
                    <span className="text-[#A0A0A0] text-[9px] tracking-widest uppercase">Match Routine</span>
                  </div>
                </div>
              )}

              <div className="w-full grid grid-cols-2 gap-2">
                {product.ingredients.map((ing) => (
                  <div key={ing.name} className="rounded-xl bg-[#F4F4F4] border border-black/6 px-3 py-2 text-center">
                    <span className="text-[11px] text-[#6B6B6B] font-medium">{ing.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-[#6B6B6B] text-xs font-bold tracking-widest uppercase mb-4">The Product</p>
              <h2 className="text-4xl sm:text-5xl font-black text-[#0A0A0A] leading-tight tracking-tight mb-4">
                {product.title}
              </h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed">{product.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[#A0A0A0] text-xs font-bold tracking-widest uppercase">What&apos;s inside</p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing) => (
                  <span key={ing.name} className="px-4 py-2 rounded-full border border-black/10 bg-white text-[#0A0A0A] text-sm font-medium">
                    {ing.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t border-black/6">
              <div className="flex items-baseline gap-3">
                <span className="text-[#0A0A0A] font-black text-4xl">{product.price}</span>
                {product.compareAtPrice && (
                  <span className="text-[#A0A0A0] text-lg line-through">{product.compareAtPrice}</span>
                )}
              </div>

              <CheckoutButton
                className="px-8 py-4 rounded-full bg-[#C8FF3D] text-black text-sm font-bold tracking-wide text-center hover:bg-[#0A0A0A] hover:text-white transition-colors duration-200"
                loadingClassName="px-8 py-4 rounded-full bg-[#C8FF3D]/60 text-black text-sm font-bold tracking-wide text-center cursor-wait"
              >
                Add to Preparation
              </CheckoutButton>

              <p className="text-[#A0A0A0] text-xs">
                Part of the preparation. Not a shortcut.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
