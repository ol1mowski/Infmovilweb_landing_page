import Image from "next/image";
import s from "./SearchIcon.components.module.scss";

import img from '@/assets/icons/search.png';

type SearchIconProps = {
  showSearchSectionHandler: () => void;
};

const SearchIcon = ({ showSearchSectionHandler }: SearchIconProps) => {
  return (
    <>
      <Image
        onClick={showSearchSectionHandler}
        className={s.search}
        width="20"
        height="20"
        src={img}
        alt="search icon"
      />
    </>
  );
};

export default SearchIcon;
