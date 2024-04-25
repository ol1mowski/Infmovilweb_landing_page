import { fetchElements } from "@/utils/http/http";
import AboutUSComponent from "./AboutUs-Component/AboutUs.component";
import { StaticImageData } from "next/image";

async function AboutUS() {

  const items = await fetchElements("InfmovilwebCMS");

  type DataValue = {
    id: string;
    category: string;
    title: string;
    image: StaticImageData;
    description: string;
    button: { buttonText: string , buttonIcon: StaticImageData};
  };

  const aboutUsItem = items.find((item) => item.id === "AboutUs");

  if (!aboutUsItem) {
    throw new Error("Could not find");
  }

  const data: DataValue = aboutUsItem;

  const { category, title, description, button, image } = data;

  return (
    <AboutUSComponent
    aboutUsImage={image}
      category={category}
      title={title}
      description={description}
      buttonText={button.buttonText}
      buttonIcon={button.buttonIcon}
    />
  );
}

export default AboutUS;
