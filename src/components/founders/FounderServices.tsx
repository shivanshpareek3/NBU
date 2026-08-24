import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FounderServices() {
  const services = [
    { num: "01", title: "Business Systems", href: "/services/business-systems" },
    { num: "02", title: "SOP & Process Setup", href: "/services/sop-process" },
    { num: "03", title: "Marketing Department Setup", href: "/services/marketing" },
    { num: "04", title: "Sales Department Setup", href: "/services/sales" },
    { num: "05", title: "Hiring & Team Setup", href: "/services/hiring" },
    { num: "06", title: "Operations Setup", href: "/services/operations" },
    { num: "07", title: "Leadership & Accountability", href: "/services/leadership" },
  ];

  return (
    <section className="py-24 md:py-32 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-4">
                WHAT WE BUILD
              </h2>
              <p className="text-xl text-white/50 max-w-lg">
                The core infrastructure designed to scale your business predictably.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand hover:text-white uppercase font-bold tracking-[0.15em] transition-colors duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block p-8 md:p-10 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500"
              >
                <div className="text-brand font-heading text-xl font-bold mb-4">
                  {service.num}
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-brand transition-colors duration-300 mb-6 pr-4">
                  {service.title}
                </h3>
                <div className="flex items-center text-white/50 group-hover:text-white transition-colors duration-300 mt-auto">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
