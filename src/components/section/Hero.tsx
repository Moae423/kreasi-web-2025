import React from "react";
import { Button } from "../ui/button";
import HeroImage from "../HeroImage";

export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between min-h-screen ">
        <div className="flex flex-col max-w-xl gap-2">
          <h1 className="text-[3rem] font-semibold">
            Kreasi Visual yang Menempel di Ingatan{" "}
          </h1>
          <p className="text-[1rem]">
            Di tengah hiruk-pikuk dunia pemasaran, visibilitas adalah kunci.
            Sebagai mitra strategis dalam bidang outdoor advertising, Media
            cetak, Dan brand activation ,Kami hadir untuk memastikan merek Anda
            tidak hanya terlihat tapi juga dikenang.
          </p>
          <div className="flex items-center gap-5">
            <Button className="text-lg cursor-pointer hover:-translate-y-1 active:translate-y-0">
              Contact Us
            </Button>
            <Button className="text-lg cursor-pointer hover:-translate-y-1 active:translate-y-0">
              Our Works
            </Button>
          </div>
        </div>
        <HeroImage />
      </div>
    </div>
  );
}
