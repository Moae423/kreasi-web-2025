import React from "react";
import { Button } from "./ui/button";
import { dataNavbar } from "@/lib/data";
import { LuMenu } from "react-icons/lu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex fixed top-0 left-0 right-0 z-10  items-center justify-between bg-white text-black px-[2rem] py-[1rem] ">
      <div className="block md:hidden">
        <LuMenu />
      </div>
      <h1 className="text-md md:text-2xl font-semibold">Kreasi Advertising</h1>
      <ul className="hidden md:flex items-center justify-center gap-5">
        {dataNavbar.map((item) => (
          <li key={item.id}>
            <a
              href={item.hash}
              className="font-medium text-gray-700 hover:underline hover:underline-offset-8 "
            >
              {item.title}
            </a>
          </li>
        ))}
        <li>
          <Link href="">
            <Button variant={"default"}>Contact Us</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
