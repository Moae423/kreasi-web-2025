import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { dataNavbar } from "@/lib/data";
import { Satoshi } from "@/lib/font";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "./ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
const DropdownMobile = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onClick={() => setOpen(!open)}>
        <GiHamburgerMenu color="#f7f7f7" className="block md:hidden" />
      </PopoverTrigger>
      <PopoverContent className="bg-black w-[23rem] my-3 mx-2">
        {dataNavbar.map((i) => (
          <li
            key={i.id}
            onClick={handleClick}
            className={`text-md my-3 font-semibold ${Satoshi.className} text-[#f7f7f7] hover:text-[#fff] cursor-pointer rounded-full  py-1 px-3 transition ease-in-out duration-150`}
          >
            <Link href={i.hash}>{i.title}</Link>
          </li>
        ))}
        <Button
          variant={"outline"}
          className={`text-xl font-semibold text-black w-full  shadow-sm px-8 py-6 cursor-pointer rounded- hover:scale-105 active:scale-100 transition duration-150  ${Satoshi.className}`}
        >
          <Link href="#" target="_blank" className="flex items-center gap-3">
            <BsWhatsapp size={30} />
            Hubungi Kami
          </Link>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default DropdownMobile;
