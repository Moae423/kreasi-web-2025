import Link from "next/link";
import React from "react";
import ServicesList from "../ServicesList";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="container mx-auto">
      <div className="p-3">
        <h1 className="text-[2rem] md:text-[2.5rem] text-start md:text-center my-3 font-bold">
          Layanan Kami
        </h1>
        <p className="text-start md:text-center  max-w-3xl mx-auto my-3 text-sm md:text-base">
          Kreasi Advertising menyediakan solusi periklanan yang lengkap dan
          terintegrasi mulai dari desain kreatif, pencetakan media promosi,
          hingga pemasangan baliho, neon box, signage, dan street sign.
        </p>
        <ServicesList />
        <div className="flex items-center justify-center mt-6">
          <Link href="/services" passHref>
            <Button
              variant="ghost"
              className="hover:underline text-xl hover:text-yellow-800 cursor-pointer transition ease-in-out duration-300"
            >
              See More →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
