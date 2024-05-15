import s from "./Header.component.module.scss";

import HeaderAnimationWrapper from "../HeaderAnimationWrapper/HeaderAnimationWrapper.component";
import HeaderItem from "../HeaderItem/HeaderItem.component";
import SearchSetion from "../SearchSection/SearchSetion";
import HamburgerLogo from "../HamburgerLogo/HamburgerLogo.component";
import CompanyLogo from "../CompanyLogo/CompanyLogo.component";

import { type StaticImageData } from "next/image";

type HeaderComponentProps = {
  items: Array<{ name: string; link: string }>;
  companyLogo: StaticImageData;
  hamburgerIcon: StaticImageData;
  searchIcon: StaticImageData;
};

function HeaderComponent({
  items,
  companyLogo,
  hamburgerIcon,
  searchIcon,
}: HeaderComponentProps) {
  return (
    <HeaderAnimationWrapper stickyClass={s.sticky} normalClass={s.header}>
      <CompanyLogo logo={companyLogo} />
      <section className={s.header__navMenu}>
        <div className={s.header__navMenu__nav}>
          <ul className={s.header__navMenu__items}>
            {items.map((item) => (
              <HeaderItem key={item.name} item={item} />
            ))}
          </ul>
          <SearchSetion searchIcon={searchIcon} />
        </div>
      </section>
      <HamburgerLogo hamburgerIcon={hamburgerIcon} />
    </HeaderAnimationWrapper>
  );
}

export default HeaderComponent;
