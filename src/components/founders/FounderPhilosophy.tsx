"use client";

import React from "react";
import { motion } from "framer-motion";

const philosophies = [
  {
    number: "01",
    title: "Systems Create Clarity",
    description: "Eliminating chaos through structured, repeatable processes."
  },
  {
    number: "02",
    title: "Structure Creates Freedom",
    description: "Building strong foundations to allow creativity and growth to thrive."
  },
  {
    number: "03",
    title: "Accountability Creates Execution",
    description: "Empowering individuals to take ownership and deliver consistent results."
  },
  {
    number: "04",
    title: "Strong Teams Create Scale",
    description: "Fostering collaboration to achieve exponential and sustainable impact."
  }
];

export function FounderPhilosophy() {
  return (
    <section className="py-24 md:py-32 bg-[#020202] border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand" />
            <span className="text-white/80 text-xs tracking-widest uppercase font-medium">Core Principles</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white tracking-tight"
          >
            The NBU Philosophy
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {philosophies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-brand/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-brand/40 font-heading text-5xl font-light mb-8 group-hover:text-brand transition-colors duration-500">
                  {item.number}
                </span>
                <h3 className="text-xl md:text-2xl font-heading font-medium text-white mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mt-auto group-hover:text-white/70 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
