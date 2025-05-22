import React from "react";
import { Button } from "./ui/button";

export default function PhotoWorks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 my-3">
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="w-[22rem] md:w-[30rem] h-[20rem] bg-gray-400 rounded-xl"></div>
        <p className="text-center text-base">Caption</p>
      </div>
      <Button className="text-lg cursor-pointer hover:-translate-y-1 font-semibold  active:translate-y-0 px-6 py-3">
        Contact Us
      </Button>
    </div>
  );
}
