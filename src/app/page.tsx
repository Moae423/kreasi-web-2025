import Clients from "@/components/section/Clients";
import Hero from "@/components/section/Hero";
import Promote from "@/components/section/Promote";
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
      <section id="clients" className=" ">
        <Clients />
      </section>
      <section id="services" className=" min-h-screen">
        <Services />
      </section>
      <section id="works" className=" min-h-screen bg-[#000000]">
        <Works />
      </section>
      <section id="promote" className="bg-[#000000]">
        <Promote />
      </section>
    </div>
  );
}
