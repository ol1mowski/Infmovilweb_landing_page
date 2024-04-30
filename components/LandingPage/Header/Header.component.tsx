import HeaderComponent from "./HeaderComponent/HeaderComponent.component";
import { HeaderDataType } from "@/utils/DataTypes/DataTypes";

const Header = async () => {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/header", {
    cache: "no-store",
  });

  const fetchedItems: HeaderDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  const { icons, items } = fetchedItems[0];

  if (!items || !icons) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { companyLogo, searchIcon, hamburgerIcon } = icons;

  return (
    <>
      <HeaderComponent
        items={items}
        companyLogo={companyLogo}
        searchIcon={searchIcon}
        hamburgerIcon={hamburgerIcon}
      />
    </>
  );
};

export default Header;
