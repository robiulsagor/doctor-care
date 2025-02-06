const Counter = () => {
  return (
    <div className=" w-full translate-y-[-50%]">
      <div className="container bg-brand-beige mx-auto flex flex-col md:flex-row justify-between items-center md:py-12 border border-brand-green-light rounded-xl">
        <div className="flex-1 flex flex-col items-center  md:border-r-2 border-brand-green gap-1.5 py-6">
          <span className="text-4xl font-bold"> +3500</span>
          <span className="text-brand-green">Pacientes atendidos</span>
        </div>
        <div className="flex-1 flex flex-col items-center md:border-r-2 border-brand-green gap-1.5 ">
          <span className="text-4xl font-bold"> +15</span>
          <span className="text-brand-green">Pacientes atendidos</span>
        </div>
        <div className="flex-1 flex flex-col items-center gap-1.5 py-6">
          <span className="text-4xl font-bold"> +25</span>
          <span className="text-brand-green">Pacientes atendidos</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
