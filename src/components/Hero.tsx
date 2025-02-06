import useScroll from "../hooks/useScroll";
import HeroImage from "/image.png";
import WhatsApp from "/whatsapp.svg";

const Hero = () => {
  const { isScrolled } = useScroll();
  console.log(isScrolled);

  return (
    <div
      className={`grid grid-cols-6 container mx-auto ${
        isScrolled && "mt-[80px]"
      }`}
    >
      <div className="col-span-3 -mt-20 flex gap-6 flex-col justify-center">
        <div className="text-brand-green font-bold">
          BOAS-VINDAS A DOCTORCARE 👋
        </div>

        <div>
          <h1 className="text-6xl font-semibold leading-tight">
            Assistência médica simplificada para todos
          </h1>
        </div>

        <p className="text-xl text-gray-paragraph ">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>

        <button className="bg-brand-green text-white w-max flex px-4 py-3 rounded-3xl font-bold uppercase gap-2">
          <img src={WhatsApp} alt="" />
          Agende sua consulta
        </button>
      </div>
      <div className=" col-span-3  mx-auto">
        <img src={HeroImage} className="w-[450px] h-[610px] " />
      </div>
    </div>
  );
};

export default Hero;
