import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="container pb-28">
      {/* top part */}
      <div className="text-center w-[90%] md:w-[50%]  mx-auto ">
        <p className="text-brand-green font-bold uppercase mb-4">Services</p>
        <h2 className="text-4xl font-bold">
          Como podemos ajudá-lo a se sentir melhor?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-15">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
