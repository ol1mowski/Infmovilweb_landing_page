import { type OpinionsDataType } from "@/utils/DataTypes/DataTypes";
import OpinionsComponent from "./OpinionsComponent/OpinionsComponent.component";

async function fetchOpinionsData() {
  const response = await fetch("http://127.0.0.1:8080/api/opinions", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Fetching failed with status ${response.status}`);
  }
  return response.json();
}

async function Opinions() {
  const fetchedItems: OpinionsDataType = await fetchOpinionsData();

  const { sectionInfo, Cards, button } = fetchedItems[0];

  if (!Cards || !sectionInfo || !button) {
    throw new Error("Brakuje niektórych wymaganych właściwości.");
  }

  return (
    <OpinionsComponent
      sectionInfo={sectionInfo}
      button={button}
      Cards={Cards}
    />
  );
}

export default Opinions;
