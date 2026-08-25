"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white selection:bg-brand selection:text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base">No Books University</div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
              ABOUT <br/>
              <span className="text-white/40">US.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 - FULL BLEED CINEMATIC IMAGE */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }} 
          whileInView={{ scale: 1 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center filter grayscale contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent" />
        </motion.div>
      </section>

      {/* 03 - WHAT WE DO (Editorial Layout) */}
      <section className="py-32 md:py-48 bg-[#030303]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <motion.div {...fadeInUp} className="md:w-5/12">
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[1.1]">
                What We <span className="text-brand">Do</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInUp} className="md:w-7/12 flex flex-col justify-center space-y-8">
              <p className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed">
                No Books University installs a client-acquisition system inside founder-led service businesses — the kind of business where the founder is still closely involved in getting and closing clients, doing work that deserves a real ticket size, but without a reliable, repeatable way to bring in new high-value clients month after month.
              </p>
              <p className="text-xl text-white/60 leading-relaxed font-light">
                We don't run your ads for you as an agency, and we don't hand you a library of videos and wish you luck. We work directly inside your business — your ad accounts, your lead flow, your sales process — and install the specific system that gets you qualified conversations with people who can actually afford what you sell, consistently, not as a one-off spike.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 04 - WHO WE WORK WITH (Light Section for Contrast) */}
      <section className="py-32 md:py-48 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
            
            <motion.div {...fadeInUp} className="lg:w-1/2">
              <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[1.1] mb-12">
                Who We <br/><span className="text-brand">Work With</span>
              </h2>
              <p className="text-2xl text-black/80 leading-relaxed mb-10 font-medium">
                We work with founder-led service businesses that meet a specific bar:
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-start">
                  <span className="text-brand mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="text-xl text-black/70 font-medium">Monthly revenue of ₹5 lakh or more.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="text-xl text-black/70 font-medium">An average ticket size of ₹50,000 or more per client.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand mr-4 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="text-xl text-black/70 font-medium">A founder or leadership team ready to be hands-on during installation — this is not a hands-off, set-and-forget service.</span>
                </li>
              </ul>
              
              <div className="bg-black/5 p-8 border-l-4 border-black">
                <p className="text-lg text-black/80 leading-relaxed font-medium mb-4">
                  We <span className="font-bold underline decoration-brand decoration-2 underline-offset-4">do not</span> work with coaches, course creators, or infopreneurs. Our system is built for businesses that deliver a real service to real clients at a real price — interior design studios, marketing and creative agencies, IT and AI services firms, event companies, recruitment firms, and businesses of a similar shape.
                </p>
                <p className="text-lg text-black/80 leading-relaxed font-medium">
                  If you're not sure whether your business fits, the 1-1 session is exactly where we figure that out together, honestly — including telling you if we're not the right fit, before you spend anything beyond the session fee.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="lg:w-1/2 w-full">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1600&q=80" alt="Professional service" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover grayscale contrast-125" />
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* 05 - WHY NO BOOKS UNIVERSITY & STRUCTURE (Dark Grid Layout) */}
      <section className="py-32 md:py-40 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">Why "No Books<br/>University"</h2>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                The name is a statement of how we work: no textbooks, no theory-heavy modules, no sitting through content you'll never use. We install a working system directly inside your business, and you learn it by watching it run and operate inside your own operations — not by studying it on the side.
              </p>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-8">How We're<br/>Structured</h2>
              <p className="text-xl text-white/70 leading-relaxed font-light">
                No Books University is a sole proprietorship operated by [PROPRIETOR NAME], registered at [REGISTERED ADDRESS], [CITY], [STATE], India (GSTIN: [GSTIN]). It is a separate business from any other venture the proprietor is involved with, and this website, these policies, and every commitment on this site apply to No Books University alone.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="w-full bg-[#111] p-12 md:p-16 border border-white/10 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand mr-4 flex-shrink-0"></span>
                  Our Commitment
                </h2>
                <p className="text-xl text-white/70 leading-relaxed font-light">
                  We say what we mean in our guarantees, and we mean exactly what's written in our Performance Commitment and Refund and Cancellation Policy — not more, not less. If you do your part, we do ours until the outcome is delivered.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center md:justify-end w-full mt-8 md:mt-0">
                 <Button size="lg" asChild className="bg-brand text-white hover:bg-brand-dark px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105 w-full md:w-auto">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  )
}
