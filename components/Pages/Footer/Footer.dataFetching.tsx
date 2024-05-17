import { type FooterDataType } from "@/Types/DataTypes";

import FooterComponent from "./Footer-Component/Footer.component";
import { getFooterData } from "@/db/db_connect";

async function Footer() {
  try {
    const response = (await getFooterData()) as FooterDataType;

    const { companyInfoData, items } = response[0];

    if (!companyInfoData || !items) {
      throw new Error("Missing required properties.");
    }

    const { title, description } = companyInfoData;

    return (
      <FooterComponent title={title} description={description} items={items} />
    );
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return (
      <FooterComponent
        title="Error"
        description="Could not load data."
        items={[]}
      />
    );
  }
}

export default Footer;
