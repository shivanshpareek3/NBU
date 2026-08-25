"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const MagneticButton = ({ children, className, href }: { children: React.ReactNode, className: string, href: string }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
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
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-brand/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            <Sparkles className="w-4 h-4 text-brand" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">The Founder Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-medium tracking-tight leading-[1.05] text-white mb-8 text-balance"
          >
            Building businesses that <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400 font-semibold italic">don&apos;t depend</span> on their founders.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed font-light"
          >
            No Books University was built around a simple idea — strong businesses need strong systems, clear ownership, capable teams, and structured execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <MagneticButton
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300 relative z-20 group"
            >
              Let&apos;s Build
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            
            <MagneticButton
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300 relative z-20"
            >
              Explore Services
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Parallax Floating Glass Elements */}
      <motion.div 
        style={{ y: y1, opacity }} 
        className="absolute left-[10%] top-[25%] w-24 h-24 rounded-2xl bg-gradient-to-br from-brand/20 to-transparent border border-white/10 backdrop-blur-xl rotate-12 hidden lg:block pointer-events-none shadow-2xl" 
      />
      <motion.div 
        style={{ y: y2, opacity }} 
        className="absolute right-[12%] top-[45%] w-32 h-32 rounded-full bg-gradient-to-tr from-cyan-500/20 to-transparent border border-white/10 backdrop-blur-xl -rotate-12 hidden lg:block pointer-events-none shadow-2xl" 
      />
    </section>
  );
}
