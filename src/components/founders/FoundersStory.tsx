"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function FoundersStory() {
  const listItems = [
    "More people.",
    "More clients.",
    "More decisions.",
    "More departments.",
    "More processes.",
    "More responsibilities.",
  ];

  return (
    <section className="py-24 md:py-40 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.25em] text-brand uppercase mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-brand/50"></span>
            WHY WE BUILT NO BOOKS UNIVERSITY
          </motion.h2>
          
          <div className="space-y-12 text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase leading-[1.1] tracking-tight text-white/80 mb-20 text-balance">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              As founder-led businesses grow, complexity increases.
            </motion.p>
            
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-white font-bold">
              {listItems.map((item, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 px-4 py-2 rounded-sm border border-white/10 text-xl md:text-2xl"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-brand"
            >
              Without proper systems, the founder becomes the operating system.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center py-20 border border-white/10 bg-white/[0.02] rounded-sm relative overflow-hidden group hover:border-brand/30 transition-colors duration-700"
          >
            <h3 className="text-4xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase tracking-tighter text-white/20 mb-8 transition-colors duration-700 group-hover:text-white/40">
              FOUNDER-DEPENDENT
            </h3>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-full bg-[#030303] border border-white/10 flex items-center justify-center mb-8 text-brand relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-shadow duration-700"
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
            
            <h3 className="text-5xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:from-brand group-hover:to-brand/50 transition-all duration-700">
              SYSTEM-DRIVEN
            </h3>
            
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
