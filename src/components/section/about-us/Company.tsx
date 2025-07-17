import Image from "next/image";
import React from "react";
import company from "@/assets/image/Company.jpg";

const Company: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <div className="flex flex-col items-center justify-center gap-5 p-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-2xl md:text-4xl font-medium">Our Company</h1>
          <p className="text-lg md:text-xl text-gray-300 text-center font-normal max-w-7xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quam fugit blanditiis quisquam, aspernatur illo soluta, at facilis
            excepturi provident qui voluptates architecto praesentium neque rem
            eum ipsa placeat fuga?
          </p>
        </div>
        <div className="relative w-full h-[45rem] bg-gray-200 rounded-2xl">
          <Image
            src={company}
            alt="gambar"
            loading="lazy"
            about="Company Image"
            className="absolute inset-0 w-full h-full rounded-2xl object-cover object-bottom shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
