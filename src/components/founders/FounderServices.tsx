"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function FounderServices() {
  const services = [
    { num: "01", title: "Business Systems", href: "/services/business-systems" },
    { num: "02", title: "SOP & Process Setup", href: "/services/sop-process-setup" },
    { num: "03", title: "Marketing Department Setup", href: "/services/marketing-department-setup" },
    { num: "04", title: "Sales Department Setup", href: "/services/sales-department-setup" },
    { num: "05", title: "Hiring & Team Setup", href: "/services/hiring-team-setup" },
    { num: "06", title: "Operations Setup", href: "/services/operations-setup" },
    { num: "07", title: "Leadership & Accountability", href: "/services/leadership-accountability" },
  ];

  return (
    <section className="py-24 md:py-40 border-b border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.85] tracking-tighter mb-6">
                WHAT WE BUILD
              </h2>
              <p className="text-xl md:text-2xl text-white/50 font-light">
                The core infrastructure designed to scale your business predictably.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-4 text-brand hover:text-white uppercase font-bold tracking-[0.2em] transition-colors duration-500"
              >
                View All Services
                <div className="w-10 h-10 rounded-full border border-brand/30 flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-all duration-500">
                  <ArrowRight className="w-4 h-4 text-brand group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#030303]"
              >
                <Link
                  href={service.href}
                  className="group block h-full p-8 lg:p-12 relative overflow-hidden bg-white/[0.01] hover:bg-white/[0.04] transition-colors duration-700"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-[50px] translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="text-brand font-heading text-2xl font-bold mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {service.num}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-extrabold uppercase tracking-tight group-hover:text-brand transition-colors duration-500 mb-12 pr-4 text-balance">
                    {service.title}
                  </h3>
                  <div className="flex justify-end text-white/20 group-hover:text-brand transition-colors duration-500 mt-auto">
                    <ArrowUpRight className="w-8 h-8 group-hover:scale-125 transition-transform duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
            
            {/* Empty grid filler for aesthetic */}
            <div className="hidden xl:block bg-[#030303]">
              <div className="h-full p-8 lg:p-12 relative overflow-hidden bg-white/[0.01] flex items-center justify-center group">
                 <div className="w-20 h-px bg-white/10 group-hover:w-32 group-hover:bg-brand/50 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
