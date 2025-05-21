import Image from "next/image";
import React from "react";
import Girl from "@/assets/image/Girl.jpg";

export default function HeroImage() {
  return (
    <div className="relative w-[60rem] h-[40rem] bg-black rounded-xl shadow-xl">
      <Image
        src={Girl}
        alt="testin"
        fill
        className="object-cover rounded-xl object-right"
      />
    </div>
  );
}
