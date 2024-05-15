import s from "./HamburgerMenu.module.scss";

import close from "@/assets/icons/close_icon.png";

import Image from "next/image";

import infmovilwebImage from "@/assets/images/infmovilweb_menuLogo.jpeg";
import ScrollLink from "@/utils/ScrollLink/ScrollLink.component";

type HamburgerMenuProps = {
  closeMenuHandler: () => void;
  items: Array<{ name: string; link: string }>;
};

function HamburgerMenuComponent({
  closeMenuHandler,
  items,
}: HamburgerMenuProps) {
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
          {items.map((item) => (
            <ScrollLink link={item.link}>
              <li className={s.hamburgerMenu__nav__items__item}>{item.name}</li>
            </ScrollLink>
          ))}
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
