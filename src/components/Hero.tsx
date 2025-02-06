import HeroImage from "/image.png";
import WhatsApp from "/whatsapp.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 pt-15">
      <div className="col-span-2 w-[90%] -mt-20 flex gap-6 flex-col justify-center">
        <div className="text-brand-green font-bold">
          BOAS-VINDAS A DOCTORCARE 👋
        </div>

        <div>
          <h1 className="text-7xl font-semibold">
            Assistência médica simplificada para todos
          </h1>
        </div>

        <p className="text-xl text-gray-paragraph  font-roboto">
          Os médicos da DoctorCare vão além dos sintomas para tratar a causa
          raiz de sua doença e proporcionar uma cura a longo prazo.
        </p>

        <button className="bg-brand-green text-white w-max flex px-4 py-3 rounded-3xl font-bold uppercase gap-2">
          <img src={WhatsApp} alt="" />
          Agende sua consulta
        </button>
      </div>
      <div className=" ">
        <img src={HeroImage} width={1000} />
      </div>
    </div>
  );
};

export default Hero;
