import { fetchElements } from "@/utils/http/http";
import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";
import { HeaderBarDataType } from "@/utils/DataTypes/DataTypes";

interface DataType extends HeaderBarDataType {
  id: string;
}

async function HeaderBarFetch() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const headerBarItem = fetchItems.find(
    (item) => item.id === "HeaderBar"
  ) as DataType;

  if (!headerBarItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { companyContact, icons } = headerBarItem;

  if (!companyContact || !icons) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  return (
    <HeaderInfoBarComponent companyContact={companyContact} icons={icons} />
  );
}

export default HeaderBarFetch;
