import { Satoshi } from "@/lib/font";
import Image from "next/image";
import { dataClients } from "@/lib/data";

const Clients = () => {
  return (
    <div className={`bg-black ${Satoshi.className} p-8`}>
      <div className="">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl capitalize text-center">
            dipercaya oleh 25++ perusahaan di indonesia
          </h1>
        </div>
        <div className="grid grid-cols-3 justify-items-center md:flex items-center justify-center gap-[2rem] my-3">
          {dataClients.map((item) => (
            <div
              key={item.id}
              className="w-30 h-30 flex justify-center items-center gap-8  my-3"
            >
              <Image
                src={item.image}
                alt="logo-sampoerna"
                className="object-contain w-20 md:w-24  max-h-full max-w-full saturate-0 hover:saturate-100 transition duration-300"
                // width={80}
                // height={88}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
