"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/data/services"

// ── Typewriter hook ──────────────────────────────────────────
function useTypewriter(text: string, startDelay = 600, speed = 55) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed("")
    setDone(false)
    const timeout = setTimeout(() => {
      let i = 0
      const id = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) { clearInterval(id); setDone(true) }
      }, speed)
      return () => clearInterval(id)
    }, startDelay)
    return () => clearTimeout(timeout)
  }, [text, startDelay, speed])

  return { displayed, done }
}

// ── Infinite marquee ─────────────────────────────────────────
const TICKER_ITEMS = ["Business Systems", "SOP Setup", "Marketing Dept", "Sales Infrastructure", "Hiring & Team", "Operations", "Leadership & KPIs", "Founder Freedom"]
function Marquee() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="overflow-hidden w-full py-4 border-t border-b border-white/10">
      <motion.div className="flex gap-0 whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8 text-xs font-bold tracking-[0.25em] uppercase text-white/25">
            {item}<span className="w-1.5 h-1.5 rounded-full bg-brand/60 shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ── Multi-image expandable fan ───────────────────────────────
const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=500&q=80", alt: "Team" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80", alt: "Systems" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&q=80", alt: "Strategy" },
  { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80", alt: "Sales" },
  { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80", alt: "Operations" },
]

function ExpandableImages({ autoExpand }: { autoExpand: boolean }) {
  const [hovered, setHovered] = useState(false)
  const expanded = hovered || autoExpand

  // Per-image positions when expanded
  const EX = [-240, -120, 0, 120, 240]
  const EY = [12,   -8,  0,  -8,  12]
  const ER = [-8,   -4,  0,   4,   8]

  // Per-image positions when stacked (slight fan)
  const SX = [5,  2, 0, -2, -5]
  const SY = [5,  2, 0, -2, -5]
  const SR = [-7, -3, 0,  3,  7]
  const SS = [0.80, 0.87, 1, 0.87, 0.80]

  return (
    <motion.div
      className="relative flex items-center justify-center mx-auto cursor-pointer"
      style={{ width: 110, height: 148, overflow: "visible" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {HERO_IMAGES.map((img, i) => (
        <motion.div
          key={i}
          className="absolute w-28 h-36 md:w-32 md:h-44 rounded-2xl overflow-hidden border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          style={{ zIndex: expanded ? HERO_IMAGES.length - Math.abs(i - 2) : HERO_IMAGES.length - i }}
          animate={{
            x: expanded ? EX[i] : SX[i],
            y: expanded ? EY[i] : SY[i],
            rotate: expanded ? ER[i] : SR[i],
            scale: expanded ? 1 : SS[i],
          }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.045 }}
          whileHover={{ scale: 1.08, zIndex: 99 }}
        >
          <img src={img.src} alt={img.alt} className="w-full h-full object-cover grayscale contrast-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {/* Brand tint on hover */}
          <motion.div
            className="absolute inset-0 bg-brand/0"
            whileHover={{ backgroundColor: "rgba(234,88,12,0.15)" }}
          />
        </motion.div>
      ))}

      {/* Hint text below (only when collapsed) */}
      <AnimatePresence>
        {!expanded && (
          <motion.span
            key="hint"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="absolute -bottom-8 text-[10px] tracking-[0.2em] uppercase text-white/25 font-bold whitespace-nowrap pointer-events-none"
          >
            hover to explore
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Home() {

  // Typewriter — two lines with a gap
  const LINE1 = "Build A Business"
  const LINE2 = "That Doesn't Depend On You."
  const { displayed: text1, done: done1 } = useTypewriter(LINE1, 400, 60)
  const { displayed: text2 } = useTypewriter(LINE2, 400 + LINE1.length * 60 + 300, 55)

  // Blinking cursor
  const [cursor, setCursor] = useState(true)
  useEffect(() => {
    const id = setInterval(() => setCursor(v => !v), 530)
    return () => clearInterval(id)
  }, [])

  // Show image after line 1 finishes
  const showImage = done1

  return (
    <div className="bg-[#030303] text-white">

      {/* ══════════════════════════════════════════
          01 · HERO — sticky, first panel
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[10] min-h-screen flex flex-col justify-between bg-[#030303] overflow-hidden">

        {/* Background: glowing orbs + dot grid only (no image) */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-brand/15 blur-[150px]"
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute bottom-0 -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-500/10 blur-[160px]"
          />
          {/* Dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 pt-28 pb-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-12"
          >
            <span className="w-8 h-px bg-brand" />
            <span className="text-brand text-[10px] font-bold tracking-[0.35em] uppercase">No Books University</span>
            <span className="w-8 h-px bg-brand" />
          </motion.div>

          {/* ── TYPEWRITER HEADLINE with inline spinning image ── */}
          <h1 className="text-center font-heading font-extrabold tracking-tight leading-tight max-w-5xl mx-auto">

            {/* Line 1 — types first */}
            <div className="text-4xl md:text-6xl lg:text-[5.5rem] text-white block mb-2 min-h-[1.2em]">
              <span>{text1}</span>
              {/* Blinking cursor — only on line 1 while it's typing */}
              {!done1 && (
                <span className={`ml-1 inline-block w-0.5 h-[0.85em] bg-brand align-middle transition-opacity duration-75 ${cursor ? "opacity-100" : "opacity-0"}`} />
              )}
            </div>

            {/* Expandable images — appear BETWEEN the two lines */}
            <AnimatePresence>
              {showImage && (
                <div className="block py-4">
                  <ExpandableImages autoExpand={false} />
                </div>
              )}
            </AnimatePresence>

            {/* Line 2 — types after line 1 finishes */}
            <div className="text-4xl md:text-6xl lg:text-[5.5rem] text-transparent bg-clip-text bg-gradient-to-r from-brand via-blue-400 to-cyan-500 block mt-2 min-h-[1.2em]">
              <span>{text2}</span>
              {/* Cursor on line 2 while it's typing */}
              {done1 && text2.length < LINE2.length && (
                <span className={`ml-1 inline-block w-0.5 h-[0.85em] bg-brand align-middle transition-opacity duration-75 ${cursor ? "opacity-100" : "opacity-0"}`} />
              )}
            </div>
          </h1>

          {/* Subtext — fades in after typing done */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: text2.length > 10 ? 1 : 0, y: text2.length > 10 ? 0 : 14 }}
            transition={{ duration: 0.9 }}
            className="mt-10 text-sm md:text-base text-white/45 font-medium max-w-xl text-center leading-relaxed"
          >
            We build the systems, teams, and operating infrastructure that turn founder-dependent businesses into structured, predictable companies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: text2.length > 20 ? 1 : 0, y: text2.length > 20 ? 0 : 16 }}
            transition={{ duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link href="/contact">
              <Button className="bg-white text-black hover:bg-white/90 px-8 py-5 text-sm rounded-full font-bold shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:scale-105 transition-all">
                Build Your Business
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-5 text-sm rounded-full font-medium hover:scale-105 transition-all">
                Explore What We Build →
              </Button>
            </Link>
          </motion.div>

          {/* Metric pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: text2.length === LINE2.length ? 1 : 0, y: text2.length === LINE2.length ? 0 : 16 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { value: "$1.5M+", label: "Revenue Generated" },
              { value: "50+", label: "Businesses Systemised" },
              { value: "5-Stage", label: "Proven Process" },
            ].map((pill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md"
              >
                <span className="text-white font-heading font-bold text-base">{pill.value}</span>
                <span className="w-px h-4 bg-white/15" />
                <span className="text-white/45 text-xs font-medium">{pill.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="relative z-10 flex flex-col items-center pb-6 gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/25 font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>

        {/* Marquee */}
        <div className="relative z-10">
          <Marquee />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          02 · THE PROBLEM — sticky, pushes over hero
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[20] min-h-screen flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-brand/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-brand" /> The Problem <span className="w-8 h-px bg-brand" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
              Your Business Shouldn't{" "}
              <span className="text-brand">Need You</span>{" "}
              For Everything.
            </h2>
            <p className="mt-10 text-lg md:text-2xl font-medium text-white/45 leading-relaxed max-w-3xl mx-auto">
              If your operations halt when you step away, you don't own a business. You own a high-stress, unpredictable job.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          03 · THE SHIFT — sticky, pushes over problem
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[30] min-h-screen flex flex-col md:flex-row bg-[#0d0d0d]">
        {/* Left — chaos */}
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-6">Phase 01</div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase text-white/30 line-through decoration-red-500/70 decoration-4">
              Founder<br />Dependent
            </h2>
            <ul className="mt-10 space-y-5 text-lg text-white/55">
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> Chaotic operations</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> Founder burnout &amp; stress</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> Revenue ceiling</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-red-500 rounded-full shrink-0" /> No exit or freedom</li>
            </ul>
          </motion.div>
        </div>
        {/* Right — system driven */}
        <div className="flex-1 p-12 md:p-24 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-15 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity" />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            <div className="text-brand text-xs font-bold tracking-[0.3em] uppercase mb-6">Phase 02</div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase text-white drop-shadow-2xl">
              System<br />Driven
            </h2>
            <ul className="mt-10 space-y-5 text-lg text-white/85 font-medium">
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-brand rounded-full shrink-0" /> Predictable growth</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-brand rounded-full shrink-0" /> Autonomous teams</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-brand rounded-full shrink-0" /> Scalable infrastructure</li>
              <li className="flex items-center gap-4"><span className="w-2 h-2 bg-brand rounded-full shrink-0" /> Founder freedom</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          04 · WHAT WE BUILD — sticky, pushes over shift
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[40] min-h-screen flex items-center bg-[#030303] py-24">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight">What We Build</h2>
            <p className="text-lg mt-4 text-white/45 max-w-2xl">
              The complete operational infrastructure required to detach the founder from day-to-day execution.
            </p>
          </motion.div>

          <div className="border-t border-white/10">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between gap-8 border-b border-white/10 py-7 hover:bg-white/[0.02] transition-colors duration-300"
                >
                  <div className="flex items-center gap-8 min-w-0">
                    <span className="text-sm font-bold text-white/20 font-heading w-8 shrink-0">0{idx + 1}</span>
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold uppercase text-white group-hover:text-brand transition-colors duration-300 tracking-tight">{service.title}</h3>
                      <p className="mt-1 text-sm text-white/40 max-w-lg group-hover:text-white/65 transition-colors duration-300">{service.shortDescription}</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:border-brand transition-all duration-300 group-hover:rotate-[-45deg]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          05 · HOW WE WORK — sticky, pushes over services
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[50] min-h-screen flex items-center bg-white text-black py-24">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase tracking-tight mb-20"
          >
            How We Work
          </motion.h2>
          <div className="grid md:grid-cols-5 gap-6">
            {["Diagnose", "Design", "Build", "Install", "Optimize"].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col border-l-2 border-black/10 hover:border-brand pl-6 transition-colors duration-300 group"
              >
                <div className="text-brand font-heading font-extrabold text-2xl mb-3 group-hover:scale-110 transition-transform origin-left">0{idx + 1}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">{step}</h3>
                <p className="text-sm text-black/55 font-medium leading-relaxed">We construct systems tailored precisely to your operational bottlenecks.</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/how-we-work">
              <Button className="bg-black text-white hover:bg-black/80 px-8 py-5 text-sm rounded-full font-bold tracking-wide hover:scale-105 transition-all">
                See The Full Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          06 · CTA — sticky, final panel
      ══════════════════════════════════════════ */}
      <section className="sticky top-0 z-[60] min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-[0.08] mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold uppercase leading-[1.05] tracking-tight">
              Stop Running<br />
              <span className="text-brand">The Business.</span>
            </h2>
            <h3 className="text-2xl md:text-4xl font-heading font-bold uppercase mt-5 text-white/40">
              Start building it.
            </h3>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-brand text-white hover:bg-brand/90 px-10 py-7 text-base rounded-full font-bold shadow-[0_0_50px_rgba(59,130,246,0.35)] hover:scale-105 transition-all">
                  Book A Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-10 py-7 text-base rounded-full font-medium hover:scale-105 transition-all">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
