"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base">Our Philosophy</div>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
              BUILD THE BUSINESS. <br/>
              <span className="text-white/40">NOT JUST THE REVENUE.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 - FULL BLEED CINEMATIC IMAGE */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }} 
          whileInView={{ scale: 1 }} 
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center filter grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* 03 - THE PROBLEM WITH CHAOS (Asymmetric Layout) */}
      <section className="py-32 md:py-48 bg-[#030303]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <motion.div {...fadeInUp} className="md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[1.1]">
                The <span className="text-brand">Founder's</span><br/> Bottleneck
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="md:w-1/2 flex flex-col justify-center">
              <p className="text-2xl text-white/70 leading-relaxed mb-8">
                Every successful service business eventually hits a ceiling. That ceiling is the founder. When a business relies entirely on the founder's energy, intellect, and time to function, it cannot scale.
              </p>
              <p className="text-2xl text-white/70 leading-relaxed">
                Founder dependency becomes the ultimate trap. If you have to answer every question, make every decision, and oversee every process, you don't own a business—you own a demanding job.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04 - WHY SYSTEMS MATTER (Light Section for Contrast) */}
      <section className="py-32 md:py-48 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row-reverse gap-16 md:gap-32">
            <motion.div {...fadeInUp} className="md:w-1/2">
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[1.1]">
                Why <span className="text-brand">Systems</span><br/> Matter
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="md:w-1/2 flex flex-col justify-center">
              <p className="text-2xl text-black/70 leading-relaxed mb-8 font-medium">
                Systems are the infrastructure that allows a business to operate without you. They transform tribal knowledge into standardized processes.
              </p>
              <p className="text-2xl text-black/70 leading-relaxed font-medium">
                When you have documented SOPs, structured departments, and clear accountability, your team knows exactly what to do and when to do it. The result is consistent execution, higher quality, and predictable scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 05 - OUR APPROACH (Dark Editorial) */}
      <section className="py-32 md:py-48 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp} className="relative h-[600px] rounded-2xl overflow-hidden w-full">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80" alt="Strategy meeting" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            <motion.div {...fadeInUp} className="pl-0 md:pl-16">
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-8">Our Approach</h2>
              <p className="text-2xl text-white/70 leading-relaxed mb-12">
                We don't just give advice. We act as your integration partners. We dive deep into your operations, identify the critical bottlenecks, and build the infrastructure required to solve them alongside your team.
              </p>
              <Button size="lg" asChild className="bg-brand text-white hover:bg-brand-dark px-10 py-7 text-lg rounded-full font-bold transition-all hover:scale-105">
                <Link href="/how-we-work">See How We Work</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
