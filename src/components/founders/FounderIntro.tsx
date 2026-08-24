import React from "react";
import { foundersData } from "@/data/founders";

export function FounderIntro() {
  return (
    <section className="py-24 md:py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8 text-balance">
            THE PEOPLE BEHIND THE SYSTEM.
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-16">
            No Books University helps founders and service-based businesses move
            from founder-dependent operations toward structured, system-driven
            businesses.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            {foundersData.founders.map((founder, index) => (
              <div key={founder.id} className="text-center group">
                <div className="text-2xl md:text-3xl font-heading font-bold uppercase mb-2 group-hover:text-brand transition-colors duration-300">
                  {founder.name}
                </div>
                <div className="text-sm font-bold tracking-[0.2em] text-white/50 uppercase">
                  — {founder.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
