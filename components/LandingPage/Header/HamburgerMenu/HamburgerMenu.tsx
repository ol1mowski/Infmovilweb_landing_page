"use client";

import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import HamburgerMenuComponent from "./Hamburger-Menu-Component/Hamburger-Menu.component";

const HamburgerMenuWrapper = () => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenuComponent closeMenuHandler={closeMenuHandler}/>
      ) : null}
    </>
  );
};

export default HamburgerMenuWrapper;
