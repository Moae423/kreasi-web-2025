import Image from "next/image";
import React from "react";
import company from "@/assets/image/Company.jpg";

const Company: React.FC = () => {
  return (
    <div className="h-full bg-black text-white px-4 py-10 md:px-10 md:py-20">
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-3 text-center max-w-4xl">
          <h1 className="text-xl md:text-4xl font-medium">Our Company</h1>
          <p className="text-base md:text-xl text-gray-300 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quam fugit blanditiis quisquam, aspernatur illo soluta, at facilis
            excepturi provident qui voluptates architecto praesentium neque rem
            eum ipsa placeat fuga?
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-72 md:h-[45rem] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={company}
            alt="Company Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
