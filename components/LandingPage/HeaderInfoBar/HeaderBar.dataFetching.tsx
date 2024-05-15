import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";
import { type HeaderBarDataType } from "@/utils/DataTypes/DataTypes";

async function HeaderBarFetch() {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/headerbar", {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Fetching failed with status: ${response.status}`);
    }

    const items: HeaderBarDataType = await response.json();

    if (!items.length) {
      throw new Error("No data received.");
    }

    const { companyContact, icons } = items[0];

    if (!companyContact || !icons) {
      throw new Error("Niektóre wymagane właściwości są brakujące.");
    }

    return <HeaderInfoBarComponent companyContact={companyContact} icons={icons} />;
  } catch (error) {
    console.error("Error fetching header bar data:", error);
    throw error; 
  }
}

export default HeaderBarFetch;