import FooterComponent from "./Footer-Component/Footer.component";
import { fetchElements } from "@/utils/http/http";

async function Footer() {
  const fetchItems = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    companyInfoData: { title: string; description: string };
    items: Array<{ id: string; items: string[]; title: string }>;
  };

  const footerItem = fetchItems.find((item) => item.id === "footer");

  if (!footerItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = footerItem;

  const { companyInfoData, items } = data;

  const { title, description } = companyInfoData;

  return (
    <FooterComponent title={title} description={description} items={items} />
  );
}

export default Footer;
