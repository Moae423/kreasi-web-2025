import { Satoshi } from "@/lib/font";
import { Button } from "../ui/button";
import Testing from "@/components/Testing";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const Services = () => {
  return (
    <div className={`container mx-auto ${Satoshi.className} min-h-screen`}>
      <div className="p-8">
        <div className="flex flex-col gap-8 lg:flex-row items-center">
          <Testing />
          <div className="flex flex-col gap-5 max-w-3xl">
            <div className="flex items-center justify-between">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
                Services List
              </h1>
              <Link href="#">
                <Button className="rounded-full bg-white text-black font-semibold px-6 border border-black cursor-pointer hover:bg-black hover:text-white hover:-translate-y-1  active:translate-y-0 transition duration-150">
                  Browser All Services
                </Button>
              </Link>
            </div>
            <p className=" text-lg">
              Kami menyediakan solusi visual dan pemasangan media luar ruang
              dengan pendekatan yang strategis dan berkelas. Mulai dari desain
              hingga eksekusi, setiap detail kami kerjakan untuk memastikan
              brand Anda tampil mencuri perhatian tanpa terlihat berlebihan.
            </p>
            <div className="">
              <Link href="">
                <Button
                  className={`text-lg bg-[#f7f7f7]  text-[#000000] hover:text-white shadow-sm shadow-gray-700 py-5 px-4 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
                >
                  <BsWhatsapp />
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
