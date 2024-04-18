import s from "./Header.component.module.scss";
import HamburgerLogo from "./HamburgerLogo/HamburgerLogo.component";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

import logo from "@/assets/images/logo.jpeg";

import SearchSetion from "./SearchSection/SearchSetion";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <section className={s.header__logoSection}>
          <Image src={logo} alt="logo of company" width={100} height={100} />
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <li className={s.header__navMenu__items__item}>Home</li>
              <li>
                {" "}
                <a className={s.header__navMenu__items__item} href="">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                {" "}
                <a className={s.header__navMenu__items__item} href="">
                  Servicios{" "}
                </a>
              </li>{" "}
              <li>
                {" "}
                <a className={s.header__navMenu__items__item} href="">
                  Contacto
                </a>
              </li>
            </ul>
            <SearchSetion />
          </div>
        </section>
        <HamburgerLogo />

        {/* Hamburger Menu */}
      </header>
    </>
  );
};

export default Header;
