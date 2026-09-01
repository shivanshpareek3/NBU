"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("general-0")

  const faqCategories = [
    {
      title: "General",
      faqs: [
        {
          id: "general-0",
          question: "What does No Books University actually do?",
          answer: "We don't just consult; we build. We help founders and service-based businesses structure and systemize their operations by installing actual systems, SOPs, departments, team structures, and strict accountability frameworks into their company."
        },
        {
          id: "general-1",
          question: "Do you sell courses or coaching programs?",
          answer: "No. We are a strict business infrastructure consultancy. We act as your integration partners. We do not sell courses, masterminds, or generic coaching advice."
        },
        {
          id: "general-2",
          question: "Who is this service specifically for?",
          answer: "Our methodology is built primarily for founders and service-based businesses (agencies, consultancies, B2B services) that have outgrown their informal, founder-led processes and are hitting a revenue or operational ceiling."
        }
      ]
    },
    {
      title: "The Process",
      faqs: [
        {
          id: "process-0",
          question: "What does an engagement look like?",
          answer: "It is a highly structured 5-stage process: Diagnose, Design, Build, Install, and Optimize. We embed ourselves in your operations to audit the bottlenecks, design the architecture, and actually build the SOPs and workflows required."
        },
        {
          id: "process-1",
          question: "Can you help set up specific departments?",
          answer: "Yes. Our core expertise involves establishing specialized departments from scratch, including Marketing, Sales, Hiring/HR, and Operations. We build the architecture for each."
        },
        {
          id: "process-2",
          question: "Will this make my business completely founder-independent?",
          answer: "The objective is to drastically reduce unnecessary founder dependency by creating clear systems, ownership, processes, and accountability. While total detachment takes time, you will immediately step out of low-leverage, day-to-day firefighting."
        }
      ]
    }
  ]

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base">FAQ</div>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8 uppercase">
              Clarity. <br/>
              <span className="text-white/40">No Confusion.</span>
            </h1>
            <p className="text-xl md:text-3xl text-white/60 font-medium max-w-3xl leading-relaxed mt-12 mx-auto">
              Everything you need to know about our methodology, our consultancy, and how we transform chaotic businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02 - EDITORIAL FAQ ACCORDION */}
      <section className="py-24 bg-white text-black relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-24 last:mb-0">
              <h2 className="text-4xl font-heading font-extrabold uppercase mb-12 text-black/30 tracking-tight">
                {category.title}
              </h2>
              <div className="border-t-2 border-black/10">
                {category.faqs.map((faq) => {
                  const isOpen = openIndex === faq.id
                  return (
                    <div key={faq.id} className="border-b-2 border-black/10">
                      <button 
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                      >
                        <h3 className={`text-2xl md:text-4xl font-heading font-bold transition-colors duration-300 ${isOpen ? "text-brand" : "text-black group-hover:text-black/70"}`}>
                          {faq.question}
                        </h3>
                        <div className={`ml-8 w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? "border-brand bg-brand text-white rotate-45" : "border-black/20 text-black group-hover:border-black/50"}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-12 text-2xl text-black/60 leading-relaxed max-w-4xl font-medium">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 - FINAL CTA */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden py-32 border-t border-white/10">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            STILL HAVE <span className="text-brand">QUESTIONS?</span>
          </h2>
          <Button size="lg" asChild className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105 shadow-2xl">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
