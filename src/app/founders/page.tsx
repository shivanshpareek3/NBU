import React from "react";
import { Metadata } from "next";
import { FounderHero } from "@/components/founders/FounderHero";
import { FounderIntro } from "@/components/founders/FounderIntro";
import { FounderProfile } from "@/components/founders/FounderProfile";
import { FounderPhilosophy } from "@/components/founders/FounderPhilosophy";
import { FoundersStory } from "@/components/founders/FoundersStory";
import { FounderServices } from "@/components/founders/FounderServices";
import { FoundersCTA } from "@/components/founders/FoundersCTA";

export const metadata: Metadata = {
  title: "Founder | No Books University",
  description:
    "Meet the founder behind No Books University and the philosophy driving our approach to building structured, system-driven businesses.",
};

export default function FoundersPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white selection:bg-brand selection:text-white">
      <FounderHero />
      <FounderIntro />
      <FounderProfile founderId="arpit" align="left" />
      <FounderPhilosophy />
      <FoundersStory />
      <FounderServices />
      <FoundersCTA />
    </main>
  );
}
