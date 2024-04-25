import { fetchElements } from "@/utils/http/http";
import HeaderInfoBarComponent from "./HeaderBarComponent/HeaderInfoBar.component";

async function HeaderBarFetch() {
  type DataValue = {
    telephone: string;
    telephoneIcon: string;
    emailIcon: string;
    email: string;
    facebookIcon: string;
    linkedinIcon: string;
    shopIcon: string;
  };

  const fetchItems = await fetchElements("InfmovilwebCMS");

  const headerBarItem = fetchItems.find((item) => item.id === "HeaderBar");

  if (!headerBarItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = headerBarItem;

  const { telephone, email, telephoneIcon, emailIcon, facebookIcon, linkedinIcon, shopIcon } = data;


  return <HeaderInfoBarComponent telephone={telephone} email={email} telephoneIcon={telephoneIcon} emailIcon={emailIcon} facebookIcon={facebookIcon} linkedinIcon={linkedinIcon} shopIcon={shopIcon}/>;
}

export default HeaderBarFetch;
