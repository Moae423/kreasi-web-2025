import { dataServices } from "@/lib/data";
import Image from "next/image";
import React from "react";

export default function ServicesList() {
  return (
    <div className="flex flex-col gap-5 my-3">
      {dataServices.map((item) => (
        <div
          key={item.id}
          className="relative h-[20rem] md:h-[30rem] bg-black max-w-7xl mx-auto w-full rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
        >
          <Image
            src={item.gambar}
            alt={item.title}
            fill
            className="object-cover"
            quality={100}
          />

          <div className="flex flex-col justify-end h-full w-full p-8 relative z-10 bg-black/50">
            <div className="flex items-center justify-between">
              <h1 className="text-white font-semibold text-2xl">
                {item.title}
              </h1>
              <h2 className="text-white hidden md:flex font-normal text-2xl max-w-2xl">
                {item.subTitle}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
