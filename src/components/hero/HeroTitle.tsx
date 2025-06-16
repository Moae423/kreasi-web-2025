import Link from "next/link";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { Satoshi, Stardom } from "@/lib/font";
import { MdCall } from "react-icons/md";
const HeroTitle = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5 py-6 px-3 bg-amber-200 rounded-2xl">
      <h1
        className={`${Stardom.className} text-2xl md:text-5xl lg:text-7xl font-bold `}
      >
        Bangun Brand Anda Bersama Kami
      </h1>
      <div className="flex flex-col">
        <p className={`${Satoshi.className} text-md font-medium my-3  `}>
          Mewujudkan komunikasi visual yang mencuri perhatian. Spesialis
          pemasangan baliho, media cetak, dan display promosi dikerjakan dengan
          presisi, disampaikan dengan pesan yang kuat.
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Link href="">
            <Button
              variant={"default"}
              className={`text-md bg-[#594302]  hover:bg-[#26261C] shadow-sm py-2   cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
            >
              <MdCall />
              Contact Us
            </Button>
          </Link>
          <Link href="">
            <Button
              variant={"default"}
              className={`text-md bg-[#594302]  hover:bg-[#26261C] shadow-sm py-2   cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
            >
              Our Works
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
