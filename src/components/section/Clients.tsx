"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Satoshi } from "@/lib/font";
import { dataClients } from "@/lib/data";

const Clients = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [showAllClientsMobile, setShowAllClientsMobile] = useState(false);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "linear",
      });

      const el = marqueeRef.current?.parentElement;
      if (el) {
        el.addEventListener("mouseenter", () => tl.pause());
        el.addEventListener("mouseleave", () => tl.resume());
      }

      return () => tl.kill();
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  const duplicatedClients = [...dataClients, ...dataClients];
  const initialClientCount = 6;
  const mobileClientsToShow = showAllClientsMobile
    ? dataClients
    : dataClients.slice(0, initialClientCount);

  return (
    <div className={`bg-black ${Satoshi.className} p-8`}>
      <div className="text-center mb-8">
        <h1 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl capitalize">
          dipercaya oleh 25++ perusahaan di indonesia
        </h1>
      </div>

      {/* Mobile grid with view more */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-6">
          {mobileClientsToShow.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              <Image
                src={item.image}
                alt={`logo-${item.id}`}
                className="w-20 h-20 object-contain saturate-0 hover:saturate-100 transition"
              />
            </div>
          ))}
        </div>

        {dataClients.length > initialClientCount && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAllClientsMobile(!showAllClientsMobile)}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition duration-300"
            >
              {showAllClientsMobile
                ? "Lihat Lebih Sedikit"
                : "Lihat Lebih Banyak"}
            </button>
          </div>
        )}
      </div>

      {/* Desktop GSAP marquee */}
      <div className="hidden md:block overflow-hidden mt-8">
        <div className="flex w-max gap-16" ref={marqueeRef}>
          {duplicatedClients.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              className="w-24 h-24 flex justify-center items-center"
            >
              <Image
                src={item.image}
                alt={`logo-${item.id}`}
                className="w-full h-full object-contain saturate-0 hover:saturate-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
