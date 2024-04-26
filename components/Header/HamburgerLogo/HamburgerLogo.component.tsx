'use client'

import s from "./HamburgerLogo.module.scss";

import Image from "next/image";
import { useContext } from "react";

import hamburger from "@/assets/icons/hamburger.png";
import HamburgerClickContext from "@/store/HamburgerClickContext";

function HamburgerLogo() {

  const { setOpen } = useContext(HamburgerClickContext);

  const openMenuHandler = () => {
    setOpen(true);
  };

  return (
    <section className={s.hamburgerSection}>
      <Image
        onClick={openMenuHandler}
        width="30"
        height="30"
        src={hamburger}
        alt="menu"
      />
    </section>
  );
}

export default HamburgerLogo;
