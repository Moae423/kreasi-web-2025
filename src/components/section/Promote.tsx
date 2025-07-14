import Image from "next/image";
import React from "react";
import gambar1 from "@/assets/image/promote-image.jpg";
import { Satoshi } from "@/lib/font";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const Promote = () => {
  return (
    <div className={`relative ${Satoshi.className}`}>
      <div className="relative w-full h-[30rem]">
        <div className="absolute inset-0 bg-[#000]/50 z-10 " />
        <Image
          src={gambar1}
          alt="gambar1"
          fill
          loading="lazy"
          className="object-cover saturate-100 bg-white "
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto gap-3  absolute  inset-0 z-20">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold max-w-lg md:max-w-xl lg:max-w-7xl text-center text-white capitalize">
          Ingin Brand Anda Lebih Terlihat dan Dikenal? Saatnya Bertindak!!
        </h1>
        <p className="font-normal text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl lg:max-w-4xl text-center text-gray-300 lowercase">
          Hubungi kami sekarang dan bicarakan kebutuhan advertising kamu. Kami
          siap bantu wujudkan visibilitas yang lebih kuat untuk brand atau
          usahamu.
        </p>
        <Link href="/">
          <InteractiveHoverButton className="my-3">
            <div className="flex items-center gap-1">
              <BsWhatsapp />
              Hubungi Kami
            </div>
          </InteractiveHoverButton>
        </Link>
      </div>
    </div>
  );
};

export default Promote;
