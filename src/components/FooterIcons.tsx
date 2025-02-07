import insta from "/instagram.png";
import fb from "/facebook.png";
import youtube from "/youtube.png";

const FooterIcons = () => {
  return (
    <div className="flex items-center gap-6">
      <img
        src={insta}
        alt="instagram"
        className="cursor-pointer hover:opacity-70 transition"
      />
      <img
        src={fb}
        alt="facebook"
        className="cursor-pointer hover:opacity-70 transition"
      />
      <img
        src={youtube}
        alt="youtube"
        className="cursor-pointer hover:opacity-70 transition"
      />
    </div>
  );
};

export default FooterIcons;
