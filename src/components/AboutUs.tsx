import AboutPic from "/about.png";

const AboutUs = () => {
  return (
    <div className=" bg-brand-beige py-24">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center container">
        <div className="flex-1">
          <img src={AboutPic} className="w-[560px] " />
        </div>

        <div className="flex-1">
          <p className="text-brand-green font-semibold">SOBRE NÓS</p>
          <h2 className="text-4xl font-bold md:w-[70%] my-5 leading-tight text-gray-headline">
            Entenda quem somos e por que existimos
          </h2>
          <p className=" text-gray-paragraph text-justify">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim. Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim. Amet minim mollit non deserunt ullamco est sit
            aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
            minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default AboutUs;
