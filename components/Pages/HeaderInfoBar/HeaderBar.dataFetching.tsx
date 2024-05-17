import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";
import { type HeaderBarDataType } from "@/Types/DataTypes";

import { getHeaderBarData } from "@/db/db_connect";

async function HeaderBarFetch() {
  try {
    const response = (await getHeaderBarData()) as HeaderBarDataType;

    const { companyContact, icons } = response[0];

    if (!companyContact || !icons) {
      throw new Error("Niektóre wymagane właściwości są brakujące.");
    }

    return (
      <HeaderInfoBarComponent companyContact={companyContact} icons={icons} />
    );
  } catch (error) {
    console.error("Error fetching header bar data:", error);
    throw error;
  }
}

export default HeaderBarFetch;
