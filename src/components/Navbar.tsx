import React from "react";
import { Button } from "./ui/button";
import { dataNavbar } from "@/lib/data";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  return (
    // <div className="container mx-auto">
    <nav className="flex fixed top-0 left-0 right-0 z-10  items-center justify-between bg-amber-200 text-black px-[2rem] py-[1rem] ">
      <div className="block md:hidden">
        <LuMenu />
      </div>
      <h1 className="text-md md:text-2xl font-semibold">Kreasi Advertising</h1>
      <ul className="hidden md:flex items-center justify-center gap-5">
        {dataNavbar.map((item) => (
          <li key={item.id}>
            <a
              href={item.hash}
              className="font-semibold hover:underline hover:underline-offset-8 "
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:block">
        <Button>Contact Us</Button>
      </div>
    </nav>
    // </div>
  );
}
