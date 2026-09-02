"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "B2B SaaS Agency",
      industry: "Marketing Services",
      problem: "Founder was working 80-hour weeks managing 15 clients. Growth completely stalled due to operational capacity.",
      system: "Built a fully autonomous Account Management department and standardized fulfillment SOPs.",
      outcome: "Scaled to 45 clients within 6 months while the founder completely exited day-to-day fulfillment.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80",
    },
    {
      client: "Specialized Accounting Firm",
      industry: "Financial Services",
      problem: "No standardized onboarding or delivery. Every client required bespoke, manual work from the senior partners.",
      system: "Installed strict operational systems, automated client onboarding workflows, and restructured the junior team.",
      outcome: "Increased profit margins by 35% and reduced partner workload by 40 hours a week.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base">Results</div>
            <h1 className="text-4xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8 uppercase">
              The <span className="text-white/40">Proof.</span>
            </h1>
            <p className="text-lg md:text-3xl text-white/60 font-medium max-w-4xl leading-relaxed mt-12 mx-auto">
              We don't deal in theory. We build actual infrastructure that generates measurable scale, reclaims founder time, and transforms chaotic businesses into predictable machines.
            </p>
            <p className="text-sm md:text-base text-brand font-medium max-w-2xl leading-relaxed mt-8 mx-auto uppercase tracking-widest border border-brand/20 bg-brand/5 py-3 px-6 rounded-lg">
              Note: The case studies presented below are illustrative examples of the systems we build. Results vary by business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 - CASE STUDIES LIST */}
      <section className="py-24 bg-[#030303]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col gap-32">
            {caseStudies.map((study, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image src={study.image} alt={study.client} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-4 text-sm">{study.industry}</div>
                  <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase mb-12 leading-tight">
                    {study.client}
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="pl-6 border-l-2 border-white/10">
                      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-2">The Problem</h3>
                      <p className="text-lg md:text-xl text-white/80">{study.problem}</p>
                    </div>
                    
                    <div className="pl-6 border-l-2 border-brand">
                      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-brand mb-2">The Infrastructure Built</h3>
                      <p className="text-lg md:text-xl text-white/90 font-medium">{study.system}</p>
                    </div>

                    <div className="pl-6 border-l-2 border-white/10">
                      <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 mb-2">The Outcome</h3>
                      <p className="text-lg md:text-xl text-white/80">{study.outcome}</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 - FINAL CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-white text-black overflow-hidden py-32 mt-32">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            BECOME OUR NEXT <br/>
            <span className="text-brand">CASE STUDY.</span>
          </h2>
          <Button size="lg" asChild className="bg-black text-white hover:bg-black/90 px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
