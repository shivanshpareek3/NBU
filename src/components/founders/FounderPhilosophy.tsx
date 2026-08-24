import React from "react";

export function FounderPhilosophy() {
  const statements = [
    "SYSTEMS CREATE CLARITY.",
    "STRUCTURE CREATES FREEDOM.",
    "ACCOUNTABILITY CREATES EXECUTION.",
    "STRONG TEAMS CREATE SCALE.",
  ];

  return (
    <section className="py-24 md:py-40 bg-[#050505] border-y border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 md:gap-20">
          {statements.map((statement, index) => (
            <h2
              key={index}
              className="text-4xl md:text-7xl lg:text-8xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight text-center hover:text-brand transition-colors duration-500 cursor-default group"
            >
              {statement.split(" ").map((word, wIndex) => (
                <span
                  key={wIndex}
                  className={
                    wIndex === 0
                      ? "text-brand"
                      : "text-white/80 group-hover:text-white transition-colors duration-500"
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h2>
          ))}
        </div>
      </div>
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
    </section>
  );
}
