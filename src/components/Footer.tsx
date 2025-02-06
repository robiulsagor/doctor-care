import insta from "/instagram.png";
import fb from "/facebook.png";
import youtube from "/youtube.png";

const Footer = () => {
  return (
    <div className="bg-brand-green">
      <div className="container ">
        <div className="flex justify-between py-20">
          <div className="text-white">
            <h1 className="text-white text-5xl ">
              Doctor<span className="font-bold">Care</span>
            </h1>
            <p className="my-3">&copy; 2025</p>
            <p>All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <img src={insta} alt="instagram" />
            <img src={fb} alt="facebook" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
