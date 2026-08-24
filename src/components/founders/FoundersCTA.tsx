"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FoundersCTA() {
  return (
    <section className="py-32 md:py-52 relative overflow-hidden bg-[#020202]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold uppercase leading-[0.85] tracking-tighter mb-10 text-balance"
          >
            BUILD THE BUSINESS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-white">NOT JUST THE REVENUE.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-3xl text-white/50 max-w-4xl mx-auto mb-16 leading-relaxed font-light text-balance"
          >
            If your business still depends on you for every process, decision
            and problem, it&apos;s time to build the infrastructure behind it.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 bg-brand text-white text-sm font-bold uppercase tracking-[0.2em] px-10 py-5 rounded-full hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full skew-x-12 transition-transform duration-700 ease-out" />
              <span>Let&apos;s Build Your Business</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-brand/10 rounded-full blur-[200px] -z-10 pointer-events-none opacity-50" />
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] border border-white/5 rounded-full -z-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[1000px] h-[1000px] border border-white/5 rounded-full -z-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"
      />
    </section>
  );
}
