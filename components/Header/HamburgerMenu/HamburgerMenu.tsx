import s from "./HamburgerMenu.module.scss";

import close from "@/assets/icons/close_icon.png";

import Image from "next/image";

import infmovilwebImage from '@/assets/images/infmovilweb_menuLogo.jpeg';

const HamburgerMenuComponent = () => {
  return (
    <menu className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image width="30" height="30" src={close} alt="delete-sign" />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          <li className={s.hamburgerMenu__nav__items__item}>Home</li>{" "}
          <li className={s.hamburgerMenu__nav__items__item}>Sobre Nosotros</li>{" "}
          <li className={s.hamburgerMenu__nav__items__item}>Servicios</li>{" "}
          <li className={s.hamburgerMenu__nav__items__item}>Contacto</li>{" "}
        </ul>
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image width={200} height={70} src={infmovilwebImage} alt="infmovilweb-image" />
      </section>
    </menu>
  );
};

export default HamburgerMenuComponent;
