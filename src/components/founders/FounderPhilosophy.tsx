"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function FounderPhilosophy() {
  const statements = [
    "SYSTEMS CREATE CLARITY.",
    "STRUCTURE CREATES FREEDOM.",
    "ACCOUNTABILITY CREATES EXECUTION.",
    "STRONG TEAMS CREATE SCALE.",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax and glow effects
  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.8, 0.2]);

  return (
    <section ref={containerRef} className="py-32 md:py-52 bg-[#020202] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-16 md:gap-24">
          {statements.map((statement, index) => (
            <motion.h2
              key={index}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="text-4xl md:text-7xl lg:text-[7rem] font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-center hover:text-brand transition-colors duration-500 cursor-default group"
            >
              {statement.split(" ").map((word, wIndex) => (
                <span
                  key={wIndex}
                  className={
                    wIndex === 0
                      ? "text-brand"
                      : "text-white/40 group-hover:text-white transition-colors duration-500"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </motion.h2>
          ))}
        </div>
      </div>
      
      {/* Dynamic Backgrounds */}
      <motion.div 
        style={{ y: yOffset, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[180px] -z-10 pointer-events-none"
      />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
