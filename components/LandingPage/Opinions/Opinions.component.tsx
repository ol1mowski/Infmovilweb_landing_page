import { OpinionsDataType } from "@/utils/DataTypes/DataTypes";
import OpinionsComponent from "./OpinionsComponent/OpinionsComponent.component";

async function Opinions() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/opinions");

  const fetchedItems: OpinionsDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  const { sectionInfo, Cards, button } = fetchedItems[0];

  if (!Cards || !sectionInfo) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title, score } = sectionInfo;
  const { buttonIcon, buttonText } = button;

  return (
    <OpinionsComponent
      category={category}
      title={title}
      score={score}
      buttonIcon={buttonIcon}
      buttonText={buttonText}
      Cards={Cards}
    />
  );
}

export default Opinions;
