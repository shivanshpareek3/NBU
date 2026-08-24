"use client";

import React from "react";
import Image from "next/image";
import { foundersData } from "@/data/founders";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FounderProfileProps {
  founderId: "arpit" | "yashvardhan";
  align?: "left" | "right";
}

export function FounderProfile({ founderId, align = "left" }: FounderProfileProps) {
  const founder = foundersData.founders.find((f) => f.id === founderId);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  if (!founder) return null;

  const isLeft = align === "left";

  return (
    <section ref={containerRef} className="py-24 md:py-40 border-b border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-16 lg:gap-24 items-center`}
        >
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative group"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 rounded-sm">
              <motion.div 
                style={{ y: imageY }} 
                className="w-full h-[120%] -top-[10%] relative"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 filter saturate-50 group-hover:saturate-100"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </div>
            {/* Decorative element */}
            <div
              className={`absolute -bottom-8 ${
                isLeft ? "-right-8" : "-left-8"
              } w-40 h-40 bg-brand/30 blur-[70px] -z-10 group-hover:bg-brand/50 transition-colors duration-700`}
            />
          </motion.div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center lg:py-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.85] tracking-tighter mb-6"
            >
              {founder.name}
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-brand font-bold tracking-[0.25em] uppercase text-xl md:text-2xl mb-16"
            >
              {founder.role}
            </motion.h3>

            {/* Bio Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16 relative pl-6 border-l border-brand/30"
            >
              <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-white/20"></span>
                {founder.bio.heading}
              </h4>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg md:text-xl font-light">
                {founder.bio.paragraphs.map((p, i) => (
                  <p key={i}>
                    {p || `[Editable biography paragraph ${i + 1} for ${founder.name}. Provide details about experience, education, and achievements here.]`}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Role Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative pl-6 border-l border-brand/30"
            >
              <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-white/20"></span>
                {founder.roleSection.heading}
              </h4>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg md:text-xl font-light">
                <p>
                  {founder.roleSection.vision || `[Editable vision/role description for ${founder.name}. Describe leadership philosophy, business approach, and specific focus areas inside No Books University.]`}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
