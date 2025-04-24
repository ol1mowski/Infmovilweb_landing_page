import { type FooterDataType } from "@/Types/DataTypes";

import FooterComponent from "./Footer-Component/Footer.component";

async function Footer() {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/footer", {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Fetching failed with status ${response.status}`);
    }

    const fetchedItems: FooterDataType = await response.json();

    if (!fetchedItems.length) {
      throw new Error("No data received.");
    }

    const { companyInfoData, items } = fetchedItems[0];

    if (!companyInfoData || !items) {
      throw new Error("Missing required properties.");
    }

    const { title, description } = companyInfoData;

    return <FooterComponent title={title} description={description} items={items} />;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return <FooterComponent title="Error" description="Could not load data." items={[]} />;
  }
}

export default Footer;