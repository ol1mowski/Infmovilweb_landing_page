import { type HeaderDataType } from "@/utils/DataTypes/DataTypes";
import HamburgerMenuContextWrapper from "./HamburgerMenuContextWrapper/HamburgerMenu.contextWrapper";

async function HamburgerMenu() {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/header", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Fetching failed with status: ${response.status}`);
    }

    const fetchedItems: HeaderDataType = await response.json();

    if (!fetchedItems || !fetchedItems.length) {
      throw new Error("Fetching failed...");
    }

    const { items } = fetchedItems[0];

    if (!items) {
      throw new Error("Brak niektórych wymaganych właściwości.");
    }

    return <HamburgerMenuContextWrapper items={items}/>;
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error;
  }
}

export default HamburgerMenu;
