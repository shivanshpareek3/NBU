import React from "react";
import Image from "next/image";
import { foundersData } from "@/data/founders";

export function FoundersTogether() {
  const { heading, image, supportingMessage } = foundersData.together;

  return (
    <section className="py-24 md:py-32 border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-8">
            {heading}
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed">
            &ldquo;{supportingMessage}&rdquo;
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative group">
          <div className="aspect-[16/9] relative overflow-hidden bg-white/5 border border-white/10">
            <Image
              src={image}
              alt="Arpit Sharma and Yashvardhan Singh"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>
          
          {/* Subtle overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
      
      {/* Background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
}
