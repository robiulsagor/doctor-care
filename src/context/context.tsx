import { createContext } from "react";

interface ScrollContextProps {
  isScrolled: boolean;
}

export const ScrollContext = createContext<ScrollContextProps | undefined>(
  undefined
);
