import { fetchElements, getImageUrl } from "@/utils/http/http";
import AboutUSComponent from "./AboutUs-Component/AboutUs.component";
import { AboutUsDataType } from "@/utils/DataTypes/DataTypes";

interface DataType extends AboutUsDataType {
  id: string;
}

async function AboutUS() {
  const items = await fetchElements("InfmovilwebCMS");
  const aboutUsItem = items.find((item) => item.id === "AboutUs") as DataType;

  if (!aboutUsItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { category, title, description } = aboutUsItem.sectionInfo;
  const { button } = aboutUsItem;

  if (!category || !title || !description || !button) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const image: string[] = await getImageUrl("images/AboutUs");

  return (
    <AboutUSComponent
      image={image[0]}
      category={category}
      title={title}
      description={description}
      buttonText={button.buttonText}
      buttonIcon={button.buttonIcon}
    />
  );
}

export default AboutUS;
