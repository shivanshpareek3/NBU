import React from "react";
import { ArrowDown } from "lucide-react";

export function FoundersStory() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.2em] text-brand uppercase mb-8">
            WHY WE BUILT NO BOOKS UNIVERSITY.
          </h2>
          
          <div className="space-y-8 text-xl md:text-3xl font-medium text-white/80 leading-relaxed mb-16">
            <p>As founder-led businesses grow, complexity increases.</p>
            <div className="flex flex-wrap gap-4 text-white font-bold">
              <span>More people.</span>
              <span>More clients.</span>
              <span>More decisions.</span>
              <span>More departments.</span>
              <span>More processes.</span>
              <span>More responsibilities.</span>
            </div>
            <p>
              Without proper systems, the founder becomes the operating system.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-16 border border-white/10 bg-white/[0.02] rounded-3xl relative overflow-hidden group">
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tight text-white/50 mb-8">
              FOUNDER-DEPENDENT
            </h3>
            
            <div className="w-16 h-16 rounded-full bg-brand/20 flex items-center justify-center mb-8 text-brand group-hover:translate-y-2 transition-transform duration-500">
              <ArrowDown className="w-8 h-8" />
            </div>
            
            <h3 className="text-5xl md:text-8xl font-heading font-extrabold uppercase tracking-tight text-brand">
              SYSTEM-DRIVEN
            </h3>
            
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
