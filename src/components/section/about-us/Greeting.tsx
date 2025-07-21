import Image from "next/image";
import React from "react";
import gambar from "@/assets/image/Billboard.jpg";
import { Satoshi } from "@/lib/font";

const Greeting = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-10 md:px-10 md:py-20">
      <div className="text-center mb-6">
        <h1 className="text-lg text-white md:text-3xl font-medium">
          Greeting To Meet You
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-white w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xl">
          <h1
            className={`${Satoshi.className} text-base md:text-2xl font-medium`}
          >
            Our Story
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold">Kreasi Advertising</h2>
          <p className="text-base md:text-xl text-gray-400 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatum accusamus
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={gambar}
            alt="Billboard"
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
