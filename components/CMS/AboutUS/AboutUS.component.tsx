import { fetchElements } from "@/utils/http/http";
import AboutUSComponent from "./AboutUs-Component/AboutUs.component";
import { AboutUsDataType } from "@/utils/DataTypes/DataTypes";

interface DataType extends AboutUsDataType {
  id: string;
}

async function AboutUS() {
  const fetchItems = await fetch("http://127.0.0.1:8080/api/aboutus");

  const fetchedItems: AboutUsDataType = await fetchItems.json();

  if (!fetchedItems) {
    throw new Error("Fetching failed...");
  }

  const { sectionInfo, button } = fetchedItems[0];

  if (!sectionInfo || !button) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  const { image, category, description, title } = sectionInfo;

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
