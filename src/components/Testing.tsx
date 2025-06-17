"use client";
import billboard from "@/assets/image/Billboard.jpg";
import gambar1 from "@/assets/image/gambar1.jpg";
import streetSign from "@/assets/image/street-sign.jpg";
import neonBox from "@/assets/image/neon-box.jpg";
import Carousel from "@/components/ui/carousel";
export default function CarouselDemo() {
  const slideData = [
    {
      title: "Cetak Banner",
      src: gambar1,
    },
    {
      title: "Pemasangan Baliho",
      src: billboard,
    },
    {
      title: "Street Sign",
      src: streetSign,
    },
    {
      title: "Pemasangan Lampu Neon",
      src: neonBox,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
