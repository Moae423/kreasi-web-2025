import React from "react";
import Image from "next/image";
import { dataPortofolio } from "@/lib/data";
export default function PhotoWorks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 my-3 py-8">
      {dataPortofolio.map((item) => (
        <div key={item.id} className="flex flex-col justify-center ">
          <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl shadow-sm">
            <Image
              src={item.gambar}
              alt="Gambar testing"
              className="rounded-xl"
            />
          </div>
          <p className="text-center text-lg font-semibold">{item.caption}</p>
        </div>
      ))}
    </div>
  );
}
