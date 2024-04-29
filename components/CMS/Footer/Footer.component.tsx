import { FooterDataType } from "@/utils/DataTypes/DataTypes";
import FooterComponent from "./Footer-Component/Footer.component";
import { fetchElements } from "@/utils/http/http";

interface DataType extends FooterDataType {
  id: string;
}

async function Footer() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const footerItem = fetchItems.find(
    (item) => item.id === "footer"
  ) as DataType;

  if (!footerItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { items, companyInfoData } = footerItem;
  
  if (!items || !companyInfoData) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }
  
  const { title, description } = companyInfoData;

  return (
    <FooterComponent title={title} description={description} items={items} />
  );
}

export default Footer;
