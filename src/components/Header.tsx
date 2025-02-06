import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-brand-green-light">
      <div className="w-[90%] m-auto ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Header;
