import s from "./Header.component.module.scss";
import HamburgerLogo from "./HamburgerLogo/HamburgerLogo.component";

import logo from "@/assets/images/logo.jpeg";

import SearchSetion from "./SearchSection/SearchSetion";
import Image from "next/image";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper/HeaderAnimationWrapper.component";

const Header = () => {
  return (
    <>
      <HeaderAnimationWrapper stickyClass={s.sticky} normalClass={s.header}>
        <section className={s.header__logoSection}>
          <Image src={logo} alt="logo of company" width={100} height={100} />
        </section>
        <section className={s.header__navMenu}>
          <div className={s.header__navMenu__nav}>
            <ul className={s.header__navMenu__items}>
              <li className={s.header__navMenu__items__item}>Home</li>
              <li className={s.header__navMenu__items__item}>
                {" "}
                Sobre Nosotros
              </li>
              <li className={s.header__navMenu__items__item}> Servicios </li>
              <li className={s.header__navMenu__items__item}> Contacto</li>
            </ul>
            <SearchSetion />
          </div>
        </section>
        <HamburgerLogo />
      </HeaderAnimationWrapper>
    </>
  );
};

export default Header;
