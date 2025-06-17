"use client";
import gambar1 from "@/assets/image/background-homepage.jpg";
import { Satoshi } from "@/lib/font";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function Hero() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [jam, setJam] = useState("");

  useEffect(() => {
    const now = new Date();

    const getDay = now.toLocaleDateString("id-ID", { weekday: "long" });
    setCurrentDay(getDay);

    setInterval(() => {
      const now = new Date();
      const getClock = now.toLocaleTimeString("id-ID", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setJam(getClock);
    });

    const formattedDate = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className={`min-h-screen  relative ${Satoshi.className}  bg-white`}>
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[#000]/50 z-10 " />
        <Image
          src={gambar1}
          alt="gambar1"
          fill
          className="object-cover saturate-25 bg-white "
        />
      </div>
      <div className="flex flex-col p-8 justify-center max-w-7xl mx-auto absolute inset-0 z-20">
        <div className="flex items-center gap-3">
          <p className="bg-[#fff] p-2 rounded-full font-semibold ">
            {currentDay}
          </p>
          <p className="bg-[#fff] p-2 rounded-full font-semibold ">{jam}</p>
          <p className="text-white font-semibold">{currentDate}</p>
        </div>
        <div className="block">
          <div className="max-w-5xl ">
            <h1
              className={` text-xl md:text-3xl my-3 lg:text-5xl font-semibold  text-white ${Satoshi.className}`}
            >
              Hadirkan visual yang berbicara lebih lantang dari kata-kata.
            </h1>
            <p className={`text-md text-gray-300  ${Satoshi.className}`}>
              Perkuat identitas visual bisnis Anda dengan solusi kreatif dan
              strategis. Didukung tim profesional, teknologi mutakhir, dan
              pengalaman bertahun-tahun dalam dunia periklanan luar ruang.
            </p>
          </div>
          <Link href="">
            <Button
              className={`text-lg bg-[#f7f7f7]  text-[#000000] hover:text-white shadow-sm py-5 px-4 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 my-3 ${Satoshi.className}`}
            >
              <BsWhatsapp />
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
