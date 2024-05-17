import { type OpinionsDataType } from "@/Types/DataTypes";
import OpinionsComponent from "./OpinionsComponent/OpinionsComponent.component";
import { getOpinionsData } from "@/db/db_connect";

async function Opinions() {
  const fetchedItems = (await getOpinionsData()) as OpinionsDataType;

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
