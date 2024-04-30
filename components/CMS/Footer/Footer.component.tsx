import { FooterDataType } from "@/utils/DataTypes/DataTypes";
import FooterComponent from "./Footer-Component/Footer.component";

async function Footer() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/footer", {
    cache: 'no-store',
  });

  const fetchedItems: FooterDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  const { companyInfoData, items } = fetchedItems[0];

  if (!companyInfoData || !items) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { title, description } = companyInfoData;

  return (
    <FooterComponent title={title} description={description} items={items} />
  );
}

export default Footer;
