import { fetchElements } from "@/utils/http/http";
import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";

async function HeaderBarFetch() {
  type DataValue = {
    telephone: string;
    email: string;
  };

  const fetchItems = await fetchElements("InfmovilwebCMS");

  const headerBarItem = fetchItems.find((item) => item.id === "HeaderBar");

  if (!headerBarItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = headerBarItem;

  const { telephone, email } = data;


  return <HeaderInfoBarComponent telephone={telephone} email={email} />;
}

export default HeaderBarFetch;
