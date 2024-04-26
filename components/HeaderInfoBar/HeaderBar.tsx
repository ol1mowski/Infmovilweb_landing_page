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

  const { telephoneIcon, emailIcon, shopIcon, linkedinIcon, facebookIcon } =
    icons;
  const { telephoneNumber, email } = companyContact;

  return (
    <HeaderInfoBarComponent
      telephone={telephoneNumber}
      email={email}
      telephoneIcon={telephoneIcon}
      emailIcon={emailIcon}
      facebookIcon={facebookIcon}
      linkedinIcon={linkedinIcon}
      shopIcon={shopIcon}
    />
  );
}

export default HeaderBarFetch;
