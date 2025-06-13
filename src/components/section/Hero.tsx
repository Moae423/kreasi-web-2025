import React from "react";
import { Button } from "../ui/button";
import HeroImage from "../HeroImage";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { MdWork } from "react-icons/md";

export default function Hero() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen  p-5">
        <div className="flex flex-col max-w-xl gap-4 flex-1">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold leading-tight mt-4">
            Kreasi Visual yang Menempel di Ingatan
          </h1>
          <p className="text-lg  text-gray-600 leading-relaxed">
            Di tengah hiruk-pikuk dunia pemasaran, visibilitas adalah kunci.
            Sebagai mitra strategis dalam bidang outdoor advertising, Media
            cetak, Dan brand activation, Kami hadir untuk memastikan merek Anda
            tidak hanya terlihat tapi juga dikenang.
          </p>
          <div className="flex   w-full gap-4 mt-4">
            <Link href="#works">
              <Button
                variant="default"
                className="text-xl  cursor-pointer py-6 px-6  hover:-translate-y-1 font-semibold  active:translate-y-0"
              >
                <IoCall size={25} />
                Contact Us
              </Button>
            </Link>
            <Link href="#works">
              <Button
                variant="outline"
                className="text-xl  cursor-pointer py-6 px-6  hover:-translate-y-1 font-semibold  active:translate-y-0"
              >
                <MdWork size={25} />
                Our Works
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full max-w-2xl">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
