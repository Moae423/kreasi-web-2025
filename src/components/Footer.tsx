import React from "react";
import SocialMedia from "./footer/SocialMedia";
import Image from "next/image";
import logoKreasi from "@/assets/image/logo-kreasi.png";
import { dataNavbar } from "@/lib/data";
import { Satoshi } from "@/lib/font";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image src={logoKreasi} alt="logo kreasi" className="w-24" />
        </div>
        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-300 font-medium">
          Solusi kreatif untuk brand yang ingin tampil mencuri perhatian. Kreasi
          Advertising.
        </p>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {dataNavbar.map((i) => (
            <li
              key={i.id}
              className={`text-md font-semibold ${Satoshi.className} text-[#f7f7f7] hover:text-[#000000] cursor-pointer rounded-full hover:bg-[#f7f7f7] py-1 px-3 transition ease-in-out duration-150`}
            >
              <Link href={i.hash}>{i.title}</Link>
            </li>
          ))}
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <SocialMedia />
        </ul>
      </div>
    </footer>
  );
}
