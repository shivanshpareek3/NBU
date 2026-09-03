"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { OUTCOMES } from "@/data/outcomes"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)
  const [error, setError] = React.useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)
    } catch (err) {
      setError("An error occurred while submitting your enquiry. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      
      {/* 01 - HERO SECTION */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-32 bg-[#030303] flex flex-col justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-start max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="font-semibold tracking-[0.2em] uppercase text-brand mb-6 text-sm md:text-base border-l-2 border-brand pl-4">Consultation</div>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-heading font-extrabold leading-[0.9] tracking-tighter text-white mb-8 uppercase">
              LET'S BUILD <br/>
              <span className="text-white/40">YOUR BUSINESS.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 02 - CONTACT FORM & DETAILS */}
      <section className="py-24 bg-[#030303] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            
            {/* Contact Details Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-1/3 space-y-16"
            >
              <div>
                <p className="text-2xl text-white/60 font-medium leading-relaxed mb-12">
                  Tell us where your business is stuck. We'll help you identify the exact infrastructure required to remove you from the bottlenecks and scale.
                </p>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="font-semibold uppercase tracking-[0.2em] text-sm text-brand mb-4">Direct Email</h3>
                  <a href="mailto:join@nobooksuniversity.com" className="text-xl md:text-2xl font-heading font-bold hover:text-brand transition-colors break-words">
                    join@nobooksuniversity.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-[#0a0a0a] p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-32 relative z-10">
                    <div className="w-24 h-24 bg-brand/20 text-brand rounded-full flex items-center justify-center mb-6">
                      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold font-heading uppercase tracking-tight">Application Received</h3>
                    <p className="text-xl text-white/60 max-w-md">Your operational audit request has been securely submitted. Our team will review your details and contact you shortly.</p>
                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                      Submit Another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="firstName" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">First Name *</label>
                        <input required type="text" id="firstName" name="firstName" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors" />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="lastName" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Last Name *</label>
                        <input required type="text" id="lastName" name="lastName" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label htmlFor="email" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Business Email *</label>
                        <input required type="email" id="email" name="email" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors" />
                      </div>
                      <div className="space-y-3">
                        <label htmlFor="phone" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Phone Number</label>
                        <input type="tel" id="phone" name="phone" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="businessName" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Business Name</label>
                      <input type="text" id="businessName" name="businessName" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors" />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="service" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Primary Operational Bottleneck *</label>
                      <select required id="service" name="service" defaultValue="" className="w-full h-14 px-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer">
                        <option value="" disabled>Select an area...</option>
                        {OUTCOMES.map((outcome) => (
                          <option key={outcome.slug} value={outcome.shortTitle}>
                            {outcome.shortTitle}
                          </option>
                        ))}
                        <option value="Not Sure / General Enquiry">Not Sure / General Enquiry</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">Tell us about your current situation *</label>
                      <textarea required id="message" name="message" rows={6} className="w-full p-6 border border-white/10 bg-[#111] text-white rounded-xl focus:outline-none focus:border-brand transition-colors resize-none" placeholder="What is breaking in your business right now?" />
                    </div>

                    {error && <p className="text-red-500 text-sm font-medium bg-red-500/10 p-4 rounded-lg">{error}</p>}

                    <Button type="submit" disabled={isSubmitting} className="w-full h-16 text-xl font-bold bg-white text-black hover:bg-white/90 rounded-full transition-all hover:scale-[1.02]">
                      {isSubmitting ? "Sending..." : "Get in Touch"}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
