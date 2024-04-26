import { fetchElements } from "@/utils/http/http";
import AboutUSComponent from "./AboutUs-Component/AboutUs.component";
import { type StaticImageData } from "next/image";

export type DataType = {
  id: string;
  category: string;
  title: string;
  image: StaticImageData;
  description: string;
  button: { buttonText: string; buttonIcon: StaticImageData };
};

async function AboutUS() {

  const items = await fetchElements("InfmovilwebCMS");
  const aboutUsItem = items.find((item) => item.id === "AboutUs") as DataType;

  if (!aboutUsItem) {
    throw new Error("No se encontró ningún artículo coincidente.");
  }

  const { category, title, image, description, button } = aboutUsItem;

  if (!category || !title || !image || !description || !button) {
    throw new Error("Faltan algunas propiedades requeridas.");
  }

  return (
    <AboutUSComponent
      image={image}
      category={category}
      title={title}
      description={description}
      button={button}
    />
  );
}

export default AboutUS;