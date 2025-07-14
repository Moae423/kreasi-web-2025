"use client";

import { Satoshi } from "@/lib/font";
import React, { useState } from "react";
import Image from "next/image";
import gambar1 from "@/assets/image/promote-image.jpg";
import gambar2 from "@/assets/image/Billboard.jpg";
import gambar3 from "@/assets/image/neon-box.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Layanan Media Cetak Profesional",
    description:
      "Sebagai tempat periklanan terpercaya di Sumatera Barat, Kreasi Advertising menyediakan layanan media cetak berkualitas untuk kebutuhan promosi bisnis Anda di Bukittinggi dan sekitarnya.",
    image: gambar1,
    cta: "Lihat Detail",
  },
  {
    title: "Jasa Pemasangan Baliho di Sumatera Barat",
    description:
      "Kreasi Advertising berasal di Bukittinggi dan ahli dalam pemasangan baliho strategis untuk menjangkau audiens luas di seluruh wilayah Sumatera Barat.",
    image: gambar2,
    cta: "Lihat Detail",
  },
  {
    title: "Pemasangan Neon Box Berkualitas",
    description:
      "Tingkatkan visibilitas bisnis Anda bersama Kreasi Advertising, tempat periklanan di Sumatera Barat yang menyediakan jasa pemasangan lampu neon box menarik dan tahan lama.",
    image: gambar3,
    cta: "Lihat Detail",
  },
  // Tambahan dummy service untuk testing
  {
    title: "Desain Branding & Visual",
    description:
      "Kreasi Advertising juga menyediakan jasa desain visual kreatif untuk branding UMKM di Bukittinggi dan Sumatera Barat.",
    image: gambar1,
    cta: "Lihat Detail",
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <div className={`px-4 py-12 ${Satoshi.className}`}>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center mb-12 text-black">
          Our Services{" "}
        </h1>

        {visibleServices.map((service, index) => (
          <Card
            key={index}
            className={`mb-12 p-6 md:p-10 shadow-xl rounded-2xl flex flex-col md:flex-row gap-8 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Gambar */}
            <div className="w-full md:w-1/2 h-[20rem] overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={250}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Teks */}
            <CardContent className="w-full md:w-1/2 text-center md:text-left space-y-4 p-0">
              <h2 className="text-2xl font-semibold text-black">
                {service.title}
              </h2>
              <p className="text-muted-foreground">{service.description}</p>
              <Button
                variant={"default"}
                className="mt-2 hover:cursor-pointer hover:-translate-y-1 active:translate-y-0 transition duration-300 text-white"
              >
                {service.cta}
              </Button>
            </CardContent>
          </Card>
        ))}

        {services.length > 3 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-[#000] hover:cursor-pointer hover:-translate-y-1 active:translate-y-0 transition duration-300 text-white rounded-full"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Lebih Banyak"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
