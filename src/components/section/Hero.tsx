import React from "react";
import { Button } from "../ui/button";
import HeroImage from "../HeroImage";

export default function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen  p-5">
        <div className="flex flex-col max-w-xl gap-4 flex-1">
          <h1 className="text-[2rem] md:text-[3rem] font-semibold leading-tight mt-4">
            Kreasi Visual yang Menempel di Ingatan
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Di tengah hiruk-pikuk dunia pemasaran, visibilitas adalah kunci.
            Sebagai mitra strategis dalam bidang outdoor advertising, Media
            cetak, Dan brand activation, Kami hadir untuk memastikan merek Anda
            tidak hanya terlihat tapi juga dikenang.
          </p>
          <div className="flex flex-col w-full sm:flex-row  gap-4 mt-4">
            <Button className="text-lg cursor-pointer hover:-translate-y-1 active:translate-y-0 px-6 py-3">
              Contact Us
            </Button>
            <Button
              variant="outline"
              className="text-lg cursor-pointer hover:-translate-y-1 active:translate-y-0 px-6 py-3"
            >
              Our Works
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-2xl">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
