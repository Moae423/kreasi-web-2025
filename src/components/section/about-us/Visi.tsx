import Image from "next/image";
import React from "react";
import Billboard from "@/assets/image/Billboard.jpg";
import { Satoshi } from "@/lib/font";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

const Visi = () => {
  const visi = [
    {
      description:
        "Menciptakan karya visual yang tidak hanya terlihat, tetapi juga dirasakan",
    },
    {
      description:
        "Memberikan solusi iklan fisik yang relevan, kreatif, dan efektif untuk berbagai kebutuhan brand dan bisnis.",
    },
    {
      description:
        "Menjaga kualitas produksi dengan standar profesional, tepat waktu, dan ramah lingkungan.",
    },
    {
      description:
        "Membangun hubungan jangka panjang dengan klien melalui pelayanan yang responsif, jujur, dan inovatif.",
    },
    {
      description:
        "Terus berinovasi dalam teknologi dan desain untuk memperkuat dampak visual di ruang publik.",
    },
  ];
  return (
    <div
      className={`${Satoshi.className} flex items-center flex-col justify-center gap-3 min-h-screen bg-black p-10`}
    >
      <h1 className="text-white text-4xl font-medium text-center">
        &quot;Ruang Tak Pernah Diam, Ia Berbicara Lewat Visual yang
        Menggugah.&quot;
      </h1>
      <div className="flex items-center justify-center gap-5 my-8">
        <div className="max-w-4xl w-full">
          <Image
            src={Billboard}
            alt="Billboard Kreasi Advertising"
            className="object-cover object-center  h-[60rem] rounded-2xl "
          />
        </div>
        <div className="flex flex-col gap-3 text-white">
          <h2 className="text-2xl font-medium">
            Visi & Misi Kreasi Advertising
          </h2>
          <h3 className="text-4xl font-bold ">
            Kreasi Adveritising Percaya bahwa
          </h3>
          {visi.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <FaCheckCircle />
              <p className="my-3 text-md font-normal">{item.description}</p>
            </div>
          ))}

          <div className="max-w-3xl w-full">
            <p className="text-white text-xl font-medium">
              In other words, we make sure to build the right stuff, keep things
              honest, and never get too comfortable. We do all that as one team,
              sharing triumphs and mistakes along the way.
            </p>
          </div>
          <Link href="" className="hidden md:block">
            <Button
              variant={"outline"}
              className={`text-base font-bold text-black  shadow-sm px-8 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
            >
              <BsWhatsapp />
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Visi;
