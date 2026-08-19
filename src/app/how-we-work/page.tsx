"use client"

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowWeWorkPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100])

  const steps = [
    {
      id: "01",
      title: "DIAGNOSE",
      description: "We don't guess. We strip your operations down to the studs. We interview your team, audit your current processes, and identify exactly where the founder dependencies are creating bottlenecks.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "02",
      title: "DESIGN",
      description: "We architect the solution. From organizational charts to specialized departmental workflows, we design the exact infrastructure required to remove you from the day-to-day execution.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "03",
      title: "BUILD",
      description: "We write the SOPs, configure the software, build the management dashboards, and structure the KPIs. We create the tangible assets that your business will run on.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "04",
      title: "INSTALL",
      description: "Systems are useless if your team ignores them. We lead the roll-out phase, training your managers, enforcing the new standards, and ensuring full team adoption.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
    },
    {
      id: "05",
      title: "OPTIMIZE",
      description: "Once installed, we measure. We track the new KPIs, identify friction points in the new workflows, and continuously refine the system until it operates flawlessly.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center text-white overflow-hidden sticky top-0 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-20 filter grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
        
        <motion.div style={{ opacity, y }} className="container mx-auto px-6 relative z-10 w-full flex flex-col items-start max-w-7xl">
          <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base border-l-2 border-brand pl-4">Methodology</div>
          <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8">
            WE DON'T JUST <br/>
            <span className="text-white/40">GIVE ADVICE.</span> <br/>
            WE BUILD THE <br/>
            SYSTEM WITH YOU.
          </h1>
        </motion.div>
      </section>

      {/* 02 - SCROLL REVEAL STAGES */}
      <div className="bg-[#030303] z-10 relative">
        {steps.map((step, idx) => (
          <section key={step.id} className="min-h-screen flex items-center py-32 border-t border-white/10 sticky top-0 bg-[#030303]">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className={`flex flex-col gap-16 md:gap-24 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                
                <div className="w-full md:w-1/2">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    viewport={{ once: true, margin: "-20%" }} 
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden"
                  >
                    <img src={step.image} alt={step.title} className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
                    <div className="absolute inset-0 bg-brand/10 mix-blend-overlay" />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: "-20%" }} 
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-brand font-heading font-bold text-6xl md:text-8xl mb-8 opacity-50">
                      {step.id}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase mb-8 leading-[1]">
                      {step.title}
                    </h2>
                    <p className="text-2xl text-white/60 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 03 - FINAL CTA */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-white text-black overflow-hidden py-32 z-20">
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center max-w-5xl">
          <h2 className="text-4xl md:text-7xl font-heading font-extrabold uppercase leading-[1] tracking-tighter mb-12">
            READY TO START THE <span className="text-brand">PROCESS?</span>
          </h2>
          <p className="text-2xl text-black/60 mb-12 max-w-3xl font-medium">
            Book a consultation to discuss your current bottlenecks and how our methodology can reconstruct your operations.
          </p>
          <Button size="lg" asChild className="bg-black text-white hover:bg-black/90 px-12 py-8 text-xl rounded-full font-bold transition-all hover:scale-105">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  )
}
