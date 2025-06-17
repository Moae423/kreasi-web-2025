"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { dataNavbar } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Satoshi } from "@/lib/font";
import { BsWhatsapp } from "react-icons/bs";
import DropdownMobile from "./DropdownMobile";

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    let lastY = window.scrollY;

    const scrollHandler = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        // Scroll down -> hide navbar
        gsap.to(navbar, { y: -100, duration: 0.15, ease: "power2.inOut" });
      } else {
        // Scroll up -> show navbar + add bg
        gsap.to(navbar, { y: 0, duration: 0.15, ease: "power4.inOut" });
      }

      // Tambah/remove background fill
      if (currentY > 50) {
        gsap.to(navbar, {
          backgroundColor: "#000000",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          duration: 0.1,
        });
      } else {
        gsap.to(navbar, {
          backgroundColor: "none",
          boxShadow: "none",
          duration: 0.1,
        });
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="flex fixed  top-0 left-0 right-0 z-50 py-6 px-8  items-center justify-between md:justify-evenly gap-5 
      transition-all duration-300"
    >
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-5">
          <DropdownMobile />
          <Link href="/">
            <h1
              className={`text-xl md:text-2xl lg:text-2xl font-bold text-[#f7f7f7] cursor-pointer hover:underline underline-offset-8 ${Satoshi.className}`}
            >
              Kreasi Advertising
            </h1>
          </Link>
        </div>
        <ul
          ref={ulRef}
          className="md:flex items-center gap-5 py-2 px-4 transition-colors duration-300 hidden "
        >
          {dataNavbar.map((i) => (
            <li
              key={i.id}
              className={`text-md font-semibold ${Satoshi.className} text-[#f7f7f7] hover:text-[#fff] cursor-pointer rounded-full hover:bg-[#000000] py-1 px-3 transition ease-in-out duration-150`}
            >
              <Link href={i.hash}>{i.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Link href="" className="hidden md:block">
        <Button
          variant={"outline"}
          className={`text-base text-black  shadow-sm px-8 cursor-pointer rounded-full hover:scale-105 active:scale-100 transition duration-150 ${Satoshi.className}`}
        >
          <BsWhatsapp />
          Hubungi Kami
        </Button>
      </Link>
    </nav>
  );
}
