import { fetchElements } from "@/utils/http/http";
import HeaderComponent from "./HeaderComponent/HeaderComponent.component";
import { HeaderDataType } from "@/utils/DataTypes/DataTypes";

interface DataType extends HeaderDataType {
  id: string;
}

const Header = async () => {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const headerItem = fetchItems.find(
    (item) => item.id === "Header"
  ) as DataType;

  if (!headerItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { items, icons } = headerItem;

  if (!items || !icons) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { companyLogo, hamburgerIcon, searchIcon } = icons;

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
