import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LenisProvider from "@/components/LenisProvider";
import { Satoshi } from "@/lib/font";

export const metadata: Metadata = {
  title:
    "Kreasi Advertising - Jasa Baliho, Signage & Media Promosi Profesional",
  description:
    "Kreasi Advertising adalah perusahaan advertising di Bukittinggi yang menyediakan jasa pemasangan baliho, street sign, signboard, dan media cetak. Solusi promosi terbaik untuk bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${Satoshi.className} antialiased`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
