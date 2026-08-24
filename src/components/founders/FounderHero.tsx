import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FounderHero() {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden border-b border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <p className="text-brand font-bold tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up">
            THE PEOPLE BEHIND NO BOOKS UNIVERSITY
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 animate-fade-in-up [animation-delay:100ms] text-balance">
            BUILDING BUSINESSES THAT DON&apos;T DEPEND ON THEIR FOUNDERS.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mb-12 animate-fade-in-up [animation-delay:200ms] leading-relaxed">
            No Books University was built around a simple idea — strong
            businesses need strong systems, clear ownership, capable teams and
            structured execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:300ms]">
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

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] -z-10 translate-y-1/2" />
    </section>
  );
}
