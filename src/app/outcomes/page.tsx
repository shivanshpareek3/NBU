"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OutcomesPage() {
  const outcomes = [
    "Marketing systems that bring in consistent leads — not one-off spikes.",
    "Sales systems and pipelines — so deals don't depend on the founder chasing every lead.",
    "Optimised finances and a clearer P&L — so you know where money is made and lost.",
    "Lower costs, without cutting what drives growth.",
    "More output from the same team.", // Wait, I will use a placeholder here or just keep it since the user hasn't provided the custom text yet.
    "AI systems that take repetitive work off the team's plate.",
    "SOPs for every recurring process — so things run the same whether the founder is in the room or not.",
    "Complete departments built out — marketing, sales, HR, finance, accounts, and anything else the business needs."
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base">Outcomes</div>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8 uppercase">
              WHAT WE <br/>
              <span className="text-white/40">DELIVER.</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-medium max-w-4xl leading-relaxed mt-12 mx-auto">
              We don't sell you a list of services. We work inside your business — across whatever it takes — to get you these specific outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 - OUTCOMES LIST */}
      <section className="py-24 bg-[#0a0a0a] text-white relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="border-t border-white/10">
            {outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 py-8 md:py-10 hover:bg-white/[0.02] transition-colors duration-300 px-6"
                >
                  <div className="flex items-start gap-8 md:gap-12 min-w-0">
                    <span className="text-xl md:text-2xl font-bold text-white/20 font-heading w-12 shrink-0 pt-1">0{idx + 1}</span>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase text-white group-hover:text-brand transition-colors duration-300 tracking-tight leading-tight">{outcome}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - FINAL CTA */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#030303] overflow-hidden py-32 border-t border-white/10">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            READY FOR <span className="text-brand">RESULTS?</span>
          </h2>
          <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
