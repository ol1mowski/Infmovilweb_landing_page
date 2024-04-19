"use client";

import { createContext } from "react";

type HamburgerClickContextType = {
  isClick: boolean;
  setClick: (click: boolean) => void;
};

const HamburgerClickContext = createContext<HamburgerClickContextType>({
  isClick: false,
  setClick: (click: boolean) => {},
});

export default HamburgerClickContext;
