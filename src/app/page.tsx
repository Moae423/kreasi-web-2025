import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import Works from "@/components/section/Works";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <section id="hero" className="bg-white">
        <Hero />
      </section>
      <section id="services" className="bg-white">
        <Services />
      </section>
      <section id="works" className="bg-white">
        <Works />
      </section>
    </div>
  );
}
