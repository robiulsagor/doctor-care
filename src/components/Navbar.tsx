import { useState } from "react";
import useScroll from "../hooks/useScroll";

const NAV_ITEMS = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "Info",
  },
  {
    id: 2,
    name: "Services",
  },
  {
    id: 3,
    name: "Doctors",
  },
];

const Navbar = () => {
  const [active, setActive] = useState({ id: 0, name: "Home" });
  const { isScrolled } = useScroll();

  return (
    <div
      className={`w-full transition-all duration-300 z-50 h-[80px] flex items-center ${
        isScrolled
          ? "fixed top-0 left-0 bg-[#00856F] text-white shadow-lg"
          : "relative bg-transparent text-brand-green"
      }`}
    >
      <div
        className={`flex items-center justify-between w-[85%] m-auto ${
          isScrolled ? "text-white" : "text-brand-green"
        }`}
      >
        <div>
          <h2 className="text-2xl">
            Doctor
            <span
              className={` font-bold ${
                isScrolled ? "text-white" : "text-[#00856F]"
              }`}
            >
              Care
            </span>
          </h2>
        </div>
        <ul
          className={`flex gap-10 text-lg ${
            isScrolled ? "text-white" : "text-brand-green "
          }`}
        >
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className={
                item.id === active.id
                  ? `${
                      isScrolled ? "text-white" : "text-[#00856F]"
                    } font-bold relative py-3 transition-all duration-300`
                  : "relative py-3 transition-all duration-300"
              }
            >
              <span
                onClick={() => setActive(item)}
                className="cursor-pointer py-3"
              >
                {item.name}{" "}
              </span>

              {item.id === active.id && (
                <div
                  className={`absolute h-[2px] w-full left-0 bottom-0  ${
                    isScrolled ? "bg-white" : "bg-[#00856F]"
                  }`}
                ></div>
              )}
            </li>
          ))}
        </ul>
        <button
          className={`border-2  rounded-3xl px-6 py-1.5 uppercase  font-bold cursor-pointer hover:bg-[#00856F] hover:text-white transition-all duration-150
          ${
            isScrolled
              ? "text-white border-white"
              : "text-[#00856F] border-[#00856F]"
          } `}
        >
          Agendar consulta
        </button>
      </div>
    </div>
  );
};

export default Navbar;
