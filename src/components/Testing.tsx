"use client";

import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Cetak Banner",
      button: "Explore Component",
      // description: "Pemasangan Baliho",
      src: "/gambar1.jpg",
    },
    {
      title: "Pemasangan Baliho",
      button: "Explore Component",
      // description: "Pemasangan Baliho",
      src: "/image/Billboard.jpg",
    },
    {
      title: "Street Sign",
      button: "Explore Component",
      // description: "testing",
      src: "/image/street-sign.jpg",
    },
    {
      title: "Pemasangan Lampu Neon",
      button: "Explore Component",
      // description: "testing",
      src: "/image/neon-box.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
