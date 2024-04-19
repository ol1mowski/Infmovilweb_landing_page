import Image from "next/image";
import s from "./SearchField.module.scss";

import img from "@/assets/icons/shop.png";
import { RefObject } from "react";

type SearchFieldProps = {
  hideSearchSectionHandler: () => void;
  unBlurryBackgroundHandler: (e: React.MouseEvent<HTMLDivElement>) => void;
  categoryClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  categoryKeyHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchCategoryInput: RefObject<HTMLInputElement>;
};

function SearchField({
  hideSearchSectionHandler,
  unBlurryBackgroundHandler,
  categoryClickHandler,
  categoryKeyHandler,
  searchCategoryInput,
}: SearchFieldProps) {
  return (
    <section onClick={hideSearchSectionHandler} className={s.searchSection}>
      <div
        onClick={(e: React.MouseEvent<HTMLDivElement>) =>
          unBlurryBackgroundHandler(e)
        }
        className={s.searchSection__searchPlace}
      >
        <input
          ref={searchCategoryInput}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            categoryKeyHandler(e)
          }
          placeholder="Enter category"
          type="text"
          name="search"
          className={s.searchSection__searchPlace__inp}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            categoryClickHandler(e)
          }
          className={s.searchSection__searchPlace__btn}
        >
          <Image width="20" height="20" src={img} alt="search--v1" />
        </button>
      </div>
    </section>
  );
}

export default SearchField;
