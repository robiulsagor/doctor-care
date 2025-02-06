import { ReactNode, useEffect, useState } from "react";
import { ScrollContext } from "./context";

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};
