import HeaderComponent from "./HeaderComponent/HeaderComponent.component";
import { type HeaderDataType } from "@/utils/DataTypes/DataTypes";

const Header = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8080/api/header", {
      cache: "no-store",
    });
    const fetchedItems: HeaderDataType = await response.json();

    if (!fetchedItems || !fetchedItems.length) {
      throw new Error("Fetching failed...");
    }

    const { items } = fetchedItems[0];

    if (!items) {
      throw new Error("Brak niektórych wymaganych właściwości.");
    }

    return (
      <>
        <HeaderComponent items={items} />
      </>
    );
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error;
  }
};

export default Header;
