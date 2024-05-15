import s from "./HamburgerMenu.module.scss";

import close from "@/assets/icons/close_icon.png";

import Image from "next/image";

import infmovilwebImage from "@/assets/images/infmovilweb_menuLogo.jpeg";
import ScrollLink from "@/utils/ScrollLink/ScrollLink.component";

type HamburgerMenuProps = {
  closeMenuHandler: () => void;
};

function HamburgerMenuComponent({ closeMenuHandler }: HamburgerMenuProps) {
  return (
    <menu className={s.hamburgerMenu}>
      <section className={s.hamburgerMenu__close}>
        <Image
          onClick={closeMenuHandler}
          className={s.hamburgerMenu__close__icon}
          width="30"
          height="30"
          src={close}
          alt="delete-sign"
        />
      </section>
      <nav className={s.hamburgerMenu__nav}>
        <ul className={s.hamburgerMenu__nav__items}>
          <ScrollLink link={"#home"}>
            <li className={s.hamburgerMenu__nav__items__item}>Home</li>
          </ScrollLink>
          <ScrollLink link={"#about"}>
            <li className={s.hamburgerMenu__nav__items__item}>
              Sobre Nosotros
            </li>
          </ScrollLink>
          <ScrollLink link={"#services"}>
            <li className={s.hamburgerMenu__nav__items__item}>Servicios</li>
          </ScrollLink>
          <ScrollLink link={"#contact"}>
            <li className={s.hamburgerMenu__nav__items__item}>Contacto</li>
          </ScrollLink>
        </ul>
      </nav>
      <section className={s.hamburgerMenu__logo}>
        <Image
          width={200}
          height={70}
          src={infmovilwebImage}
          alt="infmovilweb-image"
        />
      </section>
    </menu>
  );
}

export default HamburgerMenuComponent;
