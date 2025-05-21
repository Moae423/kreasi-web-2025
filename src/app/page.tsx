import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <section id="hero" className="bg-white">
        <Hero />
      </section>
      <section id="Works" className="bg-white">
        <Services />
      </section>
    </div>
  );
}
