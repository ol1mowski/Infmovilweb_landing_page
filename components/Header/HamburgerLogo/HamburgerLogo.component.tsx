"use client";

import s from "./HamburgerLogo.module.scss";

import Image, { type StaticImageData } from "next/image";
import { useContext } from "react";

import HamburgerClickContext from "@/store/HamburgerClickContext";

function HamburgerLogo({ hamburgerIcon }: { hamburgerIcon: StaticImageData }) {
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
        src={hamburgerIcon}
        alt="menu"
      />
    </section>
  );
}

export default HamburgerLogo;
