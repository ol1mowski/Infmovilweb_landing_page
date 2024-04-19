import s from "./HamburgerMenuComponent.module.scss";

import close from "@/assets/icons/close_icon.png";

import Image from "next/image";

const HamburgerMenuComponent = () => {
  return (
    <menu className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image width="30" height="30" src={close} alt="delete-sign" />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          <li className={s.hamburgerMenu__nav__items__item}>Home</li>{" "}
          <li className={s.hamburgerMenu__nav__items__item}>About Author</li>{" "}
          <li className={s.hamburgerMenu__nav__items__item}>Posts</li>{" "}
        </ul>
      </nav>
    </menu>
  );
};

export default HamburgerMenuComponent;
