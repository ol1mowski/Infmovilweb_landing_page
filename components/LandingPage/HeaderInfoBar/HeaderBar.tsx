import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";
import { HeaderBarDataType } from "@/utils/DataTypes/DataTypes";

async function HeaderBarFetch() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/headerbar", {
    cache: 'no-store',
  });

  const items: HeaderBarDataType = await fetchItems.json();

  if (!items) {
    throw new Error("Fetching failed...");
  }

  const { companyContact, icons } = items[0];

  if (!companyContact || !icons) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  return (
    <HeaderInfoBarComponent companyContact={companyContact} icons={icons} />
  );
}

export default HeaderBarFetch;
