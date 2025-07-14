import Image from "next/image";
import React from "react";
import gambar from "@/assets/image/Billboard.jpg";

const Greeting = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 min-h-screen">
      <div className="flex items-start flex-col max-w-4xl gap-2">
        <h1 className="text-xl md:text-2xl font-medium">
          Greeting To Meet You
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold">Kreasi Advertising</h2>
        <p className="text-lg md:text-xl text-gray-700 font-normal">
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
  );
};

export default Greeting;
