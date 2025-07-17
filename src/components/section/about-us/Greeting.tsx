import Image from "next/image";
import React from "react";
import gambar from "@/assets/image/Billboard.jpg";
import { Satoshi } from "@/lib/font";

const Greeting = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70rem] bg-black p-10">
      <div className="text-center my-3">
        <h1 className="text-xl text-white md:text-3xl font-medium">
          Greeting To Meet You
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-10 text-white ">
        <div className="flex items-start flex-col max-w-4xl gap-2">
          <h1
            className={`${Satoshi.className} text-xl md:text-2xl font-medium`}
          >
            Our Story
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">Kreasi Advertising</h2>
          <p className="text-lg md:text-xl text-gray-400 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatum accusamus neque quaerat iusto a nemo aperiam minima, nisi
            consequatur ipsam veritatis incidunt ad nobis ratione. Asperiores
            consectetur at quia?
          </p>
        </div>
        <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={gambar}
            alt="Billboard"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
