import Link from "next/link";
import React from "react";
import ServicesList from "../ServicesList";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="container mx-auto">
      <div className="p-3">
        <h1 className="text-[3rem] text-center my-3 font-semibold">
          What We Provide
        </h1>
        <p className="text-center max-w-7xl mx-auto my-3">
          Kreasi Advertising menyediakan solusi periklanan yang lengkap dan
          terintegrasi — mulai dari desain kreatif, pencetakan media promosi,
          hingga pemasangan baliho, neon box, signage, dan street sign. Kami
          berkomitmen untuk membantu brand Anda tampil mencolok dan tepat
          sasaran di berbagai media, dengan kualitas terbaik dan layanan
          profesional.
        </p>
        <ServicesList />
        <div className="flex items-center justify-center ">
          <Link href="" passHref>
            <Button
              variant={"ghost"}
              className="hover:underline cursor-pointer hover:font-bold hover:text-yellow-800 transition ease-in-out duration-300 "
            >
              See More -{">"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
