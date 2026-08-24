"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FounderHero() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-brand font-bold tracking-[0.2em] uppercase text-sm mb-6"
          >
            THE FOUNDER BEHIND NO BOOKS UNIVERSITY
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-balance"
          >
            BUILDING BUSINESSES THAT DON&apos;T DEPEND ON THEIR FOUNDERS.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed"
          >
            No Books University was built around a simple idea — strong
            businesses need strong systems, clear ownership, capable teams and
            structured execution.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)]"
            >
              Let&apos;s Build Your Business
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Explore What We Build
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Subtle Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] -z-10 translate-x-1/3"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -z-10 translate-y-1/3"
      />
    </section>
  );
}
