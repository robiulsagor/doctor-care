import { useEffect, useState } from "react";
import useScroll from "../hooks/useScroll";

import SvgComp from "./SvgComp";
import FooterIcons from "./FooterIcons";

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
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className={`${isMenuOpen ? "bg-brand-green bg-opacity-50" : ""}`}>
      <div
        className={`w-full transition-all duration-300 z-50 h-[80px] flex items-center  ${
          isScrolled
            ? "fixed top-0 left-0 bg-[#00856F] text-white shadow-lg"
            : "relative bg-transparent text-brand-green"
        } 
        ${isMenuOpen && "fixed top-0 left-0 bg-[#00856F] text-white shadow-lg"}
      `}
      >
        <div
          className={`flex items-center justify-between w-[85%] h-[80px] m-auto  ${
            isScrolled ? "text-white" : "text-brand-green"
          }`}
        >
          <div className="">
            <h2 className={`text-2xl ${isMenuOpen ? "text-white" : ""}`}>
              Doctor
              <span
                className={` font-bold ${
                  isScrolled || isMenuOpen ? "text-white" : "text-[#00856F]"
                }`}
              >
                Care
              </span>
            </h2>
          </div>
          <ul
            className={` gap-10 text-lg hidden  lg:flex ${
              isScrolled ? "text-white" : "text-brand-green "
            } `}
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
            className={`hidden lg:block border-2  rounded-3xl px-6 py-1.5 uppercase  font-bold cursor-pointer hover:bg-[#00856F] hover:text-white transition-all duration-150
          ${
            isScrolled
              ? "text-white border-white"
              : "text-[#00856F] border-[#00856F]"
          } `}
          >
            Agendar consulta
          </button>

          {/* menu open btn */}
          <SvgComp
            onClick={() => setMenuOpen((prev) => !prev)}
            invert={isScrolled || isMenuOpen}
            isMenuOpen={isMenuOpen}
            path={
              isMenuOpen
                ? "M4 4L20 20M4 20L20 4"
                : "M1 9H21 M1 1H21 M9 17L21 17"
            }
          />
        </div>

        {/* for mobile menu */}
        <div
          className={`h-[calc(100vh - 80px)] w-full  fixed top-[80px] bottom-0 left-0 
            ${isMenuOpen ? "bg-brand-green " : "hidden"}`}
        >
          <ul
            className={` gap-2 fixed left-[50%] translate-x-[-50%] top-[20%] lg:hidden flex-col ${
              isScrolled ? "text-white" : "text-brand-green "
            } ${isMenuOpen ? "flex" : "hidden"}`}
          >
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                className={`flex flex-col gap-6 text-white text-lg sm:text-2xl text-center font-bold`}
              >
                <span
                  onClick={() => setActive(item)}
                  className="cursor-pointer py-3 hover:opacity-60 transition"
                >
                  {item.name}{" "}
                </span>
              </li>
            ))}
          </ul>
          <button
            className={`w-[70%] sm:w-auto absolute bottom-[35%] left-[50%] translate-x-[-50%] border-2  rounded-3xl px-6 py-1.5 uppercase  font-bold cursor-pointer  hover:bg-white hover:text-brand-green transition-all duration-150 
          `}
          >
            Agendar consulta
          </button>

          <div className="absolute bottom-24  left-[50%] translate-x-[-50%] ">
            <FooterIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
