import SearchIcon from "./SearchComponents/Search-Icon-Component/SearchIcon.components";
import { type StaticImageData } from "next/image";

const SearchSetion = ({ searchIcon }: { searchIcon: StaticImageData }) => {
  return (
    <>
      <SearchIcon searchIcon={searchIcon} />
    </>
  );
};

export default SearchSetion;
