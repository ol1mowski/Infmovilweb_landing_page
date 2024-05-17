import { type HeaderDataType } from "@/Types/DataTypes";
import HamburgerMenuContextWrapper from "./HamburgerMenuContextWrapper/HamburgerMenu.contextWrapper";
import { getHeaderData } from "@/db/db_connect";

async function HamburgerMenu() {
  try {
    const response = (await getHeaderData()) as HeaderDataType;

    const { items } = response[0];

    if (!items) {
      throw new Error("Brak niektórych wymaganych właściwości.");
    }
    return <HamburgerMenuContextWrapper items={items} />;
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error;
  }
}

export default HamburgerMenu;
