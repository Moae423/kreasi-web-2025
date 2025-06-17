import { Satoshi } from "@/lib/font";
import { LayoutGridDemo } from "../GridPhoto";

const Works = () => {
  return (
    <div className={`${Satoshi.className}`}>
      <div className="p-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold  text-white">
            Our Works
          </h1>
          <p className="text-white text-lg max-w-7xl text-start md:text-center">
            Di Kreasi Advertising, kami bangga menjadi mitra terpercaya dalam
            menghadirkan berbagai solusi advertising fisik yang kreatif,
            strategis, dan tepat sasaran.
          </p>
          <LayoutGridDemo />
          <p className="text-white text-lg max-w-7xl text-center">
            Dengan pengalaman lebih dari 20 tahun, kami telah membantu berbagai
            brand, UMKM, dan perusahaan nasional untuk meningkatkan visibilitas
            melalui media iklan konvensional yang berdampak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
