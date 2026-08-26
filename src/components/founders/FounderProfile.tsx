"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { foundersData } from "@/data/founders";
import { motion, useScroll, useTransform } from "framer-motion";

interface FounderProfileProps {
  founderId: "arpit" | "yashvardhan";
  align?: "left" | "right";
}

export function FounderProfile({ founderId, align = "left" }: FounderProfileProps) {
  const founder = foundersData.founders.find((f) => f.id === founderId);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  if (!founder) return null;

  const isLeft = align === "left";

  const blurReveal: import("framer-motion").Variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="py-32 md:py-48 border-b border-white/5 overflow-hidden relative bg-[#020202]">
      
      {/* Background Watermark Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'} text-[15rem] md:text-[25rem] font-heading font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0`}
      >
        {founder.name.split(' ')[0]}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-16 lg:gap-24 items-center`}
        >
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative group perspective-1000"
          >
            {/* Glow Behind Image */}
            <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

            <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl shadow-2xl transition-all duration-700 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transform-gpu group-hover:-translate-y-2">
              <motion.div 
                style={{ y: imageY }} 
                className="w-full h-[130%] -top-[15%] relative"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale-[30%] contrast-125 group-hover:grayscale-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                
                {/* Gradient Overlay for Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </motion.div>
            </div>
            
            {/* Floating Element Badge */}
            <motion.div 
              initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className={`absolute bottom-8 ${isLeft ? '-right-12' : '-left-12'} hidden md:flex items-center gap-4 bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-xl`}
            >
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center border border-brand/30 overflow-hidden relative">
                <Image
                  src="/logo-no-bg.png"
                  alt="NBU Logo"
                  fill
                  className="object-contain object-center scale-125"
                />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{founder.role}</p>
                <p className="text-white/50 text-xs">No Books University</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            style={{ y: textY }}
            className="w-full lg:w-7/12 flex flex-col justify-center relative"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <motion.h2 
                variants={blurReveal}
                className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold uppercase leading-[0.9] tracking-tight mb-4 text-white"
              >
                {founder.name}
              </motion.h2>
              
              <motion.h3 
                variants={blurReveal}
                className="text-brand font-semibold tracking-[0.2em] uppercase text-lg md:text-xl mb-16 flex items-center gap-4"
              >
                <span className="w-12 h-px bg-brand/50" />
                {founder.role}
              </motion.h3>

              {/* Bio Section */}
              <motion.div 
                variants={blurReveal}
                className="mb-16 relative pl-8 border-l border-white/10 hover:border-brand/50 transition-colors duration-500 group"
              >
                {/* Glowing Dot on Line */}
                <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-brand/50 shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform duration-300" />
                
                <h4 className="text-sm font-semibold tracking-widest text-white/50 uppercase mb-6">
                  {founder.bio.heading}
                </h4>
                <div className="space-y-6 text-white/70 leading-relaxed text-lg font-light">
                  {founder.bio.paragraphs.map((p, i) => (
                    <p key={i} className="hover:text-white transition-colors duration-300">
                      {p || `[Editable biography paragraph ${i + 1} for ${founder.name}. Provide details about experience, education, and achievements here.]`}
                    </p>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
