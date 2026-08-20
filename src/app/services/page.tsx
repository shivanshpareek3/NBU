"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/data/services"

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const serviceImages = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white" onMouseMove={handleMouseMove}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 bg-[#030303] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-brand" />
              <span className="text-brand text-xs font-bold tracking-[0.3em] uppercase">Capabilities</span>
            </div>

            {/* Headline — balanced, not insanely huge */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl">
              The Infrastructure
              <br />
              <span className="text-white/35">Behind Your Business.</span>
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base md:text-lg text-white/50 font-medium max-w-xl leading-relaxed"
            >
              We don't sell consulting hours. We install exact operating departments, teams, and accountability structures required to scale.
            </motion.p>
          </motion.div>
        </div>

        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand/5 blur-[120px]" />
      </section>

      {/* ─── SERVICES LIST ──────────────────────────────────────── */}
      <section className="relative bg-[#030303] pb-32">
        <div className="container mx-auto px-6 max-w-7xl">

          {/* List */}
          <div className="border-t border-white/10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border-b border-white/10 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Link href={`/services/${service.slug}`} className="flex items-center justify-between gap-8 py-8 md:py-10">
                  {/* Left: index + title */}
                  <div className="flex items-center gap-8 md:gap-12 min-w-0">
                    <span className="text-sm font-bold text-white/20 font-heading w-8 shrink-0">0{idx + 1}</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold uppercase tracking-tight leading-none text-white group-hover:text-brand transition-colors duration-300">
                      {service.title}
                    </h2>
                  </div>

                  {/* Right: description (hidden on mobile) + arrow */}
                  <div className="hidden md:flex items-center gap-8 shrink-0 w-[40%] justify-end">
                    <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors duration-300 text-right max-w-xs leading-relaxed line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-400 group-hover:rotate-[-45deg]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* Hover highlight bar */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-0.5 bg-brand origin-bottom"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: hoveredIndex === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Cursor-tracking image (fixed, follows mouse) ─────── */}
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              className="hidden lg:block fixed pointer-events-none z-[999] w-56 h-64 rounded-xl overflow-hidden shadow-2xl"
              style={{ left: mousePos.x + 24, top: mousePos.y - 80 }}
              initial={{ opacity: 0, scale: 0.88, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.88, rotate: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <img
                src={serviceImages[hoveredIndex]}
                alt=""
                className="w-full h-full object-cover grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-32 border-t border-white/10 bg-[#0a0a0a] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[300px] bg-brand/6 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold uppercase leading-tight tracking-tight mb-10">
            Your Business Is Only As Strong<br />
            As Its <span className="text-brand">Weakest System.</span>
          </h2>
          <Button
            size="lg"
            asChild
            className="bg-white text-black hover:bg-white/90 px-10 py-6 text-base rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:scale-105 transition-all"
          >
            <Link href="/contact">Diagnose Your Infrastructure</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
