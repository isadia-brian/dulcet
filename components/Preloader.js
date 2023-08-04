import Image from "next/image";
import Loader from "./Loader";
import localFont from "next/font/local";

const ogg = localFont({
  src: "../public/fonts/ogg/Ogg-Roman.otf",
  display: "swap",
});

const Preloader = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src="/images/image3.jpg"
          alt="preloader"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-24 w-full flex justify-around">
        <p
          className={`${ogg.className} text-white text-xl  font-medium tracking-wider`}
        >
          MISS DULCET
        </p>
      </div>
      <div className="absolute w-full bottom-0 flex justify-around">
        <Loader />
      </div>
    </div>
  );
};

export default Preloader;
