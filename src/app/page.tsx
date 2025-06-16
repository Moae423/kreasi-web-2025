import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Works from "@/components/section/Works";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-white"
      >
        <Hero />
      </section>
      <section id="services" className="rounded-[3rem] min-h-screen">
        <Services />
      </section>
      <section id="hero" className="rounded-t-[3rem] min-h-screen bg-[#000000]">
        <Works />
      </section>
    </div>
  );
}
