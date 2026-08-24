import React from "react";
import Image from "next/image";
import { foundersData } from "@/data/founders";

interface FounderProfileProps {
  founderId: "arpit" | "yashvardhan";
  align?: "left" | "right";
}

export function FounderProfile({ founderId, align = "left" }: FounderProfileProps) {
  const founder = foundersData.founders.find((f) => f.id === founderId);

  if (!founder) return null;

  const isLeft = align === "left";

  return (
    <section className="py-24 md:py-32 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`flex flex-col ${
            isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-16 lg:gap-24 items-start`}
        >
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div
              className={`absolute -bottom-6 ${
                isLeft ? "-right-6" : "-left-6"
              } w-32 h-32 bg-brand/20 blur-[50px] -z-10`}
            />
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-8">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold uppercase leading-[0.9] tracking-tight mb-4">
              {founder.name}
            </h2>
            <h3 className="text-brand font-bold tracking-[0.2em] uppercase text-xl mb-16">
              {founder.role}
            </h3>

            {/* Bio Section */}
            <div className="mb-16">
              <h4 className="text-sm font-bold tracking-[0.15em] text-white/50 uppercase mb-6">
                {founder.bio.heading}
              </h4>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                {founder.bio.paragraphs.map((p, i) => (
                  <p key={i}>
                    {p || `[Editable biography paragraph ${i + 1} for ${founder.name}. Provide details about experience, education, and achievements here.]`}
                  </p>
                ))}
              </div>
            </div>

            {/* Role Section */}
            <div>
              <h4 className="text-sm font-bold tracking-[0.15em] text-white/50 uppercase mb-6">
                {founder.roleSection.heading}
              </h4>
              <div className="space-y-6 text-white/80 leading-relaxed text-lg">
                <p>
                  {founder.roleSection.vision || `[Editable vision/role description for ${founder.name}. Describe leadership philosophy, business approach, and specific focus areas inside No Books University.]`}
                </p>
                {/* Additional fields can be mapped here if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
