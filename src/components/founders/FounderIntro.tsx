"use client";

import React from "react";
import { foundersData } from "@/data/founders";
import { motion } from "framer-motion";

export function FounderIntro() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-balance"
          >
            THE FOUNDER BEHIND THE SYSTEM.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-20"
          >
            No Books University helps founders and service-based businesses move
            from founder-dependent operations toward structured, system-driven
            businesses.
          </motion.p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
            {foundersData.founders.map((founder, index) => (
              <motion.div
                key={founder.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-center group cursor-default relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                
                <div className="text-3xl md:text-4xl font-heading font-bold uppercase mb-3 group-hover:text-brand transition-colors duration-500">
                  {founder.name}
                </div>
                <div className="text-sm font-bold tracking-[0.25em] text-white/50 uppercase">
                  — {founder.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
