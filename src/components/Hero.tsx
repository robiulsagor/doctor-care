import useScroll from "../hooks/useScroll";
import CallButton from "./CallButton";
import HeroImage from "/image.png";

const Hero = () => {
  const { isScrolled } = useScroll();
  console.log(isScrolled);

  return (
    <div
      className={`grid grid-cols-6 gap-8 lg:gap-0 container mx-auto py-10 ${
        isScrolled && "mt-[80px]"
      }`}
    >
      <div className=" text-center lg:text-left col-span-6 lg:col-span-3  flex gap-6 flex-col justify-center">
        <div className="text-brand-green font-bold">
          BOAS-VINDAS A DOCTORCARE 👋
        </div>

        <div>
          <h1 className="text-4xl md:text-5xl  xl:text-6xl font-semibold leading-tight">
            Assistência médica simplificada para todos
          </h1>
        </div>

        <p className="text-base md:text-xl  text-gray-paragraph ">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>

        {/* button */}
        <div className="mx-auto lg:mx-0 ">
          <CallButton />
        </div>
      </div>
      <div className=" col-span-6 lg:col-span-3  mx-auto">
        <img src={HeroImage} className="w-[450px] h-[610px] " />
      </div>
    </div>
  );
};

export default Hero;
