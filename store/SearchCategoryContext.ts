import { createContext } from "react";

type SearchCategoryContextType = {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  searchCategory: string | null;
  setSearchCategory: (value: string) => void;
};

const SearchCategoryContext = createContext<SearchCategoryContextType>({
  isVisible: false,
  setIsVisible: (value: boolean) => {},
  searchCategory: "",
  setSearchCategory: (category: string) => {},
});

export default SearchCategoryContext;
