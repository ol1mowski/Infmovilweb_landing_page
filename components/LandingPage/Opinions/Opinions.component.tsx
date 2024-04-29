import { fetchElements } from "@/utils/http/http";
import { OpinionsDataType } from "@/utils/DataTypes/DataTypes";
import OpinionsComponent from "./OpinionsComponent/OpinionsComponent.component";

interface DataType extends OpinionsDataType {
  id: string;
}

async function Opinions() {
  const fetchItems = await fetchElements("InfmovilwebCMS");
  const opinionsItem = fetchItems.find(
    (item) => item.id === "Opinions"
  ) as DataType;

  if (!opinionsItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { button, sectionData, Cards } = opinionsItem;

  if (!button || !sectionData || !Cards) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { category, title, score } = sectionData;
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
