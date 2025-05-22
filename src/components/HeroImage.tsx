import Image from "next/image";
import React from "react";
import Design from "@/assets/image/gambar4.jpg";

export default function HeroImage() {
  return (
    <div className="relative w-full max-w-6xl h-[40rem] bg-black rounded-xl shadow-xl mx-auto">
      <Image
        src={Design}
        alt="testing"
        fill
        className="object-cover rounded-xl object-right"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60rem"
      />
    </div>
  );
}
