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
                <a
                  className={s.header__navMenu__items__item}
                  href="https://oliwiermarkiewicz.netlify.app/"
                  target="_blank"
                >
                  O Autorze
                </a>
              </li>

              <li>
                {" "}
                <a
                  className={s.header__navMenu__items__item}
                  href="https://it.pracuj.pl/praca"
                  target="_blank"
                >
                  Praca w IT
                </a>
              </li>
            </ul>
          </div>
          <SearchSetion />
        </section>
        <HamburgerLogo />

        {/* Hamburger Menu */}
      </header>
    </>
  );
};

export default Header;
