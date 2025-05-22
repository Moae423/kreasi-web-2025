import React from "react";
import PhotoWorks from "@/components/PhotoWorks";

export default function Works() {
  return (
    <div className="container mx-auto  p-6">
      <h1 className="text-[2rem] md:text-[2.5rem] font-bold ">Portofolio</h1>
      <p className="text-base">
        Setiap proyek merupakan cerminan dari hasrat kami untuk mencapai
        keunggulan, inovasi, dan perhatian terhadap detail.
      </p>
      <PhotoWorks />
    </div>
  );
}
