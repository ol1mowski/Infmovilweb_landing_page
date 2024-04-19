'use client'

import { useContext, useRef } from "react";

import SearchCategoryContext from "@/store/SearchCategoryContext";
import SearchIcon from "./SearchComponents/Search-Icon-Component/SearchIcon.components";
import SearchField from "./SearchComponents/Search-Field-Component/SearchField.component";

const SearchSetion = () => {
  const { setIsVisible, setSearchCategory, isVisible, searchCategory } =
    useContext(SearchCategoryContext);

  const searchCategoryInput = useRef<HTMLInputElement>(null);

  const showSearchSectionHandler = () => {
    setIsVisible(true);
  };

  const hideSearchSectionHandler = () => {
    setIsVisible(false);
  };

  const unBlurryBackgroundHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const categoryKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchCategory(e.currentTarget.value);
    }
  };

  const categoryClickHandler = () => {
    if (searchCategoryInput.current) {
      const searchValue = searchCategoryInput.current.value;

      setSearchCategory(searchValue);
    }
  };

  return (
    <>
      <SearchIcon showSearchSectionHandler={showSearchSectionHandler} />

      {isVisible ? (
        <SearchField
          searchCategoryInput={searchCategoryInput}
          unBlurryBackgroundHandler={unBlurryBackgroundHandler}
          hideSearchSectionHandler={hideSearchSectionHandler}
          categoryClickHandler={categoryClickHandler}
          categoryKeyHandler={categoryKeyHandler}
        />
      ) : null}
    </>
  );
};

export default SearchSetion;
