"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";

const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className: string, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div style={{ position: "relative" }} animate={{ x: position.x, y: position.y }} transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}>
      <Link href={href} ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} className={className}>
        {children}
      </Link>
    </motion.div>
  );
};

export function FounderHero() {
  const heading = "BUILDING BUSINESSES THAT DON'T DEPEND ON THEIR FOUNDERS.";
  const words = heading.split(" ");

  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
  };

  const wordVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  const fadeUpVariant: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 1 } },
  };

  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand font-bold tracking-[0.2em] uppercase text-sm mb-6"
          >
            THE FOUNDER BEHIND NO BOOKS UNIVERSITY
          </motion.p>
          
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-balance flex flex-wrap gap-x-4 gap-y-2"
          >
            {words.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed"
          >
            No Books University was built around a simple idea — strong
            businesses need strong systems, clear ownership, capable teams and
            structured execution.
          </motion.p>

          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-6"
          >
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-brand/90 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 relative z-20 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">Let&apos;s Build Your Business <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </MagneticButton>
            <MagneticButton
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative z-20"
            >
              Explore What We Build
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Morphing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand/20 rounded-[40%_60%_70%_30%] blur-[120px] translate-x-1/3 origin-center"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#00f2fe]/20 rounded-[60%_40%_30%_70%] blur-[100px] translate-y-1/3 origin-center"
        />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>
    </section>
  );
}
