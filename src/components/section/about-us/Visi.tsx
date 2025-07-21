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
      className={`${Satoshi.className} flex items-center flex-col justify-center gap-6 bg-black px-4 py-10 md:px-10 md:py-20`}
    >
      <h1 className="text-white text-2xl md:text-4xl font-medium text-center">
        &quot;Ruang Tak Pernah Diam, Ia Berbicara Lewat Visual yang
        Menggugah.&quot;
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={Billboard}
            alt="Billboard Kreasi Advertising"
            className="object-cover object-center w-full h-64 md:h-[60rem] rounded-2xl shadow-lg"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 text-white w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl font-medium">
            Visi & Misi Kreasi Advertising
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold">
            Kreasi Advertising Percaya bahwa
          </h3>

          {visi.map((item, index) => (
            <div key={index} className="flex items-start gap-2">
              <FaCheckCircle className="mt-1 min-w-[1rem]" />
              <p className="text-sm md:text-md font-normal">
                {item.description}
              </p>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-white text-base md:text-xl font-medium">
              In other words, we make sure to build the right stuff, keep things
              honest, and never get too comfortable. We do all that as one team,
              sharing triumphs and mistakes along the way.
            </p>
          </div>

          {/* WhatsApp Button (desktop only) */}
          <Link href="#" className="hidden md:block mt-4">
            <Button
              variant={"outline"}
              className={`text-base font-bold text-black shadow-sm px-8 py-2 rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
            >
              <BsWhatsapp className="mr-2" />
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Visi;
