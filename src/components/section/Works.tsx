import { LayoutGridDemo } from "../GridPhoto";

const Works = () => {
  return (
    <div className="">
      <div className="p-8">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-xl md:text-2xl lg:text-4xl font-bold  text-white">
            Our Works
          </h1>
          <p className="text-white max-w-5xl text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio qui
            labore deserunt illum ex quidem laboriosam voluptatibus iste!
            Reprehenderit, doloremque libero atque laboriosam beatae
            consequuntur numquam qui commodi illum! Libero.
          </p>
        </div>
        <LayoutGridDemo />
      </div>
    </div>
  );
};

export default Works;
