import { getHeaderData } from "@/db/db_connect";
import HeaderComponent from "./HeaderComponent/HeaderComponent.component";
import { type HeaderDataType } from "@/Types/DataTypes";

const Header = async () => {
  try {
    const response = (await getHeaderData()) as unknown as HeaderDataType;

    const { items } = response[0];

    if (!items) {
      throw new Error("Error with DB data fetching");
    }

    return (
      <>
        <HeaderComponent items={items} />
      </>
    );
  } catch (error) {
    console.error("Data loading erro [-]", error);
    return <HeaderComponent items={[]} />;
  }
};

export default Header;
