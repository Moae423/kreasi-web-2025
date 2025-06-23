"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import image1 from "@/assets/image/gambar1.jpg"; // statically imported image
import image2 from "@/assets/image/background-homepage.jpg"; // reuse for example, ganti sesuai kebutuhan
import Link from "next/link";
import { Button } from "../ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { Satoshi } from "@/lib/font";

const works = [
  {
    image: image1,
    service: "Pemasangan Billboard",
    client: "PT ABC",
    location: "Jl. Sudirman, Jakarta",
  },
  {
    image: image2,
    service: "Iklan Spanduk Digital",
    client: "Brand XYZ",
    location: "Jl. Merdeka, Bandung",
  },
  {
    image: image1,
    service: "Iklan Videotron",
    client: "Startup UMKM",
    location: "Jl. Diponegoro, Surabaya",
  },
  {
    image: image2,
    service: "Poster Branding",
    client: "Event Organizer",
    location: "Jl. Asia Afrika, Jakarta",
  },
  {
    image: image1,
    service: "Neon Box Advertising",
    client: "Coffee Shop Local",
    location: "Jl. Braga, Bandung",
  },
];

const Works = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = gsap.to(".marquee-item", {
        xPercent: -100 * works.length,
        repeat: -1,
        duration: works.length * 5,
        ease: "linear",
      });

      const el = marqueeRef.current;
      if (!el) return;

      // Pause on hover
      el.addEventListener("mouseenter", () => anim.pause());
      el.addEventListener("mouseleave", () => anim.resume());

      return () => {
        el.removeEventListener("mouseenter", () => anim.pause());
        el.removeEventListener("mouseleave", () => anim.resume());
        anim.kill();
      };
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="flex flex-col justify-center p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white">Our Works</h1>
        <p className="mt-2 max-w-3xl mx-auto text-gray-300">
          Kreasi Advertising bangga telah membantu berbagai klien
          mengekspresikan brand mereka melalui media luar ruang yang kreatif dan
          berdampak.
        </p>
      </div>

      <div
        className="overflow-hidden whitespace-nowrap w-full"
        ref={marqueeRef}
      >
        <div className="flex gap-8 marquee-track w-fit">
          {works.concat(works).map((item, idx) => (
            <div
              key={idx}
              className="marquee-item flex-shrink-0 bg-white text-black rounded-xl p-4 w-[400px] shadow-xl"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={item.image}
                  alt="work preview"
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
              <h2 className="mt-3 text-xl font-semibold">{item.service}</h2>
              <p className="text-sm text-gray-700">{item.client}</p>
              <p className="text-sm text-gray-600">{item.location}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center my-3">
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
    </section>
  );
};

export default Works;
