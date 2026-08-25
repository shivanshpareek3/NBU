"use client";

import React, { useRef, useState } from "react";
import { foundersData } from "@/data/founders";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const TiltCard = ({ founder, index }: { founder: any; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPos = clientX - left;
    const yPos = clientY - top;
    x.set(xPos - width / 2);
    y.set(yPos - height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useMotionTemplate`${useSpring(y, { stiffness: 300, damping: 30 })}deg`;
  const rotateY = useMotionTemplate`${useSpring(x, { stiffness: 300, damping: 30 })}deg`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.2,
        type: "spring",
        stiffness: 100,
      }}
      style={{
        rotateX: useMotionTemplate`calc(${rotateX} * -0.2)`,
        rotateY: useMotionTemplate`calc(${rotateY} * 0.2)`,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer w-full md:w-80 rounded-2xl bg-white/5 border border-white/10 p-8 overflow-hidden backdrop-blur-sm hover:border-white/20 transition-colors duration-500"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at calc(${x}px + 50%) calc(${y}px + 50%),
              rgba(59, 130, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10 flex flex-col items-center text-center gap-4"
      >
        {/* Glow effect on hover inside card */}
        <div className="absolute inset-0 bg-brand/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
        
        <div className="text-3xl md:text-4xl font-heading font-bold uppercase group-hover:text-brand transition-colors duration-500">
          {founder.name}
        </div>
        <div className="text-sm font-bold tracking-[0.25em] text-white/50 uppercase">
          — {founder.role}
        </div>
        <div className="w-12 h-1 bg-brand/50 mt-4 rounded-full group-hover:w-24 group-hover:bg-brand transition-all duration-500" />
      </div>
    </motion.div>
  );
};

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

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 perspective-1000">
            {foundersData.founders.map((founder, index) => (
              <TiltCard key={founder.id} founder={founder} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-brand/5 blur-[120px] rounded-[100%] pointer-events-none -z-10" />
    </section>
  );
}
