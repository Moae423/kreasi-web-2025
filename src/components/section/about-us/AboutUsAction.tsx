import { Button } from "@/components/ui/button";
import { Satoshi } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import gambar from "@/assets/image/street-sign.jpg";

const AboutUsAction = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-center h-[40rem] bg-black text-white gap-3">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-[#000]/50 z-10 " />
        <Image
          src={gambar}
          alt="gambar"
          fill
          className="object-cover saturate-25 bg-white "
        />
      </div>
      <div className="flex flex-col items-center  gap-3 absolute z-10">
        <h1 className="text-7xl font-bold ">
          Let&apos;s Get People to Know Your Product
        </h1>
        <p className="text-3xl">
          Kami bantu kamu tampil mencolok lewat baliho, neon box, hingga media
          cetak berkelas.
        </p>
        <Link href="" className="hidden md:block">
          <Button
            variant={"outline"}
            className={`text-base text-black font-bold  shadow-sm px-8 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
          >
            <BsWhatsapp />
            Hubungi Kami
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsAction;
