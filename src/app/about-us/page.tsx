"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Satoshi } from "@/lib/font"; // opsional
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import gambar1 from "@/assets/image/promote-image.jpg";
import { BsWhatsapp } from "react-icons/bs";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#000000] text-white px-6 pt-32 pb-24 md:px-20 space-y-20"
    >
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className={`text-3xl md:text-5xl font-bold ${Satoshi.className}`}>
            Tentang Kreasi Advertising
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            repellat exercitationem perferendis dicta et neque reiciendis
            aliquam iusto, fuga fugiat consequuntur eveniet? Soluta a quaerat
            temporibus tenetur ducimus labore neque fugiat ad doloribus suscipit
            odio, harum quas beatae excepturi expedita.
          </p>
          <p className="text-gray-400 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptas cumque eveniet harum repudiandae aut ab? Vero, velit
            nesciunt! Quibusdam doloribus, sit ea odit nemo ipsam aspernatur
            facilis quidem architecto voluptatum.
          </p>
        </div>

        <div className="w-full h-[250px] md:h-[350px] relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={gambar1} // pastikan file ini ada di /public/images
            alt="Kreasi Advertising"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* VISI & MISI */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold text-center">Visi & Misi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-[#111111] border-none text-white shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Visi</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Menjadi mitra terpercaya dalam menciptakan media iklan luar
                ruang yang kreatif, efektif, dan berdampak luas.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#111111] border-none text-white shadow-lg">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Misi</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm md:text-base space-y-2">
                <li>
                  Menghadirkan solusi iklan visual yang unik dan berdaya tarik
                  tinggi.
                </li>
                <li>
                  Mendukung brand klien untuk lebih dikenal oleh masyarakat
                  luas.
                </li>
                <li>
                  Memberikan pelayanan yang cepat, ramah, dan profesional.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* NILAI PERUSAHAAN */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold text-center">Nilai-Nilai Kami</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Kreativitas", "Komitmen", "Kolaborasi"].map((value) => (
            <Card
              key={value}
              className="bg-[#1a1a1a] text-white border-none shadow-md hover:scale-[1.02] transition"
            >
              <CardContent className="p-6 space-y-2 text-center">
                <h3 className="text-lg font-semibold">{value}</h3>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pt-10">
        <Link href="" className="hidden md:block">
          <Button
            variant={"outline"}
            className={`text-base text-black  shadow-sm px-8 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
          >
            <BsWhatsapp />
            Hubungi Kami
          </Button>
        </Link>
      </section>
    </section>
  );
};

export default AboutUs;
