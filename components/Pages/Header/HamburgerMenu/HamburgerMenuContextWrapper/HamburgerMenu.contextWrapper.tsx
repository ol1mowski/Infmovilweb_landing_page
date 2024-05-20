"use client";

import { useContext } from "react";
import HamburgerClickContext from "@/store/HamburgerClickContext";
import HamburgerMenuComponent from "../Hamburger-Menu-Component/Hamburger-Menu.component";

const HamburgerMenuContextWrapper = ({ items }: {items: { name: string, link: string }[]}) => {
  const { isOpen, setOpen } = useContext(HamburgerClickContext);

  const closeMenuHandler = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen ? (
        <HamburgerMenuComponent items={items} closeMenuHandler={closeMenuHandler}/>
      ) : null}
    </>
  );
};

export default HamburgerMenuContextWrapper;
