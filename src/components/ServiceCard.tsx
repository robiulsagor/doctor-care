import tick from "/tick.png";

const ServiceCard = () => {
  return (
    <div className="border border-brand-green-light p-4 rounded-lg ">
      <img src={tick} alt="" />
      <p className="text-brand-green font-bold my-3 text-xl">
        Problemas digestivos
      </p>
      <p className="text-gray-paragraph text-base font-medium">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim.
      </p>
    </div>
  );
};

export default ServiceCard;
