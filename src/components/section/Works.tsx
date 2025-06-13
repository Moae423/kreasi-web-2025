import React from "react";
import PhotoWorks from "@/components/PhotoWorks";
import { Button } from "../ui/button";

export default function Works() {
  return (
    <div className="container mx-auto  p-6">
      <h1 className="text-[2rem] md:text-[2.5rem] font-bold ">Portofolio</h1>
      <p className="text-base">
        Setiap proyek merupakan cerminan dari hasrat kami untuk mencapai
        keunggulan, inovasi, dan perhatian terhadap detail.
      </p>
      <PhotoWorks />
      <div className="text-center">
        <Button className="text-lg cursor-pointer hover:-translate-y-1 font-semibold  active:translate-y-0 px-6 py-3">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
