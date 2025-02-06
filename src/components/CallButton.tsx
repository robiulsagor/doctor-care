import WhatsApp from "/whatsapp.svg";

const CallButton = () => {
  return (
    <button className="bg-brand-green hover:bg-brand-green-hover transition cursor-pointer text-white w-max flex px-4 py-3 rounded-3xl font-bold uppercase gap-2">
      <img src={WhatsApp} alt="" />
      Agende sua consulta
    </button>
  );
};

export default CallButton;
