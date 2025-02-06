import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-brand-green-light">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
