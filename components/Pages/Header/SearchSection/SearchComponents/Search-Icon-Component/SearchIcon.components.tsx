import Image, { type StaticImageData } from "next/image";
import s from "./SearchIcon.components.module.scss";

const SearchIcon = ({ searchIcon }: { searchIcon: StaticImageData }) => {
  return (
    <>
      <Image
        className={s.search}
        width="20"
        height="20"
        src={searchIcon}
        alt="search icon"
      />
    </>
  );
};

export default SearchIcon;
