import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className="bg-brand-green">
      <div className="container ">
        <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between py-20">
          <div className="text-white">
            <h1 className="text-white text-5xl ">
              Doctor<span className="font-bold">Care</span>
            </h1>
            <p className="my-3">&copy; 2025</p>
            <p>All Rights Reserved.</p>
          </div>
          <FooterIcons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
