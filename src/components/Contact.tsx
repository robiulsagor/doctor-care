import ContactImg from "/contact.png";
import mapPin from "/map-pin.png";
import mail from "/mail.png";
import CallButton from "./CallButton";

const Contact = () => {
  return (
    <div className="container flex flex-col lg:flex-row gap-8 justify-between items-center py-20 px-10">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold lg:w-[80%]">
          Entre em contato com a gente!
        </h1>

        <div className="flex items-center mt-10 gap-2">
          <img src={mapPin} alt="" />
          <span>Bagerhat, Khulna, Bangladesh</span>
        </div>

        <div className="flex items-center mt-5 mb-8 gap-2">
          <img src={mail} alt="" />
          <span>sagor@gmail.com</span>
        </div>

        <CallButton />
      </div>
      <div>
        <img src={ContactImg} className="w-[580px]" />
      </div>
    </div>
  );
};

export default Contact;
