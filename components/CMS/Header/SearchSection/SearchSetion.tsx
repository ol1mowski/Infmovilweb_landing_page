import SearchIcon from "./SearchComponents/Search-Icon-Component/SearchIcon.components";
import { type StaticImageData } from "next/image";

import searchIconI from '@/assets/icons/search.png';

const SearchSetion = ({ searchIcon }: { searchIcon: StaticImageData }) => {
  return (
    <>
      <SearchIcon searchIcon={searchIconI} />
    </>
  );
};

export default SearchSetion;
