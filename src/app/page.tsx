import Hero from "@/components/section/Hero";
import Works from "@/components/section/Works";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <section id="hero" className="bg-white">
        <Hero />
      </section>
      <section id="Works" className="bg-white">
        <Works />
      </section>
    </div>
  );
}
