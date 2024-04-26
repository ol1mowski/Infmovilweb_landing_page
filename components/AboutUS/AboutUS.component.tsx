import { fetchElements } from "@/utils/http/http";
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

  const { category, title, image, description } = aboutUsItem.sectionInfo;
  const { button } = aboutUsItem;

  if (!category || !title || !image || !description || !button) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  return (
    <AboutUSComponent
      image={image}
      category={category}
      title={title}
      description={description}
      buttonText={button.buttonText}
      buttonIcon={button.buttonIcon}
    />
  );
}

export default AboutUS;
