import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FoundersCTA() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-balance">
            BUILD THE BUSINESS. NOT JUST THE REVENUE.
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            If your business still depends on you for every process, decision
            and problem, it&apos;s time to build the infrastructure behind it.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-brand/90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              Let&apos;s Build Your Business
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/10 text-sm font-bold uppercase tracking-[0.15em] px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore What We Build
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
