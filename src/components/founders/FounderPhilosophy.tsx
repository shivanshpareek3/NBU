"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const ScrollRevealStatement = ({ statement }: { statement: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 40%"],
  });

  const words = statement.split(" ");

  return (
    <h2
      ref={ref}
      className="text-4xl md:text-7xl lg:text-[7rem] font-heading font-extrabold uppercase leading-[0.85] tracking-tighter text-center cursor-default flex flex-wrap justify-center gap-x-4 md:gap-x-8"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const filter = useTransform(scrollYProgress, [start, end], ["blur(10px)", "blur(0px)"]);

        return (
          <motion.span
            key={i}
            style={{ opacity, filter }}
            className={i === 0 ? "text-brand" : "text-white"}
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};

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
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.5, 0.1]);

  return (
    <section ref={containerRef} className="py-32 md:py-52 bg-[#020202] border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-32 md:gap-48">
          {statements.map((statement, index) => (
            <ScrollRevealStatement key={index} statement={statement} />
          ))}
        </div>
      </div>
      
      {/* Dynamic Backgrounds */}
      <motion.div 
        style={{ y: yOffset, opacity: glowOpacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[1000px] bg-brand/20 rounded-full blur-[200px] -z-10 pointer-events-none"
      />
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
