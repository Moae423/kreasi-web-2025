import Image from "next/image";
import React from "react";
import Gambar from "@/assets/image/1331366.png";

export default function Hero() {
  return (
    <div className="">
      <Image
        src={Gambar}
        alt="Billboard Kreasi"
        fill
        className="object-cover"
      />
      <div className=""></div>
    </div>
  );
}
